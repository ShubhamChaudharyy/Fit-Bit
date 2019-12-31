

const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const exerciseSchema=new Schema({
  username:{
      type:String,
      required:true,
      unique:true,
      trim:true,
      minlength:3
  },
  exercisename:{
    type:String,
    required:true
  },
  duration:{ type:Number,required:true},
 

}, {
timestamps:true,
});
const Exercise = mongoose.model('Exercise',exerciseSchema);
module.exports=Exercise;