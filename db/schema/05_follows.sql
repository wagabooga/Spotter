DROP TABLE IF EXISTS follows CASCADE;
CREATE TABLE follows (
  id SERIAL PRIMARY KEY NOT NULL,
  followed_by_id INTEGER REFERENCES users(id),
  follows_id INTEGER REFERENCES users(id)
);