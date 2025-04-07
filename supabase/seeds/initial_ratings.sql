insert into "public"."Mastery" ("mastery_name", "mastery_domain") values 
    ('Psychology', 'Knowledge'),
    ('Writing', 'Skills'),
    ('Science', 'Skills');

insert into "public"."Develops" ("department", "course_code", "mastery_name", "mastery_domain", "lv_rating") values
	('PSY', 15700, 'Psychology', 'Knowledge', 71),
	('PSY', 15700, 'Writing', 'Skills', 70),
	('PSY', 15700, 'Science', 'Skills', 50),

    ('PSY', 18100, 'Psychology', 'Knowledge', 30),
    ('PSY', 18100, 'Writing', 'Skills', 70),
    ('PSY', 18100, 'Science', 'Skills', 0),

    ('PSY', 39012, 'Psychology', 'Knowledge', 58),
    ('PSY', 39012, 'Writing', 'Skills', 30),
    ('PSY', 39012, 'Science', 'Skills', 0);
