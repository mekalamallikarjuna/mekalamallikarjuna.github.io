import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';

function CProgrammingConcepts() {
  return (
    <div className="content">
      <h1>C Programming Concepts</h1>
      
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header><b>1. Introduction to C</b></Accordion.Header>
          <Accordion.Body>
            <strong>Definition:</strong> C is a general-purpose, procedural computer programming language supporting structured programming, lexical variable scope, and recursion, with a static type system. It was originally developed by Dennis Ritchie between 1969 and 1973 at Bell Labs.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header><b>2. Basic Syntax</b></Accordion.Header>
          <Accordion.Body>
            <p>C programming syntax is very simple and easy to understand.</p>
            <p><strong>Example:</strong></p>
            <pre>{`#include <stdio.h>

int main() {
    printf("Hello, World!");
    return 0;
}`}</pre>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header><b>3. Variables and Data Types</b></Accordion.Header>
          <Accordion.Body>
            <p>Variables are containers for storing data values. In C, variables must be declared before they can be used.</p>
            <p><strong>Example:</strong></p>
            <pre>{`int myNum = 5;       // Integer (whole number)
float myFloatNum = 5.99;  // Floating point number
char myLetter = 'D';      // Character`}</pre>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header><b>4. Control Structures</b></Accordion.Header>
          <Accordion.Body>
            <h3>Conditional Statements</h3>
            <p>C supports the usual if-else statement:</p>
            <pre>{`int time = 20;
if (time < 18) {
    printf("Good day.");
} else {
    printf("Good evening.");
}`}</pre>
            
            <h3>Loops</h3>
            <p>C supports several types of loops:</p>
            <ul>
              <li><strong>while</strong> loop</li>
              <li><strong>do...while</strong> loop</li>
              <li><strong>for</strong> loop</li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="4">
          <Accordion.Header><b>5. Functions</b></Accordion.Header>
          <Accordion.Body>
            <p>A function is a block of code which only runs when it is called. Functions are used to perform certain actions.</p>
            <p><strong>Example:</strong></p>
            <pre>{`#include <stdio.h>

void myFunction() {
    printf("I just got executed!");
}

int main() {
    myFunction();
    return 0;
}`}</pre>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="5">
          <Accordion.Header><b>6. Arrays</b></Accordion.Header>
          <Accordion.Body>
            <p>An array is a special variable, which can hold more than one value at a time.</p>
            <p><strong>Example:</strong></p>
            <pre>{`int myNumbers[] = {25, 50, 75, 100};
printf("%d", myNumbers[0]);  // Outputs 25`}</pre>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="6">
          <Accordion.Header><b>7. Pointers</b></Accordion.Header>
          <Accordion.Body>
            <p>Pointers are variables that store the memory address of another variable. They are a powerful feature in C.</p>
            <p><strong>Example:</strong></p>
            <pre>{`#include <stdio.h>

int main() {
    int myVar = 5;
    int *ptr = &myVar;
    printf("%d", myVar);   // Outputs 5
    printf("%d", *ptr);    // Outputs 5
    return 0;
}`}</pre>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="7">
          <Accordion.Header><b>8. Structures</b></Accordion.Header>
          <Accordion.Body>
            <p>Structures are used to group variables of different types under a single name.</p>
            <p><strong>Example:</strong></p>
            <pre>{`#include <stdio.h>

struct Person {
    int age;
    float salary;
};

int main() {
    struct Person person1;
    person1.age = 30;
    person1.salary = 50000.50;
    printf("Age: %d, Salary: %.2f", person1.age, person1.salary);
    return 0;
}`}</pre>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="8">
          <Accordion.Header><b>9. File I/O</b></Accordion.Header>
          <Accordion.Body>
            <p>C provides several functions for file input and output. The most commonly used functions are <code>fopen</code>, <code>fclose</code>, <code>fprintf</code>, <code>fscanf</code>, <code>fgetc</code>, and <code>fputc</code>.</p>
            <p><strong>Example:</strong> Writing to a file:</p>
            <pre>{`#include <stdio.h>

int main() {
    FILE *fptr;
    fptr = fopen("filename.txt", "w");
    if (fptr == NULL) {
        printf("Error!");
        return 1;
    }
    fprintf(fptr, "Hello, World!");
    fclose(fptr);
    return 0;
}`}</pre>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="9">
          <Accordion.Header><b>10. Dynamic Memory Allocation</b></Accordion.Header>
          <Accordion.Body>
            <p>C provides several functions for memory allocation and management, such as <code>malloc</code>, <code>calloc</code>, <code>realloc</code>, and <code>free</code>.</p>
            <p><strong>Example:</strong></p>
            <pre>{`#include <stdio.h>
#include <stdlib.h>

int main() {
    int *ptr;
    ptr = (int *) malloc(10 * sizeof(int));
    if (ptr == NULL) {
        printf("Memory not allocated.");
        return 1;
    }
    printf("Memory successfully allocated.");
    free(ptr);
    return 0;
}`}</pre>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default CProgrammingConcepts;
