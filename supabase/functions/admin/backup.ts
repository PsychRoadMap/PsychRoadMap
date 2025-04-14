import "jsr:@supabase/functions-js/edge-runtime.d.ts"
import { createClient } from "jsr:@supabase/supabase-js@2";

// const DB_TABLES = [ "Course", "Mastery", "Develops" ]

export function databaseBackup() {
    const supabase = createClient(
        Deno.env.get("SUPABASE_URL") ?? "",
        Deno.env.get("SUPABASE_ANON_KEY") ?? "",
    );
    
    const { data, error } = supabase.from("Course").select("*");
    
    if(error) {
        console.log(error);
        throw error
    }

    console.log(JSON.stringify(data));
    return new Response(JSON.stringify(data));
}