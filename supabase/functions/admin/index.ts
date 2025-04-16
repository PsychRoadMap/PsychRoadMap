import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { serveCors } from "../_shared/cors.ts";
import { databaseBackup, databaseRestore } from "./backup.ts";
import { getCourse, createCourse, updateCourse, deleteCourse } from "./courses.ts";

async function handleBackup(req: Request): Promise<Response> {
  const method = req.method
  switch (method) {
    case "GET":
      return databaseBackup();

    case "POST":
      return databaseRestore(await req.json());

    default:
      return new Response("Method not found", { status: 405 })
  }
}

async function handleCourses(req: Request): Promise<Response> {
  const method = req.method;
  const url = new URL(req.url);
  const [department, course_code] = url.pathname.split("/").pop()!.split("-"); // Extract course info from url

  switch(method) {
    case "GET":
      return getCourse(req, department, parseInt(course_code));

    case "POST":
      return createCourse(req, department, parseInt(course_code));

    case "PUT":
    case "PATCH":
      return updateCourse(req, department, parseInt(course_code));

    case "DELETE":
      return deleteCourse(req, department, parseInt(course_code));

    default:
      return new Response("Method not found", { status: 405 });
  }
}

async function handleSubRoutes(req: Request): Promise<Response> {
  const url = new URL(req.url);
  const path = url.pathname;
  console.log(path)

  try {
    if (path.startsWith("/admin/backup"))
      return handleBackup(req);
    else if (path.startsWith("/admin/courses"))
      return handleCourses(req);
    else
      return new Response(`REST route not found ${path}`, { status: 404 })
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