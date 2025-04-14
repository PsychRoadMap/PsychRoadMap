import "jsr:@supabase/functions-js/edge-runtime.d.ts"
import { serveCors } from "../_shared/cors.ts";
import { databaseBackup } from "./backup.ts";

async function handleBackup(req: Request): Promise<Response> {
  const method = req.method
  switch(method) {
    case "GET":
      return databaseBackup()
    case "POST":

    default:
      return new Response("Method not found", { status: 405 })
  }
}

async function handleCourse(req: Request): Promise<Response> {
  return new Response("TODO", { status: 500 });
}

async function handleSubRoutes(req: Request): Promise<Response> {
  const url = new URL(req.url);
  const command = url.pathname.split('/').pop();

  try {
    switch(command) {
      case "backup":
        return handleBackup(req);
      case "course":
        return handleCourse(req);
      default:
        return new Response(`REST route not found ${command}`, { status: 404 })
    }
  } catch (e) {
    return new Response(`Internal server error: ${e}`, { status: 500 });
  }
}

serveCors(handleSubRoutes)

// import { createClient } from 'jsr:@supabase/supabase-js@2'

// Deno.serve(async (req: Request) => {

//   const supabaseClient = createClient(
//     Deno.env.get('SUPABASE_URL') ?? '',
//     Deno.env.get('SUPABASE_ANON_KEY') ?? '',
//   );

//   // Get the session or user object
//   const authHeader = req.headers.get('Authorization')!;
//   const token = authHeader.replace('Bearer ', '');
//   const { data } = await supabaseClient.auth.getUser(token);
//   const user = data.user
// })