import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background font-poppins">
      <Header />
      
      {/* Hero Header Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/10 to-accent/5">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h1 className="font-poppins font-bold text-4xl md:text-5xl text-primary mb-6">
              Política de Privacidade
            </h1>
            <p className="font-poppins text-xl text-foreground/80 max-w-3xl mx-auto">
              Entenda como protegemos suas informações e respeitamos sua privacidade
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
                  1. Informações que Coletamos
                </h2>
                <p className="leading-relaxed mb-4">
                  A Alavanca AI coleta informações que você nos fornece diretamente, como quando você:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Preenche nossos formulários de contato</li>
                  <li>Solicita demonstrações de nossos serviços</li>
                  <li>Se inscreve em nossa newsletter</li>
                  <li>Interage com nossos chatbots e assistentes virtuais</li>
                </ul>
              </section>

              <section>
                <h2 className="font-poppins font-semibold text-2xl text-primary mb-4">
                  2. Como Usamos suas Informações
                </h2>
                <p className="leading-relaxed mb-4">
                  Utilizamos as informações coletadas para:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Fornecer e melhorar nossos serviços de IA</li>
                  <li>Responder às suas solicitações e dúvidas</li>
                  <li>Enviar informações sobre nossos produtos e serviços</li>
                  <li>Personalizar sua experiência em nosso site</li>
                  <li>Cumprir obrigações legais e regulamentares</li>
                </ul>
              </section>

              <section>
                <h2 className="font-poppins font-semibold text-2xl text-primary mb-4">
                  3. Proteção de Dados
                </h2>
                <p className="leading-relaxed">
                  Implementamos medidas de segurança técnicas e organizacionais adequadas para 
                  proteger suas informações pessoais contra acesso não autorizado, alteração, 
                  divulgação ou destruição. Utilizamos criptografia, controles de acesso e 
                  monitoramento contínuo para garantir a segurança de seus dados.
                </p>
              </section>

              <section>
                <h2 className="font-poppins font-semibold text-2xl text-primary mb-4">
                  4. Compartilhamento de Informações
                </h2>
                <p className="leading-relaxed">
                  Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros, 
                  exceto quando necessário para fornecer nossos serviços ou quando exigido por lei.
                </p>
              </section>

              <section>
                <h2 className="font-poppins font-semibold text-2xl text-primary mb-4">
                  5. Seus Direitos
                </h2>
                <p className="leading-relaxed mb-4">
                  De acordo com a LGPD, você tem o direito de:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Acessar suas informações pessoais</li>
                  <li>Corrigir dados incorretos ou incompletos</li>
                  <li>Solicitar a exclusão de seus dados</li>
                  <li>Revogar seu consentimento a qualquer momento</li>
                  <li>Portabilidade de seus dados</li>
                </ul>
              </section>

              <section>
                <h2 className="font-poppins font-semibold text-2xl text-primary mb-4">
                  6. Contato
                </h2>
                <p className="leading-relaxed">
                  Se você tiver dúvidas sobre esta Política de Privacidade ou quiser exercer 
                  seus direitos, entre em contato conosco através do e-mail: 
                  <span className="text-primary font-medium"> contato@alavancaai.online</span>
                </p>
              </section>

              <section>
                <h2 className="font-poppins font-semibold text-2xl text-primary mb-4">
                  7. Alterações
                </h2>
                <p className="leading-relaxed">
                  Esta política pode ser atualizada periodicamente. Recomendamos que você 
                  revise esta página regularmente para se manter informado sobre como 
                  protegemos suas informações.
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

export default PrivacyPolicy;