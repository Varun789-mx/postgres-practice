import {getclient} from "./utils"

interface Employee{ 
	name:string,
	email:string,
	mobile:string,
	salary:number
}

export async function Insertemp(prop:Employee) { 
	const client = await getclient();
	const insertquery = `INSERT INTO employee (name,email,mobile,salary) values ($1,$2,$3,$4) `;
	const insertprop = [prop.name,prop.email,prop.mobile,prop.salary];
	try { 
		await client.query(insertquery,insertprop);
		console.log("Employee added successfully");
	}
	catch(e) { 
		console.log(`Error ${e}`);
	}
	finally{ 
		client.end();
	}
}

const insertprop:Employee[] = [{name:"Varun",email:"Varunsh153@gmail.com",mobile:"9711038780",salary:200000.00}]

Insertemp(insertprop);
