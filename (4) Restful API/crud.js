const express = require("express");
const app = express();
const bodyparser = require('body-parser')
const PORT = 3000;

app.use(bodyparser.urlencoded({extended : true}))
app.use(bodyparser.json());

let bloglist = [];

app.get('/blogs',(req,res) => {
    return res.status(404).json({
        data:bloglist,
        success : true
    })
})

app.post('/blogs',(req,res) => {
    bloglist.push({
        title : req.body.title,
        content : req.body.content,
        id : Math.floor(Math.random() * 1000)
    })
    return res.status(201).json({
        success : true
    })
})

app.get('/blogs/:id',(req,res) => {
    const blog = bloglist.filter((blogie) => blogie.id == req.params.id )
    return res.status(200).json({
        data : blog,
        success : true
    })
})

app.delete('/blogs/:id',(req,res) => {
    bloglist = bloglist.filter((blog) => blog.id != req.params.id)
    const deleted_blog = bloglist.find((blog) => blog.id == req.params.id) 
    return res.status(202).json({
        success : true,
        deleted : deleted_blog,
    })
})



app.listen(PORT,() => {
    console.log(`Server started at PORT : ${PORT}`);
})



