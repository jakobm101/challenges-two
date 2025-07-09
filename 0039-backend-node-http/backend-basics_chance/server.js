import { createServer } from 'node:http'

const server = createServer((request, response)=> {
 switch(request.url){
    default: 
    response.statusCode = 404
    response.end('404 haha upsi')
 } 
})

export default server