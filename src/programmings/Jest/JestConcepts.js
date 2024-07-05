import React from 'react';
import { Accordion } from 'react-bootstrap';

const JestConcepts = () => {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header><b>Jest Overview</b></Accordion.Header>
        <Accordion.Body>
          <p>
            Jest is a delightful JavaScript testing framework with a focus on simplicity and flexibility. It is commonly used for testing React applications due to its ease of setup and powerful features.
          </p>
          <p>
            Example: Writing a simple Jest test for a React component.
          </p>
          <pre>
            {`// ExampleComponent.test.js
import React from 'react';
import { render } from '@testing-library/react';
import ExampleComponent from './ExampleComponent';

test('renders example component correctly', () => {
  const { getByText } = render(<ExampleComponent />);
  const linkElement = getByText(/Example/i);
  expect(linkElement).toBeInTheDocument();
});`}
          </pre>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1">
        <Accordion.Header><b>Matchers</b></Accordion.Header>
        <Accordion.Body>
          <p>
            Jest provides a variety of built-in matchers to make assertions and verify expected outcomes in your tests.
          </p>
          <p>
            Example: Using Jest matchers to test equality and existence.
          </p>
          <pre>
            {`test('adds 1 + 2 to equal 3', () => {
  expect(1 + 2).toBe(3);
});

test('checks if an array contains a specific value', () => {
  const colors = ['red', 'green', 'blue'];
  expect(colors).toContain('green');
});`}
          </pre>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2">
        <Accordion.Header><b>Testing React Components</b></Accordion.Header>
        <Accordion.Body>
          <p>
            Jest can be used to test React components by rendering them and then asserting on their behavior and appearance.
          </p>
          <p>
            Example: Testing a React component's state and user interaction.
          </p>
          <pre>
            {`// ExampleComponent.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ExampleComponent from './ExampleComponent';

test('updates input value on change', () => {
  const { getByLabelText } = render(<ExampleComponent />);
  const input = getByLabelText('Input:');
  fireEvent.change(input, { target: { value: 'new value' } });
  expect(input.value).toBe('new value');
});`}
          </pre>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="3">
        <Accordion.Header><b>Async Testing</b></Accordion.Header>
        <Accordion.Body>
          <p>
            Jest supports asynchronous testing with built-in functions like `async`/`await` or using `Promise` return values.
          </p>
          <p>
            Example: Testing asynchronous data fetching in a React component.
          </p>
          <pre>
            {`// ExampleComponent.test.js
import React from 'react';
import { render, waitFor } from '@testing-library/react';
import ExampleComponent from './ExampleComponent';
import { fetchUserData } from './api';

test('fetches user data correctly', async () => {
  const { getByText } = render(<ExampleComponent />);
  await waitFor(() => {
    expect(fetchUserData).toHaveBeenCalledTimes(1);
    expect(getByText('User: John Doe')).toBeInTheDocument();
  });
});`}
          </pre>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="4">
        <Accordion.Header><b>Mocking Dependencies</b></Accordion.Header>
        <Accordion.Body>
          <p>
            Jest allows you to easily mock dependencies, such as functions or modules, to isolate the code under test and simulate different scenarios.
          </p>
          <p>
            Example: Mocking an API call in a Jest test for a React component.
          </p>
          <pre>
            {`// ExampleComponent.test.js
import React from 'react';
import { render } from '@testing-library/react';
import ExampleComponent from './ExampleComponent';
import { fetchUserData } from './api';

jest.mock('./api');

test('displays loading message while fetching data', async () => {
  fetchUserData.mockResolvedValueOnce({ name: 'John Doe' });
  const { getByText } = render(<ExampleComponent />);
  expect(getByText('Loading...')).toBeInTheDocument();
  await waitFor(() => {
    expect(getByText('User: John Doe')).toBeInTheDocument();
  });
});`}
          </pre>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="5">
        <Accordion.Header><b>Snapshot Testing</b></Accordion.Header>
        <Accordion.Body>
          <p>
            Jest supports snapshot testing to capture the rendered output of a component and compare it against a stored reference, ensuring UI consistency across updates.
          </p>
          <p>
            Example: Using Jest snapshots to test a React component's markup.
          </p>
          <pre>
            {`// ExampleComponent.test.js
import React from 'react';
import renderer from 'react-test-renderer';
import ExampleComponent from './ExampleComponent';

test('renders correctly', () => {
  const tree = renderer.create(<ExampleComponent />).toJSON();
  expect(tree).toMatchSnapshot();
});`}
          </pre>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default JestConcepts;
