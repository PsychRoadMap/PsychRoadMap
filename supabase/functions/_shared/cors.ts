// deno-lint-ignore-file prefer-const
// https://supabase.com/docs/guides/functions/cors
export const corsHeaders = {
  "Access-Control-Allow-Origin": "*", // "https://psychroadmap.netlify.app",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
};

type edgeFunction = (req: Request) => Promise<Response>;

export function serveCors(callback: edgeFunction) {
  Deno.serve(async (req) => {
    // This is needed if you're planning to invoke your function from a browser.
    if (req.method === "OPTIONS") {
      return new Response("ok", { headers: corsHeaders });
    }

    // Append CORS values to the response headers
    let resp: Response = await callback(req);
    for (let [key, value] of Object.entries(corsHeaders)) {
      resp.headers.append(key, value);
    }

    //resp.headers.set()
    //resp.headers = {...corsHeaders, resp.headers};

    return resp;
  });
}
