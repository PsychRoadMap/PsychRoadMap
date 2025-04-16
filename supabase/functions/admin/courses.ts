import { anonClient } from "../_shared/supabase.ts";

const COURSE_TABLE = "Course";
const DEVELOPS_TABLE = "Develops";

type MasteryParam = { [domain: string]: { [mastery: string]: number } } 

export async function getCourse(_req: Request, department: string, course_code: number): Promise<Response> {
    // Get course details
    const { data: courseData, error: courseError } = await anonClient
        .from(COURSE_TABLE)
        .select('*')
        .match({ department, course_code });

    if (courseError) {
        throw courseError;
    }

    // Get develops details
    const { data: developsData, error: developsError } = await anonClient
        .from(DEVELOPS_TABLE)
        .select('*')
        .match({ department, course_code });

    if (developsError) {
        throw developsError;
    }

    // Combine course and develops data to final return object
    const returnData = {
        course: courseData[0],
        develops: developsData,
    };

    return new Response(JSON.stringify(returnData), { status: 200 });
}

export async function createCourse(req: Request, department: string, course_code: number): Promise<Response> {
    type CreateParam = { course_name: string, course_description: string, course_cluster: string, mastery_ratings: MasteryParam }
    const { course_name, course_description, course_cluster, mastery_ratings }: CreateParam = await req.json();

    // Insert new course
    const { data: _data, error } = await anonClient
    .from(COURSE_TABLE)
    .insert({
        department: department, 
        course_code: course_code, 
        course_name: course_name, 
        course_description: course_description, 
        course_cluter: course_cluster 
    });

    if (error) {
        throw error
    }

    for(const [domain, ratings] of Object.entries(mastery_ratings)) {
       console.log(domain) 
       console.log(ratings) 
    }

    // const { mastery_name, mastery_domain } = await req.json();

    // // Insert new mastery
    // const { data, error } = await supabase
    //     .from('mastery')
    //     .insert([{ mastery_name, mastery_domain }]);

    // if (error) {
    //     return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
    // }
    // return { statusCode: 201, body: JSON.stringify(data) };
    // const { lv_rating, department, course_code, mastery_name, mastery_domain } = await req.json();
    // const calculatedScore = (lv_rating / 100) * 7; // Calculate the score

    // // Insert new develops entry
    // const { data, error } = await supabase
    //     .from('develops')
    //     .insert([{ department, course_code, mastery_name, mastery_domain, lv_rating: calculatedScore }]);

    // if (error) {
    //     return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
    // }
    // return { statusCode: 201, body: JSON.stringify(data) };
    return new Response("TODO", { status: 500 });
}

export async function updateCourse(req: Request, department: string, course_code: number): Promise<Response> {

    // const { course_name, course_description, course_cluster, department, course_code } = await req.json();

    // // Update existing course
    // const { data, error } = await supabase
    //     .from('courses')
    //     .update({ course_name, course_description, course_cluster })
    //     .match({ department, course_code });

    // if (error) {
    //     return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
    // }
    // return { statusCode: 200, body: JSON.stringify(data) };

    return new Response("TODO", { status: 500 });
    // const { mastery_name, mastery_domain } = await req.json();

    // // Update existing mastery
    // const { data, error } = await supabase
    //     .from('mastery')
    //     .update({ mastery_name, mastery_domain })
    //     .match({ mastery_name, mastery_domain });

    // if (error) {
    //     return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
    // }
    // return { statusCode: 200, body: JSON.stringify(data) };
    // const { lv_rating, department, course_code, mastery_name, mastery_domain } = await req.json();
    // const calculatedScore = (lv_rating / 100) * 7; // Recalculate the score

    // // Update existing develops entry
    // const { data, error } = await supabase
    //     .from('develops')
    //     .update({ lv_rating: calculatedScore })
    //     .match({ department, course_code, mastery_name, mastery_domain });

    // if (error) {
    //     return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
    // }
    // return { statusCode: 200, body: JSON.stringify(data) };

}

export async function deleteCourse(req: Request, department: string, course_code: number): Promise<Response> {

    // const { department, course_code } = await req.json();

    // // Delete course
    // const { error } = await supabase
    //     .from('courses')
    //     .delete()
    //     .match({ department, course_code });

    // if (error) {
    //     return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
    // }
    // return { statusCode: 204, body: null };
    return new Response("TODO", { status: 500 });
    // const { mastery_name, mastery_domain } = await req.json();

    // // Delete mastery
    // const { error } = await supabase
    //     .from('mastery')
    //     .delete()
    //     .match({ mastery_name, mastery_domain });

    // if (error) {
    //     return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
    // }
    // return { statusCode: 204, body: null };

    // const { department, course_code, mastery_name, mastery_domain } = await req.json();

    // // Delete develops entry
    // const { error } = await supabase
    //     .from('develops')
    //     .delete()
    //     .match({ department, course_code, mastery_name, mastery_domain });

    // if (error) {
    //     return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
    // }
    // return { statusCode: 204, body: null };

}
