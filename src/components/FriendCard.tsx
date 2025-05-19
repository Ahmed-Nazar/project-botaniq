
import React from 'react';
import { Card, Badge, Button } from 'react-bootstrap';
import { User } from './UserProfile';

interface FriendCardProps {
  friend: User;
}

const FriendCard: React.FC<FriendCardProps> = ({ friend }) => {
  return (
    <Card className="mb-3">
      <Card.Body>
        <div className="d-flex align-items-center">
          <img 
            src={friend.avatar} 
            alt={friend.name} 
            className="rounded-circle me-3" 
            width="60" 
            height="60"
          />
          <div className="flex-grow-1">
            <div className="d-flex justify-content-between align-items-start">
              <div>
                <h5 className="mb-0">{friend.name}</h5>
                <p className="text-muted mb-0">{friend.title}</p>
              </div>
              {friend.isPro && (
                <Badge bg="warning" text="dark">
                  PRO
                </Badge>
              )}
            </div>
            
            <div className="d-flex mt-2 small">
              <div className="me-3">
                <strong>{friend.stats.trees}</strong> trees
              </div>
              <div className="me-3">
                <strong>{friend.stats.co2}kg</strong> CO₂ offset
              </div>
              <div>
                <strong>{friend.stats.points}</strong> points
              </div>
            </div>
          </div>
        </div>
      </Card.Body>
      <Card.Footer className="bg-white">
        <div className="d-flex justify-content-between">
          <Button variant="outline-primary" size="sm">View Profile</Button>
          <Button variant="outline-success" size="sm">Garden Updates</Button>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default FriendCard;
