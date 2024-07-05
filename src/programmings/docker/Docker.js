// Docker.js
import React from 'react';

import useDocumentTitle from '../../hooks/useDocumentTitle';
import DockerConcepts from './DockerConcepts';
const Docker = () => {
    const [document_title, setDocumentTitle] = useDocumentTitle("ROR:Docker");
    return (
        <>
            <h1> Docker:</h1>
            <p>Docker is a set of platform as a service products that use OS-level virtualization to deliver software in packages called containers. The service has both free and premium tiers. The software that hosts the containers is called Docker Engine. It was first released in 2013 and is developed by Docker, Inc.</p>
            <DockerConcepts/>
        </>
    );
}

export default Docker;
