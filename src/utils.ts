import {Client} from "pg";

export async function getclient() { 
	try {
	const client = new Client({connectionString:``});
		if(!client) { 
		console.error("error while creating client");
	}
	   
		await client.connect();
		console.log("Connection success");
		return client;
	}
      catch(e) { 
	console.error("Error occured while connecting to db",e);

}
}


