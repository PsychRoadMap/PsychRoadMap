import "jsr:@supabase/functions-js/edge-runtime.d.ts"
import { createClient } from "jsr:@supabase/supabase-js@2";
import { serveCors } from "../_shared/cors.ts";
import { ONetWS, ONetCareer } from "../_shared/onet-ws.ts";

type LVRating = { mastery_name: string, mastery_domain: string, lv_rating: number };

const DEVELOPS_TABLE = "Develops";

const ONET_USERNAME = Deno.env.get("ONET_USERNAME") ?? "";
const ONET_PASSWORD = Deno.env.get("ONET_PASSWORD") ?? "";

const SUPABASE_URL = Deno.env.get("SUPABASE_URL") ?? "";
const SUPABASE_ANON_KEY = Deno.env.get("SUPABASE_ANON_KEY") ?? "";

async function careerResults(req: Request): Promise<Response> {
  try {
    // We need to run db queries in this function
    const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

    // Pull request parameters
    const { courses } = await req.json();

    // Collect ratings for selected courses from db
    const ratings: LVRating[] = [];
    for (const course of courses) {
      const { data, error } = await supabase.from(DEVELOPS_TABLE)
        .select("mastery_name, mastery_domain, lv_rating")
        .eq("course_code", course.course_code)
        .eq("course_code", course.course_code);

      if (error) throw error;

      // Append results
      ratings.push(...data as LVRating[]);
    }

    // Find highest rating for each mastery
    const highestRatings = new Map<string, LVRating>();
    for (const rating of ratings) {
      const key = `${rating.mastery_name}-${rating.mastery_domain}`;
      if (!highestRatings.has(key) || highestRatings.get(key)!.lv_rating < rating.lv_rating) {
        highestRatings.set(key, rating);
      }
    }

    // TODO? filter out masteries with value of 0
    // TODO? should we care about all requirements?

    // O*NET REST API helper
    const onet = new ONetWS(ONET_USERNAME, ONET_PASSWORD);

    //
    const careerResults: ONetCareer[] = [];
    for (const [key, value] of highestRatings.entries()) {
      const [mastery_name, mastery_domain] = key.split("-");

      const data = await onet.db_get(
        mastery_domain.toLowerCase().split(' ').join('_'),
        "filter=scale_id.eq.LV",
        `filter=data_value.lte.${value.lv_rating}`,
        `filter=element_name.eq.${mastery_name}`
      );

      if (Object.hasOwn(data, "row")) {
        careerResults.push(...data["row"]);
      }
    }

    // Deduplicate results and count the occurences of each career
    const numMastery = highestRatings.size;
    const mapCareer = new Map<string, { count: number, data: ONetCareer }>();
    for (const row of careerResults) {
      if (mapCareer.has(row["title"])) {
        mapCareer.get(row["title"])!["count"] += 1;
      } else {
        mapCareer.set(row["title"], {
          count: 1,
          data: row,
        });
      }
    }

    // Remove map entries with count < numMastery
    const filteredCareerResults = Array.from(mapCareer.entries())
      .filter(([_, value]) => value.count >= numMastery)
      .map(([_, value]) => {
        const { count, data } = value;
        return data;
      });

    console.log(filteredCareerResults);
    return new Response(
      JSON.stringify({ results: filteredCareerResults }),
      { headers: { "Content-Type": "application/json" } },
    )
  } catch (e) {
    console.error(`Caught client exception: ${e}`);
    return new Response(String(e), { status: 500 });
  }
}

serveCors(careerResults)
