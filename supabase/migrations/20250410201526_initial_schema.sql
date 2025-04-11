

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;


CREATE EXTENSION IF NOT EXISTS "pg_net" WITH SCHEMA "extensions";






CREATE EXTENSION IF NOT EXISTS "pgsodium";






COMMENT ON SCHEMA "public" IS 'standard public schema';



CREATE EXTENSION IF NOT EXISTS "pg_graphql" WITH SCHEMA "graphql";






CREATE EXTENSION IF NOT EXISTS "pg_stat_statements" WITH SCHEMA "extensions";






CREATE EXTENSION IF NOT EXISTS "pgcrypto" WITH SCHEMA "extensions";






CREATE EXTENSION IF NOT EXISTS "pgjwt" WITH SCHEMA "extensions";






CREATE EXTENSION IF NOT EXISTS "supabase_vault" WITH SCHEMA "vault";


CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA "extensions";





SET default_tablespace = '';

SET default_table_access_method = "heap";


CREATE TABLE IF NOT EXISTS "public"."Course" (
    "department" "text" NOT NULL,
    "course_code" numeric NOT NULL,
    "course_cluster" "text" NOT NULL,
    "course_name" "text" DEFAULT 'New Course'::"text" NOT NULL,
    "course_description" "text" DEFAULT 'No description available.'::"text" NOT NULL
);


ALTER TABLE "public"."Course" OWNER TO "postgres";


CREATE OR REPLACE FUNCTION "public"."select_rated_courses"() RETURNS SETOF "public"."Course"
    LANGUAGE "sql"
    AS $$
    select * 
    from "public"."Course" 
    where "public"."Course"."department" IN (
        select "public"."Develops"."department"
        from "public"."Develops" 
    ) and "public"."Course"."course_code" IN (
        select "public"."Develops"."course_code"
        from "public"."Develops" 
    );
$$;


ALTER FUNCTION "public"."select_rated_courses"() OWNER TO "postgres";


CREATE TABLE IF NOT EXISTS "public"."Develops" (
    "mastery_name" "text" NOT NULL,
    "mastery_domain" "text" NOT NULL,
    "department" "text" NOT NULL,
    "course_code" numeric NOT NULL,
    "lv_rating" double precision NOT NULL
);


ALTER TABLE "public"."Develops" OWNER TO "postgres";


CREATE TABLE IF NOT EXISTS "public"."Mastery" (
    "mastery_name" "text" NOT NULL,
    "mastery_domain" "text" NOT NULL
);


ALTER TABLE "public"."Mastery" OWNER TO "postgres";


ALTER TABLE ONLY "public"."Course"
    ADD CONSTRAINT "Course_pkey" PRIMARY KEY ("department", "course_code");



ALTER TABLE ONLY "public"."Develops"
    ADD CONSTRAINT "Develops_pkey" PRIMARY KEY ("mastery_name", "mastery_domain", "department", "course_code");



ALTER TABLE ONLY "public"."Mastery"
    ADD CONSTRAINT "Mastery_pkey" PRIMARY KEY ("mastery_name", "mastery_domain");



ALTER TABLE ONLY "public"."Develops"
    ADD CONSTRAINT "Develops_department_course_code_fkey" FOREIGN KEY ("department", "course_code") REFERENCES "public"."Course"("department", "course_code");



ALTER TABLE ONLY "public"."Develops"
    ADD CONSTRAINT "Develops_mastery_name_mastery_domain_fkey" FOREIGN KEY ("mastery_name", "mastery_domain") REFERENCES "public"."Mastery"("mastery_name", "mastery_domain");





ALTER PUBLICATION "supabase_realtime" OWNER TO "postgres";





GRANT USAGE ON SCHEMA "public" TO "postgres";
GRANT USAGE ON SCHEMA "public" TO "anon";
GRANT USAGE ON SCHEMA "public" TO "authenticated";
GRANT USAGE ON SCHEMA "public" TO "service_role";


























































































































































































GRANT ALL ON TABLE "public"."Course" TO "anon";
GRANT ALL ON TABLE "public"."Course" TO "authenticated";
GRANT ALL ON TABLE "public"."Course" TO "service_role";



GRANT ALL ON FUNCTION "public"."select_rated_courses"() TO "anon";
GRANT ALL ON FUNCTION "public"."select_rated_courses"() TO "authenticated";
GRANT ALL ON FUNCTION "public"."select_rated_courses"() TO "service_role";


















GRANT ALL ON TABLE "public"."Develops" TO "anon";
GRANT ALL ON TABLE "public"."Develops" TO "authenticated";
GRANT ALL ON TABLE "public"."Develops" TO "service_role";



GRANT ALL ON TABLE "public"."Mastery" TO "anon";
GRANT ALL ON TABLE "public"."Mastery" TO "authenticated";
GRANT ALL ON TABLE "public"."Mastery" TO "service_role";



ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES  TO "postgres";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES  TO "anon";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES  TO "authenticated";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES  TO "service_role";






ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS  TO "postgres";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS  TO "anon";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS  TO "authenticated";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS  TO "service_role";






ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES  TO "postgres";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES  TO "anon";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES  TO "authenticated";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES  TO "service_role";






























RESET ALL;

--
-- Dumped schema changes for auth and storage
--

