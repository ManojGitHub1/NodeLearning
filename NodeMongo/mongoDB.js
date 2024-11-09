const { MongoClient } = require('mongodb');

// Connection URL and Database Name
const url = 'mongodb://localhost:27017';
const dbName = 'e-com';

// Database connection function
async function dbConnect() {

    const client = new MongoClient(url);

    try {
        // Connect to MongoDB server
        await client.connect();
        console.log('Successfully connected to the database');

        const db = client.db(dbName);
        return db.collection('products');

    } catch (error) {
        console.error('Error connecting to the database:', error);
    }
}

module.exports = dbConnect;
