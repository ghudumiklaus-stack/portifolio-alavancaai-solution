import { Bot, Zap, Video, Target, MessageSquare, Cpu, Activity, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import AutomationFlow from "@/components/AutomationFlow";

const capabilities = [
  {
    icon: MessageSquare,
    title: "Omnichannel Hub",
    specs: ["Chatwoot Host", "Whatsapp API", "In-box Zero"],
    description: "Centralização absoluta de canais. Um único painel para governar WhatsApp, Instagram e Email."
  },
  {
    icon: Bot,
    title: "Neural Agents",
    specs: ["Llama 3 / GPT-4", "Context Aware", "24/7 Active"],
    description: "Assistentes treinados na sua base de conhecimento. Respondem, agendam e vendem sem supervisão humana."
  },
  {
    icon: Video,
    title: "AI Media Gen",
    specs: ["Avatar Custom", "Voice Clone", "Scale 100x"],
    description: "Produção de conteúdo ilimitada. Influenciadores digitais e vídeos de vendas gerados por inteligência artificial."
  },
  {
    icon: Target,
    title: "Precision Ads",
    specs: ["Pixel API", "Conversion API", "Roas Optimization"],
    description: "Gestão de tráfego baseada em dados, não em palpites. Otimização algorítmica de campanhas."
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="relative pt-4 pb-10 px-6 overflow-hidden bg-background">

      {/* Section Header */}
      <div className="max-w-7xl mx-auto mb-16 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 border-b border-border/50 pb-8">
          <div>
            <div className="flex items-center gap-2 text-primary mb-2">
              <Activity className="w-4 h-4 animate-pulse" />
              <span className="font-mono text-xs tracking-widest uppercase">System Capabilities</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-foreground drop-shadow-sm">
              Operational <span className="text-muted-foreground">Modules</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md text-right md:text-left font-mono text-sm leading-relaxed">
            // ARQUITETURA DE ESCALA <br />
            Implementamos infraestrutura autônoma para empresas que não podem parar.
          </p>
        </div>
      </div>

      {/* FEATURE: AUTOMATION VISUALIZATION */}
      <div className="max-w-7xl mx-auto mb-20">
        <div className="border border-border/50 bg-card/10 backdrop-blur-md p-1 relative rounded-[2px] shadow-2xl">
          <div className="absolute top-0 left-0 bg-primary w-2 h-2 rounded-[1px]" />
          <div className="absolute top-0 right-0 bg-primary w-2 h-2 rounded-[1px]" />
          <div className="absolute bottom-0 left-0 bg-primary w-2 h-2 rounded-[1px]" />
          <div className="absolute bottom-0 right-0 bg-primary w-2 h-2 rounded-[1px]" />

          <div className="bg-background/60 backdrop-blur-xl p-8 border border-border/50 rounded-[2px]">
            <div className="flex justify-between items-center mb-8 border-b border-border/50 pb-4">
              <h3 className="font-mono text-lg text-primary flex items-center gap-2">
                <Cpu className="w-5 h-5" />
                CORE ARCHITECTURE :: FLOW_V1
              </h3>
              <span className="text-xs font-mono text-muted-foreground uppercase flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Live Simulation
              </span>
            </div>
            
            <AutomationFlow />
          </div>
        </div>
      </div>

      {/* GRID: TECHNICAL CAPABILITIES */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {capabilities.map((cap, index) => (
          <div
            key={index}
            className="group relative bg-card/20 backdrop-blur-sm hover:bg-secondary/20 border border-border/50 transition-all duration-300 hover:border-primary/50 rounded-[2px]"
          >
            <div className="p-6 h-full flex flex-col">
              <div className="mb-6 flex justify-between items-start">
                <div className="p-3 bg-secondary/30 text-primary border border-secondary/50 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 rounded-[2px]">
                  <cap.icon className="w-6 h-6" />
                </div>
                <span className="font-mono text-xs text-muted-foreground opacity-50">0{index + 1}</span>
              </div>

              <h3 className="text-xl font-bold uppercase mb-4 tracking-tight group-hover:text-primary transition-colors">{cap.title}</h3>

              <ul className="mb-6 space-y-2">
                {cap.specs.map((spec, i) => (
                  <li key={i} className="text-xs font-mono text-muted-foreground flex items-center gap-2">
                    <span className="w-1 h-1 bg-primary/80 rounded-[1px]" />
                    {spec}
                  </li>
                ))}
              </ul>

              <p className="text-sm text-muted-foreground mt-auto leading-relaxed border-t border-border/50 pt-4">
                {cap.description}
              </p>
            </div>

            {/* Hover Corner accents */}
            <div className="absolute top-0 right-0 w-0 h-0 border-t-2 border-r-2 border-primary opacity-0 group-hover:opacity-100 group-hover:w-4 group-hover:h-4 transition-all duration-300 rounded-tr-[2px]" />
            <div className="absolute bottom-0 left-0 w-0 h-0 border-b-2 border-l-2 border-primary opacity-0 group-hover:opacity-100 group-hover:w-4 group-hover:h-4 transition-all duration-300 rounded-bl-[2px]" />
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto mt-12 flex justify-center">
        <Button variant="outline" size="lg" className="rounded-[2px] border-primary/20 hover:border-primary bg-background/50 backdrop-blur-md text-foreground hover:bg-primary/10 font-mono uppercase tracking-widest min-w-[300px] h-14 group transition-all duration-300">
          <Lock className="w-4 h-4 mr-2 text-muted-foreground group-hover:text-primary transition-colors" />
          Acessar Consultoria Privada
        </Button>
      </div>

    </section>
  );
};

export default ServicesSection;
