import {getclient} from "./utils"

 interface Emp{
	   id : number,
           name:string,
           email:string,
           mobile:string,
           salary:number
   }

export async function Showemp() { 
	const client = await getclient();
	const show_emp = `SELECT * FROM employee`;
	try {   
		console.log("Employee table");
		const emp = await client.query(show_emp);
		for(let i = 0;i<emp.rows.length;i++) { 
			console.log(`ID : ${emp.rows[i].id}`);
			console.log(`Name : ${emp.rows[i].name}`);
			console.log(`Email : ${emp.rows[i].email}`);
			console.log(`Mobile : ${emp.rows[i].mobile}`);
			console.log(`Salary : ${emp.rows[i].salary}`);
		};
	}
		catch(e) { 
			console.log(`Error ${e}`);
		}
		finally{ 
			client.end();
		}
}
Showemp();
	
