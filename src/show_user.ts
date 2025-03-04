import {getclient} from "./utils"

export async function Showusers() { 
	const client = await getclient();
	const showquery = `SELECT * FROM users `;
	try { 
	const result = 	await client.query(showquery);
	if(result.rows.length === 0) { 
		console.log("Empty table please add users");
	}
	else { 
		console.log("Here is users table");
		for(let i = 1;i<result.rows.length;i++) { 
			console.log(`Id: ${result.rows[i].id}`);
			console.log(`Email: ${result.rows[i].email}`);
			console.log(`Password: ${result.rows[i].password}`);
		}
	}
}
	catch(e) { 
		console.error("Error in getting users from table");
	}
}
Showusers();


