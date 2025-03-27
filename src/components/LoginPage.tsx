
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Facebook, Mail, User, KeyRound, X } from "lucide-react";
import { toast } from 'sonner';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("login");
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    username: ''
  });
  const [forgotPassword, setForgotPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate authentication process
    setTimeout(() => {
      setIsLoading(false);
      toast.success("Successfully signed in!");
      navigate('/home');
    }, 1500);
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Validation
    if (formData.password !== formData.confirmPassword) {
      setIsLoading(false);
      toast.error("Passwords do not match");
      return;
    }
    
    // Simulate registration process
    setTimeout(() => {
      setIsLoading(false);
      toast.success("Account created successfully!");
      navigate('/home');
    }, 1500);
  };

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate password reset email
    setTimeout(() => {
      setIsLoading(false);
      toast.success("Password reset email sent! Please check your inbox.");
      setForgotPassword(false);
    }, 1500);
  };

  const handleSocialLogin = (provider: string) => {
    setIsLoading(true);
    
    // Simulate social login
    setTimeout(() => {
      setIsLoading(false);
      toast.success(`Signed in with ${provider}!`);
      navigate('/home');
    }, 1500);
  };

  if (forgotPassword) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 bg-accent/30">
        <Card className="w-full max-w-md mx-auto glass animate-fade-in">
          <CardHeader>
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Mail className="h-6 w-6 text-primary" />
              </div>
            </div>
            <CardTitle className="text-2xl font-semibold text-center">Reset Password</CardTitle>
            <CardDescription className="text-center">
              Enter your email address and we'll send you a link to reset your password.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleResetPassword} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Sending..." : "Send Reset Link"}
              </Button>
            </form>
          </CardContent>
          <CardFooter>
            <Button 
              variant="link" 
              onClick={() => setForgotPassword(false)}
              className="mx-auto"
            >
              Back to login
            </Button>
          </CardFooter>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-accent/30">
      <Card className="w-full max-w-md mx-auto glass animate-fade-in">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <User className="h-6 w-6 text-primary" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold">Welcome to Botaniq</CardTitle>
          <CardDescription>Sign in to access your garden</CardDescription>
        </CardHeader>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <CardContent>
            <div className="flex justify-center mb-6">
              <TabsList className="grid w-full max-w-md grid-cols-2">
                <TabsTrigger value="login" className="rounded-l-md">Sign In</TabsTrigger>
                <TabsTrigger value="register" className="rounded-r-md">Sign Up</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="login" className="animate-slide-up">
              <form onSubmit={handleSignIn} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="username">Username</Label>
                  <Input
                    id="username"
                    name="username"
                    type="text"
                    placeholder="johndoe"
                    value={formData.username}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Password</Label>
                    <Button 
                      variant="link" 
                      onClick={() => setForgotPassword(true)} 
                      className="p-0 h-auto text-xs"
                    >
                      Forgot password?
                    </Button>
                  </div>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "Signing in..." : "Sign In"}
                </Button>
              </form>
            </TabsContent>
            
            <TabsContent value="register" className="animate-slide-up">
              <form onSubmit={handleSignUp} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="username">Username</Label>
                  <Input
                    id="username"
                    name="username"
                    type="text"
                    placeholder="johndoe"
                    value={formData.username}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    placeholder="••••••••"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "Creating account..." : "Create Account"}
                </Button>
              </form>
            </TabsContent>
            
            <div className="relative mt-6">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Or continue with
                </span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-2 mt-4">
              <Button 
                variant="outline" 
                onClick={() => handleSocialLogin('Google')}
                className="w-full"
                disabled={isLoading}
              >
                <Mail className="h-4 w-4 mr-2" />
                Google
              </Button>
              <Button 
                variant="outline" 
                onClick={() => handleSocialLogin('Facebook')}
                className="w-full"
                disabled={isLoading}
              >
                <Facebook className="h-4 w-4 mr-2" />
                Facebook
              </Button>
            </div>
          </CardContent>
        </Tabs>
      </Card>
    </div>
  );
};

export default LoginPage;
