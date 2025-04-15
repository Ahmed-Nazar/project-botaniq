
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageSquare, Award, Calendar, ThumbsUp, ThumbsDown, Check } from "lucide-react";

const Community: React.FC = () => {
  const [activeTab, setActiveTab] = useState('forums');

  return (
    <div className="container mx-auto pt-24 px-4">
      <h1 className="text-3xl font-bold mb-8">Community</h1>
      
      <Tabs defaultValue="forums" onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="forums">
            <MessageSquare className="h-4 w-4 mr-2" />
            Discussion Forums
          </TabsTrigger>
          <TabsTrigger value="challenges">
            <Award className="h-4 w-4 mr-2" />
            Challenges & Campaigns
          </TabsTrigger>
          <TabsTrigger value="amas">
            <Calendar className="h-4 w-4 mr-2" />
            Expert AMAs
          </TabsTrigger>
        </TabsList>
        
        {/* Discussion Forums */}
        <TabsContent value="forums">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Plant Care Tips</CardTitle>
                <CardDescription>Share and find tips on how to care for your plants</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="p-3 bg-muted/50 rounded-md">
                    <p className="font-medium">How to revive a dying sapling?</p>
                    <div className="flex items-center text-sm text-muted-foreground mt-1">
                      <span>23 answers</span>
                      <Badge variant="outline" className="ml-2">Hot Topic</Badge>
                    </div>
                  </li>
                  <li className="p-3 bg-muted/50 rounded-md">
                    <p className="font-medium">Watering schedule for tropical plants?</p>
                    <div className="flex items-center text-sm text-muted-foreground mt-1">
                      <span>17 answers</span>
                      <Badge variant="outline" className="ml-2 bg-green-100">Solved</Badge>
                    </div>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">View All Topics</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Species Spotlights</CardTitle>
                <CardDescription>Learn about different plant and tree species</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="p-3 bg-muted/50 rounded-md">
                    <p className="font-medium">Best native trees for urban areas</p>
                    <div className="flex items-center text-sm text-muted-foreground mt-1">
                      <span>31 answers</span>
                      <Badge variant="outline" className="ml-2">Trending</Badge>
                    </div>
                  </li>
                  <li className="p-3 bg-muted/50 rounded-md">
                    <p className="font-medium">Spotlight: Baobab Trees</p>
                    <div className="flex items-center text-sm text-muted-foreground mt-1">
                      <span>12 answers</span>
                      <Badge variant="outline" className="ml-2">Expert Post</Badge>
                    </div>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">View All Topics</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Troubleshooting</CardTitle>
                <CardDescription>Get help with plant problems and issues</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="p-3 bg-muted/50 rounded-md">
                    <p className="font-medium">Yellow leaves on my neem tree</p>
                    <div className="flex items-center text-sm text-muted-foreground mt-1">
                      <span>15 answers</span>
                      <Badge variant="outline" className="ml-2 bg-green-100">Solved</Badge>
                    </div>
                  </li>
                  <li className="p-3 bg-muted/50 rounded-md">
                    <p className="font-medium">Pest control for indoor plants</p>
                    <div className="flex items-center text-sm text-muted-foreground mt-1">
                      <span>28 answers</span>
                      <Badge variant="outline" className="ml-2">Verified</Badge>
                    </div>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">View All Topics</Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
        
        {/* Challenges & Campaigns */}
        <TabsContent value="challenges">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Plant 100 Trees This Month</CardTitle>
                <CardDescription>Community-wide challenge with progress tracking</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="w-full bg-muted rounded-full h-4">
                    <div className="bg-primary h-4 rounded-full" style={{ width: '65%' }}></div>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>65/100 trees planted</span>
                    <span>15 days left</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge>Top Contributors</Badge>
                    <Avatar className="h-8 w-8 border-2 border-background">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <Avatar className="h-8 w-8 border-2 border-background">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <Avatar className="h-8 w-8 border-2 border-background">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>AB</AvatarFallback>
                    </Avatar>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Join Challenge</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Zero-Waste Gardening Week</CardTitle>
                <CardDescription>Share photos of your compost setups</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-3 gap-2">
                    <div className="bg-muted h-24 rounded-md"></div>
                    <div className="bg-muted h-24 rounded-md"></div>
                    <div className="bg-muted h-24 rounded-md"></div>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>32 participants</span>
                    <span>3 days left</span>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <Badge className="bg-amber-500">Eco Champion</Badge>
                    <Badge variant="outline">Community Event</Badge>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Upload Photo</Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
        
        {/* Expert AMAs */}
        <TabsContent value="amas">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Soil pH Myths Debunked</CardTitle>
                    <CardDescription>With Dr. Maria Chen, Botanist</CardDescription>
                  </div>
                  <Badge className="bg-red-500">Live Now</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p>
                    Join Dr. Maria Chen as she explains common soil pH misconceptions and 
                    shares research-backed methods to optimize your soil for different plants.
                  </p>
                  <div className="flex items-center gap-2">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>MC</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">Dr. Maria Chen</p>
                      <p className="text-sm text-muted-foreground">PhD in Botany, University Research Center</p>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Join Session</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>How Trees Cool Cities</CardTitle>
                    <CardDescription>With James Peterson, Climate Scientist</CardDescription>
                  </div>
                  <Badge variant="outline">Upcoming • May 15</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p>
                    Discover the science behind urban heat islands and how strategic tree 
                    planting can reduce temperatures and energy consumption in cities.
                  </p>
                  <div className="flex items-center gap-2">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>JP</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">James Peterson</p>
                      <p className="text-sm text-muted-foreground">Climate Research Institute</p>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex gap-2">
                <Button className="flex-1">Set Reminder</Button>
                <Button variant="outline" className="flex-1">View Details</Button>
              </CardFooter>
            </Card>

            <h3 className="text-xl font-semibold mt-8 mb-4">Archived Sessions</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {["Rainwater Harvesting Basics", "Native Plants for Wildlife", "Urban Farming Techniques"].map((title, i) => (
                <Card key={i}>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <p className="text-sm text-muted-foreground">Recorded on April {5 + i}, 2025</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" size="sm" className="w-full">Watch Recording</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Community;
