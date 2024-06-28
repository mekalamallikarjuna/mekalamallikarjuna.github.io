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
    <Accordion eventKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header><b>1. Ruby installation</b></Accordion.Header>
        <Accordion.Body>
        sudo apt-get install ruby-full
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header><b>2. Ruby Version</b></Accordion.Header>
        <Accordion.Body>
            <p>ruby -v</p>
            <p>ruby --version</p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header><b>3. Simple programming in Ruby</b></Accordion.Header>
        <Accordion.Body>
          <div>
          <p><b>Ruby Comments:</b>Comments are lines of annotation within Ruby code that are ignored at runtime. A single line comment starts with # character and they extend from # to the end of the line as follows −</p>
          <p> Ex:- # This is a single line comment.</p>
          <p><b>Ruby Multiline Comments:</b>You can comment multiple lines using =begin and =end syntax as follows −</p>
          <pre>
            <p>
            <div>=begin</div>
              This is a multiline comment and con spwan as many lines as you
              like. But =begin and =end should come in the first line only.
              <div>=end</div>
            </p>
          </pre>
          <a target='_blank' href="https://onlinegdb.com/gzlW8nbkG">Simple programming in ruby</a><br/>
          <a target='_blank' href="https://onlinegdb.com/MGDGjs1IU">defined? in ruby</a><br/>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header><b>4. Ruby Operators: Increment and decrement operator is not defined.</b></Accordion.Header>
        <Accordion.Body>
          <a target='_blank' href="https://onlinegdb.com/e6OH8GMby">1.Assignment Operator</a>: +, -, *, **, /, %<br/>
          <a target='_blank' href="https://onlinegdb.com/e6OH8GMby">2.Compound Assignment Operator</a>: +=, -=, *=, **=, /=, %=<br/>
          <a target='_blank' href="https://onlinegdb.com/0Cp-3RzcC">3.Logical Operator</a>: &&, and, ||, or, !, not <br/>
          <a target='_blank' href="https://onlinegdb.com/Wutbd1LKy">Comparison or Relational Operator example-1</a>,
          <a target='_blank' href="https://onlinegdb.com/vA1nhK1ya">Comparison operator example-2</a>: ==, !=, &gt;, &gt;=, &lt;, &lt;=, &lt;=&gt;, ===, .eql?, equal?<br/>
          <a target='_blank' href="https://onlinegdb.com/ulrjF9aes">Ternary Operator</a>: ?:<br/>
          <a target='_blank' href="https://onlinegdb.com/dOwZ_4Xr3g">Bitwise Operator</a>: &, |, ^, ~, &gt;&gt;, &lt;&lt;<br/>
          <a target='_blank' href="https://onlinegdb.com/uGAqfL0DB">Range Operator</a>The (..) creates a range including the last term and (...) creates a range excluding the last term.<br/>
          <a target='_blank' href="https://onlinegdb.com/MGDGjs1IU">Special Operator</a>: defined?<br/>

        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header><b>5. Ruby Variables</b>
There are four types of variables in Ruby:
          <ol>
            <li>Local Variable(SNAME)</li>
            <li>Class Variable(@@sname</li>
            <li>Instance Variable(@sname)</li>
            <li>Global Variable($sname)</li>
          </ol>
        </Accordion.Header>
        <Accordion.Body>
          <p>Ruby variables are locations which hold data to be used in the programs. Each variable has a different name. These variable names are based on some naming conventions. Unlike other programming languages, there is no need to declare a variable in Ruby. A prefix is needed to indicate it.</p>
          <a target='_blank' href="">1. Local Variable</a>:A local variable name starts with a lowercase letter or underscore (_). It is only accessible or have its scope within the block of its initialization.<br/>
          <a target='_blank' href="https://onlinegdb.com/omIQPQcslT">2. Class Variable</a>:A class variable name starts with @@ sign. They need to be initialized before use. A class variable belongs to the whole class and can be accessible from anywhere inside the class. If the value will be changed at one instance, it will be changed at every instance. <br/>
          <a target='_blank' href="https://onlinegdb.com/p98l3i3NQ">3. Instance Variable</a>:An instance variable name starts with a @ sign. It belongs to one instance of the class and can be accessed from any instance of the class within a method. They only have limited access to a particular instance of a class.<br/>
          <a target='_blank' href="https://onlinegdb.com/0pfKOM_fu">4. Global Variable</a>:A global variable name starts with a $ sign. Its scope is globally, means it can be accessed from any where in a program.<br/>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header><b>6. Ruby Data Types: </b>
          <ol>
            <li><b>Numbers:</b> Fixnum, Bignum, Float, Complex, Rational, BigDecimal</li>
            <li><b>Strings:</b> Ex:- "Ruby", 'Ruby'</li>
            <li><b>Symbols:</b> symbols are immutable, reusable constant names, A symbol is preceded by a colon (:). Ex :abcd</li>
            <li><b>Hashes:</b> Ex:- &#123;"apple" => "10", "banana" => "20", "cherry" => "30"&#125;</li>
            <li><b>Arrays:</b> Ex:- ["Apple","Banana","Cherry"]</li>
            <li><b>Booleans</b> Ex:- true, false</li>
          </ol>
        </Accordion.Header>
        <Accordion.Body>
          <a target='_blank' href="https://onlinegdb.com/CzR9XLfAx">1.Numbers Example</a><br/>
          <a target='_blank' href="https://onlinegdb.com/XfAJxAaou">2.String Example-1</a>,
          <a target='_blank' href="https://onlinegdb.com/wV9r-8Yrk">Example-2</a><br/>
          <a target='_blank' href="https://onlinegdb.com/RJ341sBCt">3.Symbols Example</a><br/>
          <a target='_blank' href="https://onlinegdb.com/Bmxf9NgVh">4.Hash Example</a><br/>
          <a target='_blank' href="https://onlinegdb.com/gMJkpDWUW">5.Array Example</a><br/>
          <a target='_blank' href="https://onlinegdb.com/XIMjfQ27B">6.Booleans Example</a><br/>
        </Accordion.Body>
      </Accordion.Item>
      
    </Accordion>
    </>);
}

export default Ruby;
