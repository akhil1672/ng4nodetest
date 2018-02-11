const express=require('express');
const app=express.Router();

app.get('/',function(req,res){
    res.sendFile('index.html', { root:'../ng4/src/'});
})

module.exports=app;