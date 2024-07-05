import React from 'react';
import { Accordion } from 'react-bootstrap';

const CucumberBDDConcepts = () => {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header><b>Cucumber Overview</b></Accordion.Header>
        <Accordion.Body>
          <p>
            Cucumber is a tool for Behavior-Driven Development (BDD) that allows you to write feature specifications in a human-readable format. It promotes collaboration between developers, testers, and stakeholders.
          </p>
          <p>
            Example: Writing a Cucumber feature file to describe user authentication scenarios in a Rails application.
          </p>
          <pre>
            {`# features/authentication.feature
Feature: User authentication
  Scenario: User logs in with valid credentials
    Given the user navigates to the login page
    When they enter valid username and password
    Then they should be redirected to the dashboard`}
          </pre>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1">
        <Accordion.Header><b>Feature Files</b></Accordion.Header>
        <Accordion.Body>
          <p>
            Feature files in Cucumber describe application behavior using scenarios written in a Gherkin syntax, which is human-readable and understandable by non-technical stakeholders.
          </p>
          <p>
            Example: Defining multiple scenarios in a feature file to test user registration functionality.
          </p>
          <pre>
            {`# features/registration.feature
Feature: User registration
  Scenario: User signs up with valid information
    Given the user navigates to the registration page
    When they enter valid username, email, and password
    Then they should receive a confirmation email`}
          </pre>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2">
        <Accordion.Header><b>Step Definitions</b></Accordion.Header>
        <Accordion.Body>
          <p>
            Step definitions in Cucumber are Ruby methods that match each step in feature files. They translate human-readable steps into executable code that interacts with the application.
          </p>
          <p>
            Example: Implementing step definitions for the authentication feature in a Rails application.
          </p>
          <pre>
            {`# features/step_definitions/authentication_steps.rb
Given("the user navigates to the login page") do
  visit login_path
end

When("they enter valid username and password") do
  fill_in 'Username', with: 'user@example.com'
  fill_in 'Password', with: 'password'
  click_button 'Log in'
end

Then("they should be redirected to the dashboard") do
  expect(page).to have_current_path(dashboard_path)
end`}
          </pre>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="3">
        <Accordion.Header><b>Backgrounds and Hooks</b></Accordion.Header>
        <Accordion.Body>
          <p>
            Backgrounds and hooks in Cucumber allow you to define setup and teardown steps that run before and after scenarios, ensuring consistent test conditions.
          </p>
          <p>
            Example: Using a background to set up common preconditions for all scenarios in a feature file.
          </p>
          <pre>
            {`# features/authentication.feature
Feature: User authentication
  Background:
    Given a registered user with username "user@example.com" and password "password"

  Scenario: User logs in with valid credentials
    When they enter valid username and password
    Then they should be redirected to the dashboard`}
          </pre>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="4">
        <Accordion.Header><b>Tags and Tag Expressions</b></Accordion.Header>
        <Accordion.Body>
          <p>
            Tags in Cucumber allow you to organize and filter scenarios and features based on different criteria, such as environment, importance, or feature status.
          </p>
          <p>
            Example: Tagging scenarios to run specific subsets of tests, such as smoke tests or regression tests.
          </p>
          <pre>
            {`# features/authentication.feature
@smoke
Feature: User authentication

  @critical
  Scenario: User logs in with valid credentials
    Given the user navigates to the login page
    When they enter valid username and password
    Then they should be redirected to the dashboard`}
          </pre>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default CucumberBDDConcepts;
