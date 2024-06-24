// Angular.js
import React from 'react';

import useDocumentTitle from '../../hooks/useDocumentTitle';

const Angular = () => {
    const [document_title, setDocumentTitle] = useDocumentTitle("ROR:AngularJS");
    return (<h1> Angular JS:</h1>);
}

export default Angular;
