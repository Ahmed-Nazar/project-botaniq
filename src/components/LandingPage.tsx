
import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { Link } from 'react-router-dom';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  const featuresRef = useRef<HTMLDivElement>(null);

  const scrollToFeatures = () => {
    if (featuresRef.current) {
      featuresRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
    setTimeout(handleScroll, 500); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 z-[-1] bg-cover bg-center bg-no-repeat subtle-pattern"
          style={{ 
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }}
        />
        
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight animate-slide-down">
              Welcome to Botaniq
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 animate-slide-down" style={{ animationDelay: '200ms' }}>
              Discover the joy of growing plants with expert guidance and community support
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-slide-down" style={{ animationDelay: '400ms' }}>
              <Button 
                size="lg" 
                className="text-lg"
                asChild
              >
                <Link to="/login">Get Started</Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg text-white border-white hover:bg-white/20 hover:text-white"
                onClick={scrollToFeatures}
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Button 
            variant="ghost" 
            size="icon" 
            className="rounded-full text-white hover:bg-white/20 hover:text-white"
            onClick={scrollToFeatures}
          >
            <ArrowDown className="h-6 w-6" />
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="py-20 bg-accent/50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Why Choose Botaniq?</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm animate-on-scroll opacity-0 transition-all duration-500 transform translate-y-4">
              <div className="h-14 w-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Guidance</h3>
              <p className="text-gray-600">Get personalized planting advice for medicinal plants, flowers, and preservative herbs.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm animate-on-scroll opacity-0 transition-all duration-500 transform translate-y-4" style={{ transitionDelay: '100ms' }}>
              <div className="h-14 w-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Community Support</h3>
              <p className="text-gray-600">Connect with fellow gardeners, share tips, and showcase your gardening achievements.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm animate-on-scroll opacity-0 transition-all duration-500 transform translate-y-4" style={{ transitionDelay: '200ms' }}>
              <div className="h-14 w-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Marketplace</h3>
              <p className="text-gray-600">Find quality seeds, tools, and plants from trusted suppliers in our curated marketplace.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-on-scroll opacity-0 transition-all duration-500 transform translate-y-4">
                <p className="text-sm uppercase tracking-wider text-primary mb-2 font-semibold">Join our community</p>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Your Green Journey Today</h2>
                <p className="text-lg mb-8 text-gray-600">
                  Sign up now to access personalized planting schedules, connect with other gardeners, and explore our marketplace of quality gardening supplies.
                </p>
                <ul className="space-y-3 mb-8">
                  {['Personalized plant recommendations', 'Seasonal planting reminders', 'Access to premium content', 'Connect with local gardeners'].map((item, index) => (
                    <li key={index} className="flex items-center">
                      <span className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Button asChild>
                  <Link to="/login">Join Botaniq Today</Link>
                </Button>
              </div>
              
              <div className="animate-on-scroll opacity-0 transition-all duration-500 transform translate-y-4" style={{ transitionDelay: '200ms' }}>
                <img 
                  src="https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Plants growing" 
                  className="rounded-xl shadow-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-accent py-12">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h2 className="flex items-center justify-center text-xl font-bold mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
              Botaniq
            </h2>
            <p className="text-sm text-gray-600 mb-8">
              © {new Date().getFullYear()} Botaniq. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
