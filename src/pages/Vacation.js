// Vacation.js
import React from 'react';
import useDocumentTitle from '../hooks/useDocumentTitle';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

const Vacation = () => {
    const [document_title, setDocumentTitle] = useDocumentTitle("ROR:Vacation");
    return (
        <section className='Vacation'>
            <h3> Vacation:</h3>
            
            <Container>
                <Row className="p-2">
                    
                    <Col xs lg="4">
                    <Row className="justify-content-center mb-2 p-2">
                    
                    <Image
                    className="vacation justify-content-end"
                    alt="vacation"
                    style={{
                        height: 250,
                        width: 250
                      }}                    
                    src='vacation.png'
                    thumbnail
                    roundedCircle
                    fluid
                    />
                    
                    </Row>
              </Col>
              <Col>
                    <div  style={{background: '#a8a8a8ba',textAlign: 'justify', textJustify: 'inter-word'}} className="p-2">
                    <p>
                    <b>Project#2: Vacation (Feb 2019 to Feb 2020)<br/></b>
                    Vacation is a premier travel planning service that combines the
                    valuable services of travel specialists with inspirational content
                    to help you customize a travel experience that truly exceeds
                    your expectations.
                    <br/><b>Environment:</b> : Ruby, Ruby On Rails, Sidekiq, Whenever,
                      Carrierwave, PDFKit, React Js, JavaScript, Bootstrap, HTML &
                      CSS, PostgreSQL, RSpec, Cucumber & Selenium, Docker,
                      Kubernetes,Helm.
                      <br/><b>Roles & Responsibilities:</b>
                      <ul>
                      <li>Utilized React Js, JavaScript, Bootstrap, HTML & CSS, Ruby
                        On Rails, Sidekiq, Whenever, Carrierwave, PDFKit, PostgreSQL,
                        RSpec, Cucumber & Selenium, Docker, Kubernetes, Helm for
                        Vacation, a premier travel planning service, to write clean,
                        maintainable, efficient code logic.</li>
                        <li>Crafted user-friendly web components and RESTful APIs
                        using React Js, ensuring seamless integration of front-end
                        and back-end components for an enhanced user experience.</li>
                        <li>Implementation of new features on both front and back-end sides</li>
                        <li>Integration of side libraries and APIs services</li>
                        <li>Writing unit testing and participate in code reviews</li>
                        <li>Support, optimization, and refactoring for legacy code</li>
                      </ul>
                    </p>
                    </div>
                   </Col> 
                </Row>
            </Container>
        </section>

        
    );
}

export default Vacation;
