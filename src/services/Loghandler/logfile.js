const writer=require('../../config/writer');
let writelog;
async function writefn(){
    writelog=await writer();
}

writefn();

let Logs = function (req, res, next) {
    try{
        console.log("log file inserted");
        writelog.write("\r\nMovie inserted at " + new Date()+"\r\n");
        next();
    }
    catch(err){
        console.error(err);
    }
}

module.exports=Logs;
