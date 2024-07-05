import React from 'react';
import { Accordion } from 'react-bootstrap';

const CiCdConcepts = () => {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header><b>Continuous Integration (CI)</b></Accordion.Header>
        <Accordion.Body>
          <p>
            Continuous Integration (CI) is the practice of frequently merging code changes into a central repository. It involves automating builds and running tests on every commit.
          </p>
          <p>
            Example: Using GitHub Actions for CI to run tests and build artifacts on each push to the repository.
          </p>
          <pre>
            {`name: CI

on:
  push:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v2
    - name: Install dependencies
      run: npm install
    - name: Run tests
      run: npm test`}
          </pre>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1">
        <Accordion.Header><b>Continuous Deployment/Delivery (CD)</b></Accordion.Header>
        <Accordion.Body>
          <p>
            Continuous Deployment (CD) and Continuous Delivery (CD) are practices to automate software release processes. CD involves deploying changes automatically to production or staging environments.
          </p>
          <p>
            Example: Using GitHub Actions for CD to deploy a React application to Firebase Hosting on each push to the main branch.
          </p>
          <pre>
            {`name: CD

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v2
    - name: Install dependencies
      run: npm install
    - name: Build and Deploy
      run: |
        npm run build
        npm install -g firebase-tools
        firebase deploy --token "$FIREBASE_TOKEN"`}
          </pre>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default CiCdConcepts;
