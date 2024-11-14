import React, { useState } from 'react';

import {
  Container, Row, Col,
  Button, Nav, Navbar, Dropdown, NavDropdown,Offcanvas
} from 'react-bootstrap';

import { NavLink } from 'react-router-dom';
import './styles/submenu.css';
function NavBar({ isAuthenticated }) {
  const [show, setShow] = useState(false);
  const [showOffcanvas,setShowOffcanvas] = useState(false);
  // const user = sessionStorage.getItem("user") ? sessionStorage.getItem("user") : null;
  // const isLogined = sessionStorage.getItem("isLogined") ? sessionStorage.getItem("isLogined") : false;
  const toggleOffcanvas = () => {
    if(showOffcanvas ){
      setShowOffcanvas(false);
    }else{
      setShowOffcanvas(true);
    }
  };
  const toggleShow = () => {
    if(show ){
      setShow(false);
    }else{
      setShow(true);
    }
  };
  return (
    <>
      {['md'].map((expand) => (
        <Navbar bg="dark" data-bs-theme="dark" sticky="top" key={expand} expand={expand} className="bg-body-tertiary text-center">
          <Container fluid>
            <Navbar.Brand>
              <Nav.Link as={NavLink} to="/">Mekala Mallikarjuna</Nav.Link>
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls={`offcanvasNavbar-expand-${expand}`}
              onClick={toggleOffcanvas}
            />
            <Navbar.Offcanvas
              bg="dark"
              data-bs-theme="dark"
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              show={showOffcanvas} scroll={showOffcanvas} backdrop={showOffcanvas}
            >
              <Offcanvas.Header>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}
                  onClick={ () => { setShow(false); setShowOffcanvas(false); } }
                >
                  A.Anil kumar
                </Offcanvas.Title>
              </Offcanvas.Header>

              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link title="Home" onClick={ () => { setShow(false); setShowOffcanvas(false); } } as={NavLink} to="/"><i className="d-block fa fa-home fa-2x" aria-hidden="true"></i>Home</Nav.Link>
                  <Nav.Link as={NavLink} onClick={ () => { setShow(false); setShowOffcanvas(false); } } to="/about"><i className="d-block fa fa-pencil fa-2x" aria-hidden="true"></i>About</Nav.Link>
                  <NavDropdown
                    title={<><i className="d-block fa fa-code faa-code fa-2x" aria-hidden="true"></i>Technical Skills</>}
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                    className="mydropdownmenu"
                    onMouseEnter={() => setShow(true) }
                    onMouseLeave={ () => setShow(false) }
                    onClick={ () => toggleShow() }
                    show={show}
                  >
                  <Row>
                  <Col xs="12" md="6" className="mymenu text-left">
                  <h3>Back-End</h3>
                  <NavDropdown.Divider />
                    <NavDropdown.Item onClick={ () => { setShow(false); setShowOffcanvas(false); } } as={NavLink} to="/ruby">Ruby</NavDropdown.Item>
                    <NavDropdown.Item onClick={ () => { setShow(false); setShowOffcanvas(false); } } as={NavLink} to="/rails">Rails</NavDropdown.Item>
                    <NavDropdown.Item onClick={ () => { setShow(false); setShowOffcanvas(false); } } as={NavLink} to="/python">Python</NavDropdown.Item>
                    <NavDropdown.Item onClick={ () => { setShow(false); setShowOffcanvas(false); } } as={NavLink} to="/AI-ML">AI/ML</NavDropdown.Item>
                    <NavDropdown.Item onClick={ () => { setShow(false); setShowOffcanvas(false); } } as={NavLink} to="/java">Java</NavDropdown.Item>
                    <NavDropdown.Item onClick={ () => { setShow(false); setShowOffcanvas(false); } } as={NavLink} to="/php">PHP</NavDropdown.Item>
                    <NavDropdown.Item onClick={ () => { setShow(false); setShowOffcanvas(false); } } as={NavLink} to="/csharp">C#</NavDropdown.Item>
                    <NavDropdown.Item onClick={ () => { setShow(false); setShowOffcanvas(false); } } as={NavLink} to="/c">C</NavDropdown.Item>
                    <h3>Databases</h3>
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={ () => { setShow(false); setShowOffcanvas(false); } } as={NavLink} to="/mysql">MySQL</NavDropdown.Item>
                    <NavDropdown.Item onClick={ () => { setShow(false); setShowOffcanvas(false); } } as={NavLink} to="/postgresql">PostgreSQL</NavDropdown.Item>
                    <NavDropdown.Item onClick={ () => { setShow(false); setShowOffcanvas(false); } } as={NavLink} to="/oracle">Oracle</NavDropdown.Item>
                    <NavDropdown.Item onClick={ () => { setShow(false); setShowOffcanvas(false); } } as={NavLink} to="/MongoDB">MongoDB</NavDropdown.Item>
                    <h3>DevOps</h3>
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={ () => { setShow(false); setShowOffcanvas(false); } } as={NavLink} to="/git">GitLab, GitHub, Bitbucket</NavDropdown.Item>
                    <NavDropdown.Item onClick={ () => { setShow(false); setShowOffcanvas(false); } } as={NavLink} to="/kubernetes">Kubernetes/Helm Charts</NavDropdown.Item>
                    <NavDropdown.Item onClick={ () => { setShow(false); setShowOffcanvas(false); } } as={NavLink} to="/cicd">CI/CD</NavDropdown.Item>
                    <NavDropdown.Item onClick={ () => { setShow(false); setShowOffcanvas(false); } } as={NavLink} to="/docker">Docker</NavDropdown.Item>
                    <NavDropdown.Item onClick={ () => { setShow(false); setShowOffcanvas(false); } } as={NavLink} to="/aws">AWS</NavDropdown.Item>
                    </Col>
                    <Col xs="12" md="6" className="mymenu text-left">
                    <h3>Front-End</h3>
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={ () => { setShow(false); setShowOffcanvas(false); } } as={NavLink} to="/react">React JS</NavDropdown.Item>
                    <NavDropdown.Item onClick={ () => { setShow(false); setShowOffcanvas(false); } } as={NavLink} to="/angular">Angular JS</NavDropdown.Item>
                    <NavDropdown.Item onClick={ () => { setShow(false); setShowOffcanvas(false); } } as={NavLink} to="/javascript">JavaScript</NavDropdown.Item>
                    <NavDropdown.Item onClick={ () => { setShow(false); setShowOffcanvas(false); } } as={NavLink} to="/typescript">TypeScript</NavDropdown.Item>
                    <NavDropdown.Item onClick={ () => { setShow(false); setShowOffcanvas(false); } } as={NavLink} to="/jquery">JQuery</NavDropdown.Item>
                    <NavDropdown.Item onClick={ () => { setShow(false); setShowOffcanvas(false); } } as={NavLink} to="/bootstrap">Bootstrap</NavDropdown.Item>
                    <NavDropdown.Item onClick={ () => { setShow(false); setShowOffcanvas(false); } } as={NavLink} to="/axios">Axios & Redux</NavDropdown.Item>
                    <NavDropdown.Item onClick={ () => { setShow(false); setShowOffcanvas(false); } } as={NavLink} to="/nodejs">NodeJS</NavDropdown.Item>
                    <NavDropdown.Item onClick={ () => { setShow(false); setShowOffcanvas(false); } } as={NavLink} to="/html">HTML</NavDropdown.Item>
                    <NavDropdown.Item onClick={ () => { setShow(false); setShowOffcanvas(false); } } as={NavLink} to="/css">CSS</NavDropdown.Item>
                    <NavDropdown.Item onClick={ () => { setShow(false); setShowOffcanvas(false); } } as={NavLink} to="/images_fonts">Images/Fonts</NavDropdown.Item>
                    <NavDropdown.Item onClick={ () => { setShow(false); setShowOffcanvas(false); } } as={NavLink} to="/json_xml">JSON/XML</NavDropdown.Item>
                    <h3>Testing Tools</h3>
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={ () => { setShow(false); setShowOffcanvas(false); } } as={NavLink} to="/manual_testing">Manual</NavDropdown.Item>
                    <NavDropdown.Item onClick={ () => { setShow(false); setShowOffcanvas(false); } } as={NavLink} to="/rspec">RSpec</NavDropdown.Item>
                    <NavDropdown.Item onClick={ () => { setShow(false); setShowOffcanvas(false); } } as={NavLink} to="/cucumber">Cucumber-BDD</NavDropdown.Item>
                    <NavDropdown.Item onClick={ () => { setShow(false); setShowOffcanvas(false); } } as={NavLink} to="/selenium_automation">Selenium</NavDropdown.Item>
                    <NavDropdown.Item onClick={ () => { setShow(false); setShowOffcanvas(false); } } as={NavLink} to="/jest">Jest</NavDropdown.Item>
                    <NavDropdown.Item onClick={ () => { setShow(false); setShowOffcanvas(false); } } as={NavLink} to="/Jasmine">Jasmine</NavDropdown.Item>
                    <NavDropdown.Item onClick={ () => { setShow(false); setShowOffcanvas(false); } } as={NavLink} to="/Maven_TestNG">Maven & TestNG</NavDropdown.Item>
                    </Col>
                    </Row>
                  </NavDropdown>
                  <Nav.Link as={NavLink} onClick={ () => { setShow(false); setShowOffcanvas(false); } } to="/experience"><i className="d-block fa fa-briefcase fa-2x" aria-hidden="true"></i>Experience</Nav.Link>
                  <Nav.Link as={NavLink} onClick={ () => { setShow(false); setShowOffcanvas(false); } } to="/projects"><i className="d-block fa fa-tasks fa-2x" aria-hidden="true"></i>Projects</Nav.Link>
                  <Nav.Link as={NavLink} onClick={ () => { setShow(false); setShowOffcanvas(false); } } to="/resume"><i className="d-block fa fa-file-pdf-o fa-2x" aria-hidden="true"></i>Resume</Nav.Link>
                  <Nav.Link as={NavLink} onClick={ () => { setShow(false); setShowOffcanvas(false); } } to="/contact"><i className="d-block fa fa-address-card-o fa-2x" aria-hidden="true"></i>Contact</Nav.Link>
                {(isAuthenticated) ?
                  <Nav.Link as={NavLink} onClick={ () => { setShow(false); setShowOffcanvas(false); } } to="/logout"><i className="d-block fa fas fa-sign-out fa-1m animated faa-pulse" aria-hidden="true"></i>Logout</Nav.Link>
                    :
                  <>
                    <Nav.Link as={NavLink} onClick={ () => { setShow(false); setShowOffcanvas(false); } } to="/login"><Button variant="primary" size="md"><i className="d-block fa fa-sign-in fa-fade fa-1m animated" aria-hidden="true"></i>Login</Button></Nav.Link>
                    <Nav.Link as={NavLink} onClick={ () => { setShow(false); setShowOffcanvas(false); } } to="/register"><Button variant="warning" size="md"><i className="d-block fa fa-user-plus fa-1m animated faa-tada" aria-hidden="true"></i>Register</Button></Nav.Link>
                  </>
                }
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default NavBar;
