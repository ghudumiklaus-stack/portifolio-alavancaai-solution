import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { SplineSceneSection } from "@/components/SplineSceneSection";

const Solutions = () => {
  const navigate = useNavigate();

  const solutions = [
    {
      icon: "🎙️",
      title: "IA de Voz Ultra-Realista",
      description: "Transforme a comunicação com clientes. Nossa IA interage por voz de forma natural e indistinguível de um humano, ideal para prospecção, agendamento ou suporte.",
      features: ["Ligações de prospecção e vendas", "Agendamento automatizado", "Suporte telefônico com voz natural", "Experiência do cliente aprimorada"]
    },
    {
      icon: "📊",
      title: "Dashboards e CRM Personalizados",
      description: "Tenha o controle total do seu negócio com painéis e CRM feitos sob medida. Integre dados de vendas, clientes, suporte e operações em uma única plataforma intuitiva, desenhada para suas necessidades.",
      features: ["Visão 360º do cliente e vendas", "Relatórios gerenciais personalizados", "Monitoramento de KPIs em tempo real", "Integração flexível com sistemas existentes"]
    },
    {
      icon: "🎯",
      title: "Gestão de Tráfego Otimizada por IA",
      description: "Maximize o retorno de seus investimentos em anúncios digitais. Nossa IA gerencia suas campanhas no Facebook Ads e Google Ads, ajustando estratégias e orçamentos em tempo real para obter os melhores resultados.",
      features: ["Otimização automática de campanhas", "Análise de desempenho em tempo real", "Redução de custos por clique (CPC)", "Aumento do ROAS (Retorno sobre o Investimento em Anúncios)"]
    },
    {
      icon: "🛒",
      title: "IA para E-commerce Shopify",
      description: "Revolucione sua loja virtual com inteligência artificial. Nossa IA se integra à Shopify para otimizar operações, personalizar a experiência de compra e impulsionar suas vendas de forma eficiente.",
      features: ["Gestão inteligente de estoque", "Sugestão de produtos personalizada", "Automação de descrições de produtos", "Otimização da experiência do usuário"]
    },
    {
      icon: "🤖",
      title: "Assistente de Suporte Inteligente",
      description: "Otimize seu atendimento ao cliente. Nossa IA atua como um assistente virtual, respondendo a perguntas frequentes e direcionando casos complexos para sua equipe humana.",
      features: ["Respostas a FAQs 24/7", "Solução de problemas básicos", "Direcionamento inteligente de tickets", "Liberação da equipe para casos estratégicos"]
    },
    {
      icon: "📞",
      title: "Prospecção Ativa por Telefone",
      description: "Impulsione suas vendas com uma IA que faz ligações, qualifica leads, apresenta produtos e até agenda conversas com seus vendedores, tudo de forma automática.",
      features: ["Qualificação de leads automatizada", "Apresentação de produtos/serviços", "Agendamento direto na agenda do vendedor", "Aumento da taxa de conversão"]
    },
    {
      icon: "🧠",
      title: "IA de Conversação Avançada (Ex: Jarvis)",
      description: "Experimente uma IA de conversação de ponta, capaz de atuar como um assistente pessoal sofisticado, gerenciando tarefas e respondendo a perguntas complexas.",
      features: ["Assistência pessoal e gerencial", "Controle de sistemas por voz/texto", "Respostas contextuais e complexas", "Interfaces de interação personalizadas"]
    },
    {
      icon: "📅",
      title: "IA de Agendamento Inteligente",
      description: "Simplifique a gestão de compromissos. Nosso assistente virtual cuida de agendamentos, envia lembretes e confirma presenças, eliminando a necessidade de intervenção humana.",
      features: ["Marcação de reuniões e consultas", "Envio automático de lembretes", "Confirmação de presença", "Redução de faltas e atrasos"]
    },
    {
      icon: "⚖️",
      title: "Suporte Jurídico com IA",
      description: "Agilize seu trabalho legal. Uma IA especializada analisa documentos, identifica cláusulas importantes, pesquisa jurisprudências e gera relatórios com precisão e rapidez.",
      features: ["Revisão e análise de contratos", "Pesquisa de jurisprudências e legislação", "Geração automática de relatórios", "Otimização de tempo para advogados"]
    }
  ];

  return (
    <div className="min-h-screen bg-background font-poppins">
      <Header />
      
      {/* Hero Header Section */}
      <section className="pt-40 pb-16 bg-gradient-to-br from-primary/10 to-accent/5">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h1 className="font-poppins font-bold text-4xl md:text-6xl text-primary mb-6 leading-tight">
              Soluções Inteligentes para um Mercado Competitivo
            </h1>
            <p className="font-poppins text-xl text-foreground/80 max-w-4xl mx-auto leading-relaxed">
              Oferecemos um portfólio completo de serviços de IA para impulsionar 
              sua empresa ao próximo nível. Transforme desafios em oportunidades 
              com nossa expertise em inteligência artificial.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive 3D Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <SplineSceneSection />
        </div>
      </section>

      <main>
        {/* Solutions Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <Card key={index} className="p-8 border-border/50 hover:shadow-xl transition-all hover:border-accent/30 hover:scale-105 duration-300">
                  <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                    <span className="text-3xl">{solution.icon}</span>
                  </div>
                  <h3 className="font-poppins font-semibold text-2xl text-primary mb-4">
                    {solution.title}
                  </h3>
                  <p className="font-poppins text-foreground/80 leading-relaxed mb-6">
                    {solution.description}
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="font-poppins font-medium text-primary text-sm mb-3">
                      Recursos principais:
                    </h4>
                    <ul className="space-y-1">
                      {solution.features.map((feature, idx) => (
                        <li key={idx} className="font-poppins text-foreground/70 text-sm flex items-center">
                          <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="container mx-auto px-6 text-center">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-primary mb-6">
              Pronto para Transformar seu Negócio?
            </h2>
            <p className="font-poppins text-xl text-foreground/80 max-w-3xl mx-auto mb-8">
              Nossa equipe está pronta para desenvolver a solução de IA perfeita 
              para suas necessidades específicas. Vamos conversar sobre como 
              podemos impulsionar seu crescimento.
            </p>
            
            <div className="flex justify-center">
              <Button 
                onClick={() => navigate('/contact')}
                size="lg" 
                className="font-poppins font-semibold text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Solicitar Consulta Gratuita
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Solutions;