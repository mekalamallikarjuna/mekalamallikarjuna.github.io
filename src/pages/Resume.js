// Contact.js
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import PDFViewer from './PDFViewer';
import useDocumentTitle from '../hooks/useDocumentTitle';

const Resume = () => { 
     const [document_title, setDocumentTitle] = useDocumentTitle("ROR:Resume");
    return (
        <>
            <Container>
                <h3> Resume:</h3>
                <p>Please click to show my latest <a href="https://allurianilkumar.github.io/resume/">resume</a></p>
                {/* <Row>
                    <Col>
                        <Button title="Click to download now" variant="warning">
                            <a className="button" href="Resume.pdf" download = "AlluriAnilkumarResume.pdf"> Download <i className="fa fa-download" />
                            </a>
                        </Button>
                    </Col>
                </Row>
            </Container>
            
            <Container>
                <Row>
                    <div className="PDF-viewer">
				        <PDFViewer />
			        </div>
                </Row> */}
            </Container>
            
        </>
        
    );
};

export default Resume;
