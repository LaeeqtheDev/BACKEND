const http=require('http')


const server = http.createServer((req,res)=>{
    const url = req.url;
    if(url==='/'){
        res.writeHead(200,{'Content-type':'text/plain'})
        res.end('Home Page')
    }
    else if(url ==='/products'){
        res.writeHead(200,{'Content-type':'text/plain'})
        res.end('Products')
    } else {
        res.writeHead(404,{'Content-type':'text/plain'})
        res.end('Not Found')
    }
})

const port = 3000;
server.listen(port, ()=>{
    console.log(`Server is now listening to port ${port}`)
})

