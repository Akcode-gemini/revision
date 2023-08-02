const express=require('express');
const router=express.Router();
const Model = require('../model/model');
router.use(express.json())
 //Post Method
 //This router is taking the route as the first parameter. Then in the second parameter it's taking a callback.
 //We use res for sending responses to our client, like Postman, or any front-end client. And we use req for receiving requests from a client app like Postman, or any front-end client.
 router.post('/post',async(req,res)=>{
    const data=new Model({
        name:req.body.name,
        age:req.body.age
    })
    // res.send('Post API')
    try {
        const dataToSave =await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
 })
 //Get all method
router.get('/getAll',async(req,res)=>{
    //res.send('Get All API')
    //Model.find method to fetch all the data from the database. Then, we are returning it back in JSON format. If we have an error, we will get that too.
    try{
        const data= await Model.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
    
})
//Get by ID Method
router.get('/getOne/:id', async(req, res) => {
    //res.send('req.params.id')
    try{
        const data = await Model.findById(req.params.id);
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})
//Update by ID Method
router.patch('/update/:id', async(req, res) => {
    //res.send('Update by ID API')
    try{
        const id=req.params.id;
        const updatedData=req.body;
        const options={new:true};
        const result=await Model.findByIdAndUpdate(
            id,updatedData,options
        )
        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Delete by ID Method
router.delete('/delete/:id', async(req, res) => {
    //res.send('Delete by ID API')
    try {
        const id = req.params.id;
        const data = await Model.findByIdAndDelete(id)
        res.send(`Document with ${data.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
}) 
module.exports=router
