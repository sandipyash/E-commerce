const Product = require("../models/productModel");
const ErrorHandler = require("../utils/errorHandler");
const asyncError = require("../middleWare/asyncError");
const Features = require("../utils/features");

//admin
exports.createProduct= asyncError(async (req,res,next) => {
    const product=await Product.create(req.body);
    
    res.status(201).json({
        success:true,
        product
    })
})

//all product
exports.getAllProducts=asyncError(
    async (req,res) => {

    const resultPerPage=8; 
    const productsCount=await Product.countDocuments();

    
    const Feature=new Features(Product.find(),req.query)
    .search().filter().pagination(resultPerPage);
    const products=await Feature.query;

    res.status(200).json({
        success:true,
        products,
        productsCount,
        resultPerPage
    })
})

//get single product
exports.getProductDetails=asyncError(
    async (req,res,next) => {
    const product=await Product.findById(req.params.id);
    
   

    if(!product){
        return next(new ErrorHandler("product not found",404));
    }

    res.status(200).json({
        success: true,
        product,
       
    })
})

//update product
exports.updateProduct=asyncError(
    async (req,res,next) => {
    let product =await Product.findById(req.params.id);

    if(!product){
        return next(new ErrorHandler("product not found",404));
    }
     
    product=await Product.findByIdAndUpdate(req.params.id,req.body,{
        new: true,
        runValidators: true,
        useFindAndModify: false
    })
      
    res.status(200).json({
        success: true,
        product
    })
})

//delete product
exports.deleteProduct=asyncError(
    async (req,res,next) => {
    const product=await Product.findById(req.params.id);

    if(!product){
        return next(new ErrorHandler("product not found",404));
    }

    await product.remove();
    res.status(200).json({
        success: true,
        message: "product deleted successfully"
    })
})