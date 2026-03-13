import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { SplineScene } from "@/components/ui/splite";

const HeroSection = () => {
  const navigate = useNavigate();
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Robot Background com margem para compensar o topo */}
      <div className="absolute inset-0 z-0 pointer-events-none mt-20 md:mt-24">
        
        {/* Glow Radial Atrás do Robô */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] max-w-full bg-primary/15 blur-[120px] rounded-full pointer-events-none z-[-1]" />

        <div className="w-full h-full pointer-events-auto brightness-125 contrast-125">
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
        {/* Dark frosted overlay for premium text readability, com opacidade reduzida para ver claramente o robô */}
        <div className="absolute inset-0 bg-background/20 pointer-events-none"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 pointer-events-none">
        <h1 className="font-poppins font-bold text-4xl md:text-6xl lg:text-7xl leading-tight mb-6 text-foreground max-w-4xl mx-auto pointer-events-auto text-shadow-sm">
          Olá, Somos a Alavanca AI
        </h1>
        
        <p className="font-poppins text-lg md:text-xl text-foreground/90 mb-12 max-w-2xl mx-auto leading-relaxed pointer-events-auto text-shadow-sm">
          Criamos soluções de inteligência artificial sofisticadas e funcionais com código limpo e eficiente.
          <br />
          Deixe-nos ajudar a dar vida à sua visão.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pointer-events-auto">
          <Button 
            onClick={() => navigate('/solutions')}
            size="lg" 
            className="font-poppins font-medium text-lg px-8 py-4 bg-primary hover:bg-primary/90 text-white border-0 min-w-[200px] shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5"
          >
            Ver Nosso Trabalho
          </Button>
          <Button 
            onClick={() => window.open('https://wa.me/5511997529072', '_blank')}
            variant="outline" 
            size="lg" 
            className="font-poppins font-medium text-lg px-8 py-4 border border-primary text-primary hover:bg-primary hover:text-white transition-all min-w-[200px] shadow-lg backdrop-blur-sm bg-background/20 hover:-translate-y-0.5 duration-300"
          >
            Entre em Contato
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;