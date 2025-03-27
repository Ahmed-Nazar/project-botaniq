
import React, { useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from 'react-router-dom';
import { Leaf, ShoppingBag, Calendar, Bell, Clock, Star } from "lucide-react";

const HomePage: React.FC = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.8;
        
        if (isVisible) {
          el.classList.add('animate-slide-up');
          el.classList.add('opacity-100');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    setTimeout(handleScroll, 100); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="pt-24 pb-12">
      <div className="container mx-auto px-6">
        {/* Welcome Banner */}
        <div className="relative mb-8 rounded-2xl overflow-hidden animate-fade-in">
          <div 
            className="absolute inset-0 z-[-1] bg-cover bg-center"
            style={{ 
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
              backgroundPosition: 'center',
              backgroundSize: 'cover'
            }}
          />
          <div className="py-10 px-8 md:py-16 md:px-12">
            <div className="max-w-2xl">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">Welcome Back, Gardener!</h1>
              <p className="text-lg mb-6 text-white/90">
                It's a perfect day to nurture your garden. Here's what you need to know today.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button 
                  size="lg" 
                  className="bg-white text-primary hover:bg-white/90"
                >
                  View My Garden
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="bg-transparent border-white text-white hover:bg-white/20"
                >
                  Today's Tasks
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Planting Calendar */}
          <Card className="glass hover:shadow-md transition-all animate-on-scroll opacity-0">
            <CardHeader className="pb-2">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Planting Calendar</CardTitle>
              <CardDescription>What to plant this season based on your region</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 rounded-lg bg-secondary/50">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                      <img 
                        src="https://images.unsplash.com/photo-1518977822534-7049a61ee0c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                        alt="Tomatoes" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium">Tomatoes</p>
                      <p className="text-xs text-muted-foreground">Best time to plant</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Bell className="h-4 w-4 text-muted-foreground mr-1" />
                    <span className="text-xs text-muted-foreground">3 days left</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center p-3 rounded-lg bg-secondary/50">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                      <img 
                        src="https://images.unsplash.com/photo-1595568136328-61fe1bc3f684?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80" 
                        alt="Lettuce" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium">Lettuce</p>
                      <p className="text-xs text-muted-foreground">Currently in season</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 text-muted-foreground mr-1" />
                    <span className="text-xs text-muted-foreground">Now</span>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full" asChild>
                <Link to="/planting">View Full Calendar</Link>
              </Button>
            </CardFooter>
          </Card>

          {/* Marketplace Spotlight */}
          <Card className="glass hover:shadow-md transition-all animate-on-scroll opacity-0" style={{ transitionDelay: '100ms' }}>
            <CardHeader className="pb-2">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                <ShoppingBag className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Marketplace Spotlight</CardTitle>
              <CardDescription>Trending products for your garden</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 rounded-lg bg-secondary/50">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                      <img 
                        src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                        alt="Garden Tools" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium">Pruning Set</p>
                      <p className="text-xs text-muted-foreground">Premium Tools</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-500 mr-1" />
                    <span className="text-xs text-muted-foreground">4.9</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center p-3 rounded-lg bg-secondary/50">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                      <img 
                        src="https://images.unsplash.com/photo-1585314540237-13cb52fa9523?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2564&q=80" 
                        alt="Seed Pack" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium">Herb Seeds</p>
                      <p className="text-xs text-muted-foreground">Organic Variety Pack</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-500 mr-1" />
                    <span className="text-xs text-muted-foreground">4.7</span>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full" asChild>
                <Link to="/marketplace">Visit Marketplace</Link>
              </Button>
            </CardFooter>
          </Card>

          {/* Quick Tips */}
          <Card className="glass hover:shadow-md transition-all animate-on-scroll opacity-0" style={{ transitionDelay: '200ms' }}>
            <CardHeader className="pb-2">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                <Leaf className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Gardening Tips</CardTitle>
              <CardDescription>Learn from expert gardeners</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="p-3 rounded-lg bg-secondary/50">
                  <h4 className="font-medium mb-1">Watering Schedule</h4>
                  <p className="text-sm text-muted-foreground">Water deeply and less frequently to encourage deep root growth. Early morning is best to minimize evaporation.</p>
                </div>
                
                <div className="p-3 rounded-lg bg-secondary/50">
                  <h4 className="font-medium mb-1">Natural Pest Control</h4>
                  <p className="text-sm text-muted-foreground">Plant marigolds around your vegetables to deter pests naturally and attract beneficial insects.</p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                More Tips
              </Button>
            </CardFooter>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="bg-primary/10 rounded-2xl p-8 animate-on-scroll opacity-0">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-bold mb-2">Ready to expand your garden?</h3>
              <p className="text-muted-foreground">Explore our marketplace for quality seeds, plants, and tools.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <Link to="/planting">
                  <Leaf className="h-4 w-4 mr-2" />
                  Planting Guide
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/marketplace">
                  <ShoppingBag className="h-4 w-4 mr-2" />
                  Marketplace
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
