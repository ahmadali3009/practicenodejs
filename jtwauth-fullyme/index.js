let express = require('express');
let userRouter = require('./routes/user') 
let connection = require('./connection')
let user = require("./model/user")
let server = express();
let path = require("path");
const { default: mongoose } = require('mongoose');

connection("mongodb://127.0.0.1:27017/CRUD").then(()=>{console.log("connection connected")}).catch((err)=>{console.log(err)})

server.use(express.urlencoded({extended : false}))
server.get("/" , async (req , res) =>
{
    let allUser = await user.find({})
    console.log(allUser);
    res.render("home" , {allUser})
    
})

server.set("view engine" , "ejs")
server.set("views" , path.resolve("./views"))

server.use("/user" , userRouter)
server.listen(3000 , (req , res) =>
{
    console.log("the server is started")
})