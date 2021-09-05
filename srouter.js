var express = require("express");
var router=express.Router();
var stud =[];

router.get("/regstudent",function(req,res){
    res.sendFile(__dirname+"/register.html");
})

router.get("/studentlist",function(req,res){
    res.render("students",{
        allstudents:stud
    })
})

router.post("/regstudent",function(req,res){
    stud.push(req.body);
    res.send("Students Registration Successful")
})

module.exports = router;

