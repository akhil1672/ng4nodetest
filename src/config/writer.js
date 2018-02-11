let fs = require('fs');

module.exports=function writefile(){
    return new Promise((res,rej)=>{
        let writelog = fs.createWriteStream("logfile.txt", { 'flags': 'a' });
        res(writelog);
    })
    
}