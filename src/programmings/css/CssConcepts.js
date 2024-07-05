import React from 'react';
import { Accordion } from 'react-bootstrap';

const CssConcepts = () => {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header><b>Selectors</b></Accordion.Header>
        <Accordion.Body>
          <p>
            CSS selectors are used to select HTML elements based on their id, class, type, attributes, and more.
          </p>
          <pre>
            {`/* Selects all <p> elements */
p {
  color: blue;
}

/* Selects element with id="example" */
#example {
  color: red;
}

/* Selects all elements with class="example" */
.example {
  color: green;
}`}
          </pre>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1">
        <Accordion.Header><b>Box Model</b></Accordion.Header>
        <Accordion.Body>
          <p>
            The CSS box model represents the structure of a web page element, including content, padding, border, and margin.
          </p>
          <pre>
            {`div {
  width: 100px;
  height: 100px;
  padding: 10px;
  border: 5px solid black;
  margin: 20px;
}`}
          </pre>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2">
        <Accordion.Header><b>Flexbox</b></Accordion.Header>
        <Accordion.Body>
          <p>
            Flexbox is a layout model that provides an easy and efficient way to align and distribute space among items in a container.
          </p>
          <pre>
            {`/* Container */
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

/* Items */
.item {
  flex: 1;
  padding: 10px;
}`}
          </pre>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="3">
        <Accordion.Header><b>Grid Layout</b></Accordion.Header>
        <Accordion.Body>
          <p>
            CSS Grid Layout is a two-dimensional layout system for the web, allowing you to layout items in rows and columns.
          </p>
          <pre>
            {`/* Container */
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}

/* Items */
.item {
  background-color: lightblue;
  padding: 20px;
}`}
          </pre>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="4">
        <Accordion.Header><b>Transitions</b></Accordion.Header>
        <Accordion.Body>
          <p>
            CSS transitions allow you to change property values smoothly over a given duration.
          </p>
          <pre>
            {`div {
  width: 100px;
  height: 100px;
  background-color: blue;
  transition: background-color 1s;
}

div:hover {
  background-color: red;
}`}
          </pre>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="5">
        <Accordion.Header><b>Animations</b></Accordion.Header>
        <Accordion.Body>
          <p>
            CSS animations make it possible to animate transitions from one CSS style configuration to another.
          </p>
          <pre>
            {`@keyframes example {
  from {background-color: blue;}
  to {background-color: red;}
}

div {
  width: 100px;
  height: 100px;
  animation: example 5s infinite;
}`}
          </pre>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="6">
        <Accordion.Header><b>Media Queries</b></Accordion.Header>
        <Accordion.Body>
          <p>
            Media queries allow you to apply CSS rules based on the characteristics of the device, such as its width, height, and orientation.
          </p>
          <pre>
            {`/* Mobile */
@media (max-width: 600px) {
  body {
    background-color: lightblue;
  }
}

/* Desktop */
@media (min-width: 601px) {
  body {
    background-color: lightgreen;
  }
}`}
          </pre>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default CssConcepts;
