// RSpec.js
import React from 'react';

import useDocumentTitle from '../../hooks/useDocumentTitle';

const RSpecTesting = () => {
    const [document_title, setDocumentTitle] = useDocumentTitle("ROR:RSpec");
    return (<h1> RSpec:</h1>);
}

export default RSpecTesting;
