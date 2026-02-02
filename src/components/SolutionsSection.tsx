import { Card } from "@/components/ui/card";

const SolutionsSection = () => {
  const solutions = [
    {
      icon: "🎙️",
      title: "IA de Voz Ultra-Realista",
      description: "Transforme a comunicação com clientes. Nossa IA interage por voz de forma natural e indistinguível de um humano, ideal para prospecção, agendamento ou suporte."
    },
    {
      icon: "🤖",
      title: "Assistente de Suporte Inteligente",
      description: "Otimize seu atendimento ao cliente. Nossa IA atua como um assistente virtual, respondendo a perguntas frequentes e direcionando casos complexos para sua equipe humana."
    },
    {
      icon: "📞",
      title: "Prospecção Ativa por Telefone",
      description: "Impulsione suas vendas com uma IA que faz ligações, qualifica leads, apresenta produtos e até agenda conversas com seus vendedores, tudo de forma automática."
    },
    {
      icon: "🧠",
      title: "IA de Conversação Avançada (Ex: Jarvis)",
      description: "Experimente uma IA de conversação de ponta, capaz de atuar como um assistente pessoal sofisticado, gerenciando tarefas e respondendo a perguntas complexas."
    },
    {
      icon: "📅",
      title: "IA de Agendamento Inteligente",
      description: "Simplifique a gestão de compromissos. Nosso assistente virtual cuida de agendamentos, envia lembretes e confirma presenças, eliminando a necessidade de intervenção humana."
    },
    {
      icon: "⚖️",
      title: "Suporte Jurídico com IA",
      description: "Agilize seu trabalho legal. Uma IA especializada analisa documentos, identifica cláusulas importantes, pesquisa jurisprudências e gera relatórios com precisão e rapidez."
    }
  ];

  return (
    <section id="solucoes" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-4xl md:text-5xl text-primary mb-6">
            Soluções Inteligentes para um Mercado Competitivo
          </h2>
          <p className="font-poppins text-xl text-foreground/80 max-w-3xl mx-auto">
            Oferecemos um portfólio completo de serviços de IA para impulsionar 
            sua empresa ao próximo nível.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <Card key={index} className="p-6 border-border/50 hover:shadow-lg transition-all hover:border-accent/30">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">{solution.icon}</span>
              </div>
              <h3 className="font-poppins font-semibold text-xl text-primary mb-3">
                {solution.title}
              </h3>
              <p className="font-poppins text-foreground/80 leading-relaxed">
                {solution.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;