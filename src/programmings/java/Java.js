// Contact.js
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import PdfViewerComponent from '../../components/PdfViewerComponent';
import useDocumentTitle from '../../hooks/useDocumentTitle';

const Java = () => {
    const [document_title, setDocumentTitle] = useDocumentTitle("ROR:Java");
    const [document, setDocument] = useState("JAVA.pdf");
    return (
    <>
    <Container>
                <h3> JAVA:</h3>
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
    </>);
}

export default Java;
