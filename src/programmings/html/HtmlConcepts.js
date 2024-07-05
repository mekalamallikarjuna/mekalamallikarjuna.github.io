import React from 'react';
import { Accordion } from 'react-bootstrap';

const HtmlConcepts = () => {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header><b>HTML Elements</b></Accordion.Header>
        <Accordion.Body>
          <p>
            HTML elements are the building blocks of HTML pages. An element usually consists of a start tag, content, and an end tag.
          </p>
          <pre>
            {`<p>This is a paragraph.</p>`}
          </pre>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1">
        <Accordion.Header><b>HTML Attributes</b></Accordion.Header>
        <Accordion.Body>
          <p>
            HTML attributes provide additional information about HTML elements. Attributes are always included in the opening tag.
          </p>
          <pre>
            {`<a href="https://www.example.com">This is a link.</a>`}
          </pre>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2">
        <Accordion.Header><b>HTML Forms</b></Accordion.Header>
        <Accordion.Body>
          <p>
            HTML forms are used to collect user input. Form elements include input fields, checkboxes, radio buttons, submit buttons, and more.
          </p>
          <pre>
            {`<form>
  <label for="name">Name:</label>
  <input type="text" id="name" name="name">
  <input type="submit" value="Submit">
</form>`}
          </pre>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="3">
        <Accordion.Header><b>HTML Tables</b></Accordion.Header>
        <Accordion.Body>
          <p>
            HTML tables are used to display data in a tabular format. Tables are created using the <code>&lt;table&gt;</code> element, with rows defined by <code>&lt;tr&gt;</code> and cells defined by <code>&lt;td&gt;</code>.
          </p>
          <pre>
            {`<table>
  <tr>
    <th>Name</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>John</td>
    <td>30</td>
  </tr>
</table>`}
          </pre>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="4">
        <Accordion.Header><b>HTML Lists</b></Accordion.Header>
        <Accordion.Body>
          <p>
            HTML lists are used to group related items. There are two types of lists: ordered lists (<code>&lt;ol&gt;</code>) and unordered lists (<code>&lt;ul&gt;</code>).
          </p>
          <pre>
            {`<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>`}
          </pre>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="5">
        <Accordion.Header><b>HTML Images</b></Accordion.Header>
        <Accordion.Body>
          <p>
            The <code>&lt;img&gt;</code> tag is used to embed images in an HTML page. The <code>src</code> attribute specifies the path to the image.
          </p>
          <pre>
            {`<img src="image.jpg" alt="Description of image">`}
          </pre>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="6">
        <Accordion.Header><b>HTML Links</b></Accordion.Header>
        <Accordion.Body>
          <p>
            The <code>&lt;a&gt;</code> tag is used to create hyperlinks. The <code>href</code> attribute specifies the URL of the page the link goes to.
          </p>
          <pre>
            {`<a href="https://www.example.com">Visit Example</a>`}
          </pre>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default HtmlConcepts;
