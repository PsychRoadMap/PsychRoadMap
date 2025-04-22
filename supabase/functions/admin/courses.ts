import { anonClient } from "../_shared/supabase.ts";

const COURSE_TABLE = "Course";
const MASTERY_TABLE = "Mastery";
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
    const { data: _dataCourse, courseError } = await anonClient
        .from(COURSE_TABLE)
        .insert({
            department: department,
            course_code: course_code,
            course_name: course_name,
            course_description: course_description,
            course_cluster: course_cluster
        });

    if (courseError) {
        throw courseError
    }

    for (const [domain, ratings] of Object.entries(mastery_ratings)) {
        for (const [mastery, rating] of Object.entries(ratings)) {
            const { data: _dataMastery, masteryError } = await anonClient
                .from(MASTERY_TABLE)
                .insert({ mastery_domain: domain, mastery_name: mastery });

            if (masteryError) {
                throw masteryError
            }

            const calculatedScore = (rating / 100) * 7; // Calculate the score

            // Insert new develops entry
            const { data: _dataDevelops, developsError } = await anonClient
                .from(DEVELOPS_TABLE)
                .insert({
                    department: department,
                    course_code: course_code,
                    mastery_domain: domain,
                    mastery_name: mastery,
                    lv_rating: calculatedScore
                });

            if (developsError) {
                throw developsError
            }
        }
    }

    return new Response("Success", { status: 200 });
}

export async function updateCourse(req: Request, department: string, course_code: number): Promise<Response> {
    type UpdateParam = { course_name: string, course_description: string, course_cluster: string, mastery_ratings: MasteryParam }
    const { course_name, course_description, course_cluster, mastery_ratings }: UpdateParam = await req.json();

    // Insert new course
    const { data: _dataCourse, courseError } = await anonClient
        .from(COURSE_TABLE)
        .update({
            course_name: course_name,
            course_description: course_description,
            course_cluster: course_cluster
        }).match({ department, course_code });

    if (courseError) {
        throw courseError
    }

    for (const [domain, ratings] of Object.entries(mastery_ratings)) {
        for (const [mastery, rating] of Object.entries(ratings)) {
            const { data: _dataMastery, masteryError } = await anonClient
                .from(MASTERY_TABLE)
                .insert({ mastery_domain: domain, mastery_name: mastery });

            if (masteryError) {
                throw masteryError
            }

            const calculatedScore = (rating / 100) * 7; // Calculate the score

            // Insert new develops entry
            const { data: _dataDevelops, developsError } = await anonClient
                .from(DEVELOPS_TABLE)
                .update({
                    lv_rating: calculatedScore
                }).match({
                    department,
                    course_code,
                    mastery_domain: domain,
                    mastery_name: mastery
                });

            if (developsError) {
                throw developsError
            }
        }
    }

    return new Response("Success", { status: 200 });
}

export async function deleteCourse(req: Request, department: string, course_code: number): Promise<Response> {
    // Insert new course
    const { data: _dataCourse, courseError } = await anonClient
        .from(COURSE_TABLE)
        .delete()
        .match({ department, course_code });

    if (courseError) {
        throw courseError
    }

    // Insert new develops entry
    const { data: _dataDevelops, developsError } = await anonClient
        .from(DEVELOPS_TABLE)
        .delte()
        .match({
            department,
            course_code,
        });

    if (developsError) {
        throw developsError
    }

    return new Response("Success", { status: 200 });
}
