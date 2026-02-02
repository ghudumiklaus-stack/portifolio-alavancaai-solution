import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Progress } from "@/components/ui/progress";
import officeTeam from "@/assets/office-team.jpg";

const About = () => {
  const skills = [
    { name: "Inteligência Artificial", percentage: 95 },
    { name: "Automação de Processos", percentage: 90 },
    { name: "Chatbots & Assistentes", percentage: 88 },
    { name: "Business Intelligence", percentage: 85 },
    { name: "Visão Computacional", percentage: 80 },
  ];

  return (
    <div className="min-h-screen bg-background font-poppins">
      <Header />
      <main className="pt-20">
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h1 className="font-poppins font-bold text-4xl md:text-5xl text-primary mb-6">
                Sobre a Alavanca AI
              </h1>
              <p className="font-poppins text-xl text-foreground/80 max-w-3xl mx-auto">
                Conheça mais sobre nossa expertise e experiência em soluções de inteligência artificial
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="rounded-2xl overflow-hidden h-96">
                  <img 
                    src={officeTeam} 
                    alt="Equipe trabalhando em escritório moderno" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="space-y-8">
                <div>
                  <h2 className="font-poppins font-bold text-3xl text-primary mb-6">
                    Especialistas em IA & Automação
                  </h2>
                  <p className="font-poppins text-foreground/80 text-lg leading-relaxed mb-6">
                    Somos uma agência especializada em implementar soluções de inteligência artificial 
                    que transformam negócios. Com expertise em automação de processos, desenvolvimento 
                    de chatbots inteligentes e análise preditiva, ajudamos empresas a alcançar resultados 
                    extraordinários.
                  </p>
                  <p className="font-poppins text-foreground/80 text-lg leading-relaxed mb-6">
                    Nossa missão é democratizar o acesso à inteligência artificial, oferecendo soluções 
                    personalizadas que se adaptam perfeitamente às necessidades específicas de cada cliente. 
                    Combinamos inovação tecnológica com estratégia de negócios para gerar impacto real.
                  </p>
                  <p className="font-poppins text-foreground/80 text-lg leading-relaxed">
                    Acreditamos que a IA deve ser uma ferramenta de crescimento acessível e eficiente, 
                    não apenas para grandes corporações, mas para empresas de todos os tamanhos que 
                    desejam se destacar no mercado competitivo atual.
                  </p>
                </div>
                
                <div className="space-y-6">
                  <h3 className="font-poppins font-semibold text-xl text-primary">
                    Nossas Especialidades
                  </h3>
                  {skills.map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-poppins font-medium text-foreground">
                          {skill.name}
                        </span>
                        <span className="font-poppins font-medium text-accent">
                          {skill.percentage}%
                        </span>
                      </div>
                      <Progress value={skill.percentage} className="h-2" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="text-center">
              <h2 className="font-poppins font-bold text-3xl text-primary mb-6">
                Por que Escolher a Alavanca AI?
              </h2>
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h3 className="font-poppins font-semibold text-xl text-primary mb-3">
                    Soluções Personalizadas
                  </h3>
                  <p className="font-poppins text-foreground/80">
                    Cada projeto é único. Desenvolvemos soluções sob medida para suas necessidades específicas.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <h3 className="font-poppins font-semibold text-xl text-primary mb-3">
                    Implementação Rápida
                  </h3>
                  <p className="font-poppins text-foreground/80">
                    Processos otimizados que garantem entregas ágeis sem comprometer a qualidade.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🤝</span>
                  </div>
                  <h3 className="font-poppins font-semibold text-xl text-primary mb-3">
                    Suporte Contínuo
                  </h3>
                  <p className="font-poppins text-foreground/80">
                    Acompanhamento completo e suporte técnico para garantir o sucesso do seu projeto.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;