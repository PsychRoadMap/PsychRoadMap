-- Mastery table
CREATE TABLE IF NOT EXISTS "public"."Mastery" (
    "mastery_name" "text" NOT NULL,
    "mastery_domain" "text" NOT NULL
);

ALTER TABLE ONLY "public"."Mastery"
    ADD CONSTRAINT "Mastery_pkey" PRIMARY KEY ("mastery_name", "mastery_domain");

ALTER TABLE "public"."Mastery" OWNER TO "postgres";

ALTER TABLE "public"."Mastery" DISABLE ROW LEVEL SECURITY;

COMMENT ON TABLE "public"."Mastery" IS 'O*Net Knowledge, Skills, Abilities, and Work Activities metadata';

