const fs=require("fs");

fs.writeFile("best.txt","hello,savaliya sunil",(err)=>{
    if(err) throw err;
    console.log("file saved succesfully!");
});


fs.readFile("best.txt","utf8",(err,data)=>{
    if(err) throw err;
    console.log("file content:",data);
});
