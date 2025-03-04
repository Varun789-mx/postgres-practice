import {getclient} from "./utils"
interface uservalues { 
	email:string,
	password:string
}
export async function Insertdata(userdata:uservalues) { 
	const client = await getclient();
    const insertquery = `INSERT INTO users (email,password) values ($1,$2)`;
    const uservalues = [userdata.email,userdata.password];
	try { 
	  await client.query(insertquery,uservalues);
          console.log("User added succesully");
	}
	catch(e) { 
		console.error(`Error in adding user to db ${e}`);
	}
	finally { 
		await client.release();
	}

}
