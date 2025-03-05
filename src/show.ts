import {getclient} from "./utils";
  
export async function Show() {
           const client = await getclient();
           const showquery = `SELECT * FROM users`;
           try {
                   console.log("Here is the table");
                   const res = await client.query(showquery);
                   for(let i = 0;i<res.rows.length;i++) { 
			console.log(`Email: ${res.rows[i].email} `);
			console.log(`Password: ${res.rows[i].password} `);
		   }
 }
      	catch(e) {
                  console.error(`Error in ${e}`);
          }
          finally {
              client.end();
          }
  }

  Show();
