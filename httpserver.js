const http =require('http');
const fs=require('fs');
const port =process.env.Port||3000;//to specify on which port application will be listened
const server=http.createServer((req,res)=>{
    console.log(res);
    res.statusCode=200;//ok
    //500 server not found
    //404 error not found
    res.setHeader('Content-Type','text/html')//response should be in html format
    //to tell the client which type of content server has send
    if(req.url=='/'){
        res.statusCode=200;
       
    }
    else if(req.url=='/about'){
        res.statusCode=200;
        res.end('<h1>here it is printed on screen</h1>')
    }
    else if(req.url=='/hello'){
        res.statusCode=200;
        const data=fs.readFileSync('index.html');
        res.end(data.toString());
    }
    else{
        res.statusCode=404;
        res.end('<h1>Not found</h1>')
     
     
    }
    
    
})
server.listen(port,()=>{
   console.log(`Server is listening on ${port}`)})