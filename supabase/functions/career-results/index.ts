import "jsr:@supabase/functions-js/edge-runtime.d.ts"
import { createClient } from "jsr:@supabase/supabase-js@2";
import { serveCors } from "../_shared/cors.ts";
import ONetWS from "../_shared/onet-ws.ts";

type CoursesParam = { department: string, course_code: number };
type LVRating = { mastery_name: string, mastery_domain: string, lv_rating: number };

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
    let ratings: LVRating[] = [];
    courses.forEach(async (course: CoursesParam) => {
      let { data, error } = await supabase.from("Develops")
        .select("mastery_name", "mastery_domain", "lv_rating")
        .eq("course_code", course.course_code)
        .eq("course_code", course.course_code);

      if (error) throw error;

      // Append results
      ratings += data;
    });

    console.log(ratings);
    ratings.forEach((rating: LVRating, _idx: number) => {
      console.log(rating);
    });

    const onet = new ONetWS(ONET_USERNAME, ONET_PASSWORD);

    const data = await onet.db_get("knowledge", "filter=scale_id.eq.LV", "filter=data_value.lte.5");

    return new Response(
      JSON.stringify(data),
      { headers: { "Content-Type": "application/json" } },
    )
  } catch (e) {
    console.error(`Caught client exception: ${e}`);
    return new Response(String(e), { status: 500 });
  }
}

serveCors(careerResults)