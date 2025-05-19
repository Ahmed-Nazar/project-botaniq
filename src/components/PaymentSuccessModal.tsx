
import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Award, Check } from 'lucide-react';

interface PaymentSuccessModalProps {
  show: boolean;
  onHide: () => void;
}

const PaymentSuccessModal: React.FC<PaymentSuccessModalProps> = ({ show, onHide }) => {
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Body className="text-center py-5">
        <div className="mb-4">
          <div className="d-inline-flex justify-content-center align-items-center bg-success text-white rounded-circle mb-3" style={{ width: '80px', height: '80px' }}>
            <Check size={40} />
          </div>
          <h3>You are now a Pro Member!</h3>
          <p className="text-muted mb-0">Your account has been upgraded successfully.</p>
        </div>
        
        <div className="d-flex align-items-center justify-content-center mb-4">
          <Award size={24} className="text-warning me-2" />
          <span className="fw-bold">Pro Gardener Badge Added to Your Profile</span>
        </div>
        
        <div className="mb-4">
          <p>Enjoy all premium features including:</p>
          <ul className="list-unstyled text-start">
            <li><Check size={18} className="text-success me-2" /> Exclusive planting guides</li>
            <li><Check size={18} className="text-success me-2" /> Marketplace benefits</li>
            <li><Check size={18} className="text-success me-2" /> Advanced sustainability tracking</li>
            <li><Check size={18} className="text-success me-2" /> Premium community features</li>
          </ul>
        </div>
      </Modal.Body>
      <Modal.Footer className="justify-content-center">
        <Button variant="success" onClick={onHide}>
          Start Exploring Pro Features
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PaymentSuccessModal;
