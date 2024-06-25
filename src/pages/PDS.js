// PDS.js
import React from 'react';
import useDocumentTitle from '../hooks/useDocumentTitle';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

const PDS = () => {
    const [document_title, setDocumentTitle] = useDocumentTitle("ROR:PDS");
    return (
        <section className='PDS'>
            <h3> PDS:</h3>
            
            <Container>
                <Row className="p-2">
                    
                    <Col xs lg="4">
                    <Row className="justify-content-center mb-2 p-2">
                    
                        <Image
                        className="PDS justify-content-end"
                        alt="PDS"
                        style={{
                            height: 250,
                            width: 250
                        }}                    
                        src='Premiere_Digital_Services.jpg'
                        thumbnail
                        fluid
                        />
                    </Row>
              </Col>
              <Col>
                    <div  style={{background: '#a8a8a8ba',textAlign: 'justify', textJustify: 'inter-word'}} className="p-2">
                    <p>
                    <b>Project#: PDS Portal(Jun, 2014 - Jun, 2015 Project )<br/></b>
                    <b>PDS:</b>

                    <p>
                    Premiere Digital Services is one of the largest independent digital media post-
                    production houses in the world. We offer multi-platform, multi-media digital content
                    processing, storage and distribution for studios and independent content owners. Premiere
                    also provides aggregation to digital platforms giving independent content owners a path
                    to digital distribution.
                    </p>
                    <p>
                    PDS has works with several hundred content providers and distribution
                    platforms/broadcasters around the world. Premiere is capable of meeting your needs.
                    PDS performs a wide array of services to prepare content for distribution to all meadia
                    types from digital platforms (e.g. iTunes, GooglePlay, Hulu, Netflix ) to traditional
                    broadcast.
                    </p>
                      <b>Environment:</b> Java, Selenium WebDriver, Grid and TestNG, Bamboo, JIRA, Confluence
                      <br/><b>Roles & Responsibilities:</b>
                      <ul>
                        <li>Writing test cases, Creating EC2 Instance from AWS for Selenium Grid</li>
                        <li>Implemented selenium grid for cross browser testing with Sauce Labs</li>
                        <li>Involved in the Selenium WebDriver scripts by using Java.</li>
                        <li>Created and executed Staging, Master, Production build jobs in Bamboo Server.</li>
                        <li>Developed the Data Driven Framework based on the Project Requirements.</li>
                        <li>Analyzed the requirements provided by the client.</li>
                        <li>Restoring the Data Base in Remote Server and checking Data Base tables, columns etc.</li>
                        <li>Executed test cases and the tested local machine, Sauce Labs, Selenium Headless Grid.</li>
                        <li>Checked the Build log file to identifying the bugs and posting in JIRA.</li>
                      </ul>
                    </p>
                    </div>
                   </Col> 
                </Row>
            </Container>
        </section>

        
    );
}

export default PDS;
