const { MongoClient } = require('mongodb');

const URI = "mongodb://localhost:27017/";

const client = new MongoClient(URI);

let db;

async function getDB() {
    if (db) return db;

    await client.connect();
    db = client.db('learn-db');

    return db;
}

module.exports = getDB;