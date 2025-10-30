import { CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/card";

const benefits = [
  "Redução de 70% no tempo de gestão documental",
  "Conformidade garantida com todas as NRs",
  "Acesso em tempo real a todos os dados e indicadores",
  "Economia com processos digitalizados",
  "Rastreabilidade completa de EPIs e documentos",
  "Suporte técnico especializado 24/7",
];

const Benefits = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Por que escolher a
              <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                SESMT Digital?
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Transforme a gestão de segurança da sua empresa com tecnologia de ponta, 
              facilitando o dia a dia e garantindo total conformidade legal.
            </p>
            
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-3 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-secondary/20 rounded-full flex items-center justify-center mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-secondary" />
                  </div>
                  <p className="text-foreground font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Card className="p-8 bg-gradient-to-br from-card to-accent/20 border-primary/20 shadow-[var(--shadow-elegant)]">
              <div className="space-y-8">
                <div>
                  <div className="text-5xl font-bold text-primary mb-2">+10.000</div>
                  <p className="text-muted-foreground">Colaboradores gerenciados na plataforma</p>
                </div>
                
                <div>
                  <div className="text-5xl font-bold text-primary mb-2">15+</div>
                  <p className="text-muted-foreground">Anos de experiência em SST</p>
                </div>
                
                <div>
                  <div className="text-5xl font-bold text-secondary mb-2">100%</div>
                  <p className="text-muted-foreground">Aprovação em auditorias</p>
                </div>
                
                <div className="pt-6 border-t border-border/50">
                  <p className="text-sm text-muted-foreground italic">
                    "Reduzimos 80% do tempo gasto com burocracia e aumentamos significativamente 
                    a cultura de segurança na empresa."
                  </p>
                  <p className="text-sm font-semibold text-foreground mt-2">
                    — Gerente de SST, Indústria Multinacional
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
