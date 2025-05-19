import React, { useState } from 'react';
import { Container, Row, Col, Card, Badge, Button, Nav, Tab, ProgressBar, Form, InputGroup } from 'react-bootstrap';
import { TreeDeciduous, Calendar, Leaf, ShoppingBag, BookOpen, Users, MapPin, ChevronRight, Star, Camera, Image, Award, Search } from 'lucide-react';
import SubscriptionModal from './SubscriptionModal';
import PaymentSuccessModal from './PaymentSuccessModal';
import FriendCard from './FriendCard';

// Define User type for friends
export interface User {
  id: number;
  name: string;
  title: string;
  avatar: string;
  isPro: boolean;
  stats: {
    trees: number;
    co2: number;
    points: number;
  };
}

// Sample friends data
const friendsData: User[] = [
  {
    id: 1,
    name: "Alex Morgan",
    title: "Urban Gardener",
    avatar: "https://i.pravatar.cc/150?img=3",
    isPro: true,
    stats: { trees: 8, co2: 45, points: 730 }
  },
  {
    id: 2,
    name: "Sophia Chen",
    title: "Plant Enthusiast",
    avatar: "https://i.pravatar.cc/150?img=5",
    isPro: false,
    stats: { trees: 5, co2: 28, points: 450 }
  },
  {
    id: 3,
    name: "Michael Johnson",
    title: "Tree Pioneer",
    avatar: "https://i.pravatar.cc/150?img=12",
    isPro: false,
    stats: { trees: 15, co2: 87, points: 950 }
  },
  {
    id: 4,
    name: "Emma Watson",
    title: "Conservation Expert",
    avatar: "https://i.pravatar.cc/150?img=9",
    isPro: true,
    stats: { trees: 23, co2: 124, points: 1280 }
  }
];

const UserProfile: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isPro, setIsPro] = useState(false);
  const [showSubscriptionModal, setShowSubscriptionModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [searchFriends, setSearchFriends] = useState('');

  // Filter friends based on search term
  const filteredFriends = friendsData.filter(friend => 
    friend.name.toLowerCase().includes(searchFriends.toLowerCase()) || 
    friend.title.toLowerCase().includes(searchFriends.toLowerCase())
  );

  const handleUpgradeSuccess = () => {
    setShowSubscriptionModal(false);
    setIsPro(true);
    setShowSuccessModal(true);
  };

  return (
    <Container className="py-5 mt-5">
      {/* Profile Header */}
      <Row className="mb-4 align-items-center">
        <Col md={8} className="d-flex align-items-center">
          <div className="position-relative me-3">
            <img 
              src="https://github.com/shadcn.png" 
              alt="Profile" 
              className="rounded-circle border border-3 border-success" 
              width="100"
              height="100"
            />
            {isPro && (
              <Badge 
                bg="warning" 
                text="dark" 
                className="position-absolute bottom-0 end-0 rounded-circle p-2"
                style={{ transform: 'translate(25%, 25%)' }}
              >
                <Award size={16} />
              </Badge>
            )}
          </div>
          
          <div>
            <div className="d-flex align-items-center">
              <h1 className="mb-0">Jane Doe</h1>
              {isPro && (
                <Badge bg="warning" text="dark" className="ms-2">PRO</Badge>
              )}
            </div>
            <p className="text-muted mb-2">Member since April 2025</p>
            
            <div className="d-flex flex-wrap gap-2">
              <Badge bg="success">Tree Pioneer</Badge>
              <Badge bg="secondary">Carbon Crusader</Badge>
              <Badge bg="info">Urban Gardener</Badge>
            </div>
          </div>
        </Col>
        
        <Col md={4} className="text-md-end mt-3 mt-md-0">
          <div className="d-flex justify-content-md-end gap-2">
            <Button variant="outline-secondary" size="sm">
              <Camera size={16} className="me-1" />
              Edit Profile
            </Button>
            
            {!isPro ? (
              <Button 
                variant="success" 
                size="sm"
                onClick={() => setShowSubscriptionModal(true)}
              >
                <Award size={16} className="me-1" />
                Upgrade to Pro
              </Button>
            ) : (
              <Button 
                variant="outline-warning" 
                size="sm"
              >
                <Award size={16} className="me-1" />
                Manage Subscription
              </Button>
            )}
          </div>
        </Col>
      </Row>
      
      {/* Impact Stats */}
      <Row className="mb-4">
        <Col md={3} xs={6} className="mb-3 mb-md-0">
          <Card className="text-center h-100">
            <Card.Body className="d-flex flex-column justify-content-center">
              <TreeDeciduous className="text-success mx-auto mb-2" size={32} />
              <h3 className="mb-0">12</h3>
              <p className="text-muted mb-0">Trees Planted</p>
            </Card.Body>
          </Card>
        </Col>
        
        <Col md={3} xs={6} className="mb-3 mb-md-0">
          <Card className="text-center h-100">
            <Card.Body className="d-flex flex-column justify-content-center">
              <Leaf className="text-success mx-auto mb-2" size={32} />
              <h3 className="mb-0">68kg</h3>
              <p className="text-muted mb-0">CO₂ Offset</p>
            </Card.Body>
          </Card>
        </Col>
        
        <Col md={3} xs={6}>
          <Card className="text-center h-100">
            <Card.Body className="d-flex flex-column justify-content-center">
              <Star className="text-warning mx-auto mb-2" size={32} />
              <h3 className="mb-0">875</h3>
              <p className="text-muted mb-0">Points Earned</p>
            </Card.Body>
          </Card>
        </Col>
        
        <Col md={3} xs={6}>
          <Card className="text-center h-100">
            <Card.Body className="d-flex flex-column justify-content-center">
              <Users className="text-primary mx-auto mb-2" size={32} />
              <h3 className="mb-0">{friendsData.length}</h3>
              <p className="text-muted mb-0">Friends</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      
      {/* Main Content */}
      <Tab.Container defaultActiveKey="dashboard" onSelect={(k) => setActiveTab(k || 'dashboard')}>
        <Nav variant="tabs" className="mb-4">
          <Nav.Item>
            <Nav.Link eventKey="dashboard">Dashboard</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="activity">Activity</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="social">Social</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="friends">Friends</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="marketplace">Marketplace</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="learning">Learning</Nav.Link>
          </Nav.Item>
        </Nav>
        
        {/* Dashboard Tab */}
        <Tab.Content>
          <Tab.Pane eventKey="dashboard">
            <Row>
              <Col md={8}>
                <Card className="mb-4">
                  <Card.Header className="bg-white">
                    <h5 className="mb-0">Tree Portfolio</h5>
                    <Card.Text className="text-muted mb-0">Your planted trees and their impact</Card.Text>
                  </Card.Header>
                  <Card.Body>
                    <div className="mb-4">
                      {['Oak Tree', 'Maple Tree', 'Pine Tree'].map((tree, i) => (
                        <div key={i} className="p-3 bg-light rounded mb-3 d-flex align-items-start">
                          <div className="bg-white rounded p-3 me-3">
                            <TreeDeciduous className="text-success" size={24} />
                          </div>
                          <div className="flex-grow-1">
                            <div className="d-flex justify-content-between">
                              <h5 className="mb-1">{tree}</h5>
                              <Badge bg="light" text="dark">Planted {i + 1} month{i > 0 ? 's' : ''} ago</Badge>
                            </div>
                            <p className="text-muted mb-1">Location: Riverside Park</p>
                            <div className="d-flex gap-2 mt-2">
                              <Badge bg="success" text="white">
                                {5 + i * 2}kg CO₂ absorbed
                              </Badge>
                              <Badge bg="info" text="white">
                                {10 + i * 5}L water saved
                              </Badge>
                            </div>
                          </div>
                          <Button variant="light" size="sm">
                            <ChevronRight size={16} />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </Card.Body>
                  <Card.Footer className="bg-white">
                    <Button variant="success" className="w-100">View All Trees</Button>
                  </Card.Footer>
                </Card>
                
                <Card>
                  <Card.Header className="bg-white">
                    <h5 className="mb-0">Photo Gallery</h5>
                    <Card.Text className="text-muted mb-0">Progress pictures of your plants</Card.Text>
                  </Card.Header>
                  <Card.Body>
                    <Row className="g-2">
                      {[1, 2, 3, 4, 5, 6].map((item) => (
                        <Col xs={4} key={item}>
                          <div className="bg-light rounded d-flex align-items-center justify-content-center" style={{height: '120px'}}>
                            <Image className="text-muted" size={24} />
                          </div>
                        </Col>
                      ))}
                    </Row>
                  </Card.Body>
                  <Card.Footer className="bg-white">
                    <div className="d-flex gap-2">
                      <Button variant="success" className="flex-grow-1">
                        <Camera size={16} className="me-2" />
                        Add Photos
                      </Button>
                      <Button variant="outline-secondary" className="flex-grow-1">View All</Button>
                    </div>
                  </Card.Footer>
                </Card>
              </Col>
              
              <Col md={4}>
                <Card className="mb-4">
                  <Card.Header className="bg-white">
                    <h5 className="mb-0">Impact Stats</h5>
                    <Card.Text className="text-muted mb-0">Your environmental contribution</Card.Text>
                  </Card.Header>
                  <Card.Body>
                    <div className="mb-3">
                      <div className="d-flex justify-content-between mb-1">
                        <span>CO₂ Offset</span>
                        <span>68kg</span>
                      </div>
                      <ProgressBar variant="success" now={68} className="mb-3" style={{height: '10px'}} />
                    </div>
                    
                    <div className="mb-3">
                      <div className="d-flex justify-content-between mb-1">
                        <span>Water Saved</span>
                        <span>320L</span>
                      </div>
                      <ProgressBar variant="info" now={45} className="mb-3" style={{height: '10px'}} />
                    </div>
                    
                    <div className="mb-3">
                      <div className="d-flex justify-content-between mb-1">
                        <span>Biodiversity Score</span>
                        <span>72/100</span>
                      </div>
                      <ProgressBar variant="warning" now={72} className="mb-4" style={{height: '10px'}} />
                    </div>
                    
                    <hr className="my-4" />
                    
                    <div>
                      <h5 className="mb-2">Achievements</h5>
                      <div className="d-flex flex-wrap gap-2">
                        <Badge bg="success">Tree Pioneer</Badge>
                        <Badge bg="secondary">Carbon Crusader</Badge>
                        <Badge bg="info">Urban Gardener</Badge>
                        <Badge bg="light" text="dark">+ 5 more</Badge>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
                
                <Card>
                  <Card.Header className="bg-white">
                    <h5 className="mb-0">Privacy Controls</h5>
                    <Card.Text className="text-muted mb-0">Manage your data visibility</Card.Text>
                  </Card.Header>
                  <Card.Body>
                    <div className="mb-3">
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <span>Public Profile</span>
                        <Form.Check 
                          type="switch"
                          id="custom-switch-1"
                          defaultChecked
                        />
                      </div>
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <span>Show on Leaderboards</span>
                        <Form.Check 
                          type="switch"
                          id="custom-switch-2"
                          defaultChecked
                        />
                      </div>
                      <div className="d-flex justify-content-between align-items-center">
                        <span>Share Impact Stats</span>
                        <Form.Check 
                          type="switch"
                          id="custom-switch-3"
                          defaultChecked
                        />
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Tab.Pane>
          
          {/* Activity Tab - Keep existing content */}
          <Tab.Pane eventKey="activity">
            <div className="placeholder-content">
              <Row>
                <Col md={8}>
                  <Card className="mb-4">
                    <Card.Header className="bg-white">
                      <h5 className="mb-0">Planting Journal</h5>
                      <Card.Text className="text-muted mb-0">Log your planting activities</Card.Text>
                    </Card.Header>
                    <Card.Body>
                      <div className="mb-3 p-3 bg-light rounded">
                        <div className="d-flex">
                          <Calendar size={40} className="text-muted me-3" />
                          <div className="flex-grow-1">
                            <div className="d-flex justify-content-between">
                              <h5 className="mb-1">Planted Oak Sapling</h5>
                              <small className="text-muted">3 days ago</small>
                            </div>
                            <p className="text-muted mb-1">Location: Home Garden</p>
                            <p className="mb-0">Notes: Used organic compost for planting.</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-3 bg-light rounded">
                        <div className="d-flex">
                          <Calendar size={40} className="text-muted me-3" />
                          <div className="flex-grow-1">
                            <div className="d-flex justify-content-between">
                              <h5 className="mb-1">Watered Plants</h5>
                              <small className="text-muted">1 week ago</small>
                            </div>
                            <p className="text-muted mb-1">5 plants watered</p>
                            <p className="mb-0">Used 5L of rainwater collected.</p>
                          </div>
                        </div>
                      </div>
                    </Card.Body>
                    <Card.Footer className="bg-white">
                      <Button variant="success" className="w-100">Add New Entry</Button>
                    </Card.Footer>
                  </Card>
                </Col>
                
                <Col md={4}>
                  <Card>
                    <Card.Header className="bg-white">
                      <h5 className="mb-0">Challenge Participation</h5>
                      <Card.Text className="text-muted mb-0">Track your progress</Card.Text>
                    </Card.Header>
                    <Card.Body>
                      <div className="mb-3 p-3 bg-light rounded">
                        <h5 className="mb-1">Plant 10 Trees in 30 Days</h5>
                        <div className="d-flex justify-content-between text-muted small mb-2">
                          <span>3/10 completed</span>
                          <span>18 days left</span>
                        </div>
                        <ProgressBar variant="success" now={30} style={{height: '10px'}} />
                      </div>
                      
                      <div className="p-3 bg-light rounded">
                        <h5 className="mb-1">Zero-Waste Gardening</h5>
                        <div className="d-flex justify-content-between text-muted small mb-2">
                          <span>Challenge active</span>
                          <span>5 days left</span>
                        </div>
                        <div className="d-flex gap-2 mt-2">
                          <Badge bg="secondary">Participating</Badge>
                          <Badge bg="warning">2 updates shared</Badge>
                        </div>
                      </div>
                    </Card.Body>
                    <Card.Footer className="bg-white">
                      <Button variant="outline-success" className="w-100">View All Challenges</Button>
                    </Card.Footer>
                  </Card>
                </Col>
              </Row>
            </div>
          </Tab.Pane>
          
          {/* Social Tab Content - Keep existing content */}
          <Tab.Pane eventKey="social">
            <Card>
              <Card.Body className="text-center py-5">
                <Users size={48} className="text-muted mb-3" />
                <h3>Connect with like-minded individuals</h3>
                <p className="text-muted mb-4">
                  Follow friends, experts, or eco-influencers and share your gardening journey.
                </p>
                <Button variant="success">Browse Community</Button>
              </Card.Body>
            </Card>
          </Tab.Pane>
          
          {/* Friends Tab - New content */}
          <Tab.Pane eventKey="friends">
            <Row>
              <Col md={8}>
                <Card className="mb-4">
                  <Card.Header className="bg-white">
                    <h5 className="mb-0">My Garden Friends</h5>
                    <Card.Text className="text-muted mb-0">Connect with other gardeners</Card.Text>
                  </Card.Header>
                  <Card.Body>
                    <InputGroup className="mb-4">
                      <Form.Control 
                        placeholder="Search friends..." 
                        value={searchFriends}
                        onChange={(e) => setSearchFriends(e.target.value)}
                      />
                      <Button variant="outline-secondary">
                        <Search size={18} />
                      </Button>
                    </InputGroup>
                    
                    {filteredFriends.length > 0 ? (
                      filteredFriends.map(friend => (
                        <FriendCard key={friend.id} friend={friend} />
                      ))
                    ) : (
                      <div className="text-center py-4">
                        <p className="text-muted mb-0">No friends found matching your search.</p>
                      </div>
                    )}
                  </Card.Body>
                  <Card.Footer className="bg-white">
                    <Button variant="success" className="w-100">
                      Find More Garden Friends
                    </Button>
                  </Card.Footer>
                </Card>
              </Col>
              
              <Col md={4}>
                <Card className="mb-4">
                  <Card.Header className="bg-white">
                    <h5 className="mb-0">Friend Suggestions</h5>
                    <Card.Text className="text-muted mb-0">People you might know</Card.Text>
                  </Card.Header>
                  <Card.Body>
                    <div className="mb-3 p-3 bg-light rounded">
                      <div className="d-flex">
                        <img 
                          src="https://i.pravatar.cc/150?img=8" 
                          alt="David Kim" 
                          className="rounded-circle me-3" 
                          width="50" 
                          height="50"
                        />
                        <div className="flex-grow-1">
                          <h6 className="mb-0">David Kim</h6>
                          <p className="text-muted small mb-2">Herb Specialist</p>
                          <Button size="sm" variant="outline-success">Connect</Button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-3 p-3 bg-light rounded">
                      <div className="d-flex">
                        <img 
                          src="https://i.pravatar.cc/150?img=11" 
                          alt="Lisa Wong" 
                          className="rounded-circle me-3" 
                          width="50" 
                          height="50"
                        />
                        <div className="flex-grow-1">
                          <h6 className="mb-0">Lisa Wong</h6>
                          <p className="text-muted small mb-2">Flower Expert</p>
                          <Button size="sm" variant="outline-success">Connect</Button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-3 bg-light rounded">
                      <div className="d-flex">
                        <img 
                          src="https://i.pravatar.cc/150?img=16" 
                          alt="Omar Hassan" 
                          className="rounded-circle me-3" 
                          width="50" 
                          height="50"
                        />
                        <div className="flex-grow-1">
                          <h6 className="mb-0">Omar Hassan</h6>
                          <p className="text-muted small mb-2">Community Manager</p>
                          <Button size="sm" variant="outline-success">Connect</Button>
                        </div>
                      </div>
                    </div>
                  </Card.Body>
                  <Card.Footer className="bg-white">
                    {!isPro ? (
                      <div className="text-center">
                        <p className="small mb-2">
                          <Badge bg="warning" text="dark" className="me-1">PRO</Badge>
                          Unlock unlimited friend connections
                        </p>
                        <Button 
                          variant="warning" 
                          size="sm" 
                          onClick={() => setShowSubscriptionModal(true)}
                        >
                          <Award size={16} className="me-1" />
                          Upgrade to Pro
                        </Button>
                      </div>
                    ) : (
                      <Button variant="outline-secondary" className="w-100">See All Suggestions</Button>
                    )}
                  </Card.Footer>
                </Card>
                
                <Card>
                  <Card.Header className="bg-white">
                    <h5 className="mb-0">Friend Activity</h5>
                    <Card.Text className="text-muted mb-0">Recent updates</Card.Text>
                  </Card.Header>
                  <Card.Body>
                    <div className="mb-3 border-bottom pb-3">
                      <div className="d-flex align-items-center mb-2">
                        <img 
                          src="https://i.pravatar.cc/150?img=3" 
                          alt="Alex Morgan" 
                          className="rounded-circle me-2" 
                          width="32" 
                          height="32"
                        />
                        <span><strong>Alex Morgan</strong> planted a new tree</span>
                      </div>
                      <p className="text-muted small">2 hours ago</p>
                    </div>
                    
                    <div className="mb-3 border-bottom pb-3">
                      <div className="d-flex align-items-center mb-2">
                        <img 
                          src="https://i.pravatar.cc/150?img=5" 
                          alt="Sophia Chen" 
                          className="rounded-circle me-2" 
                          width="32" 
                          height="32"
                        />
                        <span><strong>Sophia Chen</strong> shared a gardening tip</span>
                      </div>
                      <p className="text-muted small">Yesterday</p>
                    </div>
                    
                    <div>
                      <div className="d-flex align-items-center mb-2">
                        <img 
                          src="https://i.pravatar.cc/150?img=12" 
                          alt="Michael Johnson" 
                          className="rounded-circle me-2" 
                          width="32" 
                          height="32"
                        />
                        <span><strong>Michael Johnson</strong> earned Tree Pioneer badge</span>
                      </div>
                      <p className="text-muted small">3 days ago</p>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Tab.Pane>
          
          {/* Marketplace Tab Content - Keeping existing content minimal */}
          <Tab.Pane eventKey="marketplace">
            <Card>
              <Card.Body className="text-center py-5">
                <ShoppingBag size={48} className="text-muted mb-3" />
                <h3>Your marketplace activity will appear here</h3>
                <p className="text-muted mb-4">
                  Buy and sell plants, seeds, and gardening supplies with other members.
                </p>
                <Button variant="success">Browse Marketplace</Button>
              </Card.Body>
            </Card>
          </Tab.Pane>
          
          {/* Learning Tab Content - Keeping existing content minimal */}
          <Tab.Pane eventKey="learning">
            <Card>
              <Card.Body className="text-center py-5">
                <BookOpen size={48} className="text-muted mb-3" />
                <h3>Expand your gardening knowledge</h3>
                <p className="text-muted mb-4">
                  Get personalized plant recommendations and earn skill badges.
                </p>
                <Button variant="success">Explore Learning Resources</Button>
              </Card.Body>
            </Card>
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
      
      {/* Subscription Modal */}
      <SubscriptionModal 
        show={showSubscriptionModal} 
        onHide={() => setShowSubscriptionModal(false)}
        onUpgrade={handleUpgradeSuccess}
      />
      
      {/* Success Modal */}
      <PaymentSuccessModal 
        show={showSuccessModal}
        onHide={() => setShowSuccessModal(false)}
      />
    </Container>
  );
};

export default UserProfile;
