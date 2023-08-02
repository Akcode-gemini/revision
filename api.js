require('dotenv').config();
const express = require('express')
const mongoose=require('mongoose')
const routes = require('./routes/routes');
const mongoString=process.env.DATABASE_URL
//connect database to the server
mongoose.connect(mongoString);
const database=mongoose.connection
//throw success or an error message depending on whether our database connection is successful or fails
database.on('error',(error)=>{//on meansit will connect to the database, and throws any error if the connection fails.
    console.log(error)
})
database.once('connected',()=>{//once means it will run only one time if  it is successful, it will show a message that says Database Connected.
    console.log("Database Connected");
})
const app = express()
app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next() 
})
app.use('/api',routes)// this app.use takes two things. One is the base endpoint, and the other is the contents of the routes. Now, all our endpoints will start from '/api'.
app.listen(3000,()=>{
    console.log("server started at ${3000}")
}) 