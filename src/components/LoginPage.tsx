
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Lock } from "lucide-react";
import AuthForm from './AuthForm';

const LoginPage: React.FC = () => {
  return (
    <Container className="min-vh-100 d-flex align-items-center justify-content-center py-4">
      <Row className="w-100 justify-content-center">
        <Col xs={12} md={6} lg={4}>
          <Card className="shadow-sm">
            <Card.Body className="text-center">
              <div className="d-flex justify-content-center mb-4">
                <div className="bg-light rounded-circle p-3">
                  <Lock className="text-primary" size={24} />
                </div>
              </div>
              <h1 className="h4 mb-2">Welcome to BotaniQ</h1>
              <p className="text-muted mb-4">Sign in to access your garden</p>
              <AuthForm />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
