DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE spots (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id),
  spotify_data JSON,
  tweet_text VARCHAR(255),
  date_created DATE,
  is_respot BOOLEAN
);




