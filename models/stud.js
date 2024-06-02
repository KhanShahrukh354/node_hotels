const mongoose=require('mongoose');
const studentSchema= new mongoose.Schema({
    name:{
        type:String,    
    },
    age:{
        type:Number,
    },
    marks:{
        type:Number
    }
}) 
const Student=mongoose.model('Student',studentSchema);
module.exports=Student;