import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Accordion, Card, Button } from 'react-bootstrap';

function BootstrapConcepts() {
  return (
    <div className="container mt-4">
      <h1>Bootstrap Examples</h1>
      <Accordion defaultActiveKey="0">

        {/* Grid System */}
        <Accordion.Item>
          <Accordion.Header><b>1. Grid System</b></Accordion.Header>
          <Accordion.Body>
            <pre>
                {`
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
                `}
            </pre>
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
          <pre>
                {`
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
                `}
            </pre>
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
          <pre>
                {`
            <Card>
              <Card.Body>
                <Card.Title>Navbar Example</Card.Title>
                <Card.Text>
                  Example of a responsive navbar using Bootstrap.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
                `}
            </pre>
            <Card>
              <Card.Body>
                <Card.Title>Navbar Example</Card.Title>
                <Card.Text>
                  Example of a responsive navbar using Bootstrap.
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
          <pre>
                {`
            <Card>
              <Card.Body>
                <Card.Title>Form Example</Card.Title>
                <Card.Text>
                  Example of a form using Bootstrap.
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
                  Example of a form using Bootstrap.
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
          <pre>
                {`
            <Card>
              <Card.Body>
                <Card.Title>Card Example</Card.Title>
                <Card.Text>
                  Example of a card using Bootstrap.
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
                  Example of a card using Bootstrap.
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
          <pre>
                {`
            <Card>
              <Card.Body>
                <Card.Title>Modal Example</Card.Title>
                <Card.Text>
                  Example of a modal using Bootstrap.
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
                  Example of a modal using Bootstrap.
                </Card.Text>
                <Button variant="primary">Launch Modal</Button>
              </Card.Body>
            </Card>
          </Accordion.Body>
        </Accordion.Item>

        {/* Alerts */}
        <Accordion.Item eventKey="6">
          <Accordion.Header><b>7. Alerts</b></Accordion.Header>
          <Accordion.Body>
          <pre>
                {`
            <Card>
              <Card.Body>
                <Card.Title>Alert Example</Card.Title>
                <Card.Text>
                  Example of an alert using Bootstrap.
                </Card.Text>
                <Button variant="primary">Dismiss</Button>
              </Card.Body>
            </Card>
                `}
            </pre>
            <Card>
              <Card.Body>
                <Card.Title>Alert Example</Card.Title>
                <Card.Text>
                  Example of an alert using Bootstrap.
                </Card.Text>
                <Button variant="primary">Dismiss</Button>
              </Card.Body>
            </Card>
          </Accordion.Body>
        </Accordion.Item>

        {/* Accordion */}
        <Accordion.Item eventKey="7">
          <Accordion.Header><b>8. Accordion</b></Accordion.Header>
          <Accordion.Body>
          <pre>
                {`
            <Card>
              <Card.Body>
                <Card.Title>Accordion Example</Card.Title>
                <Card.Text>
                  Example of an accordion using Bootstrap.
                </Card.Text>
                <Button variant="primary">Expand/Collapse</Button>
              </Card.Body>
            </Card>
                `}
            </pre>
            <Card>
              <Card.Body>
                <Card.Title>Accordion Example</Card.Title>
                <Card.Text>
                  Example of an accordion using Bootstrap.
                </Card.Text>
                <Button variant="primary">Expand/Collapse</Button>
              </Card.Body>
            </Card>
          </Accordion.Body>
        </Accordion.Item>

        {/* Carousel */}
        <Accordion.Item eventKey="8">
          <Accordion.Header><b>9. Carousel</b></Accordion.Header>
          <Accordion.Body>
          <pre>
                {`
            <Card>
              <Card.Body>
                <Card.Title>Carousel Example</Card.Title>
                <Card.Text>
                  Example of a carousel using Bootstrap.
                </Card.Text>
                <Button variant="primary">Slide</Button>
              </Card.Body>
            </Card>
                `}
            </pre>
            <Card>
              <Card.Body>
                <Card.Title>Carousel Example</Card.Title>
                <Card.Text>
                  Example of a carousel using Bootstrap.
                </Card.Text>
                <Button variant="primary">Slide</Button>
              </Card.Body>
            </Card>
          </Accordion.Body>
        </Accordion.Item>

        {/* Dropdowns */}
        <Accordion.Item eventKey="9">
          <Accordion.Header><b>10. Dropdowns</b></Accordion.Header>
          <Accordion.Body>
          <pre>
                {`
            <Card>
              <Card.Body>
                <Card.Title>Dropdown Example</Card.Title>
                <Card.Text>
                  Example of a dropdown using Bootstrap.
                </Card.Text>
                <Button variant="primary">Toggle Dropdown</Button>
              </Card.Body>
            </Card>
                `}
            </pre>
            <Card>
              <Card.Body>
                <Card.Title>Dropdown Example</Card.Title>
                <Card.Text>
                  Example of a dropdown using Bootstrap.
                </Card.Text>
                <Button variant="primary">Toggle Dropdown</Button>
              </Card.Body>
            </Card>
          </Accordion.Body>
        </Accordion.Item>

        {/* Pagination */}
        <Accordion.Item eventKey="10">
          <Accordion.Header><b>11. Pagination</b></Accordion.Header>
          <Accordion.Body>
          <pre>
                {`
            <Card>
              <Card.Body>
                <Card.Title>Pagination Example</Card.Title>
                <Card.Text>
                  Example of pagination using Bootstrap.
                </Card.Text>
                <Button variant="primary">Next Page</Button>
              </Card.Body>
            </Card>
                `}
            </pre>
            <Card>
              <Card.Body>
                <Card.Title>Pagination Example</Card.Title>
                <Card.Text>
                  Example of pagination using Bootstrap.
                </Card.Text>
                <Button variant="primary">Next Page</Button>
              </Card.Body>
            </Card>
          </Accordion.Body>
        </Accordion.Item>

        {/* Spinners */}
        <Accordion.Item eventKey="11">
          <Accordion.Header><b>12. Spinners</b></Accordion.Header>
          <Accordion.Body>
          <pre>
                {`
            <Card>
              <Card.Body>
                <Card.Title>Spinner Example</Card.Title>
                <Card.Text>
                  Example of a spinner using Bootstrap.
                </Card.Text>
                <Button variant="primary">Loading...</Button>
              </Card.Body>
            </Card>
                `}
            </pre>
            <Card>
              <Card.Body>
                <Card.Title>Spinner Example</Card.Title>
                <Card.Text>
                  Example of a spinner using Bootstrap.
                </Card.Text>
                <Button variant="primary">Loading...</Button>
              </Card.Body>
            </Card>
          </Accordion.Body>
        </Accordion.Item>

      </Accordion>
    </div>
  );
}

export default BootstrapConcepts;
