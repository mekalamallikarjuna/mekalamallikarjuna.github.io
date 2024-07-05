import React from 'react';
import { Accordion } from 'react-bootstrap';

const JasmineConcepts = () => {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header><b>Jasmine Overview</b></Accordion.Header>
        <Accordion.Body>
          <p>
            Jasmine is a behavior-driven development (BDD) framework for testing JavaScript code. It focuses on readability and simplicity, allowing developers to write tests that describe the expected behavior of their code in natural language.
          </p>
          <p>
            Example: Writing a basic Jasmine test suite and spec for a JavaScript function.
          </p>
          <pre>
            {`// ExampleSpec.js
describe('Math operations', function() {
  it('should add two numbers correctly', function() {
    expect(1 + 2).toBe(3);
  });

  it('should multiply two numbers correctly', function() {
    expect(2 * 3).toBe(6);
  });
});`}
          </pre>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1">
        <Accordion.Header><b>Matchers</b></Accordion.Header>
        <Accordion.Body>
          <p>
            Jasmine provides built-in matchers that enable developers to make assertions in their tests, such as comparing values, checking for truthiness, and more.
          </p>
          <p>
            Example: Using Jasmine matchers to test equality and existence.
          </p>
          <pre>
            {`describe('String operations', function() {
  it('should concatenate two strings correctly', function() {
    expect('Hello, ' + 'World!').toBe('Hello, World!');
  });

  it('should check if a string contains a specific substring', function() {
    expect('Hello, World!').toContain('World');
  });
});`}
          </pre>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2">
        <Accordion.Header><b>Setup and Teardown</b></Accordion.Header>
        <Accordion.Body>
          <p>
            Jasmine allows developers to set up initial conditions and perform cleanup tasks before and after running tests using `beforeEach`, `afterEach`, `beforeAll`, and `afterAll` functions.
          </p>
          <p>
            Example: Using `beforeEach` and `afterEach` to set up and tear down test data.
          </p>
          <pre>
            {`describe('Array operations', function() {
  let arr;

  beforeEach(function() {
    arr = [1, 2, 3];
  });

  it('should add an element to the array', function() {
    arr.push(4);
    expect(arr.length).toBe(4);
  });

  afterEach(function() {
    arr = null;
  });
});`}
          </pre>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="3">
        <Accordion.Header><b>Spies and Mocks</b></Accordion.Header>
        <Accordion.Body>
          <p>
            Jasmine provides utilities like spies and mocks to help test functions and methods in isolation, simulate behavior, and verify function calls.
          </p>
          <p>
            Example: Using a spy to test if a function was called with specific arguments.
          </p>
          <pre>
            {`describe('Function testing', function() {
  it('should call a function with specific arguments', function() {
    const spy = jasmine.createSpy('mySpy');
    spy(1, 'hello');
    expect(spy).toHaveBeenCalledWith(1, 'hello');
  });
});`}
          </pre>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="4">
        <Accordion.Header><b>Async Testing</b></Accordion.Header>
        <Accordion.Body>
          <p>
            Jasmine supports asynchronous testing using `done` function or `async`/`await` syntax to handle asynchronous operations and assertions.
          </p>
          <p>
            Example: Testing asynchronous code using `done` function.
          </p>
          <pre>
            {`describe('Async operations', function() {
  it('should handle asynchronous operations', function(done) {
    setTimeout(function() {
      expect(true).toBe(true);
      done();
    }, 1000);
  });
});`}
          </pre>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default JasmineConcepts;
