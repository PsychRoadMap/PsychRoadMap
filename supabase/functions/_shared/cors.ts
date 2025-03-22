// deno-lint-ignore-file prefer-const
// https://supabase.com/docs/guides/functions/cors
export const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

type edgeFunction = (req: Request) => BodyInit | null;

export function serveCors(func: edgeFunction) {
  Deno.serve(async (req) => {
    // This is needed if you're planning to invoke your function from a browser.
    if (req.method === "OPTIONS") {
      return new Response("ok", { headers: corsHeaders });
    }

    let data = await func(req);

    return new Response(data, {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  });
}
