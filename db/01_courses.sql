CREATE TABLE courses (
    id SERIAL PRIMARY KEY,
    name TEXT,
    description TEXT,
    price money,
    status text,
    image text,
    buyLink text
);