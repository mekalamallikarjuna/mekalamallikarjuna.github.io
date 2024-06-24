// Rails.js
import React from 'react';
import useDocumentTitle from '../../hooks/useDocumentTitle';

const Rails = () => {
    const [document_title, setDocumentTitle] = useDocumentTitle("ROR:Rails");
    return (<>
        <h3>Rails:</h3>
            <div style={{background: '#a8a8a8ba',textAlign: 'justify', textJustify: 'inter-word'}} className="p-2">
            
            <p>
            Rails is a web application development framework written in the Ruby programming language. It is designed to make programming web applications easier by making assumptions about what every developer needs to get started.
            </p>
            <p>
            Ruby on Rails (simplified as Rails) is a server-side web application framework written in Ruby under the MIT License. Rails is a model–view–controller (MVC) framework, providing default structures for a database, a web service, and web pages.
            </p>
            <a href='https://guides.rubyonrails.org/getting_started.html'>Rails Guides</a>
            </div>
        </>);
}

export default Rails;
