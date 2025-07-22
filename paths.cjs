const path=require("path");

console.log("directory:",__dirname);
console.log(path.basename(__dirname+"/best.txt"));
console.log("Full path:",path.resolve(__dirname,"myfile.txt"));

const moment =require("moment");

console.log("Date and Time:",moment().format("DD-MM-YYYY HH:MM:SS"));
