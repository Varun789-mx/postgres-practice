import {getclient} from "./utils"




export async function CreateEmployee() { 
	const client = await getclient();
	const dbquery = `CREATE TABLE IF NOT EXISTS employee (
		id SERIAL PRIMARY KEY,
		name VARCHAR(255) UNIQUE NOT NULL,
		email VARCHAR(255) UNIQUE NOT NULL,
		mobile VARCHAR(12) NOT NULL,
		salary DECIMAL(10,2) NOT NULL
	);`;
	try { 
		await client.query(dbquery);
		console.log("Employee table succesfully created");
		
	}
	catch(e) { 
		console.error(`Error ${e}`);
		
	}
} 

CreateEmployee();
