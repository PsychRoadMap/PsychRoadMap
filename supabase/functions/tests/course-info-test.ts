// Import required libraries and modules
//import { assert, assertEquals } from 'https://deno.land/std@0.192.0/testing/asserts.ts'
//import { createClient, SupabaseClient } from 'jsr:@supabase/supabase-js@2'

// Will load the .env file to Deno.env
import 'https://deno.land/x/dotenv@v3.2.2/load.ts'

// Set up the configuration for the Supabase client
const SUPABASE_URL = Deno.env.get('SUPABASE_URL') ?? ''
const ENDPOINT = "functions/v1/course-info";

// Test the 'hello-world' function
async function testCourseFilter() { 
    const resp = await fetch(SUPABASE_URL + ENDPOINT);
    console.log(resp.json());
}

// Register and run the tests
Deno.test('Client Creation Test', testCourseFilter)