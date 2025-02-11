import {Client} from "pg";

export async function getclient() { 
	try {
	const client = new Client({connectionString:`psql 'postgres://avnadmin:AVNS_kdZr6Y1rjd7Krl6ql_u@pg-a1248e6-varunsh153-47db.h.aivencloud.com:25254/defaultdb?sslmode=require'`});
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


