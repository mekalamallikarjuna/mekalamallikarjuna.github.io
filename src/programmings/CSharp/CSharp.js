// C#.js
import React from 'react';

import useDocumentTitle from '../../hooks/useDocumentTitle';
import CSharpConcepts from './CSharpConcepts';
const CSharp = () => {
    const [document_title, setDocumentTitle] = useDocumentTitle("ROR:C#");
    return (
        <>
        <h3> C#:</h3>
        <div style={{background: '#a8a8a8ba',textAlign: 'justify', textJustify: 'inter-word'}} className="p-2">    
            <p><strong>Definition:</strong> C# (pronounced "C-sharp") is a modern, object-oriented, and type-safe programming language. C# enables developers to build many types of secure and robust applications that run in the .NET ecosystem.</p>
        </div>
        <CSharpConcepts/>
        </>
    );
}

export default CSharp;
