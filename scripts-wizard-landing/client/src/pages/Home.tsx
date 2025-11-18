import { Button } from "@/components/ui/button";
import { CheckCircle2, Clock, Shield, Zap } from "lucide-react";
import { useEffect, useState } from "react";
import { useFakeSalesNotifications } from "@/hooks/useFakeSalesNotifications";

export default function Home() {
  useFakeSalesNotifications();
  
  const [timeLeft, setTimeLeft] = useState({
    hours: 14,
    minutes: 47,
    seconds: 58,
  });

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, minutes, seconds } = prev;
        seconds--;
        if (seconds < 0) {
          seconds = 59;
          minutes--;
          if (minutes < 0) {
            minutes = 59;
            hours--;
            if (hours < 0) {
              hours = 14;
            }
          }
        }
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);


  return (
    <div className="min-h-screen bg-background">
      {/* Header com Timer */}
      <div className="bg-red-600 text-white py-3 sticky top-0 z-50">
        <div className="container text-center font-bold text-sm md:text-base">
          🔥 A OFERTA DE BLACK FRIDAY: 87% DE DESCONTO SE ENCERRA EM: {String(timeLeft.hours).padStart(2, "0")}:{String(timeLeft.minutes).padStart(2, "0")}:{String(timeLeft.seconds).padStart(2, "0")}
        </div>
      </div>

      {/* Hero Section */}
      <section id="hero-section" className="py-16 md:py-24 bg-gradient-to-b from-white to-slate-50">
        <div className="container max-w-4xl">
          <div className="text-center space-y-6">
            <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
              ✨ Scripts Infalíveis Wizard
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground leading-tight">
              ADVOGADO: Pare de Perder Clientes por Improvisar
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-bold text-blue-600">
              Feche Contratos de R$6.000 em 7 Dias Usando o Script Exato que a IA Escreveu Para Você
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              O sistema comercial que pensa por você: Tenha o script perfeito para cada etapa da venda (da abordagem ao follow-up) e pare de perder dinheiro por falta de um método.
            </p>
            
            <div className="pt-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white text-sm md:text-lg px-4 md:px-8 py-3 md:py-6 rounded-lg font-bold h-auto w-full md:w-auto" onClick={() => scrollToSection('preco-section')}>
                QUERO MEU ACESSO IMEDIATO AO WIZARD
              </Button>
              <p className="text-xs md:text-sm text-muted-foreground mt-3">
                Pare de improvisar e feche seu próximo contrato hoje.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Problema */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
            A Verdade Dura: Você Não é Ruim de Venda. Você Apenas Improvisa.
          </h2>
          
          <div className="space-y-6 text-lg text-foreground">
            <p>
              A maioria dos advogados trava no momento crucial. Não é falta de técnica jurídica, é falta de <strong>sistema</strong>. Você perde clientes porque:
            </p>
            
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-red-100 text-red-600 font-bold">✕</div>
                </div>
                <p>Não sabe como abordar sem parecer um vendedor barato.</p>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-red-100 text-red-600 font-bold">✕</div>
                </div>
                <p>Escreve mensagens genéricas que o lead ignora.</p>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-red-100 text-red-600 font-bold">✕</div>
                </div>
                <p>Gagueja na hora de responder a objeção de preço.</p>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-red-100 text-red-600 font-bold">✕</div>
                </div>
                <p>Sai da reunião com o temido "Vou pensar".</p>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-red-100 text-red-600 font-bold">✕</div>
                </div>
                <p>Vira escravo do WhatsApp tentando reengajar.</p>
              </div>
            </div>
            
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded mt-8">
              <p className="text-xl font-bold text-blue-900">
                O problema não é o cliente. É a falta de um <strong>script que funcione</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Solução */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
            Scripts Infalíveis Wizard: Seu Segundo Cérebro Comercial
          </h2>
          
          <div className="space-y-6 text-lg text-foreground">
            <p>
              Não é um robô genérico. É um Agente de IA treinado por quem opera no campo, com um único objetivo: <strong>Fazer você vender como um monstro sem nunca mais improvisar.</strong>
            </p>
            
            <p>
              Ele entrega o script exato que você deveria dizer, adaptado ao seu caso real, canal usado e tipo de cliente.
            </p>
            
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 rounded-lg text-center">
              <p className="text-2xl font-black">
                Zero improviso. Zero tentativa e erro. Só execução clara.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Benefícios */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            O que você ganha ao ativar o Wizard
          </h2>
          
          <div className="bg-yellow-50 border-2 border-yellow-400 rounded-lg p-4 mb-8 text-center">
            <p className="font-bold text-yellow-900 text-lg">
              🔥 10 Prompts Avançados para Dominar o Scripts Infalíveis Wizard
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <Zap className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg mb-2">Scripts Prontos para 100% das Etapas</h3>
                <p className="text-muted-foreground">Abordagem, aquecimento, qualificação, reunião, negociação, objeções e follow-up.</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <Clock className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg mb-2">Respostas Personalizadas em Segundos</h3>
                <p className="text-muted-foreground">Você manda o contexto e a IA entrega o script, a âncora de valor e o CTA específico.</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <CheckCircle2 className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg mb-2">Feche Contratos de R$6.000 Sem Equipe</h3>
                <p className="text-muted-foreground">Tenha um sistema comercial que escala seu faturamento sem depender de contratação.</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <Zap className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg mb-2">Variações para Qualquer Canal</h3>
                <p className="text-muted-foreground">Receba o script ideal para WhatsApp, ligação, áudio e e-mail.</p>
              </div>
            </div>
            
            <div className="flex gap-4 md:col-span-2">
              <Shield className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg mb-2">Segurança e Autoridade Imediatas</h3>
                <p className="text-muted-foreground">Venda com mais confiança e feche reuniões com autoridade, sabendo exatamente o que dizer na hora certa.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Seção de Preço */}
      <section id="preco-section" className="py-20 md:py-32 bg-gradient-to-b from-slate-50 to-white">
        <div className="container max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
            A Única Prova que Você Precisa: Risco Zero no Seu Bolso
          </h2>
          
          <div className="bg-white border-2 border-green-600 rounded-lg p-8 md:p-12 text-center space-y-6">
            <div className="inline-block bg-green-100 text-green-700 px-6 py-3 rounded-full font-bold text-lg">
              ✓ GARANTIA INCONDICIONAL DE 7 DIAS
            </div>
            
            <p className="text-lg text-foreground">
              Use o Wizard por 7 dias. Se você não sentir mais segurança, não conseguir recuperar leads que sumiram ou não achar que o sistema vale 10x o que você pagou, basta um e-mail.
            </p>
            
            <p className="text-lg font-bold text-foreground">
              Devolvemos 100% do seu investimento. Sem perguntas. Sem burocracia.
            </p>
            
            <p className="text-lg text-blue-600 font-bold">
              O sistema pensa por você. Você só executa. E se não funcionar, você não paga.
            </p>
          </div>
        </div>
      </section>

      {/* Seção Oferta */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            O Preço de um Café por um Sistema que Vale Milhares
          </h2>
          
          <div className="bg-gradient-to-b from-blue-600 to-blue-700 text-white rounded-lg p-12 text-center space-y-6">
            <p className="text-lg">
              O valor real de um sistema que te ajuda a fechar contratos de R$6.000 é incalculável. Mas, para esta turma de lançamento, você não vai pagar o valor de mercado.
            </p>
            
            <div className="space-y-3">
              <p className="text-3xl font-bold line-through opacity-75">DE R$ 297,00</p>
              <p className="text-6xl font-black" style={{fontSize: '50px'}}>POR APENAS R$ 37,00</p>
              <p className="text-lg opacity-90">ou 9x de R$ 4,11 no cartão</p>
            </div>
            
            <div className="bg-red-500 bg-opacity-80 p-4 rounded-lg font-bold text-base">
              ⚠️ ATENÇÃO: Esta oferta é válida apenas para os próximos 47 advogados que ativarem o Wizard. Depois disso, o preço volta para R$97,00.
            </div>
            
            <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 rounded-lg font-black" style={{fontSize: '20px', paddingTop: '15px', paddingRight: '18px', paddingBottom: '15px', paddingLeft: '18px', width: '240px', height: '64px'}} onClick={() => window.open('https://pay.kiwify.com.br/5XJTIK0', '_blank')}>
              QUERO MEU ACESSO
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Perguntas Frequentes
          </h2>
          
          <div className="space-y-6">
            <details className="bg-white p-6 rounded-lg border border-border cursor-pointer group">
              <summary className="font-bold text-lg flex justify-between items-center">
                Como funciona exatamente o Wizard?
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-foreground mt-4 text-base">
                O Wizard é um Agente de IA treinado para gerar scripts personalizados baseado no contexto que você fornece. Você descreve a situação (ex: "Lead do Google Ads sumiu depois que mandei proposta") e a IA entrega o script exato, a âncora de valor, o CTA específico e variações para texto e áudio em segundos.
              </p>
            </details>
            
            <details className="bg-white p-6 rounded-lg border border-border cursor-pointer group">
              <summary className="font-bold text-lg flex justify-between items-center">
                Funciona para advogados iniciantes?
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-foreground mt-4 text-base">
                Sim! O Wizard foi desenvolvido justamente para advogados que travam na hora de vender. O sistema pensa por você, então você só precisa executar o script. Não importa se você é iniciante ou experiente.
              </p>
            </details>
            
            <details className="bg-white p-6 rounded-lg border border-border cursor-pointer group">
              <summary className="font-bold text-lg flex justify-between items-center">
                Qual é o tempo de acesso?
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-foreground mt-4 text-base">
                Você recebe acesso imediato após a confirmação do pagamento. Pode começar a usar o Wizard em segundos.
              </p>
            </details>
            
            <details className="bg-white p-6 rounded-lg border border-border cursor-pointer group">
              <summary className="font-bold text-lg flex justify-between items-center">
                E se eu não gostar?
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-foreground mt-4 text-base">
                Você tem 7 dias de garantia incondicional. Se não ficar satisfeito, basta enviar um e-mail e devolvemos 100% do seu investimento. Sem perguntas, sem burocracia.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container max-w-4xl text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Não Deixe Mais Dinheiro na Mesa
          </h2>
          
          <p className="text-xl opacity-90">
            Comece a usar Scripts Infalíveis Wizard hoje e veja a diferença na sua conversão em 7 dias.
          </p>
          
          <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 text-lg px-8 py-6 rounded-lg font-black h-auto" onClick={() => scrollToSection('preco-section')}>
            QUERO MEU ACESSO AGORA
          </Button>
          
          <p className="text-sm opacity-75 pt-4">
            Acesso imediato | Garantia de 7 dias | Sem riscos
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-8">
        <div className="container text-center text-sm">
          <p>© 2025 Scripts Infalíveis Wizard. Todos os direitos reservados.</p>
          <p className="mt-2 opacity-75">Desenvolvido para advogados que querem vender com sistema.</p>
        </div>
      </footer>
    </div>
  );
}
