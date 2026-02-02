'use client'

import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"
 
export function SplineSceneSection() {
  return (
    <Card className="w-full h-[500px] bg-gradient-to-br from-background/50 to-primary/5 relative overflow-hidden border-border/50">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="hsl(var(--primary))"
      />
      
      <div className="flex h-full">
        {/* Left content */}
        <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
          <h1 className="font-poppins text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-primary to-primary/60">
            Inteligência Artificial
          </h1>
          <h2 className="font-poppins text-2xl md:text-3xl font-semibold text-primary mt-2">
            do Futuro
          </h2>
          <p className="font-poppins mt-6 text-foreground/80 max-w-lg leading-relaxed">
            Transformamos ideias complexas em soluções inteligentes e interativas. 
            Nossa tecnologia de IA cria experiências imersivas que revolucionam 
            a forma como você interage com dados e processos empresariais.
          </p>
        </div>

        {/* Right content */}
        <div className="flex-1 relative">
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>
    </Card>
  )
}