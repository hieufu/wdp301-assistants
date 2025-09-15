import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <Container>
        <Row>
          <Col md={6}>
            <h5>WDP301 Assistants</h5>
            <p className="mb-0">
              A comprehensive web application demonstrating modern web technologies
              including React, Node.js, Express, and MongoDB.
            </p>
          </Col>
          <Col md={3}>
            <h6>Technologies</h6>
            <ul className="list-unstyled">
              <li>React</li>
              <li>React Native</li>
              <li>Node.js</li>
              <li>Express</li>
              <li>MongoDB</li>
              <li>Bootstrap</li>
            </ul>
          </Col>
          <Col md={3}>
            <h6>Features</h6>
            <ul className="list-unstyled">
              <li>User Authentication</li>
              <li>Product Management</li>
              <li>RESTful API</li>
              <li>Responsive Design</li>
              <li>Role-based Access</li>
            </ul>
          </Col>
        </Row>
        <hr className="my-3" />
        <Row>
          <Col className="text-center">
            <p className="mb-0">
              &copy; 2023 WDP301 Assistants. Built for educational purposes.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;