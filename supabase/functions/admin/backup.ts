import "jsr:@supabase/functions-js/edge-runtime.d.ts"
import { anonClient } from "../_shared/supabase.ts";

const DB_TABLES = [ "Course", "Mastery", "Develops" ];

export async function databaseBackup(): Promise<Response> {
    const backup = {};
    for(const dbName of DB_TABLES) {
        console.log(`Adding backup for table ${dbName}`);
        
        const { data, error } = await anonClient.from(dbName).select("*");

        if(error) {
            console.log(error);
            throw error;
        }

        Object.assign(backup, {[dbName]: data});
    }
    
    return new Response(JSON.stringify(backup));
}

export async function databaseRestore(backup: any): Promise<Response> {
    // const supabase = createClient(
    //     Deno.env.get("SUPABASE_URL") ?? "",
    //     Deno.env.get("SUPABASE_ANON_KEY") ?? "",
    // );

    for(const [dbName, db] of backup) {
        console.log(dbName);
        console.log(db);
    }
    
    return new Response(JSON.stringify({}));
}