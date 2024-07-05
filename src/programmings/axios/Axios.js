// Axios.js
import React from 'react';

import useDocumentTitle from '../../hooks/useDocumentTitle';
import AxiosConcepts from './AxiosConcepts';
import ReduxConcepts from './ReduxConcepts';
const Axios = () => {
    const [document_title, setDocumentTitle] = useDocumentTitle("ROR:Axios");
    return (
        <>
        <h3>Axios:</h3>
        <p>Many projects on the web need to interface with a REST API at some stage in their development. Axios is a lightweight HTTP client based on the $http service within Angular.js v1.x and is similar to the native JavaScript Fetch API.</p>
        <p style={{color: "blue"}}>npm install axios</p>
        <AxiosConcepts/>
        <h3>Redux:-</h3>
        <p>Redux is an open-source JavaScript library for managing and centralizing application state. It is most commonly used with libraries such as React or Angular for building user interfaces. Similar to Facebook's Flux architecture, it was created by Dan Abramov and Andrew Clark.</p>
        <p style={{color: "blue"}}>npm install redux<br/>npm install react-redux</p>
        <ReduxConcepts/>
        </>
    );
}

export default Axios;
