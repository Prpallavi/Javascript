var express = require("express");
var a = express();

var newrouter =require("./prouter")

a.use(express.urlencoded({extended: true}))
a.use(express.json());

a.set('view engine', 'pug');
a.set('views','./views');

a.get("/",function(req,res){
    res.sendFile(__dirname+"/newmain.html");
})

a.use("/prouter",newrouter)

a.listen(7040,function(){
    console.log("listening in 7040")
})

