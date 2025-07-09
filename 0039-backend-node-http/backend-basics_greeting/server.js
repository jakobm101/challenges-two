import { createServer } from "node:http";

// export const server = …
const server = createServer((request, response) => {
    response.end(`Hello, here is Jimmy`)
})

export default server