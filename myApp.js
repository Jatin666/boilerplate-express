let express = require('express');
let app = express();
let absolutePath = __dirname + "/views/index.html";
require('dotenv').config();
var bodyParser = require('body-parser')
// app.get("/", (req, res)=> {
//     res.send("Hello World")
//     });
    
//freecodecamp Implement a Root-Level Request Logger Middleware
app.use(function (req, res, next){ //it is running on all the directories
    console.log(req.method + " " + req.path + " - " +req.ip)
    next();
});

//free code camp Use body-parser to Parse POST Requests
//mount the body-parser middleware here
app.use(bodyParser.urlencoded({extended: false}))
//parse application json
app.use(bodyParser.json())

// app.get("/body-parsed-info", function(req,res){
//     console.log(bodyParser);
// });



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



//freecodecamp Chain Middleware to Create a Time Server
//in this i made a new function which returns the time to string and sop retrun the string and save the request and req.time is the key to to string and .json is responding thet time and request the time

function getTheCurrentTimeString(){
    return new Date().toString();
}

app.get("/now", function(req, res, next){
    req.time = getTheCurrentTimeString();
    next();

},function (req,res){
    res.json({time: req.time});
});

//freecodecamp Get Route Parameter Input from the Client

app.get("/:word/echo", function(req,res){
    res.json({echo: req.params.word});
});

//freecodecamp Get Query Parameter Input from the Client
app.get("/name", function(req,res){
res.json({"name": req.query.first + " " + req.query.last });
console.log(req.query);
});

app.post("/name", function(req,res){
    res.json({"name": req.body.first + " " + req.body.last });
});





//freecodecamp use of console.log
console.log("Hello World");


































 module.exports = app;
