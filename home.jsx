import HeroSection from '../components/home/HeroSection';
import WhyChooseUs from '../components/home/WhyChooseUs';
import PortfolioSection from '../components/home/PortfolioSection';
import PricingSection from '../components/home/PricingSection';
import Footer from '../components/home/Footer';
import Navbar from '../components/Navbar';
import AnimatedCursor from '../components/AnimatedCursor';

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-inter">
      <AnimatedCursor />
      <Navbar />
      <HeroSection />
      <WhyChooseUs />
      <PortfolioSection />
      <PricingSection />
      <Footer />
    </div>
  );
}