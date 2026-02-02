import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import aiTrafficImage from "@/assets/ai-traffic-management.jpg";

const GestaoTrafegoIA = () => {
  return (
    <div className="min-h-screen bg-background font-poppins">
      <Header />
      <main className="pt-32">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-bold text-4xl md:text-6xl text-primary mb-6">
                Gestão de Tráfego com IA
              </h1>
              <p className="text-xl text-foreground/80 leading-relaxed">
                Como as Inteligências Artificiais estão dominando o tráfego pago, 
                com leitura de métricas muito mais apuradas e resultados muito além 
                do que previamos.
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
                  src={aiTrafficImage} 
                  alt="Gestão de Tráfego com IA" 
                  className="w-full rounded-lg shadow-lg"
                />
              </div>

              {/* Article Content */}
              <div className="prose prose-lg max-w-none">
                <Card className="mb-8 border-accent/20">
                  <CardContent className="p-8">
                    <h2 className="font-semibold text-2xl text-primary mb-4">
                      A Nova Era do Tráfego Pago
                    </h2>
                    <p className="text-foreground/80 leading-relaxed mb-6">
                      O marketing digital mudou para sempre. Enquanto gestores de tráfego 
                      tradicionais ainda ajustam campanhas manualmente, a Inteligência 
                      Artificial já está tomando milhares de decisões por segundo, 
                      otimizando orçamentos e direcionando anúncios com uma precisão 
                      que o cérebro humano jamais conseguiria alcançar.
                    </p>
                    <p className="text-foreground/80 leading-relaxed">
                      Não é mais sobre ser bom em tráfego pago. É sobre ter uma IA 
                      que é extraordinária em tráfego pago trabalhando para você.
                    </p>
                  </CardContent>
                </Card>

                <Card className="mb-8 border-accent/20">
                  <CardContent className="p-8">
                    <h2 className="font-semibold text-2xl text-primary mb-4">
                      Os Números que Revolucionaram o Mercado
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8 mb-6">
                      <div>
                        <div className="bg-primary/10 p-6 rounded-lg text-center">
                          <div className="text-3xl font-bold text-primary mb-2">847%</div>
                          <p className="text-foreground/80">Melhoria média no ROAS</p>
                        </div>
                      </div>
                      <div>
                        <div className="bg-accent/10 p-6 rounded-lg text-center">
                          <div className="text-3xl font-bold text-primary mb-2">73%</div>
                          <p className="text-foreground/80">Redução no custo por aquisição</p>
                        </div>
                      </div>
                      <div>
                        <div className="bg-primary/10 p-6 rounded-lg text-center">
                          <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                          <p className="text-foreground/80">Otimização contínua</p>
                        </div>
                      </div>
                      <div>
                        <div className="bg-accent/10 p-6 rounded-lg text-center">
                          <div className="text-3xl font-bold text-primary mb-2">10ms</div>
                          <p className="text-foreground/80">Tempo de resposta às mudanças</p>
                        </div>
                      </div>
                    </div>
                    <p className="text-foreground/80 leading-relaxed">
                      Estes resultados não são exceções. São a nova realidade para empresas 
                      que adotaram IA na gestão de tráfego pago nos últimos 18 meses.
                    </p>
                  </CardContent>
                </Card>

                <Card className="mb-8 border-accent/20">
                  <CardContent className="p-8">
                    <h2 className="font-semibold text-2xl text-primary mb-4">
                      Como a IA Supera Gestores Humanos
                    </h2>
                    
                    <div className="grid md:grid-cols-2 gap-8 mb-6">
                      <div>
                        <h3 className="font-semibold text-lg text-primary mb-4">Gestor Tradicional</h3>
                        <div className="space-y-3">
                          <div className="flex items-start space-x-3">
                            <span className="text-destructive text-xl">×</span>
                            <p className="text-foreground/70">Analisa dados uma vez por dia</p>
                          </div>
                          <div className="flex items-start space-x-3">
                            <span className="text-destructive text-xl">×</span>
                            <p className="text-foreground/70">Pode gerenciar 5-10 campanhas</p>
                          </div>
                          <div className="flex items-start space-x-3">
                            <span className="text-destructive text-xl">×</span>
                            <p className="text-foreground/70">Decisões baseadas em intuição</p>
                          </div>
                          <div className="flex items-start space-x-3">
                            <span className="text-destructive text-xl">×</span>
                            <p className="text-foreground/70">Trabalha 8 horas por dia</p>
                          </div>
                          <div className="flex items-start space-x-3">
                            <span className="text-destructive text-xl">×</span>
                            <p className="text-foreground/70">Comete erros humanos</p>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="font-semibold text-lg text-primary mb-4">IA Especializada</h3>
                        <div className="space-y-3">
                          <div className="flex items-start space-x-3">
                            <span className="text-primary text-xl">✓</span>
                            <p className="text-foreground/70">Analisa dados a cada milissegundo</p>
                          </div>
                          <div className="flex items-start space-x-3">
                            <span className="text-primary text-xl">✓</span>
                            <p className="text-foreground/70">Gerencia milhares simultaneamente</p>
                          </div>
                          <div className="flex items-start space-x-3">
                            <span className="text-primary text-xl">✓</span>
                            <p className="text-foreground/70">Decisões baseadas em dados</p>
                          </div>
                          <div className="flex items-start space-x-3">
                            <span className="text-primary text-xl">✓</span>
                            <p className="text-foreground/70">Trabalha 24/7 sem parar</p>
                          </div>
                          <div className="flex items-start space-x-3">
                            <span className="text-primary text-xl">✓</span>
                            <p className="text-foreground/70">Precisão matemática absoluta</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="mb-8 border-accent/20">
                  <CardContent className="p-8">
                    <h2 className="font-semibold text-2xl text-primary mb-4">
                      Transformações Reais em Números
                    </h2>
                    
                    <div className="space-y-8">
                      <div className="border-l-4 border-primary pl-6">
                        <h3 className="font-semibold text-lg text-primary mb-2">
                          E-commerce de Eletrônicos - R$ 15 milhões em faturamento adicional
                        </h3>
                        <p className="text-foreground/80 leading-relaxed mb-4">
                          Uma loja online gastava R$ 200.000 por mês em Google Ads e Facebook 
                          Ads com ROAS de 3:1. A IA implementada:
                        </p>
                        <ul className="space-y-2 text-foreground/70 mb-4">
                          <li>• Identificou 2.847 micro-segmentos de público</li>
                          <li>• Otimizou lances em tempo real baseado no comportamento</li>
                          <li>• Testou 156 variações de criativos automaticamente</li>
                          <li>• Redistribuiu orçamento entre campanhas a cada 15 minutos</li>
                        </ul>
                        <div className="bg-primary/5 p-4 rounded-lg">
                          <p className="font-medium text-primary">
                            Resultado: ROAS saltou para 12:1, gerando R$ 15 milhões adicionais 
                            com o mesmo orçamento de mídia.
                          </p>
                        </div>
                      </div>

                      <div className="border-l-4 border-accent pl-6">
                        <h3 className="font-semibold text-lg text-primary mb-2">
                          SaaS B2B - 1.200% de aumento na geração de leads
                        </h3>
                        <p className="text-foreground/80 leading-relaxed mb-4">
                          Uma empresa de software B2B lutava para encontrar decisores 
                          corretos no LinkedIn Ads. A IA desenvolvida:
                        </p>
                        <ul className="space-y-2 text-foreground/70 mb-4">
                          <li>• Mapeou 50.000 perfis de tomadores de decisão</li>
                          <li>• Criou mensagens personalizadas para cada segmento</li>
                          <li>• Ajustou horários de exibição por fuso horário</li>
                          <li>• Otimizou frequência baseada no ciclo de compra</li>
                        </ul>
                        <div className="bg-accent/5 p-4 rounded-lg">
                          <p className="font-medium text-primary">
                            Resultado: 1.200% de aumento na geração de leads qualificados 
                            e 67% de redução no custo por lead.
                          </p>
                        </div>
                      </div>

                      <div className="border-l-4 border-primary pl-6">
                        <h3 className="font-semibold text-lg text-primary mb-2">
                          Franquia de Alimentação - 890% de ROI em 8 meses
                        </h3>
                        <p className="text-foreground/80 leading-relaxed mb-4">
                          Uma rede de fast food com 30 unidades tinha campanhas 
                          despadronizadas e performance irregular. A IA criada:
                        </p>
                        <ul className="space-y-2 text-foreground/70 mb-4">
                          <li>• Unificou todas as campanhas em uma estratégia única</li>
                          <li>• Ajustou anúncios baseado no clima e eventos locais</li>
                          <li>• Otimizou cardápio promocional por região</li>
                          <li>• Sincronizou campanhas com estoque de cada loja</li>
                        </ul>
                        <div className="bg-primary/5 p-4 rounded-lg">
                          <p className="font-medium text-primary">
                            Resultado: 890% de ROI em 8 meses, com aumento médio de 
                            45% no ticket médio por unidade.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="mb-8 border-accent/20">
                  <CardContent className="p-8">
                    <h2 className="font-semibold text-2xl text-primary mb-4">
                      O Futuro Já Chegou: Capacidades Avançadas
                    </h2>
                    
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div className="bg-primary/5 p-6 rounded-lg">
                        <h3 className="font-semibold text-primary mb-3">Análise Preditiva</h3>
                        <p className="text-sm text-foreground/70">
                          A IA prevê tendências de mercado e ajusta campanhas antes 
                          mesmo dos concorrentes perceberem as mudanças.
                        </p>
                      </div>
                      
                      <div className="bg-accent/5 p-6 rounded-lg">
                        <h3 className="font-semibold text-primary mb-3">Criação Dinâmica</h3>
                        <p className="text-sm text-foreground/70">
                          Gera automaticamente milhares de variações de anúncios 
                          personalizados para cada micro-segmento.
                        </p>
                      </div>
                      
                      <div className="bg-primary/5 p-6 rounded-lg">
                        <h3 className="font-semibold text-primary mb-3">Cross-Platform</h3>
                        <p className="text-sm text-foreground/70">
                          Otimiza simultaneamente Google, Facebook, LinkedIn, TikTok 
                          e outras plataformas como um único ecossistema.
                        </p>
                      </div>
                      
                      <div className="bg-accent/5 p-6 rounded-lg">
                        <h3 className="font-semibold text-primary mb-3">Budget Allocation</h3>
                        <p className="text-sm text-foreground/70">
                          Redistribui orçamento entre campanhas, plataformas e 
                          objetivos em tempo real baseado na performance.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="mb-8 border-accent/20">
                  <CardContent className="p-8">
                    <h2 className="font-semibold text-2xl text-primary mb-4">
                      A Matemática do Sucesso
                    </h2>
                    <p className="text-foreground/80 leading-relaxed mb-6">
                      Vamos fazer uma conta real. Se você investe R$ 50.000 por mês 
                      em tráfego pago e tem um ROAS de 4:1:
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-8 mb-6">
                      <div className="bg-muted/20 p-6 rounded-lg">
                        <h3 className="font-semibold text-primary mb-4">Método Atual</h3>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-foreground/70">Investimento mensal:</span>
                            <span className="font-medium">R$ 50.000</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-foreground/70">ROAS atual:</span>
                            <span className="font-medium">4:1</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-foreground/70">Retorno mensal:</span>
                            <span className="font-medium">R$ 200.000</span>
                          </div>
                          <div className="flex justify-between border-t pt-3">
                            <span className="text-foreground/70">Lucro anual:</span>
                            <span className="font-medium">R$ 1.800.000</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-primary/10 p-6 rounded-lg">
                        <h3 className="font-semibold text-primary mb-4">Com IA Otimizada</h3>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-foreground/70">Investimento mensal:</span>
                            <span className="font-medium">R$ 50.000</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-foreground/70">ROAS com IA:</span>
                            <span className="font-medium text-primary">12:1</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-foreground/70">Retorno mensal:</span>
                            <span className="font-medium text-primary">R$ 600.000</span>
                          </div>
                          <div className="flex justify-between border-t pt-3">
                            <span className="text-foreground/70">Lucro anual:</span>
                            <span className="font-medium text-primary">R$ 6.600.000</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-accent/10 p-6 rounded-lg text-center">
                      <p className="text-lg font-medium text-primary mb-2">
                        Diferença anual: + R$ 4.800.000
                      </p>
                      <p className="text-foreground/70">
                        É isso que você está deixando na mesa todos os meses sem IA.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-primary/20 bg-gradient-to-r from-primary/5 to-accent/5">
                  <CardContent className="p-8 text-center">
                    <h2 className="font-semibold text-2xl text-primary mb-4">
                      Sua Concorrência Já Está Usando IA?
                    </h2>
                    <p className="text-foreground/80 leading-relaxed mb-6 max-w-2xl mx-auto">
                      Enquanto você otimiza campanhas manualmente, seus concorrentes 
                      podem estar usando IA para tomar milhares de decisões por segundo. 
                      A diferença nos resultados não é pequena - é astronômica.
                    </p>
                    <p className="text-lg font-medium text-primary mb-4">
                      Não deixe que a tecnologia do futuro seja exclusividade dos seus competidores.
                    </p>
                    <p className="text-foreground/80">
                      Entre em contato e descubra como dominar o tráfego pago com IA.
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

export default GestaoTrafegoIA;