import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          <iframe
            src="https://player.vimeo.com/video/1112165351?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              width: '100vw',
              height: '100vh',
              transform: 'scale(1.1)', // Slight scale to avoid borders
            }}
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
          ></iframe>
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-primary/70"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <h1 className="font-poppins font-bold text-4xl md:text-6xl lg:text-7xl leading-tight mb-6 text-primary-foreground max-w-4xl">
          Olá, Somos a Alavanca AI
        </h1>
        
        <p className="font-poppins text-lg md:text-xl text-primary-foreground/90 mb-12 max-w-2xl mx-auto leading-relaxed">
          Criamos soluções de inteligência artificial sofisticadas e funcionais com código limpo e eficiente.
          <br />
          Deixe-nos ajudar a dar vida à sua visão.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button 
            onClick={() => navigate('/solutions')}
            size="lg" 
            className="font-poppins font-medium text-lg px-8 py-4 bg-accent hover:bg-accent/90 text-primary border-0 min-w-[200px]"
          >
            Ver Nosso Trabalho
          </Button>
          <Button 
            onClick={() => window.open('https://wa.me/5511997529072', '_blank')}
            variant="outline" 
            size="lg" 
            className="font-poppins font-medium text-lg px-8 py-4 border-2 border-white/80 bg-white/10 text-white hover:bg-white hover:text-primary transition-all min-w-[200px] shadow-lg backdrop-blur-sm"
          >
            Entre em Contato
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;