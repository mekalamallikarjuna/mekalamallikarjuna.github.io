import React from 'react';
import { Accordion } from 'react-bootstrap';

const MongodbConcepts = () => {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header><b>Connecting to MongoDB</b></Accordion.Header>
        <Accordion.Body>
          <p>
            To connect to MongoDB from a Node.js application using the official MongoDB Node.js driver:
          </p>
          <pre>
            {`const { MongoClient } = require('mongodb');

// Connection URI
const uri = 'mongodb://localhost:27017/mydatabase';

// Create a new MongoClient
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// Connect to the MongoDB server
async function connectToMongoDB() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  } finally {
    await client.close();
    console.log('Disconnected from MongoDB');
  }
}

connectToMongoDB();`}
          </pre>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1">
        <Accordion.Header><b>Creating a Database</b></Accordion.Header>
        <Accordion.Body>
          <p>
            MongoDB does not require database creation before use. You can switch to a non-existent database and create collections on the fly.
          </p>
          <pre>
            {`// Switch to a specific database
const db = client.db('mydatabase');

// Create a new collection
const collection = db.collection('mycollection');`}
          </pre>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2">
        <Accordion.Header><b>Inserting Data</b></Accordion.Header>
        <Accordion.Body>
          <p>
            To insert data into a MongoDB collection:
          </p>
          <pre>
            {`// Insert a single document
const result = await collection.insertOne({ name: 'John Doe', age: 30 });

console.log('Inserted new document with ID:', result.insertedId);`}
          </pre>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="3">
        <Accordion.Header><b>Querying Data</b></Accordion.Header>
        <Accordion.Body>
          <p>
            To query data from a MongoDB collection:
          </p>
          <pre>
            {`// Find documents that match a query
const query = { name: 'John Doe' };
const cursor = collection.find(query);

// Iterate over the cursor
await cursor.forEach(doc => {
  console.log(doc);
});`}
          </pre>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="4">
        <Accordion.Header><b>Updating Data</b></Accordion.Header>
        <Accordion.Body>
          <p>
            To update data in a MongoDB collection:
          </p>
          <pre>
            {`// Update a single document
const filter = { name: 'John Doe' };
const updateDoc = {
  $set: { age: 31 }
};

const result = await collection.updateOne(filter, updateDoc);

console.log('Modified document count:', result.modifiedCount);`}
          </pre>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="5">
        <Accordion.Header><b>Deleting Data</b></Accordion.Header>
        <Accordion.Body>
          <p>
            To delete data from a MongoDB collection:
          </p>
          <pre>
            {`// Delete a single document
const filter = { name: 'John Doe' };
const result = await collection.deleteOne(filter);

console.log('Deleted document count:', result.deletedCount);`}
          </pre>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="6">
        <Accordion.Header><b>Indexing</b></Accordion.Header>
        <Accordion.Body>
          <p>
            To create indexes in MongoDB for better query performance:
          </p>
          <pre>
            {`// Create an index on a field
await collection.createIndex({ name: 1 });`}
          </pre>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="7">
        <Accordion.Header><b>Aggregation Framework</b></Accordion.Header>
        <Accordion.Body>
          <p>
            MongoDB provides an aggregation framework for data aggregation operations.
          </p>
          <pre>
            {`// Perform aggregation pipeline
const pipeline = [
  { $match: { status: 'A' } },
  { $group: { _id: '$cust_id', total: { $sum: '$amount' } } }
];

const result = await collection.aggregate(pipeline).toArray();

console.log('Aggregation result:', result);`}
          </pre>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="8">
        <Accordion.Header><b>Transactions</b></Accordion.Header>
        <Accordion.Body>
          <p>
            MongoDB supports multi-document transactions for operations on multiple documents or across multiple collections.
          </p>
          <pre>
            {`// Start a client session
const session = client.startSession();

try {
  await session.withTransaction(async () => {
    // Perform transactional operations
    await collection1.updateOne({ _id: 1 }, { $set: { status: 'processed' } });
    await collection2.updateOne({ _id: 1 }, { $set: { status: 'processed' } });
  });
} finally {
  session.endSession();
}`}
          </pre>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default MongodbConcepts;
