require('dotenv').config();
const express= require('express');
const app=express();
const cors=require('cors');
const body=require('body-parser');
const path = require('path');
// const helmet=require('helmet');
// const db=require('./src/config/database');

// async function connectdb(){
//     let database=await db();
// }

// connectdb();

const home=require('./src/routes/home.js');
const routes=require('./src/routes/routes.js');

// app.use(helmet());
app.use(cors());
app.use(body.json());
app.use(body.urlencoded({extended:false}));
//app.use(express.static(path.join(__dirname,'dist')));

app.use('/',home);
app.use('/api',routes);
port=3000;
app.listen(process.env.PORT || port,()=>{
    console.log("Server started "+port);
})

module.exports=app;

