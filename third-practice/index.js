let http = require('http');
let fs = require('fs');
let index = fs.readFileSync('index.html' , 'utf-8')

let server = http.createServer((req,res)=>
{
    // console.log('server started')
    // res.setHeader('content-type' , 'text/html')
    // res.end(index)
    console.log(req.url)
    switch (req.url)
    {
        case '/':   res.setHeader('content-type' , 'text/html')
                    res.end(index)
                    break;
        case '/api':   res.setHeader('content-type' , 'text/html')
                    res.end('hello api')
                    break;
        default: 
    }

})
server.listen(8000)