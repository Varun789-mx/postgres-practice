   import {getclient} from "./utils";
  
   export async function Show() {
           const client = await getclient();
           const showquery = `SELECT * FROM users`;
           try {
                  console.log("Here is the table");
                   const res = client.query(showquery);
                   console.log(res);
         }
      catch(e) {
                  console.error(`Error in ${e}`);
          }
          finally {
              client.end();
          }
  }

  Show();
