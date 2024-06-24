// Contact.js
import React from 'react';
import useDocumentTitle from '../../hooks/useDocumentTitle';

const Ruby = () => {
    const [document_title, setDocumentTitle] = useDocumentTitle("ROR:Ruby");   
    return (<>
    <h3>Ruby:</h3>
        <div style={{background: '#a8a8a8ba',textAlign: 'justify', textJustify: 'inter-word'}} className="p-2">
        
        <p>
        Ruby is an interpreted, high-level, general-purpose programming language. It was designed with an emphasis on programming productivity and simplicity. In Ruby, everything is an object, including primitive data types. It was developed in the mid-1990s by Yukihiro "Matz" Matsumoto in Japan.
        </p>
        <a href='https://www.ruby-lang.org/en/'> Ruby language </a>
        </div>
    </>);
}

export default Ruby;
