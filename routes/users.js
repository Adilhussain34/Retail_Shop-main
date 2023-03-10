var express = require('express');
var router = express.Router();
var mongoose=require('mongoose');
const { Passport } = require('passport');
const passport = require('passport');
var passportLocalMongoose  =require('passport-local-mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/retailer')




var userSchema=mongoose.Schema({
  username:String,
  name:String,
  email:String,
  password:String,
  s:String,
  profilepic:{
    type:String,
    default:"1637398471424-212362868pexels-cesar-perez-733745.jpg"
  },
  item:{
    type:Array,
    default:[]
  },
  products:[{type:mongoose.Schema.Types.ObjectId,ref:'product'}]
})
userSchema.plugin(passportLocalMongoose);
// mongoose.plugin(passportLocalMongoose)

module.exports=mongoose.model('user',userSchema)