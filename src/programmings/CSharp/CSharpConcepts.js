import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';

function CSharpConcepts() {
  return (
    <div className="content">
      <h1>C# Programming Concepts</h1>
      
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header><b>1. Introduction to C#</b></Accordion.Header>
          <Accordion.Body>
            <strong>Definition:</strong> C# (pronounced "C-sharp") is a modern, object-oriented, and type-safe programming language. C# enables developers to build many types of secure and robust applications that run in the .NET ecosystem.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header><b>2. Basic Syntax</b></Accordion.Header>
          <Accordion.Body>
            <p>C# syntax is highly expressive, yet it is also simple and easy to learn. It is similar to C, C++, and Java.</p>
            <p><strong>Example:</strong></p>
            <pre>{`using System;

namespace HelloWorld
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello, World!");
        }
    }
}`}</pre>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header><b>3. Variables and Data Types</b></Accordion.Header>
          <Accordion.Body>
            <p>Variables are used to store data, and they are declared with a specific type.</p>
            <p><strong>Example:</strong></p>
            <pre>{`int myNum = 5;            // Integer (whole number)
double myDoubleNum = 5.99;  // Floating point number
char myLetter = 'D';        // Character
bool myBool = true;         // Boolean
string myText = "Hello";    // String`}</pre>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header><b>4. Control Structures</b></Accordion.Header>
          <Accordion.Body>
            <h3>Conditional Statements</h3>
            <p>C# supports the usual if-else statement:</p>
            <pre>{`int time = 20;
if (time < 18)
{
    Console.WriteLine("Good day.");
}
else
{
    Console.WriteLine("Good evening.");
}`}</pre>
            
            <h3>Loops</h3>
            <p>C# supports several types of loops:</p>
            <ul>
              <li><strong>while</strong> loop</li>
              <li><strong>do...while</strong> loop</li>
              <li><strong>for</strong> loop</li>
              <li><strong>foreach</strong> loop (specifically for arrays and collections)</li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="4">
          <Accordion.Header><b>5. Methods</b></Accordion.Header>
          <Accordion.Body>
            <p>A method is a block of code which only runs when it is called. Methods are used to perform certain actions, and they are also known as functions.</p>
            <p><strong>Example:</strong></p>
            <pre>{`static void MyMethod()
{
    Console.WriteLine("I just got executed!");
}

static void Main(string[] args)
{
    MyMethod();
}`}</pre>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="5">
          <Accordion.Header><b>6. Arrays</b></Accordion.Header>
          <Accordion.Body>
            <p>An array is a special variable, which can hold more than one value at a time.</p>
            <p><strong>Example:</strong></p>
            <pre>{`string[] cars = {"Volvo", "BMW", "Ford", "Mazda"};
Console.WriteLine(cars[0]);  // Outputs Volvo`}</pre>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="6">
          <Accordion.Header><b>7. Object-Oriented Programming (OOP)</b></Accordion.Header>
          <Accordion.Body>
            <p>C# is an object-oriented programming language. OOP is a programming paradigm based on the concept of "objects", which can contain data and code to manipulate the data. The four main OOP concepts in C# are:</p>
            <ul>
              <li><strong>Encapsulation</strong></li>
              <li><strong>Inheritance</strong></li>
              <li><strong>Polymorphism</strong></li>
              <li><strong>Abstraction</strong></li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="7">
          <Accordion.Header><b>8. Exception Handling</b></Accordion.Header>
          <Accordion.Body>
            <p>C# provides a structured approach to handle exceptions. An exception is an event that occurs during the execution of a program that disrupts the normal flow of instructions.</p>
            <p><strong>Example:</strong></p>
            <pre>{`try
{
    int[] myNumbers = {1, 2, 3};
    Console.WriteLine(myNumbers[10]);
}
catch (Exception e)
{
    Console.WriteLine("Something went wrong.");
}`}</pre>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="8">
          <Accordion.Header><b>9. Delegates and Events</b></Accordion.Header>
          <Accordion.Body>
            <p>Delegates are used to pass methods as arguments to other methods. Events are used to provide notifications.</p>
            <p><strong>Example:</strong></p>
            <pre>{`public delegate void MyDelegate(string message);

public class Program
{
    public static void Main()
    {
        MyDelegate del = new MyDelegate(MethodA);
        del("Hello, World!");
    }

    public static void MethodA(string message)
    {
        Console.WriteLine(message);
    }
}`}</pre>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="9">
          <Accordion.Header><b>10. File I/O</b></Accordion.Header>
          <Accordion.Body>
            <p>C# provides extensive file I/O capabilities, allowing you to read from and write to files. The <code>System.IO</code> namespace contains classes for file operations.</p>
            <p><strong>Example:</strong> Writing to a file:</p>
            <pre>{`using System;
using System.IO;

public class Program
{
    public static void Main()
    {
        string[] lines = {"First line", "Second line", "Third line"};
        File.WriteAllLines("filename.txt", lines);
    }
}`}</pre>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default CSharpConcepts;
