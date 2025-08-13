import { Heart, Facebook, Instagram, Twitter, Mail, Phone, MapPin, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Our Programs', href: '#programs' },
    { name: 'Volunteer', href: '#volunteer' },
    { name: 'Donate', href: '#donate' },
    { name: 'News & Impact', href: '#impact' },
    { name: 'Contact', href: '#contact' }
  ];

  const programs = [
    { name: 'Prison Outreach', href: '#programs' },
    { name: 'Hospital Care', href: '#programs' },
    { name: 'School Programs', href: '#programs' },
    { name: 'Street Outreach', href: '#programs' }
  ];

  return (
    <footer className="bg-deep-blue text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Section */}
        <div className="py-12 border-b border-white/10">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold font-display mb-4">
              Stay Connected to Our Impact
            </h3>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Get monthly stories from the field, volunteer opportunities, and updates on how your support is changing lives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-golden-yellow"
              />
              <Button variant="cta" size="lg">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-cta rounded-lg">
                <Heart className="w-7 h-7 text-deep-blue" />
              </div>
              <div>
                <h2 className="text-xl font-bold font-display">YSHF</h2>
                <p className="text-sm text-white/80">YouthServe Humanity Foundation</p>
              </div>
            </div>
            <p className="text-white/80 mb-6 leading-relaxed">
              Empowering youth to create lasting change in communities worldwide through compassionate service and dignified care.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-white/80 hover:text-golden-yellow transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Programs</h3>
            <ul className="space-y-3">
              {programs.map((program) => (
                <li key={program.name}>
                  <a href={program.href} className="text-white/80 hover:text-golden-yellow transition-colors">
                    {program.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-golden-yellow mt-1 mr-3 flex-shrink-0" />
                <span className="text-white/80">
                  Bukure Sector<br />
                  Kigali, Rwanda
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-golden-yellow mr-3 flex-shrink-0" />
                <span className="text-white/80">+250 xxx xxx xxx</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-golden-yellow mr-3 flex-shrink-0" />
                <span className="text-white/80">hello@yshf.org</span>
              </div>
            </div>
            <Button variant="cta" size="sm" className="mt-6">
              <Users className="w-4 h-4 mr-2" />
              Join WhatsApp Group
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            © 2024 YouthServe Humanity Foundation. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link to="/privacy-policy" className="text-white/60 hover:text-golden-yellow transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="text-white/60 hover:text-golden-yellow transition-colors">Terms of Service</Link>
            <Link to="/cookie-policy" className="text-white/60 hover:text-golden-yellow transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;