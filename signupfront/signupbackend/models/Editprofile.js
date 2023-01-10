const mongoose = require('mongoose')
require("dotenv").config()

const editprofile = new mongoose.Schema({
    profile_image:{
        type:String,
        required: false
    },
    fullname:{
        type:String,
        required: [true,'Name feild is required!'],
    },
    nic:{
        type:String,
        required: false
    },
    email:{
        type:String,
        required: [true, 'Email feild is required!'],
    },
    location:{
        type:String,
        required: [true, 'Location feild is required!'], 
    },
    bio:{
        type:String,
        required: [true, 'Bio feild is required!'],
    },
    personalwebsite:{
        type:String,
        required: [true, 'Personal website is required!'],
    },
    portfolioURL:{
        type:String,
        required: [true, 'Portfolio URL is required!'],
    },
    date:{
        type:Date,
        default:Date.now
    }

})

editprofile.save((err,doc) =>{
    if(err){
        return res.status(422).json({
            sucess:false,
            message:"edit faild,check the validation errors",
            data:err
        
        });
    }else{
        return res.status(200).json({
        success:true,
        message:"Successfully"
        
        });
        
    }
});


module.exports = mongoose.model('client', editprofile)