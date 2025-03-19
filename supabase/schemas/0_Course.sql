-- Course table
CREATE TABLE IF NOT EXISTS "public"."Course" (
    "department" "text" NOT NULL,
    "course_code" numeric NOT NULL,
    "course_cluster" "text" NOT NULL,
    "course_name" "text" DEFAULT 'New Course'::"text" NOT NULL,
    "course_description" "text" DEFAULT 'No description available.'::"text" NOT NULL
);

ALTER TABLE ONLY "public"."Course"
    ADD CONSTRAINT "Course_pkey" PRIMARY KEY ("department", "course_code");

ALTER TABLE "public"."Course" OWNER TO "postgres";

ALTER TABLE "public"."Course" ENABLE ROW LEVEL SECURITY;

COMMENT ON TABLE "public"."Course" IS 'Lindenwood course metadata';

