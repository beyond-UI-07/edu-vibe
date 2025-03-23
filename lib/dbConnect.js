// import mongoose from "mongoose";

// const MONGODB_URI = process.env.MONGODB_URI;

// if (!MONGODB_URI) {
//   throw new Error("Please define the MONGODB_URI environment variable");
// }

// export default async function dbConnect() {
//   try {
//     if (mongoose.connection.readyState >= 1) {
//       console.log("Already connected to MongoDB");
//       return;
//     }

//     await mongoose.connect(MONGODB_URI);
//     console.log("Connected to MongoDB ✅");
//   } catch (error) {
//     console.error("MongoDB connection error ❌:", error);
//     throw new Error("MongoDB connection failed");
//   }
// }

import { MongoClient, ServerApiVersion } from "mongodb";

function dbConnect(collectionName) {
  const uri = process.env.MONGODB_URI;
  console.log("uri, ", uri);
  // Create a MongoClient with a MongoClientOptions object to set the Stable API version
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

  return client.db(process.env.DB_NAME).collection(collectionName);
}

export default dbConnect;
