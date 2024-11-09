const express = require('express');
const { dbConnect, ProductModel } = require("./mongoose");

const app = express();
app.use(express.json())

app.get("/search/:key", async (req, res) => {

    await dbConnect();

    let result = await ProductModel.find(
        {
            $or: [
                // single search
                
                {"name": {$regex: req.params.key}},
                // multiple search
                {"brand": {$regex: req.params.key}},
                {"category": {$regex: req.params.key}}
            ]
        }
    );
    res.send(result)
});


app.listen(5000);
