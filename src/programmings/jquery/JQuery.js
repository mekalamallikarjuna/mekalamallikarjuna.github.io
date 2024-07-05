// JQuery.js
import React from 'react';

import useDocumentTitle from '../../hooks/useDocumentTitle';
// import JQueryConcepts from './JQueryConcepts';

const JQuery = () => {
    const [document_title, setDocumentTitle] = useDocumentTitle("ROR:JQuery");
    return (    
    <>
        <h3>JQuery:</h3>
        <p>
        jQuery is a JavaScript library designed to simplify HTML DOM tree traversal and manipulation, as well as event handling, animation, and AJAX. Here's an overview of advanced jQuery programming concepts:
        </p>
        {/* <JQueryConcepts/> */}
    </>
    );
}

export default JQuery;
