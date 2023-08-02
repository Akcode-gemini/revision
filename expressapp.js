const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json())//initialize express to parse JSON data to get tha data
app.use(bodyParser.urlencoded({ extended: true }))//data can be nested data so we specify the url encoding as extended true
 

app.get('/', (req, res) => {
  res.sendFile(__dirname+"/index.html")
})
app.post('/', (req, res) => {
  const username = req.body.username;
  const password=req.body.password
  console.log("Username: " + username);
  console.log("Username: " + password);
  res.send("<h1>Data received</h1>");
})


// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })
app.listen(3004);