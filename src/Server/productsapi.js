var mongoClient = require("mongodb").MongoClient;
var express = require("express");
var cors = require("cors");

var conString = "mongodb://localhost:27017";

var app = express();
app.use(express.urlencoded({
    extended:true
}))
app.use(express.json());
app.use(cors());


//Read
app.get("/products",(req, res)=>{
   mongoClient.connect(conString,(err, clientObject)=>{
    if(!err) {
        var database = clientObject.db("reactdb");
        database.collection("products").find({}).toArray ((err,documents)=>{
            if(!err){
                res.send(documents);
                res.end();
            }
        })
    }
   })
});

app.get("/details/:id",(req,res)=>{

  var id = parseInt (req.params.id)  
    mongoClient.connect(conString,(err,clientObject)=>{
    if(!err){
        var database = clientObject.db("reactdb");
        database.collection("products").find({ProductId:id}).toArray((err, documents)=>{
            if(!err){
                res.send(documents);
            }
        })
    }    

    })
});

//Create
app.post("/addproduct", (req, res)=>{
    var product = {
        ProductId: parseInt(req.body.ProductId),
        Name: req.body.Name,
        Price: parseFloat(req.body.Rating),
        Rating: parseFloat(req.body.Rating)
    };
    mongoClient.connect(conString,(err, clientObject)=>{
        if(!err){
            var database = clientObject.db("reactdb");
            database.collection("products").insertOne(product,(err,result)=>{
             if(!err){
                console.log("Record Inserted");
                res.redirect("/products");
             }else{
                console.log(err);
             }   
            })
        }
    })
});
//Update

app.put("/updateproduct/:id",(req,res)=>{
    var id = parseInt(req.params.id);
    mongoClient.connect(conString,(err, clientObject)=>{
        if(!err){
            var database = clientObject.db("reactdb");
            database.collection("products").updateOne({ProductId:id},{$set:{Name:req.body.Name, Price:parseFloat(req.body.Price), Rating:parseInt(req.body.Rating)}},(err, result)=>{
                if(!err){
                    console.log("Record Updated");
                    res.redirect("/products");
                }
            })
        }
    })
});
// Delete
app.delete("/deleteproduct/:id",(req, res)=>{
    var id = parseInt(req.params.id);
    mongoClient.connect(conString,(err, clientObject)=>{
        if(!err){
            var database = clientObject.db("reactdb");
            database.collection("products").deleteOne({ProductId:id},(err, result)=>{
                if(!err) {
                    console.log("Record Deleted");
                    res.redirect("/products");
                }
            })
        }
    })
});

app.listen(4000);
console.log("server Started : http://localhost:4000");