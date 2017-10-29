DROP DATABASE IF EXISTS instagramapi;
CREATE DATABASE instagramapi;

\c instagramapi;

CREATE TABLE users (
    ID SERIAL PRIMARY KEY,
    username VARCHAR,
    email VARCHAR,
    name INTEGER
)

