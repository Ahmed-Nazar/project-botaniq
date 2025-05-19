import React, { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Tree, Camera, Calendar, TreeDeciduous, Leaf, ShoppingBag, BookOpen, Users, Star, ChevronRight, MapPin, ChevronDown } from "lucide-react";
import { supabase, User, Friend } from "@/lib/supabase";
import { toast } from "@/hooks/use-toast";

// Define subscription features
const subscriptionFeatures = [
  {
    title: "Exclusive Planting Guides & Tutorials",
    description: "Access to advanced guides, video tutorials, and personalized plant care schedules."
  },
  {
    title: "Marketplace Benefits",
    description: "No commission on sales, priority listing, and early access to seasonal sales."
  },
  {
    title: "Sustainability Tracker Pro",
    description: "Detailed environmental impact stats, personalized goals, and customizable reports."
  },
  {
    title: "Community Plus",
    description: "Private groups, exclusive forums, and monthly expert sessions."
  },
  {
    title: "Friends & Social Features",
    description: "Unlimited friend requests, group challenges, and virtual garden tours."
  },
  {
    title: "Profile Customization",
    description: "Premium badges, themes, and special Pro Gardener titles."
  },
  {
    title: "Journal & Planner Tools",
    description: "Advanced calendar, expanded tracking, and cloud backup of gardening history."
  },
  {
    title: "BotaniQ Store Coupons",
    description: "Monthly discounts and partner brand deals."
  },
  {
    title: "Early Access & Beta Features",
    description: "Try new features first and influence future updates."
  },
  {
    title: "Experts Consultation",
    description: "Connect with gardening experts for personalized advice."
  }
];

const UserProfile: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [friends, setFriends] = useState<(Friend & { friend: User })[]>([]);
  const [showSubscriptionDialog, setShowSubscriptionDialog] = useState(false);
  const [expandedFeatures, setExpandedFeatures] = useState<Record<string, boolean>>({});
  const [showPaymentDialog, setShowPaymentDialog] = useState(false);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  
  // Load demo user data
  useEffect(() => {
    const loadUserData = async () => {
      try {
        // Using GardenGuru as our demo user
        const { data, error } = await supabase
          .from('users_demo')
          .select('*')
          .eq('id', '00000000-0000-0000-0000-000000000001')
          .single();
          
        if (error) throw error;
        setCurrentUser(data);
        setIsSubscribed(data.is_pro);
        
        // Load friends data
        const { data: friendsData, error: friendsError } = await supabase
          .from('friends')
          .select('*')
          .eq('user_id', '00000000-0000-0000-0000-000000000001');
          
        if (friendsError) throw friendsError;
        
        // Get friend user details
        const friendsWithDetails = await Promise.all(
          friendsData.map(async (friend) => {
            const { data: userData } = await supabase
              .from('users_demo')
              .select('*')
              .eq('id', friend.friend_id)
              .single();
              
            return { ...friend, friend: userData };
          })
        );
        
        setFriends(friendsWithDetails);
      } catch (error) {
        console.error('Error loading profile data:', error);
        toast({
          title: "Error loading profile",
          description: "Please try again later",
          variant: "destructive"
        });
      }
    };
    
    loadUserData();
  }, []);

  const toggleFeatureExpand = (title: string) => {
    setExpandedFeatures(prev => ({
      ...prev,
      [title]: !prev[title]
    }));
  };

  const handleSubscribe = () => {
    setShowSubscriptionDialog(false);
    setShowPaymentDialog(true);
  };

  const handleProcessPayment = () => {
    setIsProcessingPayment(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessingPayment(false);
      setShowPaymentDialog(false);
      setIsSubscribed(true);
      
      // Update the user's pro status in database (in a real app)
      toast({
        title: "Success!",
        description: "You are now a Pro Member",
        variant: "default"
      });
    }, 2000);
  };

  return (
    <div className="container mx-auto pt-24 px-4 pb-12">
      {/* Profile Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-8">
        <Avatar className="h-24 w-24 border-4 border-primary/20">
          <AvatarImage src={currentUser?.avatar_url} />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        
        <div className="flex-1">
          <h1 className="text-3xl font-bold">{currentUser?.username || "Garden Guru"}</h1>
          <p className="text-muted-foreground">Member since April 2025</p>
          
          <div className="flex flex-wrap gap-2 mt-3">
            {isSubscribed && (
              <Badge className="bg-amber-500">Pro Gardener</Badge>
            )}
            <Badge variant="outline">Carbon Crusader</Badge>
            <Badge variant="outline">Urban Gardener</Badge>
          </div>
        </div>
        
        <div className="flex gap-3 mt-4 md:mt-0">
          <Button variant="outline" size="sm">
            <Camera className="h-4 w-4 mr-2" />
            Edit Profile
          </Button>
          {!isSubscribed && (
            <Button size="sm" onClick={() => setShowSubscriptionDialog(true)}>
              <Star className="h-4 w-4 mr-2" />
              Upgrade to Pro
            </Button>
          )}
        </div>
      </div>
      
      {/* Impact Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {/* ... keep existing code */}
      </div>
      
      {/* Main Content */}
      <Tabs defaultValue="dashboard" onValueChange={setActiveTab}>
        <TabsList className="mb-8 grid w-full grid-cols-2 md:grid-cols-5">
          <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
          <TabsTrigger value="activity">Activity</TabsTrigger>
          <TabsTrigger value="friends">Friends</TabsTrigger>
          <TabsTrigger value="marketplace">Marketplace</TabsTrigger>
          <TabsTrigger value="learning">Learning</TabsTrigger>
        </TabsList>
        
        {/* Dashboard Tab */}
        <TabsContent value="dashboard">
          {/* ... keep existing code */}
        </TabsContent>
        
        {/* Activity Tab */}
        <TabsContent value="activity">
          {/* ... keep existing code */}
        </TabsContent>
        
        {/* Friends Tab */}
        <TabsContent value="friends">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>My Garden Friends</CardTitle>
                  <CardDescription>Connect with other plant enthusiasts</CardDescription>
                </CardHeader>
                <CardContent>
                  {friends.length === 0 ? (
                    <div className="text-center py-8">
                      <Users className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                      <p className="text-muted-foreground">You haven't added any friends yet.</p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {friends.map((friendship) => (
                        <div key={friendship.id} className="flex items-center gap-4 p-3 bg-muted/30 rounded-lg">
                          <Avatar className="h-12 w-12 border-2 border-background">
                            <AvatarImage src={friendship.friend.avatar_url} />
                            <AvatarFallback>{friendship.friend.username.substring(0, 2).toUpperCase()}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center">
                              <h4 className="font-medium">{friendship.friend.username}</h4>
                              {friendship.friend.is_pro && (
                                <Badge className="ml-2 bg-amber-500">PRO</Badge>
                              )}
                            </div>
                            <p className="text-sm text-muted-foreground">{friendship.friend.bio}</p>
                          </div>
                          <Button variant="ghost" size="sm">
                            <ChevronRight className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Find Friends</Button>
                </CardFooter>
              </Card>
            </div>
            
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Friend Activity</CardTitle>
                  <CardDescription>Recent updates from your connections</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="p-3 bg-muted/30 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Avatar className="h-6 w-6">
                          <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=PlantLover" />
                          <AvatarFallback>PL</AvatarFallback>
                        </Avatar>
                        <span className="font-medium text-sm">PlantLover</span>
                      </div>
                      <p className="text-sm">Planted a new Oak sapling 🌱</p>
                      <p className="text-xs text-muted-foreground mt-1">2 days ago</p>
                    </div>
                    
                    <div className="p-3 bg-muted/30 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Avatar className="h-6 w-6">
                          <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=EcoFarmer" />
                          <AvatarFallback>EF</AvatarFallback>
                        </Avatar>
                        <span className="font-medium text-sm">EcoFarmer</span>
                      </div>
                      <p className="text-sm">Posted a new guide on composting 📝</p>
                      <p className="text-xs text-muted-foreground mt-1">4 days ago</p>
                    </div>
                    
                    <div className="p-3 bg-muted/30 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Avatar className="h-6 w-6">
                          <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=BotanicalExplorer" />
                          <AvatarFallback>BE</AvatarFallback>
                        </Avatar>
                        <span className="font-medium text-sm">BotanicalExplorer</span>
                      </div>
                      <p className="text-sm">Earned "Tree Pioneer" badge 🏆</p>
                      <p className="text-xs text-muted-foreground mt-1">1 week ago</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
        
        {/* Marketplace Tab Content */}
        <TabsContent value="marketplace">
          {/* ... keep existing code */}
        </TabsContent>
        
        {/* Learning Tab Content */}
        <TabsContent value="learning">
          {/* ... keep existing code */}
        </TabsContent>
      </Tabs>
      
      {/* Subscription Dialog */}
      <Dialog open={showSubscriptionDialog} onOpenChange={setShowSubscriptionDialog}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl">Upgrade to Pro Gardener</DialogTitle>
            <DialogDescription className="text-base">
              Unlock premium features to enhance your gardening experience
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4 py-4">
            {subscriptionFeatures.map((feature) => (
              <div key={feature.title} className="border rounded-lg overflow-hidden">
                <button 
                  className="flex justify-between items-center w-full p-4 text-left"
                  onClick={() => toggleFeatureExpand(feature.title)}
                >
                  <span className="font-medium">{feature.title}</span>
                  <ChevronDown className={`h-5 w-5 transition-transform ${expandedFeatures[feature.title] ? 'transform rotate-180' : ''}`} />
                </button>
                {expandedFeatures[feature.title] && (
                  <div className="p-4 pt-0 border-t">
                    <p>{feature.description}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <DialogFooter>
            <div className="w-full flex flex-col items-center">
              <div className="text-center mb-4">
                <p className="text-2xl font-bold">900 LKR/month</p>
                <p className="text-sm text-muted-foreground">Cancel anytime</p>
              </div>
              <Button onClick={handleSubscribe} className="w-full">Upgrade Now</Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      
      {/* Payment Dialog */}
      <Dialog open={showPaymentDialog} onOpenChange={setShowPaymentDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Complete Your Payment</DialogTitle>
            <DialogDescription>
              Enter your payment details to upgrade to Pro Gardener
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4 py-4">
            <div className="grid gap-4">
              <div className="grid gap-2">
                <label htmlFor="cardName" className="text-sm font-medium">Name on Card</label>
                <input 
                  id="cardName"
                  type="text" 
                  placeholder="John Doe"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                />
              </div>
              
              <div className="grid gap-2">
                <label htmlFor="cardNumber" className="text-sm font-medium">Card Number</label>
                <input 
                  id="cardNumber"
                  type="text" 
                  placeholder="1234 5678 9012 3456"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <label htmlFor="expiry" className="text-sm font-medium">Expiry Date</label>
                  <input 
                    id="expiry"
                    type="text" 
                    placeholder="MM/YY"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  />
                </div>
                
                <div className="grid gap-2">
                  <label htmlFor="cvc" className="text-sm font-medium">CVC</label>
                  <input 
                    id="cvc"
                    type="text" 
                    placeholder="123"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  />
                </div>
              </div>
            </div>
          </div>
          
          <DialogFooter>
            <Button onClick={handleProcessPayment} disabled={isProcessingPayment}>
              {isProcessingPayment ? "Processing..." : "Pay 900 LKR/month"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default UserProfile;
