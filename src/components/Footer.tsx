import logo from "@/assets/logo-marca.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src={logo} 
                alt="Alavanca AI Logo" 
                className="h-20 w-auto object-contain"
              />
            </div>
            <p className="font-poppins text-primary-foreground/80 max-w-md leading-relaxed mb-6">
              Transformando negócios através da inteligência artificial. 
              Soluções sofisticadas e personalizadas para impulsionar seu crescimento.
            </p>
          </div>
          
          {/* Solutions */}
          <div>
            <h3 className="font-poppins font-semibold text-lg mb-4">Soluções</h3>
            <ul className="space-y-2 font-poppins text-primary-foreground/80">
              <li><a href="/dashboards-personalizados" className="hover:text-accent transition-colors">Dashboards Personalizados</a></li>
              <li><a href="/ia-atendimento-vendas" className="hover:text-accent transition-colors">IA de Atendimento e Vendas</a></li>
              <li><a href="/gestao-trafego-ia" className="hover:text-accent transition-colors">Gestão de Tráfego com IA</a></li>
              <li><a href="/automacao-processos" className="hover:text-accent transition-colors">Automação de Processos</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="font-poppins font-semibold text-lg mb-4">Contato</h3>
            <ul className="space-y-2 font-poppins text-primary-foreground/80">
              <li>contato@alavancaia.online</li>
              <li><a href="https://wa.me/5511997529072" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">(11) 99752-9072</a></li>
              <li>São Paulo, SP</li>
              <li><a href="#" className="hover:text-accent transition-colors">Agendar Consultoria</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="font-poppins text-primary-foreground/60 text-sm">
            © 2024 Alavanca AI. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/privacy-policy" className="font-poppins text-primary-foreground/60 hover:text-accent text-sm transition-colors">
              Política de Privacidade
            </a>
            <a href="/terms-of-use" className="font-poppins text-primary-foreground/60 hover:text-accent text-sm transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;