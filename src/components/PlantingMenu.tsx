
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
      name: "Tomatoes",
      image: "https://images.unsplash.com/photo-1518977822534-7049a61ee0c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      season: "Spring",
      growthTime: "70-85 days",
      waterNeeds: "Regular",
      sunlight: "Full sun",
      difficulty: "Beginner",
      description: "Tomatoes are warm-season plants that thrive in full sun and well-drained soil."
    },
    {
      name: "Lettuce",
      image: "https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      season: "Spring/Fall",
      growthTime: "45-60 days",
      waterNeeds: "Moderate",
      sunlight: "Partial shade",
      difficulty: "Beginner",
      description: "Lettuce is a cool-season crop that grows best in spring and fall."
    },
    {
      name: "Carrots",
      image: "https://images.unsplash.com/photo-1598170845056-d10814757416?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      season: "Spring/Fall",
      growthTime: "60-80 days",
      waterNeeds: "Moderate",
      sunlight: "Full sun",
      difficulty: "Intermediate",
      description: "Carrots grow best in loose, sandy soil free from rocks and debris."
    },
    {
      name: "Bell Peppers",
      image: "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      season: "Summer",
      growthTime: "70-90 days",
      waterNeeds: "Regular",
      sunlight: "Full sun",
      difficulty: "Intermediate",
      description: "Bell peppers need warm soil and a long growing season to produce well."
    },
    {
      name: "Basil",
      image: "https://images.unsplash.com/photo-1600788886242-5c96aabe3757?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      season: "Summer",
      growthTime: "50-70 days",
      waterNeeds: "Moderate",
      sunlight: "Full sun",
      difficulty: "Beginner",
      description: "Basil is a heat-loving herb that adds delicious flavor to many dishes."
    },
    {
      name: "Spinach",
      image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      season: "Spring/Fall",
      growthTime: "40-50 days",
      waterNeeds: "Moderate",
      sunlight: "Partial shade",
      difficulty: "Beginner",
      description: "Spinach is a fast-growing, cool-weather crop rich in vitamins and minerals."
    }
  ];

  const filteredPlants = searchQuery 
    ? seasonalPlants.filter(plant => 
        plant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
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
            <CardDescription>Season: {plant.season}</CardDescription>
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
            <h1 className="text-3xl font-bold mb-2">Planting Guide</h1>
            <p className="text-muted-foreground">Discover what to plant based on season and your growing zone</p>
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

        <Tabs defaultValue="spring" className="mb-8">
          <TabsList className="w-full md:w-auto grid grid-cols-4 mb-6">
            <TabsTrigger value="spring">Spring</TabsTrigger>
            <TabsTrigger value="summer">Summer</TabsTrigger>
            <TabsTrigger value="fall">Fall</TabsTrigger>
            <TabsTrigger value="winter">Winter</TabsTrigger>
          </TabsList>
          
          {["spring", "summer", "fall", "winter"].map(season => (
            <TabsContent key={season} value={season} className="mt-0">
              {filteredPlants.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredPlants
                    .filter(plant => plant.season.toLowerCase().includes(season.toLowerCase()))
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
