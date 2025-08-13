import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Heart, Users, Globe } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'What We Do', href: '#programs' },
    { name: 'Get Involved', href: '#volunteer' },
    { name: 'News & Impact', href: '#impact' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-hero rounded-lg">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold font-display text-deep-blue">YSHF</h1>
              <p className="text-xs text-muted-foreground">YouthServe Humanity</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="hero" size="sm" onClick={() => document.getElementById('volunteer')?.scrollIntoView({ behavior: 'smooth' })}>
              <Users className="w-4 h-4 mr-2" />
              Volunteer
            </Button>
            <Button variant="donate" size="sm" onClick={() => window.open('https://donate.stripe.com/test_28o4h13nB3Yh1Gg144', '_blank')}>
              <Heart className="w-4 h-4 mr-2" />
              Donate
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-foreground hover:text-primary transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-border shadow-lg">
            <nav className="px-4 py-4 space-y-3">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 space-y-3">
                <Button variant="hero" size="sm" className="w-full" onClick={() => { document.getElementById('volunteer')?.scrollIntoView({ behavior: 'smooth' }); setIsMenuOpen(false); }}>
                  <Users className="w-4 h-4 mr-2" />
                  Volunteer
                </Button>
                <Button variant="donate" size="sm" className="w-full" onClick={() => { window.open('https://donate.stripe.com/test_28o4h13nB3Yh1Gg144', '_blank'); setIsMenuOpen(false); }}>
                  <Heart className="w-4 h-4 mr-2" />
                  Donate
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;