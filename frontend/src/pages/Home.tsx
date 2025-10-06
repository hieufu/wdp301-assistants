import React from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-primary text-white py-5 mb-5">
        <Container>
          <Row className="align-items-center">
            <Col lg={8}>
              <h1 className="display-4 fw-bold">WDP301 Assistants</h1>
              <p className="lead">
                Master fullstack web development with React, Node.js, Express, React Native, and MongoDB. 
                Build real-world projects with your team and gain industry-ready skills.
              </p>
              <div className="mt-4">
                <Button as="a" href="/register" variant="light" size="lg" className="me-3">
                  Get Started
                </Button>
                <Button as="a" href="/projects" variant="outline-light" size="lg">
                  View Projects
                </Button>
              </div>
            </Col>
            <Col lg={4}>
              <div className="text-center">
                <div className="bg-white rounded-3 p-4 text-dark">
                  <h5>Course Features</h5>
                  <div className="d-flex flex-wrap gap-2 justify-content-center">
                    <Badge bg="primary">React</Badge>
                    <Badge bg="success">Node.js</Badge>
                    <Badge bg="info">Express</Badge>
                    <Badge bg="warning">React Native</Badge>
                    <Badge bg="danger">MongoDB</Badge>
                    <Badge bg="secondary">Bootstrap</Badge>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Features Section */}
      <Container className="mb-5">
        <h2 className="text-center mb-5">Learning Objectives</h2>
        <Row>
          <Col md={6} lg={3} className="mb-4">
            <Card className="h-100 text-center">
              <Card.Body>
                <div className="fs-1 text-primary mb-3">🌐</div>
                <Card.Title>Web Development</Card.Title>
                <Card.Text>
                  Master common web techniques and modern React development skills for building dynamic user interfaces.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={3} className="mb-4">
            <Card className="h-100 text-center">
              <Card.Body>
                <div className="fs-1 text-success mb-3">⚙️</div>
                <Card.Title>Backend Skills</Card.Title>
                <Card.Text>
                  Develop proficiency in Node.js and Express.js for building scalable server-side applications.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={3} className="mb-4">
            <Card className="h-100 text-center">
              <Card.Body>
                <div className="fs-1 text-info mb-3">📱</div>
                <Card.Title>Mobile Development</Card.Title>
                <Card.Text>
                  Learn React Native to create cross-platform mobile applications that work on iOS and Android.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={3} className="mb-4">
            <Card className="h-100 text-center">
              <Card.Body>
                <div className="fs-1 text-warning mb-3">👥</div>
                <Card.Title>Team Collaboration</Card.Title>
                <Card.Text>
                  Work with 3-5 team members to complete projects and develop essential collaboration skills.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Technology Stack */}
      <div className="bg-light py-5">
        <Container>
          <h2 className="text-center mb-5">Technology Stack</h2>
          <Row>
            <Col md={4} className="mb-4">
              <Card>
                <Card.Header className="bg-primary text-white">
                  <h5 className="mb-0">Frontend</h5>
                </Card.Header>
                <Card.Body>
                  <ul className="list-unstyled">
                    <li>✓ React with TypeScript</li>
                    <li>✓ Bootstrap for styling</li>
                    <li>✓ React Router for navigation</li>
                    <li>✓ Responsive design</li>
                    <li>✓ Modern ES6+ features</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card>
                <Card.Header className="bg-success text-white">
                  <h5 className="mb-0">Backend</h5>
                </Card.Header>
                <Card.Body>
                  <ul className="list-unstyled">
                    <li>✓ Node.js runtime</li>
                    <li>✓ Express.js framework</li>
                    <li>✓ MongoDB with Mongoose</li>
                    <li>✓ RESTful API design</li>
                    <li>✓ Authentication & authorization</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card>
                <Card.Header className="bg-info text-white">
                  <h5 className="mb-0">Mobile</h5>
                </Card.Header>
                <Card.Body>
                  <ul className="list-unstyled">
                    <li>✓ React Native</li>
                    <li>✓ Cross-platform development</li>
                    <li>✓ Native navigation</li>
                    <li>✓ API integration</li>
                    <li>✓ Mobile-first design</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Home;