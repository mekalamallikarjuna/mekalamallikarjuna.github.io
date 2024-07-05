import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Accordion, Button, Card } from 'react-bootstrap';
import { createStore } from 'redux';
import { Provider, useDispatch, useSelector } from 'react-redux';

// Actions
const increment = () => ({ type: 'INCREMENT' });
const decrement = () => ({ type: 'DECREMENT' });

// Reducer
const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};

// Store
const store = createStore(counter);

function Counter() {
  const count = useSelector(state => state);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Count: {count}</h2>
      <Button onClick={() => dispatch(increment())}>Increment</Button>
      <Button onClick={() => dispatch(decrement())}>Decrement</Button>
    </div>
  );
}

function ReduxConcepts() {
  return (
    <Provider store={store}>
      <div className="container mt-4">
        <h1>Redux Concepts</h1>
        <Accordion defaultActiveKey="0">

          {/* Actions */}
          <Accordion.Item eventKey="0">
            <Accordion.Header><b>1. Actions</b></Accordion.Header>
            <Accordion.Body>
              <p>Actions are payloads of information that send data from your application to your Redux store. They are the only source of information for the store. You send them to the store using <code>store.dispatch()</code>.</p>
              <pre>{`
const increment = () => ({ type: 'INCREMENT' });
const decrement = () => ({ type: 'DECREMENT' });
              `}</pre>
            </Accordion.Body>
          </Accordion.Item>

          {/* Reducers */}
          <Accordion.Item eventKey="1">
            <Accordion.Header><b>2. Reducers</b></Accordion.Header>
            <Accordion.Body>
              <p>Reducers specify how the application's state changes in response to actions sent to the store. Remember that actions only describe what happened, but don't describe how the application's state changes.</p>
              <pre>{`
const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};
              `}</pre>
            </Accordion.Body>
          </Accordion.Item>

          {/* Store */}
          <Accordion.Item eventKey="2">
            <Accordion.Header><b>3. Store</b></Accordion.Header>
            <Accordion.Body>
              <p>The store is the object that brings actions and reducers together. The store has the following responsibilities:</p>
              <ul>
                <li>Holds application state.</li>
                <li>Allows access to state via <code>getState()</code>.</li>
                <li>Allows state to be updated via <code>dispatch(action)</code>.</li>
                <li>Registers listeners via <code>subscribe(listener)</code>.</li>
                <li>Handles unregistering of listeners via the function returned by <code>subscribe(listener)</code>.</li>
              </ul>
              <pre>{`
import { createStore } from 'redux';

const store = createStore(counter);
              `}</pre>
            </Accordion.Body>
          </Accordion.Item>

          {/* Using Redux with React */}
          <Accordion.Item eventKey="3">
            <Accordion.Header><b>4. Using Redux with React</b></Accordion.Header>
            <Accordion.Body>
              <p>To use Redux with React, you can use the <code>react-redux</code> library which provides bindings to connect your React components with the Redux store.</p>
              <p>The following example demonstrates a simple counter application using Redux with React:</p>
              <pre>{`
import { Provider, useDispatch, useSelector } from 'react-redux';

function Counter() {
  const count = useSelector(state => state);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Count: {count}</h2>
      <Button onClick={() => dispatch(increment())}>Increment</Button>
      <Button onClick={() => dispatch(decrement())}>Decrement</Button>
    </div>
  );
}

function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}
              `}</pre>
            </Accordion.Body>
          </Accordion.Item>

        </Accordion>
      </div>
    </Provider>
  );
}

export default ReduxConcepts;
