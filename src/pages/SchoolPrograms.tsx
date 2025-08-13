import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Users, BookOpen, GraduationCap, ArrowLeft, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const SchoolPrograms = () => {
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
              School Programs
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Empowering the next generation through education support, mentorship, and creating inspiring learning environments.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-6">Building Brighter Futures</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Education is the foundation of opportunity. Our school programs focus on creating supportive learning 
              environments, providing educational resources, and inspiring students to reach their full potential.
            </p>
          </div>

          {/* Key Activities */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="border-2 hover:border-primary/20 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Learning Support</CardTitle>
                <CardDescription>
                  Tutoring, homework assistance, and educational resources for struggling students
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary/20 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Mentorship</CardTitle>
                <CardDescription>
                  One-on-one mentoring relationships to guide students in their academic journey
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary/20 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Scholarship Support</CardTitle>
                <CardDescription>
                  Financial assistance and scholarship opportunities for deserving students
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          {/* Impact Statistics */}
          <div className="bg-gradient-subtle rounded-2xl p-8 mb-16">
            <h3 className="text-2xl font-bold text-center mb-8">Our Impact</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">800+</div>
                <div className="text-muted-foreground">Students Reached</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">15</div>
                <div className="text-muted-foreground">Partner Schools</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">Scholarships Awarded</div>
              </div>
            </div>
          </div>

          {/* Programs */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8">Our Programs</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>After-School Support</CardTitle>
                  <CardDescription>
                    Comprehensive after-school programs providing academic support and life skills development.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Homework assistance</li>
                    <li>• Computer literacy training</li>
                    <li>• Career guidance workshops</li>
                    <li>• Leadership development</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Early Childhood Development</CardTitle>
                  <CardDescription>
                    Supporting young learners with foundational skills and school readiness programs.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Pre-school preparation</li>
                    <li>• Reading programs</li>
                    <li>• Nutritional support</li>
                    <li>• Parent education workshops</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>STEM Education</CardTitle>
                  <CardDescription>
                    Science, Technology, Engineering, and Mathematics programs to prepare students for the future.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Science fair support</li>
                    <li>• Coding workshops</li>
                    <li>• Mathematics competitions</li>
                    <li>• Innovation challenges</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Arts & Culture</CardTitle>
                  <CardDescription>
                    Creative programs that nurture artistic talents and cultural appreciation.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Art classes and exhibitions</li>
                    <li>• Music programs</li>
                    <li>• Drama and theater</li>
                    <li>• Cultural exchange programs</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Get Involved */}
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-6">Join Our Education Initiative</h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Help us shape the future by supporting education. Whether through tutoring, mentoring, 
              or providing resources, your contribution makes a lasting impact on young lives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta" size="lg">
                <Users className="w-5 h-5 mr-2" />
                Become a Tutor
              </Button>
              <Button variant="hero" size="lg">
                <Heart className="w-5 h-5 mr-2" />
                Sponsor a Student
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-6">Contact Our Education Team</h3>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-primary mr-2" />
                <span>+250 788 123 458</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-primary mr-2" />
                <span>education@yshf.org</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SchoolPrograms;