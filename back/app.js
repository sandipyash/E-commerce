const express=require("express");
const app=express();

const errorMiddleware=require("./middleWare/error");

app.use(express.json());

//route
const product = require("./routes/productRouter");
const user = require("./routes/userRouter");
app.use("/api/v1",product);
app.use("app/v1",user);

//middleware error
app.use(errorMiddleware);

module.exports=app