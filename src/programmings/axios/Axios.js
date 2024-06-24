// Axios.js
import React from 'react';

import useDocumentTitle from '../../hooks/useDocumentTitle';

const Axios = () => {
    const [document_title, setDocumentTitle] = useDocumentTitle("ROR:Axios");
    return (<h1> Axios:</h1>);
}

export default Axios;
