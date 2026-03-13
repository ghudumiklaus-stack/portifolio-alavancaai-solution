import { MessageCircle, Instagram, Database, Users, DollarSign, Bot, ArrowRight, Zap } from "lucide-react";

const AutomationFlow = () => {
  return (
    <div className="w-full relative py-12 px-4 md:px-0">
      {/* Background Grid Accent */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0">
        
        {/* INPUT STAGE */}
        <div className="flex flex-col gap-4 relative group">
          <div className="absolute -inset-4 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
          <div className="relative z-10 p-4 border border-border bg-background/50 backdrop-blur-sm rounded-[2px] border-l-2 border-l-primary/50 hover:border-l-primary transition-all duration-300">
            <div className="flex items-center gap-3">
              <div className="bg-[#25D366]/10 p-2 rounded-[2px]">
                <MessageCircle className="w-6 h-6 text-[#25D366]" />
              </div>
              <span className="font-mono text-sm tracking-wide">WhatsApp</span>
            </div>
          </div>
          <div className="relative z-10 p-4 border border-border bg-background/50 backdrop-blur-sm rounded-[2px] border-l-2 border-l-primary/50 hover:border-l-primary transition-all duration-300">
            <div className="flex items-center gap-3">
              <div className="bg-[#E1306C]/10 p-2 rounded-[2px]">
                <Instagram className="w-6 h-6 text-[#E1306C]" />
              </div>
              <span className="font-mono text-sm tracking-wide">Direct</span>
            </div>
          </div>
        </div>

        {/* CONNECTION LINE 1 (Input to Processor) */}
        <div className="hidden md:flex flex-1 items-center justify-center relative h-[2px] bg-border mx-4">
          <div className="absolute top-1/2 left-0 w-full h-full -translate-y-1/2 overflow-hidden">
             <div className="w-[50%] h-full bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse" />
          </div>
          <ArrowRight className="text-muted-foreground w-4 h-4 absolute right-0 -top-[7px]" />
        </div>
        
        {/* Mobile Arrow */}
        <ArrowRight className="md:hidden text-muted-foreground rotate-90 my-2" />

        {/* PROCESSING STAGE (The Brain) */}
        <div className="relative">
          {/* Pulsing Core */}
          <div className="absolute inset-0 bg-primary/20 blur-2xl animate-pulse rounded-full" />
          
          <div className="relative z-10 w-32 h-32 border border-primary/30 bg-background/50 backdrop-blur-md flex flex-col items-center justify-center gap-2 rounded-[2px] md:rotate-45 group hover:border-primary transition-colors duration-300 shadow-lg shadow-primary/10">
            <div className="md:-rotate-45 flex flex-col items-center gap-2">
              <Bot className="w-10 h-10 text-primary animate-bounce" />
              <div className="flex items-center gap-1">
                <Zap className="w-3 h-3 text-primary" />
                <span className="font-bold text-xs tracking-widest text-foreground">AI CORE</span>
              </div>
              <span className="text-[10px] text-muted-foreground font-mono">n8n + GPT-4</span>
            </div>
          </div>
        </div>

        {/* CONNECTION LINE 2 (Processor to Output) */}
        <div className="hidden md:flex flex-1 items-center justify-center relative h-[2px] bg-border mx-4">
          <div className="absolute top-1/2 left-0 w-full h-full -translate-y-1/2 overflow-hidden">
             <div className="w-[50%] h-full bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse delay-500" />
          </div>
          <ArrowRight className="text-muted-foreground w-4 h-4 absolute right-0 -top-[7px]" />
        </div>

        {/* Mobile Arrow */}
        <ArrowRight className="md:hidden text-muted-foreground rotate-90 my-2" />

        {/* OUTPUT STAGE */}
        <div className="flex flex-col gap-3">
            {[
              { icon: Database, label: "CRM Update", color: "text-blue-400" },
              { icon: Users, label: "Suporte 24/7", color: "text-primary" },
              { icon: DollarSign, label: "Venda Realizada", color: "text-yellow-400" }
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 p-3 border border-border bg-background/50 backdrop-blur-sm rounded-[2px] border-r-2 border-r-primary/20 hover:border-r-primary transition-all duration-300 hover:translate-x-1">
                <div className="p-2 bg-background/30 rounded-[2px]">
                  <item.icon className={`w-4 h-4 ${item.color}`} />
                </div>
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{item.label}</span>
              </div>
            ))}
        </div>

      </div>
      
      <div className="text-center mt-12 md:mt-16">
        <p className="text-sm text-primary font-mono bg-background/50 backdrop-blur-sm inline-block px-4 py-1 rounded-[2px] border border-primary/30 shadow-[0_0_10px_hsl(22,90%,48%,0.2)]">
          <span className="text-primary mr-2 animate-pulse">●</span>
          System Status: ONLINE & AUTONOMOUS
        </p>
      </div>
    </div>
  );
};

export default AutomationFlow;
