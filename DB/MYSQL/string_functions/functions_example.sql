USE book_shop;
DESC books;
SELECT CONCAT(author_fname, ' ', author_lname) AS 'full name' FROM books;

-- AS statement
SELECT CONCAT(title, '-', author_fname, '-', author_lname) FROM books;
SELECT CONCAT_WS('-', title, author_fname, author_lname) FROM books;

-- Substring
SELECT SUBSTRING('Hello World', 1, 4);
SELECT SUBSTRING('Hello World', 3, 8);
SELECT SUBSTRING('Hello World', 7);
SELECT SUBSTRING('Hello World', -3);
SELECT SUBSTRING(title, 1, 10) AS 'short title' FROM books;
SELECT CONCAT(SUBSTRING(title, 1, 10) , '...') AS 'short title' FROM books;

-- Replace
SELECT REPLACE('Hello World', 'Hell', '%$#@!');
SELECT REPLACE('Hello World' , 'l', '7');
SELECT REPLACE('Hello World' , 'o', '0');           -- case sensitive
SELECT REPLACE('chesse bread coffee milk', ' ', ' and ');
SELECT REPLACE(title, 'e', '3') FROM books;
SELECT SUBSTRING(REPLACE(title, 'e', '3'), 1, 10) AS 'weird string' FROM books;

-- Reverse
SELECT REVERSE('Hello World');
SELECT REVERSE(author_fname) FROM books;
SELECT CONCAT('woof', REVERSE('woof'));
SELECT CONCAT(author_fname, REVERSE(author_fname)) FROM books;

-- Char_length
SELECT CHAR_LENGTH('Hello World');
SELECT author_lname, CHAR_LENGTH(author_lname) FROM books;
SELECT CONCAT(author_lname, ' is ', CHAR_LENGTH(author_lname), ' characters long') FROM books;

-- Upper and Lower
SELECT UPPER('Hello World');
SELECT LOWER('Hello World');
SELECT UPPER(title) FROM books;
SELECT UPPER(CONCAT('my favorite book is the ', title)) FROM books;


# Challenges
# 1. Reverse and Uppercase the following sentence : "Why does my cat look at me with such hatred?"
SELECT UPPER(REVERSE('Why does my cat look at me with such hatred?'));

# 2. Replace spaces ' ' in titles with '->'
SELECT REPLACE(title, ' ', '->') AS title FROM books;

# 3. Print the author's lastname and reverse of the lastname
SELECT author_lname as forwards, REVERSE(author_lname) AS backwards FROM books;

# 4. full name in caps
SELECT UPPER(CONCAT(author_fname, ' ', author_lname)) AS 'full name in caps' FROM books;

# 5. print ${title} was released in ${year}
SELECT CONCAT(title, 'was released in ', released_year) FROM books;

-- SELECT CONCAT(SUBSTRING(title, 1, 10), '...') AS 'short title', CONCAT(author_lname, ' ', author_fname) AS author, CONCAT(stock_quantity, ' in stock') as quantity FROM books;
