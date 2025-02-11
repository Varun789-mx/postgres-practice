import {Client} from "pg";

export async function getclient() { 
	const client = new Client({connectionString:`postgresql://postgres:harsh@localhost:5431/postgres`});
	  try { 
		await client.connect();
		console.log("Connection success");
		return client;
	}
      catch(e) { 
	console.error("Error occured while connecting to db",e);
}
}

