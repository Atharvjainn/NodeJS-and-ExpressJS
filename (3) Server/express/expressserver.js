const express = require('express');
const server = express()
const PORT = 3000;

server.get('/',(req,res) => {
    res.send('WELCOME TO HOME')
})
server.get('/home',(req,res) => {
    res.send('WELCOME TO GOME')
})

server.listen(PORT,() => {
    console.log("SERVER STARTED");
})