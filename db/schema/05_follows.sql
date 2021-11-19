DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE likes (
  id SERIAL PRIMARY KEY NOT NULL,
  followed_by INTEGER REFERENCES users(id),
  follows INTEGER REFERENCES users(id)
);