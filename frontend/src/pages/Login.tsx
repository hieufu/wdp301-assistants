import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertVariant, setAlertVariant] = useState<'success' | 'danger'>('success');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // TODO: Implement actual API call
      console.log('Login attempt:', formData);
      
      // Simulate API call
      setShowAlert(true);
      setAlertVariant('success');
      setAlertMessage('Login successful! Redirecting to dashboard...');
      
      // TODO: Redirect to dashboard
    } catch (error) {
      setShowAlert(true);
      setAlertVariant('danger');
      setAlertMessage('Login failed. Please check your credentials.');
    }
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={6} lg={4}>
          <Card className="shadow">
            <Card.Header className="bg-primary text-white text-center">
              <h4 className="mb-0">Login to WDP301 Assistants</h4>
            </Card.Header>
            <Card.Body>
              {showAlert && (
                <Alert variant={alertVariant} dismissible onClose={() => setShowAlert(false)}>
                  {alertMessage}
                </Alert>
              )}
              
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    required
                  />
                </Form.Group>

                <div className="d-grid gap-2">
                  <Button variant="primary" type="submit" size="lg">
                    Login
                  </Button>
                </div>
              </Form>

              <hr />
              
              <div className="text-center">
                <p className="mb-0">
                  Don't have an account?{' '}
                  <Link to="/register" className="text-primary">
                    Register here
                  </Link>
                </p>
              </div>
            </Card.Body>
          </Card>

          {/* Demo Credentials */}
          <Card className="mt-3">
            <Card.Header>
              <small className="text-muted">Demo Credentials</small>
            </Card.Header>
            <Card.Body className="py-2">
              <small className="text-muted">
                <strong>Student:</strong> student@example.com / password<br />
                <strong>Teacher:</strong> teacher@example.com / password<br />
                <strong>Admin:</strong> admin@example.com / password
              </small>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;