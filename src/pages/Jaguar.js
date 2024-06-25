// Jaguar.js
import React from 'react';
import useDocumentTitle from '../hooks/useDocumentTitle';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

const Jaguar = () => {
    const [document_title, setDocumentTitle] = useDocumentTitle("ROR:Jaguar");
    return (
        <section className='Jaguar'>
            <h3> Jaguar:</h3>
            
            <Container>
                <Row className="p-2">
                    
                    <Col xs lg="4">
                    <Row className="justify-content-center mb-2 p-2">
                    
                        <Image
                        className="Jaguar justify-content-end"
                        alt="Jaguar"
                        style={{
                            height: 250,
                            width: 250
                        }}                    
                        src='Jaguar.jpg'
                        thumbnail
                        fluid
                        />
                    </Row>
              </Col>
              <Col>
                    <div  style={{background: '#a8a8a8ba',textAlign: 'justify', textJustify: 'inter-word'}} className="p-2">
                    <p>
                    <b>Project#: Jaguar Portal(Jul, 2015 - Dec, 2017 )<br/></b>
                    <b>Jaguar:</b>Jaguar is the sports car and luxury vehicle brand of Jaguar Land Rover, a British multinational car manufacturer with its headquarters in Whitley, Coventry, England.
                      <br/><b>Environment:</b> Java, Manual Testing, Cucumber BDD, Selenium Testing, Maven, TestNG
                      <br/><b>Roles & Responsibilities:</b>
                      <ul>
                        <li>Involved in the Selenium WebDriver scripts by using Java.</li>
                        <li>Preparing Test cases, reviewing the Test cases and executing those Test cases.</li>
                        <li>Created and executed Staging, Master, Production build jobs in Bamboo Server.</li>
                        <li>Creating defects while doing verification on application and following developers until they closure.</li>
                        <li>Executing Test Cases and Generating Test Summary Reports.</li>
                        <li>Attending weekly meeting with development team to discuss the issues/concerns and any updates of the modules.</li>
                        <li>Checked the Build log file to identifying the bugs and posting in JIRA.</li>
                        <li>Executed test cases and the tested local machine, Sauce Labs, Selenium Headless Grid.</li>
                      </ul>
                    </p>
                    </div>
                   </Col> 
                </Row>
            </Container>
        </section>

        
    );
}

export default Jaguar;
