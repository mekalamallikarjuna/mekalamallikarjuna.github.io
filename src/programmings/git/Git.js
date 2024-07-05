// Git.js
import React from 'react';

import useDocumentTitle from '../../hooks/useDocumentTitle';
import GitConcepts from './GitConcepts';
const Git = () => {
    const [document_title, setDocumentTitle] = useDocumentTitle("ROR:Git");
    return (
        <>
        <h3>Git:-</h3>
        <p>GitHub is a developer platform that allows developers to create, store, manage and share their code. It uses Git software, providing the distributed version control of Git plus access control, bug tracking, software feature requests, task management, continuous integration, and wikis for every project.</p>
        <GitConcepts/>
        </>
    );
}

export default Git;
