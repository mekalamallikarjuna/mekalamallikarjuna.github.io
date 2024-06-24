// Experience.js
import React from 'react';
import useDocumentTitle from '../hooks/useDocumentTitle';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Profile from '../images/profile.png';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


const WorkIcon = () => <><i style={{marginLeft: 8, marginTop: 8}} className="fa fa-briefcase fa-2x" aria-hidden="true"></i></>;
const SchoolIcon = () => <><i style={{marginLeft: 8, marginTop: 8}} className="fa fa-graduation-cap fa-2x" aria-hidden="true"></i></>;
const StarIcon = () => <><i style={{marginLeft: 8, marginTop: 8}} className="fa fa-home fa-2x" aria-hidden="true"></i></>;

const Experience = () => {
    const [document_title, setDocumentTitle] = useDocumentTitle("ROR:About");
    return (
        <section className='experience'>
            <h3> Experience:</h3>
            <Container>
              <Row className="p-2" >
              <Col>
                <div  className="p-2">
                <VerticalTimeline>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="Feb 2019 - present"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<WorkIcon />}
                  >
                    <h3 className="vertical-timeline-element-title">Ruby On Rails Full Stack Developer</h3>
                    <h4 className="vertical-timeline-element-subtitle">(Perfexion Information Technologies Pvt. Ltd.), Hyderabad</h4>
                    <p>
                    Ruby, Ruby On Rails, Sidekiq, Whenever, Carrierwave, PDFKit, React JS, JavaScript, Bootstrap, HTML & CSS,
                    PostgreSQL, RSpec, Cucumber & Selenium, Docker, Kubernetes, Helm Charts.
                    </p>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Jan 2017 - Jan 2019"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<WorkIcon />}
                  >
                    <h3 className="vertical-timeline-element-title">Founder, MD, Software Trainer</h3>
                    <h4 className="vertical-timeline-element-subtitle">(MOM Computer Institutions)</h4>
                    <p>
                    Ruby, Ruby On Rails, Sidekiq, Whenever, Carrierwave, PDFKit, React JS, JavaScript, Bootstrap, HTML & CSS,
                    PostgreSQL, MySQL, RSpec, Cucumber & Selenium, Docker, Kubernetes, Helm Charts.
                    </p>
                    <p>
                      Java, PHP, Python, Data Science, AI & ML, UML Diagrams.
                    </p>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Jul 2015 - Dec 2017"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<WorkIcon />}
                  >
                    <h3 className="vertical-timeline-element-title">Full Stack Developer</h3>
                    <h4 className="vertical-timeline-element-subtitle">(Freelancer), Remote</h4>
                    <p>
                    Ruby, Ruby On Rails, Sidekiq, Whenever, Carrierwave, PDFKit, React JS, JavaScript, Bootstrap, HTML & CSS,
                    PostgreSQL, MySQL, RSpec, Cucumber & Selenium, Docker, Kubernetes, Helm Charts.
                    </p>
                    <p>
                      Java, PHP, Python, Data Science, AI & ML, UML Diagrams.
                    </p>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Jun 2014 - Jun 2015"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<WorkIcon />}
                  >
                    <h3 className="vertical-timeline-element-title">Ruby On Rails Developer</h3>
                    <h4 className="vertical-timeline-element-subtitle">(Navaratan Technologies Pvt Ltd), Hyderabad</h4>
                    <p>
                    <p>
                    Ruby, Ruby On Rails, Sidekiq, Whenever, Carrierwave, PDFKit, React JS, JavaScript, Bootstrap, HTML & CSS,
                    MySQL, RSpec, Cucumber & Selenium, Docker, Kubernetes, Helm Charts.
                    </p>
                    </p>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="Aug 2009 -Jun 2012"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    icon={<SchoolIcon />}
                  >
                    <h3 className="vertical-timeline-element-title">Master of Computer Application</h3>
                    <h4 className="vertical-timeline-element-subtitle">(QIS Institute of Technology under JNTUK University), Ongole</h4>
                    <p>
                    I got 72%
                    </p>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="Jun 2006 - March 2009"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    icon={<SchoolIcon />}
                  >
                    <h3 className="vertical-timeline-element-title">BSc Computers</h3>
                    <h4 className="vertical-timeline-element-subtitle">(Geetham Degree College under Acharya Nagarjuna University), Ongole</h4>
                    <p>
                    I got 74%
                    </p>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="Jun 2004 - 2006"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    icon={<SchoolIcon />}
                  >
                    <h3 className="vertical-timeline-element-title">AP Intermediate - MPC</h3>
                    <h4 className="vertical-timeline-element-subtitle">(SSN Junior College), Ongole</h4>
                    <p>
                    I got 60%
                    </p>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                      className="vertical-timeline-element--education"
                      date="Jun 2003 - March 2004"
                      iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                      icon={<SchoolIcon />}
                    >
                      <h3 className="vertical-timeline-element-title">10Th Class</h3>
                      <h4 className="vertical-timeline-element-subtitle">(Z.P.High School  under Board of Secondary Education), Alluru</h4>
                      <p>
                      I got 74%
                      </p>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                      iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                      icon={<StarIcon />}
                  />
                </VerticalTimeline>
                </div>
              </Col>
              </Row>
            </Container>
        </section>

        
    );
}

export default Experience;
