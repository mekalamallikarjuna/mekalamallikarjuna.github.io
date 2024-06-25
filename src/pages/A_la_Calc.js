// A_la_Calc.js
import React from 'react';
import useDocumentTitle from '../hooks/useDocumentTitle';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

const A_la_Calc = () => {
    const [document_title, setDocumentTitle] = useDocumentTitle("ROR:A la Calc");
    return (
        <section className='A_la_Calc'>
            <h3> A la Calc:</h3>
            
            <Container>
                <Row className="p-2">
                    
                <Col xs lg="4">
                    <Row className="justify-content-center mb-2 p-2">
                    
                        <Image
                        className="A_la_Calc justify-content-end"
                        alt="A_la_Calc"
                        style={{
                            height: 250,
                            width: 250
                        }}                    
                        src='A_la_Calc.png'
                        thumbnail
                        fluid
                        />
                    </Row>
              </Col>
              <Col>
                    <div  style={{background: '#a8a8a8ba',textAlign: 'justify', textJustify: 'inter-word'}} className="p-2">
                    <p>
                    <b>Project#: A la Calc portal(Jun, 2014 - Jun, 2015 Project )<br/></b>
                    <b>A la Calc:</b>
                    Use a la Calc to Easily Create Nutrition Panels That Assure Compliance with US, UK & EU. Use a la Calc to Easily Calculate Costs, Nutrition, Allergens & Labels for Your Recipes. Toggle Panels: US/UK/EU. Identify Allergens. Calculate Nutri-Score. Nutrition Panel Software<br/>
                    <br/><b>Environment:</b> Ruby On Rails, Restful API, React JS, Bootstrap, MySQL, AWS, Bamboo, JIRA
                      <br/><b>Roles & Responsibilities:</b>
                      <ul>
                        <li>Creating new components with Ruby On Rails in back-end & front-end with React JS</li>
                        <li>Writing test cases, Creating EC2 Instance from AWS for Selenium Grid</li>
                        <li>Implemented selenium grid for cross browser testing with Sauce Labs</li>
                        <li>Involved for designing, development and production environments with CEO and BA in Agile process</li>
                      </ul>
                    </p>
                    </div>
                   </Col> 
                </Row>
            </Container>
        </section>

        
    );
}

export default A_la_Calc;
