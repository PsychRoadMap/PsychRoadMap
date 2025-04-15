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

/* To invoke locally:

  1. Run `supabase start` (see: https://supabase.com/docs/reference/cli/supabase-start)
  2. Make an HTTP request:

  curl -i --location --request POST 'http://127.0.0.1:54321/functions/v1/admin' \
    --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0' \
    --header 'Content-Type: application/json' \
    --data '{"name":"Functions"}'

*/
