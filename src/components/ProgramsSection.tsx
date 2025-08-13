import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building, School, Heart, Users, Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProgramsSection = () => {
  const programs = [
    {
      icon: Building,
      title: "Prison Outreach",
      description: "Bringing hope and dignity to incarcerated individuals through regular visits, life skills training, and emotional support.",
      impact: "500+ inmates reached monthly",
      status: "Active",
      frequency: "Weekly visits",
      link: "/programs/prison-outreach"
    },
    {
      icon: Heart,
      title: "Hospital Care",
      description: "Supporting patients and families during difficult times with companionship, comfort items, and spiritual care.",
      impact: "200+ patients supported",
      status: "Growing",
      frequency: "Daily presence",
      link: "/programs/hospital-care"
    },
    {
      icon: School,
      title: "School Programs",
      description: "Empowering students through mentorship, educational support, and leadership development initiatives.",
      impact: "1,000+ students mentored",
      status: "Expanding",
      frequency: "After school programs",
      link: "/programs/school-programs"
    },
    {
      icon: Users,
      title: "Street Outreach",
      description: "Providing food, hygiene kits, and human connection to our homeless neighbors and street communities.",
      impact: "300+ individuals served",
      status: "Active",
      frequency: "Weekend distributions",
      link: "/programs/street-outreach"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-800';
      case 'Growing': return 'bg-blue-100 text-blue-800';
      case 'Expanding': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section id="programs" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-accent/10 rounded-full text-accent text-sm font-medium mb-4">
            <Calendar className="w-4 h-4 mr-2" />
            What We Do
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-display text-deep-blue mb-6">
            Making a Difference{' '}
            <span className="text-primary">Every Single Day</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our focused approach creates sustainable impact across four key areas where society's most 
            vulnerable need support, dignity, and hope.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {programs.map((program, index) => (
            <Card key={index} className="group hover:shadow-card transition-all duration-300 hover:-translate-y-1 border-0 shadow-sm">
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 bg-gradient-hero rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <program.icon className="w-7 h-7 text-white" />
                  </div>
                  <Badge className={`${getStatusColor(program.status)} border-0 font-medium`}>
                    {program.status}
                  </Badge>
                </div>
                
                <h3 className="text-xl font-bold text-deep-blue mb-3">{program.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{program.description}</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span className="font-medium text-deep-blue">{program.impact}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    <span className="text-muted-foreground">{program.frequency}</span>
                  </div>
                </div>
                
                <Link to={program.link}>
                  <Button variant="ghost" className="text-primary hover:text-primary group p-0 h-auto">
                    Learn more about this program
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-hero rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold font-display mb-4">
            Ready to Be Part of the Change?
          </h3>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Every program needs passionate volunteers. Whether you have one hour a week or one day a month, 
            your contribution makes a meaningful difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="lg">
              <Users className="w-5 h-5 mr-2" />
              Join a Program
            </Button>
            <Button variant="ghost" size="lg" className="text-white border-white/30 hover:bg-white/10">
              View Our Calendar
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;