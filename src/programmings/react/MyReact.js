// React JS.js
import React from 'react';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';

const MyReact = () => {
    const [document_title, setDocumentTitle] = useDocumentTitle("ROR:React JS");
    return (
        <>
        <h3>React JS:</h3>
            <div style={{background: '#a8a8a8ba',textAlign: 'justify', textJustify: 'inter-word'}} className="p-2">    
            <p></p>
        </div>
        <Accordion eventKey="1">
        <Accordion.Item eventKey="1">
            <Accordion.Header>
                <b>1. React Introduction</b>
            </Accordion.Header>
            <Accordion.Body>
            <h1>React.js Installation </h1>
    <p>React.js is a popular JavaScript library for building user interfaces, particularly single-page applications. Developed by Facebook, React allows developers to create reusable UI components that manage their own state, leading to more efficient and maintainable code.</p>

    <h2>Key Features of React:</h2>
    <ol>
        <li>
            <strong>Component-Based Architecture:</strong>
            <p>Build encapsulated components that manage their own state, then compose them to create complex UIs. Each component is designed to be reusable and maintainable.</p>
        </li>
        <li>
            <strong>Declarative:</strong>
            <p>Design simple views for each state in your application, and React will efficiently update and render the right components when your data changes. This makes the code more predictable and easier to debug.</p>
        </li>
        <li>
            <strong>Learn Once, Write Anywhere:</strong>
            <p>Develop new features in React without rewriting existing code. React can be used to create applications for web, mobile (using React Native), or even desktop applications.</p>
        </li>
        <li>
            <strong>Virtual DOM:</strong>
            <p>React uses a virtual DOM to improve performance. When the state of an object changes, React updates the virtual DOM first, then efficiently updates the actual DOM to reflect the changes.</p>
        </li>
        <li>
            <strong>JSX:</strong>
            <p>JSX is a syntax extension that allows mixing HTML with JavaScript. It makes writing React components easier by combining the rendering logic with the UI logic in a single file.</p>
        </li>
        <li>
            <strong>One-Way Data Binding:</strong>
            <p>React follows a unidirectional data flow, which means data is passed down from the parent to the child component through props. This makes it easier to understand and debug data flow in the application.</p>
        </li>
        <li>
            <strong>Extensive Ecosystem:</strong>
            <p>React has a rich ecosystem of libraries and tools that enhance its functionality. This includes state management libraries like Redux, routing libraries like React Router, and many others.</p>
        </li>
        <li>
            <strong>Community and Support:</strong>
            <p>React has a large and active community, which means there are plenty of resources, tutorials, and third-party libraries available to help developers. It is maintained by Facebook and a community of individual developers and companies.</p>
        </li>
    </ol>

    <h2>Installation Steps:</h2>
    <ol>
        <li>
            <p><strong>Node.js and npm:</strong></p>
            <p>Make sure you have Node.js and npm (Node Package Manager) installed. You can download and install them from <a href="https://nodejs.org/" target="_blank">nodejs.org</a>.</p>
            <p>To check if Node.js and npm are installed, run:</p>
            <pre>{`node -v
npm -v`}</pre>
        </li>
        <li>
            <p><strong>Create a React Application:</strong></p>
            <p>The easiest way to start a new React application is by using the {`create-react-app`} CLI tool. This tool sets up a new React project with a sensible default configuration.</p>
            <p>npm i react@latest react-dom@latest</p>
            <p>To install {`create-react-app`}, run:</p>
            <pre>{`npm install -g create-react-app`}</pre>
        </li>
        <li>
            <p><strong>Create a New Project:</strong></p>
            <p>Use the {`create-react-app`} command to set up a new React project. Replace {`my-app`} with the name of your project:</p>
            <pre>{`npx create-react-app my-app`}</pre>
        </li>
        <li>
            <p><strong>Navigate to the Project Directory:</strong></p>
            <pre>{`cd my-app`}</pre>
        </li>
        <li>
            <p><strong>Start the Development Server:</strong></p>
            <p>Start the React development server to see your application in action:</p>
            <pre>{`npm start`}</pre>
            <p>This command starts the development server and opens the application in your default web browser at {`http://localhost:3000`}.</p>
        </li>
    </ol>

    <h2>Project Structure:</h2>
    <p>After creating the React application, you'll see a project structure like this:</p>
    <pre>{`my-app/
├── node_modules/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── index.css
│   ├── index.js
│   ├── logo.svg
│   └── ...
├── .gitignore
├── package.json
└── README.md
`}</pre>

    <h2>Key Files:</h2>
    <ul>
        <li><strong>public/index.html:</strong> The HTML template.</li>
        <li><strong>src/index.js:</strong> The JavaScript entry point. This is where React is rendered to the DOM.</li>
        <li><strong>src/App.js:</strong> The main App component.</li>
    </ul>

    <p>With this setup, you can start developing your React application by creating new components and adding functionality as needed.</p>

            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
            <Accordion.Header>
                <b>2. How many ways to write in react js code</b>
            </Accordion.Header>
            <Accordion.Body>
            <h1>Ways to Write React.js Code</h1>

<h2>1. Class Components</h2>
<p>Class components are ES6 classes that extend from {`React.Component`}. They have access to lifecycle methods and can hold and manage state.</p>
<pre>{`
import React, { Component } from 'react';

class MyComponent extends Component {
constructor(props) {
super(props);
this.state = {
  count: 0,
};
}

handleClick = () => {
this.setState({ count: this.state.count + 1 });
};

render() {
return (
  <div>
    <p>Count: {this.state.count}</p>
    <button onClick={this.handleClick}>Increment</button>
  </div>
);
}
}

export default MyComponent;
`}</pre>

<h2>2. Functional Components</h2>
<p>Functional components are simple functions that return JSX. Initially, they were stateless, but with the introduction of hooks in React 16.8, functional components can now manage state and side effects.</p>

<h3>Without Hooks (Stateless Functional Components)</h3>
<pre>{`
import React from 'react';

const MyComponent = (props) => {
return (
<div>
  <p>Hello, {props.name}!</p>
</div>
);
};

export default MyComponent;
`}</pre>

<h3>With Hooks (Stateful Functional Components)</h3>
<pre>{`
import React, { useState } from 'react';

const MyComponent = () => {
const [count, setCount] = useState(0);

return (
<div>
  <p>Count: {count}</p>
  <button onClick={() => setCount(count + 1)}>Increment</button>
</div>
);
};

export default MyComponent;
`}</pre>

<h2>3. Higher-Order Components (HOC)</h2>
<p>A higher-order component is a function that takes a component and returns a new component with additional props or behavior. This is a pattern for reusing component logic.</p>
<pre>{`
import React from 'react';

const withLogging = (WrappedComponent) => {
return class extends React.Component {
componentDidMount() {
  console.log('Component mounted');
}

render() {
  return <WrappedComponent {...this.props} />;
}
};
};

const MyComponent = (props) => {
return <div>Hello, {props.name}!</div>;
};

export default withLogging(MyComponent);
`}</pre>

<h2>4. Render Props</h2>
<p>Render props is a pattern where a component's children is a function. This allows you to share logic between components using a prop whose value is a function.</p>
<pre>{`
import React, { Component } from 'react';

class MouseTracker extends Component {
constructor(props) {
super(props);
this.state = { x: 0, y: 0 };
}

handleMouseMove = (event) => {
this.setState({ x: event.clientX, y: event.clientY });
};

render() {
return (
  <div style={{ height: '100vh' }} onMouseMove={this.handleMouseMove}>
    {this.props.render(this.state)}
  </div>
);
}
}

const App = () => {
return (
<MouseTracker render={({ x, y }) => (
  <h1>The mouse position is ({x}, {y})</h1>
)} />
);
};

export default App;
`}</pre>

<h2>5. Custom Hooks</h2>
<p>Custom hooks are JavaScript functions that use React hooks internally to encapsulate and reuse stateful logic.</p>
<pre>{`
import React, { useState, useEffect } from 'react';

const useWindowWidth = () => {
const [width, setWidth] = useState(window.innerWidth);

useEffect(() => {
const handleResize = () => setWidth(window.innerWidth);

window.addEventListener('resize', handleResize);
return () => window.removeEventListener('resize', handleResize);
}, []);

return width;
};

const MyComponent = () => {
const width = useWindowWidth();

return <div>Window width is: {width}</div>;
};

export default MyComponent;
`}</pre>

<h2>6. Context API</h2>
<p>The Context API is used to share state across the entire component tree without having to pass props down manually at every level.</p>
<pre>{`
import React, { createContext, useContext, useState } from 'react';

const MyContext = createContext();

const MyProvider = ({ children }) => {
const [value, setValue] = useState('Hello, World!');

return (
<MyContext.Provider value={{ value, setValue }}>
  {children}
</MyContext.Provider>
);
};

const MyComponent = () => {
const { value, setValue } = useContext(MyContext);

return (
<div>
  <p>{value}</p>
  <button onClick={() => setValue('Hello, React!')}>Change Value</button>
</div>
);
};

const App = () => (
<MyProvider>
<MyComponent />
</MyProvider>
);

export default App;
`}</pre>
            </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
            <Accordion.Header>
                <b>3. React ES6, ES7, ES8, ES9, ES11, ES12</b>
            </Accordion.Header>
            <Accordion.Body>
<div>
    <h1>ES6:-</h1>
    <p>ES6, also known as ECMAScript 2015, is the 6th edition of the ECMAScript language 
    specification standardized by ECMA International. It introduced several significant 
    features and syntax improvements to JavaScript, making the language more powerful, 
    expressive, and easier to work with. Here are some of the key features introduced 
    in ES6:</p>
    <ol>
        <li><b>Arrow Functions: </b>Arrow functions also handle the this keyword differently than traditional functions
        <pre>
        {`
        const add = (a, b) => a + b;
        `}
    </pre>
        </li>
        <li>
        <b>Classes:</b> A new syntax for creating objects and dealing with inheritance, making it easier to write object-oriented code.
        <pre>
        {`
class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log('Hello, my name is ',{this.name});
  }
}
`}
</pre>
        </li>
        <li>
<b>Template Literals: </b>A new way to work with strings, allowing for easier string interpolation and multi-line strings.
<pre>
{`

<html>
<body>
<h1 id="hello">Hello World</h1>
<script>
    const name = 'John';
    const greeting = 'Hello, ' + name;
    document.getElementById("hello").innerHTML = greeting;
</script>
</body>
</html>

`}
</pre>
        </li>
        <li>
        <b>Let and Const:</b> New ways to declare variables. let is block-scoped, and const is block-scoped and immutable (cannot be reassigned).
        <pre>
            {`
            let age = 30;
            const birthYear = 1990;
            `}
        </pre>
        </li>
        <li>
        <b>Default Parameters: </b>Allowing functions to have default values for parameters.
        <pre>
            {`
                function greet(name = 'Guest') {
                    console.log('Hello, ',name);
                }
            `}
        </pre>
        </li>
        <li>
        <b>Destructuring Assignment:</b>A way to extract values from arrays or properties from objects into distinct variables.
        <pre>
            {`
            const person = { name: 'Jane', age: 25 };
            const { name, age } = person;

            const arr = [1, 2, 3];
            const [first, second] = arr;
            `}
        </pre>
        </li>
        <li>
        <b>Rest and Spread Operators:</b> Rest (...) collects all remaining elements into an array, while spread (...) expands elements of an array.
        <pre>
            {`
function sum(...args) {
  return args.reduce((acc, val) => acc + val, 0);
}

const arr = [1, 2, 3];
const newArr = [...arr, 4, 5];

            `}
        </pre>
        </li>
        <li>
            <b>Promises:</b> A new way to handle asynchronous operations, providing a cleaner alternative to callbacks.
            <pre>
                {`
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve('Data fetched'), 1000);
  });
};
fetchData().then(data => console.log(data));
                `}
            </pre>
        </li>
        <li>
        <b>Modules:</b> A standardized module system for JavaScript, allowing for import and export of modules.
        <pre>
            {`
// Exporting a module
export const pi = 3.14;

// Importing a module
import { pi } from './math';
            `}
        </pre>
        </li>
        <li>
        <b>Enhanced Object Literals:</b> Simplified syntax for defining object properties and methods.
        <pre>
            {`
const name = 'John';
const person = {
  name,
  greet() {
    console.log('Hello, my name is ',this.name);
  }
};

            `}
        </pre>
        <hr/>
<h2>ES6 Features Examples</h2>
<pre>
{`

        // Classes
        class Animal {
            constructor(name, type) {
                this.name = name;
                this.type = type;
            }

            sound() {
                console.log(this.name,' the ',this.type,' makes a sound.');
            }
        }

        const dog = new Animal('Buddy', 'Dog');
        const cat = new Animal('Whiskers', 'Cat');

        dog.sound(); // Output: Buddy the Dog makes a sound.
        cat.sound(); // Output: Whiskers the Cat makes a sound.

        // Arrow Functions
        const multiply = (a, b) => a * b;

        console.log('Arrow Function:', multiply(5, 3)); // Output: 15

        // Variables (let, const, var)
        var x = 10;
        if (true) {
            var x = 20;
        }
        console.log('var:', x); // Output: 20

        let y = 10;
        if (true) {
            let y = 20;
        }
        console.log('let:', y); // Output: 10

        const z = 10;
        console.log('const:', z); // Output: 10

        // Array Methods like .map()
        const numbers = [1, 2, 3, 4, 5];
        const doubled = numbers.map(num => num * 2);

        console.log('Array.map:', doubled); // Output: [2, 4, 6, 8, 10]

        // Destructuring
        const person = { name: 'John', age: 30 };
        const { name, age } = person;

        console.log('Destructuring (Object):', name, age); // Output: John 30

        const numbersArr = [1, 2, 3];
        const [first, second] = numbersArr;

        console.log('Destructuring (Array):', first, second); // Output: 1 2

        // Modules (Note: Modules require appropriate setup and may not work directly in browser)
        // Exporting module
        // export const pi = 3.14;

        // Importing module
        // import { pi } from './math.js';

        // Ternary Operator
        const age = 25;
        const message = age >= 18 ? 'You are an adult' : 'You are a minor';

        console.log('Ternary Operator:', message); // Output: You are an adult

        // Spread Operator
        const arr1 = [1, 2, 3];
        const arr2 = [4, 5, 6];
        const combinedArray = [...arr1, ...arr2];

        console.log('Spread Operator (Arrays):', combinedArray); // Output: [1, 2, 3, 4, 5, 6]

        const obj1 = { a: 1, b: 2 };
        const obj2 = { c: 3, d: 4 };
        const combinedObject = { ...obj1, ...obj2 };

        console.log('Spread Operator (Objects):', combinedObject); // Output: { a: 1, b: 2, c: 3, d: 4 }
            `}
        </pre>
        <hr/>
        <h1>ES6 vs ES7 vs ES8</h1>

        <h2>ES6 (ECMAScript 2015)</h2>
        <p>ES6, also known as ECMAScript 2015, introduced several significant features and syntax improvements to JavaScript. Here are some of the key features:</p>
        <ol>
            <li>Arrow Functions</li>
            <li>Classes</li>
            <li>Template Literals</li>
            <li>let and const</li>
            <li>Default Parameters</li>
            <li>Destructuring Assignment</li>
            <li>Rest and Spread Operators</li>
            <li>Promises</li>
            <li>Modules</li>
            <li>Enhanced Object Literals</li>
        </ol>
        <pre>{`
// Example: Arrow Functions
const add = (a, b) => a + b;
console.log(add(2, 3)); // Output: 5

// Example: Classes
class Person {
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log('Hello, my name is ',this.name);
    }
}
const john = new Person('John');
john.greet(); // Output: Hello, my name is John
`}</pre>

        <h2>ES7 (ECMAScript 2016)</h2>
        <p>ES7 introduced two main features:</p>
        <ol>
            <li>Exponentiation Operator</li>
            <li>Array.prototype.includes</li>
        </ol>
        <pre>{`// Example: Exponentiation Operator
console.log(2 ** 3); // Output: 8

// Example: Array.prototype.includes
const numbers = [1, 2, 3];
console.log(numbers.includes(2)); // Output: true
console.log(numbers.includes(4)); // Output: false
`}</pre>

        <h2>ES8 (ECMAScript 2017)</h2>
        <p>ES8 introduced several useful features:</p>
        <ol>
            <li>async/await</li>
            <li>Object.entries() and Object.values()</li>
            <li>String padding (padStart, padEnd)</li>
            <li>Trailing commas in function parameter lists and calls</li>
            <li>Shared memory and atomics</li>
        </ol>
        <pre>{`// Example: async/await
function fetchData() {
    return new Promise(resolve => {
        setTimeout(() => resolve('Data fetched'), 1000);
    });
}

async function getData() {
    const data = await fetchData();
    console.log(data); // Output: Data fetched
}
getData();

// Example: Object.entries() and Object.values()
const obj = { a: 1, b: 2, c: 3 };
console.log(Object.entries(obj)); // Output: [['a', 1], ['b', 2], ['c', 3]]
console.log(Object.values(obj)); // Output: [1, 2, 3]

// Example: String padding
console.log('123'.padStart(5, '0')); // Output: '00123'
console.log('123'.padEnd(5, '0')); // Output: '12300'
`}</pre>
<hr/>

<h2>ES9 (ECMAScript 2018) Features Examples</h2>
<pre>{`
        // 1. Asynchronous Iteration
        async function* asyncGenerator() {
            yield 'Hello';
            yield 'Async';
            yield 'Iteration';
        }

        async function printAsync() {
            for await (let value of asyncGenerator()) {
                console.log('Asynchronous Iteration:', value);
            }
        }
        printAsync();

        // 2. Promise.prototype.finally
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => resolve('Promise resolved'), 1000);
        });

        promise
            .then(result => console.log(result))
            .finally(() => console.log('Promise.prototype.finally: Promise settled'));

        // 3. Rest/Spread Properties
        const person = { name: 'John', age: 30, occupation: 'Developer' };
        const { name, ...rest } = person;

        console.log('Rest Properties:', rest); // Output: { age: 30, occupation: 'Developer' }

        const newPerson = { ...person, location: 'New York' };
        console.log('Spread Properties:', newPerson); // Output: { name: 'John', age: 30, occupation: 'Developer', location: 'New York' }

        // 4. RegExp Named Capture Groups
        const re = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/;
        const match = re.exec('2024-07-04');
        console.log('Named Capture Groups:', match.groups); // Output: { year: '2024', month: '07', day: '04' }

        // 5. RegExp Lookbehind Assertions
        const reLookbehind = /(?<=\$)\d+/;
        const price = 'The price is $100';
        const matchLookbehind = reLookbehind.exec(price);
        console.log('Lookbehind Assertions:', matchLookbehind[0]); // Output: 100

        // 6. RegExp s (dotAll) Flag
        const reDotAll = /foo.bar/s;
        const text = 'foo\nbar';
        console.log('dotAll Flag:', reDotAll.test(text)); // Output: true

        // 7. RegExp Unicode Property Escapes
        const reUnicode = /\p{Script=Hiragana}/u;
        const hiragana = 'あ';
        console.log('Unicode Property Escapes:', reUnicode.test(hiragana)); // Output: true
       `}
    </pre> 
    <h2>ES10 (ECMAScript 2019) Features Examples</h2>
    <pre>
        {`

        // Array.prototype.flat()
        const nestedArray = [1, 2, [3, 4, [5, 6]]];
        const flattenedArray = nestedArray.flat(2);
        console.log('Array.prototype.flat():', flattenedArray); // Output: [1, 2, 3, 4, 5, 6]

        // Array.prototype.flatMap()
        const arr = [1, 2, 3, 4];
        const flatMappedArray = arr.flatMap(x => [x, x * 2]);
        console.log('Array.prototype.flatMap():', flatMappedArray); // Output: [1, 2, 2, 4, 3, 6, 4, 8]

        // String.prototype.trimStart() and String.prototype.trimEnd()
        const str = '   Hello, World!   ';
        console.log('String.prototype.trimStart():', str.trimStart()); // Output: 'Hello, World!   '
        console.log('String.prototype.trimEnd():', str.trimEnd()); // Output: '   Hello, World!'

        // Object.fromEntries()
        const entries = [['name', 'John'], ['age', 30]];
        const obj = Object.fromEntries(entries);
        console.log('Object.fromEntries():', obj); // Output: { name: 'John', age: 30 }

        // Symbol.prototype.description
        const sym = Symbol('desc');
        console.log('Symbol.prototype.description:', sym.description); // Output: 'desc'

        // Optional Catch Binding
        try {
            throw new Error('An error occurred');
        } catch {
            console.log('Optional Catch Binding: An error was caught'); // Output: An error was caught
        }

        // Function.prototype.toString()
        function foo() {}
        console.log('Function.prototype.toString():', foo.toString()); // Output: function foo() {}

        // Well-formed JSON.stringify()
        const badString = '\uD800'; // A lone surrogate, which is not allowed in JSON
        console.log('Well-formed JSON.stringify():', JSON.stringify(badString)); // Output: '"\\ud800"'

        // Array.prototype.sort() Stability
        const arrayToSort = [{ name: 'Alice', age: 21 }, { name: 'Bob', age: 25 }, { name: 'Carol', age: 21 }];
        arrayToSort.sort((a, b) => a.age - b.age);
        console.log('Array.prototype.sort() Stability:', arrayToSort);
        // Output: [{ name: 'Alice', age: 21 }, { name: 'Carol', age: 21 }, { name: 'Bob', age: 25 }]
        `}
    </pre>

    <hr/>
    <h2>ES11 (ECMAScript 2020) Features Examples</h2>
    <pre>
        {`
        // Dynamic Import
        (async () => {
            try {
                const module = await import('./someModule.js');
                console.log('Dynamic Import:', module);
            } catch (error) {
                console.error('Dynamic Import Error:', error);
            }
        })();

        // BigInt
        const largeNumber = BigInt(123456789012345678901234567890);
        console.log('BigInt:', largeNumber); // Output: 123456789012345678901234567890n

        // Nullish Coalescing Operator (??)
        const nullValue = null;
        const defaultValue = 'default';
        const result = nullValue ?? defaultValue;
        console.log('Nullish Coalescing Operator:', result); // Output: 'default'

        // Optional Chaining Operator (?.)
        const user = {
            name: 'John',
            address: {
                city: 'New York'
            }
        };
        console.log('Optional Chaining:', user?.address?.city); // Output: 'New York'
        console.log('Optional Chaining with undefined:', user?.contact?.phone); // Output: undefined

        // Promise.allSettled
        const promise1 = Promise.resolve(10);
        const promise2 = Promise.reject('Error');
        const promise3 = Promise.resolve(30);
        Promise.allSettled([promise1, promise2, promise3]).then(results => {
            console.log('Promise.allSettled:', results);
            // Output: [
            //   { status: 'fulfilled', value: 10 },
            //   { status: 'rejected', reason: 'Error' },
            //   { status: 'fulfilled', value: 30 }
            // ]
        });

        // globalThis
        console.log('globalThis:', globalThis === window); // Output: true (in browser)

        // String.prototype.matchAll
        const regex = /t(e)(st(\d?))/g;
        const str = 'test1test2';
        const matches = str.matchAll(regex);
        console.log('String.prototype.matchAll:');
        for (const match of matches) {
            console.log(match);
        }
        // Output:
        // ["test1", "e", "st1", "1", index: 0, input: "test1test2", groups: undefined]
        // ["test2", "e", "st2", "2", index: 5, input: "test1test2", groups: undefined]

        // for-in Order
        const obj = { b: 1, a: 2, c: 3 };
        for (const key in obj) {
            console.log('for-in Order:', key, obj[key]);
        }
        // Output: a 2, b 1, c 3 (order of properties might vary based on implementation)

        // import.meta
        // This feature is used to get metadata about the current module
        console.log('import.meta:', import.meta);

        // WeakRefs and FinalizationRegistry
        // Note: WeakRefs are advanced and should be used with caution
        let obj = { message: 'Hello' };
        const weakRef = new WeakRef(obj);
        obj = null; // Remove the strong reference
        console.log('WeakRef:', weakRef.deref()); // Output: { message: 'Hello' } or undefined if garbage collected

        const registry = new FinalizationRegistry((heldValue) => {
            console.log('FinalizationRegistry:', heldValue);
        });

        let obj2 = { message: 'Hello again' };
        registry.register(obj2, 'Some value');
        obj2 = null; // Remove the strong reference
        `}
    </pre>
    <hr/>
    <h1>ES12 (ECMAScript 2021) Features</h1>
    <h2>1. Logical Assignment Operators</h2>
    <p>Logical assignment operators combine logical operations with assignment.</p>
    <pre>
        {`
    

let a = 1;
let b = 2;

// Logical OR assignment
a ||= b;
console.log(a); // Output: 1

// Logical AND assignment
a &&= b;
console.log(a); // Output: 2

// Logical nullish assignment
let c = null;
c ??= 3;
console.log(c); // Output: 3
        `}
</pre>
    <h2>2. Numeric Separators</h2>
    <p>Numeric separators improve readability of large numeric literals.</p>
    <pre>
{`
const largeNumber = 1_000_000;
console.log(largeNumber); // Output: 1000000
`}
    </pre>

    <h2>3. String.prototype.replaceAll()</h2>
    <p>The {`replaceAll`} method returns a new string with all matches of a pattern replaced.</p>
    <pre>
{`
const text = "The rain in Spain stays mainly in the plain";
const newText = text.replaceAll("in", "on");
console.log(newText); // Output: "The raon on Spaon stays maonly on the plaon"
`}
    </pre>

    <h2>4. WeakRefs and FinalizationRegistry</h2>
    <p>Weak references and the FinalizationRegistry allow developers to hold weak references to objects, avoiding memory leaks.</p>
    <pre>
{`
let weakRef = new WeakRef({ data: 'example' });

let registry = new FinalizationRegistry((value) => {
    console.log('Object with key ',value,' has been garbage collected');
});

let obj = { name: 'John' };
registry.register(obj, 'myKey');

// To manually dereference
console.log(weakRef.deref());
`}
    </pre>

    <h2>5. Promise.any()</h2>
    <p>The {`Promise.any`} method returns the first fulfilled promise.</p>
    <pre>
{`
const promise1 = Promise.reject('Error 1');
const promise2 = Promise.resolve('Success 2');
const promise3 = Promise.resolve('Success 3');

Promise.any([promise1, promise2, promise3])
  .then((value) => console.log(value)) // Output: "Success 2"
  .catch((error) => console.error(error));
`}
    </pre>

    <h2>6. Logical Operators and Nullish Coalescing</h2>
    <p>Enhancements to logical operators to handle nullish values better.</p>
    <pre>
{`
let user = null;

console.log(user ?? "Guest"); // Output: "Guest"
`}
</pre>

<h2>7. Other Enhancements</h2>
<p>Other minor updates and improvements in ES12.</p>
    <ul>
        <li>Enhanced performance and debugging capabilities.</li>
        <li>Improvements in syntax and language features.</li>
    </ul>
</li>
</ol>
    
</div>
            </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="4">
            <Accordion.Header>
                <b>4. React Render</b>
            </Accordion.Header>
            <Accordion.Body>
<div>
<ol>
    <li>
        Class Component: A traditional class-based component.
    </li>
    <li>
        Functional Component: A stateless functional component.
    </li>
    <li>
        useState Hook: A functional component using the useState hook to manage state.
    </li>
    <li>
        useEffect Hook: A functional component using the useEffect hook to perform side effects.
    </li>
</ol>

    <pre>
        {`
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React Render Examples</title>
    <!-- React and ReactDOM -->
    <script src="https://unpkg.com/react@17/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
    <!-- Babel for JSX transformation -->
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
</head>
<body>
    <div id="root"></div>

    <script type="text/babel">
        // Class Component
        class ClassComponent extends React.Component {
            render() {
                return <h1>Hello from Class Component</h1>;
            }
        }

        // Functional Component
        const FunctionalComponent = () => {
            return <h1>Hello from Functional Component</h1>;
        };

        // Component using useState Hook
        const UseStateComponent = () => {
            const [count, setCount] = React.useState(0);

            return (
                <div>
                    <h1>Counter: {count}</h1>
                    <button onClick={() => setCount(count + 1)}>Increment</button>
                </div>
            );
        };

        // Component using useEffect Hook
        const UseEffectComponent = () => {
            const [count, setCount] = React.useState(0);

            React.useEffect(() => {
                document.title = 'Count: '+count;
            }, [count]);

            return (
                <div>
                    <h1>Check the document title!</h1>
                    <button onClick={() => setCount(count + 1)}>Increment</button>
                </div>
            );
        };

        // Parent Component
        const App = () => {
            return (
                <div>
                    <ClassComponent />
                    <FunctionalComponent />
                    <UseStateComponent />
                    <UseEffectComponent />
                </div>
            );
        };

        // Rendering the App component
        ReactDOM.render(<App />, document.getElementById('root'));
    </script>
</body>
</html>

        `}
    </pre>
</div>
            </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="5">
            <Accordion.Header>
                <b>5. What is JSX?</b>
            </Accordion.Header>
            <Accordion.Body>
<div>
    <pre>
        {`
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>What is JSX in React.js?</title>
    <!-- React and ReactDOM -->
    <script src="https://unpkg.com/react@17/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
    <!-- Babel for JSX transformation -->
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
</head>
<body>
    <div id="root"></div>

    <script type="text/babel">
        const JSXInfo = () => {
            return (
                <div>
                    <h1>What is JSX in React.js?</h1>
                    <p>
                        JSX (JavaScript XML) is a syntax extension for JavaScript. It was written to be used with React. 
                        JSX code looks a lot like HTML. With JSX, we can write HTML-like code directly in our JavaScript files.
                    </p>
                    <h2>Features of JSX</h2>
                    <ul>
                        <li>JSX allows us to write HTML elements in JavaScript and place them in the DOM without using functions like <code>createElement()</code> or <code>appendChild()</code>.</li>
                        <li>JSX converts HTML tags into React elements.</li>
                        <li>JSX makes it easier to write and add HTML in React.</li>
                    </ul>
                    <h2>Example of JSX</h2>
                    <p>The following example shows a simple JSX component:</p>
                    <pre>
<code>
const MyComponent = () => {
    return (
        <div>
            <h1>Hello, World!</h1>
            <p>This is a JSX example.</p>
        </div>
    );
};

// Rendering the component
ReactDOM.render(<MyComponent />, document.getElementById('root'));
</code>
                    </pre>
                    <h2>JSX and Babel</h2>
                    <p>
                        JSX is not understood by browsers directly. Therefore, a tool like Babel is used to transpile JSX into JavaScript code that browsers can understand. 
                        Babel converts JSX into React.createElement() calls which are then used by React to create and update the DOM.
                    </p>
                    <h2>Transpiled JSX Example</h2>
                    <p>The following example shows the transpiled version of the JSX code above:</p>
                    <pre>
<code>
const MyComponent = () => {
    return React.createElement(
        'div',
        null,
        React.createElement('h1', null, 'Hello, World!'),
        React.createElement('p', null, 'This is a JSX example.')
    );
};

// Rendering the component
ReactDOM.render(React.createElement(MyComponent), document.getElementById('root'));
</code>
                    </pre>
                </div>
            );
        };

        // Rendering the JSXInfo component
        ReactDOM.render(<JSXInfo />, document.getElementById('root'));
    </script>
</body>
</html>
        `}
    </pre>
</div>
            </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="6">
            <Accordion.Header>
                <b>6. React Components</b>
            </Accordion.Header>
            <Accordion.Body>
<div>
    <pre>
        {`
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React Components</title>
    <!-- React and ReactDOM -->
    <script src="https://unpkg.com/react@17/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
    <!-- Babel for JSX transformation -->
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
</head>
<body>
    <div id="root"></div>

    <script type="text/babel">
        // Functional Component
        const FunctionalComponent = () => {
            return <h1>Hello from Functional Component</h1>;
        };

        // Class Component
        class ClassComponent extends React.Component {
            render() {
                return <h1>Hello from Class Component</h1>;
            }
        }

        // Component using useState Hook
        const UseStateComponent = () => {
            const [count, setCount] = React.useState(0);

            return (
                <div>
                    <h2>useState Hook Example</h2>
                    <p>Counter: {count}</p>
                    <button onClick={() => setCount(count + 1)}>Increment</button>
                </div>
            );
        };

        // Component using useEffect Hook
        const UseEffectComponent = () => {
            const [count, setCount] = React.useState(0);

            React.useEffect(() => {
                document.title = 'Count: '+count;
            }, [count]);

            return (
                <div>
                    <h2>useEffect Hook Example</h2>
                    <p>Check the document title!</p>
                    <button onClick={() => setCount(count + 1)}>Increment</button>
                </div>
            );
        };

        // Component using useContext Hook
        const MyContext = React.createContext();

        const UseContextComponent = () => {
            const value = React.useContext(MyContext);

            return <h2>Value from Context: {value}</h2>;
        };

        // Component using useReducer Hook
        const reducer = (state, action) => {
            switch (action.type) {
                case 'increment':
                    return { count: state.count + 1 };
                case 'decrement':
                    return { count: state.count - 1 };
                default:
                    return state;
            }
        };

        const UseReducerComponent = () => {
            const [state, dispatch] = React.useReducer(reducer, { count: 0 });

            return (
                <div>
                    <h2>useReducer Hook Example</h2>
                    <p>Count: {state.count}</p>
                    <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
                    <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
                </div>
            );
        };

        // Parent Component
        const App = () => {
            return (
                <div>
                    <h1>React Components</h1>
                    <FunctionalComponent />
                    <ClassComponent />
                    <UseStateComponent />
                    <UseEffectComponent />
                    <MyContext.Provider value="Hello from Context">
                        <UseContextComponent />
                    </MyContext.Provider>
                    <UseReducerComponent />
                </div>
            );
        };

        // Rendering the App component
        ReactDOM.render(<App />, document.getElementById('root'));
    </script>
</body>
</html>

        `}
    </pre>
    <hr/>
    <h2>React Functional Components</h2>
    <pre>
        {`
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React Functional Components</title>
    <!-- React and ReactDOM -->
    <script src="https://unpkg.com/react@17/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
    <!-- Babel for JSX transformation -->
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
</head>
<body>
    <div id="root"></div>

    <script type="text/babel">
        // Simple Functional Component
        const SimpleComponent = () => {
            return <h1>Hello from Simple Component</h1>;
        };

        // Functional Component with Props
        const GreetingComponent = (props) => {
            return <h1>Hello, {props.name}!</h1>;
        };

        // Functional Component using useState Hook
        const CounterComponent = () => {
            const [count, setCount] = React.useState(0);

            return (
                <div>
                    <h1>Counter: {count}</h1>
                    <button onClick={() => setCount(count + 1)}>Increment</button>
                    <button onClick={() => setCount(count - 1)}>Decrement</button>
                </div>
            );
        };

        // Functional Component using useEffect Hook
        const EffectComponent = () => {
            const [count, setCount] = React.useState(0);

            React.useEffect(() => {
                document.title = 'Count: '+count;
            }, [count]);

            return (
                <div>
                    <h1>Check the document title!</h1>
                    <button onClick={() => setCount(count + 1)}>Increment</button>
                </div>
            );
        };

        // Parent Component
        const App = () => {
            return (
                <div>
                    <SimpleComponent />
                    <GreetingComponent name="John" />
                    <CounterComponent />
                    <EffectComponent />
                </div>
            );
        };

        // Rendering the App component
        ReactDOM.render(<App />, document.getElementById('root'));
    </script>
</body>
</html>

        `}
    </pre>
</div>
            </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="7">
            <Accordion.Header>
                <b>7. React Class Components</b>
            </Accordion.Header>
            <Accordion.Body>
<div>
<h2>Class-based Components</h2>
<ul>
    <li>Simple Component: A basic class component that renders a greeting.</li>
    <li>Component with Props: A class component that accepts and displays props.</li>
    <li>Component using State: A class component that manages a counter using state.</li>
    <li>Component using Lifecycle Methods: A class component that updates the document title based on the component's state.</li>
</ul>
<h2>Functional Components</h2>
<ul>
    <li>Simple Component: A basic functional component that renders a greeting.</li>
    <li>Component with Props: A functional component that accepts and displays props.</li>
    <li>Component using useState Hook: A functional component that manages a counter using the useState hook.</li>
    <li>Component using useEffect Hook: A functional component that updates the document title based on the component's state using the useEffect hook.</li>
</ul>
<pre>
    {`
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React Class and Functional Components</title>
    <!-- React and ReactDOM -->
    <script src="https://unpkg.com/react@17/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
    <!-- Babel for JSX transformation -->
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
</head>
<body>
    <div id="root"></div>

    <script type="text/babel">
        // Class-based Simple Component
        class ClassSimpleComponent extends React.Component {
            render() {
                return <h1>Hello from Class Simple Component</h1>;
            }
        }

        // Functional Simple Component
        const FuncSimpleComponent = () => {
            return <h1>Hello from Functional Simple Component</h1>;
        };

        // Class-based Component with Props
        class ClassGreetingComponent extends React.Component {
            render() {
                return <h1>Hello, {this.props.name}!</h1>;
            }
        }

        // Functional Component with Props
        const FuncGreetingComponent = (props) => {
            return <h1>Hello, {props.name}!</h1>;
        };

        // Class-based Component using State
        class ClassCounterComponent extends React.Component {
            constructor(props) {
                super(props);
                this.state = { count: 0 };
            }

            increment = () => {
                this.setState({ count: this.state.count + 1 });
            };

            decrement = () => {
                this.setState({ count: this.state.count - 1 });
            };

            render() {
                return (
                    <div>
                        <h1>Class Counter: {this.state.count}</h1>
                        <button onClick={this.increment}>Increment</button>
                        <button onClick={this.decrement}>Decrement</button>
                    </div>
                );
            }
        }

        // Functional Component using useState Hook
        const FuncCounterComponent = () => {
            const [count, setCount] = React.useState(0);

            return (
                <div>
                    <h1>Functional Counter: {count}</h1>
                    <button onClick={() => setCount(count + 1)}>Increment</button>
                    <button onClick={() => setCount(count - 1)}>Decrement</button>
                </div>
            );
        };

        // Class-based Component using Lifecycle Methods
        class ClassEffectComponent extends React.Component {
            constructor(props) {
                super(props);
                this.state = { count: 0 };
            }

            componentDidMount() {
                document.title = 'Count: '+this.state.count;
            }

            componentDidUpdate() {
                document.title = 'Count: '+this.state.count;
            }

            increment = () => {
                this.setState({ count: this.state.count + 1 });
            };

            render() {
                return (
                    <div>
                        <h1>Check the document title!</h1>
                        <button onClick={this.increment}>Increment</button>
                    </div>
                );
            }
        }

        // Functional Component using useEffect Hook
        const FuncEffectComponent = () => {
            const [count, setCount] = React.useState(0);

            React.useEffect(() => {
                document.title = 'Count: '+count;
            }, [count]);

            return (
                <div>
                    <h1>Check the document title!</h1>
                    <button onClick={() => setCount(count + 1)}>Increment</button>
                </div>
            );
        };

        // Parent Component
        const App = () => {
            return (
                <div>
                    <ClassSimpleComponent />
                    <FuncSimpleComponent />
                    <ClassGreetingComponent name="John" />
                    <FuncGreetingComponent name="John" />
                    <ClassCounterComponent />
                    <FuncCounterComponent />
                    <ClassEffectComponent />
                    <FuncEffectComponent />
                </div>
            );
        };

        // Rendering the App component
        ReactDOM.render(<App />, document.getElementById('root'));
    </script>
</body>
</html>

    `}
</pre>
</div>
            </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="8">
            <Accordion.Header>
                <b>8. React Props</b>
            </Accordion.Header>
            <Accordion.Body>
<div>
    <h2>Class-based Components</h2>
<ol>

<li>Greeting Component: A class component that accepts a name prop and displays a greeting.</li>
<li>Person Component: A class component that accepts multiple props (name, age, occupation) and displays a person's details.</li>
<li>Default Props Component: A class component that uses default props to display a greeting if no name prop is provided.</li>
</ol>
<h2>Functional Components</h2>
<ol>

<li>Greeting Component: A functional component that accepts a name prop and displays a greeting.</li>
<li>Person Component: A functional component that accepts multiple props (name, age, occupation) and displays a person's details.</li>
<li>Default Props Component: A functional component that uses default props to display a greeting if no name prop is provided.</li>
</ol>
<pre>
    {`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React Props Examples</title>
    <!-- React and ReactDOM -->
    <script src="https://unpkg.com/react@17/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
    <!-- Babel for JSX transformation -->
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
</head>
<body>
    <div id="root"></div>

    <script type="text/babel">
        // Class-based Component with Props
        class ClassGreetingComponent extends React.Component {
            render() {
                return <h1>Hello, {this.props.name}!</h1>;
            }
        }

        // Functional Component with Props
        const FuncGreetingComponent = (props) => {
            return <h1>Hello, {props.name}!</h1>;
        };

        // Class-based Component with multiple Props
        class ClassPersonComponent extends React.Component {
            render() {
                return (
                    <div>
                        <h1>Name: {this.props.name}</h1>
                        <p>Age: {this.props.age}</p>
                        <p>Occupation: {this.props.occupation}</p>
                    </div>
                );
            }
        }

        // Functional Component with multiple Props
        const FuncPersonComponent = ({ name, age, occupation }) => {
            return (
                <div>
                    <h1>Name: {name}</h1>
                    <p>Age: {age}</p>
                    <p>Occupation: {occupation}</p>
                </div>
            );
        };

        // Class-based Component with default Props
        class ClassDefaultPropsComponent extends React.Component {
            render() {
                return <h1>Hello, {this.props.name}!</h1>;
            }
        }
        ClassDefaultPropsComponent.defaultProps = {
            name: 'Guest'
        };

        // Functional Component with default Props
        const FuncDefaultPropsComponent = ({ name = 'Guest' }) => {
            return <h1>Hello, {name}!</h1>;
        };

        // Parent Component
        const App = () => {
            return (
                <div>
                    <h2>Class-based Components</h2>
                    <ClassGreetingComponent name="John" />
                    <ClassPersonComponent name="Jane" age={28} occupation="Engineer" />
                    <ClassDefaultPropsComponent />

                    <h2>Functional Components</h2>
                    <FuncGreetingComponent name="John" />
                    <FuncPersonComponent name="Jane" age={28} occupation="Engineer" />
                    <FuncDefaultPropsComponent />
                </div>
            );
        };

        // Rendering the App component
        ReactDOM.render(<App />, document.getElementById('root'));
    </script>
</body>
</html>

    `}
</pre>
</div>
            </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="9">
            <Accordion.Header>
                <b>9. React Events</b>
            </Accordion.Header>
            <Accordion.Body>
<div>
<ol><li><p><strong>Class-based Component (<code>ClassEventComponent</code>)</strong>:</p><ul><li>Defines a class component with a method <code>handleClick</code> to handle button click events.</li><li>Alerts a message when the button is clicked.</li><li>Renders a button with an <code>onClick</code> event that triggers the <code>handleClick</code> method.</li></ul></li><li><p><strong>Functional Component (<code>FuncEventComponent</code>)</strong>:</p><ul><li>Defines a functional component with a <code>handleClick</code> function to handle button click events.</li><li>Alerts a message when the button is clicked.</li><li>Renders a button with an <code>onClick</code> event that triggers the <code>handleClick</code> function.</li></ul></li><li><p><strong>Parent Component (<code>App</code>)</strong>:</p><ul><li>Renders both <code>ClassEventComponent</code> and <code>FuncEventComponent</code> to demonstrate event handling in both class-based and functional components.</li></ul></li></ol>
<pre>
    {`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React Events Examples</title>
    <!-- React and ReactDOM -->
    <script src="https://unpkg.com/react@17/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
    <!-- Babel for JSX transformation -->
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
</head>
<body>
    <div id="root"></div>

    <script type="text/babel">
        // Class-based Component with Event Handling
        class ClassEventComponent extends React.Component {
            handleClick = () => {
                alert('Button clicked in class component!');
            };

            render() {
                return (
                    <button onClick={this.handleClick}>
                        Click me (Class Component)
                    </button>
                );
            }
        }

        // Functional Component with Event Handling
        const FuncEventComponent = () => {
            const handleClick = () => {
                alert('Button clicked in functional component!');
            };

            return (
                <button onClick={handleClick}>
                    Click me (Functional Component)
                </button>
            );
        };

        // Parent Component
        const App = () => {
            return (
                <div>
                    <h2>Class-based Component</h2>
                    <ClassEventComponent />
                    <h2>Functional Component</h2>
                    <FuncEventComponent />
                </div>
            );
        };

        // Rendering the App component
        ReactDOM.render(<App />, document.getElementById('root'));
    </script>
</body>
</html>

    `}
</pre>
</div>
            </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="10">
            <Accordion.Header>
                <b>10. React Conditionals</b>
            </Accordion.Header>
            <Accordion.Body>
<div>
<ol><li><p><strong>Class-based Component (<code>ClassConditionalComponent</code>)</strong>:</p><ul><li>Defines a class component that accepts a prop <code>isLoggedIn</code>.</li><li>Uses an <code>if-else</code> statement for conditional rendering:<ul><li>Renders "Welcome, User!" if <code>isLoggedIn</code> is <code>true</code>.</li><li>Renders "Please log in." if <code>isLoggedIn</code> is <code>false</code>.</li></ul></li></ul></li><li><p><strong>Functional Component (<code>FuncConditionalComponent</code>)</strong>:</p><ul><li>Defines a functional component that accepts <code>isLoggedIn</code> as a prop.</li><li>Uses a ternary operator (<code>condition ? true : false</code>) for conditional rendering:<ul><li>Renders "Welcome, User!" if <code>isLoggedIn</code> is <code>true</code>.</li><li>Renders "Please log in." if <code>isLoggedIn</code> is <code>false</code>.</li></ul></li></ul></li><li><p><strong>Parent Component (<code>App</code>)</strong>:</p><ul><li>Renders both <code>ClassConditionalComponent</code> and <code>FuncConditionalComponent</code> to demonstrate conditional rendering in both class-based and functional components.</li></ul></li></ol>
<pre>
    {`
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React Conditionals Examples</title>
    <!-- React and ReactDOM -->
    <script src="https://unpkg.com/react@17/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
    <!-- Babel for JSX transformation -->
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
</head>
<body>
    <div id="root"></div>

    <script type="text/babel">
        // Class-based Component with Conditional Rendering
        class ClassConditionalComponent extends React.Component {
            render() {
                const isLoggedIn = this.props.isLoggedIn;
                
                // Conditional rendering using if-else statement
                if (isLoggedIn) {
                    return <h1>Welcome, User!</h1>;
                } else {
                    return <h1>Please log in.</h1>;
                }
            }
        }

        // Functional Component with Conditional Rendering
        const FuncConditionalComponent = ({ isLoggedIn }) => {
            // Conditional rendering using ternary operator
            return isLoggedIn ? <h1>Welcome, User!</h1> : <h1>Please log in.</h1>;
        };

        // Parent Component
        const App = () => {
            return (
                <div>
                    <h2>Class-based Component</h2>
                    <ClassConditionalComponent isLoggedIn={true} />
                    <h2>Functional Component</h2>
                    <FuncConditionalComponent isLoggedIn={false} />
                </div>
            );
        };

        // Rendering the App component
        ReactDOM.render(<App />, document.getElementById('root'));
    </script>
</body>
</html>

    `}
</pre>
</div>
            </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="11">
            <Accordion.Header>
                <b>11. React Lists</b>
            </Accordion.Header>
            <Accordion.Body>
<div>
<ol><li><p><strong>Class-based Component (<code>ClassListRenderingComponent</code>)</strong>:</p><ul><li>Defines a class component that accepts a prop <code>items</code>.</li><li>Uses the <code>map()</code> method to render a list of items (<code>&lt;li&gt;</code> elements) based on the <code>items</code> prop.</li><li>Each list item has a unique <code>key</code> attribute assigned to it for React's reconciliation process.</li></ul></li><li><p><strong>Functional Component (<code>FuncListRenderingComponent</code>)</strong>:</p><ul><li>Defines a functional component that accepts <code>items</code> as a prop.</li><li>Uses the <code>map()</code> method to render a list of items (<code>&lt;li&gt;</code> elements) based on the <code>items</code> prop.</li><li>Each list item also has a unique <code>key</code> attribute assigned to it.</li></ul></li><li><p><strong>Parent Component (<code>App</code>)</strong>:</p><ul><li>Renders both <code>ClassListRenderingComponent</code> and <code>FuncListRenderingComponent</code> to demonstrate list rendering in both class-based and functional components.</li><li>Passes an array of <code>items</code> (<code>['Apple', 'Banana', 'Cherry', 'Date']</code>) as props to both components.</li></ul></li></ol>
<prev>
    {`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React List Examples</title>
    <!-- React and ReactDOM -->
    <script src="https://unpkg.com/react@17/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
    <!-- Babel for JSX transformation -->
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
</head>
<body>
    <div id="root"></div>

    <script type="text/babel">
        // Class-based Component with List Rendering
        class ClassListRenderingComponent extends React.Component {
            render() {
                const items = this.props.items;
                
                // Rendering a list using map() method
                const itemList = items.map((item, index) => {
                    return <li key={index}>{item}</li>;
                });

                return (
                    <div>
                        <h2>Class-based Component List</h2>
                        <ul>{itemList}</ul>
                    </div>
                );
            }
        }

        // Functional Component with List Rendering
        const FuncListRenderingComponent = ({ items }) => {
            // Rendering a list using map() method
            const itemList = items.map((item, index) => {
                return <li key={index}>{item}</li>;
            });

            return (
                <div>
                    <h2>Functional Component List</h2>
                    <ul>{itemList}</ul>
                </div>
            );
        };

        // Parent Component
        const App = () => {
            const items = ['Apple', 'Banana', 'Cherry', 'Date'];

            return (
                <div>
                    <ClassListRenderingComponent items={items} />
                    <FuncListRenderingComponent items={items} />
                </div>
            );
        };

        // Rendering the App component
        ReactDOM.render(<App />, document.getElementById('root'));
    </script>
</body>
</html>

    `}
</prev>
</div>
            </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="12">
            <Accordion.Header>
                <b>12. React Forms</b>
            </Accordion.Header>
            <Accordion.Body>
<div>
<ol><li><p><strong>Class-based Component (<code>ClassFormComponent</code>)</strong>:</p><ul><li>Defines a class component that manages form state (<code>username</code> and <code>email</code>) using <code>this.state</code>.</li><li>Implements <code>handleChange</code> method to update state when form inputs change.</li><li>Implements <code>handleSubmit</code> method to handle form submission by showing an alert with the submitted data.</li><li>Renders a form with controlled inputs (<code>&lt;input&gt;</code> elements) where values are managed by React state (<code>this.state.username</code> and <code>this.state.email</code>).</li></ul></li><li><p><strong>Functional Component (<code>FuncFormComponent</code>)</strong>:</p><ul><li>Defines a functional component that uses the <code>useState</code> hook to manage form state (<code>username</code> and <code>email</code>).</li><li>Implements <code>handleChange</code> function to update state when form inputs change.</li><li>Implements <code>handleSubmit</code> function to handle form submission by showing an alert with the submitted data.</li><li>Renders a form with controlled inputs (<code>&lt;input&gt;</code> elements) where values are managed by React state (<code>formData.username</code> and <code>formData.email</code>).</li></ul></li><li><p><strong>Parent Component (<code>App</code>)</strong>:</p><ul><li>Renders both <code>ClassFormComponent</code> and <code>FuncFormComponent</code> to demonstrate form handling in both class-based and functional components.</li></ul></li></ol>
<pre>
    {`
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React Forms Examples</title>
    <!-- React and ReactDOM -->
    <script src="https://unpkg.com/react@17/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
    <!-- Babel for JSX transformation -->
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
</head>
<body>
    <div id="root"></div>

    <script type="text/babel">
        // Class-based Component with Form Handling
        class ClassFormComponent extends React.Component {
            constructor(props) {
                super(props);
                this.state = {
                    username: '',
                    email: ''
                };
            }

            // Method to handle form input changes
            handleChange = (event) => {
                const { name, value } = event.target;
                this.setState({ [name]: value });
            };

            // Method to handle form submission
            handleSubmit = (event) => {
                event.preventDefault();
                const { username, email } = this.state;
                alert('Submitted: Username - ',username,', Email - ','email);
            };

            render() {
                const { username, email } = this.state;

                return (
                    <form onSubmit={this.handleSubmit}>
                        <h2>Class-based Component Form</h2>
                        <label>
                            Username:
                            <input
                                type="text"
                                name="username"
                                value={username}
                                onChange={this.handleChange}
                            />
                        </label>
                        <br />
                        <label>
                            Email:
                            <input
                                type="email"
                                name="email"
                                value={email}
                                onChange={this.handleChange}
                            />
                        </label>
                        <br />
                        <button type="submit">Submit</button>
                    </form>
                );
            }
        }

        // Functional Component with Form Handling
        const FuncFormComponent = () => {
            const [formData, setFormData] = React.useState({
                username: '',
                email: ''
            });

            // Function to handle form input changes
            const handleChange = (event) => {
                const { name, value } = event.target;
                setFormData({ ...formData, [name]: value });
            };

            // Function to handle form submission
            const handleSubmit = (event) => {
                event.preventDefault();
                const { username, email } = formData;
                alert('Submitted: Username - ',username,', Email - ',email);
            };

            const { username, email } = formData;

            return (
                <form onSubmit={handleSubmit}>
                    <h2>Functional Component Form</h2>
                    <label>
                        Username:
                        <input
                            type="text"
                            name="username"
                            value={username}
                            onChange={handleChange}
                        />
                    </label>
                    <br />
                    <label>
                        Email:
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={handleChange}
                        />
                    </label>
                    <br />
                    <button type="submit">Submit</button>
                </form>
            );
        };

        // Parent Component
        const App = () => {
            return (
                <div>
                    <ClassFormComponent />
                    <FuncFormComponent />
                </div>
            );
        };

        // Rendering the App component
        ReactDOM.render(<App />, document.getElementById('root'));
    </script>
</body>
</html>

    `}
</pre>
</div>
            </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="13">
            <Accordion.Header>
                <b>13. React Routes</b>
            </Accordion.Header>
            <Accordion.Body>
<div>
<ol><li><p><strong>React Router Setup</strong>:</p><ul><li>The React Router is imported using <code>&lt;script&gt;</code> tags from a CDN.</li><li>The <code>BrowserRouter</code>, <code>Route</code>, and <code>Link</code> components are destructured from <code>ReactRouterDOM</code>.</li></ul></li><li><p><strong>Class-based Component (<code>ClassRouterComponent</code>)</strong>:</p><ul><li>Uses <code>&lt;BrowserRouter&gt;</code> to wrap the application and provide routing capabilities.</li><li>Defines navigation links (<code>&lt;Link&gt;</code>) to navigate between <code>/home</code> and <code>/about</code>.</li><li>Uses <code>&lt;Route&gt;</code> components to render different components (<code>Home</code> and <code>About</code>) based on the current URL path.</li></ul></li><li><p><strong>Functional Component (<code>FuncRouterComponent</code>)</strong>:</p><ul><li>Similar to the class-based example but implemented as a functional component.</li><li>Uses <code>&lt;BrowserRouter&gt;</code>, <code>&lt;Link&gt;</code>, and <code>&lt;Route&gt;</code> components to achieve navigation and rendering based on the current URL path.</li></ul></li><li><p><strong>Home and About Components</strong>:</p><ul><li>Simple functional components (<code>Home</code> and <code>About</code>) that render static content (<code>Home Page</code> and <code>About Page</code>).</li></ul></li><li><p><strong>Parent Component (<code>App</code>)</strong>:</p><ul><li>Renders both <code>ClassRouterComponent</code> and <code>FuncRouterComponent</code> to demonstrate routing in both class-based and functional components.</li></ul></li></ol>
<pre>
    {`
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React Router Examples</title>
    <!-- React and ReactDOM -->
    <script src="https://unpkg.com/react@17/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
    <!-- React Router -->
    <script src="https://unpkg.com/react-router-dom@5/umd/react-router-dom.min.js"></script>
    <!-- Babel for JSX transformation -->
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
</head>
<body>
    <div id="root"></div>

    <script type="text/babel">
        // Destructuring React Router components
        const { BrowserRouter, Route, Link } = ReactRouterDOM;

        // Class-based Component with React Router
        class ClassRouterComponent extends React.Component {
            render() {
                return (
                    <BrowserRouter>
                        <div>
                            <h2>Class-based Component with React Router</h2>
                            <nav>
                                <ul>
                                    <li>
                                        <Link to="/home">Home</Link>
                                    </li>
                                    <li>
                                        <Link to="/about">About</Link>
                                    </li>
                                </ul>
                            </nav>
                            <Route path="/home" component={Home} />
                            <Route path="/about" component={About} />
                        </div>
                    </BrowserRouter>
                );
            }
        }

        // Functional Component with React Router
        const FuncRouterComponent = () => {
            return (
                <BrowserRouter>
                    <div>
                        <h2>Functional Component with React Router</h2>
                        <nav>
                            <ul>
                                <li>
                                    <Link to="/home">Home</Link>
                                </li>
                                <li>
                                    <Link to="/about">About</Link>
                                </li>
                            </ul>
                        </nav>
                        <Route path="/home" component={Home} />
                        <Route path="/about" component={About} />
                    </div>
                </BrowserRouter>
            );
        };

        // Home Component
        const Home = () => {
            return <h3>Home Page</h3>;
        };

        // About Component
        const About = () => {
            return <h3>About Page</h3>;
        };

        // Parent Component
        const App = () => {
            return (
                <div>
                    <ClassRouterComponent />
                    <FuncRouterComponent />
                </div>
            );
        };

        // Rendering the App component
        ReactDOM.render(<App />, document.getElementById('root'));
    </script>
</body>
</html>

    `}
</pre>
</div>
            </Accordion.Body>
        </Accordion.Item>


        <Accordion.Item eventKey="14">
            <Accordion.Header>
                <b>14. React memo</b>
            </Accordion.Header>
            <Accordion.Body>
<div>
    <h1>React memo Examples</h1>
    <ol><li><p><strong>Functional Component (<code>FuncComponent</code>)</strong>:</p><ul><li>A simple functional component that renders a count passed as a prop (<code>count</code>).</li><li>Each render logs "Functional Component rendered" to the console.</li></ul></li><li><p><strong>Memoized Functional Component (<code>MemoFuncComponent</code>)</strong>:</p><ul><li>Uses <code>React.memo</code> to memoize the functional component.</li><li>Renders the count and logs "Memoized Functional Component rendered" only when <code>count</code> prop changes.</li><li>Prevents unnecessary re-renders if props (<code>count</code>) haven't changed.</li></ul></li><li><p><strong>Class-based Component (<code>ClassComponent</code>)</strong>:</p><ul><li>A class component that renders a count passed as a prop (<code>count</code>).</li><li>Each render logs "Class Component rendered" to the console.</li></ul></li><li><p><strong>Memoized Class-based Component (<code>MemoClassComponent</code>)</strong>:</p><ul><li>Uses <code>React.memo</code> to memoize the class-based component.</li><li>Renders the count and logs "Memoized Class Component rendered" only when <code>count</code> prop changes.</li><li>Prevents unnecessary re-renders if props (<code>count</code>) haven't changed.</li></ul></li><li><p><strong>Parent Component (<code>App</code>)</strong>:</p><ul><li>Manages a <code>count</code> state with <code>useState</code>.</li><li>Defines a <code>incrementCount</code> function to update the <code>count</code> state.</li><li>Renders both normal and memoized versions of both functional and class-based components to demonstrate the difference in render behavior.</li></ul></li></ol>
    <pre>
        {`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React memo Examples</title>
    <!-- React and ReactDOM -->
    <script src="https://unpkg.com/react@17/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
    <!-- Babel for JSX transformation -->
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
</head>
<body>
    <div id="root"></div>

    <script type="text/babel">
        // Functional Component without memoization
        const FuncComponent = ({ count }) => {
            console.log('Functional Component rendered');
            return <div>Count: {count}</div>;
        };

        // Memoized Functional Component using React.memo
        const MemoFuncComponent = React.memo(({ count }) => {
            console.log('Memoized Functional Component rendered');
            return <div>Count: {count}</div>;
        });

        // Class-based Component without memoization
        class ClassComponent extends React.Component {
            render() {
                console.log('Class Component rendered');
                return <div>Count: {this.props.count}</div>;
            }
        }

        // Memoized Class-based Component using React.memo
        const MemoClassComponent = React.memo(class extends React.Component {
            render() {
                console.log('Memoized Class Component rendered');
                return <div>Count: {this.props.count}</div>;
            }
        });

        // Parent Component
        const App = () => {
            const [count, setCount] = React.useState(0);

            // Function to increment count
            const incrementCount = () => {
                setCount(count + 1);
            };

            return (
                <div>
                    <h2>Functional Components</h2>
                    <FuncComponent count={count} />
                    <MemoFuncComponent count={count} />
                    <h2>Class-based Components</h2>
                    <ClassComponent count={count} />
                    <MemoClassComponent count={count} />
                    <button onClick={incrementCount}>Increment Count</button>
                </div>
            );
        };

        // Rendering the App component
        ReactDOM.render(<App />, document.getElementById('root'));
    </script>
</body>
</html>

        `}
    </pre>
</div>
            </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="15">
            <Accordion.Header>
                <b>15. React CSS Stylings</b>
            </Accordion.Header>
            <Accordion.Body>
<div>
<h2>React CSS Styling Examples</h2>
<ol><li><p><strong>Functional Component (<code>FuncStyledComponent</code>)</strong>:</p><ul><li>Uses inline CSS styles defined in a JavaScript object (<code>divStyle</code>).</li><li>Renders a <code>&lt;div&gt;</code> with the inline styles applied using the <code>style</code> attribute.</li><li>Demonstrates how to apply styles directly within a functional component.</li></ul></li><li><p><strong>Class-based Component (<code>ClassStyledComponent</code>)</strong>:</p><ul><li>Similarly, uses inline CSS styles defined in a JavaScript object (<code>divStyle</code>).</li><li>Renders a <code>&lt;div&gt;</code> with the inline styles applied using the <code>style</code> attribute.</li><li>Shows how to apply styles within a class-based component using the <code>render()</code> method.</li></ul></li><li><p><strong>Parent Component (<code>App</code>)</strong>:</p><ul><li>Renders both <code>FuncStyledComponent</code> and <code>ClassStyledComponent</code> to demonstrate CSS styling in both functional and class-based components.</li></ul></li></ol>
<pre>
    {`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React CSS Styling Examples</title>
    <!-- React and ReactDOM -->
    <script src="https://unpkg.com/react@17/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
    <!-- Babel for JSX transformation -->
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
</head>
<body>
    <div id="root"></div>

    <script type="text/babel">
        // Functional Component with CSS Styling
        const FuncStyledComponent = () => {
            // Inline styles as an object
            const divStyle = {
                backgroundColor: 'lightblue',
                padding: '10px',
                margin: '10px',
                borderRadius: '5px',
                textAlign: 'center'
            };

            return (
                <div style={divStyle}>
                    <h2>Functional Component with CSS Styling</h2>
                    <p>This is a functional component styled using inline CSS.</p>
                </div>
            );
        };

        // Class-based Component with CSS Styling
        class ClassStyledComponent extends React.Component {
            render() {
                // Inline styles as an object
                const divStyle = {
                    backgroundColor: 'lightgreen',
                    padding: '10px',
                    margin: '10px',
                    borderRadius: '5px',
                    textAlign: 'center'
                };

                return (
                    <div style={divStyle}>
                        <h2>Class-based Component with CSS Styling</h2>
                        <p>This is a class-based component styled using inline CSS.</p>
                    </div>
                );
            }
        }

        // Parent Component
        const App = () => {
            return (
                <div>
                    <FuncStyledComponent />
                    <ClassStyledComponent />
                </div>
            );
        };

        // Rendering the App component
        ReactDOM.render(<App />, document.getElementById('root'));
    </script>
</body>
</html>

    `}
</pre>
</div>
            </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="16">
            <Accordion.Header>
                <b>16. React Sass Stylings</b>
            </Accordion.Header>
            <Accordion.Body>
<div>
    <h2>React SASS Styling Examples</h2>
    <ol><li><p><strong>SASS-like Styles in <code>&lt;style&gt;</code> tag</strong>:</p><ul><li>CSS variables (<code>--primary-color</code>, <code>--secondary-color</code>) are defined at <code>:root</code> for reuse.</li><li>A mixin (<code>.card</code>) is defined as a reusable styling pattern.</li><li>Components (<code>func-styled-component</code> and <code>class-styled-component</code>) use these variables and mixin-like styles.</li></ul></li><li><p><strong>Functional Component (<code>FuncStyledComponent</code>)</strong>:</p><ul><li>Uses the <code>func-styled-component</code> class for styling.</li><li>Renders with a background color from <code>--primary-color</code> and other styles defined.</li></ul></li><li><p><strong>Class-based Component (<code>ClassStyledComponent</code>)</strong>:</p><ul><li>Uses the <code>class-styled-component</code> class for styling.</li><li>Renders with a background color from <code>--secondary-color</code> and other styles defined.</li></ul></li><li><p><strong>Parent Component (<code>App</code>)</strong>:</p><ul><li>Renders both <code>FuncStyledComponent</code> and <code>ClassStyledComponent</code> to demonstrate SASS-like styling in both functional and class-based components.</li></ul></li></ol>
    <pre>
        {`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React SASS-like Styling Examples</title>
    <!-- React and ReactDOM -->
    <script src="https://unpkg.com/react@17/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
    <!-- Babel for JSX transformation -->
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <!-- SASS-like styles -->
    <style type="text/css">
        /* Variables */
        :root {
            --primary-color: #3498db;
            --secondary-color: #2ecc71;
        }

        /* Mixins */
        .card {
            background-color: white;
            padding: 10px;
            margin: 10px;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        /* Functional Component with SASS-like Styling */
        .func-styled-component {
            background-color: var(--primary-color);
            color: white;
            padding: 20px;
            margin: 10px;
            border-radius: 5px;
            text-align: center;
        }

        /* Class-based Component with SASS-like Styling */
        .class-styled-component {
            background-color: var(--secondary-color);
            color: white;
            padding: 20px;
            margin: 10px;
            border-radius: 5px;
            text-align: center;
        }
    </style>
</head>
<body>
    <div id="root"></div>

    <script type="text/babel">
        // Functional Component with SASS-like Styling
        const FuncStyledComponent = () => {
            return (
                <div className="func-styled-component">
                    <h2>Functional Component with SASS-like Styling</h2>
                    <p>This is a functional component styled with SASS-like CSS.</p>
                </div>
            );
        };

        // Class-based Component with SASS-like Styling
        class ClassStyledComponent extends React.Component {
            render() {
                return (
                    <div className="class-styled-component">
                        <h2>Class-based Component with SASS-like Styling</h2>
                        <p>This is a class-based component styled with SASS-like CSS.</p>
                    </div>
                );
            }
        }

        // Parent Component
        const App = () => {
            return (
                <div>
                    <FuncStyledComponent />
                    <ClassStyledComponent />
                </div>
            );
        };

        // Rendering the App component
        ReactDOM.render(<App />, document.getElementById('root'));
    </script>
</body>
</html>

        `}
    </pre>
</div>
            </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="17">
            <Accordion.Header>
                <b>17. React Hook wiht Rules</b>
            </Accordion.Header>
            <Accordion.Body>
<div>
    <h2>Rules for Hooks:</h2>
    <ol><li><p><strong>Only Call Hooks at the Top Level</strong>:</p><ul><li>Hooks should only be called at the top level of your functional components or custom hooks. Don’t call them inside loops, conditions, or nested functions.</li></ul></li><li><p><strong>Only Call Hooks from React Functions</strong>:</p><ul><li>You should only call hooks from React functional components or from custom hooks that you create. Don’t call them from regular JavaScript functions.</li></ul></li><li><p><strong>Name Conventions for Custom Hooks</strong>:</p><ul><li>Custom hooks that you create should start with <code>use</code> to clearly indicate their purpose as hooks. This convention helps distinguish regular functions from custom hooks.</li></ul></li></ol>
    <pre>
        {`
        import React, { useState } from 'react';

const Counter = () => {
  // useState is a Hook that allows us to add React state to functional components
  const [count, setCount] = useState(0);

  // Increment function using setCount to update the count state
  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default Counter;

        `}
    </pre>
    <ul><li><code>useState</code> is a Hook that allows the <code>Counter</code> component to use state.</li><li><code>count</code> is the current state value, initialized to <code>0</code>.</li><li><code>setCount</code> is a function provided by <code>useState</code> to update <code>count</code>.</li><li>The <code>increment</code> function uses <code>setCount</code> to update <code>count</code> when the button is clicked.</li></ul>
</div>
            </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="18">
            <Accordion.Header>
                <b>18. React useState Hook</b>
            </Accordion.Header>
            <Accordion.Body>
<div>
<h2>React useState Hook</h2>
    <p>The useState Hook is a fundamental part of React that allows you to add state to functional components. It provides a way to create state variables, read their current values, and update them.</p>
    <h3>Basic Usage of <code>useState</code></h3>
    <ol><li><p><strong>Import <code>useState</code> from React</strong>:</p><ul><li>To use the <code>useState</code> Hook, you first need to import it from the <code>react</code> library.</li></ul></li><li><p><strong>Declare State Variables</strong>:</p><ul><li>Use <code>useState</code> to declare a state variable and a function to update it.</li></ul></li><li><p><strong>Use State Variable</strong>:</p><ul><li>You can use the state variable in your component's JSX to display or manipulate it.</li></ul></li><li><p><strong>Update State</strong>:</p><ul><li>Use the update function provided by <code>useState</code> to change the state variable's value.</li></ul></li></ol>
    <h3>Simple Counter with useState</h3>
    <pre>
        {`
import React, { useState } from 'react';

const Counter = () => {
  // Declare a state variable 'count' with an initial value of 0
  // 'setCount' is the function to update 'count'
  const [count, setCount] = useState(0);

  // Function to increment the count
  const increment = () => {
    setCount(count + 1);
  };

  // Function to decrement the count
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>Counter</h1>
      <p>Current count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;

        `}
    </pre>
    <h3>Note:</h3>
    <ol>
        <li>{`const increment = () => setCount(count + 1);`}</li>
        <li>{`const decrement = () => setCount(count - 1);`}</li>
    </ol>
</div>
            </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="19">
            <Accordion.Header>
                <b>19. React useEffect </b>
            </Accordion.Header>
            <Accordion.Body>
<div>
    <h2>React useEffect</h2>
    <p>The useEffect Hook allows you to perform side effects in your components.
        Some examples of side effects are: fetching data, directly updating the DOM, and timers.
        useEffect accepts two arguments. The second argument is optional.</p>

<p><pre>{`useEffect(<function>, <dependency>)`}</pre></p>
<h4>1. No dependency passed:</h4>
<pre>
    {`
    useEffect(() => {
        //Runs on every render
    });
    `}
</pre>

<h4>2. An empty array:</h4>
<pre>
    {`
    useEffect(() => {
        //Runs only on the first render
    }, []);


    -----------------------------------
import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  }, []); // <- add empty brackets here

  return <h1>I've rendered {count} times!</h1>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Timer />);
    `}
</pre>

<h4>3. Props or state values:</h4>
<pre>
    {`
    useEffect(() => {
        //Runs on the first render
        //And any time any dependency value changes
    }, [prop, state]);
    --------------------------------------------------------
import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

function Counter() {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    setCalculation(() => count * 2);
  }, [count]); // <- add the count variable here

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
      <p>Calculation: {calculation}</p>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Counter />);
    `}
</pre>

<h2>Effect Cleanup</h2>
<p>Some effects require cleanup to reduce memory leaks.

Timeouts, subscriptions, event listeners, and other effects that are no longer needed should be disposed.

We do this by including a return function at the end of the useEffect Hook.</p>
<pre>
    {`
import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let timer = setTimeout(() => {
    setCount((count) => count + 1);
  }, 1000);

  return () => clearTimeout(timer)
  }, []);

  return <h1>I've rendered {count} times!</h1>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Timer />);
    `}
</pre>
</div>
            </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="20">
            <Accordion.Header>
                <b>20. React useContext</b>
            </Accordion.Header>
            <Accordion.Body>
<div>
    <p>React Context is a way to manage state globally.It can be used together with the useState Hook to share state between deeply nested components more easily than with useState alone.</p>

    <pre>
        {`

import { useState, createContext, useContext } from "react";
import ReactDOM from "react-dom/client";

const UserContext = createContext();

function Component1() {
  const [user, setUser] = useState("Jesse Hall");

  return (
    <UserContext.Provider value={user}>
      <h1>{'Hello '+user}</h1>
      <Component2 />
    </UserContext.Provider>
  );
}

function Component2() {
  return (
    <>
      <h1>Component 2</h1>
      <Component3 />
    </>
  );
}

function Component3() {
  return (
    <>
      <h1>Component 3</h1>
      <Component4 />
    </>
  );
}

function Component4() {
  return (
    <>
      <h1>Component 4</h1>
      <Component5 />
    </>
  );
}

function Component5() {
  const user = useContext(UserContext);

  return (
    <>
      <h1>Component 5</h1>
      <h2>{'Hello '+user+' again!'}</h2>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Component1 />);
        `}
    </pre>
</div>
            </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="21">
            <Accordion.Header>
                <b>21. React useRef</b>
            </Accordion.Header>
            <Accordion.Body>
<div>
<p>The useRef Hook allows you to persist values between renders.

It can be used to store a mutable value that does not cause a re-render when updated.

It can be used to access a DOM element directly.</p>
<h3>Does Not Cause Re-renders</h3>
<pre>
    {`
import { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";

function App() {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h1>Render Count: {count.current}</h1>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
    `}
</pre>
<h3>Accessing DOM Elements</h3>
<pre>
    {`
import { useRef } from "react";
import ReactDOM from "react-dom/client";

function App() {
  const inputElement = useRef();

  const focusInput = () => {
    inputElement.current.focus();
  };

  return (
    <>
      <input type="text" ref={inputElement} />
      <button onClick={focusInput}>Focus Input</button>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
    `}
</pre>

<h3>Tracking State Changes</h3>
<pre>{`
import { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";

function App() {
  const [inputValue, setInputValue] = useState("");
  const previousInputValue = useRef("");

  useEffect(() => {
    previousInputValue.current = inputValue;
  }, [inputValue]);

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h2>Current Value: {inputValue}</h2>
      <h2>Previous Value: {previousInputValue.current}</h2>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
`}</pre>
</div>
            </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="22">
            <Accordion.Header>
                <b>22. React useReducer</b>
            </Accordion.Header>
            <Accordion.Body>
<div>
    <p>The useReducer Hook is similar to the useState Hook.

It allows for custom state logic.

If you find yourself keeping track of multiple pieces of state that rely on complex logic, useReducer may be useful.</p>
<h5>Syntax:</h5>
<pre>
    {`
        useReducer(<reducer>, <initialState>)
    `}
</pre>
<h5>Example:</h5>
<pre>
    {`

import { useReducer } from "react";
import ReactDOM from "react-dom/client";

const initialTodos = [
  {
    id: 1,
    title: "Todo 1",
    complete: false,
  },
  {
    id: 2,
    title: "Todo 2",
    complete: false,
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "COMPLETE":
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, complete: !todo.complete };
        } else {
          return todo;
        }
      });
    default:
      return state;
  }
};

function Todos() {
  const [todos, dispatch] = useReducer(reducer, initialTodos);

  const handleComplete = (todo) => {
    dispatch({ type: "COMPLETE", id: todo.id });
  };

  return (
    <>
      {todos.map((todo) => (
        <div key={todo.id}>
          <label>
            <input
              type="checkbox"
              checked={todo.complete}
              onChange={() => handleComplete(todo)}
            />
            {todo.title}
          </label>
        </div>
      ))}
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Todos />);
    `}
</pre>

</div>
            </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="23">
            <Accordion.Header>
                <b>23. React useCallback</b>
            </Accordion.Header>
            <Accordion.Body>
<div>
    <p>The React useCallback Hook returns a memoized callback function.</p>
    <h4>Example:</h4>
    <h5>index.js</h5>
    <pre>
        {`
import { useState, useCallback } from "react";
import ReactDOM from "react-dom/client";
import Todos from "./Todos";

const App = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = useCallback(() => {
    setTodos((t) => [...t, "New Todo"]);
  }, [todos]);

  return (
    <>
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
        `}
    </pre>
    <h5>Todos.js</h5>
    <pre>
        {`
import { memo } from "react";

const Todos = ({ todos, addTodo }) => {
  console.log("child render");
  return (
    <>
      <h2>My Todos</h2>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
      <button onClick={addTodo}>Add Todo</button>
    </>
  );
};

export default memo(Todos);
        `}
    </pre>

</div>
            </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="24">
            <Accordion.Header>
                <b>24. React useMemo</b>
            </Accordion.Header>
            <Accordion.Body>
    <div>
        <p>The React useMemo Hook returns a memoized value.</p>
        <pre>
            {`
import { useState, useMemo } from "react";
import ReactDOM from "react-dom/client";

const App = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  const calculation = useMemo(() => expensiveCalculation(count), [count]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = () => {
    setTodos((t) => [...t, "New Todo"]);
  };

  return (
    <div>
      <div>
        <h2>My Todos</h2>
        {todos.map((todo, index) => {
          return <p key={index}>{todo}</p>;
        })}
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
        <h2>Expensive Calculation</h2>
        {calculation}
      </div>
    </div>
  );
};

const expensiveCalculation = (num) => {
  console.log("Calculating...");
  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }
  return num;
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
            `}
        </pre>
    </div>
            </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="25">
            <Accordion.Header>
                <b>25. React Custom Hooks</b>
            </Accordion.Header>
            <Accordion.Body>
    <div>
        <p>Hooks are reusable functions.</p>

<p>When you have component logic that needs to be used by multiple components, we can extract that logic to a custom Hook.</p>

<p>Custom Hooks start with "use". Example: useFetch.</p>
<h3>Example:</h3>
<h4>index.js:</h4>
        <pre>
            {`
import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setData(data));
 }, []);

  return (
    <>
      {data &&
        data.map((item) => {
          return <p key={item.id}>{item.title}</p>;
        })}
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Home />);
            `}
        </pre>

        <h4>useFetch.js:</h4>
        <pre>
            {`
import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [url]);

  return [data];
};

export default useFetch;
            `}
        </pre>

        <h4>index.js:</h4>
        <pre>
            {`
import ReactDOM from "react-dom/client";
import useFetch from "./useFetch";

const Home = () => {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");

  return (
    <>
      {data &&
        data.map((item) => {
          return <p key={item.id}>{item.title}</p>;
        })}
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Home />);
            `}
        </pre>
    </div>
            </Accordion.Body>
        </Accordion.Item>


        </Accordion>
        </>
    );
}

export default MyReact;
