// JSON_XML.js
import React from 'react';

import useDocumentTitle from '../../hooks/useDocumentTitle';
import DataFormatsConcepts from './DataFormatsConcepts';

const JSON_XML = () => {
    const [document_title, setDocumentTitle] = useDocumentTitle("ROR:JSON & XML");
    return (
    <>
    <h3>JSON:-</h3>
    <p>JSON stands for JavaScript Object Notation. JSON is a lightweight format for storing and transporting data. JSON is often used when data is sent from a server to a web page. JSON is "self-describing" and easy to understand.</p>
    <h3>XML:-</h3>
    <p>Extensible Markup Language (XML) is a markup language that provides rules to define any data. Unlike other programming languages, XML cannot perform computing operations by itself. Instead, any programming language or software can be implemented for structured data management.</p>
    <DataFormatsConcepts/>
    </>
    );
}

export default JSON_XML;
