const User = require("../models/userModel");
const ErrorHandler = require("../utils/errorHandler");
const asyncError = require("../middleWare/asyncError");

//register
exports.registerUser = asyncError(async(req,res,next)=>{
    const {name,email,password}=req.body;
    const user=await User.create({
        name,email,password,
        avatar:{
            public_id:"this is a sample id",
            url:"profilePicUrl"
        }
    })
    res.status(201).json({
        success: true,
        user
    })
})