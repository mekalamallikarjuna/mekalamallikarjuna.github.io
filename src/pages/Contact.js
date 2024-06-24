// Contact.js
import React from 'react';
import useDocumentTitle from '../hooks/useDocumentTitle';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import ContactMe from '../images/contact_me.png';

const Contact = () => {
    const [document_title, setDocumentTitle] = useDocumentTitle("ROR:Contact");   
    return (
        <section className='about'>
            <h3>Contact:</h3>
            
            <Container>
                <Row className="p-6">
                    
                    <Col xs lg="p-4">
                    <Row className="justify-content-center mb-2 p-2">
                        <Image
                        className="profile justify-content-end"
                        alt="profile"                   
                        src={ContactMe}
                        thumbnail
                        />
                    </Row>
              </Col>
            <Col>
            
                  <div className="info-wrap w-100 p-lg-5 p-4 img">
                    <h3>Get in Touch Here</h3>
                    <p className="mb-4">
                      Contact me for any project requirements via mobile or email.
                    </p>
                    {/* <div className="w-100 d-flex align-items-start">
                      <div className="icon d-flex align-items-center justify-content-start p-2" >
                        <i class="fa fa-map-marker fa-2x" aria-hidden="true"></i>
                      </div>
                      <div className="m-2" style={{ paddingLeft: '6px' }}>
                        <h5>
                          Naladalapur,V.V palem (M.D), Sri Potti Sriramulu Nellore Distic, A.P, INDIA
                        </h5>
                      </div>
                    </div> */}
                    <div className="w-100 d-flex align-items-start">
                      <div className="icon d-flex align-items-center justify-content-start p-2">
                        <i class="fa fa-phone fa-2x" aria-hidden="true"></i>
                      </div>
                      <div className="text m-2">
                        <h5>
                          +91 9848094663
                        </h5>
                      </div>
                    </div>
                    <div className="w-100 d-flex align-items-start">
                      <div className="icon d-flex align-items-center justify-content-start p-2">
                        <i class="fa fa-envelope fa-2x" aria-hidden="true"></i>
                      </div>
                      <div className="text m-2">
                        <h5>
                          kumarallurianil@gmail.com
                        </h5>
                      </div>
                    </div>
                    <div className="w-100 d-flex align-items-start">
                      <div className="icon d-flex align-items-center justify-content-start p-2">
                        <i class="fa fa-globe fa-2x" aria-hidden="true"></i>
                      </div>
                      <div className="text m-2">
                        <h5>
                           https://allurianilkumar.github.io
                        </h5>
                      </div>
                    </div>
                </div>
            </Col>
                    
                </Row>
            </Container>
        </section>
    );
}

export default Contact;
