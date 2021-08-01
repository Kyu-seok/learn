SHOW DATABASES;
USE cat_app;
SHOW TABLES;

/*  TABLE CREATED */
CREATE TABLE cats (
    name VARCHAR(100),
    age INT
);

/*  NORMAL INSERT   */
INSERT INTO cats(name, age) VALUES ('Jetson', 7);
INSERT INTO cats(age, name) VALUES (11, 'Draco');

/*  MULTIPLE INSERT */
INSERT INTO cats(name, age)
    VALUES ('Peanut', 2),
           ('Butter', 4),
           ('Jelly', 7);

SELECT * FROM cats;





/*****  CREATING cats2 TABLE WITH NOT NULL *****/
CREATE TABLE cats2(
    name VARCHAR(100) NOT NULL,
    age INT NOT NULL
);

DESC cats2;
SELECT * FROM cats2;

INSERT INTO cats2(name) VALUES ('Texas');




/*****  CREATING cats3 TABLE HAVING DEFAULT VALUES  *****/
CREATE TABLE cats3(
    name VARCHAR(100) DEFAULT 'unnamed',
    age INT DEFAULT 99
);

INSERT INTO cats3(age) VALUES (13);
SELECT * FROM cats3;




/*****  CREATING unique_cat TABLE WITH PRIMARY ID   *****/
CREATE TABLE unique_cats (
    cat_id INT NOT NULL ,
    name VARCHAR(100),
    age INT,
    PRIMARY KEY (cat_id)
    );

DESC unique_cats;
INSERT INTO unique_cats(cat_id, name, age) VALUES (1, 'Fred', 23);
INSERT INTO unique_cats(cat_id, name, age) VALUES (2, 'Louise', 3);
INSERT INTO unique_cats(cat_id, name, age) VALUES (1, 'James', 13); /*ERROR having same primary key */
SELECT * FROM unique_cats;





/*****  CREATING unique_cat2 TABLE WITH PRIMARY ID AND AUTO INCREMENT   *****/
CREATE TABLE unique_cats2(
    cat_id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(100),
    age INT,
    PRIMARY KEY (cat_id)
);
DESC unique_cats2;
INSERT INTO unique_cats2(name, age) VALUES ('Skippy', 4);
INSERT INTO unique_cats2(name, age) VALUES ('Jiff', 4);

SELECT * FROM unique_cats2;
