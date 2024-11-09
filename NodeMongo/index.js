const dbConnect = require('./mongoDB')

// Main function to retrieve data
const main = async () => {

    const collection = await dbConnect();

    try {
        // .then to handle the promise
        // as .toArray() is a promise, we need to handle it with .then()
        const data = await collection.find({}).toArray();
        console.warn(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    } finally {
        // Ensure the client closes, regardless of success or error
        await collection.client.close();
        console.log('Database connection closed');
    }
}

main();
