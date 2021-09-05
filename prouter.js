var express = require("express");
var r = express.Router();
var data =[];


r.get("/newreg",function(req,res){
    res.sendFile(__dirname+"/pregister.html");

})


r.get("/newreglist",function(req,res){
    res.render("details",{
        alldetails:data
    })
})

r.post("/newreg",function(req,res){
    data.push(req.body)
    res.send("REGISTRATION SUCCESSFUL")
})
module.exports = r;
