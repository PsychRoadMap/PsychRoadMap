CREATE TABLE IF NOT EXISTS "public"."Course" (
    "department" "text" NOT NULL,
    "course_code" numeric NOT NULL,
    "course_name" "text" DEFAULT 'New Course'::"text" NOT NULL,
    "course_description" "text" DEFAULT 'No description available.'::"text" NOT NULL
);

ALTER TABLE "public"."Course" OWNER TO "postgres";

COMMENT ON TABLE "public"."Course" IS 'Lindenwood course metadata';

CREATE TABLE IF NOT EXISTS "public"."Mastery" (
    "mastery_name" "text" NOT NULL,
    "mastery_domain" "text" NOT NULL,
    "department" "text" NOT NULL,
    "course_code" numeric NOT NULL,
    "lv_rating" double precision NOT NULL
);


ALTER TABLE "public"."Mastery" OWNER TO "postgres";


COMMENT ON TABLE "public"."Mastery" IS 'O*Net Knowledge, Skills, Abilities, and Work Activities metadata';



ALTER TABLE ONLY "public"."Course"
    ADD CONSTRAINT "Course_pkey" PRIMARY KEY ("department", "course_code");



ALTER TABLE ONLY "public"."Mastery"
    ADD CONSTRAINT "Mastery_pkey" PRIMARY KEY ("mastery_name", "mastery_domain", "department", "course_code");



ALTER TABLE ONLY "public"."Mastery"
    ADD CONSTRAINT "Mastery_department_course_code_fkey" FOREIGN KEY ("department", "course_code") REFERENCES "public"."Course"("department", "course_code");



ALTER TABLE "public"."Course" ENABLE ROW LEVEL SECURITY;


ALTER TABLE "public"."Mastery" ENABLE ROW LEVEL SECURITY;
