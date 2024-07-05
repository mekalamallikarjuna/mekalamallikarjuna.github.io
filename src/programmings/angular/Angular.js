// Angular.js
import React from 'react';

import useDocumentTitle from '../../hooks/useDocumentTitle';
import AngularJSConcepts from './AngularJSConcepts';
const Angular = () => {
    const [document_title, setDocumentTitle] = useDocumentTitle("ROR:AngularJS");
    return (<>
    <h1> Angular JS:</h1>
    <p>
    <strong>Definition:</strong> AngularJS is a structural framework for dynamic web apps. It lets you use HTML as your template language and lets you extend HTML's syntax to express your application's components clearly and succinctly.
    </p>
    <AngularJSConcepts/>
    </>);
}

export default Angular;
