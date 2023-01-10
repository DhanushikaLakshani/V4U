const mongoose = require('mongoose')
const bcrypt = require("bcrypt");
require("dotenv").config();
const jwt = require("jsonwebtoken");

const SALT = 10;

const signUpTemplate = new mongoose.Schema({
    firstName:{
        type:String,
        required: [true,'FirstName feild is required!'],
    },
    lastName:{
        type:String,
        required: [true,'LastName feild is required!'],
    },
    email:{
        type:String,
        required: [true, 'Email feild is required!'],
    },
    password:{
        type:String,
        required: [true, 'Password feild is required!'], 
    },
    user:{
        type:String,
        enum:['READER','AUTHOR','TRANSLATOR','EDITOR'],
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})




        // Saving user data
    signUpTemplate.pre('save', function (next) {
    var user = this;
    if (user.isModified('password')) {
        //checking if password field is available and modified
        bcrypt.genSalt(SALT, function (err, salt) {
            if (err) return next(err)
        
            bcrypt.hash(user.password, salt, function (err, hash) {
                if (err) return next(err)
                user.password = hash;
                next();
            });
        });
    } else {
        next();
    }
});


module.exports = mongoose.model('client', signUpTemplate)