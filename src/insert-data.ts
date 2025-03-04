import {getclient} from "./utils"

export async function Insertdata() { 
	const client = await getclient();
	const insertquery = `INSERT INTO users($1,$2,$3)`;
	try { 
	  await client.query(insertquery(1,"Hpandey057@gmail.com","Ninjahattori"));
          console.log("User added succesfully");
	}
	catch(e) { 
		console.error("Error in adding user to db"+e);
	}
}
