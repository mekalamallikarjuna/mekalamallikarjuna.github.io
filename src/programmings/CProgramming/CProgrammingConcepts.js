import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "bootstrap/dist/css/bootstrap.min.css";

function CProgrammingConcepts() {
  return (
    <div className="content">
      <h1>C Programming Concepts</h1>

      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <b>
              <p style={{ color: "red" }}>
                UNIT I: Introduction to Programming and Problem Solving
              </p>
              History of Computers, Basic organization of a computer: ALU,
              input-output units, memory, program counter, Introduction to
              Programming Languages, Basics of a Computer ProgramAlgorithms,
              flowcharts (Using Dia Tool), pseudo code. Introduction to
              Compilation and Execution, Primitive Data Types, Variables, and
              Constants, Basic Input and Output, Operations, Type Conversion,
              and Casting.
              <p>
                <b style={{ color: "#8764E0" }}>Problem solving techniques:</b>{" "}
                Algorithmic approach, characteristics of algorithm,
              </p>
              <p>
                <b style={{ color: "#8764E0" }}>Problem solving strategies:</b>{" "}
                Top-down approach, Bottom-up approach, Time and space
                complexities of algorithms.
              </p>
            </b>
          </Accordion.Header>
          <Accordion.Body>
            <strong>Definition:</strong> C is a general-purpose, procedural
            computer programming language supporting structured programming,
            lexical variable scope, and recursion, with a static type system. It
            was originally developed by Dennis Ritchie between 1969 and 1973 at
            Bell Labs.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <b>
              <p style={{ color: "red" }}>UNIT II: Control Structures</p>
              Simple sequential programs Conditional Statements (if, if-else,
              switch), Loops (for, while, dowhile) Break and Continue.
            </b>
          </Accordion.Header>
          <Accordion.Body>
            <p>C programming syntax is very simple and easy to understand.</p>
            <p>
              <strong>Example:</strong>
            </p>
            <pre>{`#include <stdio.h>

int main() {
    printf("Hello, World!");
    return 0;
}`}</pre>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>
            <b>
              <p style={{ color: "red" }}>UNIT III: Arrays and Strings</p>
              Arrays indexing, memory model, programs with array of integers,
              two dimensional arrays, Introduction to Strings.
            </b>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              Variables are containers for storing data values. In C, variables
              must be declared before they can be used.
            </p>
            <p>
              <strong>Example:</strong>
            </p>
            <pre>{`int myNum = 5;       // Integer (whole number)
float myFloatNum = 5.99;  // Floating point number
char myLetter = 'D';      // Character`}</pre>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header>
            <b>
              <p style={{ color: "red" }}>
                UNIT IV: Pointers & User Defined Data types
              </p>
              Pointers, dereferencing and address operators, pointer and address
              arithmetic, array manipulation using pointers, User-defined data
              types-Structures and Unions.
            </b>
          </Accordion.Header>
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
              <li>
                <strong>while</strong> loop
              </li>
              <li>
                <strong>do...while</strong> loop
              </li>
              <li>
                <strong>for</strong> loop
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="4">
          <Accordion.Header>
            <b>
              <p style={{ color: "red" }}>UNIT V: Functions & File Handling</p>
              Introduction to Functions, Function Declaration and Definition,
              Function call Return Types and Arguments, modifying parameters
              inside functions using pointers, arrays as parameters. Scope and
              Lifetime of Variables, Basics of File Handling.
            </b>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              A function is a block of code which only runs when it is called.
              Functions are used to perform certain actions.
            </p>
            <p>
              <strong>Example:</strong>
            </p>
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
      </Accordion>
      <h2>C Programming Lab</h2>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <p className="text-center">Simple C Programming</p>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              <ul>
                <li>Each and every program start from main() function.</li>
                <li>A function should return a value</li>
                <li>
                  <pre>
                    {`
    {
    
    }
                    `}
                  </pre>{" "}
                  are used for scope of the main() function or Body of the
                  function.
                </li>
                <li>
                  main() has two arguments like argument count & argument vector
                </li>
                <li>int is return type for main() function </li>
                <li>argc, argv are arguments.</li>
              </ul>
            </p>
            <p>
              <strong>Examples:</strong>
            </p>
            <pre>
              {`
              1) main function with return type & Command-line Arguments
              #include <stdio.h>
              int main(int argc, char *argv[]){
                int i;
                printf("argc: %d\\n",argc);
                printf("argv[0]: %s\\n",argv[0]);
                if(argc==1){
                  printf( "No arguments were passed.\\n" );
                }else{
                  printf( "Arguments:\\n" );
                  for ( i = 1; i < argc; ++i ) {
                    printf( "  %d. %s\\n", i, argv[i] );
                  }
                }
                return 0;
              }

              <p>Compile:<p>
              $gcc argument.c
              Run-1:
              $./a.out first
              argc:     2
              argv[0]:  ./a.out

              Run-2:-
              ./a.out first second third fourth fifth sixth seventh eighth ninth tenth eleventh twelfth
              argc:     13
              argv[0]:  ./a.out
              Arguments:
                1. first
                2. second
                3. third
                4. fourth
                5. fifth
                6. sixth
                7. seventh
                8. eighth
                9. ninth
                10. tenth
                11. eleventh
                12. twelfth


              2) main() with return type & no Command-line Arguments
              #include <stdio.h>
              int main() {
                printf("Hello World!");
                return 0;
              }


              3) main() function has no return type & no Command-line Arguments
              #include <stdio.h>
              void main() {
                printf("Hello World!");
              }
              

              `}
            </pre>
            <a target="_blank" href="https://onlinegdb.com/l4tQ4m7ML">
              Hello World Program
            </a>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <b>7. Pointers</b>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              Pointers are variables that store the memory address of another
              variable. They are a powerful feature in C.
            </p>
            <p>
              <strong>Example:</strong>
            </p>
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

        <Accordion.Item eventKey="2">
          <Accordion.Header>
            <b>8. Structures</b>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              Structures are used to group variables of different types under a
              single name.
            </p>
            <p>
              <strong>Example:</strong>
            </p>
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

        <Accordion.Item eventKey="3">
          <Accordion.Header>
            <b>9. File I/O</b>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              C provides several functions for file input and output. The most
              commonly used functions are <code>fopen</code>,{" "}
              <code>fclose</code>, <code>fprintf</code>, <code>fscanf</code>,{" "}
              <code>fgetc</code>, and <code>fputc</code>.
            </p>
            <p>
              <strong>Example:</strong> Writing to a file:
            </p>
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

        <Accordion.Item eventKey="4">
          <Accordion.Header>
            <b>10. Dynamic Memory Allocation</b>
          </Accordion.Header>
          <Accordion.Body>
            <p>
              C provides several functions for memory allocation and management,
              such as <code>malloc</code>, <code>calloc</code>,{" "}
              <code>realloc</code>, and <code>free</code>.
            </p>
            <p>
              <strong>Example:</strong>
            </p>
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
