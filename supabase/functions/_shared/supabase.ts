import { createClient } from "jsr:@supabase/supabase-js@2";

export const anonClient = createClient(
    Deno.env.get("SUPABASE_URL") ?? "",
    Deno.env.get("SUPABASE_ANON_KEY") ?? "",
);