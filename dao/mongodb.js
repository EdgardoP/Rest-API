const MongoClient = require('mongodb').MongoClient;
import { MongoClient } from 'mongodb'
let db = null;
let client = null;

export const getDb = async() => {
    if (db) {
        return db;
    }
    if (!client) {
        client = await MongoClient.connect(process.env.MONGOURI, {
            userNewParser: true,
            useUnifiedTopology: true
        })
        db = client.db();
        return db;
    }
}

export default getDb;