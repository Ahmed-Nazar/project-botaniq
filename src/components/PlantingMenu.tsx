
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Calendar, Clock, Droplets, Sun, ThermometerSun, Search, Info } from "lucide-react";

const PlantingMenu: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const seasonalPlants = [
    {
      name: "Lavender",
      image: "https://images.unsplash.com/photo-1458449736393-11b3fa25c7f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "Flowers",
      season: "Spring/Summer",
      growthTime: "90-120 days",
      waterNeeds: "Low",
      sunlight: "Full sun",
      difficulty: "Beginner",
      description: "Fragrant perennial with beautiful purple blooms. Great for attracting bees and butterflies."
    },
    {
      name: "Aloe Vera",
      image: "https://images.unsplash.com/photo-1596547609652-9cf5d8886a18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "Medicinal",
      season: "Year-round",
      growthTime: "3-4 years (mature)",
      waterNeeds: "Low",
      sunlight: "Partial sun",
      difficulty: "Beginner",
      description: "Succulent plant known for its medicinal properties and ease of care."
    },
    {
      name: "Rosemary",
      image: "https://images.unsplash.com/photo-1515586000433-45406d8e6662?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "Preservative",
      season: "Spring",
      growthTime: "80-100 days",
      waterNeeds: "Low",
      sunlight: "Full sun",
      difficulty: "Beginner",
      description: "Aromatic herb used as a natural preservative and adds flavor to dishes."
    },
    {
      name: "Chamomile",
      image: "https://images.unsplash.com/photo-1566554273541-37a9ca77b91f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "Medicinal",
      season: "Spring/Summer",
      growthTime: "60-90 days",
      waterNeeds: "Moderate",
      sunlight: "Full sun",
      difficulty: "Intermediate",
      description: "Daisy-like flowers known for their calming properties and medicinal uses."
    },
    {
      name: "Roses",
      image: "https://images.unsplash.com/photo-1559563362-c667ba5f5480?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "Flowers",
      season: "Spring/Summer",
      growthTime: "120-180 days",
      waterNeeds: "Moderate",
      sunlight: "Full sun",
      difficulty: "Intermediate",
      description: "Classic garden flowers with beautiful blooms and various fragrances."
    },
    {
      name: "Thyme",
      image: "https://images.unsplash.com/photo-1550005809-91ad75fb315f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      category: "Preservative",
      season: "Spring/Summer",
      growthTime: "70-90 days",
      waterNeeds: "Low",
      sunlight: "Full sun",
      difficulty: "Beginner",
      description: "Hardy herb used as a natural preservative with antibacterial properties."
    }
  ];

  // Filter plants based on search query and category
  const filteredPlants = searchQuery 
    ? seasonalPlants.filter(plant => 
        plant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        plant.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        plant.season.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : seasonalPlants;

  const PlantCard = ({ plant }: { plant: typeof seasonalPlants[0] }) => (
    <Card className="overflow-hidden hover:shadow-md transition-all animate-scale-in">
      <div className="aspect-video w-full overflow-hidden">
        <img 
          src={plant.image} 
          alt={plant.name} 
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
        />
      </div>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle>{plant.name}</CardTitle>
            <CardDescription>Category: {plant.category}</CardDescription>
          </div>
          <div className="bg-primary/10 px-3 py-1 rounded-full text-xs font-medium text-primary">
            {plant.difficulty}
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
            <span>{plant.growthTime}</span>
          </div>
          <div className="flex items-center">
            <Droplets className="h-4 w-4 mr-2 text-muted-foreground" />
            <span>{plant.waterNeeds}</span>
          </div>
          <div className="flex items-center">
            <Sun className="h-4 w-4 mr-2 text-muted-foreground" />
            <span>{plant.sunlight}</span>
          </div>
          <div className="flex items-center">
            <ThermometerSun className="h-4 w-4 mr-2 text-muted-foreground" />
            <span>{plant.season}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full">
          <Info className="h-4 w-4 mr-2" />
          Plant Details
        </Button>
      </CardFooter>
    </Card>
  );

  return (
    <div className="pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold mb-2">Botaniq Planting Guide</h1>
            <p className="text-muted-foreground">Discover our selection of flowers, medicinal plants, and preservative herbs</p>
          </div>
          <div className="relative w-full md:w-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search plants..." 
              className="pl-10 w-full md:w-[300px]"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <Tabs defaultValue="all" className="mb-8">
          <TabsList className="w-full md:w-auto grid grid-cols-4 mb-6">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="flowers">Flowers</TabsTrigger>
            <TabsTrigger value="medicinal">Medicinal</TabsTrigger>
            <TabsTrigger value="preservative">Preservative</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="mt-0">
            {filteredPlants.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPlants.map((plant, index) => (
                  <PlantCard key={index} plant={plant} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">No Plants Found</h3>
                <p className="text-muted-foreground mb-4">
                  Try adjusting your search or filters to find what you're looking for.
                </p>
                <Button variant="outline" onClick={() => setSearchQuery('')}>
                  Clear Search
                </Button>
              </div>
            )}
          </TabsContent>
          
          {["flowers", "medicinal", "preservative"].map(category => (
            <TabsContent key={category} value={category} className="mt-0">
              {filteredPlants.filter(plant => 
                plant.category.toLowerCase() === category.toLowerCase()
              ).length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredPlants
                    .filter(plant => plant.category.toLowerCase() === category.toLowerCase())
                    .map((plant, index) => (
                      <PlantCard key={index} plant={plant} />
                    ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Calendar className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">No Plants Found</h3>
                  <p className="text-muted-foreground mb-4">
                    Try adjusting your search or filters to find what you're looking for.
                  </p>
                  <Button variant="outline" onClick={() => setSearchQuery('')}>
                    Clear Search
                  </Button>
                </div>
              )}
            </TabsContent>
          ))}
        </Tabs>

        {/* Calendar Section */}
        <div className="bg-primary/10 rounded-2xl p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-bold mb-2">Need More Personalized Advice?</h3>
              <p className="text-muted-foreground">View your personalized planting calendar based on your location.</p>
            </div>
            <Button>
              <Calendar className="h-4 w-4 mr-2" />
              My Planting Calendar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantingMenu;
