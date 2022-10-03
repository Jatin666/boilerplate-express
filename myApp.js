let express = require('express');
let app = express();
let absolutePath = __dirname + "/views/index.html";
require('dotenv').config();
// app.get("/", (req, res)=> {
//     res.send("Hello World")
//     });
    
//freecodecamp Implement a Root-Level Request Logger Middleware
app.use(function (req, res, next){
    console.log(req.method + " " + req.path + " - " +req.ip)
    next();
});



app.use("/public", express.static(__dirname + "/public"));

app.get("/", (req, res)=> {  //whenever this block will run this will go through the app.use
res.sendFile(absolutePath)
});


//freecodecamp use of .env file 
app.get("/json", function(req, res){
    var jsonResponse = { "message":"Hello json" };
    if (process.env.MESSAGE_STYLE === "uppercase"){
        jsonResponse.message = jsonResponse.message.toUpperCase()}
        res.json(jsonResponse);
});

//freecodecamp use of console.log
console.log("Hello World");


































 module.exports = app;
