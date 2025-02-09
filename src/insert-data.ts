import { getclient } from "./utils";

async function createEntries() {
    const client = await getclient();
    const inserttext = `INSERT INTO users (email,password) VALUES ($1,$2) RETURNING ID `;
    const uservalues = [`john.doe@gmail.com`, `samplepassword`];
    let response = await client.query(inserttext, uservalues);
    const innertodotext = `INSERT INTO TODO (TITLE, DESCRIPTION, USER_ID, done) VALUES ($1, $2, $3, $4) RETURNING id`;
    const todovalues = [`buy `, `random stuff `, response.rows[0].id, false];
    await client.query(innertodotext, todovalues);
    console.log(`Entries created successfully`);
}
createEntries();
