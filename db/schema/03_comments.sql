DROP TABLE IF EXISTS comments CASCADE;
CREATE TABLE comments (
  id SERIAL PRIMARY KEY NOT NULL,
  spots_id INTEGER REFERENCES spots(id),
  user_id INTEGER REFERENCES users(id),
  comment_text VARCHAR(255),
  date_created DATE
);




