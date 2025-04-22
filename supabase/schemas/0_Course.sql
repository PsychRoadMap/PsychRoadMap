-- Course table
create table if not exists "public"."Course" (
    "department" "text" not null,
    "course_code" numeric not null,
    "course_cluster" "text" not null,
    "course_name" "text" default 'New Course'::"text" not null,
    "course_description" "text" default 'No description available.'::"text" not null
);

ALTER TABLE ONLY "public"."Course"
    ADD CONSTRAINT "Course_pkey" PRIMARY KEY ("department", "course_code");

ALTER TABLE "public"."Course" OWNER TO "postgres";

ALTER TABLE "public"."Course" DISABLE ROW LEVEL SECURITY;

COMMENT ON TABLE "public"."Course" IS 'Lindenwood course metadata';

