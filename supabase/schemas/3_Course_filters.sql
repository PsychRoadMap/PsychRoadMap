-- This SQL file contains the function to select courses based on the department and course code from the "Develops" table.
create or replace function select_rated_courses() returns setof "public"."Course" as $$
    select * 
    from "public"."Course" 
    where "public"."Course"."department" IN (
        select "public"."Develops"."department"
        from "public"."Develops" 
    ) and "public"."Course"."course_code" IN (
        select "public"."Develops"."course_code"
        from "public"."Develops" 
    );
$$ language sql;