
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BarChart, PieChart, LineChart, Map, Bell, TreeDeciduous } from "lucide-react";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Legend, Line, LineChart as RechartsLineChart, Pie, PieChart as RechartsPieChart, Sector, Cell, ResponsiveContainer, BarChart as RechartsBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const Sustainability: React.FC = () => {
  // Sample data for charts
  const pieData = [
    { name: 'Achieved', value: 68, color: '#10b981' },
    { name: 'Remaining', value: 32, color: '#e5e7eb' },
  ];

  const lineData = [
    { month: 'Jan', co2: 12 },
    { month: 'Feb', co2: 19 },
    { month: 'Mar', co2: 32 },
    { month: 'Apr', co2: 45 },
    { month: 'May', co2: 56 },
  ];

  const barData = [
    { name: 'You', value: 68 },
    { name: 'City Avg', value: 45 },
    { name: 'Country Avg', value: 35 },
  ];

  const COLORS = ['#10b981', '#3b82f6', '#8b5cf6'];

  return (
    <div className="container mx-auto pt-24 px-4">
      <h1 className="text-3xl font-bold mb-8">Sustainability Tracker</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>CO₂ Savings</span>
              <Badge className="bg-green-600">↑ 12% this month</Badge>
            </CardTitle>
            <CardDescription>Based on your tree planting activity</CardDescription>
          </CardHeader>
          <CardContent className="pb-2">
            <div className="flex flex-col items-center">
              <div className="text-5xl font-bold text-green-600">68kg</div>
              <p className="text-muted-foreground mt-2">of CO₂ absorbed</p>
              <div className="text-sm mt-4 bg-muted/30 p-2 rounded-md w-full text-center">
                <span className="font-medium">3.1kg</span> CO₂ absorbed last week
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">View Detailed Report</Button>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Goal Progress</CardTitle>
            <CardDescription>You're 68% to your annual goal of 100kg</CardDescription>
          </CardHeader>
          <CardContent className="pb-2">
            <ChartContainer className="h-[180px]" config={{}} >
              <RechartsPieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <text x="50%" y="50%" dy={8} textAnchor="middle" fill="#888" fontSize={14}>
                  68%
                </text>
              </RechartsPieChart>
            </ChartContainer>
          </CardContent>
          <CardFooter className="flex justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="text-sm">Achieved</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-gray-200"></div>
              <span className="text-sm">Remaining</span>
            </div>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Community Impact</CardTitle>
            <CardDescription>Combined stats from all local members</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="flex flex-col">
                <span className="text-4xl font-bold">1,203</span>
                <span className="text-muted-foreground">Trees planted</span>
              </div>
              <div className="flex flex-col">
                <span className="text-4xl font-bold">26.5</span>
                <span className="text-muted-foreground">Tons of CO₂ absorbed</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              <Map className="h-4 w-4 mr-2" />
              View Impact Map
            </Button>
          </CardFooter>
        </Card>
      </div>
      
      <h2 className="text-2xl font-bold mb-6">Impact Visualization</h2>
      
      <Tabs defaultValue="line">
        <TabsList className="mb-6">
          <TabsTrigger value="line">
            <LineChart className="h-4 w-4 mr-2" />
            CO₂ Over Time
          </TabsTrigger>
          <TabsTrigger value="bar">
            <BarChart className="h-4 w-4 mr-2" />
            Comparison
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="line">
          <Card>
            <CardHeader>
              <CardTitle>CO₂ Reduction Over Time</CardTitle>
              <CardDescription>Tracking your monthly environmental impact</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer className="h-[300px]" config={{}}>
                <RechartsLineChart
                  data={lineData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
                >
                  <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.3} />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="co2"
                    stroke="#10b981"
                    strokeWidth={2}
                    activeDot={{ r: 8 }}
                  />
                </RechartsLineChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="bar">
          <Card>
            <CardHeader>
              <CardTitle>Comparison with Community</CardTitle>
              <CardDescription>See how your efforts compare with others</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer className="h-[300px]" config={{}}>
                <RechartsBarChart
                  data={barData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
                >
                  <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.3} />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#10b981" />
                </RechartsBarChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      
      <h2 className="text-2xl font-bold mt-10 mb-6">Carbon Credit Integration</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Reward Exchange</CardTitle>
            <CardDescription>Convert your CO₂ savings to rewards</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-muted/30 p-4 rounded-md">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">Garden Store Coupon</p>
                    <p className="text-sm text-muted-foreground">100kg CO₂ = $5 discount</p>
                  </div>
                  <Badge variant="outline">Available</Badge>
                </div>
              </div>
              <div className="bg-muted/30 p-4 rounded-md">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">Free Sapling</p>
                    <p className="text-sm text-muted-foreground">200kg CO₂ = 1 free tree</p>
                  </div>
                  <Badge variant="outline">32kg more needed</Badge>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Redeem Rewards</Button>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Fund Reforestation</CardTitle>
            <CardDescription>Donate your credits to global projects</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-muted/30 p-4 rounded-md">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">Amazon Rainforest Initiative</p>
                    <p className="text-sm text-muted-foreground">Help restore deforested areas</p>
                  </div>
                  <TreeDeciduous className="h-6 w-6 text-green-600" />
                </div>
              </div>
              <div className="bg-muted/30 p-4 rounded-md">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">Urban Greening Project</p>
                    <p className="text-sm text-muted-foreground">Support tree planting in cities</p>
                  </div>
                  <TreeDeciduous className="h-6 w-6 text-green-600" />
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full" variant="outline">Donate Credits</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Sustainability;
