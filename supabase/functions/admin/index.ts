// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.


import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "jsr:@supabase/supabase-js@2";

const SUPABASE_URL = Deno.env.get("SUPABASE_URL") ?? "";
const SUPABASE_ANON_KEY = Deno.env.get("SUPABASE_ANON_KEY") ?? "";
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

Deno.serve(async (req) => {
  const url = new URL(req.url);
  const path = url.pathname;

  // Route: /admin/courses
  if (path.startsWith("/admin/courses")) {
    if (req.method === "POST") {
      const {course_name, course_description, course_cluster, department, course_code } = await req.json();

      // Check if the course already exists
      const { data: existingCourse, error: checkError } = await supabase
        .from('courses')
        .select('*')
        .match({ department, course_code });

      if (checkError) {
        return { statusCode: 500, body: JSON.stringify({ error: checkError.message }) };
      }

      if (existingCourse.length > 0) {
        return { statusCode: 409, body: JSON.stringify({ error: "Course already exists." }) };
      }

      // Insert new course
      const { data, error } = await supabase
        .from('courses')
        .insert([{ course_name, department, course_code, course_description, course_cluster }]);

      if (error) {
        return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
      }
      return { statusCode: 201, body: JSON.stringify(data) };

    } else if (req.method === "PUT" || req.method === "PATCH") {
      const { course_name, course_description, course_cluster, department, course_code } = await req.json();

      // Update existing course
      const { data, error } = await supabase
        .from('courses')
        .update({course_name, course_description, course_cluster })
        .match({ department, course_code });

      if (error) {
        return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
      }
      return { statusCode: 200, body: JSON.stringify(data) };

    } else if (req.method === "DELETE") {
      const { department, course_code } = await req.json();

      // Delete course
      const { error } = await supabase
        .from('courses')
        .delete()
        .match({ department, course_code });

      if (error) {
        return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
      }
      return { statusCode: 204, body: null };

    } else if (req.method === "GET") {
      const { department, course_code } = await req.json();

      // Get course details
      const { data, error } = await supabase
        .from('courses')
        .select('*')
        .match({ department, course_code });

      if (error) {
        return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
      }
      return { statusCode: 200, body: JSON.stringify(data) };
    }
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

  // Route: /admin/mastery
  else if (path.startsWith("/admin/mastery")) {
    if (req.method === "POST") {
      const { mastery_name, mastery_domain } = await req.json();

      // Insert new mastery
      const { data, error } = await supabase
        .from('mastery')
        .insert([{ mastery_name, mastery_domain }]);

      if (error) {
        return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
      }
      return { statusCode: 201, body: JSON.stringify(data) };

    } else if (req.method === "PUT" || req.method === "PATCH") {
      const { mastery_name, mastery_domain } = await req.json();

      // Update existing mastery
      const { data, error } = await supabase
        .from('mastery')
        .update({ mastery_name, mastery_domain })
        .match({ mastery_name, mastery_domain });

      if (error) {
        return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
      }
      return { statusCode: 200, body: JSON.stringify(data) };

    } else if (req.method === "DELETE") {
      const { mastery_name, mastery_domain } = await req.json();

      // Delete mastery
      const { error } = await supabase
        .from('mastery')
        .delete()
        .match({ mastery_name, mastery_domain });

      if (error) {
        return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
      }
      return { statusCode: 204, body: null };

    } else if (req.method === "GET") {
      const { mastery_name, mastery_domain } = await req.json();

      // Get mastery details
      const { data, error } = await supabase
        .from('mastery')
        .select('*')
        .match({ mastery_name, mastery_domain });

      if (error) {
        return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
      }
      return { statusCode: 200, body: JSON.stringify(data) };
    }
  }

  // Route: /admin/develops
  else if (path.startsWith("/admin/develops")) {
    if (req.method === "POST") {
      const { lv_rating, department, course_code, mastery_name, mastery_domain } = await req.json();
      const calculatedScore = (lv_rating / 100) * 7; // Calculate the score

      // Insert new develops entry
      const { data, error } = await supabase
        .from('develops')
        .insert([{ department, course_code, mastery_name, mastery_domain, lv_rating: calculatedScore }]);

      if (error) {
        return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
      }
      return { statusCode: 201, body: JSON.stringify(data) };

    } else if (req.method === "PUT" || req.method === "PATCH") {
      const { lv_rating, department, course_code, mastery_name, mastery_domain } = await req.json();
      const calculatedScore = (lv_rating / 100) * 7; // Recalculate the score

      // Update existing develops entry
      const { data, error } = await supabase
        .from('develops')
        .update({ lv_rating: calculatedScore })
        .match({ department, course_code, mastery_name, mastery_domain });

      if (error) {
        return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
      }
      return { statusCode: 200, body: JSON.stringify(data) };

    } else if (req.method === "DELETE") {
      const { department, course_code, mastery_name, mastery_domain } = await req.json();

      // Delete develops entry
      const { error } = await supabase
        .from('develops')
        .delete()
        .match({ department, course_code, mastery_name, mastery_domain });

      if (error) {
        return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
      }
      return { statusCode: 204, body: null };

    } else if (req.method === "GET") {
      const { department, course_code, mastery_name, mastery_domain } = await req.json();

      // Get develops details
      const { data, error } = await supabase
        .from('develops')
        .select('*')
        .match({ department, course_code, mastery_name, mastery_domain });

      if (error) {
        return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
      }
      return { statusCode: 200, body: JSON.stringify(data) };
    }
  }

  // Route: /admin/backup
  else if (path === "/admin/backup") {
    if (req.method === "GET") {
      return { statusCode: 200, body: JSON.stringify({ message: "Backup logic not implemented." }) };
    } else if (req.method === "POST") {
      return { statusCode: 200, body: JSON.stringify({ message: "Restore logic not implemented." }) };
    }
  }

  return { statusCode: 404, body: JSON.stringify({ error: "Not Found" }) };
});
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