import { db } from "./index";
import { sql } from "drizzle-orm";

async function testConnection() {
  const result = await db.execute(sql`SELECT 1`);

  console.log(result);
}

testConnection();
