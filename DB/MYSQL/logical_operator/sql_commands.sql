# Not Equal !=
SELECT title ,released_year FROM books WHERE released_year != 2017;
SELECT title, author_lname FROM books WHERE author_lname != 'harris';

# Not Like
SELECT title FROM books WHERE title NOT LIKE '%W%';

# Greater than >
SELECT * FROM books WHERE released_year > 2000;
SELECT * FROM books WHERE released_year >= 2000;

# Less than <
SELECT title, released_year FROM books WHERE released_year < 2000 ORDER BY released_year;

# Logical AND
SELECT title, released_year, author_fname, author_lname FROM books WHERE author_fname='dave' && author_lname='eggers' && books.released_year > 2010;
SELECT * FROM books WHERE author_lname='eggers' AND released_year > 2010 AND title LIKE '%novel%';

# Logical OR
SELECT * FROM books WHERE author_lname='eggers' || released_year > 2010;

# Between
SELECT title, released_year FROM books WHERE released_year >= 2004 && released_year <= 2015;
SELECT title, released_year FROM books WHERE released_year BETWEEN 2004 AND 2015;
SELECT title, released_year FROM books WHERE released_year NOT BETWEEN 2004 AND 2015;

# In and Not IN
SELECT title, author_lname FROM books WHERE author_lname IN ('Carver', 'Lahiri', 'Smith');
SELECT title, released_year FROM books WHERE released_year IN (2017, 1985);
SELECT title, released_year FROM books WHERE released_year NOT IN (1996, 2000, 2004, 2010, 2012, 2014, 2016) ORDER BY released_year;

# Case statement
SELECT title, released_year,
       CASE WHEN released_year >= 2000 THEN 'Modern Lit'
            ELSE '20th Century Lit'
        END AS GENRE
FROM books;

SELECT title, stock_quantity,
       CASE WHEN stock_quantity > 100 THEN '***'
            WHEN stock_quantity > 50 THEN '**'
            ELSE '*'
        END AS stock
FROM books;


-- Challenge
# 1. Select all books written before 1980
SELECT * FROM books WHERE released_year < 1980;

# 2. Select all books written by eggers or chabon
SELECT * FROM books WHERE author_lname IN ('eggers', 'chabon');

# 3. Select all books written by lahiri, published after 2000
SELECT * FROM books WHERE author_lname='Lahiri' && books.released_year > 2000;

# 4. Select all books with page counts between 100 and 200
SELECT * FROM books WHERE pages BETWEEN 100 AND 200;

# 5. Select all books where author_lname starts with a 'C' or an 'S'
SELECT * FROM books WHERE author_lname LIKE 'C%' OR 'S%';

# 6.
SELECT title, author_lname,
       CASE WHEN title LIKE '%stories%' THEN 'Short Stories'
            WHEN title LIKE 'Just Kids' OR 'A Heartbreaking Work%' Then 'Memoir'
            ELSE 'Novel'
        END AS TYPE
FROM books;

# 7.
SELECT author_fname, author_lname,CASE
    WHEN COUNT(*) = 1 THEN '1 book'
    ELSE CONCAT(COUNT(*), ' books')
END  AS COUNT
FROM books
GROUP BY author_fname, author_lname;