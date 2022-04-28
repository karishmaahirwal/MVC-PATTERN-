var express=require("express");
const { get_data, postdata,putdata,delete_data } = require("../controller/logic");
var app=express();
const router=express.Router()

// const{get_data,post,post_data,put,put_data,delete_data}=require("../router.js/router")

// app.get("/",(req,res)=>{
// res.send(" All API is working now ")
// })

router.get('/getdata',get_data)

router.post("/postdata",postdata)

router.put("/putdata",putdata)

router.delete("/delete_data",delete_data)

module.exports={router}