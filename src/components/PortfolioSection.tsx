import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import dashboardImage from "@/assets/dashboard-analytics.png";
import aiSalesImage from "@/assets/ai-sales-assistant.jpg";
import aiTrafficImage from "@/assets/ai-traffic-management.jpg";

const PortfolioSection = () => {
  const navigate = useNavigate();
  
  const portfolioItems = [
    {
      title: "Dashboards Personalizados",
      description: "Transforme dados em insights e gerencie vendas, clientes e suporte em painéis feitos sob medida para o seu negócio",
      image: dashboardImage,
      category: "Business Intelligence",
      path: "/dashboards-personalizados"
    },
    {
      title: "IA de Atendimento e Vendas", 
      description: "Um vendedor que nunca dorme. Nossa IA atende, qualifica leads e fecha vendas de forma fluida, 24 horas por dia. Garante que sua empresa nunca perca uma oportunidade de negócio.",
      image: aiSalesImage,
      category: "IA de Vendas",
      path: "/ia-atendimento-vendas"
    },
    {
      title: "Gestão de Tráfego com IA",
      description: "Pare de desperdiçar dinheiro com anúncios. Nossa IA otimiza suas campanhas de Facebook e Google, ajustando orçamentos e público em tempo real para garantir o maior retorno sobre seu investimento.",
      image: aiTrafficImage,
      category: "Marketing Digital",
      path: "/gestao-trafego-ia"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-4xl md:text-5xl text-primary mb-6">
            Resultados que Falam por Si
          </h2>
          <p className="font-poppins text-xl text-foreground/80 max-w-3xl mx-auto">
            Conheça alguns dos projetos que transformaram negócios e geraram 
            resultados extraordinários para nossos clientes.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {portfolioItems.map((item, index) => (
            <Card key={index} className="overflow-hidden border-border/50 hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center relative overflow-hidden">
                {index === 0 ? (
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                 ) : index === 1 ? (
                   <img 
                     src={item.image} 
                     alt={item.title}
                     className="w-full h-full object-cover"
                   />
                 ) : (
                   <img 
                     src={item.image} 
                     alt={item.title}
                     className="w-full h-full object-cover"
                   />
                 )}
              </div>
              <div className="p-6">
                <div className="text-sm font-poppins font-medium text-accent mb-2">
                  {item.category}
                </div>
                <h3 className="font-poppins font-semibold text-xl text-primary mb-3">
                  {item.title}
                </h3>
                <p className="font-poppins text-foreground/80 text-sm leading-relaxed mb-4">
                  {item.description}
                </p>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="font-poppins text-xs"
                  onClick={() => navigate(item.path)}
                >
                  Ler Sobre
                </Button>
              </div>
            </Card>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default PortfolioSection;