show tables;

# Find 5 oldest users
SELECT * FROM users
ORDER BY created_at ASC
LIMIT 5;

# What day of the week do most users register on?
SELECT DAYNAME(created_at) AS day ,COUNT(*) AS number_of_register FROM users
GROUP BY DAYNAME(created_at)
ORDER BY number_of_register DESC
LIMIT 1;

# Find the users who have never posted a photo
SELECT username, COUNT(photos.user_id) FROM users
LEFT JOIN photos ON users.id = photos.user_id
GROUP BY users.id
HAVING COUNT(photos.user_id) = 0;

# What is the single most liked person
SELECT photos.id, photos.image_url, COUNT(photo_id) AS likes FROM photos
JOIN likes ON photos.id = likes.photo_id
GROUP BY photos.id
ORDER BY COUNT(photo_id)DESC
LIMIT 1;

# How many times does the average user post?
SELECT (SELECT COUNT(*) FROM photos) / (SELECT COUNT(*) FROM users) AS AVG;

# What are the top 5 most commonly used hashtags?
SELECT tag_name, COUNT(*) AS number_used FROM tags
JOIN photo_tags ON tags.id = photo_tags.tag_id
JOIN photos ON photo_tags.photo_id = photos.id
GROUP BY tag_name
ORDER BY number_used DESC LIMIT 5;

# Find users who have liked every single photo on the site
SELECT username, COUNT(*) AS num_likes FROM users
JOIN likes ON users.id = likes.user_id
GROUP BY likes.user_id
HAVING num_likes = (SELECT COUNT(*) FROM photos);