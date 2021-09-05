var express = require("express");
var router=express.Router();
var emp =[];

router.get("/regemployee",function(req,res){
    res.sendFile(__dirname+"/registeremp.html");
})

router.get("/employeelist",function(req,res){
    res.render("employees",{
        allemployees:emp
    })
})

router.post("/regemployee",function(req,res){
    emp.push(req.body);
    res.send("Employees Registration Successful")
})

module.exports = router;

