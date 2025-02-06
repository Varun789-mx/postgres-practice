import { Client } from "pg";

export async function getclient() {
    const client = new Client({ connectionString: 'postgresql://postgres:harsh@localhost:5431/postgres' });
    await client.connect();
    return client;
}

