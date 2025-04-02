// Import required libraries and modules
import { assert } from 'https://deno.land/std@0.192.0/testing/asserts.ts'
import { createClient } from "jsr:@supabase/supabase-js@2";

// Will load the .env file to Deno.env
import 'https://deno.land/x/dotenv@v3.2.2/load.ts'

// Set up the configuration for the Supabase client
const SUPABASE_URL = Deno.env.get("SUPABASE_URL") ?? "http://localhost:54321"
const SUPABASE_ANON_KEY = Deno.env.get("SUPABASE_ANON_KEY") ?? "";

// The endpoint we're testing
const ENDPOINT = "/functions/v1/career-results";

// Register and run the tests
Deno.test("Test career results", async () => {
    const courses = [
        {
            department: "PSY",
            course_code: 15700,
        },
        {
            department: "PSY",
            course_code: 18100,
        },
        {
            department: "PSY",
            course_code: 39012,
        },
    ]

    let response = await fetch(SUPABASE_URL + ENDPOINT, {
        method: "POST",
        body: JSON.stringify({ courses }),
    });

    let results = await response.json();
    console.log(results);
    assert(false, "");
})