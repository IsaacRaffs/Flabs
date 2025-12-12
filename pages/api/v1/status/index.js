function Status(request, response) {
  response.status(200).json({ chave: "servidor online" });
}

export default Status;
