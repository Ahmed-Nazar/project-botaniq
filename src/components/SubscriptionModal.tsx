
import React, { useState } from 'react';
import { Modal, Button, Card, Accordion, Badge, Row, Col, Form } from 'react-bootstrap';
import { Check } from 'lucide-react';

interface SubscriptionFeature {
  id: string;
  title: string;
  description: string[];
}

interface SubscriptionModalProps {
  show: boolean;
  onHide: () => void;
  onUpgrade: () => void;
}

const subscriptionFeatures: SubscriptionFeature[] = [
  {
    id: 'guides',
    title: 'Exclusive Planting Guides & Tutorials',
    description: [
      'Access to advanced or expert-level guides.',
      'Video tutorials from professional gardeners.',
      'Personalized plant care schedules.'
    ]
  },
  {
    id: 'marketplace',
    title: 'Marketplace Benefits',
    description: [
      'No commission on user sales.',
      'Priority listing or featured spots in the marketplace.',
      'Early access to seasonal sales, discounts, or exclusive items.'
    ]
  },
  {
    id: 'sustainability',
    title: 'Sustainability Tracker Pro',
    description: [
      'Detailed environmental impact stats (carbon offset, water saved, etc.).',
      'Personalized goals and achievement tracking.',
      'Customizable dashboard with exportable reports.'
    ]
  },
  {
    id: 'community',
    title: 'Community Plus',
    description: [
      'Ability to create private groups or clubs.',
      'Access to exclusive forums or expert Q&A sessions.',
      'Monthly live sessions with gardening experts.'
    ]
  },
  {
    id: 'friends',
    title: 'Friends & Social Features',
    description: [
      'Unlimited friend requests (limit free users).',
      'Group gardening challenges with friends.',
      'Virtual garden tours – show off your plants with photos/videos.'
    ]
  },
  {
    id: 'profile',
    title: 'Profile Customization',
    description: [
      'Premium badges and themes.',
      'Custom profile banners.',
      'Special "Pro Gardener" title or tags.'
    ]
  },
  {
    id: 'tools',
    title: 'Journal & Planner Tools',
    description: [
      'Advanced gardening planner/calendar.',
      'Ability to track more plants, garden zones, or activities.',
      'Cloud backup of gardening history and notes.'
    ]
  },
  {
    id: 'coupons',
    title: 'BotaniQ Store Coupons',
    description: [
      'Monthly discount vouchers.',
      'Partner brand deals (e.g., fertilizer or potting suppliers).'
    ]
  },
  {
    id: 'beta',
    title: 'Early Access & Beta Features',
    description: [
      'Try new features before public release.',
      'Feedback channel to influence future updates.'
    ]
  },
  {
    id: 'consultation',
    title: 'Experts Consultation',
    description: [
      'Direct messaging with garden experts.',
      'Personalized advice and consultations.'
    ]
  }
];

const SubscriptionModal: React.FC<SubscriptionModalProps> = ({ show, onHide, onUpgrade }) => {
  const [showPayment, setShowPayment] = useState(false);

  const handleUpgradeClick = () => {
    setShowPayment(true);
  };

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onUpgrade();
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>
          {!showPayment ? 'Upgrade to Pro Gardener' : 'Complete Your Pro Subscription'}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {!showPayment ? (
          <>
            <div className="text-center mb-4">
              <Badge bg="success" className="fs-6 px-3 py-2 mb-2">PREMIUM</Badge>
              <h3>Unlock All Features</h3>
              <p className="text-muted">Get access to premium features and take your gardening to the next level!</p>
            </div>

            <Accordion defaultActiveKey="0" className="mb-4">
              {subscriptionFeatures.map((feature, index) => (
                <Accordion.Item eventKey={index.toString()} key={feature.id}>
                  <Accordion.Header>
                    <div className="d-flex align-items-center">
                      <span className="me-2">✨</span> 
                      <strong>{feature.title}</strong>
                    </div>
                  </Accordion.Header>
                  <Accordion.Body>
                    <ul className="list-unstyled">
                      {feature.description.map((item, i) => (
                        <li key={i} className="mb-2">
                          <Check className="text-success me-2" size={18} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>

            <Card className="border-success mb-4">
              <Card.Body className="text-center">
                <h4>900LKR/month</h4>
                <p className="text-muted mb-0">Cancel anytime</p>
              </Card.Body>
            </Card>
          </>
        ) : (
          <Form onSubmit={handlePaymentSubmit}>
            <h5 className="mb-4">Payment Details</h5>
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="text" required />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="text" required />
                </Form.Group>
              </Col>
            </Row>
            
            <Form.Group className="mb-3">
              <Form.Label>Card Number</Form.Label>
              <Form.Control type="text" placeholder="1234 5678 9012 3456" required />
            </Form.Group>
            
            <Row className="mb-4">
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Expiration Date</Form.Label>
                  <Form.Control type="text" placeholder="MM/YY" required />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>CVC</Form.Label>
                  <Form.Control type="text" placeholder="123" required />
                </Form.Group>
              </Col>
            </Row>
            
            <Form.Group className="mb-3">
              <Form.Label>Country</Form.Label>
              <Form.Select>
                <option>Sri Lanka</option>
                <option>India</option>
                <option>United States</option>
                <option>United Kingdom</option>
              </Form.Select>
            </Form.Group>
            
            <div className="text-center mt-4">
              <p><strong>Total: 900LKR/month</strong></p>
            </div>
          </Form>
        )}
      </Modal.Body>
      <Modal.Footer>
        {!showPayment ? (
          <>
            <Button variant="outline-secondary" onClick={onHide}>
              Maybe Later
            </Button>
            <Button variant="success" onClick={handleUpgradeClick}>
              Upgrade - 900LKR/month
            </Button>
          </>
        ) : (
          <>
            <Button variant="outline-secondary" onClick={() => setShowPayment(false)}>
              Back
            </Button>
            <Button variant="success" type="submit" onClick={handlePaymentSubmit}>
              Pay Now
            </Button>
          </>
        )}
      </Modal.Footer>
    </Modal>
  );
};

export default SubscriptionModal;
