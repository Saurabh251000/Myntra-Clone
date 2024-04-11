import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullName:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true,
    unique:true
  },
  password:{
    type:String,
    required:true,
    minlength:6
  },
  mobileNumber:{
    type:String,
    required:true,
    minlength:10,
    unique:true
  }
},{timestamps:true});

const User = mongoose.model("User",userSchema);

export default User;

