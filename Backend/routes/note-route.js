const express=require('express')
const mongoose=require('mongoose')
const Note =require('../models/note')
const router=express.Router();

router.get('/',async(req,res)=>{
    const result =await Note.find();
    res.status(200).json({
        data:result
    })
})
router.post('/create',async(req,res)=>{
    try{
        const {title,note}=req.body;
        const result =await Note.create({
            title,
            note
        });
        res.status(201).json({
            message:"Note Created"
        })

    }catch(err){
        res.status(400).json({
            message:"Error"
        })
    }

})
router.route('/note/:id')
.get(async(req,res)=>{
    const id=req.params.id;
    const result=await Note.findById(id)
    if(result){
        res.status(200).json({
            data:result
        })
        
    }
    else{
        res.status(400).json({
            messgae:"Note not Found",

        }) 
    }
})
.put(async(req,res)=>{
    try{
        const id=req.params.id;
    const {title,note}=req.body;
    const result=await Note.findByIdAndUpdate(id,{title,note})
    res.status(200).json({
        message:"Note Updated",
    
    })
    }catch{
        res.status(400).json({
            messgae:"Error",

        }) 
    }
    

   
})
.delete(async(req,res)=>{
    try{
        const id=req.params.id;
    const result=await Note.findByIdAndDelete(id)
    res.status(200).json({
        messgae:"Note Deleted",
    
    })
    }catch{
        res.status(400).json({
            messgae:"Error",

        }) 
    }
    
    

})

module.exports=router;