import React from 'react';
import { Accordion } from 'react-bootstrap';

const MavenConcepts = () => {
  return (
    <div className="maven-concepts">
      <h2>Maven Concepts</h2>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>What is Maven?</Accordion.Header>
          <Accordion.Body>
            <p>
              Maven is a build automation tool primarily used for Java projects. It simplifies the build process, manages dependencies, and facilitates project management.
            </p>
            <p>
              Example: To create a new Maven project, use the following command:
              <code>mvn archetype:generate -DgroupId=com.example -DartifactId=myproject -DarchetypeArtifactId=maven-archetype-quickstart -DinteractiveMode=false</code>
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Maven Project Structure</Accordion.Header>
          <Accordion.Body>
            <p>
              Maven projects follow a standard directory structure:
            </p>
            <ul>
              <li>src/main/java - Main Java source code</li>
              <li>src/main/resources - Resources like properties files</li>
              <li>src/test/java - Test code</li>
              <li>pom.xml - Project Object Model (POM) file</li>
            </ul>
            <p>
              Example: Define dependencies in the `pom.xml` file:
              <pre>
                {`
<dependencies>
  <dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-core</artifactId>
    <version>5.3.8</version>
  </dependency>
</dependencies>`}
              </pre>
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Maven Dependency Management</Accordion.Header>
          <Accordion.Body>
            <p>
              Maven manages dependencies from repositories. It resolves transitive dependencies and ensures compatibility.
            </p>
            <p>
              Example: Update dependencies using Maven:
              <code>mvn clean install -U</code>
            </p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default MavenConcepts;
