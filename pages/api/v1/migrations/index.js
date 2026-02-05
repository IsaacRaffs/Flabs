import { runner } from "node-pg-migrate";
import { join } from "node:path";
import database from "infra/database.js";

export default async function migrations(request, response) {
  const dbClient = await database.getNewClient();
  const defaultMigrationRunner = {
    dbClient: dbClient,
    dryRun: true,
    dir: join("infra", "migrations"),
    direction: "up",
    verbose: true,
    migrationsTable: "pgmigrations",
  };

  try {
    if (request.method === "GET") {
      const migrations = await runner(defaultMigrationRunner);
      return response.status(200).json(migrations);
    }

    if (request.method === "POST") {
      const migrations = await runner({
        ...defaultMigrationRunner,
        dryRun: false,
      });
      return response.status(200).json(migrations);
    }
    return response.status(405).json({
      error: "method not allowed",
    });
  } catch (error) {
    console.log(error);
  } finally {
    await dbClient.end();
  }
}
