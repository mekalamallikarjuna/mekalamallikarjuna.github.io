// Kubernetes.js
import React from 'react';

import useDocumentTitle from '../../hooks/useDocumentTitle';

const Kubernetes = () => {
    const [document_title, setDocumentTitle] = useDocumentTitle("ROR:Kubernetes/Helm Charts");
    return (<h1> Kubernetes & Helm Charts:</h1>);
}

export default Kubernetes;
