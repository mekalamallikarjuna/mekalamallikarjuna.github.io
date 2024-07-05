import React from 'react';
import { Accordion } from 'react-bootstrap';

const DataFormatsConcepts = () => {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header><b>JSON (JavaScript Object Notation)</b></Accordion.Header>
        <Accordion.Body>
          <p>
            JSON is a lightweight data-interchange format that's easy for humans to read and write, and easy for machines to parse and generate.
          </p>
          <pre>
            {`{
  "name": "John Doe",
  "age": 30,
  "email": "john.doe@example.com",
  "isMember": true,
  "favorites": {
    "color": "blue",
    "number": 42
  }
}`}
          </pre>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1">
        <Accordion.Header><b>Parsing JSON in JavaScript</b></Accordion.Header>
        <Accordion.Body>
          <p>
            You can parse JSON strings into JavaScript objects and vice versa using <code>JSON.parse()</code> and <code>JSON.stringify()</code>.
          </p>
          <pre>
            {`// Parsing JSON string to object
const jsonString = '{"name":"John Doe","age":30}';
const jsonObject = JSON.parse(jsonString);
console.log(jsonObject.name); // Output: John Doe

// Stringifying JavaScript object to JSON string
const jsObject = { name: "Jane Doe", age: 25 };
const jsonStr = JSON.stringify(jsObject);
console.log(jsonStr); // Output: {"name":"Jane Doe","age":25}`}
          </pre>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2">
        <Accordion.Header><b>XML (eXtensible Markup Language)</b></Accordion.Header>
        <Accordion.Body>
          <p>
            XML is a markup language that defines rules for encoding documents in a format that is both human-readable and machine-readable.
          </p>
          <pre>
            {`<person>
  <name>John Doe</name>
  <age>30</age>
  <email>john.doe@example.com</email>
  <isMember>true</isMember>
  <favorites>
    <color>blue</color>
    <number>42</number>
  </favorites>
</person>`}
          </pre>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="3">
        <Accordion.Header><b>Parsing XML in JavaScript</b></Accordion.Header>
        <Accordion.Body>
          <p>
            You can parse XML strings into JavaScript objects using the DOMParser interface, and traverse or manipulate the DOM tree.
          </p>
          <pre>
            {`// Parsing XML string to DOM
const xmlString = '<person><name>John Doe</name><age>30</age></person>';
const parser = new DOMParser();
const xmlDoc = parser.parseFromString(xmlString, 'application/xml');
const name = xmlDoc.getElementsByTagName('name')[0].childNodes[0].nodeValue;
console.log(name); // Output: John Doe

// Serializing DOM to XML string
const serializer = new XMLSerializer();
const xmlStr = serializer.serializeToString(xmlDoc);
console.log(xmlStr); // Output: <person><name>John Doe</name><age>30</age></person>`}
          </pre>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default DataFormatsConcepts;
