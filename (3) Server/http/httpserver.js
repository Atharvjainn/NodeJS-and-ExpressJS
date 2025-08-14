const http = require('http');
const PORT = 3000;
const server = http.createServer((req,res) => {
    if(req.url=="/home"){
        res.end("HELLO, WELCOME TO HOME")
    }
    else{
        res.end(`WELCOME TO RANDOM SERVER HOSTED ON ${PORT}`)
    }
})

server.listen(PORT,() => {
    console.log("SERVER STARTED");
})