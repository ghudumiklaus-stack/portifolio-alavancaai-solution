import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-marca.png";

const Header = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-20 bg-background/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img 
              src={logo} 
              alt="Alavanca AI Logo" 
              className="h-24 w-auto object-contain"
            />
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="font-poppins text-foreground hover:text-accent transition-colors font-medium">
              Home
            </a>
            <a href="/about" className="font-poppins text-foreground/80 hover:text-accent transition-colors font-medium">
              Sobre
            </a>
            <a href="/solutions" className="font-poppins text-foreground/80 hover:text-accent transition-colors font-medium">
              Soluções
            </a>
            <a href="/portfolio" className="font-poppins text-foreground/80 hover:text-accent transition-colors font-medium">
              Portfólio VEO-3
            </a>
            <a href="/contact" className="font-poppins text-foreground/80 hover:text-accent transition-colors font-medium">
              Contato
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;