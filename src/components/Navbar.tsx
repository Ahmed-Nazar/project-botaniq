
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Leaf, ShoppingBag, Menu, X, User, LogOut } from "lucide-react";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';
  const isAuthenticated = location.pathname !== '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSignOut = () => {
    toast.success("Successfully signed out!");
    navigate('/');
  };

  const navbarClasses = `
    fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4
    ${isScrolled ? 'glass shadow-sm' : ''}
    ${isHomePage && !isScrolled ? 'text-white' : ''}
  `;

  const logoClasses = `text-xl font-bold flex items-center transition-all duration-300
    ${isHomePage && !isScrolled ? 'text-white' : 'text-primary'}
  `;

  const linkClasses = `
    px-4 py-2 rounded-md transition-all duration-200
    ${isHomePage && !isScrolled ? 'hover:bg-white/10' : 'hover:bg-primary/10'}
  `;

  const mobileMenuClasses = `
    fixed inset-0 z-40 flex flex-col pt-20 px-6 pb-6 space-y-4
    ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
    transition-transform duration-300 ease-in-out glass
  `;

  return (
    <nav className={navbarClasses}>
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link to={isAuthenticated ? '/home' : '/'} className={logoClasses}>
            <Leaf className="h-6 w-6 mr-2" /> GreenThumb
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {isAuthenticated ? (
              <>
                <Link to="/planting" className={linkClasses}>
                  <span className="flex items-center gap-2"><Leaf className="h-4 w-4" /> Planting</span>
                </Link>
                <Link to="/marketplace" className={linkClasses}>
                  <span className="flex items-center gap-2"><ShoppingBag className="h-4 w-4" /> Marketplace</span>
                </Link>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="ml-2 relative">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src="https://github.com/shadcn.png" alt="User" />
                        <AvatarFallback>U</AvatarFallback>
                      </Avatar>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <User className="mr-2 h-4 w-4" />
                      <span>Profile</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={handleSignOut}>
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Sign out</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            ) : (
              <>
                <Link to="/" className={linkClasses}>Home</Link>
                <Link to="/about" className={linkClasses}>About</Link>
                <Link to="/contact" className={linkClasses}>Contact</Link>
                <Button className="ml-2" onClick={() => navigate('/home')}>Get Started</Button>
              </>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={mobileMenuClasses}>
        {isAuthenticated ? (
          <>
            <div className="flex items-center space-x-4 mb-4">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="User" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">User Name</p>
                <p className="text-sm text-muted-foreground">user@example.com</p>
              </div>
            </div>
            <Link 
              to="/home" 
              className="block py-2 px-4 rounded-md hover:bg-primary/10"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/planting" 
              className="block py-2 px-4 rounded-md hover:bg-primary/10"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Planting
            </Link>
            <Link 
              to="/marketplace" 
              className="block py-2 px-4 rounded-md hover:bg-primary/10"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Marketplace
            </Link>
            <Button 
              variant="ghost" 
              className="justify-start px-4 py-2 h-auto"
              onClick={handleSignOut}
            >
              <LogOut className="h-4 w-4 mr-2" /> Sign out
            </Button>
          </>
        ) : (
          <>
            <Link 
              to="/" 
              className="block py-2 px-4 rounded-md hover:bg-primary/10"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="block py-2 px-4 rounded-md hover:bg-primary/10"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="block py-2 px-4 rounded-md hover:bg-primary/10"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Button 
              className="w-full mt-4"
              onClick={() => {
                setIsMobileMenuOpen(false);
                navigate('/home');
              }}
            >
              Get Started
            </Button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
