// PHP.js
import React from 'react';

import useDocumentTitle from '../../hooks/useDocumentTitle';
import PHPConcepts from './PHPConcepts';
const PHP = () => {
    const [document_title, setDocumentTitle] = useDocumentTitle("ROR:PHP");
    return (
    <>
        <h3> PHP:</h3>
        <div style={{background: '#a8a8a8ba',textAlign: 'justify', textJustify: 'inter-word'}} className="p-2">    
                <p>PHP (Hypertext Preprocessor) is a popular open-source server-side scripting language designed for web development. It can be embedded into HTML.</p>
        </div>
        <PHPConcepts/>
    </>);
}

export default PHP;
