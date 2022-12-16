var mongoClient = require("mongodb").MongoClient;
var express = require("express");
var cors = require("cors");

var app = express();

app.get("/",(req, res)=>{
    res.send ("<h2>Welcome to web API</h2>");

});
app.get("/customers",(req,res)=>{
    mongoClient.connect("mongodb://127.0.0.1:27017",(err, clientObject)=>{
        if(!err){
           var database = clientObject.db("reactdb");
           database.collection("customers").find({}).toArray((err, documents)=>{
                if(!err){
                    res.send(documents);
                }
           })
        } else {
            console.log(err);
        }
    })
});

app.post("/registercustomer",(req, res)=>{
    var customerDetails = {
        UserId: req.body.UserId,
        UserName: req.body.UserName,
        Password: req.body.Password,
        Email: req.body.Email,
        Mobile: req.body.Mobile
    }
    mongoClient.connect("mongodb://127.0.0.1:27017",(err,clientObject)=>{
        if(!err){
            var database = clientObject.db("reactdb");
            database.collection("customers").insertOne(customerDetails,(err, result)=>{
                if(!err) {
                    console.log("Record Inserted");
                    res.redirect("/customers");
                }
                
            })
        }
    })
});
app.listen(4000);
console.log(`Server Started : http://127.0.0.1:4000`);