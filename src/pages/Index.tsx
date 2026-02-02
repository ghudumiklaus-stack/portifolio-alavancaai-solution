import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WhySection from "@/components/WhySection";
import SolutionsSection from "@/components/SolutionsSection";
import PortfolioSection from "@/components/PortfolioSection";
import VideoShowcaseSection from "@/components/VideoShowcaseSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-poppins">
      <Header />
      <main>
        <HeroSection />
        <WhySection />
        <SolutionsSection />
        <PortfolioSection />
        <VideoShowcaseSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
