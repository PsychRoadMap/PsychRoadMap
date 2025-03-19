-- Develops table
CREATE TABLE IF NOT EXISTS "public"."Develops" (
    "mastery_name" "text" NOT NULL,
    "mastery_domain" "text" NOT NULL,
    "department" "text" NOT NULL,
    "course_code" numeric NOT NULL,
    "lv_rating" double precision NOT NULL
);

ALTER TABLE ONLY "public"."Develops"
    ADD CONSTRAINT "Develops_department_course_code_fkey" FOREIGN KEY ("department", "course_code") REFERENCES "public"."Course"("department", "course_code");

ALTER TABLE ONLY "public"."Develops"
    ADD CONSTRAINT "Develops_mastery_name_mastery_domain_fkey" FOREIGN KEY ("mastery_name", "mastery_domain") REFERENCES "public"."Mastery"("mastery_name", "mastery_domain");

ALTER TABLE ONLY "public"."Develops"
    ADD CONSTRAINT "Develops_pkey" PRIMARY KEY ("mastery_name", "mastery_domain", "department", "course_code");

ALTER TABLE "public"."Develops" OWNER TO "postgres";

ALTER TABLE "public"."Develops" ENABLE ROW LEVEL SECURITY;

COMMENT ON TABLE "public"."Develops" IS 'Development ratings for masteries from courses';

