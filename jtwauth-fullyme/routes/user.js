let express = require('express')
let user = require("../model/user")
let router = express.Router();

router.get("/login" , (req , res)=>
{
    return res.render('login')
})

router.post("/login" , async (req , res) => 
{
   let body = req.body
   let userData =  await user.create({ Name : body.name , Email : body.email , password: body.password })
   
   res.redirect("/")
})




module.exports = router;