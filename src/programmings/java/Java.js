// Contact.js
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import PdfViewerComponent from '../../components/PdfViewerComponent';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import JavaConcepts from './JavaConcepts';

const Java = () => {
    const [document_title, setDocumentTitle] = useDocumentTitle("ROR:Java");
    const [document, setDocument] = useState("JAVA.pdf");
    return (
    <>
    <Container>
                <h3> JAVA:</h3>
                <div style={{background: '#a8a8a8ba',textAlign: 'justify', textJustify: 'inter-word'}} className="p-2">    
                <p><strong>Definition:</strong> Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. It is intended to let application developers write once, run anywhere (WORA), meaning that compiled Java code can run on all platforms that support Java without the need for recompilation.</p>
                </div>
                <Row>
                    <Col>
                        <div className="">
                            <Button title="Click to download now" variant="warning">
                                <a className="button" href="JAVA.pdf" download = "JAVA.pdf">Download <i className="fa fa-download" />
                                    {/* <i className="fa fa-asterisk fa-spin" style={{ color:"red"}}/> */}
                                </a>
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
            
            <Container>
                <Row>
                    <div className="PDF-viewer">
                        <div className="AppDocument">
                            <div className="App-viewer">
                                <PdfViewerComponent document={document} />
                            </div>
                        </div>
			        </div>
                </Row>
            </Container>
            <JavaConcepts/>
            <>
        
        
        
    </>
    </>);
}

export default Java;
