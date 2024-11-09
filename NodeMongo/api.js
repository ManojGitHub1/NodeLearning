const express = require('express')
const dbConnect = require('./mongoDB')
const app = express();
// to get id in url
const mongoDB = require('mongodb');

// to convert to json
app.use(express.json());

// Below is REST API
// post(insert), get(read), put(update), delete(delete)
// Using req.body to get Dynamic data
app.get('/', async (req, res) => {
    const collection = await dbConnect();
    const data = await collection.find({}).toArray();
    await collection.client.close();
    console.log('Database connection closed');
    res.send(data)
});


app.post('/', async (req, res) => {
    const collection = await dbConnect();
    const data = await collection.insertOne(req.body);
    console.log("Successfully inserted.")
    await collection.client.close();
    console.log('Database connection closed');
    res.send(data);
})


app.put('/', async (req, res) => {
    const collection = await dbConnect();
    const data = await collection.updateOne(
        {name: "TUF"},
        {$set: req.body}
    );
    console.log('Successfully Updated.');
    await collection.client.close();
    console.log('Database connection closed');
    res.send(data);
})


// req.param.body to send data in url
// localhost:5000/name (in DB)
app.put('/:xyz', async (req, res) => {
    const collection = await dbConnect();
    const data = await collection.updateOne(
        {name: req.params.xyz},
        {$set: req.body}
    );
    console.log('Successfully Updated.');
    await collection.client.close();
    console.log('Database connection closed');
    res.send(data);
})


app.delete('/:id', async (req, res) => {
    const collection = await dbConnect();
    const data = await collection.deleteOne({_id: new mongoDB.ObjectId(req.params.id)});
    console.log('Successfully Deleted.');
    await collection.client.close();
    console.log('Database connection closed');
    res.send(data);
});


app.listen(5000);

