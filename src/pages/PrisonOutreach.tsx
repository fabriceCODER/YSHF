import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Users, Calendar, MapPin, ArrowLeft, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const PrisonOutreach = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-gradient-to-r from-deep-blue to-royal-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Link to="/" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold font-display mb-6">
              Prison Outreach Program
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Bringing hope, dignity, and support to those behind bars through compassionate care and rehabilitation programs.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We believe in the inherent dignity of every person, regardless of their circumstances. Our prison outreach program 
              focuses on providing emotional support, basic necessities, and pathways to rehabilitation for incarcerated individuals.
            </p>
          </div>

          {/* Key Activities */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="border-2 hover:border-primary/20 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Care Packages</CardTitle>
                <CardDescription>
                  Monthly distribution of hygiene items, snacks, and comfort materials
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary/20 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Counseling Support</CardTitle>
                <CardDescription>
                  One-on-one emotional support and group counseling sessions
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary/20 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Life Skills Training</CardTitle>
                <CardDescription>
                  Programs focused on rehabilitation and reintegration preparation
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          {/* Impact Statistics */}
          <div className="bg-gradient-subtle rounded-2xl p-8 mb-16">
            <h3 className="text-2xl font-bold text-center mb-8">Our Impact</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">450+</div>
                <div className="text-muted-foreground">Inmates Reached</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">24</div>
                <div className="text-muted-foreground">Monthly Visits</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">8</div>
                <div className="text-muted-foreground">Facilities Served</div>
              </div>
            </div>
          </div>

          {/* Get Involved */}
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-6">Get Involved</h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join us in making a difference in the lives of incarcerated individuals. 
              Your support helps provide hope and dignity to those who need it most.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta" size="lg">
                <Users className="w-5 h-5 mr-2" />
                Volunteer With Us
              </Button>
              <Button variant="hero" size="lg">
                <Heart className="w-5 h-5 mr-2" />
                Donate Supplies
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-6">Contact Our Prison Outreach Team</h3>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-primary mr-2" />
                <span>+250 788 123 456</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-primary mr-2" />
                <span>prison@yshf.org</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrisonOutreach;