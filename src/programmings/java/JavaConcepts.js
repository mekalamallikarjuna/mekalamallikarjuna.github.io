import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';

function JavaConcepts() {
  return (
    <div className="content">
      <h1>Java Concepts</h1>
      
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header><b>1. Introduction to Java</b></Accordion.Header>
          <Accordion.Body>
            <strong>Definition:</strong> Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. It is intended to let application developers write once, run anywhere (WORA), meaning that compiled Java code can run on all platforms that support Java without the need for recompilation.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header><b>2. Basic Syntax</b></Accordion.Header>
          <Accordion.Body>
            <p>Java syntax is largely influenced by C++. Every Java application must have a main method, which is the entry point for the application.</p>
            <p><strong>Example:</strong></p>
            <pre>{`public class Main {
  public static void main(String[] args) {
    System.out.println("Hello, World!");
  }
}`}</pre>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header><b>3. Variables</b></Accordion.Header>
          <Accordion.Body>
            <p>In Java, a variable is a container that holds data which can be changed during the execution of a program. Variables are declared with a specific type.</p>
            <p><strong>Example:</strong></p>
            <pre>{`public class Main {
  public static void main(String[] args) {
    String greeting = "Hello, World!";
    int x = 5;
    double y = 10.5;
    System.out.println(greeting);
    System.out.println("x: " + x);
    System.out.println("y: " + y);
  }
}`}</pre>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header><b>4. Data Types</b></Accordion.Header>
          <Accordion.Body>
            <p>Java supports several data types, including:</p>
            <ul>
              <li><strong>byte</strong> - 8-bit integer</li>
              <li><strong>short</strong> - 16-bit integer</li>
              <li><strong>int</strong> - 32-bit integer</li>
              <li><strong>long</strong> - 64-bit integer</li>
              <li><strong>float</strong> - single-precision 32-bit IEEE 754 floating point</li>
              <li><strong>double</strong> - double-precision 64-bit IEEE 754 floating point</li>
              <li><strong>boolean</strong> - true or false</li>
              <li><strong>char</strong> - single 16-bit Unicode character</li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="4">
          <Accordion.Header><b>5. Control Structures</b></Accordion.Header>
          <Accordion.Body>
            <h3>Conditional Statements</h3>
            <p>Java supports the usual if-else statement:</p>
            <pre>{`public class Main {
  public static void main(String[] args) {
    int time = 20;
    if (time < 18) {
      System.out.println("Good day.");
    } else {
      System.out.println("Good evening.");
    }
  }
}`}</pre>
            
            <h3>Loops</h3>
            <p>Java supports several types of loops:</p>
            <ul>
              <li><strong>while</strong> loop</li>
              <li><strong>do...while</strong> loop</li>
              <li><strong>for</strong> loop</li>
              <li><strong>foreach</strong> loop (specifically for arrays and collections)</li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="5">
          <Accordion.Header><b>6. Methods</b></Accordion.Header>
          <Accordion.Body>
            <p>A method is a block of code which only runs when it is called. Methods are used to perform certain actions, and they are also known as functions.</p>
            <p><strong>Example:</strong></p>
            <pre>{`public class Main {
  public static void main(String[] args) {
    myMethod();
  }

  public static void myMethod() {
    System.out.println("Hello, World!");
  }
}`}</pre>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="6">
          <Accordion.Header><b>7. Arrays</b></Accordion.Header>
          <Accordion.Body>
            <p>An array is a container object that holds a fixed number of values of a single type. The length of an array is established when the array is created.</p>
            <p><strong>Example:</strong></p>
            <pre>{`public class Main {
  public static void main(String[] args) {
    String[] cars = {"Volvo", "BMW", "Ford", "Mazda"};
    System.out.println(cars[0]);
  }
}`}</pre>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="7">
          <Accordion.Header><b>8. Object-Oriented Programming (OOP)</b></Accordion.Header>
          <Accordion.Body>
            <p>Java is an object-oriented programming language. OOP is a programming paradigm based on the concept of "objects", which can contain data and code to manipulate the data. The four main OOP concepts in Java are:</p>
            <ul>
              <li><strong>Encapsulation</strong></li>
              <li><strong>Inheritance</strong></li>
              <li><strong>Polymorphism</strong></li>
              <li><strong>Abstraction</strong></li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="8">
          <Accordion.Header><b>9. Exception Handling</b></Accordion.Header>
          <Accordion.Body>
            <p>Java provides a robust and object-oriented way to handle exceptions. An exception is an event that disrupts the normal flow of the program's instructions. Java exceptions are handled using five keywords: <code>try</code>, <code>catch</code>, <code>finally</code>, <code>throw</code>, and <code>throws</code>.</p>
            <p><strong>Example:</strong></p>
            <pre>{`public class Main {
  public static void main(String[] args) {
    try {
      int[] myNumbers = {1, 2, 3};
      System.out.println(myNumbers[10]);
    } catch (Exception e) {
      System.out.println("Something went wrong.");
    }
  }
}`}</pre>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="9">
          <Accordion.Header><b>10. File I/O</b></Accordion.Header>
          <Accordion.Body>
            <p>Java provides a robust I/O package that contains many classes for reading and writing files. The most commonly used classes for file I/O in Java are <code>FileReader</code> and <code>FileWriter</code> for character files, and <code>FileInputStream</code> and <code>FileOutputStream</code> for binary files.</p>
            <p><strong>Example:</strong> Writing to a file:</p>
            <pre>{`import java.io.FileWriter;
import java.io.IOException;

public class Main {
  public static void main(String[] args) {
    try {
      FileWriter myWriter = new FileWriter("filename.txt");
      myWriter.write("Hello, World!");
      myWriter.close();
      System.out.println("Successfully wrote to the file.");
    } catch (IOException e) {
      System.out.println("An error occurred.");
      e.printStackTrace();
    }
  }
}`}</pre>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default JavaConcepts;
