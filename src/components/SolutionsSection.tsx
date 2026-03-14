import { Mic2, MessageSquare, PhoneCall, Cpu, Calendar, Scale } from "lucide-react";
import { motion } from "framer-motion";

const solutions = [
  {
    icon: Mic2,
    title: "IA de Voz Ultra-Realista",
    description: "Nossa IA interage por voz de forma natural e indistinguível de um humano, ideal para prospecção, agendamento ou suporte."
  },
  {
    icon: MessageSquare,
    title: "Assistente de Suporte Inteligente",
    description: "Otimize seu atendimento ao cliente com assistentes virtuais que resolvem dúvidas frequentes em tempo real."
  },
  {
    icon: PhoneCall,
    title: "Prospecção Ativa por Telefone",
    description: "Impulsione vendas com uma IA que qualifica leads, apresenta produtos e agenda reuniões automaticamente."
  },
  {
    icon: Cpu,
    title: "IA de Conversação Avançada (Jarvis)",
    description: "IA de ponta que atua como um assistente pessoal sofisticado, gerenciando tarefas e respondendo a perguntas complexas."
  },
  {
    icon: Calendar,
    title: "IA de Agendamento Inteligente",
    description: "Simplifique a gestão de compromissos. Nosso assistente cuida de agendamentos e lembretes sem intervenção humana."
  },
  {
    icon: Scale,
    title: "Suporte Jurídico com IA",
    description: "Agilize o trabalho legal pesquisando jurisprudências e analisando documentos críticos com alta precisão."
  }
];

const SolutionsSection = () => {
  return (
    <section id="solucoes" className="py-16 md:py-24 bg-[#09090b]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-poppins font-bold text-3xl md:text-5xl mb-4 md:mb-6 text-primary"
          >
            Soluções Inteligentes
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-poppins text-base md:text-lg text-white/60 max-w-2xl mx-auto"
          >
            Tecnologia de ponta para elevar o patamar de eficiência da sua empresa.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 md:gap-y-20 gap-x-12">
          {solutions.map((solution, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col items-center text-center px-4"
            >
              {/* Icon Container with Copper Glow */}
              <div className="relative mb-6 md:mb-8">
                {/* Glow layer - Brand Orange color */}
                <div className="absolute inset-0 bg-primary/5 blur-2xl rounded-full scale-150 group-hover:bg-primary/10 transition-colors duration-500" />
                
                <solution.icon 
                  size={40} 
                  strokeWidth={1.2}
                  className="text-primary md:w-[48px] md:h-[48px] relative z-10 drop-shadow-[0_0_8px_rgba(232,124,62,0.3)] group-hover:drop-shadow-[0_0_15px_rgba(232,124,62,0.6)] group-hover:scale-110 transition-all duration-500 ease-out"
                />
              </div>

              {/* Text Content */}
              <h3 className="font-poppins font-bold text-xl md:text-2xl text-primary mb-3 md:mb-4 group-hover:-translate-y-1 transition-transform duration-300 ease-out">
                {solution.title}
              </h3>
              
              <p className="font-poppins text-sm md:text-base text-white/70 leading-relaxed max-w-[280px]">
                {solution.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;