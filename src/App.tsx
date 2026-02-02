import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Solutions from "./pages/Solutions";
import Contact from "./pages/Contact";
import Upload from "./pages/Upload";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";
import NotFound from "./pages/NotFound";
import DashboardsPersonalizados from "./pages/DashboardsPersonalizados";
import IAAtendimentoVendas from "./pages/IAAtendimentoVendas";
import GestaoTrafegoIA from "./pages/GestaoTrafegoIA";
import AutomacaoProcessos from "./pages/AutomacaoProcessos";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
          <Route path="/dashboards-personalizados" element={<DashboardsPersonalizados />} />
          <Route path="/ia-atendimento-vendas" element={<IAAtendimentoVendas />} />
          <Route path="/gestao-trafego-ia" element={<GestaoTrafegoIA />} />
          <Route path="/automacao-processos" element={<AutomacaoProcessos />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
