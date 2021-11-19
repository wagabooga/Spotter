DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE comments (
  id SERIAL PRIMARY KEY NOT NULL,
  spot_id INT REFERENCES spots(id),
  user_id INT REFERENCES users(id),
  comment_text VARCHAR(255),
  date_created DATE
);




