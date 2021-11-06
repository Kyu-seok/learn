# Distinct
SELECT DISTINCT author_lname FROM books;
SELECT DISTINCT released_year FROM books;
SELECT DISTINCT CONCAT(author_fname,' ', author_lname) FROM books;
SELECT DISTINCT author_fname, author_lname FROM books;

# Order by
SELECT author_lname FROM books ORDER BY author_lname;
SELECT title FROM books ORDER BY title;
SELECT title FROM books ORDER BY title DESC;
SELECT released_year FROM books ORDER BY released_year;
SELECT title, released_year, pages FROM books ORDER BY released_year;
SELECT title, author_fname, author_lname FROM books ORDER BY 2;
SELECT author_fname, author_lname FROM books ORDER BY author_lname, author_fname;

# Limit
SELECT title FROM books LIMIT 3;
SELECT title, released_year FROM books ORDER BY released_year LIMIT 5;
SELECT title, released_year FROM books ORDER BY released_year DESC LIMIT 0, 5;
SELECT title FROM books LIMIT 0, 2319487321423480;

# Like
SELECT title, author_fname FROM books WHERE author_fname LIKE '%da%';
SELECT title FROM books WHERE title LIKE 'the%';
SELECT title, stock_quantity FROM books WHERE stock_quantity LIKE '___'; # each _ represents the number of character
SELECT title FROM books WHERE title LIKE '%\%%';
SELECT title FROM books WHERE title LIKE '%\_%';

-- Challenges
# 1. find books which title contains "Stories"
SELECT title FROM books WHERE title LIKE '%Stories%';

# 2. Find the book with most pages
SELECT title, pages FROM books ORDER BY pages DESC LIMIT 1;

# 3. Print a summary of 3 most recent book containing title, year
SELECT CONCAT_WS(' - ', title, released_year) AS summary FROM books ORDER BY released_year DESC LIMIT 3;

# 4. Find all book with an author_lname that contains a space(" ")
SELECT title, author_lname FROM books WHERE author_lname LIKE ('% %');

# 5. Find 3 books with the lowest stock
SELECT title, released_year, stock_quantity FROM books ORDER BY stock_quantity LIMIT 3;

# 6. Print title and author_lname, sorted first by author_lname and th3en gy title
SELECT title, author_lname FROM books ORDER BY author_lname, title;

# 7. sort alphabetically by last name
SELECT UPPER(CONCAT('my favorite author is ', author_lname)) FROM books ORDER BY author_lname;