import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Users, Stethoscope, Gift, ArrowLeft, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const HospitalCare = () => {
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
              Hospital Care Program
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Providing comfort, care, and emotional support to patients and families during their most vulnerable moments.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-6">Healing Through Compassion</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our hospital care program brings warmth and humanity to medical settings. We support patients, families, 
              and healthcare workers through acts of kindness, practical assistance, and emotional care.
            </p>
          </div>

          {/* Key Activities */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="border-2 hover:border-primary/20 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                  <Stethoscope className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Patient Companionship</CardTitle>
                <CardDescription>
                  Visiting patients who have limited family support and providing comfort
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary/20 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                  <Gift className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Comfort Kits</CardTitle>
                <CardDescription>
                  Care packages with hygiene items, snacks, and comfort materials for patients
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary/20 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Family Support</CardTitle>
                <CardDescription>
                  Assistance and emotional support for families during difficult times
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          {/* Impact Statistics */}
          <div className="bg-gradient-subtle rounded-2xl p-8 mb-16">
            <h3 className="text-2xl font-bold text-center mb-8">Our Impact</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">1,200+</div>
                <div className="text-muted-foreground">Patients Visited</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">6</div>
                <div className="text-muted-foreground">Partner Hospitals</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-muted-foreground">Care Packages Delivered</div>
              </div>
            </div>
          </div>

          {/* Programs */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8">Our Programs</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Pediatric Care</CardTitle>
                  <CardDescription>
                    Special focus on children's wards with toys, games, and activities to brighten young patients' days.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Weekly visits to children's wards</li>
                    <li>• Educational toys and books</li>
                    <li>• Art therapy sessions</li>
                    <li>• Family entertainment programs</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Elderly Care</CardTitle>
                  <CardDescription>
                    Dedicated support for elderly patients who may feel isolated during their hospital stay.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Companionship visits</li>
                    <li>• Reading services</li>
                    <li>• Music therapy</li>
                    <li>• Communication with families</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Get Involved */}
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-6">Join Our Hospital Care Team</h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Help us bring comfort and hope to those in medical care. Your presence and kindness 
              can make a significant difference in someone's healing journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta" size="lg">
                <Users className="w-5 h-5 mr-2" />
                Become a Volunteer
              </Button>
              <Button variant="hero" size="lg">
                <Heart className="w-5 h-5 mr-2" />
                Donate Care Items
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-6">Contact Our Hospital Care Team</h3>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-primary mr-2" />
                <span>+250 788 123 457</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-primary mr-2" />
                <span>hospital@yshf.org</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HospitalCare;