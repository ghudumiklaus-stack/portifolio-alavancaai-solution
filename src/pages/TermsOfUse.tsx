import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermsOfUse = () => {
  return (
    <div className="min-h-screen bg-background font-poppins">
      <Header />
      
      {/* Hero Header Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/10 to-accent/5">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h1 className="font-poppins font-bold text-4xl md:text-5xl text-primary mb-6">
              Termos de Uso
            </h1>
            <p className="font-poppins text-xl text-foreground/80 max-w-3xl mx-auto">
              Conheça os termos e condições para utilização de nossos serviços
            </p>
          </div>
        </div>
      </section>

      <main className="pb-20">
        <div className="container mx-auto px-6 max-w-4xl py-16">
          
          <div className="prose prose-lg max-w-none">
            <div className="space-y-8 text-foreground/80">
              <section>
                <h2 className="font-poppins font-semibold text-2xl text-primary mb-4">
                  1. Aceitação dos Termos
                </h2>
                <p className="leading-relaxed">
                  Ao acessar e usar o site da Alavanca AI, você concorda em cumprir e estar 
                  vinculado aos termos e condições de uso descritos abaixo. Se você não 
                  concordar com algum destes termos, não deve usar nossos serviços.
                </p>
              </section>

              <section>
                <h2 className="font-poppins font-semibold text-2xl text-primary mb-4">
                  2. Descrição dos Serviços
                </h2>
                <p className="leading-relaxed mb-4">
                  A Alavanca AI oferece soluções de inteligência artificial, incluindo:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Chatbots inteligentes para atendimento ao cliente</li>
                  <li>Análise preditiva e business intelligence</li>
                  <li>Automação de processos industriais</li>
                  <li>Sistemas de visão computacional</li>
                  <li>Produção de vídeos com IA</li>
                </ul>
              </section>

              <section>
                <h2 className="font-poppins font-semibold text-2xl text-primary mb-4">
                  3. Uso Adequado
                </h2>
                <p className="leading-relaxed mb-4">
                  Você concorda em usar nossos serviços apenas para fins legais e de acordo com estes termos. É proibido:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Usar nossos serviços para atividades ilegais ou não autorizadas</li>
                  <li>Tentar acessar sistemas ou dados não autorizados</li>
                  <li>Interferir no funcionamento de nossos serviços</li>
                  <li>Reproduzir, duplicar ou copiar nossos serviços sem autorização</li>
                  <li>Transmitir conteúdo malicioso ou prejudicial</li>
                </ul>
              </section>

              <section>
                <h2 className="font-poppins font-semibold text-2xl text-primary mb-4">
                  4. Propriedade Intelectual
                </h2>
                <p className="leading-relaxed">
                  Todo o conteúdo, software, designs, textos, gráficos, logos e outros materiais 
                  em nosso site são propriedade da Alavanca AI ou de nossos licenciadores e estão 
                  protegidos por leis de direitos autorais e propriedade intelectual.
                </p>
              </section>

              <section>
                <h2 className="font-poppins font-semibold text-2xl text-primary mb-4">
                  5. Limitação de Responsabilidade
                </h2>
                <p className="leading-relaxed">
                  A Alavanca AI não será responsável por quaisquer danos diretos, indiretos, 
                  incidentais, especiais ou consequenciais resultantes do uso ou incapacidade 
                  de usar nossos serviços, mesmo que tenhamos sido informados da possibilidade 
                  de tais danos.
                </p>
              </section>

              <section>
                <h2 className="font-poppins font-semibold text-2xl text-primary mb-4">
                  6. Privacidade e Proteção de Dados
                </h2>
                <p className="leading-relaxed">
                  Respeitamos sua privacidade e nos comprometemos a proteger suas informações 
                  pessoais de acordo com nossa Política de Privacidade e as leis aplicáveis, 
                  incluindo a Lei Geral de Proteção de Dados (LGPD).
                </p>
              </section>

              <section>
                <h2 className="font-poppins font-semibold text-2xl text-primary mb-4">
                  7. Modificações dos Termos
                </h2>
                <p className="leading-relaxed">
                  Reservamo-nos o direito de modificar estes termos a qualquer momento. 
                  As alterações entrarão em vigor imediatamente após a publicação no site. 
                  É sua responsabilidade revisar periodicamente estes termos.
                </p>
              </section>

              <section>
                <h2 className="font-poppins font-semibold text-2xl text-primary mb-4">
                  8. Lei Aplicável
                </h2>
                <p className="leading-relaxed">
                  Estes termos são regidos pelas leis brasileiras. Qualquer disputa será 
                  resolvida nos tribunais competentes do Brasil.
                </p>
              </section>

              <section>
                <h2 className="font-poppins font-semibold text-2xl text-primary mb-4">
                  9. Contato
                </h2>
                <p className="leading-relaxed">
                  Para questões relacionadas a estes termos, entre em contato conosco através 
                  do e-mail: <span className="text-primary font-medium">contato@alavancaai.online</span>
                </p>
              </section>

              <div className="mt-12 p-6 bg-muted/30 rounded-lg">
                <p className="text-sm text-foreground/60">
                  <strong>Última atualização:</strong> 26 de agosto de 2024
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfUse;