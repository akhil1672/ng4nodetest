const express = require('express');
const app = express.Router();
const fs=require('fs');
const getmovie=require('../services/movieService/getmovies');
const addmovie = require('../services/movieService/addMovie');
const updatemovie = require('../services/movieService/updatemovie');
const deletemovie = require('../services/movieService/deletemovie');
const getOnemovie = require('../services/movieService/getMovie');
const Logs=require('../services/Loghandler/logfile');

app.get('/movies',async function(req,res,next){
    try{
        let movies=await getmovie.getMovies();
        console.log("Geting movies...")
        res.json(movies);
    }
    catch(err){
        next('error');
    }
});

app.post('/movies',Logs,async function(req,res,next){
    let newmovie=req.body;
    try{
        let movie=await addmovie.addMovie(newmovie);
        res.json(movie);
    }
    catch(err){
        next('error');
    }
})

app.get('/movies/:name', async function (req, res, next) {
    let moviename = req.params.name
    console.log(moviename);
    try {
        let movie = await getOnemovie.getMovie(moviename);
        res.json(movie);
    }
    catch (err) {
        next('error');
    }
})

app.put('/movies/:name',async function(req,res,next){
    let umovie=req.body;
    console.log(umovie);
    let moviename=req.params.name;
    console.log(moviename);
    try {
        let movie = await updatemovie.updateMovies(moviename,umovie);
        res.json(movie);
    }
    catch (err) {
        next('error');
    }
})

app.delete('/movies/:name',async function(req,res,next){
    let moviename=req.params.name;
    try{
        let movie = await deletemovie.deleteMovies(moviename);
        res.json(movie);
    }
    catch(err){
        console.error(err);
        next('error');
    }
})

app.use('error',function(err,req,res,next){
    if(err){
        console.error(err);
    }
})


module.exports=app;