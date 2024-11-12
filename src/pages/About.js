// Contact.js
import React from 'react';
import useDocumentTitle from '../hooks/useDocumentTitle';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Profile from '../images/profile.png';

const About = () => {
    const [document_title, setDocumentTitle] = useDocumentTitle("ROR:About");
    return (
        <section className='about'>
            <h3> About:</h3>
            
            <Container>
                <Row className="p-2">
                    
                    <Col xs lg="4">
                    <Row className="justify-content-center mb-2 p-2">
                    
                    <Image
                    className="profile justify-content-end"
                    alt="profile"
                    style={{
                        height: 250,
                        width: 250
                      }}                    
                    src={Profile}
                    thumbnail
                    roundedCircle
                    fluid
                    />
                    
                    </Row>
              </Col>
              <Col>
                    <div  style={{background: '#a8a8a8ba',textAlign: 'justify', textJustify: 'inter-word'}} className="p-2">
                    <p>
                    Hello, my name is Mekala Mallikarjuna, and I hold a B.Tech degree in Computer Science and Engineering with a specialization in Artificial Intelligence. I am passionate about technology and have developed a strong foundation in both front-end and back-end development.

In terms of technical skills, I am proficient in front-end technologies like HTML, CSS, and JavaScript, which I use to create interactive and user-friendly websites. On the back-end, I have experience working with programming languages such as C and Java, and I am well-versed in database management using SQL.

I am eager to continue learning and applying my skills in real-world projects, and I am always looking for opportunities to grow and contribute to innovative solutions in the tech industry.

Feel free to reach out to me at 6304716656 if you would like to discuss potential collaborations or opportunities.
        </p>
                    
                    <Col className="d-flex justify-content-center flex-wrap">
                  <div>
                    <a href="#contact">
                      <Button className="m-2" variant="outline-primary">
                        Let's talk
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="outline-success">
                        My Resume
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://github.com/mekalamallikarjuna"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="outline-dark">
                        GitHub
                      </Button>
                    </a>
                  </div>
                </Col>
                </div>
                    </Col>
                    
                </Row>
            </Container>
        </section>

        
    );
}

export default About;
