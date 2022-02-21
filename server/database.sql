CREATE DATABASE todos_db;

CREATE TABLE todos(
  id SERIAL PRIMARY KEY,
  description varchar(255)
);
