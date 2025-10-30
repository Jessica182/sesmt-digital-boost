import { Button } from "@/components/ui/button";
import { Shield, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[var(--gradient-hero)]" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-accent/50 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-primary/20">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-accent-foreground">Segurança do Trabalho Digital</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Digitalize sua
              <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Gestão de SST
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-xl">
              Centralize documentos, laudos, EPIs, treinamentos e indicadores em uma única plataforma. 
              Automatize processos e garanta compliance com as NRs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="group">
                Solicitar Demonstração
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                Conhecer Recursos
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-border/50">
              <div>
                <div className="text-3xl font-bold text-primary mb-1">500+</div>
                <div className="text-sm text-muted-foreground">Empresas Atendidas</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-1">98%</div>
                <div className="text-sm text-muted-foreground">Satisfação</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-1">24/7</div>
                <div className="text-sm text-muted-foreground">Suporte</div>
              </div>
            </div>
          </div>
          
          {/* Hero image */}
          <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative rounded-2xl overflow-hidden shadow-[var(--shadow-elegant)]">
              <img 
                src={heroImage} 
                alt="SESMT Digital - Gestão de Segurança do Trabalho" 
                className="w-full h-auto"
              />
            </div>
            
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-[var(--shadow-card)] border border-border animate-float">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <div className="font-semibold text-card-foreground">100% Compliance</div>
                  <div className="text-sm text-muted-foreground">Todas as NRs atendidas</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
