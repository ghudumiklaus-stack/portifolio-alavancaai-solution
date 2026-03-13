import { useEffect, useRef, useState } from "react";
import Spline from "@splinetool/react-spline";
import type { Application } from "@splinetool/runtime";

interface SplineBackgroundProps {
  scene?: string;
}

export default function SplineBackground({
  scene = "https://prod.spline.design/pPwx7Chmrka0dXeW/scene.splinecode",
}: SplineBackgroundProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Aggressively remove all Spline branding (logo, "Built with Spline" badge)
  useEffect(() => {
    if (!isLoaded) return;

    const nuke = () => {
      // Remove any <a> tag linking to spline.design (the watermark badge)
      document.querySelectorAll("a[href*='spline']").forEach((el) => {
        (el as HTMLElement).style.display = "none";
      });

      // Remove any element containing the text "Built with Spline"
      document.querySelectorAll("*").forEach((el) => {
        if (
          el.children.length === 0 &&
          el.textContent?.includes("Built with Spline")
        ) {
          (el as HTMLElement).style.display = "none";
          const parent = el.parentElement as HTMLElement | null;
          if (parent?.style) parent.style.display = "none";
        }
      });
    };

    nuke();

    // Watch for late-injected nodes
    const observer = new MutationObserver(nuke);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, [isLoaded]);

  function handleLoad(_spline: Application) {
    setIsLoaded(true);

    // Force canvas to fill the parent container
    if (containerRef.current) {
      const canvas = containerRef.current.querySelector("canvas");
      if (canvas) {
        Object.assign(canvas.style, {
          width: "100%",
          height: "100%",
          position: "absolute",
          inset: "0",
        });
      }
    }
  }

  return (
    <>
      {/* Kill Spline branding via CSS — covers all known selectors */}
      <style>{`
        a[href*="spline.design"],
        [class*="spline-watermark"],
        [data-spline-watermark],
        spline-viewer::part(logo),
        spline-viewer::part(watermark) {
          display: none !important;
          opacity: 0 !important;
          pointer-events: none !important;
        }
        .spline-container canvas {
          width: 100% !important;
          height: 100% !important;
        }
      `}</style>

      <div
        ref={containerRef}
        className="spline-container"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
      >
        {/* Dark background shimmer while 3D scene loads */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            background: "#0a0a0a",
            transition: "opacity 0.8s ease",
            opacity: isLoaded ? 0 : 1,
            pointerEvents: "none",
            zIndex: 1,
          }}
        />

        <Spline
          scene={scene}
          onLoad={handleLoad}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
          }}
        />

        {/* Orange tint overlay — mix-blend-mode:hue shifts cyan/blue → brand orange */}
        {/* pointer-events: none so mouse events still reach the Spline canvas below */}
        {isLoaded && (
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: 0,
              background: "hsl(22, 90%, 48%)",
              mixBlendMode: "hue",
              opacity: 0.85,
              pointerEvents: "none",
              zIndex: 2,
            }}
          />
        )}
      </div>
    </>
  );
}
