import "jsr:@supabase/functions-js/edge-runtime.d.ts"
import { createClient } from "jsr:@supabase/supabase-js@2";
import { serveCors } from "../_shared/cors.ts";
import ONetWS from "../_shared/onet-ws.ts";

const ONET_USERNAME = Deno.env.get("ONET_USERNAME") ?? "";
const ONET_PASSWORD = Deno.env.get("ONET_PASSWORD") ?? "";

async function careerResults(req: Request): Promise<Response> {
  // const supabase = createClient(
  //   Deno.env.get("SUPABASE_URL") ?? "",
  //   Deno.env.get("SUPABASE_ANON_KEY") ?? "",
  // );

  // let selectedCourses = await req.json();
  let onet = new ONetWS(ONET_USERNAME, ONET_PASSWORD);
  let data = await onet.db_get("knowledge", "filter=scale_id.eq.LV", "filter=data_value.lte.5");
  //let data = await onet.db_get("database/rows/knowledge?filter=scale_id.eq.LV&filter=data_value.lte.5");
  
  console.log(data);

  return new Response(
    JSON.stringify(data),
    { headers: { "Content-Type": "application/json" } },
  )
}

serveCors(careerResults)