let fs = require('fs')  
let file = process.argv[2]  
  
fs.readFile(file, function (err, data) {  
  let line = data.toString().split('\n').length - 1  
  console.log(line)  
})