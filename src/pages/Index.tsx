import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import MissionSection from '@/components/MissionSection';
import ProgramsSection from '@/components/ProgramsSection';
import VolunteerSection from '@/components/VolunteerSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <MissionSection />
      <ProgramsSection />
      <VolunteerSection />
      <Footer />
    </div>
  );
};

export default Index;
