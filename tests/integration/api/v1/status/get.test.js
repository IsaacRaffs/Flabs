test("GET to /api/v1/status should return status 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);

  const responseBody = await response.json();
  
  expect(responseBody.dependencies.database.version).toEqual("18.1");

  expect(responseBody.dependencies.database.max_connections).toEqual(100);

  expect(responseBody.dependencies.database.openned_connections).toEqual(1);
});
