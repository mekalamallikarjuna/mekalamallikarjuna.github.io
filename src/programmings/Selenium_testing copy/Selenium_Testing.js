// Selenium_Testing.js
import React from 'react';

import useDocumentTitle from '../../hooks/useDocumentTitle';
import SeleniumConcepts from './SeleniumConcepts';
const Selenium_Testing = () => {
    const [document_title, setDocumentTitle] = useDocumentTitle("ROR: Selenium Testing");
    return (
        <>
        <h3>Selenium:-</h3>
        <p>Selenium is an open source umbrella project for a range of tools and libraries aimed at supporting browser automation. It provides a playback tool for authoring functional tests across most modern web browsers, without the need to learn a test scripting language</p>
        <SeleniumConcepts/>
        </>
    );
}

export default Selenium_Testing;
