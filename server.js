const express = require("express");
const app= express();
const path=require("path");

app.use(express.static(path.join(__dirname,"public")));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
});

// app.get("/",function(req,res){
//     console.log("hiiii");
// });


app.get("/home",function(req,res){
    res.send("hello");
});

app.listen(8085,function(){
    console.log("server is running at port number 8085");
});