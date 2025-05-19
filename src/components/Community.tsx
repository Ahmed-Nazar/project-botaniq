import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageSquare, Award, Calendar, ThumbsUp, ThumbsDown, Check } from "lucide-react";

// Fake user data for forum posts
const forumUsers = [
  { id: 1, name: 'John Smith', avatar: 'https://i.pravatar.cc/150?img=1', role: 'Expert Gardener' },
  { id: 2, name: 'Maria Garcia', avatar: 'https://i.pravatar.cc/150?img=5', role: 'Tree Enthusiast' },
  { id: 3, name: 'Alex Wong', avatar: 'https://i.pravatar.cc/150?img=3', role: 'Urban Farmer' },
  { id: 4, name: 'Sarah Johnson', avatar: 'https://i.pravatar.cc/150?img=9', role: 'Botanist' },
  { id: 5, name: 'Michael Brown', avatar: 'https://i.pravatar.cc/150?img=12', role: 'Sustainability Expert' }
];

// Forum post data
const forumTopics = [
  { 
    id: 1, 
    category: 'Plant Care Tips',
    title: 'How to revive a dying sapling?', 
    author: forumUsers[0],
    answers: 23,
    views: 156,
    tags: ['Help', 'Hot Topic'],
    date: '3 days ago'
  },
  { 
    id: 2, 
    category: 'Plant Care Tips',
    title: 'Watering schedule for tropical plants?', 
    author: forumUsers[1],
    answers: 17,
    views: 89,
    tags: ['Solved'],
    date: '1 week ago'
  },
  { 
    id: 3, 
    category: 'Species Spotlights',
    title: 'Best native trees for urban areas', 
    author: forumUsers[2],
    answers: 31,
    views: 210,
    tags: ['Trending'],
    date: '2 days ago'
  },
  { 
    id: 4, 
    category: 'Species Spotlights',
    title: 'Spotlight: Baobab Trees', 
    author: forumUsers[3],
    answers: 12,
    views: 75,
    tags: ['Expert Post'],
    date: '5 days ago'
  },
  { 
    id: 5, 
    category: 'Troubleshooting',
    title: 'Yellow leaves on my neem tree', 
    author: forumUsers[4],
    answers: 15,
    views: 104,
    tags: ['Solved'],
    date: '6 days ago'
  },
  { 
    id: 6, 
    category: 'Troubleshooting',
    title: 'Pest control for indoor plants', 
    author: forumUsers[0],
    answers: 28,
    views: 187,
    tags: ['Verified'],
    date: '4 days ago'
  }
];

const Community: React.FC = () => {
  const [activeTab, setActiveTab] = useState('forums');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredTopics, setFilteredTopics] = useState(forumTopics);
  
  // Filter topics based on search term
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);
    
    if (term.trim() === '') {
      setFilteredTopics(forumTopics);
    } else {
      setFilteredTopics(
        forumTopics.filter(topic => 
          topic.title.toLowerCase().includes(term.toLowerCase()) ||
          topic.category.toLowerCase().includes(term.toLowerCase())
        )
      );
    }
  };

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
          <div className="flex justify-between mb-6">
            <div className="relative w-full max-w-md">
              <Input
                placeholder="Search discussions..."
                value={searchTerm}
                onChange={handleSearch}
                className="pr-10"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <MessageSquare className="h-4 w-4 text-muted-foreground" />
              </div>
            </div>
            <Button>
              <MessageSquare className="h-4 w-4 mr-2" />
              New Discussion
            </Button>
          </div>

          <Card>
            <CardHeader className="bg-muted/30">
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-7 font-medium">Topic</div>
                <div className="col-span-2 text-center font-medium">Replies</div>
                <div className="col-span-3 text-right font-medium">Posted by</div>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              {filteredTopics.length > 0 ? (
                <div className="divide-y">
                  {filteredTopics.map((topic) => (
                    <div key={topic.id} className="p-4">
                      <div className="grid grid-cols-12 gap-4 items-center">
                        <div className="col-span-12 md:col-span-7">
                          <h4 className="font-medium mb-1">{topic.title}</h4>
                          <div className="flex flex-wrap items-center gap-2">
                            <Badge variant="outline">{topic.category}</Badge>
                            {topic.tags.map((tag, index) => (
                              <Badge 
                                key={index} 
                                className={
                                  tag === 'Solved' ? 'bg-green-500' : 
                                  (tag === 'Hot Topic' || tag === 'Trending') ? 'bg-red-500' : 
                                  'bg-blue-500'
                                }
                              >
                                {tag}
                              </Badge>
                            ))}
                            <span className="text-xs text-muted-foreground">{topic.date}</span>
                          </div>
                        </div>
                        <div className="col-span-4 md:col-span-2 text-center">
                          <div className="flex flex-col items-center">
                            <span className="text-lg font-medium">{topic.answers}</span>
                            <span className="text-xs text-muted-foreground">replies</span>
                          </div>
                        </div>
                        <div className="col-span-8 md:col-span-3">
                          <div className="flex items-center justify-end gap-2">
                            <div className="text-right">
                              <div className="font-medium">{topic.author.name}</div>
                              <div className="text-xs text-muted-foreground">{topic.author.role}</div>
                            </div>
                            <Avatar>
                              <AvatarImage src={topic.author.avatar} alt={topic.author.name} />
                              <AvatarFallback>{topic.author.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-6 text-center">
                  <p className="text-muted-foreground">No topics found matching your search.</p>
                </div>
              )}
            </CardContent>
            <CardFooter className="flex justify-center p-4">
              <nav>
                <ul className="flex gap-1">
                  <li>
                    <Button variant="outline" size="sm" disabled>Previous</Button>
                  </li>
                  <li>
                    <Button variant="outline" size="sm" className="bg-primary text-primary-foreground">1</Button>
                  </li>
                  <li>
                    <Button variant="outline" size="sm">2</Button>
                  </li>
                  <li>
                    <Button variant="outline" size="sm">3</Button>
                  </li>
                  <li>
                    <Button variant="outline" size="sm">Next</Button>
                  </li>
                </ul>
              </nav>
            </CardFooter>
          </Card>
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
                      <AvatarImage src="https://i.pravatar.cc/150?img=1" />
                      <AvatarFallback>JS</AvatarFallback>
                    </Avatar>
                    <Avatar className="h-8 w-8 border-2 border-background">
                      <AvatarImage src="https://i.pravatar.cc/150?img=5" />
                      <AvatarFallback>MG</AvatarFallback>
                    </Avatar>
                    <Avatar className="h-8 w-8 border-2 border-background">
                      <AvatarImage src="https://i.pravatar.cc/150?img=3" />
                      <AvatarFallback>AW</AvatarFallback>
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
                      <AvatarImage src="https://i.pravatar.cc/150?img=5" />
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
                      <AvatarImage src="https://i.pravatar.cc/150?img=12" />
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
