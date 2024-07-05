import React from 'react';
import { Accordion } from 'react-bootstrap';

const SeleniumConcepts = () => {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header><b>Selenium WebDriver Overview</b></Accordion.Header>
        <Accordion.Body>
          <p>
            Selenium WebDriver is a powerful tool for automating web browsers. It enables testing of web applications across different browsers and platforms by simulating user interactions.
          </p>
          <p>
            Example: Using Selenium WebDriver to automate login functionality in a Ruby on Rails application.
          </p>
          <pre>
            {`require 'selenium-webdriver'

# Configure Selenium WebDriver to use Chrome browser
driver = Selenium::WebDriver.for :chrome

# Navigate to the login page
driver.navigate.to 'http://localhost:3000/login'

# Find username and password fields, enter credentials, and submit
driver.find_element(name: 'username').send_keys 'user@example.com'
driver.find_element(name: 'password').send_keys 'password'
driver.find_element(id: 'login-btn').click

# Verify successful login by checking dashboard page title
puts "Page title: #{driver.title}"

# Close the browser session
driver.quit`}
          </pre>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1">
        <Accordion.Header><b>Element Locators</b></Accordion.Header>
        <Accordion.Body>
          <p>
            Element locators in Selenium WebDriver are used to identify and interact with web elements on a page. They help locate elements based on various attributes like ID, name, class name, XPath, etc.
          </p>
          <p>
            Example: Locating elements using CSS selectors in Selenium WebDriver.
          </p>
          <pre>
            {`# Find element by CSS selector
element = driver.find_element(css: '#login-form input[type="submit"]')
element.click`}
          </pre>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2">
        <Accordion.Header><b>Handling Forms and User Interactions</b></Accordion.Header>
        <Accordion.Body>
          <p>
            Selenium WebDriver allows you to automate form submissions, button clicks, dropdown selections, and other user interactions on web pages.
          </p>
          <p>
            Example: Automating form submission in Selenium WebDriver.
          </p>
          <pre>
            {`# Find username and password fields, enter credentials, and submit
driver.find_element(name: 'username').send_keys 'user@example.com'
driver.find_element(name: 'password').send_keys 'password'
driver.find_element(id: 'login-btn').click`}
          </pre>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="3">
        <Accordion.Header><b>Assertions and Verifications</b></Accordion.Header>
        <Accordion.Body>
          <p>
            Assertions and verifications in Selenium WebDriver are used to verify expected behaviors and conditions on web pages, ensuring that the application behaves as expected.
          </p>
          <p>
            Example: Verifying page title after successful login using Selenium WebDriver.
          </p>
          <pre>
            {`# Verify successful login by checking dashboard page title
actual_title = driver.title
expected_title = 'Dashboard - My App'
if actual_title == expected_title
  puts "Login successful. Page title: #{actual_title}"
else
  puts "Login failed. Expected title: #{expected_title}, Actual title: #{actual_title}"
end`}
          </pre>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="4">
        <Accordion.Header><b>Handling Alerts, Pop-ups, and Frames</b></Accordion.Header>
        <Accordion.Body>
          <p>
            Selenium WebDriver provides methods to handle alerts, pop-ups, and iframes within web applications, enabling comprehensive test coverage.
          </p>
          <p>
            Example: Switching to and interacting with an iframe using Selenium WebDriver.
          </p>
          <pre>
            {`# Switch to iframe by index or name
driver.switch_to.frame('iframeName')

# Perform actions within iframe
element = driver.find_element(id: 'iframeElementId')
element.click`}
          </pre>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="5">
        <Accordion.Header><b>Headless Testing and Parallel Execution</b></Accordion.Header>
        <Accordion.Body>
          <p>
            Selenium WebDriver supports headless testing and parallel execution, allowing faster and more efficient test runs without requiring a visible browser window.
          </p>
          <p>
            Example: Configuring Selenium WebDriver for headless testing in Chrome browser.
          </p>
          <pre>
            {`# Configure Selenium WebDriver for headless Chrome
options = Selenium::WebDriver::Chrome::Options.new
options.add_argument('--headless')
driver = Selenium::WebDriver.for :chrome, options: options`}
          </pre>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default SeleniumConcepts;
