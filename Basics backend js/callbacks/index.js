const fs = require('fs')
fs.readFile("input.txt", "utf8", (err, data)=>{
    if(err){
        console.log("error in reading file", err);
        return
    }
    console.log(data)
})