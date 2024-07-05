import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Accordion } from 'react-bootstrap';

const TestNGConcepts = () => {
  return (
    <div className="container mt-5">
      <h1>TestNG Concepts</h1>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header><b>1. Annotations</b></Accordion.Header>
          <Accordion.Body>
            <p>
              TestNG uses annotations to define the behavior of test methods, setup/teardown methods, and configuration methods.
              Annotations include:
            </p>
            <ul>
              <li>{`@Test`}: Marks a method as a test method.</li>
              <li>{`@BeforeSuite`}: Runs before the test suite.</li>
              <li>{`@AfterSuite`}: Runs after the test suite.</li>
              <li>And more (e.g., {`@BeforeTest`}, {`@AfterTest`}, {`@BeforeClass`}, {`@AfterClass`}).</li>
            </ul>
            <pre>
              {`
// Example TestNG annotations
@Test
public void testMethod() {
  // Test method code
}
`}
            </pre>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header><b>2. Test Suites</b></Accordion.Header>
          <Accordion.Body>
            <p>
              TestNG organizes tests into logical groups called test suites. A test suite can contain multiple test classes and configurations.
              TestNG allows defining test suites in XML using {`testng.xml`} files.
            </p>
            <pre>
              {`
<!-- Example configuring a TestNG test suite -->
<?xml version="1.0" encoding="UTF-8"?>
<suite name="Suite">
  <test name="Test">
    <classes>
      <class name="com.example.TestClass" />
    </classes>
  </test>
</suite>
`}
            </pre>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header><b>3. Assertions</b></Accordion.Header>
          <Accordion.Body>
            <p>
              TestNG provides built-in assertions to verify expected outcomes in tests, such as equality, truthiness, and null checks.
            </p>
            <pre>
              {`
// Example TestNG assertions
Assert.assertEquals(2 + 2, 4);
Assert.assertTrue(result > 0);
`}
            </pre>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header><b>4. Parameterized Tests</b></Accordion.Header>
          <Accordion.Body>
            <p>
              TestNG supports parameterized tests using the {`@Parameters`} annotation, allowing tests to be run with different data sets.
            </p>
            <pre>
              {`
// Example of parameterized tests with TestNG
@Test
@Parameters({"param1", "param2"})
public void parameterizedTest(String param1, int param2) {
  // Test code using parameters
}
`}
            </pre>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="4">
          <Accordion.Header><b>5. Listeners</b></Accordion.Header>
          <Accordion.Body>
            <p>
              TestNG listeners allow you to monitor and customize the test execution process, performing actions before or after tests, suites, classes, methods, etc.
            </p>
            <pre>
              {`
// Example using TestNG listeners
@Listeners(MyListener.class)
public class TestClass {
  @Test
  public void testMethod() {
    // Test method code
  }
}
`}
            </pre>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default TestNGConcepts;
