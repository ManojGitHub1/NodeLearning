const dbConnect = require('./mongoDB')

const deleteData = async () => {

    const collection = await dbConnect();

    try {
        const data = await collection.deleteOne(
            {name: 'Nord 3'}
        )
        if(data.acknowledged){
            console.log("Data Deleted Successfully.");
            console.log("Delete Count " + data.deletedCount)
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    } finally {
        // Ensure the client closes, regardless of success or error
        await collection.client.close();
        console.log('Database connection closed');
    }

}

deleteData();

