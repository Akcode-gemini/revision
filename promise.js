const fs=require("node:fs/promises")
console.log("first")
fs.readFile("./files/input.txt","utf-8")
.then((data)=>console.log(data))
.catch((error)=>console.log(error));
console.log("second")