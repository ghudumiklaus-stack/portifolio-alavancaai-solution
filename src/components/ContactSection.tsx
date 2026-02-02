import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const contactSchema = z.object({
  nome: z.string().trim().min(1, "Nome é obrigatório").max(100, "Nome muito longo"),
  email: z.string().trim().email("E-mail inválido").max(255, "E-mail muito longo"),
  telefone: z.string().trim().max(20, "Telefone muito longo"),
  empresa: z.string().trim().max(100, "Nome da empresa muito longo"),
  mensagem: z.string().trim().min(1, "Mensagem é obrigatória").max(1000, "Mensagem muito longa"),
});

const ContactSection = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validação com zod
    const dadosParaPlanilha = {
      nome: nome.trim(),
      email: email.trim(),
      telefone: telefone.trim(),
      empresa: empresa.trim(),
      mensagem: mensagem.trim(),
    };

    const validation = contactSchema.safeParse(dadosParaPlanilha);
    
    if (!validation.success) {
      const firstError = validation.error.errors[0];
      toast({
        title: "Erro de validação",
        description: firstError.message,
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    const sheetDB_URL = "https://sheetdb.io/api/v1/jwh001gohrbam";

    // O SheetDB espera o corpo no formato { data: { "Nome Coluna": "valor" } }
    const dadosParaSheetDB = {
      data: {
        "Nome": dadosParaPlanilha.nome,
        "Email": dadosParaPlanilha.email,
        "Telefone": dadosParaPlanilha.telefone,
        "Empresa": dadosParaPlanilha.empresa,
        "Mensagem": dadosParaPlanilha.mensagem,
      },
    };

    try {
      // Criar uma Promise com timeout
      const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => reject(new Error("Timeout")), 10000);
      });

      const fetchPromise = fetch(sheetDB_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dadosParaSheetDB),
      });

      const resposta = (await Promise.race([fetchPromise, timeoutPromise])) as Response;

      // Verifica o status HTTP
      if (resposta.ok) {
        toast({
          title: "Mensagem enviada!",
          description: "Em breve entraremos em contato.",
        });

        // Limpar formulário
        setNome("");
        setEmail("");
        setTelefone("");
        setEmpresa("");
        setMensagem("");
      } else {
        console.error("Erro no SheetDB:", await resposta.text());
        toast({
          title: "Erro ao enviar",
          description: "Por favor, tente novamente mais tarde.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);

      if (error instanceof Error && error.message === "Timeout") {
        toast({
          title: "Tempo esgotado",
          description: "A requisição demorou muito. Tente novamente.",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Erro ao enviar",
          description: "Por favor, tente novamente mais tarde.",
          variant: "destructive",
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contato" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-4xl md:text-5xl text-primary mb-6">
            Pronto para Alavancar o seu Potencial?
          </h2>
          <p className="font-poppins text-xl text-foreground/80 max-w-3xl mx-auto">
            Entre em contato conosco e descubra como a inteligência artificial pode
            transformar seu negócio.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="p-8 border-border/50">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="font-poppins font-medium text-primary">
                    Nome Completo
                  </Label>
                  <Input
                    id="name"
                    placeholder="Seu nome completo"
                    className="font-poppins"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="font-poppins font-medium text-primary">
                    E-mail
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    className="font-poppins"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone" className="font-poppins font-medium text-primary">
                    Telefone
                  </Label>
                  <Input
                    id="phone"
                    placeholder="(11) 99999-9999"
                    className="font-poppins"
                    value={telefone}
                    onChange={(e) => setTelefone(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company" className="font-poppins font-medium text-primary">
                    Empresa
                  </Label>
                  <Input
                    id="company"
                    placeholder="Nome da sua empresa"
                    className="font-poppins"
                    value={empresa}
                    onChange={(e) => setEmpresa(e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="font-poppins font-medium text-primary">
                  Mensagem
                </Label>
                <Textarea
                  id="message"
                  placeholder="Conte-nos sobre seu projeto e como podemos ajudar..."
                  className="font-poppins min-h-32"
                  value={mensagem}
                  onChange={(e) => setMensagem(e.target.value)}
                  required
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full font-poppins font-medium"
                disabled={isLoading}
              >
                {isLoading ? "Enviando..." : "Enviar Mensagem"}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;