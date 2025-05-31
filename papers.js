const { MongoClient } = require('mongodb');
const papers = require('./papers.json');

const uri = "YOUR_ATLAS_CONNECTION_URI";
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const db = client.db("gate_prep");
    const collection = db.collection("papers");

    const result = await collection.insertMany(papers);
    console.log(`Inserted ${result.insertedCount} papers`);
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
