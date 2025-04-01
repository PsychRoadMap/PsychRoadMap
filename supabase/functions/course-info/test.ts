// Import required libraries and modules
import { assert } from 'https://deno.land/std@0.192.0/testing/asserts.ts'
import { createClient } from "jsr:@supabase/supabase-js@2";

// Will load the .env file to Deno.env
import 'https://deno.land/x/dotenv@v3.2.2/load.ts'

// Set up the configuration for the Supabase client
const SUPABASE_URL = Deno.env.get("SUPABASE_URL") ?? "http://localhost:54321"
const SUPABASE_ANON_KEY = Deno.env.get("SUPABASE_ANON_KEY") ?? "";

// The endpoint we're testing
const ENDPOINT = "/functions/v1/course-info";

// Register and run the tests
Deno.test("Test course filters", async () => {
    // Create supabase client for test
    if (!SUPABASE_URL) throw new Error('supabaseUrl is required.'); 
    if (!SUPABASE_ANON_KEY) throw new Error('supabaseKey is required.');
    const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, { 
        auth: { 
            autoRefreshToken: false, 
            persistSession: false, 
            detectSessionInUrl: false, 
        }, 
    });

    // Call the endpoint with the filter parameter
    const resp = await fetch(SUPABASE_URL + ENDPOINT + "?filter=rated");
    const ratedCourses = await resp.json();

    // Query the Develops table from Supabase
    const { data: developsCourses, error } = await supabase
        .from('Develops')
        .select('*');

    if (error) {
        throw new Error(`Error fetching data from Develops table: ${error.message}`);
    }

    // Assert that all ratedCourses are present in the Develops table
    for (const course of ratedCourses) {
        const exists = developsCourses.some((developsCourse: any) => developsCourse.course_code === course.course_code
            && developsCourse.department === course.department);
        assert(exists, `Course ${course.department}-${course.course_code} is not present in the Develops table`);
    }
})