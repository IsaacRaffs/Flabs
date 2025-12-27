import { Client } from "pg";
import { host, password } from "pg/lib/defaults";

async function query(queryObject) {
  const client = await new Client({
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    user: process.env.POSTGRES_USER,
    database: process.env.POSTGRES_DATABASE,
    password: process.env.POSTGRES_PASSWORD,
    transaction: process.env.POOL_MODE,
    ssl: getSSLValue(),
  });

  try {
    await client.connect();
    const res = await client.query(queryObject);
    return res;
  } catch (error) {
    console.error(error);
    throw error;
  } finally {
    await client.end();
  }
}

function getSSLValue() {
  return process.env.NODE_ENV === "development" ? false : true;
}

export default {
  query: query,
};
