const dbConnect = require('./mongoDB')

const insert = async () => {

    const collection = await dbConnect();

    try {
        // const data = await collection.insertMany(
        //     [
        //         {name: "Alian", brand: "Dell", price: 350000, category: "Laptop"},
        //         {name: "Nord 3", brand: "Oneplus", price: 30000, category: "Mobile"},
        //         {name: "Vision Pro", brand: "Apple", price: 150000, category: "AR/VR"}
        //     ]
        // )
        const data = await collection.insertOne(
            {name: "Macbook M3", brand: "Apple", price: 120000, category: "Laptop"}
        )
        if(data.acknowledged){
            console.log("Data Inserted Successfully.");
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    } finally {
        // Ensure the client closes, regardless of success or error
        await collection.client.close();
        console.log('Database connection closed');
    }

}

insert();

