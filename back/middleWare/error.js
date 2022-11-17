const ErrorHandler =require("../utils/errorHandler");

module.exports =(err,req,res,next) =>{
    err.status=err.statusCode || 500;
    err.message=err.message || "internal server error";

    //mongo id error
     if(err.name == "CastError"){
        const message=`content not found. ${err.path}`;
        err=new ErrorHandler(message,400);
     }

    res.status(err.statusCode).json({
        success: false,
        message: err.message
    })
}