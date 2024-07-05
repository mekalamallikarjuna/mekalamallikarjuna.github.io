import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';

function JavaScriptConcepts() {
  return (
    <div className="content">
      <h1>JavaScript Programming Concepts</h1>
      
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header><b>1. Basic Syntax and Operators</b></Accordion.Header>
          <Accordion.Body>
            <p>JavaScript syntax basics and various operators used for arithmetic, assignment, comparison, logical operations, etc.</p>
            <pre>{`let a = 5;
let b = 10;
let sum = a + b;
console.log(sum);  // Outputs: 15`}</pre>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header><b>2. Control Structures</b></Accordion.Header>
          <Accordion.Body>
            <p>Control flow statements such as if-else, switch-case, for loops, while loops, etc.</p>
            <pre>{`let num = 10;
if (num > 0) {
  console.log('Number is positive');
} else {
  console.log('Number is non-positive');
}`}</pre>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header><b>3. Functions</b></Accordion.Header>
          <Accordion.Body>
            <p>Functions in JavaScript, including function declaration, function expression, and arrow functions.</p>
            <pre>{`// Function Declaration
function greet(name) {
  return 'Hello, ' + name + '!';
}

// Function Expression
const greetExpression = function(name) {
  return 'Hello, ' + name + '!';
};

// Arrow Function
const greetArrow = (name) => 'Hello, ' + name + '!';`}</pre>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header><b>4. Objects and Prototypes</b></Accordion.Header>
          <Accordion.Body>
            <p>Objects in JavaScript and prototype-based inheritance.</p>
            <pre>{`function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function() {
  return 'Hello, my name is ' + this.name + ' and I am ' + this.age + ' years old.';
};

let john = new Person('John', 30);
console.log(john.greet());  // Outputs: Hello, my name is John and I am 30 years old.`}</pre>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="4">
          <Accordion.Header><b>5. Advanced Functions</b></Accordion.Header>
          <Accordion.Body>
            <p>Advanced function concepts like closures, callbacks, promises, and async/await.</p>
            <pre>{`// Closure Example
function outer() {
  let message = 'Hello';

  function inner() {
    return message + ', World!';
  }

  return inner;
}

let greet = outer();
console.log(greet());  // Outputs: Hello, World!`}</pre>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="5">
          <Accordion.Header><b>6. ES6+ Features</b></Accordion.Header>
          <Accordion.Body>
            <p>ES6+ features such as destructuring, spread/rest operators, template literals, and default parameters.</p>
            <pre>{`// Destructuring
const { name, age } = { name: 'John', age: 30 };

// Spread/Rest
const nums = [1, 2, 3];
const newNums = [...nums, 4, 5];

// Template Literals
const greeting = \`Hello, \${name}!\`;

// Default Parameters
function greet(name = 'World') {
  return 'Hello, ' + name + '!';
}`}</pre>

<p><strong>Example:</strong></p>
            <pre>{`// Arrow function
const greet = name => 'Hello, ' + name + '!';

// Classes
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return 'Hello, my name is ' + this.name + '.';
  }
}

let john = new Person('John');
console.log(john.greet());  // Outputs: Hello, my name is John.`}</pre>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="6">
          <Accordion.Header><b>7. Modules</b></Accordion.Header>
          <Accordion.Body>
            <p>JavaScript modules for organizing code and using export/import statements.</p>
            <pre>{`// math.js
export function add(a, b) {
  return a + b;
}

// app.js
import { add } from './math.js';

console.log(add(5, 3));  // Outputs: 8`}</pre>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="7">
          <Accordion.Header><b>8. Asynchronous Programming</b></Accordion.Header>
          <Accordion.Body>
             <p>JavaScript uses asynchronous programming to handle operations such as fetching data from a server without blocking other operations.</p>
            <p><strong>Example:</strong></p>
            <pre>{`fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));`}</pre>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                    <Accordion.Header><b>8.1. Promises and Async/Await</b></Accordion.Header>
                    <Accordion.Body>
                        <p>JavaScript promises are objects that represent the eventual completion or failure of an asynchronous operation.</p>
                        <p><strong>Example:</strong></p>
                        <pre>{`function fetchData() {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                resolve('Data fetched successfully!');
                }, 2000);
            });
            }

            fetchData()
            .then(data => console.log(data))
            .catch(error => console.error('Error:', error));`}</pre>
                    </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            <p>Asynchronous programming using promises, async/await, and Fetch API for network requests.</p>
            <pre>{`// Promise Example
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Data fetched successfully!');
    }, 2000);
  });
}

fetchData()
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

// Async/Await Example
async function fetchDataAsync() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}`}</pre>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="8">
          <Accordion.Header><b>9. Error Handling</b></Accordion.Header>
          <Accordion.Body>
            <p>Error handling techniques using try-catch blocks and throwing errors.</p>
            <pre>{`try {
  // Code that may throw an error
  throw new Error('Something went wrong.');
} catch (error) {
  console.error('Error:', error);
}`}</pre>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="9">
          <Accordion.Header><b>10. Advanced Object Concepts</b></Accordion.Header>
          <Accordion.Body>
            <p>Advanced object manipulation using Object.freeze, Object.seal, Object.assign, etc.</p>
            <pre>{`// Object.freeze Example
const obj = { name: 'John' };
Object.freeze(obj);
obj.name = 'Jane';  // Throws error in strict mode

// Object.assign Example
const target = { a: 1, b: 2 };
const source = { b: 3, c: 4 };
const merged = Object.assign({}, target, source);`}</pre>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="10">
          <Accordion.Header><b>11. Iterators and Generators</b></Accordion.Header>
          <Accordion.Body>
            <p>Iterators and generators for iterating over collections and creating iterable objects.</p>
            <pre>{`// Iterator Example
let iterable = [10, 20, 30];
let iterator = iterable[Symbol.iterator]();
console.log(iterator.next());  // Outputs: { value: 10, done: false }

// Generator Example
function* generator() {
  yield 1;
  yield 2;
  yield 3;
}`}</pre>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="11">
          <Accordion.Header><b>12. Proxy and Reflect</b></Accordion.Header>
          <Accordion.Body>
            <p>Proxy and Reflect objects for creating proxies and performing meta-programming tasks.</p>
            <pre>{`// Proxy Example
let target = {
  message: 'Hello, World!'
};

let handler = {
  get: function(target, prop, receiver) {
    return prop in target ? target[prop] : 'Property not found!';
  }
};

let proxy = new Proxy(target, handler);
console.log(proxy.message);      // Outputs: Hello, World!
console.log(proxy.unknownProp);  // Outputs: Property not found!`}</pre>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="12">
          <Accordion.Header><b>13. Symbol</b></Accordion.Header>
          <Accordion.Body>
            <p>Symbol data type for creating unique identifiers.</p>
            <pre>{`const mySymbol = Symbol('mySymbol');
console.log(typeof mySymbol);  // Outputs: symbol`}</pre>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="13">
          <Accordion.Header><b>14. Advanced Arrays</b></Accordion.Header>
          <Accordion.Body>
            <p>Array methods such as map, filter, reduce, and typed arrays.</p>
            <pre>{`// Array.map Example
const nums = [1, 2, 3];
const doubled = nums.map(num => num * 2);

// Array.filter Example
const evenNums = nums.filter(num => num % 2 === 0);

// Array.reduce Example
const sum = nums.reduce((acc, num) => acc + num, 0);`}</pre>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="14">
          <Accordion.Header><b>15. Event Loop and Concurrency Model</b></Accordion.Header>
          <Accordion.Body>
            <p>Event loop mechanism in JavaScript and concurrency model.</p>
            <pre>{`console.log('Start');

setTimeout(function() {
  console.log('Timeout');
}, 0);

Promise.resolve().then(function() {
  console.log('Promise');
});

console.log('End');`}</pre>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="15">
          <Accordion.Header><b>16. Functional Programming</b></Accordion.Header>
          <Accordion.Body>
            <p>Functional programming concepts like pure functions, higher-order functions, and currying.</p>
            <pre>{`// Pure Function
function add(a, b) {
  return a + b;
}

// Higher-Order Function
function multiplyBy(factor) {
  return function(number) {
    return number * factor;
  };
}

// Currying
const multiplyByTwo = multiplyBy(2);
console.log(multiplyByTwo(3));  // Outputs: 6`}</pre>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="16">
          <Accordion.Header><b>17. Class and Object-Oriented Programming</b></Accordion.Header>
          <Accordion.Body>
            <p>Classes, inheritance, static methods, private fields, and other OOP concepts in JavaScript.</p>
            <pre>{`// Class Example
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return 'Hello, my name is ' + this.name + '.';
  }
}

let john = new Person('John');
console.log(john.greet());  // Outputs: Hello, my name is John.`}</pre>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="17">
          <Accordion.Header><b>18. Memory Management and Performance</b></Accordion.Header>
          <Accordion.Body>
            <p>Memory management in JavaScript and optimizing performance.</p>
            <p><strong>Example:</strong></p>
            <pre>{`// Memory Management
// Avoid circular references and unnecessary large objects to manage memory efficiently.

// Performance
// Use efficient algorithms and data structures to optimize performance.`}</pre>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="18">
          <Accordion.Header><b>19. DOM Manipulation and Events</b></Accordion.Header>
          <Accordion.Body>
            <p>Manipulating DOM elements and handling events in JavaScript.</p>
            <pre>{`document.getElementById('myButton').addEventListener('click', function() {
  document.getElementById('myDiv').innerHTML = 'Button clicked!';
});`}</pre>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="19">
          <Accordion.Header><b>20. Web APIs</b></Accordion.Header>
          <Accordion.Body>
            <p>Using Web APIs such as Fetch API, WebSockets, LocalStorage, and IndexedDB for browser interactions.</p>
            <pre>{`// Fetch API Example
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));`}</pre>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="20">
          <Accordion.Header><b>21. Testing</b></Accordion.Header>
          <Accordion.Body>
            <p>Testing JavaScript code using unit testing, integration testing, and mocking frameworks.</p>
            <p><strong>Example:</strong></p>
            <pre>{`// Unit Testing with Jest
test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});

// Mocking with Jest
jest.mock('./api');
import { fetchData } from './api';

test('fetchData returns expected data', async () => {
  fetchData.mockResolvedValue('Mock Data');
  const data = await fetchData();
  expect(data).toEqual('Mock Data');
});`}</pre>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="21">
          <Accordion.Header><b>22. Tooling and Build Systems</b></Accordion.Header>
          <Accordion.Body>
            <p>Using tools like Webpack, Babel, and ESLint for JavaScript development and build automation.</p>
            <p><strong>Example:</strong></p>
            <pre>{`// Webpack Configuration
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
};`}</pre>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="22">
          <Accordion.Header><b>23. TypeScript</b></Accordion.Header>
          <Accordion.Body>
            <p>TypeScript concepts including types, interfaces, generics, enums, etc.</p>
            <p><strong>Example:</strong></p>
            <pre>{`// TypeScript Interface
interface Person {
  name: string;
  age: number;
}

// TypeScript Function with Generics
function identity<T>(arg: T): T {
  return arg;
}`}</pre>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="23">
          <Accordion.Header><b>24. Advanced Frameworks and Libraries</b></Accordion.Header>
          <Accordion.Body>
            <p>Using advanced frameworks and libraries like React, Angular, Vue.js for building scalable applications.</p>
            <p><strong>Example:</strong></p>
            <pre>{`// React Example
import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return (
    <div>
      <h1>Hello, React!</h1>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));`}</pre>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="24">
          <Accordion.Header><b>25. Server-Side JavaScript</b></Accordion.Header>
          <Accordion.Body>
            <p>Using Node.js and Express.js for server-side JavaScript development.</p>
            <p><strong>Example:</strong></p>
            <pre>{`// Node.js Example
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, World!');
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});`}</pre>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="25">
          <Accordion.Header><b>26. Local Storage and Session Storage</b></Accordion.Header>
          <Accordion.Body>
            <p>JavaScript provides <code>localStorage</code> and <code>sessionStorage</code> objects to store key-value pairs locally within the user's browser.</p>
            <p><strong>Example:</strong></p>
            <pre>{`// Storing data
localStorage.setItem('username', 'John');

// Retrieving data
let username = localStorage.getItem('username');
console.log(username);  // Outputs: John`}</pre>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="26">
          <Accordion.Header><b>27. Regular Expressions</b></Accordion.Header>
          <Accordion.Body>
            <p>Regular expressions are patterns used to match character combinations in strings.</p>
            <p><strong>Example:</strong></p>
            <pre>{`let pattern = /hello/i;
let str = 'Hello, World!';

console.log(pattern.test(str));  // Outputs: true`}</pre>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default JavaScriptConcepts;
