import React from 'react';
import { Accordion } from 'react-bootstrap';

const AwsConcepts = () => {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header><b>EC2 (Elastic Compute Cloud)</b></Accordion.Header>
        <Accordion.Body>
          <p>
            Amazon EC2 is a web service that provides resizable compute capacity in the cloud. It allows you to run virtual servers (instances) on Amazon's infrastructure.
          </p>
          <p>
            Example: Launching an EC2 instance using the AWS Management Console.
          </p>
          <pre>
            {`aws ec2 run-instances --image-id ami-12345678 --count 1 --instance-type t2.micro --key-name MyKeyPair`}
          </pre>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1">
        <Accordion.Header><b>S3 (Simple Storage Service)</b></Accordion.Header>
        <Accordion.Body>
          <p>
            Amazon S3 provides object storage through a web interface. It allows you to store and retrieve any amount of data from anywhere on the web.
          </p>
          <p>
            Example: Uploading a file to S3 using the AWS SDK for JavaScript.
          </p>
          <pre>
            {`var AWS = require('aws-sdk');
var s3 = new AWS.S3();

var params = {
  Bucket: 'my-bucket',
  Key: 'my-file.txt',
  Body: 'Hello from AWS S3!'
};

s3.upload(params, function(err, data) {
  if (err) {
    console.log("Error uploading file: ", err);
  } else {
    console.log("File uploaded successfully. Location:", data.Location);
  }
});`}
          </pre>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2">
        <Accordion.Header><b>RDS (Relational Database Service)</b></Accordion.Header>
        <Accordion.Body>
          <p>
            Amazon RDS is a managed relational database service that makes it easier to set up, operate, and scale a relational database in the cloud.
          </p>
          <p>
            Example: Creating a MySQL database instance with Amazon RDS.
          </p>
          <pre>
            {`aws rds create-db-instance --db-instance-identifier mydbinstance --db-instance-class db.t2.micro --engine MySQL --master-username mymasteruser --master-user-password mymasterpassword`}
          </pre>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="3">
        <Accordion.Header><b>Lambda</b></Accordion.Header>
        <Accordion.Body>
          <p>
            AWS Lambda is a serverless computing service that lets you run code without provisioning or managing servers. It automatically scales and manages the underlying infrastructure.
          </p>
          <p>
            Example: Creating a Lambda function to process S3 events using the AWS Management Console.
          </p>
          <pre>
            {`exports.handler = async (event) => {
  console.log('Received S3 event:', JSON.stringify(event, null, 2));
  
  // Process S3 event
  
  return {
    statusCode: 200,
    body: JSON.stringify('S3 event processed'),
  };
};`}
          </pre>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="4">
        <Accordion.Header><b>API Gateway</b></Accordion.Header>
        <Accordion.Body>
          <p>
            Amazon API Gateway is a fully managed service that makes it easy for developers to create, publish, maintain, monitor, and secure APIs at any scale.
          </p>
          <p>
            Example: Creating a REST API with Amazon API Gateway and integrating it with Lambda functions.
          </p>
          <pre>
            {`// Example API Gateway configuration`}
          </pre>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="5">
        <Accordion.Header><b>IAM (Identity and Access Management)</b></Accordion.Header>
        <Accordion.Body>
          <p>
            AWS Identity and Access Management (IAM) enables you to manage access to AWS services and resources securely. It helps you control who can do what in your AWS account.
          </p>
          <p>
            Example: Creating an IAM user with programmatic access and attaching policies to manage permissions.
          </p>
          <pre>
            {`aws iam create-user --user-name myuser
aws iam attach-user-policy --user-name myuser --policy-arn arn:aws:iam::aws:policy/AmazonS3FullAccess`}
          </pre>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="6">
        <Accordion.Header><b>ECS (Elastic Container Service)</b></Accordion.Header>
        <Accordion.Body>
          <p>
            Amazon ECS is a highly scalable, fast, container management service that makes it easy to run, stop, and manage Docker containers on a cluster.
          </p>
          <p>
            Example: Deploying a Dockerized application with Amazon ECS.
          </p>
          <pre>
            {`// Example ECS task definition`}
          </pre>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="7">
        <Accordion.Header><b>CloudFormation</b></Accordion.Header>
        <Accordion.Body>
          <p>
            AWS CloudFormation is a service that helps you model and set up your Amazon Web Services resources so that you can spend less time managing those resources and more time focusing on your applications.
          </p>
          <p>
            Example: Creating an EC2 instance using a CloudFormation template.
          </p>
          <pre>
            {`Resources:
  MyEC2Instance:
    Type: AWS::EC2::Instance
    Properties:
      InstanceType: t2.micro
      ImageId: ami-12345678
      KeyName: MyKeyPair`}
          </pre>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default AwsConcepts;
