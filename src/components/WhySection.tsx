import { Card } from "@/components/ui/card";

const WhySection = () => {
  const features = [
    {
      icon: "⚡",
      title: "Sofisticação",
      description: "Desenvolvemos soluções elegantes e intuitivas que se integram perfeitamente ao seu fluxo de trabalho existente."
    },
    {
      icon: "🛡️",
      title: "Credibilidade",
      description: "Nossa experiência comprovada e metodologia testada garantem resultados consistentes e mensuráveis."
    },
    {
      icon: "🎯",
      title: "Personalização",
      description: "Cada solução é cuidadosamente adaptada às necessidades específicas do seu negócio e objetivos únicos."
    }
  ];

  return (
    <section className="pt-10 pb-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-4xl md:text-5xl text-primary mb-6">
            Inteligência que trabalha por você
          </h2>
          <p className="font-poppins text-xl text-foreground/80 max-w-3xl mx-auto">
            Combinamos tecnologia de ponta com expertise em negócios para 
            entregar soluções que realmente fazem a diferença.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-8 text-center border-border/50 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">{feature.icon}</span>
              </div>
              <h3 className="font-poppins font-semibold text-2xl text-primary mb-4">
                {feature.title}
              </h3>
              <p className="font-poppins text-foreground/80 leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySection;