import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, Clock, MapPin, Heart, Star, CheckCircle, ArrowRight } from 'lucide-react';

const VolunteerSection = () => {
  const opportunityTypes = [
    {
      title: "Regular Volunteer",
      commitment: "4+ hours/month",
      description: "Join our core team for ongoing programs",
      benefits: ["Leadership training", "Community network", "Impact reports"],
      badge: "Most Popular"
    },
    {
      title: "Event Volunteer", 
      commitment: "1-2 hours/event",
      description: "Help with special drives and campaigns",
      benefits: ["Flexible schedule", "One-time commitment", "Team building"],
      badge: "Flexible"
    },
    {
      title: "Skills Volunteer",
      commitment: "2-3 hours/week",
      description: "Share your professional expertise",
      benefits: ["Use your skills", "Remote options", "Professional development"],
      badge: "Professional"
    }
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      age: 19,
      role: "Prison Outreach Volunteer",
      quote: "YSHF showed me that small acts of kindness can transform both the giver and receiver. I've found my purpose.",
      rating: 5
    },
    {
      name: "James K.",
      age: 22,
      role: "Hospital Program Leader",
      quote: "The leadership skills and empathy I've gained volunteering with YSHF have shaped who I am as a person.",
      rating: 5
    }
  ];

  return (
    <section id="volunteer" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
            <Users className="w-4 h-4 mr-2" />
            Get Involved
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-display text-deep-blue mb-6">
            Start Your Journey of{' '}
            <span className="text-primary">Purpose</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Join thousands of young changemakers who are discovering that the secret to a meaningful life 
            is serving others. Find your place in our community.
          </p>
        </div>

        {/* Volunteer Types */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {opportunityTypes.map((type, index) => (
            <Card key={index} className="group hover:shadow-card transition-all duration-300 hover:-translate-y-2 border-0 shadow-sm relative">
              {type.badge && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-accent text-accent-foreground border-0 font-medium">
                  {type.badge}
                </Badge>
              )}
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-bold text-deep-blue mb-2">{type.title}</h3>
                <div className="flex items-center justify-center text-primary font-medium mb-4">
                  <Clock className="w-4 h-4 mr-2" />
                  {type.commitment}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">{type.description}</p>
                
                <div className="space-y-3 mb-8">
                  {type.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                      <span className="text-sm text-deep-blue">{benefit}</span>
                    </div>
                  ))}
                </div>
                
                <Button variant="hero" className="w-full group-hover:scale-105">
                  Apply Now
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Steps */}
        <div className="bg-white rounded-2xl shadow-card p-8 md:p-12 mb-16">
          <h3 className="text-2xl md:text-3xl font-bold font-display text-deep-blue text-center mb-12">
            Your Journey in 3 Simple Steps
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h4 className="text-lg font-semibold text-deep-blue mb-3">Apply & Connect</h4>
              <p className="text-muted-foreground">Fill out our simple application and connect with our volunteer coordinator.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h4 className="text-lg font-semibold text-deep-blue mb-3">Train & Prepare</h4>
              <p className="text-muted-foreground">Attend our orientation and training session to prepare for your chosen program.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h4 className="text-lg font-semibold text-deep-blue mb-3">Serve & Grow</h4>
              <p className="text-muted-foreground">Start volunteering and experience the joy of making a real difference in lives.</p>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-sm">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-golden-yellow fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed italic">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center mr-4">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-deep-blue">{testimonial.name}, {testimonial.age}</div>
                    <div className="text-sm text-primary">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <Button variant="cta" size="xl" className="min-w-64">
            <Users className="w-5 h-5 mr-2" />
            Begin Your Volunteer Journey
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            Questions? WhatsApp us at +250 xxx xxx xxx or email volunteer@yshf.org
          </p>
        </div>
      </div>
    </section>
  );
};

export default VolunteerSection;