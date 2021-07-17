const route = require('express').Router()
const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://dbUser:ufOaX4NibhzCa0Id@cluster0.njbpx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";


async function writeTask (toWrite){
    const client = await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    
    const collection = client.db("email").collection("Intersted");
    console.log(toWrite);
    const email = {
        email: toWrite
    };
    const res = await collection.insertOne(email);
    console.log(res);
    client.close();
  
}





route.post('/', function (req, res) {
    writeTask(req.body.new)
    res.redirect('.')
})

module.exports = route