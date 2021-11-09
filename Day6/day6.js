var express =require('express');
var app=express();
app.get('/',(req,res) =>{res.send("Welcome to day6.js");
})
var server=app.listen(3000,()=>{
    var host=server.address().host
    var port=server.address().port
    console.log("this app is listening at http://%s:%s")
})