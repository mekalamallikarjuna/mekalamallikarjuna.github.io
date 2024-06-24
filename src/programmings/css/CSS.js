// CSS.js
import React from 'react';

import useDocumentTitle from '../../hooks/useDocumentTitle';

const CSS = () => {
    const [document_title, setDocumentTitle] = useDocumentTitle("ROR:CSS");
    return (<h1> CSS:</h1>);
}

export default CSS;
