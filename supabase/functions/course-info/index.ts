// Setup type definitions for built-in Supabase Runtime APIs
import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "jsr:@supabase/supabase-js@2";
import { serveCors } from "../_shared/cors.ts";

const COURSE_TABLE = "Course";
const DEVELOPS_TABLE = "Develops";

async function courseInfo(req: Request): Promise<Response> {
  const supabase = createClient(
    Deno.env.get("SUPABASE_URL") ?? "",
    Deno.env.get("SUPABASE_ANON_KEY") ?? "",
  );

  // This functions has optional params that can be specified in the URL
  // We want to grab these to ensure we're giving back the right data
  const url = new URL(req.url);
  const filter = url.searchParams.get("filter"); // Can be one of "rated"

  try {
    // We're going to try and populate this
    let courseQuery;

    if (filter) {
      console.log(`Filtering courses for '${filter}'`);

      // We only need the FK/PKs from the Develops table as we just need to know if the course has been rated 
      // Currently all filters require knowledge of course ratings so we will always need to pull this data
      const developsQuery = await supabase.from(DEVELOPS_TABLE).select("department", "course_code");
      if (developsQuery.error) {
        throw developsQuery.error;
      }

      // Change the query based on filtering method, probably a better way to do this
      switch (filter) {
        case "rated":
          courseQuery = await supabase.from(COURSE_TABLE).select("*").filter("department", "in", developsQuery.data);
          break;
        default:
          throw Error("Unknown filtering method.");
      }

      // Make sure everything worked
      if (courseQuery.error) {
        throw courseQuery.error;
      }
    }

    return new Response(JSON.stringify({ data: courseQuery.data }), {
      headers: { "Content-Type": "application/json" },
      status: 200,
    });
  } catch (e) {
    console.error(`Caught client exception: ${e}`);
    return new Response(String(e), { status: 500 });
  }
}

serveCors(courseInfo);
