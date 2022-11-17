const app=require("./app");
const dotenv = require("dotenv");
const connectDataBase=require("./config/database")

//handling uncaught exception
process.on("uncaughtException",(err)=>{
    console.log(`Error:${err.message}`);
    console.log(`Shutting down the server due to uncaught exception`);
    process.exit(1);
})

dotenv.config({path:"back/config/config.env"})
connectDataBase();

const server = app.listen(process.env.PORT, ()=>{
    console.log(`Server is working on  http://localhost:${process.env.PORT}`)
})


//unhandled promise error
process.on("unhandledRejection",(err)=>{
    console.log(`Error:${err.message}`);
    console.log(`Shutting down the server due to unhandled promise error`);

    server.close(()=>{
        process.exit(1);
    });
})