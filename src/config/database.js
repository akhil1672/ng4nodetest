const mongodb=require('mongodb').MongoClient;
require('dotenv').config();
let url = "mongodb://localhost:27017/movies";
module.exports=function db(){
    return new Promise((res,rej)=>{
        mongodb.connect (process.env.MONGO_DB,function(err,db){
            if(err){
                console.error(err);
                rej(err);
            }
            else{
                console.log("Database connected");
                res(db);
            }
        })
    })
}