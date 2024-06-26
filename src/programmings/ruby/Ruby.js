// Contact.js
import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import useDocumentTitle from '../../hooks/useDocumentTitle';

const Ruby = () => {
    const [document_title, setDocumentTitle] = useDocumentTitle("ROR:Ruby");   
    return (<>
        <h3>Ruby:</h3>
        <div style={{background: '#a8a8a8ba',textAlign: 'justify', textJustify: 'inter-word'}} className="p-2">    
            <p>
                Ruby is an interpreted, high-level, general-purpose programming language. It was designed with an emphasis on programming productivity and simplicity. In Ruby, everything is an object, including primitive data types. It was developed in the mid-1990s by Yukihiro "Matz" Matsumoto in Japan.
            </p>
            <a target='_blank' href='https://www.ruby-lang.org/en/'> Ruby Website </a>
        </div>
        <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header><b>Ruby installation</b></Accordion.Header>
        <Accordion.Body>
        sudo apt-get install ruby-full
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header><b>Ruby Latest Version</b></Accordion.Header>
        <Accordion.Body>
            Ruby 3.3.3
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header><b>Simple programming in Ruby</b></Accordion.Header>
        <Accordion.Body>
          <a target='_blank' href="https://onlinegdb.com/gzlW8nbkG">Simple programming in ruby</a><br/>
          <a target='_blank' href="https://onlinegdb.com/MGDGjs1IU">defined? in ruby</a><br/>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header><b>Ruby Operators</b></Accordion.Header>
        <Accordion.Body>
          <a target='_blank' href="https://onlinegdb.com/e6OH8GMby">Assignment & Compound Assignment Operator</a><br/>
          <a target='_blank' href="https://onlinegdb.com/0Cp-3RzcC">Logical Operator</a><br/>
          <a target='_blank' href="https://onlinegdb.com/ulrjF9aes">Ternary Operator</a><br/>
          <a target='_blank' href="https://onlinegdb.com/uGAqfL0DB">Range Operator</a><br/>
          <a target='_blank' href="https://onlinegdb.com/Wutbd1LKy">Comparison Operator</a><br/>
          <a target='_blank' href="https://onlinegdb.com/vA1nhK1ya">Comparison operator</a><br/>
          <a target='_blank' href="https://onlinegdb.com/dOwZ_4Xr3g">Bitwise Operator</a><br/>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header><b>Ruby Variables</b>: 1. Local Variable, 2. Class Variable, 3. Instance Variable, 4. Global Variable</Accordion.Header>
        <Accordion.Body>
          <a target='_blank' href="">1. Local Variable</a><br/>
          <a target='_blank' href="https://onlinegdb.com/omIQPQcslT">2. Class Variable</a><br/>
          <a target='_blank' href="https://onlinegdb.com/p98l3i3NQ">3. Instance Variable</a><br/>
          <a target='_blank' href="https://onlinegdb.com/0pfKOM_fu">4. Global Variable</a><br/>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header><b>Ruby Data Types: </b> 1. Numbers, 2. Strings, 3. Symbols, 4. Hashes, 5. Arrays, 6. Booleans</Accordion.Header>
        <Accordion.Body>
          <a target='_blank' href="https://onlinegdb.com/XfAJxAaou">String Example-1</a><br/>
          <a target='_blank' href="https://onlinegdb.com/wV9r-8Yrk">String Example-2</a><br/>
          <br/>
          <a target='_blank' href="https://onlinegdb.com/Ny9XqJewM">Array Example</a><br/>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </>);
}

export default Ruby;
