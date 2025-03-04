import {getclient} from "./utils"

export async function Insertdata() { 
	const client = await getclient();
    const insertquery = `INSERT INTO users (email,password) values ($1,$2)`;
    const uservalues = [`Hpandey057@gmail`,`Randompass`];
	try { 
	  await client.query(insertquery,uservalues);
          console.log("User added succesfully");
	}
	catch(e) { 
		console.error("Error in adding user to db"+e);
	}
}
Insertdata();