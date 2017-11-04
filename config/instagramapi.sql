DROP DATABASE IF EXISTS instagramapi;
CREATE DATABASE instagramapi;

\c instagramapi;

CREATE TABLE users (
    ID SERIAL PRIMARY KEY,
    email VARCHAR,
    name VARCHAR,
    password VARCHAR
)

