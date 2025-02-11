import { getclient } from "./utils";

async function createTable() {
  const client = await getclient();
  const createUsertable = `
    CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
)`;
  await client.query(createUsertable);
  const createTodoquery = `
    CREATE TABLE todo ( 
    id SERIAL PRIMARY KEY,
    TITLE TEXT NOT NULL,
    DESCRIPTION TEXT,
    USER_ID INTEGER REFERENCES users(id),
    done BOOLEAN DEFAULT FALSE 
);`
;
  await client.query(createTodoquery);
  console.log("Tables created successfully");
}
createTable();
