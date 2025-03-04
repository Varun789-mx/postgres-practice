import { getclient } from "./utils";

export async function createTable() { 
	const client = await getclient();
	const createuserquery = `
	CREATE TABLE IF NOT EXISTS users (
		id SERIAL PRIMARY KEY,
		email VARCHAR(255) UNIQUE NOT NULL,
		password VARCHAR(255) NOT NULL
	);
	`;
	try { 
	await client.query(createuserquery);
	console.log("User table created succesfully");
	}
	catch(e) { 
		console.error("Error occured while creating user table" , e);
	}
	const createTodoquery = `
	CREATE TABLE IF NOT EXISTS todos (
		id SERIAL PRIMARY KEY,
		title TEXT NOT NULL,
		description TEXT,
		user_id INTEGER REFERENCES users(id),
		done BOOLEAN DEFAULT FALSE
	);
	`;
	try { 
		await client.query(createTodoquery);
		console.log("todo created succesfully");
	}
	catch(e) { 
		console.error("Error in creating table ",e);
	}
}
createTable();
