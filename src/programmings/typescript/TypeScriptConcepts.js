import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';

function TypeScriptConcepts() {
  return (
    <div className="content">
      <h1>TypeScript Programming Concepts</h1>
      <p>
      TypeScript is a statically typed superset of JavaScript developed and maintained by Microsoft. It adds optional static typing, classes, and interfaces to JavaScript, enabling developers to catch errors early during development and improve code maintainability and scalability. TypeScript code is transpiled into plain JavaScript, which can then run in any environment that supports JavaScript.</p>
      <pre>
        {`
// Basic Types
let isDone: boolean = false;
let decimal: number = 6;
let color: string = "blue";

// Arrays
let list: number[] = [1, 2, 3];
let listGeneric: Array<number> = [1, 2, 3];

// Tuples
let x: [string, number];
x = ["hello", 10];

// Enums
enum Color {Red, Green, Blue}
let c: Color = Color.Green;

// Functions
function add(x: number, y: number): number {
    return x + y;
}

// Interfaces
interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user = { firstName: "Jane", lastName: "Doe" };

console.log(greeter(user));

// Classes
class Animal {
    private name: string;

    constructor(theName: string) {
        this.name = theName;
    }

    public move(distanceInMeters: number = 0) {
        console.log(\`\${this.name} moved \${distanceInMeters}m.\`\);
    }
}

class Snake extends Animal {
    constructor(name: string) {
        super(name);
    }

    move(distanceInMeters = 5) {
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}

let sam = new Snake("Sammy the Python");
sam.move();

        `}
      </pre>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header><b>1. Basic Types</b></Accordion.Header>
          <Accordion.Body>
            <p>TypeScript provides support for various data types:</p>
            <pre>{`let isDone: boolean = false;
let decimal: number = 6;
let color: string = "blue";
let list: number[] = [1, 2, 3];`}</pre>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header><b>2. Interfaces</b></Accordion.Header>
          <Accordion.Body>
            <p>Interfaces define contracts for objects:</p>
            <pre>{`interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return \`Hello, \${person.firstName} \${person.lastName}\`;
}`}</pre>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header><b>3. Classes</b></Accordion.Header>
          <Accordion.Body>
            <p>TypeScript supports traditional OOP features like classes and inheritance:</p>
            <pre>{`class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    move(distanceInMeters: number = 0) {
        console.log(\`\${this.name} moved \${distanceInMeters}m.\`);
    }
}`}</pre>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header><b>4. Functions</b></Accordion.Header>
          <Accordion.Body>
            <p>Function declarations and arrow functions:</p>
            <pre>{`function add(x: number, y: number): number {
    return x + y;
}

const subtract = (x: number, y: number): number => x - y;`}</pre>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="4">
          <Accordion.Header><b>5. Generics</b></Accordion.Header>
          <Accordion.Body>
            <p>Generics allow reusable components:</p>
            <pre>{`function identity<T>(arg: T): T {
    return arg;
}

let output = identity<string>("myString");`}</pre>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="5">
          <Accordion.Header><b>6. Enums</b></Accordion.Header>
          <Accordion.Body>
            <p>Enums allow for a set of named constants:</p>
            <pre>{`enum Direction {
    Up,
    Down,
    Left,
    Right,
}

let go: Direction = Direction.Up;`}</pre>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="6">
          <Accordion.Header><b>7. Type Inference</b></Accordion.Header>
          <Accordion.Body>
            <p>TypeScript infers types based on initialization:</p>
            <pre>{`let num = 5;  // TypeScript infers \`number\` type`}</pre>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="7">
          <Accordion.Header><b>8. Advanced Types</b></Accordion.Header>
          <Accordion.Body>
            <p>Includes union types, intersection types, type guards, etc.:</p>
            <pre>{`type Bird = { fly: true };
type Fish = { swim: true };

function move(animal: Bird | Fish) {
    if ("fly" in animal) {
        console.log("Flying");
    } else {
        console.log("Swimming");
    }
}`}</pre>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="8">
          <Accordion.Header><b>9. Type Assertions</b></Accordion.Header>
          <Accordion.Body>
            <p>Allows overriding inferred types:</p>
            <pre>{`let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;`}</pre>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="9">
          <Accordion.Header><b>10. Modules</b></Accordion.Header>
          <Accordion.Body>
            <p>Encapsulation using modules:</p>
            <pre>{`// math.ts
export function add(x: number, y: number): number {
    return x + y;
}

// app.ts
import { add } from "./math";
console.log(add(2, 3));  // Outputs: 5`}</pre>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="10">
          <Accordion.Header><b>11. Decorators</b></Accordion.Header>
          <Accordion.Body>
            <p>Used for adding metadata to classes, methods, etc.:</p>
            <pre>{`function logger(target: Function) {
    console.log("Logging...");
}

@logger
class MyClass {
    // class implementation
}`}</pre>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="11">
          <Accordion.Header><b>12. Advanced TypeScript Features</b></Accordion.Header>
          <Accordion.Body>
            <p>Includes conditional types, mapped types, type aliases, etc.</p>
            <pre>{`type TypeName<T> =
    T extends string ? "string" :
    T extends number ? "number" :
    T extends boolean ? "boolean" :
    "unknown";

type T0 = TypeName<string>;  // "string"
type T1 = TypeName<string[]>;  // "unknown"`}</pre>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="12">
          <Accordion.Header><b>13. Using TypeScript with Frameworks and Libraries</b></Accordion.Header>
          <Accordion.Body>
            <p>Integrating TypeScript with popular frameworks like React, Angular, Vue.js.</p>
          </Accordion.Body>
        </Accordion.Item>

      </Accordion>
    </div>
  );
}

export default TypeScriptConcepts;
