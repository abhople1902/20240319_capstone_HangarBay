const express = require('express');
const mongoose = require('mongoose');
const inventoryRoute = require('./routes/inventory');
const complianceRoute = require('./routes/compliance');
const repairRoute = require('./routes/repairs');
const technicianRoute = require('./routes/technician');

const { JWT_SECRET } = require('../05_Backend/config');

const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = 'mongodb+srv://Ayush:2BXNWx4qaZkr3C5y@cluster0.ijs1ymf.mongodb.net/HangarBay?retryWrites=true&w=majority&appName=Cluster0';


app.use(express.json());
app.use('/inventory', inventoryRoute);
app.use('/compliance', complianceRoute);
app.use('/repairs', repairRoute);
app.use('/technician', technicianRoute);


mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(error => console.error('MongoDB connection error:', error));



// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://Ayush:2BXNWx4qaZkr3C5y@cluster0.ijs1ymf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("Hangarbay").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);

