let express = require('express');
let app = express();
let absolutePath = __dirname + "/views/index.html";
require('dotenv').config();
// app.get("/", (req, res)=> {
//     res.send("Hello World")
//     });
    
app.use("/public", express.static(__dirname + "/public"));

app.get("/", (req, res)=> {  //whenever this block will run this will go through the app.use
res.sendFile(absolutePath)
});

app.get("/json", function(req, res){
    var jsonResponse = { "message":"Hello json" };
    if (process.env.MESSAGE_STYLE === "uppercase"){
        jsonResponse.message = jsonResponse.message.toUpperCase()}
        res.json(jsonResponse);
});


console.log("Hello World");


































 module.exports = app;
