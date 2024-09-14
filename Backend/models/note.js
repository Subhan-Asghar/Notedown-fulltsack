const mongoose=require('mongoose');
const userSchema= new mongoose.Schema({
    title:{
        type:String,
        
    },
    note:{
        type:String,
        
    }
    
},{timestamps:true})

const Note=mongoose.model('note',userSchema);
module.exports=Note
