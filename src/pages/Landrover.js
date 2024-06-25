// Landrover.js
import React from 'react';
import useDocumentTitle from '../hooks/useDocumentTitle';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

const Landrover = () => {
    const [document_title, setDocumentTitle] = useDocumentTitle("ROR:Landrover");
    return (
        <section className='Landrover'>
            <h3> Landrover:</h3>
            
            <Container>
                <Row className="p-2">
                    
                    <Col xs lg="4">
                    <Row className="justify-content-center mb-2 p-2">
                    
                         <Image
                        className="Landrover justify-content-end"
                        alt="Landrover"
                        style={{
                            height: 250,
                            width: 250
                        }}                    
                        src='Land-Rover.png'
                        thumbnail
                        fluid
                        />
                    </Row>
              </Col>
              <Col>
                    <div  style={{background: '#a8a8a8ba',textAlign: 'justify', textJustify: 'inter-word'}} className="p-2">
                    <p>
                    <b>Project#: Landrover Portal(Jul, 2015 - Dec, 2017 )<br/></b>
                    <b>Landrover:</b>Land Rover is a British brand of predominantly four-wheel drive, off-road capable vehicles, owned by multinational car manufacturer Jaguar Land Rover, since 2008 a subsidiary of India's Tata Motors. JLR builds Land Rovers in Brazil, China, India, Slovakia, and the United Kingdom
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

export default Landrover;
