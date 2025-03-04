import {getclient} from "./utils"

export async function Showusers() { 
	const client = getclient();
	const showquery = `SELECT * FROM users `;
	try { 
		await client.query(showquery);
		console.log("Here is users table");
	}
	catch(e) { 
		console.error("Error in getting users from table");
	}
}
Showusers();


