import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useAuth } from '../contexts/AuthContext';

const Home = () => {
  const { isAuthenticated } = useAuth();

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section text-center">
        <Container>
          <Row>
            <Col>
              <h1 className="display-4 mb-4">Welcome to WDP301 Assistants</h1>
              <p className="lead mb-4">
                A comprehensive web-based system demonstrating modern web technologies
                including React, React Native, Node.js, Express, and MongoDB.
              </p>
              <div>
                <LinkContainer to="/products">
                  <Button variant="light" size="lg" className="me-3">
                    Browse Products
                  </Button>
                </LinkContainer>
                {!isAuthenticated && (
                  <LinkContainer to="/register">
                    <Button variant="outline-light" size="lg">
                      Get Started
                    </Button>
                  </LinkContainer>
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Features Section */}
      <Container className="my-5">
        <Row>
          <Col className="text-center mb-5">
            <h2>Key Features & Technologies</h2>
            <p className="text-muted">
              This application demonstrates proficiency in industry-standard web development technologies
            </p>
          </Col>
        </Row>
        
        <Row>
          <Col md={4} className="mb-4">
            <Card className="feature-card h-100 text-center p-3">
              <Card.Body>
                <h4 className="text-primary">Frontend Development</h4>
                <p>
                  Built with <strong>React 18</strong> and <strong>Bootstrap 5</strong> for modern,
                  responsive user interfaces with component-based architecture.
                </p>
                <ul className="list-unstyled">
                  <li>✓ React Hooks & Context API</li>
                  <li>✓ React Router for SPA</li>
                  <li>✓ Bootstrap for styling</li>
                  <li>✓ Responsive design</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
          
          <Col md={4} className="mb-4">
            <Card className="feature-card h-100 text-center p-3">
              <Card.Body>
                <h4 className="text-success">Backend Development</h4>
                <p>
                  Powered by <strong>Node.js</strong> and <strong>Express</strong> with RESTful API
                  architecture and comprehensive security middleware.
                </p>
                <ul className="list-unstyled">
                  <li>✓ Express.js framework</li>
                  <li>✓ JWT Authentication</li>
                  <li>✓ Role-based access control</li>
                  <li>✓ API rate limiting</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
          
          <Col md={4} className="mb-4">
            <Card className="feature-card h-100 text-center p-3">
              <Card.Body>
                <h4 className="text-info">Database & Mobile</h4>
                <p>
                  <strong>MongoDB</strong> for flexible data storage and <strong>React Native</strong>
                  for cross-platform mobile development.
                </p>
                <ul className="list-unstyled">
                  <li>✓ MongoDB with Mongoose</li>
                  <li>✓ Data validation & relationships</li>
                  <li>✓ React Native mobile app</li>
                  <li>✓ Cross-platform compatibility</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        
        <Row className="mt-5">
          <Col md={6} className="mb-4">
            <Card className="feature-card h-100">
              <Card.Body>
                <h5>Object-Oriented Design</h5>
                <p>
                  The application follows object-oriented principles with well-structured
                  models, controllers, and services that promote code reusability and maintainability.
                </p>
              </Card.Body>
            </Card>
          </Col>
          
          <Col md={6} className="mb-4">
            <Card className="feature-card h-100">
              <Card.Body>
                <h5>Team Collaboration</h5>
                <p>
                  Built with modern development practices including version control,
                  modular architecture, and comprehensive documentation for effective team collaboration.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;