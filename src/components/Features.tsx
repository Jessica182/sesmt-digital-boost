import { Shield, FileText, HardHat, BarChart3, GraduationCap, Cloud, Award, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Shield,
    title: "Gestão Digital Completa",
    description: "Centralize documentos, laudos, ASOs e exames ocupacionais em um único ambiente seguro.",
  },
  {
    icon: HardHat,
    title: "Controle de EPIs",
    description: "Gerencie entrega, devolução e validade de EPIs com assinatura digital e rastreabilidade total.",
  },
  {
    icon: BarChart3,
    title: "Indicadores e Dashboards",
    description: "Relatórios automáticos e gráficos em tempo real sobre segurança e conformidade.",
  },
  {
    icon: GraduationCap,
    title: "Treinamentos Online",
    description: "Organize capacitações obrigatórias e mantenha histórico completo de certificações.",
  },
  {
    icon: Users,
    title: "Gestão Multiempresa",
    description: "Gerencie múltiplas unidades, setores e perfis com acesso segmentado por níveis.",
  },
  {
    icon: Cloud,
    title: "Ambiente Cloud",
    description: "100% web, acessível de qualquer dispositivo com armazenamento seguro em nuvem.",
  },
  {
    icon: FileText,
    title: "Compliance Total",
    description: "Atenda todas as NRs e facilite auditorias internas e externas com organização perfeita.",
  },
  {
    icon: Award,
    title: "Gamificação",
    description: "Estimule o engajamento e cultura de segurança com mecânicas de jogos aplicadas.",
  },
];

const Features = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Tudo que você precisa para
            <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Gestão de SST
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Uma plataforma completa para digitalizar e automatizar todos os processos de segurança e saúde no trabalho.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="p-6 hover:shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 animate-fade-in border-border/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-card-foreground">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
