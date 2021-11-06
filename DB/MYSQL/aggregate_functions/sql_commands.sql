# Count
SELECT COUNT(*) FROM books;
SELECT COUNT(author_fname) FROM books;
SELECT COUNT(DISTINCT author_fname) FROM books;
SELECT COUNT(DISTINCT author_lname) FROM books;
SELECT COUNT(DISTINCT author_lname, author_fname) FROM books;
SELECT title FROM books WHERE title LIKE '%the%';
SELECT COUNT(*) FROM books WHERE title LIKE '%the%';

# Group by
SELECT title, author_fname, author_lname, COUNT(*) FROM books GROUP BY author_lname, author_fname;
SELECT CONCAT('In ', released_year, ' ', COUNT(*), ' book(s) released') FROM books group by released_year;

# Min and Max
SELECT MIN(released_year) FROM books;
SELECT MIN(pages) FROM books;
SELECT MAX(released_year) FROM books;
SELECT MAX(pages) FROM books;

# Sub-Queries
SELECT * FROM books WHERE pages = (SELECT MAX(pages) FROM books);
SELECT author_fname, author_lname, MIN(released_year) FROM books group by author_fname, author_lname;
SELECT author_fname, author_lname, MAX(released_year) FROM books group by author_fname, author_lname;
SELECT author_fname, author_lname, MAX(pages) FROM books group by author_fname, author_lname;

# Sum
SELECT SUM(pages) FROM books;
SELECT SUM(released_year) FROM books;
SELECT author_fname, author_lname, SUM(pages) FROM books GROUP BY author_fname, author_lname;

# Avg
SELECT AVG(released_year) FROM books;
SELECT released_year, AVG(stock_quantity) FROM books GROUP BY released_year;
SELECT author_fname, author_lname, AVG(pages) FROM books GROUP BY author_fname, author_lname;


-- Challenges
# 1. Print the number of books in the database
SELECT COUNT(*) FROM books;

# 2. Print out how many books were released in each year
SELECT released_year, COUNT(*) FROM books GROUP BY released_year;

# 3. Print out the total number of books in stock
SELECT SUM(stock_quantity) FROM books;

# 4. Find the average released_year for each author
SELECT author_fname, author_lname, AVG(released_year) FROM books GROUP BY author_fname, author_lname;

# 5. Find the full name of the author who wrote the longest book.
SELECT CONCAT(author_fname, ' ', author_lname) FROM books WHERE pages = (SELECT MAX(pages) FROM books);

SELECT released_year AS year, COUNT(*) AS '# books', AVG(pages) AS 'avg pages' FROM books GROUP BY released_year;
