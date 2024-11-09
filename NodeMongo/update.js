const dbConnect = require('./mongoDB')

const update = async () => {

    const collection = await dbConnect();

    try {
        const data = await collection.updateOne(
            {name: "Alian"},
            {$set: {name: "Alianware", price: 340000}}
        )
        if(data.acknowledged){
            console.log("Data Updated Successfully.");
            console.log("Update Count" + data.upsertedCount)
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    } finally {
        // Ensure the client closes, regardless of success or error
        await collection.client.close();
        console.log('Database connection closed');
    }

}

update();

