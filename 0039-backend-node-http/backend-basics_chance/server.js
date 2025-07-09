import { createServer } from 'node:http'
import Chance from 'chance'

const chance = new Chance
const line = () => `Hello, my name is ${chance.name()} and I am ${chance.age()} years old. I am a ${chance.profession()}.`


const server = createServer((request, response)=> {
 switch(request.url){
         case '/':
         response.statusCode = 200
         response.end(line())
            break;
    default: 
    response.statusCode = 404
    response.end('404 haha upsi')
 } 
})

export default server