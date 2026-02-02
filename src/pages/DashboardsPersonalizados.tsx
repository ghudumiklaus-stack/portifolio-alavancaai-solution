import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import dashboardImage from "@/assets/dashboard-analytics.png";

const DashboardsPersonalizados = () => {
  return (
    <div className="min-h-screen bg-background font-poppins">
      <Header />
      <main className="pt-32">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-bold text-4xl md:text-6xl text-primary mb-6">
                Dashboards Personalizados
              </h1>
              <p className="text-xl text-foreground/80 leading-relaxed">
                Como ter um dashboard feito sob medida para o seu negócio pode ser a diferença 
                entre o sucesso e o fracasso na gestão empresarial moderna.
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
                  src={dashboardImage} 
                  alt="Dashboard personalizado" 
                  className="w-full rounded-lg shadow-lg"
                />
              </div>

              {/* Article Content */}
              <div className="prose prose-lg max-w-none">
                <Card className="mb-8 border-accent/20">
                  <CardContent className="p-8">
                    <h2 className="font-semibold text-2xl text-primary mb-4">
                      A Era da Decisão Baseada em Dados
                    </h2>
                    <p className="text-foreground/80 leading-relaxed mb-6">
                      No mundo empresarial atual, tomar decisões baseadas em intuição é um luxo que 
                      nenhuma empresa pode se dar. Os dados estão por toda parte, mas transformá-los 
                      em insights acionáveis é o que separa empresas bem-sucedidas das que ficam para trás.
                    </p>
                    <p className="text-foreground/80 leading-relaxed">
                      Um dashboard personalizado não é apenas uma ferramenta de visualização - é o 
                      centro de comando da sua operação, o cérebro que processa informações complexas 
                      e as apresenta de forma clara e acionável.
                    </p>
                  </CardContent>
                </Card>

                <Card className="mb-8 border-accent/20">
                  <CardContent className="p-8">
                    <h2 className="font-semibold text-2xl text-primary mb-4">
                      Por Que Dashboards Genéricos Não Funcionam
                    </h2>
                    <p className="text-foreground/80 leading-relaxed mb-6">
                      Muitas empresas começam com soluções prontas, pensando que qualquer dashboard 
                      serve. Essa abordagem falha porque cada negócio tem suas particularidades, 
                      métricas específicas e objetivos únicos.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h3 className="font-semibold text-lg text-primary mb-3">Problemas Comuns:</h3>
                        <ul className="space-y-2 text-foreground/80">
                          <li>• Métricas irrelevantes para seu negócio</li>
                          <li>• Interface confusa e não intuitiva</li>
                          <li>• Dados desatualizados ou imprecisos</li>
                          <li>• Falta de integração com sistemas existentes</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-primary mb-3">Consequências:</h3>
                        <ul className="space-y-2 text-foreground/80">
                          <li>• Decisões baseadas em informações incorretas</li>
                          <li>• Perda de tempo procurando dados</li>
                          <li>• Oportunidades perdidas</li>
                          <li>• Resistência da equipe ao uso</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="mb-8 border-accent/20">
                  <CardContent className="p-8">
                    <h2 className="font-semibold text-2xl text-primary mb-4">
                      O Poder de um Dashboard Sob Medida
                    </h2>
                    <p className="text-foreground/80 leading-relaxed mb-6">
                      Um dashboard personalizado é como ter um assistente executivo digital que 
                      nunca dorme. Ele monitora constantemente os aspectos mais críticos do seu 
                      negócio e apresenta insights no momento exato em que você precisa.
                    </p>
                    
                    <div className="bg-accent/10 p-6 rounded-lg mb-6">
                      <h3 className="font-semibold text-lg text-primary mb-3">Características Essenciais:</h3>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium text-primary">KPIs Personalizados</h4>
                          <p className="text-sm text-foreground/70">
                            Métricas específicas que realmente importam para seu modelo de negócio
                          </p>
                        </div>
                        <div>
                          <h4 className="font-medium text-primary">Tempo Real</h4>
                          <p className="text-sm text-foreground/70">
                            Dados atualizados automaticamente para decisões instantâneas
                          </p>
                        </div>
                        <div>
                          <h4 className="font-medium text-primary">Interface Intuitiva</h4>
                          <p className="text-sm text-foreground/70">
                            Design pensado especificamente para seu fluxo de trabalho
                          </p>
                        </div>
                        <div>
                          <h4 className="font-medium text-primary">Alertas Inteligentes</h4>
                          <p className="text-sm text-foreground/70">
                            Notificações automáticas quando métricas saem do padrão
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="mb-8 border-accent/20">
                  <CardContent className="p-8">
                    <h2 className="font-semibold text-2xl text-primary mb-4">
                      Casos de Sucesso Reais
                    </h2>
                    <div className="space-y-6">
                      <div className="border-l-4 border-accent pl-6">
                        <h3 className="font-semibold text-lg text-primary mb-2">E-commerce - 300% de Aumento nas Vendas</h3>
                        <p className="text-foreground/80 leading-relaxed">
                          Uma loja online implementou um dashboard que monitora em tempo real: 
                          carrinho abandonado, produtos mais vistos, origem do tráfego e conversões. 
                          O resultado foi um aumento de 300% nas vendas em 6 meses através de 
                          otimizações baseadas nos insights do dashboard.
                        </p>
                      </div>
                      
                      <div className="border-l-4 border-accent pl-6">
                        <h3 className="font-semibold text-lg text-primary mb-2">Restaurante - 40% de Redução no Desperdício</h3>
                        <p className="text-foreground/80 leading-relaxed">
                          Um restaurante criou um dashboard que monitora estoque, vendas por prato 
                          e previsão de demanda. Com essas informações, reduziu o desperdício em 40% 
                          e aumentou a margem de lucro em 25%.
                        </p>
                      </div>
                      
                      <div className="border-l-4 border-accent pl-6">
                        <h3 className="font-semibold text-lg text-primary mb-2">Agência de Marketing - 50% Mais Eficiência</h3>
                        <p className="text-foreground/80 leading-relaxed">
                          Uma agência desenvolveu um dashboard que unifica dados de todas as 
                          campanhas dos clientes. A equipe economiza 20 horas por semana em 
                          relatórios e pode focar 50% mais tempo em estratégia.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="mb-8 border-accent/20">
                  <CardContent className="p-8">
                    <h2 className="font-semibold text-2xl text-primary mb-4">
                      O Processo de Criação
                    </h2>
                    <p className="text-foreground/80 leading-relaxed mb-6">
                      Criar um dashboard verdadeiramente eficaz não é apenas sobre tecnologia - 
                      é sobre entender profundamente seu negócio e traduzir essa compreensão 
                      em uma ferramenta poderosa.
                    </p>
                    
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-2xl font-bold text-primary">1</span>
                        </div>
                        <h3 className="font-semibold text-primary mb-2">Análise Profunda</h3>
                        <p className="text-sm text-foreground/70">
                          Mapeamos seus processos, objetivos e desafios específicos
                        </p>
                      </div>
                      
                      <div className="text-center">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-2xl font-bold text-primary">2</span>
                        </div>
                        <h3 className="font-semibold text-primary mb-2">Design Inteligente</h3>
                        <p className="text-sm text-foreground/70">
                          Criamos uma interface que fala sua linguagem de negócio
                        </p>
                      </div>
                      
                      <div className="text-center">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-2xl font-bold text-primary">3</span>
                        </div>
                        <h3 className="font-semibold text-primary mb-2">Implementação</h3>
                        <p className="text-sm text-foreground/70">
                          Integramos com seus sistemas e treinamos sua equipe
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-primary/20 bg-gradient-to-r from-primary/5 to-accent/5">
                  <CardContent className="p-8 text-center">
                    <h2 className="font-semibold text-2xl text-primary mb-4">
                      Pronto para Transformar sua Gestão?
                    </h2>
                    <p className="text-foreground/80 leading-relaxed mb-6 max-w-2xl mx-auto">
                      Não deixe que dados valiosos se percam em planilhas desorganizadas. 
                      Um dashboard personalizado pode ser o diferencial que sua empresa precisa 
                      para alcançar o próximo nível.
                    </p>
                    <p className="text-lg font-medium text-primary">
                      Entre em contato e descubra como podemos criar a solução perfeita para seu negócio.
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

export default DashboardsPersonalizados;