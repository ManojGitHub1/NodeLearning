
const { dbConnect, ProductModel } = require("./mongoose");


const findInDB = async () => {
    await dbConnect();

    let result = await ProductModel.find({name: "Mi A3"});
    console.log("Products:\n", result);
};


const saveInDB = async () => {
    await dbConnect();

    let product = new ProductModel({
        name: "m9",
        price: 10000,
        brand: "Micromax",
        category: "Mobile",
    });

    let result = await product.save();
    console.log("Product saved:", result);
};


const updateInDB = async () => {
    await dbConnect();

    let result = await ProductModel.updateOne(
        { name: "m9" },
        { $set: { price: 15000, name: "m8" } }
    );
    console.log("Product updated:", result);
};


const deleteInDB = async () => {
    await dbConnect();

    let result = await ProductModel.deleteOne({ name: "m9" });
    console.log("Product deleted:", result);
};


findInDB();
// saveInDB();
// updateInDB();
// deleteInDB();
