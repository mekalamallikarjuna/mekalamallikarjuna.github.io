// MyNodeJS.js
import React from 'react';

import useDocumentTitle from '../../hooks/useDocumentTitle';
import NodeJsConcepts from './NodeJsConcepts';
const MyNodeJS = () => {
    const [document_title, setDocumentTitle] = useDocumentTitle("ROR:NodeJS");
    return (
        <>
            <h3>Node JS:-</h3>
            <p>Node.js is a cross-platform, open-source JavaScript runtime environment that can run on Windows, Linux, Unix, macOS, and more. Node.js runs on the V8 JavaScript engine, and executes JavaScript code outside a web browser. Node.js lets developers use JavaScript to write command line tools and for server-side scripting.</p>
            <NodeJsConcepts/>
        </>
    );
}

export default MyNodeJS;
