// Manual_Testing.js
import React from 'react';

import useDocumentTitle from '../../hooks/useDocumentTitle';
import ManualTestingConcepts from './ManualTestingConcepts';

const Manual_Testing = () => {
    const [document_title, setDocumentTitle] = useDocumentTitle("ROR: Manual Testing");
    return (
        <>      
        <h1> Manual Testing:</h1>
        <p>Manual testing involves manually executing test cases without using any automation tools. It focuses on human observation and judgment to identify software defects.</p>
        <ManualTestingConcepts/>
        </>
    );
}

export default Manual_Testing;
