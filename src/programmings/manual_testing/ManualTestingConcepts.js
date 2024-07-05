import React from 'react';
import { Accordion } from 'react-bootstrap';

const ManualTestingConcepts = () => {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header><b>Manual Testing</b></Accordion.Header>
        <Accordion.Body>
          <p>
            Manual testing involves manually executing test cases without using any automation tools. It focuses on human observation and judgment to identify software defects.
          </p>
          <p>
            Example: Performing exploratory testing on a web application to verify user interface responsiveness and usability.
          </p>
          <p>
            Key Activities:
            <ul>
              <li>Executing test cases step-by-step as per test plans.</li>
              <li>Reporting defects with detailed steps to reproduce.</li>
              <li>Ad-hoc testing to explore software behavior beyond scripted scenarios.</li>
              <li>Regression testing to ensure existing functionality is not impacted by new changes.</li>
            </ul>
          </p>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1">
        <Accordion.Header><b>Test Case Design</b></Accordion.Header>
        <Accordion.Body>
          <p>
            Test case design involves creating detailed steps and conditions to verify software functionality, ensuring comprehensive coverage of use cases and scenarios.
          </p>
          <p>
            Example: Designing test cases for login functionality of a mobile application.
          </p>
          <pre>
            {`Test Case:
Description: Verify user login functionality
Steps:
1. Launch the application.
2. Enter valid credentials (username and password).
3. Click on the Login button.
Expected Result:
- User should be successfully logged into the application.`}
          </pre>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2">
        <Accordion.Header><b>Defect Reporting</b></Accordion.Header>
        <Accordion.Body>
          <p>
            Defect reporting involves documenting identified issues with clear descriptions, steps to reproduce, severity, and impact on software functionality.
          </p>
          <p>
            Example: Reporting a defect found during manual testing of an e-commerce checkout process.
          </p>
          <pre>
            {`Defect Report:
Title: Unable to proceed with checkout
Severity: High
Steps to Reproduce:
1. Add item to cart.
2. Proceed to checkout.
3. Enter shipping details.
4. Click on 'Proceed to Payment'.
Actual Result:
- Error message 'Payment method not available' displayed.
Expected Result:
- User should be able to proceed to payment.`}
          </pre>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="3">
        <Accordion.Header><b>Exploratory Testing</b></Accordion.Header>
        <Accordion.Body>
          <p>
            Exploratory testing involves simultaneous learning, test design, and test execution. It relies on testers' domain knowledge, intuition, and creativity to uncover defects.
          </p>
          <p>
            Example: Exploring different user workflows in a CRM application to identify usability issues and unexpected behaviors.
          </p>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="4">
        <Accordion.Header><b>Regression Testing</b></Accordion.Header>
        <Accordion.Body>
          <p>
            Regression testing ensures that recent code changes do not adversely affect existing functionalities. It involves re-testing previously validated software after modifications.
          </p>
          <p>
            Example: Verifying core functionalities of an e-commerce platform after deploying a new payment gateway integration.
          </p>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default ManualTestingConcepts;
