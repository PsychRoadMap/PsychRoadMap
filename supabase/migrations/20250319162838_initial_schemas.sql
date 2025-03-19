create table "public"."Course" (
    "department" text not null,
    "course_code" numeric not null,
    "course_cluster" text not null,
    "course_name" text not null default 'New Course'::text,
    "course_description" text not null default 'No description available.'::text
);


alter table "public"."Course" enable row level security;

create table "public"."Develops" (
    "mastery_name" text not null,
    "mastery_domain" text not null,
    "department" text not null,
    "course_code" numeric not null,
    "lv_rating" double precision not null
);


alter table "public"."Develops" enable row level security;

create table "public"."Mastery" (
    "mastery_name" text not null,
    "mastery_domain" text not null
);


alter table "public"."Mastery" enable row level security;

CREATE UNIQUE INDEX "Course_pkey" ON public."Course" USING btree (department, course_code);

CREATE UNIQUE INDEX "Develops_pkey" ON public."Develops" USING btree (mastery_name, mastery_domain, department, course_code);

CREATE UNIQUE INDEX "Mastery_pkey" ON public."Mastery" USING btree (mastery_name, mastery_domain);

alter table "public"."Course" add constraint "Course_pkey" PRIMARY KEY using index "Course_pkey";

alter table "public"."Develops" add constraint "Develops_pkey" PRIMARY KEY using index "Develops_pkey";

alter table "public"."Mastery" add constraint "Mastery_pkey" PRIMARY KEY using index "Mastery_pkey";

alter table "public"."Develops" add constraint "Develops_department_course_code_fkey" FOREIGN KEY (department, course_code) REFERENCES "Course"(department, course_code) not valid;

alter table "public"."Develops" validate constraint "Develops_department_course_code_fkey";

alter table "public"."Develops" add constraint "Develops_mastery_name_mastery_domain_fkey" FOREIGN KEY (mastery_name, mastery_domain) REFERENCES "Mastery"(mastery_name, mastery_domain) not valid;

alter table "public"."Develops" validate constraint "Develops_mastery_name_mastery_domain_fkey";

grant delete on table "public"."Course" to "anon";

grant insert on table "public"."Course" to "anon";

grant references on table "public"."Course" to "anon";

grant select on table "public"."Course" to "anon";

grant trigger on table "public"."Course" to "anon";

grant truncate on table "public"."Course" to "anon";

grant update on table "public"."Course" to "anon";

grant delete on table "public"."Course" to "authenticated";

grant insert on table "public"."Course" to "authenticated";

grant references on table "public"."Course" to "authenticated";

grant select on table "public"."Course" to "authenticated";

grant trigger on table "public"."Course" to "authenticated";

grant truncate on table "public"."Course" to "authenticated";

grant update on table "public"."Course" to "authenticated";

grant delete on table "public"."Course" to "service_role";

grant insert on table "public"."Course" to "service_role";

grant references on table "public"."Course" to "service_role";

grant select on table "public"."Course" to "service_role";

grant trigger on table "public"."Course" to "service_role";

grant truncate on table "public"."Course" to "service_role";

grant update on table "public"."Course" to "service_role";

grant delete on table "public"."Develops" to "anon";

grant insert on table "public"."Develops" to "anon";

grant references on table "public"."Develops" to "anon";

grant select on table "public"."Develops" to "anon";

grant trigger on table "public"."Develops" to "anon";

grant truncate on table "public"."Develops" to "anon";

grant update on table "public"."Develops" to "anon";

grant delete on table "public"."Develops" to "authenticated";

grant insert on table "public"."Develops" to "authenticated";

grant references on table "public"."Develops" to "authenticated";

grant select on table "public"."Develops" to "authenticated";

grant trigger on table "public"."Develops" to "authenticated";

grant truncate on table "public"."Develops" to "authenticated";

grant update on table "public"."Develops" to "authenticated";

grant delete on table "public"."Develops" to "service_role";

grant insert on table "public"."Develops" to "service_role";

grant references on table "public"."Develops" to "service_role";

grant select on table "public"."Develops" to "service_role";

grant trigger on table "public"."Develops" to "service_role";

grant truncate on table "public"."Develops" to "service_role";

grant update on table "public"."Develops" to "service_role";

grant delete on table "public"."Mastery" to "anon";

grant insert on table "public"."Mastery" to "anon";

grant references on table "public"."Mastery" to "anon";

grant select on table "public"."Mastery" to "anon";

grant trigger on table "public"."Mastery" to "anon";

grant truncate on table "public"."Mastery" to "anon";

grant update on table "public"."Mastery" to "anon";

grant delete on table "public"."Mastery" to "authenticated";

grant insert on table "public"."Mastery" to "authenticated";

grant references on table "public"."Mastery" to "authenticated";

grant select on table "public"."Mastery" to "authenticated";

grant trigger on table "public"."Mastery" to "authenticated";

grant truncate on table "public"."Mastery" to "authenticated";

grant update on table "public"."Mastery" to "authenticated";

grant delete on table "public"."Mastery" to "service_role";

grant insert on table "public"."Mastery" to "service_role";

grant references on table "public"."Mastery" to "service_role";

grant select on table "public"."Mastery" to "service_role";

grant trigger on table "public"."Mastery" to "service_role";

grant truncate on table "public"."Mastery" to "service_role";

grant update on table "public"."Mastery" to "service_role";


