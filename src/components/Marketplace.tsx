
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, ShoppingBag, ShoppingCart, Filter, Star, Heart } from "lucide-react";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from 'sonner';

const Marketplace: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [category, setCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popular');

  const products = [
    {
      id: 1,
      name: "Organic Vegetable Seeds Collection",
      image: "https://images.unsplash.com/photo-1631376330888-415fe91558be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      price: 24.99,
      rating: 4.8,
      reviews: 145,
      category: "seeds",
      featured: true,
      description: "Collection of 12 organic vegetable seed varieties, perfect for starting your garden.",
      inStock: true
    },
    {
      id: 2,
      name: "Premium Garden Tools Set",
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      price: 49.99,
      rating: 4.9,
      reviews: 87,
      category: "tools",
      featured: true,
      description: "High-quality garden tool set with ergonomic handles and durable stainless steel.",
      inStock: true
    },
    {
      id: 3,
      name: "Adjustable Plant Support Stakes",
      image: "https://images.unsplash.com/photo-1620127252536-03bdfcb67695?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      price: 15.99,
      rating: 4.6,
      reviews: 62,
      category: "supplies",
      featured: false,
      description: "Adjustable stakes to support growing plants, easy to install and reusable.",
      inStock: true
    },
    {
      id: 4,
      name: "Indoor Herb Garden Kit",
      image: "https://images.unsplash.com/photo-1626320297170-8d6ec0118649?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      price: 34.99,
      rating: 4.7,
      reviews: 123,
      category: "kits",
      featured: true,
      description: "Complete indoor herb garden kit with pots, soil, and seeds for 5 popular herbs.",
      inStock: true
    },
    {
      id: 5,
      name: "Organic Potting Soil",
      image: "https://images.unsplash.com/photo-1598880942571-c7feca34b432?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      price: 19.99,
      rating: 4.5,
      reviews: 56,
      category: "soils",
      featured: false,
      description: "Premium organic potting soil, perfect for container gardening and raised beds.",
      inStock: true
    },
    {
      id: 6,
      name: "Tomato Plant Starter Kit",
      image: "https://images.unsplash.com/photo-1592576224492-763c588f1bf0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      price: 22.99,
      rating: 4.7,
      reviews: 43,
      category: "kits",
      featured: false,
      description: "Everything you need to start growing delicious tomatoes at home.",
      inStock: false
    }
  ];

  // Apply filters and sorting
  let filteredProducts = [...products];
  
  // Filter by search query
  if (searchQuery) {
    filteredProducts = filteredProducts.filter(product =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }
  
  // Filter by category
  if (category !== 'all') {
    filteredProducts = filteredProducts.filter(product => product.category === category);
  }
  
  // Apply sorting
  switch (sortBy) {
    case 'price-low':
      filteredProducts.sort((a, b) => a.price - b.price);
      break;
    case 'price-high':
      filteredProducts.sort((a, b) => b.price - a.price);
      break;
    case 'rating':
      filteredProducts.sort((a, b) => b.rating - a.rating);
      break;
    case 'popular':
      filteredProducts.sort((a, b) => b.reviews - a.reviews);
      break;
    default:
      break;
  }

  const addToCart = (productId: number, productName: string) => {
    toast.success(`Added ${productName} to cart`);
  };

  const addToWishlist = (productId: number, productName: string) => {
    toast.success(`Added ${productName} to wishlist`);
  };

  return (
    <div className="pt-24 pb-12">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold mb-2">Garden Marketplace</h1>
            <p className="text-muted-foreground">Quality supplies for your garden needs</p>
          </div>
          <Button>
            <ShoppingCart className="h-4 w-4 mr-2" />
            Cart (0)
          </Button>
        </div>

        {/* Filters Section */}
        <div className="bg-secondary/50 rounded-xl p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search products..." 
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger className="w-full sm:w-[180px]">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="seeds">Seeds</SelectItem>
                  <SelectItem value="tools">Tools</SelectItem>
                  <SelectItem value="supplies">Supplies</SelectItem>
                  <SelectItem value="kits">Kits</SelectItem>
                  <SelectItem value="soils">Soils</SelectItem>
                </SelectContent>
              </Select>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popular">Most Popular</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Featured Products */}
        {filteredProducts.some(product => product.featured) && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts
                .filter(product => product.featured)
                .map(product => (
                  <Card key={product.id} className="overflow-hidden group hover:shadow-md transition-all">
                    <div className="relative aspect-[4/3] w-full overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
                      />
                      {product.featured && (
                        <Badge className="absolute top-3 left-3 bg-primary">Featured</Badge>
                      )}
                      {!product.inStock && (
                        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                          <p className="text-white font-semibold text-lg">Out of Stock</p>
                        </div>
                      )}
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="absolute top-3 right-3 bg-white/80 hover:bg-white text-primary rounded-full"
                        onClick={() => addToWishlist(product.id, product.name)}
                      >
                        <Heart className="h-4 w-4" />
                      </Button>
                    </div>
                    <CardHeader className="pb-2">
                      <CardTitle>{product.name}</CardTitle>
                      <CardDescription>{product.category.charAt(0).toUpperCase() + product.category.slice(1)}</CardDescription>
                    </CardHeader>
                    <CardContent className="pb-2">
                      <div className="flex justify-between items-center mb-2">
                        <p className="text-xl font-semibold">${product.price.toFixed(2)}</p>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 mr-1" />
                          <span>{product.rating} <span className="text-muted-foreground text-xs">({product.reviews})</span></span>
                        </div>
                      </div>
                      <p className="text-muted-foreground text-sm">{product.description}</p>
                    </CardContent>
                    <CardFooter>
                      <Button 
                        className="w-full"
                        disabled={!product.inStock}
                        onClick={() => addToCart(product.id, product.name)}
                      >
                        <ShoppingBag className="h-4 w-4 mr-2" />
                        {product.inStock ? "Add to Cart" : "Out of Stock"}
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
            </div>
          </div>
        )}

        {/* All Products */}
        <div>
          <h2 className="text-2xl font-bold mb-6">All Products</h2>
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map(product => (
                <Card key={product.id} className="overflow-hidden group hover:shadow-md transition-all">
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
                    />
                    {!product.inStock && (
                      <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                        <p className="text-white font-semibold text-lg">Out of Stock</p>
                      </div>
                    )}
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="absolute top-3 right-3 bg-white/80 hover:bg-white text-primary rounded-full"
                      onClick={() => addToWishlist(product.id, product.name)}
                    >
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle>{product.name}</CardTitle>
                    <CardDescription>{product.category.charAt(0).toUpperCase() + product.category.slice(1)}</CardDescription>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <div className="flex justify-between items-center mb-2">
                      <p className="text-xl font-semibold">${product.price.toFixed(2)}</p>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 mr-1" />
                        <span>{product.rating} <span className="text-muted-foreground text-xs">({product.reviews})</span></span>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm">{product.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      className="w-full"
                      disabled={!product.inStock}
                      onClick={() => addToCart(product.id, product.name)}
                    >
                      <ShoppingBag className="h-4 w-4 mr-2" />
                      {product.inStock ? "Add to Cart" : "Out of Stock"}
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">No Products Found</h3>
              <p className="text-muted-foreground mb-4">
                Try adjusting your search or filters to find what you're looking for.
              </p>
              <Button variant="outline" onClick={() => {
                setSearchQuery('');
                setCategory('all');
              }}>
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
