// CProgramming.js
import React from "react";

import useDocumentTitle from "../../hooks/useDocumentTitle";
import CProgrammingConcepts from "./CProgrammingConcepts";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const CProgramming = () => {
  const [document_title, setDocumentTitle] =
    useDocumentTitle("ROR:CProgramming");
  return (
    <>
      <h1> C Programming:</h1>
      <p>
        <strong>Definition:</strong> C is a general-purpose, procedural computer
        programming language supporting structured programming, lexical variable
        scope, and recursion, with a static type system. It was originally
        developed by Dennis Ritchie between 1969 and 1972 at Bell Labs.
      </p>
      <Row>
        <Col>
          <div className="">
            <Button title="Click to download Syllabus" variant="warning">
              <a
                className="button"
                href="C_Programming_Syllabus.pdf"
                download="C_Programming_Syllabus.pdf"
              >
                C Programming Syllabus <i className="fa fa-download" />
              </a>
            </Button>
          </div>
        </Col>
      </Row>
      <CProgrammingConcepts />
    </>
  );
};

export default CProgramming;
