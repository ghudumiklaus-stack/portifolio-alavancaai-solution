import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import officeTeamImage from "@/assets/office-team.jpg";

const AutomacaoProcessos = () => {
  return (
    <div className="min-h-screen bg-background font-poppins">
      <Header />
      <main className="pt-32">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-bold text-4xl md:text-6xl text-primary mb-6">
                Automação de Processos
              </h1>
              <p className="text-xl text-foreground/80 leading-relaxed">
                Como a inteligência artificial está revolucionando processos empresariais, 
                eliminando tarefas manuais e multiplicando a produtividade das equipes.
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
                  src={officeTeamImage} 
                  alt="Automação de Processos" 
                  className="w-full rounded-lg shadow-lg"
                />
              </div>

              {/* Article Content */}
              <div className="prose prose-lg max-w-none">
                <Card className="mb-8 border-accent/20">
                  <CardContent className="p-8">
                    <h2 className="font-semibold text-2xl text-primary mb-4">
                      A Era da Automação Inteligente
                    </h2>
                    <p className="text-foreground/80 leading-relaxed mb-6">
                      Imagine uma empresa onde tarefas repetitivas são executadas automaticamente, 
                      relatórios são gerados instantaneamente, e sua equipe pode focar 100% 
                      do tempo em atividades estratégicas que realmente geram valor.
                    </p>
                    <p className="text-foreground/80 leading-relaxed">
                      Essa não é uma visão futurista. É a realidade de empresas que já 
                      implementaram automação de processos com IA, e os resultados são 
                      transformadores para toda a operação.
                    </p>
                  </CardContent>
                </Card>

                <Card className="mb-8 border-accent/20">
                  <CardContent className="p-8">
                    <h2 className="font-semibold text-2xl text-primary mb-4">
                      O Impacto Devastador da Eficiência
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8 mb-6">
                      <div>
                        <div className="bg-primary/10 p-6 rounded-lg text-center">
                          <div className="text-3xl font-bold text-primary mb-2">85%</div>
                          <p className="text-foreground/80">Redução em tempo de processos</p>
                        </div>
                      </div>
                      <div>
                        <div className="bg-accent/10 p-6 rounded-lg text-center">
                          <div className="text-3xl font-bold text-primary mb-2">92%</div>
                          <p className="text-foreground/80">Menos erros operacionais</p>
                        </div>
                      </div>
                      <div>
                        <div className="bg-primary/10 p-6 rounded-lg text-center">
                          <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                          <p className="text-foreground/80">Operação contínua</p>
                        </div>
                      </div>
                      <div>
                        <div className="bg-accent/10 p-6 rounded-lg text-center">
                          <div className="text-3xl font-bold text-primary mb-2">400%</div>
                          <p className="text-foreground/80">Aumento na produtividade</p>
                        </div>
                      </div>
                    </div>
                    <p className="text-foreground/80 leading-relaxed">
                      Estes números representam a média de melhoria em empresas que 
                      implementaram automação de processos nos últimos 24 meses.
                    </p>
                  </CardContent>
                </Card>

                <Card className="mb-8 border-accent/20">
                  <CardContent className="p-8">
                    <h2 className="font-semibold text-2xl text-primary mb-4">
                      Processos que Podem Ser Automatizados Hoje
                    </h2>
                    
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div className="space-y-4">
                        <h3 className="font-semibold text-lg text-primary">Administrativo & RH</h3>
                        <ul className="space-y-2 text-foreground/80">
                          <li>• Processamento de documentos e contratos</li>
                          <li>• Gestão de folha de pagamento</li>
                          <li>• Recrutamento e seleção inicial</li>
                          <li>• Onboarding de funcionários</li>
                          <li>• Controle de ponto e férias</li>
                        </ul>
                      </div>
                      
                      <div className="space-y-4">
                        <h3 className="font-semibold text-lg text-primary">Vendas & Marketing</h3>
                        <ul className="space-y-2 text-foreground/80">
                          <li>• Qualificação automática de leads</li>
                          <li>• Follow-up personalizado</li>
                          <li>• Geração de propostas</li>
                          <li>• Envio de campanhas de email</li>
                          <li>• Relatórios de performance</li>
                        </ul>
                      </div>
                      
                      <div className="space-y-4">
                        <h3 className="font-semibold text-lg text-primary">Financeiro</h3>
                        <ul className="space-y-2 text-foreground/80">
                          <li>• Conciliação bancária</li>
                          <li>• Cobrança automática</li>
                          <li>• Processamento de notas fiscais</li>
                          <li>• Controle de fluxo de caixa</li>
                          <li>• Relatórios financeiros</li>
                        </ul>
                      </div>
                      
                      <div className="space-y-4">
                        <h3 className="font-semibold text-lg text-primary">Operacional</h3>
                        <ul className="space-y-2 text-foreground/80">
                          <li>• Controle de estoque</li>
                          <li>• Processamento de pedidos</li>
                          <li>• Atendimento ao cliente nível 1</li>
                          <li>• Backup e monitoramento</li>
                          <li>• Manutenção preventiva</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="mb-8 border-accent/20">
                  <CardContent className="p-8">
                    <h2 className="font-semibold text-2xl text-primary mb-4">
                      Transformações Reais em Empresas
                    </h2>
                    
                    <div className="space-y-8">
                      <div className="border-l-4 border-primary pl-6">
                        <h3 className="font-semibold text-lg text-primary mb-2">
                          Escritório de Advocacia - 70 horas semanais economizadas
                        </h3>
                        <p className="text-foreground/80 leading-relaxed mb-4">
                          Um escritório com 15 advogados gastava horas processando 
                          contratos e documentos manualmente. A automação implementada:
                        </p>
                        <ul className="space-y-2 text-foreground/70 mb-4">
                          <li>• Análise automática de contratos em 3 minutos</li>
                          <li>• Geração de minutas personalizadas</li>
                          <li>• Controle de prazos e lembretes automáticos</li>
                          <li>• Organização digital de todos os processos</li>
                        </ul>
                        <div className="bg-primary/5 p-4 rounded-lg">
                          <p className="font-medium text-primary">
                            Resultado: 70 horas semanais economizadas, permitindo 
                            atender 40% mais clientes sem contratar novos advogados.
                          </p>
                        </div>
                      </div>

                      <div className="border-l-4 border-accent pl-6">
                        <h3 className="font-semibold text-lg text-primary mb-2">
                          Distribuidora - R$ 300.000 anuais em economia
                        </h3>
                        <p className="text-foreground/80 leading-relaxed mb-4">
                          Uma distribuidora de produtos médicos tinha processos 
                          manuais complexos de pedidos e estoque. A IA automatizou:
                        </p>
                        <ul className="space-y-2 text-foreground/70 mb-4">
                          <li>• Processamento automático de 500+ pedidos diários</li>
                          <li>• Reposição inteligente de estoque</li>
                          <li>• Roteamento otimizado de entregas</li>
                          <li>• Conciliação financeira automática</li>
                        </ul>
                        <div className="bg-accent/5 p-4 rounded-lg">
                          <p className="font-medium text-primary">
                            Resultado: R$ 300.000 anuais em economia operacional e 
                            50% de redução no tempo de processamento de pedidos.
                          </p>
                        </div>
                      </div>

                      <div className="border-l-4 border-primary pl-6">
                        <h3 className="font-semibold text-lg text-primary mb-2">
                          Agência de Marketing - 200% de aumento na capacidade
                        </h3>
                        <p className="text-foreground/80 leading-relaxed mb-4">
                          Uma agência com 25 funcionários passava 60% do tempo em 
                          tarefas administrativas. A automação criada:
                        </p>
                        <ul className="space-y-2 text-foreground/70 mb-4">
                          <li>• Geração automática de relatórios para clientes</li>
                          <li>• Aprovação e distribuição de conteúdo</li>
                          <li>• Gestão de projetos e prazos</li>
                          <li>• Faturamento e cobrança automatizados</li>
                        </ul>
                        <div className="bg-primary/5 p-4 rounded-lg">
                          <p className="font-medium text-primary">
                            Resultado: 200% de aumento na capacidade de atender clientes 
                            sem aumentar o quadro de funcionários.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="mb-8 border-accent/20">
                  <CardContent className="p-8">
                    <h2 className="font-semibold text-2xl text-primary mb-4">
                      Manual vs. Automação: A Diferença Brutal
                    </h2>
                    
                    <div className="grid md:grid-cols-2 gap-8 mb-6">
                      <div>
                        <h3 className="font-semibold text-lg text-primary mb-4">Processo Manual</h3>
                        <div className="space-y-3">
                          <div className="flex items-start space-x-3">
                            <span className="text-destructive text-xl">×</span>
                            <p className="text-foreground/70">Sujeito a erros humanos</p>
                          </div>
                          <div className="flex items-start space-x-3">
                            <span className="text-destructive text-xl">×</span>
                            <p className="text-foreground/70">Tempo variável de execução</p>
                          </div>
                          <div className="flex items-start space-x-3">
                            <span className="text-destructive text-xl">×</span>
                            <p className="text-foreground/70">Dependente de pessoas</p>
                          </div>
                          <div className="flex items-start space-x-3">
                            <span className="text-destructive text-xl">×</span>
                            <p className="text-foreground/70">Custo cresce com volume</p>
                          </div>
                          <div className="flex items-start space-x-3">
                            <span className="text-destructive text-xl">×</span>
                            <p className="text-foreground/70">Limitado a horário comercial</p>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="font-semibold text-lg text-primary mb-4">Processo Automatizado</h3>
                        <div className="space-y-3">
                          <div className="flex items-start space-x-3">
                            <span className="text-primary text-xl">✓</span>
                            <p className="text-foreground/70">Precisão matemática 100%</p>
                          </div>
                          <div className="flex items-start space-x-3">
                            <span className="text-primary text-xl">✓</span>
                            <p className="text-foreground/70">Tempo de execução constante</p>
                          </div>
                          <div className="flex items-start space-x-3">
                            <span className="text-primary text-xl">✓</span>
                            <p className="text-foreground/70">Funciona independente</p>
                          </div>
                          <div className="flex items-start space-x-3">
                            <span className="text-primary text-xl">✓</span>
                            <p className="text-foreground/70">Custo fixo, escala infinita</p>
                          </div>
                          <div className="flex items-start space-x-3">
                            <span className="text-primary text-xl">✓</span>
                            <p className="text-foreground/70">Opera 24 horas, 365 dias</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="mb-8 border-accent/20">
                  <CardContent className="p-8">
                    <h2 className="font-semibold text-2xl text-primary mb-4">
                      O ROI que Transforma Empresas
                    </h2>
                    <p className="text-foreground/80 leading-relaxed mb-6">
                      Considere uma empresa que gasta 40 horas semanais em processos 
                      manuais que poderiam ser automatizados, com funcionários que 
                      custam em média R$ 25 por hora:
                    </p>
                    
                    <div className="bg-accent/10 p-6 rounded-lg mb-6">
                      <div className="grid md:grid-cols-3 gap-6 text-center">
                        <div>
                          <div className="text-2xl font-bold text-primary mb-2">R$ 52.000</div>
                          <p className="text-foreground/70">Custo anual desperdiçado</p>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-primary mb-2">2.080h</div>
                          <p className="text-foreground/70">Horas perdidas por ano</p>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-primary mb-2">500%</div>
                          <p className="text-foreground/70">ROI médio da automação</p>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-foreground/80 leading-relaxed mb-6">
                      A automação não apenas elimina esses custos, mas libera sua equipe 
                      para atividades que realmente geram receita. O resultado é um 
                      efeito multiplicador na produtividade geral da empresa.
                    </p>
                    
                    <div className="border-l-4 border-primary pl-6">
                      <p className="font-medium text-primary text-lg">
                        "A automação não substitui pessoas. Ela liberta pessoas 
                        para fazerem o que só humanos sabem fazer: pensar estrategicamente."
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-primary/20 bg-gradient-to-r from-primary/5 to-accent/5">
                  <CardContent className="p-8 text-center">
                    <h2 className="font-semibold text-2xl text-primary mb-4">
                      Pare de Desperdiçar Tempo com Tarefas Repetitivas
                    </h2>
                    <p className="text-foreground/80 leading-relaxed mb-6 max-w-2xl mx-auto">
                      Enquanto você lê isso, sua equipe está executando manualmente 
                      processos que uma IA poderia fazer em segundos. Cada dia que 
                      passa é dinheiro deixado na mesa.
                    </p>
                    <p className="text-lg font-medium text-primary mb-4">
                      Liberte sua equipe para focar no que realmente importa.
                    </p>
                    <p className="text-foreground/80">
                      Entre em contato e descubra quais processos da sua empresa 
                      podem ser automatizados hoje mesmo.
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

export default AutomacaoProcessos;