import React from 'react';
import { Accordion } from 'react-bootstrap';

const NodeJsConcepts = () => {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header><b>Event Loop</b></Accordion.Header>
        <Accordion.Body>
          <p>
            The event loop allows Node.js to perform non-blocking I/O operations by offloading operations to the system kernel whenever possible.
          </p>
          <pre>
            {`setTimeout(() => {
  console.log('This runs after 1 second');
}, 1000);

console.log('This runs immediately');`}
          </pre>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1">
        <Accordion.Header><b>Asynchronous Programming</b></Accordion.Header>
        <Accordion.Body>
          <p>
            Asynchronous programming allows the execution of non-blocking operations using callbacks, promises, and async/await.
          </p>
          <pre>
            {`const fetchData = async () => {
  const response = await fetch('https://api.example.com/data');
  const data = await response.json();
  console.log(data);
};

fetchData();`}
          </pre>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2">
        <Accordion.Header><b>Modules</b></Accordion.Header>
        <Accordion.Body>
          <p>
            Node.js modules are reusable pieces of code that can be included in other parts of a Node.js application.
          </p>
          <pre>
            {`// math.js
module.exports.add = (a, b) => a + b;

// main.js
const math = require('./math');
console.log(math.add(2, 3));`}
          </pre>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="3">
        <Accordion.Header><b>File System</b></Accordion.Header>
        <Accordion.Body>
          <p>
            The Node.js `fs` module allows interaction with the file system, providing methods for reading, writing, updating, and deleting files.
          </p>
          <pre>
            {`const fs = require('fs');

fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});`}
          </pre>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="4">
        <Accordion.Header><b>HTTP Module</b></Accordion.Header>
        <Accordion.Body>
          <p>
            The `http` module in Node.js allows the creation of web servers and handling of HTTP requests and responses.
          </p>
          <pre>
            {`const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!');
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});`}
          </pre>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="5">
        <Accordion.Header><b>Express.js</b></Accordion.Header>
        <Accordion.Body>
          <p>
            Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for building web and mobile applications.
          </p>
          <pre>
            {`const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});`}
          </pre>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="6">
        <Accordion.Header><b>Package Management</b></Accordion.Header>
        <Accordion.Body>
          <p>
            Node.js uses npm (Node Package Manager) to manage packages and dependencies.
          </p>
          <pre>
            {`// Install a package
// npm install lodash

const _ = require('lodash');

console.log(_.camelCase('hello world'));`}
          </pre>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default NodeJsConcepts;
