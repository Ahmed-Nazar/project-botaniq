import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { TreeDeciduous, Calendar, Leaf, ShoppingBag, BookOpen, Users, MapPin, ChevronRight, Star, Camera, Image } from "lucide-react";

const UserProfile: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="container mx-auto pt-24 px-4 pb-12">
      {/* Profile Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-8">
        <Avatar className="h-24 w-24 border-4 border-primary/20">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        
        <div className="flex-1">
          <h1 className="text-3xl font-bold">Jane Doe</h1>
          <p className="text-muted-foreground">Member since April 2025</p>
          
          <div className="flex flex-wrap gap-2 mt-3">
            <Badge className="bg-green-600">Tree Pioneer</Badge>
            <Badge variant="outline">Carbon Crusader</Badge>
            <Badge variant="outline">Urban Gardener</Badge>
          </div>
        </div>
        
        <div className="flex gap-3 mt-4 md:mt-0">
          <Button variant="outline" size="sm">
            <Camera className="h-4 w-4 mr-2" />
            Edit Profile
          </Button>
          <Button size="sm">
            <Users className="h-4 w-4 mr-2" />
            Connect
          </Button>
        </div>
      </div>
      
      {/* Impact Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <Card>
          <CardContent className="p-4">
            <div className="flex flex-col items-center text-center">
              <TreeDeciduous className="h-8 w-8 text-green-600 mb-2" />
              <div className="text-2xl font-bold">12</div>
              <p className="text-sm text-muted-foreground">Trees Planted</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex flex-col items-center text-center">
              <Leaf className="h-8 w-8 text-green-600 mb-2" />
              <div className="text-2xl font-bold">68kg</div>
              <p className="text-sm text-muted-foreground">CO₂ Offset</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex flex-col items-center text-center">
              <Star className="h-8 w-8 text-amber-500 mb-2" />
              <div className="text-2xl font-bold">875</div>
              <p className="text-sm text-muted-foreground">Points Earned</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex flex-col items-center text-center">
              <Users className="h-8 w-8 text-blue-500 mb-2" />
              <div className="text-2xl font-bold">34</div>
              <p className="text-sm text-muted-foreground">Connections</p>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Main Content */}
      <Tabs defaultValue="dashboard" onValueChange={setActiveTab}>
        <TabsList className="mb-8 grid w-full grid-cols-2 md:grid-cols-5">
          <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
          <TabsTrigger value="activity">Activity</TabsTrigger>
          <TabsTrigger value="social">Social</TabsTrigger>
          <TabsTrigger value="marketplace">Marketplace</TabsTrigger>
          <TabsTrigger value="learning">Learning</TabsTrigger>
        </TabsList>
        
        {/* Dashboard Tab */}
        <TabsContent value="dashboard">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>Tree Portfolio</CardTitle>
                  <CardDescription>Your planted trees and their impact</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {['Oak Tree', 'Maple Tree', 'Pine Tree'].map((tree, i) => (
                      <div key={i} className="flex items-start gap-4 p-3 bg-muted/30 rounded-lg">
                        <div className="h-16 w-16 bg-muted rounded-md flex items-center justify-center">
                          <TreeDeciduous className="h-8 w-8 text-green-600" />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between">
                            <h4 className="font-medium">{tree}</h4>
                            <Badge variant="outline">Planted {i + 1} month{i > 0 ? 's' : ''} ago</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">Location: Riverside Park</p>
                          <div className="flex items-center gap-4 mt-2">
                            <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                              {5 + i * 2}kg CO₂ absorbed
                            </span>
                            <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                              {10 + i * 5}L water saved
                            </span>
                          </div>
                        </div>
                        <Button variant="ghost" size="icon">
                          <ChevronRight className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">View All Trees</Button>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Photo Gallery</CardTitle>
                  <CardDescription>Progress pictures of your plants</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-2">
                    {[1, 2, 3, 4, 5, 6].map((item) => (
                      <div key={item} className="aspect-square bg-muted rounded-md flex items-center justify-center">
                        <Image className="h-8 w-8 text-muted-foreground" />
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex gap-3">
                  <Button className="flex-1">
                    <Camera className="h-4 w-4 mr-2" />
                    Add Photos
                  </Button>
                  <Button variant="outline" className="flex-1">View All</Button>
                </CardFooter>
              </Card>
            </div>
            
            <div>
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>Impact Stats</CardTitle>
                  <CardDescription>Your environmental contribution</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">CO₂ Offset</span>
                        <span className="text-sm text-muted-foreground">68kg</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2.5">
                        <div className="bg-green-600 h-2.5 rounded-full" style={{width: '68%'}}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Water Saved</span>
                        <span className="text-sm text-muted-foreground">320L</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2.5">
                        <div className="bg-blue-600 h-2.5 rounded-full" style={{width: '45%'}}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Biodiversity Score</span>
                        <span className="text-sm text-muted-foreground">72/100</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2.5">
                        <div className="bg-amber-500 h-2.5 rounded-full" style={{width: '72%'}}></div>
                      </div>
                    </div>
                    
                    <Separator className="my-4" />
                    
                    <div className="space-y-2">
                      <h4 className="font-medium">Achievements</h4>
                      <div className="flex flex-wrap gap-2">
                        <Badge>Tree Pioneer</Badge>
                        <Badge>Carbon Crusader</Badge>
                        <Badge>Urban Gardener</Badge>
                        <Badge variant="outline">+ 5 more</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Privacy Controls</CardTitle>
                  <CardDescription>Manage your data visibility</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Public Profile</span>
                      <div className="h-4 w-8 bg-primary rounded-full relative">
                        <div className="absolute right-0.5 top-0.5 bg-white h-3 w-3 rounded-full"></div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Show on Leaderboards</span>
                      <div className="h-4 w-8 bg-primary rounded-full relative">
                        <div className="absolute right-0.5 top-0.5 bg-white h-3 w-3 rounded-full"></div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Share Impact Stats</span>
                      <div className="h-4 w-8 bg-primary rounded-full relative">
                        <div className="absolute right-0.5 top-0.5 bg-white h-3 w-3 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
        
        {/* Activity Tab */}
        <TabsContent value="activity">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Planting Journal</CardTitle>
                  <CardDescription>Log your planting activities</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 p-3 bg-muted/30 rounded-lg">
                      <Calendar className="h-10 w-10 text-muted-foreground" />
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <h4 className="font-medium">Planted Oak Sapling</h4>
                          <span className="text-sm text-muted-foreground">3 days ago</span>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">Location: Home Garden</p>
                        <p className="text-sm mt-1">Notes: Used organic compost for planting.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 p-3 bg-muted/30 rounded-lg">
                      <Calendar className="h-10 w-10 text-muted-foreground" />
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <h4 className="font-medium">Watered Plants</h4>
                          <span className="text-sm text-muted-foreground">1 week ago</span>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">5 plants watered</p>
                        <p className="text-sm mt-1">Used 5L of rainwater collected.</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Add New Entry</Button>
                </CardFooter>
              </Card>
            </div>
            
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Challenge Participation</CardTitle>
                  <CardDescription>Track your progress</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-3 bg-muted/30 rounded-lg">
                      <h4 className="font-medium">Plant 10 Trees in 30 Days</h4>
                      <div className="flex justify-between text-sm text-muted-foreground mt-1">
                        <span>3/10 completed</span>
                        <span>18 days left</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2 mt-2">
                        <div className="bg-primary h-2 rounded-full" style={{width: '30%'}}></div>
                      </div>
                    </div>
                    
                    <div className="p-3 bg-muted/30 rounded-lg">
                      <h4 className="font-medium">Zero-Waste Gardening</h4>
                      <div className="flex justify-between text-sm text-muted-foreground mt-1">
                        <span>Challenge active</span>
                        <span>5 days left</span>
                      </div>
                      <div className="flex gap-2 mt-2">
                        <Badge variant="outline">Participating</Badge>
                        <Badge className="bg-amber-500">2 updates shared</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">View All Challenges</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </TabsContent>
        
        {/* Social Tab Content - We'll add minimal content to keep this short */}
        <TabsContent value="social">
          <Card>
            <CardHeader>
              <CardTitle>Social & Community Tools</CardTitle>
              <CardDescription>Connect with other members</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-10">
                <Users className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-lg font-medium mb-2">Connect with like-minded individuals</h3>
                <p className="text-muted-foreground mb-6">
                  Follow friends, experts, or eco-influencers and share your gardening journey.
                </p>
                <Button>Browse Community</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Marketplace Tab Content - We'll add minimal content */}
        <TabsContent value="marketplace">
          <Card>
            <CardHeader>
              <CardTitle>Marketplace Activity</CardTitle>
              <CardDescription>Your buying and selling history</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-10">
                <ShoppingBag className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-lg font-medium mb-2">Your marketplace activity will appear here</h3>
                <p className="text-muted-foreground mb-6">
                  Buy and sell plants, seeds, and gardening supplies with other members.
                </p>
                <Button>Browse Marketplace</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Learning Tab Content - We'll add minimal content */}
        <TabsContent value="learning">
          <Card>
            <CardHeader>
              <CardTitle>Learning & Growth</CardTitle>
              <CardDescription>Personalized recommendations and skills</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-10">
                <BookOpen className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-lg font-medium mb-2">Expand your gardening knowledge</h3>
                <p className="text-muted-foreground mb-6">
                  Get personalized plant recommendations and earn skill badges.
                </p>
                <Button>Explore Learning Resources</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default UserProfile;
