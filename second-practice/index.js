let http = require('http');
let server = http.createServer((req,res)=>
{
    console.log('server started')
    res.end('hello')
})
server.listen(8000)