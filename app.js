var express = require("express");
var app = express();
//var stud =[];
//var emp =[];
var studentrouter = require("./srouter")
var employeerouter = require("./erouter")

app.use(express.urlencoded({extended: true}))
app.use(express.json());

app.set('view engine', 'pug');
app.set('views','./views');

app.get("/",function(req,res){
    res.sendFile(__dirname+"/main.html");
})

app.use("/srouter",studentrouter)

app.use("/erouter",employeerouter)

//reg
//app.get("/reg",function(req,res){
    //res.sendFile(__dirname+"/register.html");
//})

//app.get("/regstudent",function(req,res){
//    res.sendFile(__dirname+"/register.html");
//})

//app.get("/regemployee",function(req,res){
 //   res.sendFile(__dirname+"/registeremp.html");
//})



//reg2 only register code
//app.get("/reg2",function(req,res){
    //console.log("req qery params data::",req.query)
    //stud.push(req.query)
    //res.send(JSON.stringify(stud))
   

    //res.render("students",{
       // allstudents:stud
    //})
//})




//app.get("/studentlist",function(req,res){
 //   res.render("students",{
 //       allstudents:stud
  //  })
//})
//app.get("/employeelist",function(req,res){
  //  res.render("employees",{
  //      allemployees:emp
  //  })
//})

//app.post("/regstudent",function(req,res){
 //   stud.push(req.body);
  //  res.send("Students Registration Successful")
//})
//app.post("/regemployee",function(req,res){
  //  emp.push(req.body);
   // res.send("Employees Registration Successful")
//})






//app.post("reg2",function(req,res){
    //console.log(req message body::",req.body)
    //res.send("success")
//})

app.listen(8090,function(){
    console.log("listening on 8090")
})