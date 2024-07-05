import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';

function PHPConcepts() {
  return (
    <div className="content">
      <h1>PHP Concepts</h1>
      
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header><b>1. Introduction to PHP</b></Accordion.Header>
          <Accordion.Body>
            <strong>Definition:</strong> PHP (Hypertext Preprocessor) is a popular open-source server-side scripting language designed for web development. It can be embedded into HTML.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header><b>2. Basic Syntax</b></Accordion.Header>
          <Accordion.Body>
            <p>PHP scripts are executed on the server, and the result is returned to the browser as plain HTML. A PHP script can be placed anywhere in the document.</p>
            <p><strong>Example:</strong></p>
            <pre>{`<?php
echo "Hello, World!";
?>`}</pre>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header><b>3. Variables</b></Accordion.Header>
          <Accordion.Body>
            <p>In PHP, a variable starts with the $ sign, followed by the name of the variable.</p>
            <p><strong>Example:</strong></p>
            <pre>{`<?php
$txt = "Hello, World!";
$x = 5;
$y = 10.5;
?>`}</pre>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header><b>4. Data Types</b></Accordion.Header>
          <Accordion.Body>
            <p>PHP supports various data types, including:</p>
            <ul>
              <li><strong>String</strong></li>
              <li><strong>Integer</strong></li>
              <li><strong>Float</strong> (floating point numbers - also called double)</li>
              <li><strong>Boolean</strong></li>
              <li><strong>Array</strong></li>
              <li><strong>Object</strong></li>
              <li><strong>NULL</strong></li>
              <li><strong>Resource</strong></li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="4">
          <Accordion.Header><b>5. Control Structures</b></Accordion.Header>
          <Accordion.Body>
            <h3>Conditional Statements</h3>
            <p>PHP supports the usual if-else statement:</p>
            <pre>{`<?php
$t = date("H");

if ($t < "20") {
    echo "Have a good day!";
} else {
    echo "Have a good night!";
}
?>`}</pre>
            
            <h3>Loops</h3>
            <p>PHP supports several types of loops:</p>
            <ul>
              <li><strong>while</strong> loop</li>
              <li><strong>do...while</strong> loop</li>
              <li><strong>for</strong> loop</li>
              <li><strong>foreach</strong> loop (specifically for arrays)</li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="5">
          <Accordion.Header><b>6. Functions</b></Accordion.Header>
          <Accordion.Body>
            <p>A function is a block of statements that can be used repeatedly in a program.</p>
            <p><strong>Example:</strong></p>
            <pre>{`<?php
function writeMessage() {
    echo "Hello, World!";
}

writeMessage(); // Call the function
?>`}</pre>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="6">
          <Accordion.Header><b>7. Arrays</b></Accordion.Header>
          <Accordion.Body>
            <p>An array is a special variable, which can hold more than one value at a time.</p>
            <p><strong>Example:</strong></p>
            <pre>{`<?php
$cars = array("Volvo", "BMW", "Toyota");
echo "I like " . $cars[0] . ", " . $cars[1] . " and " . $cars[2] . ".";
?>`}</pre>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="7">
          <Accordion.Header><b>8. Superglobals</b></Accordion.Header>
          <Accordion.Body>
            <p>PHP has several predefined variables known as superglobals:</p>
            <ul>
              <li>$_GLOBALS</li>
              <li>$_SERVER</li>
              <li>$_REQUEST</li>
              <li>$_POST</li>
              <li>$_GET</li>
              <li>$_FILES</li>
              <li>$_ENV</li>
              <li>$_COOKIE</li>
              <li>$_SESSION</li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="8">
          <Accordion.Header><b>9. Form Handling</b></Accordion.Header>
          <Accordion.Body>
            <p>PHP is widely used to collect form data.</p>
            <p><strong>Example:</strong></p>
            <pre>{`<form method="post" action="<?php echo $_SERVER['PHP_SELF'];?>">
  Name: <input type="text" name="fname">
  <input type="submit">
</form>

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = htmlspecialchars($_REQUEST['fname']);
  if (empty($name)) {
    echo "Name is empty";
  } else {
    echo $name;
  }
}
?>`}</pre>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="9">
          <Accordion.Header><b>10. Connecting to a Database</b></Accordion.Header>
          <Accordion.Body>
            <p>PHP can connect to and manipulate databases. MySQL is the most popular database system used with PHP.</p>
            <p><strong>Example:</strong> Connecting to a MySQL database:</p>
            <pre>{`<?php
$servername = "localhost";
$username = "username";
$password = "password";
$dbname = "myDB";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";
?>`}</pre>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default PHPConcepts;
