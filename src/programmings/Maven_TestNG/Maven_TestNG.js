// Maven_TestNG.js
import React from 'react';

import useDocumentTitle from '../../hooks/useDocumentTitle';
import MavenConcepts from './MavenConcepts';
import TestNgConcepts from './TestNgConcepts';
const Maven_TestNG = () => {
    const [document_title, setDocumentTitle] = useDocumentTitle("ROR:Maven & TestNG");
    return (
    <>
        <div>
            <h1>Maven:-</h1>
            <p>Maven is a build automation tool used primarily for Java projects. Maven can also be used to build and manage projects written in C#, Ruby, Scala, and other languages. The Maven project is hosted by The Apache Software Foundation, where it was formerly part of the Jakarta Project.</p>
            <MavenConcepts/>
            <hr/>
            <h1>TestNg:-</h1>
            <p>TestNG is a testing framework for the Java programming language created by Cedric_Beust and inspired by JUnit and NUnit. The design goal of TestNG is to cover a wider range of test categories: unit, functional, end-to-end, integration, etc., with more powerful and easy-to-use functionalities</p>
            <TestNgConcepts/>
        </div>
    </>
    );
}

export default Maven_TestNG;
