set check_function_bodies = off;

CREATE OR REPLACE FUNCTION public.select_rated_courses()
 RETURNS SETOF "Course"
 LANGUAGE sql
AS $function$
    select * 
    from "public"."Course" 
    where "public"."Course"."department" IN (
        select "public"."Develops"."department"
        from "public"."Develops" 
    ) and "public"."Course"."course_code" IN (
        select "public"."Develops"."course_code"
        from "public"."Develops" 
    );
$function$
;


