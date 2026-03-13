import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PartnerMarquee from "@/components/PartnerMarquee";
import ServicesSection from "@/components/ServicesSection";
import TechTerminal from "@/components/TechTerminal";
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
        <PartnerMarquee />
        <ServicesSection />
        
        {/* Animated Terminal Section */}
        <section className="bg-[#050505] relative overflow-hidden">
          <TechTerminal />
        </section>

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
