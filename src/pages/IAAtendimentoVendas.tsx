import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import aiSalesImage from "@/assets/ai-sales-assistant.jpg";

const IAAtendimentoVendas = () => {
  return (
    <div className="min-h-screen bg-background font-poppins">
      <Header />
      <main className="pt-32">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-bold text-4xl md:text-6xl text-primary mb-6">
                IA de Atendimento e Vendas
              </h1>
              <p className="text-xl text-foreground/80 leading-relaxed">
                Como empresas estão economizando milhões e multiplicando seus resultados 
                com sistemas inteligentes de atendimento e vendas que nunca dormem.
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              {/* Featured Image */}
              <div className="mb-12">
                <img 
                  src={aiSalesImage} 
                  alt="IA de Atendimento e Vendas" 
                  className="w-full rounded-lg shadow-lg"
                />
              </div>

              {/* Article Content */}
              <div className="prose prose-lg max-w-none">
                <Card className="mb-8 border-accent/20">
                  <CardContent className="p-8">
                    <h2 className="font-semibold text-2xl text-primary mb-4">
                      A Revolução Silenciosa nas Vendas
                    </h2>
                    <p className="text-foreground/80 leading-relaxed mb-6">
                      Enquanto você dorme, sua concorrência pode estar fechando negócios. 
                      Enquanto sua equipe está em reunião, leads valiosos podem estar 
                      abandonando sua página. Enquanto você está de férias, oportunidades 
                      de milhões podem estar escorrendo pelos dedos.
                    </p>
                    <p className="text-foreground/80 leading-relaxed">
                      A IA de atendimento e vendas mudou completamente esse cenário. 
                      Agora, empresas inteligentes têm vendedores que trabalham 24/7, 
                      nunca ficam cansados, nunca têm um dia ruim e sempre dão o melhor 
                      de si para cada cliente.
                    </p>
                  </CardContent>
                </Card>

                <Card className="mb-8 border-accent/20">
                  <CardContent className="p-8">
                    <h2 className="font-semibold text-2xl text-primary mb-4">
                      Os Números que Impressionam
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8 mb-6">
                      <div>
                        <div className="bg-primary/10 p-6 rounded-lg text-center">
                          <div className="text-3xl font-bold text-primary mb-2">400%</div>
                          <p className="text-foreground/80">Aumento médio na conversão de leads</p>
                        </div>
                      </div>
                      <div>
                        <div className="bg-accent/10 p-6 rounded-lg text-center">
                          <div className="text-3xl font-bold text-primary mb-2">80%</div>
                          <p className="text-foreground/80">Redução no tempo de resposta</p>
                        </div>
                      </div>
                      <div>
                        <div className="bg-primary/10 p-6 rounded-lg text-center">
                          <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                          <p className="text-foreground/80">Disponibilidade total</p>
                        </div>
                      </div>
                      <div>
                        <div className="bg-accent/10 p-6 rounded-lg text-center">
                          <div className="text-3xl font-bold text-primary mb-2">300%</div>
                          <p className="text-foreground/80">ROI médio em 12 meses</p>
                        </div>
                      </div>
                    </div>
                    <p className="text-foreground/80 leading-relaxed">
                      Estes não são números de fantasia. São resultados reais de empresas 
                      que implementaram sistemas de IA para atendimento e vendas nos últimos 
                      dois anos.
                    </p>
                  </CardContent>
                </Card>

                <Card className="mb-8 border-accent/20">
                  <CardContent className="p-8">
                    <h2 className="font-semibold text-2xl text-primary mb-4">
                      Casos de Transformação Real
                    </h2>
                    
                    <div className="space-y-8">
                      <div className="border-l-4 border-primary pl-6">
                        <h3 className="font-semibold text-lg text-primary mb-2">
                          E-commerce de Moda - R$ 2,3 milhões em vendas adicionais
                        </h3>
                        <p className="text-foreground/80 leading-relaxed mb-4">
                          Uma loja online de roupas estava perdendo 70% dos visitantes sem 
                          qualquer interação. Implementamos uma IA que:
                        </p>
                        <ul className="space-y-2 text-foreground/70 mb-4">
                          <li>• Iniciava conversas baseadas no comportamento do usuário</li>
                          <li>• Recomendava produtos personalizados</li>
                          <li>• Respondia dúvidas sobre tamanhos e materiais</li>
                          <li>• Recuperava carrinho abandonados automaticamente</li>
                        </ul>
                        <div className="bg-primary/5 p-4 rounded-lg">
                          <p className="font-medium text-primary">
                            Resultado: R$ 2,3 milhões em vendas adicionais no primeiro ano, 
                            com 45% de aumento na conversão geral.
                          </p>
                        </div>
                      </div>

                      <div className="border-l-4 border-accent pl-6">
                        <h3 className="font-semibold text-lg text-primary mb-2">
                          Clínica Médica - 500% mais agendamentos
                        </h3>
                        <p className="text-foreground/80 leading-relaxed mb-4">
                          Uma clínica especializada recebia muitas ligações fora do horário 
                          comercial e perdia pacientes para a concorrência. A IA implementada:
                        </p>
                        <ul className="space-y-2 text-foreground/70 mb-4">
                          <li>• Agendava consultas automaticamente 24h</li>
                          <li>• Respondia dúvidas sobre procedimentos</li>
                          <li>• Enviava lembretes personalizados</li>
                          <li>• Qualificava pacientes por especialidade</li>
                        </ul>
                        <div className="bg-accent/5 p-4 rounded-lg">
                          <p className="font-medium text-primary">
                            Resultado: 500% de aumento nos agendamentos e redução de 60% 
                            no trabalho administrativo da recepção.
                          </p>
                        </div>
                      </div>

                      <div className="border-l-4 border-primary pl-6">
                        <h3 className="font-semibold text-lg text-primary mb-2">
                          Imobiliária - R$ 8 milhões em negócios fechados
                        </h3>
                        <p className="text-foreground/80 leading-relaxed mb-4">
                          Uma imobiliária com 50 corretores estava perdendo leads porque 
                          a resposta era muito lenta. A IA criada:
                        </p>
                        <ul className="space-y-2 text-foreground/70 mb-4">
                          <li>• Respondia interessados em menos de 30 segundos</li>
                          <li>• Agendava visitas automaticamente</li>
                          <li>• Qualificava leads por perfil financeiro</li>
                          <li>• Acompanhava negociações em andamento</li>
                        </ul>
                        <div className="bg-primary/5 p-4 rounded-lg">
                          <p className="font-medium text-primary">
                            Resultado: R$ 8 milhões em negócios fechados que antes seriam 
                            perdidos, com 40% de redução no ciclo de vendas.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="mb-8 border-accent/20">
                  <CardContent className="p-8">
                    <h2 className="font-semibold text-2xl text-primary mb-4">
                      Por Que a IA é Superior aos Métodos Tradicionais
                    </h2>
                    
                    <div className="grid md:grid-cols-2 gap-8 mb-6">
                      <div>
                        <h3 className="font-semibold text-lg text-primary mb-4">Método Tradicional</h3>
                        <div className="space-y-3">
                          <div className="flex items-start space-x-3">
                            <span className="text-destructive text-xl">×</span>
                            <p className="text-foreground/70">Horário comercial limitado</p>
                          </div>
                          <div className="flex items-start space-x-3">
                            <span className="text-destructive text-xl">×</span>
                            <p className="text-foreground/70">Resposta pode demorar horas</p>
                          </div>
                          <div className="flex items-start space-x-3">
                            <span className="text-destructive text-xl">×</span>
                            <p className="text-foreground/70">Qualidade varia por vendedor</p>
                          </div>
                          <div className="flex items-start space-x-3">
                            <span className="text-destructive text-xl">×</span>
                            <p className="text-foreground/70">Custo crescente com escala</p>
                          </div>
                          <div className="flex items-start space-x-3">
                            <span className="text-destructive text-xl">×</span>
                            <p className="text-foreground/70">Dados perdidos ou esquecidos</p>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="font-semibold text-lg text-primary mb-4">Com IA Inteligente</h3>
                        <div className="space-y-3">
                          <div className="flex items-start space-x-3">
                            <span className="text-primary text-xl">✓</span>
                            <p className="text-foreground/70">Disponível 24 horas, 365 dias</p>
                          </div>
                          <div className="flex items-start space-x-3">
                            <span className="text-primary text-xl">✓</span>
                            <p className="text-foreground/70">Resposta instantânea</p>
                          </div>
                          <div className="flex items-start space-x-3">
                            <span className="text-primary text-xl">✓</span>
                            <p className="text-foreground/70">Qualidade consistente sempre</p>
                          </div>
                          <div className="flex items-start space-x-3">
                            <span className="text-primary text-xl">✓</span>
                            <p className="text-foreground/70">Custo fixo independente da escala</p>
                          </div>
                          <div className="flex items-start space-x-3">
                            <span className="text-primary text-xl">✓</span>
                            <p className="text-foreground/70">Memória perfeita de cada interação</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="mb-8 border-accent/20">
                  <CardContent className="p-8">
                    <h2 className="font-semibold text-2xl text-primary mb-4">
                      O ROI que Muda Tudo
                    </h2>
                    <p className="text-foreground/80 leading-relaxed mb-6">
                      Vamos fazer uma conta simples. Se sua empresa perde apenas 10 leads 
                      por mês por demora no atendimento, e cada lead vale R$ 1.000 em média:
                    </p>
                    
                    <div className="bg-accent/10 p-6 rounded-lg mb-6">
                      <div className="grid md:grid-cols-3 gap-6 text-center">
                        <div>
                          <div className="text-2xl font-bold text-primary mb-2">R$ 10.000</div>
                          <p className="text-foreground/70">Perda mensal</p>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-primary mb-2">R$ 120.000</div>
                          <p className="text-foreground/70">Perda anual</p>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-primary mb-2">R$ 600.000</div>
                          <p className="text-foreground/70">Perda em 5 anos</p>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-foreground/80 leading-relaxed mb-6">
                      Agora imagine recuperar não apenas esses 10 leads, mas aumentar 
                      sua conversão geral em 200%. O investimento em IA se paga em 
                      poucos meses e continua gerando retorno por anos.
                    </p>
                    
                    <div className="border-l-4 border-primary pl-6">
                      <p className="font-medium text-primary text-lg">
                        "A melhor IA de vendas não é a que mais parece humana, 
                        é a que mais vende."
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-primary/20 bg-gradient-to-r from-primary/5 to-accent/5">
                  <CardContent className="p-8 text-center">
                    <h2 className="font-semibold text-2xl text-primary mb-4">
                      Sua Equipe de Vendas Está Dormindo?
                    </h2>
                    <p className="text-foreground/80 leading-relaxed mb-6 max-w-2xl mx-auto">
                      Enquanto você lê isso, leads estão visitando seu site, preenchendo 
                      formulários e esperando uma resposta. Quantos você está perdendo 
                      neste exato momento?
                    </p>
                    <p className="text-lg font-medium text-primary mb-4">
                      Não deixe que a concorrência capture seus clientes enquanto você dorme.
                    </p>
                    <p className="text-foreground/80">
                      Entre em contato e descubra como uma IA pode trabalhar para você 24/7.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default IAAtendimentoVendas;