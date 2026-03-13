import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const codeContent = `// Inicializando Protocolo Alavanca
const system = new AlavancaCore();

await system.analyze({
  domain: "alavancaai.online",
  target: "automation_scale"
});

system.deploy({
  neuralAgents: true,
  omnichannel: "active",
  performance: "100x"
});

console.log("Status: SYSTEM ONLINE");`;

const TechTerminal = () => {
  const [displayText, setDisplayText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [showGlow, setShowGlow] = useState(false);

  useEffect(() => {
    let index = 0;
    let typingTimer: NodeJS.Timeout;

    const startTyping = () => {
      index = 0;
      setDisplayText("");
      setIsTypingComplete(false);
      setShowGlow(false);

      const typeChar = () => {
        if (index < codeContent.length) {
          setDisplayText(codeContent.slice(0, index + 1));
          index++;
          typingTimer = setTimeout(typeChar, Math.random() * 30 + 10);
        } else {
          setIsTypingComplete(true);
          setShowGlow(true);
          
          // Reset after 5 seconds
          setTimeout(() => {
            // "Clear" terminal effect
            setDisplayText("");
            setTimeout(startTyping, 500);
          }, 5000);
        }
      };
      
      typeChar();
    };

    startTyping();

    return () => clearTimeout(typingTimer);
  }, []);

  // Syntax highlighting logic
  const renderHighlightedText = (text: string) => {
    const keywords = ["const", "await", "new"];
    const lines = text.split("\n");

    return lines.map((line, i) => {
      // Handle comments
      if (line.trim().startsWith("//")) {
        return (
          <div key={i} className="text-muted-foreground/60 italic">
            {line}
          </div>
        );
      }

      // Highlight keywords
      let parts: (string | JSX.Element)[] = [line];
      
      keywords.forEach((keyword) => {
        const newParts: (string | JSX.Element)[] = [];
        parts.forEach((part) => {
          if (typeof part === "string") {
            const regex = new RegExp(`(\\b${keyword}\\b)`, "g");
            const split = part.split(regex);
            split.forEach((s, idx) => {
              if (s === keyword) {
                newParts.push(
                  <span key={`${i}-${keyword}-${idx}`} className="text-[hsl(22,90%,48%)] font-semibold">
                    {s}
                  </span>
                );
              } else if (s !== "") {
                newParts.push(s);
              }
            });
          } else {
            newParts.push(part);
          }
        });
        parts = newParts;
      });

      return (
        <div key={i} className="min-h-[1.5rem]">
          {parts}
        </div>
      );
    });
  };

  return (
    <div className="w-full flex justify-center py-20 px-6 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-full md:w-[60%] relative"
      >
        {/* Terminal Window */}
        <div 
          className={`
            relative bg-[#0B0B0C] border border-white/10 rounded-[2px] 
            backdrop-blur-md shadow-2xl overflow-hidden
            transition-all duration-1000
            ${showGlow ? "shadow-[0_0_30px_rgba(235,94,40,0.15)] ring-1 ring-[hsl(22,90%,48%)]/20" : ""}
          `}
          style={{
            boxShadow: "inset 0 1px 1px rgba(255,255,255,0.05)"
          }}
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/5">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
              <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
              <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
            </div>
            <div className="text-[10px] md:text-xs font-mono text-muted-foreground/80 tracking-wider">
              alavanca-core.ts
            </div>
            <div className="w-12" /> {/* Spacer */}
          </div>

          {/* Terminal Body */}
          <div className="p-6 md:p-8 font-mono text-xs md:text-sm leading-relaxed text-white">
            <div className="relative">
              {renderHighlightedText(displayText)}
              
              {/* Cursor */}
              {!isTypingComplete && (
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ repeat: Infinity, duration: 0.6 }}
                  className="inline-block w-[2px] h-4 bg-[hsl(22,90%,48%)] align-middle ml-1"
                />
              )}

              {/* Console log highlight (Glow at end) */}
              <AnimatePresence>
                {showGlow && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 bg-gradient-to-t from-[hsl(22,90%,48%)]/5 to-transparent pointer-events-none"
                  />
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-[hsl(22,90%,48%)]/5 blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[hsl(22,90%,48%)]/5 blur-[100px] pointer-events-none" />
      </motion.div>
    </div>
  );
};

export default TechTerminal;
