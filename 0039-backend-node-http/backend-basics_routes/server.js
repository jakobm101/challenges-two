import { createServer } from "node:http";

const server = createServer((request, response) => {
  switch (request.url) {
    case "/":
      response.statusCode = 200;
      response.end("Welcome home");
      break;
    case "/fish":
      response.statusCode = 200;
      response.end("fish");
      break;
    case "/fish2":
      response.statusCode = 200;
      response.end("fish2");
      break;
    default:
      response.statusCode = 404;
      response.end("404 oh no. what is going on?");
  }
});

export default server;
