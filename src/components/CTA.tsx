import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Pronto para revolucionar sua
            <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Gestão de Segurança?
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Agende uma demonstração gratuita e descubra como a SESMT Digital 
            pode transformar a gestão de SST na sua empresa.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="lg" className="group">
              Agendar Demonstração
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="group">
              <Mail className="w-5 h-5" />
              Falar com Especialista
            </Button>
          </div>
          
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-secondary rounded-full" />
              <span>Sem compromisso</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-secondary rounded-full" />
              <span>Demonstração personalizada</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-secondary rounded-full" />
              <span>Suporte especializado</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
