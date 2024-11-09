
const express = require('express');
const { dbConnect, ProductModel } = require("./mongoose");

const app = express();
app.use(express.json())


app.get('/list', async (req, res) => {
    
    await dbConnect();

    let result = await ProductModel.find();
    res.send(result)
})

app.post('/create', async (req, res) => {
    
    await dbConnect();

    let result = await ProductModel(req.body).save();
    res.send(result)
})

app.put('/update/:_id', async (req, res) => {
    
    await dbConnect();

    let result = await ProductModel.updateOne(
        req.params,
        {$set: req.body}
    );
    res.send(result)
})


app.delete('/delete/:_id', async (req, res) => {
    
    await dbConnect();

    let result = await ProductModel(req.params).deleteOne(req.params);
    res.send(result)
})



app.listen(5000);
