import { createServer } from "node:http";

const server = createServer((request, response) => {
  switch (request.url) {
    case "/":
      response.statusCode = 200;
      response.end("Welcome home");
      break;
    case "/api/fish/1":
      response.statusCode = 200;
      response.end("Shrimp");
      break;
    case "/api/fish/2":
      response.statusCode = 200;
      response.end("Anemonefish");
      break;
    default:
      response.statusCode = 404;
      response.end("404 oh no. what is going on?");
  }
});

export default server;
