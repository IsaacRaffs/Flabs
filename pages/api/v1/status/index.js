import database from "infra/database.js";
import { version } from "react";

async function status(request, response) {
  const updatedAt = new Date().toISOString();

  const databaseVersionResult = await database.query("SHOW server_version;");

  const databaseMaxConnections = await database.query("SHOW max_connections;");

  const databaseMaxConnectionsValue =
    databaseMaxConnections.rows[0].max_connections;

  const databaseVersionValue = databaseVersionResult.rows[0].server_version;

  const databaseOpenedConnectionsResult = await database.query(
    "SELECT * FROM pg_stat_activity WHERE datname ='local_user';",
  );

  console.log(databaseOpenedConnectionsResult.rows);

  response.status(200).json({
    updated_At: updatedAt,
    dependencies: {
      database: {
        version: databaseVersionValue,
        max_connections: parseInt(databaseMaxConnectionsValue),
      },
    },
  });
}

export default status;
