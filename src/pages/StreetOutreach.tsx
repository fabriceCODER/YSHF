import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Users, Home, Utensils, ArrowLeft, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const StreetOutreach = () => {
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
              Street Outreach Program
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Reaching out to those who call the streets home, providing essential support, dignity, and pathways to better lives.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-6">Everyone Deserves Dignity</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our street outreach program meets people where they are, providing immediate assistance, 
              building relationships, and connecting individuals to resources that can transform their lives.
            </p>
          </div>

          {/* Key Activities */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="border-2 hover:border-primary/20 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                  <Utensils className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Food Distribution</CardTitle>
                <CardDescription>
                  Regular meal services and food packages for those experiencing homelessness
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary/20 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                  <Home className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Shelter Support</CardTitle>
                <CardDescription>
                  Temporary housing assistance and connections to permanent shelter solutions
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary/20 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Health Services</CardTitle>
                <CardDescription>
                  Basic medical care, mental health support, and substance abuse counseling
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          {/* Impact Statistics */}
          <div className="bg-gradient-subtle rounded-2xl p-8 mb-16">
            <h3 className="text-2xl font-bold text-center mb-8">Our Impact</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">300+</div>
                <div className="text-muted-foreground">People Served Monthly</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">1,800+</div>
                <div className="text-muted-foreground">Meals Provided</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">75+</div>
                <div className="text-muted-foreground">Housed Successfully</div>
              </div>
            </div>
          </div>

          {/* Programs */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8">Our Services</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Mobile Outreach</CardTitle>
                  <CardDescription>
                    Taking services directly to where people are living on the streets.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Hot meals and beverages</li>
                    <li>• Hygiene kits and clothing</li>
                    <li>• First aid and medical supplies</li>
                    <li>• Information about available services</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Case Management</CardTitle>
                  <CardDescription>
                    Personalized support to help individuals access resources and services.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Individual assessment and planning</li>
                    <li>• Housing assistance applications</li>
                    <li>• Benefits enrollment support</li>
                    <li>• Mental health referrals</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Emergency Response</CardTitle>
                  <CardDescription>
                    Rapid response to crisis situations and extreme weather conditions.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Emergency shelter placement</li>
                    <li>• Crisis intervention</li>
                    <li>• Weather protection supplies</li>
                    <li>• Transportation to services</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Skills Development</CardTitle>
                  <CardDescription>
                    Programs to help individuals develop skills for employment and independent living.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Job readiness training</li>
                    <li>• Life skills workshops</li>
                    <li>• Financial literacy education</li>
                    <li>• Vocational training referrals</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Get Involved */}
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-6">Make a Difference on the Streets</h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join our street outreach team and help provide hope and practical support to those 
              who need it most. Every interaction can be a step toward transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta" size="lg">
                <Users className="w-5 h-5 mr-2" />
                Join Street Team
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
            <h3 className="text-2xl font-bold mb-6">Contact Our Street Outreach Team</h3>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-primary mr-2" />
                <span>+250 788 123 459</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-primary mr-2" />
                <span>outreach@yshf.org</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default StreetOutreach;