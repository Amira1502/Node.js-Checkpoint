const fs = require('fs'); 
       
let data = fs.readFileSync(process.argv[2])  
var line = data.toString().split('\n').length - 1  
console.log(line)