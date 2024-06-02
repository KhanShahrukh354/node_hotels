const express=require('express');
const router=express.Router();
const menuItem=require('./../models/MenuItem');

router.post('/',async(req,res)=>{
    try{
        const data=req.body;
        const newMenuItem= new menuItem(data);
        const response=await newMenuItem.save();
        console.log('Data saved successfully');
        res.status(200).json(response);
    } catch(err){ 
        console.log(err); 
        res.status(500).json({error: 'Internal server Error'});
    } 
  })

  router.get('/',async(req,res)=>{
    try{
        const data=await menuItem.find();
        console.log('data fetched successfully');
        res.status(200).json(data);
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal server Error'});
    }
  })
  router.get('/:tasteType',async(req,res)=>{
    try{
        const tasteType=req.params.tasteType;
        if(tasteType=='sweet' || tasteType=='sour' || tasteType=='bitter'){
            const response= await menuItem.find({taste : tasteType});
            console.log('Data fetched Successfully');
            res.status(200).json(response);
        }else{
            res.status(404).json({error:'Invalid Taste Type'});
        }
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal server Error'});
    }
  })

  router.put('/:id',async(req,res)=>{
    try{
        const personId=req.params.id;
        const updatedPersonData=req.body;

        const response = await menuItem.findByIdAndUpdate(personId,updatedPersonData,{
            new:true,
            runValidators:true,
        })
        if(!response){
            return res.status(404).json({error:'Invalid Menu Item'});
        }
        console.log('Data updated successfully');
        res.status(200).json(response);
    }catch(err){
        console.log(err);
        res.status(500).json({error:'Internal Server Error'});
    }
  })
  router.delete('/:id',async(req,res)=>{
    try{
        const personId=req.params.id;
        const response=await menuItem.findByIdAndDelete(personId);

        if(!response){
            return res.status(404).json({error :'Invalid menu item'});
        }
        console.log('Data Deleted');
        res.status(200).json({message:'Menu Item deleted SuccesFully'});
    }catch(err){
        console.log(err);
        res.status(500).json({error:'Internal Server Error'});
    }
  })
  module.exports=router;