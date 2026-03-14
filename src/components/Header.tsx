import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-marca.png";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const Header = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Sobre", path: "/about" },
    { name: "Soluções", path: "/solutions" },
    { name: "Portfólio VEO-3", path: "/portfolio" },
    { name: "Contato", path: "/contact" },
  ];

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img 
              src={logo} 
              alt="Alavanca AI Logo" 
              className="h-16 md:h-24 w-auto object-contain"
            />
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.path}
                href={link.path} 
                className="font-poppins text-foreground/80 hover:text-accent transition-colors font-medium text-sm"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-foreground">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-background border-border">
                <nav className="flex flex-col space-y-6 mt-12">
                  {navLinks.map((link) => (
                    <a 
                      key={link.path}
                      href={link.path} 
                      className="font-poppins text-xl text-foreground/80 hover:text-accent transition-colors font-medium"
                    >
                      {link.name}
                    </a>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;