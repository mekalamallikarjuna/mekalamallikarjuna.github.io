// Bootstrap.js
import React from 'react';

import useDocumentTitle from '../../hooks/useDocumentTitle';
import ReactBootstrapConcepts from './ReactBootstrapConcepts';
import BootstrapConcepts from './BootstrapConcepts';

const Bootstrap = () => {
    const [document_title, setDocumentTitle] = useDocumentTitle("ROR:Bootstrap");
    return (<>
    <h3>Bootstrap:</h3>
        <p>Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains HTML, CSS and JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.</p>
        <BootstrapConcepts/>
        <ReactBootstrapConcepts/>
    </>);
}

export default Bootstrap;
