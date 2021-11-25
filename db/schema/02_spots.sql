DROP TABLE IF EXISTS spots CASCADE;
CREATE TABLE spots (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id),
  spot_text VARCHAR(255),
  date_created DATE,
  is_respot BOOLEAN,
  spotify_json JSON
);




