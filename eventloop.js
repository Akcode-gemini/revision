const fs=require('fs')
console.log("Line 1");
//stored in 1st phase
 setTimeout(function(){
  console.log("Line 2");
 },0)
//stored in 2nd phase
fs.readFile('./files/input.txt',()=>{
    console.log("file read complete")
    //stored in 1st phase
    // setTimeout(function(){
    //     console.log("Line 2");
    // },0)
    // //stored in 3rd phase
    // setImmediate(()=>console.log('SetImmediate call back executed'))
    // process.nextTick(()=>{console.log("Process nesTick callback executed")})
})//io tasks are performance intensive they are not going to complete the job immediately
// call back function is pushed into the call back queue when it has complete its function
//stored in 3rd phase
setImmediate(()=>console.log('SetImmediate call back executed'))//should expire before any other timer but that is not always the case so it is a bugk
console.log("Line 3");