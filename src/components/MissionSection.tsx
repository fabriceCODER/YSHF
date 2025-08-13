import { Heart, Users, Globe, Target } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const MissionSection = () => {
  const missions = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "Providing dignity and hope to those society has forgotten through direct service and emotional support."
    },
    {
      icon: Users,
      title: "Youth Empowerment", 
      description: "Training young leaders to become agents of change in their communities and beyond."
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Creating sustainable change across prisons, hospitals, schools, and street communities worldwide."
    },
    {
      icon: Target,
      title: "Focused Action",
      description: "Strategic monthly outreach programs that deliver measurable results and lasting relationships."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
            Our Mission
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-display text-deep-blue mb-6">
            Real Youth.{' '}
            <span className="text-primary">Real Impact.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            YouthServe Humanity Foundation believes that every person deserves dignity, hope, and community. 
            We mobilize passionate young people to create lasting change in the lives of society's most vulnerable.
          </p>
        </div>

        {/* Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {missions.map((mission, index) => (
            <Card key={index} className="group hover:shadow-card transition-all duration-300 hover:-translate-y-2 border-0 shadow-sm">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <mission.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-deep-blue mb-3">{mission.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{mission.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Story Section */}
        <div className="bg-white rounded-2xl shadow-card p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold font-display text-deep-blue mb-6">
                Our Story Began with a Simple Truth
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                In every community, there are people who have been forgotten - those in prisons, 
                hospitals, struggling schools, and on the streets. But there are also young people 
                with hearts full of compassion and hands ready to help.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                YSHF was born from the belief that when we connect these two groups, 
                extraordinary transformation happens. Not just for those receiving help, 
                but for the young volunteers who discover their purpose in service.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-primary rounded-full mr-3"></div>
                  <span className="text-deep-blue font-medium">Founded with love and determination</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-primary rounded-full mr-3"></div>
                  <span className="text-deep-blue font-medium">Guided by dignity and respect</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-primary rounded-full mr-3"></div>
                  <span className="text-deep-blue font-medium">Committed to sustainable change</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-hero rounded-2xl p-8 text-white">
                <div className="text-center h-full flex flex-col justify-center">
                  <Heart className="w-16 h-16 mx-auto mb-6" />
                  <h4 className="text-xl font-bold mb-4">Our Vision</h4>
                  <p className="text-white/90 leading-relaxed">
                    A world where no one is forgotten, where youth are empowered to create change, 
                    and where every act of kindness builds bridges of hope.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;