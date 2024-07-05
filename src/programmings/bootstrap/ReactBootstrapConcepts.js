import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ReactBootstrapConcepts() {
  return (
    <div className="container mt-4">
      <h1>React Bootstrap Example</h1>
      
      <Accordion defaultActiveKey="0">

        {/* Grid System */}
        <Accordion.Item>
          <Accordion.Header><b>1. Grid System</b></Accordion.Header>
          <Accordion.Body>
            <p>React Bootstrap's grid system is based on Bootstrap's responsive, mobile-first fluid grid layout.</p>
            <pre>{`
              <div className="row">
              <div className="col-md-4">
                <Card>
                  <Card.Body>
                    <Card.Title>Column 1</Card.Title>
                    <Card.Text>
                      This is column 1 content.
                    </Card.Text>
                    <Button variant="primary">Button</Button>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-md-4">
                <Card>
                  <Card.Body>
                    <Card.Title>Column 2</Card.Title>
                    <Card.Text>
                      This is column 2 content.
                    </Card.Text>
                    <Button variant="primary">Button</Button>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-md-4">
                <Card>
                  <Card.Body>
                    <Card.Title>Column 3</Card.Title>
                    <Card.Text>
                      This is column 3 content.
                    </Card.Text>
                    <Button variant="primary">Button</Button>
                  </Card.Body>
                </Card>
              </div>
            </div>
            `}</pre>
            <div className="row">
              <div className="col-md-4">
                <Card>
                  <Card.Body>
                    <Card.Title>Column 1</Card.Title>
                    <Card.Text>
                      This is column 1 content.
                    </Card.Text>
                    <Button variant="primary">Button</Button>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-md-4">
                <Card>
                  <Card.Body>
                    <Card.Title>Column 2</Card.Title>
                    <Card.Text>
                      This is column 2 content.
                    </Card.Text>
                    <Button variant="primary">Button</Button>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-md-4">
                <Card>
                  <Card.Body>
                    <Card.Title>Column 3</Card.Title>
                    <Card.Text>
                      This is column 3 content.
                    </Card.Text>
                    <Button variant="primary">Button</Button>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>

        {/* Buttons */}
        <Accordion.Item eventKey="1">
          <Accordion.Header><b>2. Buttons</b></Accordion.Header>
          <Accordion.Body>
            <p>React Bootstrap provides styled buttons with various variants and sizes.</p>
            <pre>{`
            <div>
              <Button variant="primary">Primary Button</Button>
              <Button variant="secondary">Secondary Button</Button>
              <Button variant="success">Success Button</Button>
              <Button variant="danger">Danger Button</Button>
              <Button variant="warning">Warning Button</Button>
              <Button variant="info">Info Button</Button>
              <Button variant="light">Light Button</Button>
              <Button variant="dark">Dark Button</Button>
            </div>
            `}</pre>
            <div>
              <Button variant="primary">Primary Button</Button>
              <Button variant="secondary">Secondary Button</Button>
              <Button variant="success">Success Button</Button>
              <Button variant="danger">Danger Button</Button>
              <Button variant="warning">Warning Button</Button>
              <Button variant="info">Info Button</Button>
              <Button variant="light">Light Button</Button>
              <Button variant="dark">Dark Button</Button>
            </div>
          </Accordion.Body>
        </Accordion.Item>

        {/* Navbar */}
        <Accordion.Item eventKey="2">
          <Accordion.Header><b>3. Navbar</b></Accordion.Header>
          <Accordion.Body>
            <p>Responsive navigation bar with brand, links, and form.</p>
            <pre>{`
              <Card>
                <Card.Body>
                  <Card.Title>Navbar Example</Card.Title>
                  <Card.Text>
                    Example of a responsive navbar using React Bootstrap.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            `}</pre>
            <Card>
              <Card.Body>
                <Card.Title>Navbar Example</Card.Title>
                <Card.Text>
                  Example of a responsive navbar using React Bootstrap.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Accordion.Body>
        </Accordion.Item>

        {/* Forms */}
        <Accordion.Item eventKey="3">
          <Accordion.Header><b>4. Forms</b></Accordion.Header>
          <Accordion.Body>
            <p>Forms and form controls with validation support.</p>
            <pre>
              {`
            <Card>
              <Card.Body>
                <Card.Title>Form Example</Card.Title>
                <Card.Text>
                  Example of a form using React Bootstrap.
                </Card.Text>
                <Button variant="primary">Submit</Button>
              </Card.Body>
            </Card>
              `}
            </pre>
            <Card>
              <Card.Body>
                <Card.Title>Form Example</Card.Title>
                <Card.Text>
                  Example of a form using React Bootstrap.
                </Card.Text>
                <Button variant="primary">Submit</Button>
              </Card.Body>
            </Card>
          </Accordion.Body>
        </Accordion.Item>

        {/* Cards */}
        <Accordion.Item eventKey="4">
          <Accordion.Header><b>5. Cards</b></Accordion.Header>
          <Accordion.Body>
            <p>Card components for displaying content in panels.</p>
            <pre>
              {`
              <Card>
                <Card.Body>
                  <Card.Title>Card Example</Card.Title>
                  <Card.Text>
                    Example of a card using React Bootstrap.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
              `}
            </pre>
            <Card>
              <Card.Body>
                <Card.Title>Card Example</Card.Title>
                <Card.Text>
                  Example of a card using React Bootstrap.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Accordion.Body>
        </Accordion.Item>

        {/* Modals */}
        <Accordion.Item eventKey="5">
          <Accordion.Header><b>6. Modals</b></Accordion.Header>
          <Accordion.Body>
            <p>Modal dialogs for displaying content over other parts of the application.</p>
            <pre>
              {`
            <Card>
              <Card.Body>
                <Card.Title>Modal Example</Card.Title>
                <Card.Text>
                  Example of a modal using React Bootstrap.
                </Card.Text>
                <Button variant="primary">Launch Modal</Button>
              </Card.Body>
            </Card>
              `}
            </pre>
            <Card>
              <Card.Body>
                <Card.Title>Modal Example</Card.Title>
                <Card.Text>
                  Example of a modal using React Bootstrap.
                </Card.Text>
                <Button variant="primary">Launch Modal</Button>
              </Card.Body>
            </Card>
          </Accordion.Body>
        </Accordion.Item>

      </Accordion>
    </div>
  );
}

export default ReactBootstrapConcepts;
