import { useRef, useEffect } from "react";

const logos = [
    { name: "n8n", url: "https://n8n.io/brandguidelines/logo-white.svg", size: "h-6 md:h-8" },
    { name: "Supabase", url: "https://companieslogo.com/img/orig/supabase_BIG.D-94f7cfaf.png?t=1720244494", size: "h-6 md:h-8" },
    { name: "CrewAI", url: "https://cdn.prod.website-files.com/68de1ee6d7c127849807d7a6/68de1ee6d7c127849807d7ef_Logo.svg", size: "h-6 md:h-8" },
    { name: "Lovable", url: "https://lovable.dev/img/logo/lovable-light-png.png", size: "h-5 md:h-6" },
    { name: "Nvidia", url: "https://www.pngarts.com/files/10/Nvidia-Logo-Transparent-Image.png", size: "h-8 md:h-10" },
    { name: "Wordpress", url: "https://s.w.org/style/images/about/WordPress-logotype-standard-white.png", size: "h-8 md:h-10" },
];

const PartnerMarquee = () => {
    return (
        <div className="w-full px-4 md:px-8 mt-0 relative z-20 pb-4">
            {/* Efeito Pilula Flutuante */}
            <div className="w-full max-w-5xl mx-auto h-20 md:h-24 relative overflow-hidden py-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-full shadow-2xl flex items-center">
            <div className="flex animate-scroll hover:pause gap-12 md:gap-16 min-w-full items-center">
                {/* Double the list to ensure seamless looping */}
                {[...logos, ...logos, ...logos, ...logos].map((logo, i) => (
                    <div
                        key={i}
                        className="flex-shrink-0 group relative flex items-center justify-center transition-all duration-500 hover:-translate-y-1 cursor-pointer px-8"
                    >
                        <img
                            src={logo.url}
                            alt={`${logo.name} logo`}
                            className={`${logo.size} w-auto object-contain transition-all duration-500 opacity-100 group-hover:drop-shadow-[0_0_8px_hsl(22,90%,48%,0.5)]`}
                            onError={(e) => {
                                // Fallback to text if image fails
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                                target.parentElement!.innerHTML = `<span class="text-xs font-mono font-bold tracking-widest text-muted-foreground uppercase group-hover:text-primary transition-colors">${logo.name}</span>`;
                            }}
                        />
                    </div>
                ))}
            </div>

            {/* Fades suaves para o efeito "pilula" transparente */}
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background/40 to-transparent z-10 pointer-events-none rounded-l-full" />
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background/40 to-transparent z-10 pointer-events-none rounded-r-full" />
        </div>
        </div>
    );
};

export default PartnerMarquee;
