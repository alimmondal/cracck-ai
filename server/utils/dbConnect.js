
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.DATABASE_URI;
// console.log("uri", uri)

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

let db;
 const connect = async()=> {
  try {
    // Connect the client to the server	(optional starting in v4.7)
      await client.connect();
      db=client.db("crack-ai-db")
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
// connect().catch(console.dir);
module.exports={db,connect}
