import React, { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Award, Calendar, Check, MessageSquare, Search, ThumbsDown, ThumbsUp } from "lucide-react";
import { supabase, ForumTopic, ForumPost, User } from "@/lib/supabase";
import { toast } from "@/hooks/use-toast";

const Community: React.FC = () => {
  const [activeTab, setActiveTab] = useState('forums');
  const [searchQuery, setSearchQuery] = useState("");
  const [topics, setTopics] = useState<ForumTopic[]>([]);
  const [filteredTopics, setFilteredTopics] = useState<ForumTopic[]>([]);
  const [selectedTopic, setSelectedTopic] = useState<ForumTopic | null>(null);
  const [showTopicDialog, setShowTopicDialog] = useState(false);
  const [topicPosts, setTopicPosts] = useState<ForumPost[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch forum topics with user data
  useEffect(() => {
    const fetchTopics = async () => {
      setLoading(true);
      try {
        const { data, error } = await supabase
          .from('forums')
          .select('*');
          
        if (error) throw error;
          
        // Get user data for each topic
        const topicsWithUsers = await Promise.all(
          data.map(async (topic) => {
            const { data: userData } = await supabase
              .from('users_demo')
              .select('*')
              .eq('id', topic.created_by)
              .single();
              
            return { ...topic, user: userData };
          })
        );
        
        setTopics(topicsWithUsers);
        setFilteredTopics(topicsWithUsers);
      } catch (error) {
        console.error('Error fetching topics:', error);
        toast({
          title: "Failed to load topics",
          description: "Please try again later",
          variant: "destructive"
        });
      } finally {
        setLoading(false);
      }
    };
    
    fetchTopics();
  }, []);

  // Handle search filtering
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredTopics(topics);
    } else {
      const filtered = topics.filter(topic => 
        topic.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (topic.description && topic.description.toLowerCase().includes(searchQuery.toLowerCase()))
      );
      setFilteredTopics(filtered);
    }
  }, [searchQuery, topics]);

  // Fetch posts for a specific topic
  const fetchTopicPosts = async (topicId: string) => {
    try {
      const { data, error } = await supabase
        .from('forum_posts')
        .select('*')
        .eq('forum_id', topicId);
        
      if (error) throw error;
      
      // Get user data for each post
      const postsWithUsers = await Promise.all(
        data.map(async (post) => {
          const { data: userData } = await supabase
            .from('users_demo')
            .select('*')
            .eq('id', post.created_by)
            .single();
            
          return { ...post, user: userData };
        })
      );
      
      setTopicPosts(postsWithUsers);
    } catch (error) {
      console.error('Error fetching posts:', error);
      toast({
        title: "Failed to load discussion",
        description: "Please try again later",
        variant: "destructive"
      });
    }
  };

  const handleViewTopic = (topic: ForumTopic) => {
    setSelectedTopic(topic);
    fetchTopicPosts(topic.id);
    setShowTopicDialog(true);
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
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
              <Input
                placeholder="Search forums by title or description..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-4">
            {loading ? (
              <Card>
                <CardContent className="p-8 text-center">
                  <p className="text-muted-foreground">Loading discussions...</p>
                </CardContent>
              </Card>
            ) : filteredTopics.length === 0 ? (
              <Card>
                <CardContent className="p-8 text-center">
                  <p className="text-muted-foreground">No topics found matching your search.</p>
                </CardContent>
              </Card>
            ) : (
              filteredTopics.map((topic) => (
                <Card key={topic.id} className="hover:bg-accent/20 transition-colors cursor-pointer" onClick={() => handleViewTopic(topic)}>
                  <CardContent className="p-4">
                    <div className="flex items-start gap-4">
                      <Avatar className="h-10 w-10 border-2 border-background">
                        <AvatarImage src={topic.user?.avatar_url} />
                        <AvatarFallback>{topic.user?.username.substring(0, 2).toUpperCase()}</AvatarFallback>
                      </Avatar>
                      
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-medium text-lg">{topic.title}</h3>
                            <p className="text-sm text-muted-foreground mb-2">
                              Posted by {topic.user?.username || "Unknown"}
                              {topic.user?.is_pro && (
                                <Badge className="ml-2 bg-amber-500 hover:bg-amber-600">PRO</Badge>
                              )}
                            </p>
                            <p className="text-sm line-clamp-2">{topic.description}</p>
                          </div>
                          <Badge variant="outline">{topic.category}</Badge>
                        </div>
                        
                        <div className="flex items-center text-sm text-muted-foreground mt-4">
                          <MessageSquare size={16} className="mr-1" />
                          <span>{topic.replies_count} replies</span>
                          <span className="mx-2">•</span>
                          <span>{new Date(topic.created_at).toLocaleDateString()}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </TabsContent>
        
        {/* Challenges & Campaigns Tab (Keeping existing content) */}
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
        
        {/* Expert AMAs Tab (Keeping existing content) */}
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
      
      {/* Topic Discussion Dialog */}
      <Dialog open={showTopicDialog} onOpenChange={setShowTopicDialog}>
        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{selectedTopic?.title}</DialogTitle>
            <DialogDescription>
              Posted by {selectedTopic?.user?.username || "Unknown"} on {selectedTopic && new Date(selectedTopic.created_at).toLocaleDateString()}
            </DialogDescription>
          </DialogHeader>
          
          <div className="mb-6 p-4 bg-muted/30 rounded-lg">
            <p>{selectedTopic?.description}</p>
          </div>
          
          <h3 className="font-medium mb-4">Responses ({topicPosts.length})</h3>
          
          <div className="space-y-4">
            {topicPosts.map((post) => (
              <div key={post.id} className="p-4 border rounded-lg">
                <div className="flex items-start gap-3 mb-3">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={post.user?.avatar_url} />
                    <AvatarFallback>{post.user?.username.substring(0, 2).toUpperCase()}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex items-center">
                      <span className="font-medium">{post.user?.username || "Unknown User"}</span>
                      {post.user?.is_pro && <Badge className="ml-2 bg-amber-500 hover:bg-amber-600">PRO</Badge>}
                    </div>
                    <span className="text-xs text-muted-foreground">{new Date(post.created_at).toLocaleDateString()}</span>
                  </div>
                </div>
                <p>{post.content}</p>
                <div className="flex gap-3 mt-3">
                  <Button variant="ghost" size="sm" className="h-8 px-2">
                    <ThumbsUp size={14} className="mr-1" />
                    <span className="text-xs">Helpful</span>
                  </Button>
                  <Button variant="ghost" size="sm" className="h-8 px-2">
                    <ThumbsDown size={14} className="mr-1" />
                    <span className="text-xs">Not helpful</span>
                  </Button>
                  <Button variant="ghost" size="sm" className="h-8 px-2">
                    <MessageSquare size={14} className="mr-1" />
                    <span className="text-xs">Reply</span>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Community;
