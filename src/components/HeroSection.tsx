import { Button } from '@/components/ui/button';
import { Heart, Users, Play, ArrowRight, Globe } from 'lucide-react';
import heroBanner from '@/assets/hero-banner.jpg';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroBanner} 
          alt="Youth volunteers helping community members"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-deep-blue/80 via-royal-blue/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6 border border-white/20">
            <Globe className="w-4 h-4 mr-2" />
            Serving Communities Globally
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-display text-white mb-6 leading-tight">
            Empowering Youth to{' '}
            <span className="bg-gradient-to-r from-golden-yellow to-accent bg-clip-text text-transparent">
              Uplift the Forgotten
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join thousands of young changemakers creating lasting impact in communities worldwide. 
            Every small act of kindness builds a better tomorrow.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="cta" size="xl" className="min-w-48" onClick={() => document.getElementById('volunteer')?.scrollIntoView({ behavior: 'smooth' })}>
              <Users className="w-5 h-5 mr-2" />
              Start Volunteering
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button variant="hero" size="xl" className="min-w-48" onClick={() => window.open('https://donate.stripe.com/test_28o4h13nB3Yh1Gg144', '_blank')}>
              <Heart className="w-5 h-5 mr-2" />
              Donate Now
            </Button>
            <Button variant="ghost" size="lg" className="text-white border-white/30 hover:bg-white/10" onClick={() => alert('Video coming soon!')}>
              <Play className="w-5 h-5 mr-2" />
              Watch Our Story
            </Button>
          </div>

          {/* Impact Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-golden-yellow mb-2">2,500+</div>
              <div className="text-white/80 font-medium">Youth Volunteers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-golden-yellow mb-2">15,000+</div>
              <div className="text-white/80 font-medium">Lives Touched</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-golden-yellow mb-2">25+</div>
              <div className="text-white/80 font-medium">Communities Served</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <button className="animate-bounce bg-white/20 backdrop-blur-sm text-white p-3 rounded-full border border-white/30 hover:bg-white/30 transition-all duration-300">
          <ArrowRight className="w-6 h-6 rotate-90" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;