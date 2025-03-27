
import React from 'react';
import { Lock } from "lucide-react";
import AuthForm from './AuthForm';

const LoginPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-accent/30">
      <div className="w-full max-w-md">
        <div className="text-center mb-6">
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <Lock className="h-6 w-6 text-primary" />
            </div>
          </div>
          <h1 className="text-2xl font-bold">Welcome to Botaniq</h1>
          <p className="text-muted-foreground">Sign in to access your garden</p>
        </div>
        <AuthForm />
      </div>
    </div>
  );
};

export default LoginPage;
