// Setup type definitions for built-in Supabase Runtime APIs
import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "jsr:@supabase/supabase-js@2";
import { serveCors } from "../_shared/cors.ts";

const COURSE_TABLE = "Course";

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

      // Change the query based on filtering method, probably a better way to do this
      switch (filter) {
        case "rated":
          courseQuery = await supabase.rpc("select_rated_courses");
          break;
        default:
          throw Error("Unknown filtering method.");
      }
    } else {
      courseQuery = await supabase.from(COURSE_TABLE).select("*").order("course_code", { ascending: true });
    }

    // Make sure everything worked
    if (courseQuery.error) {
      throw courseQuery.error;
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
