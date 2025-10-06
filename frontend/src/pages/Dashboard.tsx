import React from 'react';
import { Container, Row, Col, Card, Badge, Button, ProgressBar } from 'react-bootstrap';

const Dashboard: React.FC = () => {
  // Mock data - would come from API
  const userStats = {
    activeProjects: 3,
    completedTasks: 12,
    teamMembers: 4,
    upcomingDeadlines: 2
  };

  const recentProjects = [
    {
      id: 1,
      title: 'E-commerce Web Application',
      status: 'in-progress',
      progress: 65,
      dueDate: '2024-01-15',
      team: 'Team Alpha'
    },
    {
      id: 2,
      title: 'Mobile Task Manager',
      status: 'testing',
      progress: 85,
      dueDate: '2024-01-20',
      team: 'Team Alpha'
    },
    {
      id: 3,
      title: 'API Documentation Portal',
      status: 'completed',
      progress: 100,
      dueDate: '2023-12-30',
      team: 'Team Alpha'
    }
  ];

  const getStatusBadge = (status: string) => {
    const statusMap: { [key: string]: string } = {
      'planning': 'secondary',
      'in-progress': 'primary',
      'testing': 'warning',
      'completed': 'success',
      'on-hold': 'danger'
    };
    return statusMap[status] || 'secondary';
  };

  return (
    <Container>
      <Row className="mb-4">
        <Col>
          <h2>Dashboard</h2>
          <p className="text-muted">Welcome back! Here's an overview of your progress.</p>
        </Col>
      </Row>

      {/* Statistics Cards */}
      <Row className="mb-4">
        <Col md={3} className="mb-3">
          <Card className="text-center h-100">
            <Card.Body>
              <div className="fs-2 text-primary mb-2">📋</div>
              <h4 className="text-primary">{userStats.activeProjects}</h4>
              <p className="mb-0 text-muted">Active Projects</p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} className="mb-3">
          <Card className="text-center h-100">
            <Card.Body>
              <div className="fs-2 text-success mb-2">✅</div>
              <h4 className="text-success">{userStats.completedTasks}</h4>
              <p className="mb-0 text-muted">Completed Tasks</p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} className="mb-3">
          <Card className="text-center h-100">
            <Card.Body>
              <div className="fs-2 text-info mb-2">👥</div>
              <h4 className="text-info">{userStats.teamMembers}</h4>
              <p className="mb-0 text-muted">Team Members</p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} className="mb-3">
          <Card className="text-center h-100">
            <Card.Body>
              <div className="fs-2 text-warning mb-2">⏰</div>
              <h4 className="text-warning">{userStats.upcomingDeadlines}</h4>
              <p className="mb-0 text-muted">Upcoming Deadlines</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Recent Projects */}
      <Row>
        <Col lg={8}>
          <Card>
            <Card.Header>
              <h5 className="mb-0">Recent Projects</h5>
            </Card.Header>
            <Card.Body>
              {recentProjects.map((project) => (
                <div key={project.id} className="border-bottom pb-3 mb-3 last:border-bottom-0 last:pb-0 last:mb-0">
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <div>
                      <h6 className="mb-1">{project.title}</h6>
                      <small className="text-muted">{project.team} • Due: {project.dueDate}</small>
                    </div>
                    <Badge bg={getStatusBadge(project.status)}>
                      {project.status.replace('-', ' ')}
                    </Badge>
                  </div>
                  <div className="mb-2">
                    <div className="d-flex justify-content-between align-items-center mb-1">
                      <small className="text-muted">Progress</small>
                      <small className="text-muted">{project.progress}%</small>
                    </div>
                    <ProgressBar 
                      now={project.progress} 
                      variant={project.progress === 100 ? 'success' : 'primary'}
                    />
                  </div>
                </div>
              ))}
              <div className="text-center mt-3">
                <Button variant="outline-primary" href="/projects">
                  View All Projects
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        
        <Col lg={4}>
          <Card className="mb-3">
            <Card.Header>
              <h6 className="mb-0">Quick Actions</h6>
            </Card.Header>
            <Card.Body>
              <div className="d-grid gap-2">
                <Button variant="primary" href="/projects">
                  Create New Project
                </Button>
                <Button variant="outline-secondary" href="/teams">
                  View Team
                </Button>
                <Button variant="outline-secondary" href="/profile">
                  Update Profile
                </Button>
              </div>
            </Card.Body>
          </Card>

          <Card>
            <Card.Header>
              <h6 className="mb-0">Learning Progress</h6>
            </Card.Header>
            <Card.Body>
              <div className="mb-3">
                <div className="d-flex justify-content-between mb-1">
                  <small>React Development</small>
                  <small>80%</small>
                </div>
                <ProgressBar now={80} variant="success" />
              </div>
              <div className="mb-3">
                <div className="d-flex justify-content-between mb-1">
                  <small>Node.js & Express</small>
                  <small>65%</small>
                </div>
                <ProgressBar now={65} variant="primary" />
              </div>
              <div className="mb-3">
                <div className="d-flex justify-content-between mb-1">
                  <small>React Native</small>
                  <small>45%</small>
                </div>
                <ProgressBar now={45} variant="warning" />
              </div>
              <div>
                <div className="d-flex justify-content-between mb-1">
                  <small>MongoDB</small>
                  <small>70%</small>
                </div>
                <ProgressBar now={70} variant="info" />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;