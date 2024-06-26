// Projects.js
import React from 'react';
import useDocumentTitle from '../hooks/useDocumentTitle';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

const Projects = () => {
    const [document_title, setDocumentTitle] = useDocumentTitle("ROR:Projects");
    return (
        <section className='Projects'>
            <h3> Projects:</h3>
            
            <Container>
                <Row className="p-2">
                    
                    <Col xs lg="4">
                    <Row className="justify-content-center mb-2 p-2">
                    
                    <Image
                    className="telemedmd justify-content-end"
                    alt="telemedmd"
                    style={{
                        height: 250,
                        width: 250
                      }}                    
                    src='telemedmd.jpg'
                    thumbnail
                    roundedCircle
                    fluid
                    />
                    
                    </Row>
              </Col>
              <Col>
                    <div  style={{background: '#a8a8a8ba',textAlign: 'justify', textJustify: 'inter-word'}} className="p-2">
                    <p>
                    <b>Project#: TelemedMD (Feb 2020 - Present )<br/></b>
                      Telemed MD is a nationwide virtual platform providing medical care through virtual  clinics an online Telehealth support. Every Patients can connect with doctors via online. Patients can have video sessions with doctors and can use their insurance to cover the expenses of doctor visit and diagnosis fee. The diagnosis report will be sent to the patient both by Images and as PDF.
                      <br/><b>Environment:</b> Ruby, Ruby On Rails, Sidekiq, Whenever, React
                      Js, JavaScript, Bootstrap, HTML & CSS, Carrierwave, PDFKit,
                      PostgreSQL, RSpec, Cucumber & Selenium, Docker,
                      Kubernetes,Helm.
                      <br/><b>Roles & Responsibilities:</b>
                      <ul>
                        <li>Developed user-friendly web components using React Js,
                        JavaScript, Bootstrap, HTML & CSS, Ruby On Rails, Sidekiq,
                        Whenever, Carrierwave, PDFKit, PostgreSQL, RSpec, Cucumber
                        & Selenium, Docker, Kubernetes, Helm for Telemed MD, a
                        nationwide virtual platform offering medical care through
                        virtual clinics.</li>
                        <li>Implemented responsive and efficient server-side logic and
                        APIs to enhance the user experience.</li>
                        <li>Identified and fixed bugs by rigorous testing, improving
                        front-end and back-end performance.</li>
                        <li>Contributed actively to agile development processes and
                        sprint planning for efficient project delivery</li>
                        <li>Engaged in writing comprehensive unit tests and
                        participating in valuable code reviews to ensure high code
                        quality and project success.</li>
                      </ul>
                    </p>
                    </div>
                   </Col> 
                </Row>
                <hr/>
                <Row className="p-2">
                    
                    <Col xs lg="4">
                    <Row className="justify-content-center mb-2 p-2">
                    
                    <Image
                    className="vacation justify-content-end"
                    alt="vacation"
                    style={{
                        height: 250,
                        width: 250
                      }}                    
                    src='vacation.png'
                    thumbnail
                    roundedCircle
                    fluid
                    />
                    
                    </Row>
              </Col>
              <Col>
                    <div  style={{background: '#a8a8a8ba',textAlign: 'justify', textJustify: 'inter-word'}} className="p-2">
                    <p>
                    <b>Project#: Vacation (Feb 2019 to Feb 2020)<br/></b>
                    Vacation is a premier travel planning service that combines the
                    valuable services of travel specialists with inspirational content
                    to help you customize a travel experience that truly exceeds
                    your expectations.
                    <br/><b>Environment:</b> : Ruby, Ruby On Rails, Sidekiq, Whenever,
                      Carrierwave, PDFKit, React Js, JavaScript, Bootstrap, HTML &
                      CSS, PostgreSQL, RSpec, Cucumber & Selenium, Docker,
                      Kubernetes,Helm.
                      <br/><b>Roles & Responsibilities:</b>
                      <ul>
                      <li>Utilized React Js, JavaScript, Bootstrap, HTML & CSS, Ruby
                        On Rails, Sidekiq, Whenever, Carrierwave, PDFKit, PostgreSQL,
                        RSpec, Cucumber & Selenium, Docker, Kubernetes, Helm for
                        Vacation, a premier travel planning service, to write clean,
                        maintainable, efficient code logic.</li>
                        <li>Crafted user-friendly web components and RESTful APIs
                        using React Js, ensuring seamless integration of front-end
                        and back-end components for an enhanced user experience.</li>
                        <li>Implementation of new features on both front and back-end sides</li>
                        <li>Integration of side libraries and APIs services</li>
                        <li>Writing unit testing and participate in code reviews</li>
                        <li>Support, optimization, and refactoring for legacy code</li>
                      </ul>
                    </p>
                    </div>
              </Col>
              </Row>
              <hr/>
              <Row className="p-2">
                    
                    <Col xs lg="4">
                    <Row className="justify-content-center mb-2 p-2">
                    
                        <Image
                        className="mysingers justify-content-end"
                        alt="MySingers"
                        style={{
                            height: 250,
                            width: 250
                        }}                    
                        src='MySingers.png'
                        roundedCircle
                        thumbnail
                        fluid
                        />
                    </Row>
              </Col>
              <Col>
                  <div  style={{background: '#a8a8a8ba',textAlign: 'justify', textJustify: 'inter-word'}} className="p-2">
                    <p>
                    <b>Project#: MySinger Portal(Jan, 2017 - Jan, 2019)<br/></b>
                    <b>MySinger:</b>This is the web application for singers. In this website have a admin and co-cordinator. A
event created by the admin and he is assigned to co-ordinator. A Signers have participates
in the events who created by the admin. A user and Singer have likes the song in online.
Based on the event ending date needs to announce the winner automatically. Each event
have a Co-ordinator for monitoring a event from event starting date to event ending date.
Finally Singer get the prize from the online.
                      <br/><b>Environment:</b> Java, Servlets, JSP, JDBC,HTML,CSS,Bootstrap, Javascript,JQuery,Tomcat Server,Windows,Linux
                      <br/><b>Roles & Responsibilities:</b>
                      <ul>
                        <li>Created the documents and code for every module</li>
                        <li>Preparing database with MySQL and UseCase, EER Diagrams</li>
                        <li>Implemented data base relationships with Java code logics</li>
                        <li>fixed the database errors and server code errors.</li>
                      </ul>
                    </p>
                    </div>
                   </Col> 
                </Row>
                <hr/>
                <Row className="p-2">
                    
                    <Col xs lg="4">
                    <Row className="justify-content-center mb-2 p-2">
                    
                        <Image
                        className="BabyFashion justify-content-end"
                        alt="BabyFashion"
                        style={{
                            height: 250,
                            width: 250
                        }}                    
                        src='BabyFashion.gif'
                        roundedCircle
                        thumbnail
                        fluid
                        />
                    </Row>
              </Col>
              <Col>
                  <div  style={{background: '#a8a8a8ba',textAlign: 'justify', textJustify: 'inter-word'}} className="p-2">
                    <p>
                    <b>Project#: BabyFashion Portal(Jan, 2017 - Jan, 2019)<br/></b>
                    <b>BabyFashion:</b>The baby fashion is the e-commerce website (B2C). In this website provides the good price with good quality items for only baby. In the fashion world, every person needs latest items day to day. So we are focusing on the trend of child hood age wearing dress.
                      <br/><b>Environment:</b> PHP, MySQL, HTML, CSS, Bootstrap, Javascript, JQuery
                      <br/><b>Roles & Responsibilities:</b>
                      <ul>
                        <li>Created the documents and code for every module</li>
                        <li>Preparing database with MySQL and EER Diagrams</li>
                        <li>Implemented data base relationships with PHP code logics</li>
                        <li>Fixed the database errors and server code errors.</li>
                      </ul>
                    </p>
                    </div>
                   </Col> 
                </Row>
                <hr/>
                <Row className="p-2">
                    
                    <Col xs lg="4">
                    <Row className="justify-content-center mb-2 p-2">
                    
                        <Image
                        className="MyClassifieds justify-content-end"
                        alt="MyClassifieds"
                        style={{
                            height: 250,
                            width: 250
                        }}                    
                        src='MyClassifieds.png'
                        roundedCircle
                        thumbnail
                        fluid
                        />
                    </Row>
              </Col>
              <Col>
                  <div  style={{background: '#a8a8a8ba',textAlign: 'justify', textJustify: 'inter-word'}} className="p-2">
                    <p>
                    <b>Project#: MyClassifieds Portal(Jan, 2017 - Jan, 2019)<br/></b>
                    <b>MyClassifieds:</b>This website(C2C) for online ads.Find the latest classified ads for flats, jobs, cars, motorbikes, furniture, tools, personals and more for sale in India. Find buyers and sellers that suit.
                      <br/><b>Environment:</b> PHP, MySQL, HTML, CSS, Bootstrap, Javascript, JQuery
                      <br/><b>Roles & Responsibilities:</b>
                      <ul>
                        <li>Created the documents and code for every module</li>
                        <li>Preparing database with MySQL and EER Diagrams</li>
                        <li>Implemented data base relationships with PHP code logics</li>
                        <li>Fixed the database errors and server code errors.</li>
                      </ul>
                    </p>
                    </div>
                   </Col> 
                </Row>
                <hr/>
              <Row className="p-2">
                    
                    <Col xs lg="4">
                    <Row className="justify-content-center mb-2 p-2">
                    
                        <Image
                        className="Jaguar justify-content-end"
                        alt="Jaguar"
                        style={{
                            height: 250,
                            width: 250
                        }}                    
                        src='Jaguar.jpg'
                        roundedCircle
                        thumbnail
                        fluid
                        />
                    </Row>
              </Col>
              <Col>
                    <div  style={{background: '#a8a8a8ba',textAlign: 'justify', textJustify: 'inter-word'}} className="p-2">
                    <p>
                    <b>Project#: Jaguar Portal(Jul, 2015 - Dec, 2017 )<br/></b>
                    <b>Jaguar:</b>Jaguar is the sports car and luxury vehicle brand of Jaguar Land Rover, a British multinational car manufacturer with its headquarters in Whitley, Coventry, England.
                      <br/><b>Environment:</b> Java, Manual Testing, Cucumber BDD, Selenium Testing, Maven, TestNG
                      <br/><b>Roles & Responsibilities:</b>
                      <ul>
                        <li>Involved in the Selenium WebDriver scripts by using Java.</li>
                        <li>Preparing Test cases, reviewing the Test cases and executing those Test cases.</li>
                        <li>Created and executed Staging, Master, Production build jobs in Bamboo Server.</li>
                        <li>Creating defects while doing verification on application and following developers until they closure.</li>
                        <li>Executing Test Cases and Generating Test Summary Reports.</li>
                        <li>Attending weekly meeting with development team to discuss the issues/concerns and any updates of the modules.</li>
                        <li>Checked the Build log file to identifying the bugs and posting in JIRA.</li>
                        <li>Executed test cases and the tested local machine, Sauce Labs, Selenium Headless Grid.</li>
                      </ul>
                    </p>
                    </div>
                   </Col> 
                </Row>
                <hr/>
                <Row className="p-2">
                    
                    <Col xs lg="4">
                    <Row className="justify-content-center mb-2 p-2">
                    
                         <Image
                        className="Landrover justify-content-end"
                        alt="Landrover"
                        style={{
                            height: 250,
                            width: 250
                        }}                    
                        src='Land-Rover.png'
                        roundedCircle
                        thumbnail
                        fluid
                        />
                    </Row>
              </Col>
              <Col>
                    <div  style={{background: '#a8a8a8ba',textAlign: 'justify', textJustify: 'inter-word'}} className="p-2">
                    <p>
                    <b>Project#: Landrover Portal(Jul, 2015 - Dec, 2017 )<br/></b>
                    <b>Landrover:</b>Land Rover is a British brand of predominantly four-wheel drive, off-road capable vehicles, owned by multinational car manufacturer Jaguar Land Rover, since 2008 a subsidiary of India's Tata Motors. JLR builds Land Rovers in Brazil, China, India, Slovakia, and the United Kingdom
                      <br/><b>Environment:</b> Java, Manual Testing, Cucumber BDD, Selenium Testing, Maven, TestNG
                      <br/><b>Roles & Responsibilities:</b>
                      <ul>
                        <li>Involved in the Selenium WebDriver scripts by using Java.</li>
                        <li>Preparing Test cases, reviewing the Test cases and executing those Test cases.</li>
                        <li>Created and executed Staging, Master, Production build jobs in Bamboo Server.</li>
                        <li>Creating defects while doing verification on application and following developers until they closure.</li>
                        <li>Executing Test Cases and Generating Test Summary Reports.</li>
                        <li>Attending weekly meeting with development team to discuss the issues/concerns and any updates of the modules.</li>
                        <li>Checked the Build log file to identifying the bugs and posting in JIRA.</li>
                        <li>Executed test cases and the tested local machine, Sauce Labs, Selenium Headless Grid.</li>
                      </ul>
                    </p>
                    </div>
                   </Col> 
                </Row>
                <hr/>
              <Row className="p-2">
                    
                    <Col xs lg="4">
                        <Row className="justify-content-center mb-2 p-2">
                        
                            <Image
                            className="A_la_Calc justify-content-end"
                            alt="A_la_Calc"
                            style={{
                                height: 250,
                                width: 250
                            }}                    
                            src='A_la_Calc.png'
                            roundedCircle
                            thumbnail
                            fluid
                            />
                        </Row>
                  </Col>
                  <Col>
                        <div  style={{background: '#a8a8a8ba',textAlign: 'justify', textJustify: 'inter-word'}} className="p-2">
                        <p>
                        <b>Project#: A la Calc portal(Jun, 2014 - Jun, 2015 )<br/></b>
                        <b>A la Calc:</b>
                        Use a la Calc to Easily Create Nutrition Panels That Assure Compliance with US, UK & EU. Use a la Calc to Easily Calculate Costs, Nutrition, Allergens & Labels for Your Recipes. Toggle Panels: US/UK/EU. Identify Allergens. Calculate Nutri-Score. Nutrition Panel Software<br/>
                        <br/><b>Environment:</b> Ruby On Rails, Restful API, React JS, Bootstrap, MySQL, AWS, Bamboo, JIRA
                          <br/><b>Roles & Responsibilities:</b>
                          <ul>
                            <li>Creating new components with Ruby On Rails in back-end & front-end with React JS</li>
                            <li>Writing test cases, Creating EC2 Instance from AWS for Selenium Grid</li>
                            <li>Implemented selenium grid for cross browser testing with Sauce Labs</li>
                            <li>Involved for designing, development and production environments with CEO and BA in Agile process</li>
                          </ul>
                        </p>
                        </div>
                       </Col> 
                    </Row>
                    <hr/>
                    <Row className="p-2">
                    
                    <Col xs lg="4">
                    <Row className="justify-content-center mb-2 p-2">
                    
                        <Image
                        className="PDS justify-content-end"
                        alt="PDS"
                        style={{
                            height: 250,
                            width: 250
                        }}                    
                        src='Premiere_Digital_Services.jpg'
                        roundedCircle
                        thumbnail
                        fluid
                        />
                    </Row>
              </Col>
              <Col>
                    <div  style={{background: '#a8a8a8ba',textAlign: 'justify', textJustify: 'inter-word'}} className="p-2">
                    <p>
                    <b>Project#: PDS Portal(Jun, 2014 - Jun, 2015 )<br/></b>
                    <b>PDS:</b>

                    <p>
                    Premiere Digital Services is one of the largest independent digital media post-
                    production houses in the world. We offer multi-platform, multi-media digital content
                    processing, storage and distribution for studios and independent content owners. Premiere
                    also provides aggregation to digital platforms giving independent content owners a path
                    to digital distribution.
                    </p>
                    <p>
                    PDS has works with several hundred content providers and distribution
                    platforms/broadcasters around the world. Premiere is capable of meeting your needs.
                    PDS performs a wide array of services to prepare content for distribution to all meadia
                    types from digital platforms (e.g. iTunes, GooglePlay, Hulu, Netflix ) to traditional
                    broadcast.
                    </p>
                      <b>Environment:</b> Java, Selenium WebDriver, Grid and TestNG, Bamboo, JIRA, Confluence
                      <br/><b>Roles & Responsibilities:</b>
                      <ul>
                        <li>Writing test cases, Creating EC2 Instance from AWS for Selenium Grid</li>
                        <li>Implemented selenium grid for cross browser testing with Sauce Labs</li>
                        <li>Involved in the Selenium WebDriver scripts by using Java.</li>
                        <li>Created and executed Staging, Master, Production build jobs in Bamboo Server.</li>
                        <li>Developed the Data Driven Framework based on the Project Requirements.</li>
                        <li>Analyzed the requirements provided by the client.</li>
                        <li>Restoring the Data Base in Remote Server and checking Data Base tables, columns etc.</li>
                        <li>Executed test cases and the tested local machine, Sauce Labs, Selenium Headless Grid.</li>
                        <li>Checked the Build log file to identifying the bugs and posting in JIRA.</li>
                      </ul>
                    </p>
                    </div>
                   </Col> 
                </Row>
            </Container>
        </section>

        
    );
}

export default Projects;
