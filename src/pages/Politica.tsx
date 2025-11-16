import { useState, useEffect } from "react";
import { Truck, CheckCircle, Leaf, FileText } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Politica = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-primary shadow-lg' : 'bg-primary/95'}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            <div className="flex items-center gap-3">
              <Truck className="h-8 w-8 md:h-10 md:w-10 text-accent" />
              <div>
                <h1 className="text-xl md:text-2xl font-bold text-primary-foreground">
                  RR CAÇAMBA
                </h1>
                <p className="text-xs text-primary-foreground/80 hidden sm:block">Aluguel de Caçambas</p>
              </div>
            </div>
            <nav className="hidden md:block">
              <ul className="flex gap-6">
                <li><a href="/" className="text-primary-foreground hover:text-accent transition-colors font-medium">Início</a></li>
                <li><a href="/#services" className="text-primary-foreground hover:text-accent transition-colors font-medium">Serviços</a></li>
                <li><a href="/#equipamentos" className="text-primary-foreground hover:text-accent transition-colors font-medium">Equipamentos</a></li>
                <li><a href="/#about" className="text-primary-foreground hover:text-accent transition-colors font-medium">Sobre</a></li>
                <li><a href="/politica" className="text-accent transition-colors font-medium">Política</a></li>
                <li><a href="/#contact" className="text-primary-foreground hover:text-accent transition-colors font-medium">Contato</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center pt-20 bg-gradient-to-b from-primary to-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Política da Empresa
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
        </div>
      </section>

      {/* Política de Qualidade */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <CheckCircle className="h-12 w-12 text-accent flex-shrink-0" />
                <h3 className="text-3xl font-bold text-primary">Política de Qualidade</h3>
              </div>
              
              <p className="text-lg text-muted-foreground mb-6">
                Comprometemo-nos a oferecer serviços de transporte, locação e coleta de entulhos com qualidade, 
                segurança e responsabilidade ambiental, superando as expectativas dos nossos clientes.
              </p>

              <p className="text-lg font-semibold text-primary mb-4">
                Nossa política de qualidade baseia-se nos seguintes princípios:
              </p>

              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span className="text-muted-foreground">Atendimento personalizado e eficiente</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span className="text-muted-foreground">Cumprimento de prazos acordados</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span className="text-muted-foreground">Manutenção preventiva de equipamentos</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span className="text-muted-foreground">Destinação ambientalmente correta de resíduos</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span className="text-muted-foreground">Melhoria contínua de processos</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Política Ambiental */}
      <section className="py-20 bg-accent/5">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <Leaf className="h-12 w-12 text-accent flex-shrink-0" />
                <h3 className="text-3xl font-bold text-primary">Política Ambiental</h3>
              </div>
              
              <p className="text-lg text-muted-foreground mb-6">
                Reconhecemos nossa responsabilidade com o meio ambiente e nos comprometemos a:
              </p>

              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span className="text-muted-foreground">
                    Realizar a coleta e destinação adequada de entulhos da construção civil
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span className="text-muted-foreground">
                    Promover a conscientização ambiental entre colaboradores e clientes
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span className="text-muted-foreground">
                    Adotar práticas que minimizem o impacto ambiental de nossas operações
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span className="text-muted-foreground">Cumprir a legislação ambiental aplicável</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Termos e Condições */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <FileText className="h-12 w-12 text-accent flex-shrink-0" />
                <h3 className="text-3xl font-bold text-primary">Termos e Condições</h3>
              </div>
              
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Os serviços são prestados mediante contrato que estabelece direitos e obrigações de ambas as partes.
                </p>
                <p className="text-muted-foreground">
                  O pagamento deve ser realizado conforme acordado no contrato de prestação de serviços.
                </p>
                <p className="text-muted-foreground">
                  Em caso de cancelamento, aplicam-se as condições estabelecidas no contrato.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">RR CAÇAMBA</h3>
              <p className="text-primary-foreground/80">
                Soluções em transporte e locação de caçambas em São Paulo e região.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Links Rápidos</h4>
              <ul className="space-y-2">
                <li><a href="/" className="text-primary-foreground/80 hover:text-accent transition-colors">Início</a></li>
                <li><a href="/#services" className="text-primary-foreground/80 hover:text-accent transition-colors">Serviços</a></li>
                <li><a href="/politica" className="text-primary-foreground/80 hover:text-accent transition-colors">Política</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contato</h4>
              <p className="text-primary-foreground/80">Telefone: (11) 5192-6487</p>
              <p className="text-primary-foreground/80">São Paulo - SP</p>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
            <p className="text-primary-foreground/60">&copy; 2024 RR CAÇAMBA. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Politica;
