import database from "infra/database.js";

async function Status(request, response) {
  const res = await database.query("select 1 + 1;");
  console.log(res.rows);
  response.status(200).json({ chave: "servidor online" });
}

export default Status;
