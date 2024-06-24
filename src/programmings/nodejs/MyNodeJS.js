// MyNodeJS.js
import React from 'react';

import useDocumentTitle from '../../hooks/useDocumentTitle';

const MyNodeJS = () => {
    const [document_title, setDocumentTitle] = useDocumentTitle("ROR:NodeJS");
    return (<h1> NodeJS:</h1>);
}

export default MyNodeJS;
