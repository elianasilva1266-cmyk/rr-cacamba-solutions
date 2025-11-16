import { useState, useEffect, useCallback } from "react";
import { Truck, Phone, MapPin, Building2, Factory, CheckCircle2, Leaf, Clock, Shield, Star, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import cliente1 from "@/assets/cliente1.jpg";
import cliente2 from "@/assets/cliente2.jpg";
import cliente3 from "@/assets/cliente3.jpg";
import cliente4 from "@/assets/cliente4.jpg";
import empresa1 from "@/assets/empresa1.jpg";
import empresa2 from "@/assets/empresa2.jpg";
import heroCaminhao from "@/assets/hero-cacamba.jpg";
import caminhaoRR from "@/assets/caminhao-rr.png";
import cacambaLaranja from "@/assets/cacamba-laranja.png";
import recycleBg from "@/assets/recycle-bg.jpg";
import heroBgDark from "@/assets/hero-bg-dark.jpg";
import heroConstruction from "@/assets/hero-construction.jpg";
import equipamento1 from "@/assets/equipamento-1.jpg";
import equipamento2 from "@/assets/equipamento-2.jpg";
import equipamento3 from "@/assets/equipamento-3.jpg";
import equipamento4 from "@/assets/equipamento-4.jpg";
import equipamento5 from "@/assets/equipamento-5.jpg";
import equipamento6 from "@/assets/equipamento-6.jpg";

const Index = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const equipamentos = [
    { id: 1, image: equipamento1, name: "Caminhão Caçamba" },
    { id: 2, image: equipamento2, name: "Caçamba Estacionária" },
    { id: 3, image: equipamento4, name: "Retroescavadeira" },
    { id: 4, image: equipamento2, name: "Caçamba Grande" },
  ];

  const testimonials = [
    {
      name: "Carlos Silva",
      location: "Mooca, São Paulo",
      type: "pessoa",
      rating: 5,
      image: cliente1,
      text: "Excelente serviço! A caçamba chegou no horário combinado e a retirada foi super rápida. Recomendo demais para quem está fazendo reforma."
    },
    {
      name: "Mariana Santos",
      location: "Vila Mariana, São Paulo",
      type: "pessoa",
      rating: 5,
      image: cliente2,
      text: "Empresa muito profissional. Fiz a reforma da minha casa e precisei de 2 caçambas. O atendimento foi perfeito do início ao fim!"
    },
    {
      name: "Rafael Oliveira",
      location: "Pinheiros, São Paulo",
      type: "pessoa",
      rating: 5,
      image: cliente3,
      text: "Como arquiteto, sempre indico a RR Caçamba para meus clientes. Serviço de qualidade, pontual e com preço justo."
    },
    {
      name: "Dona Maria Conceição",
      location: "Santana, São Paulo",
      type: "pessoa",
      rating: 5,
      image: cliente4,
      text: "Precisei limpar meu quintal e eles foram muito atenciosos. Explicaram tudo direitinho e me ajudaram bastante. Muito obrigada!"
    },
    {
      name: "Construtora Alves & Filhos",
      location: "Itaim Bibi, São Paulo",
      type: "empresa",
      rating: 5,
      image: empresa1,
      text: "Trabalhamos com a RR Caçamba há mais de 2 anos. Nunca tivemos problemas. São pontuais, organizados e têm ótimos preços para grandes volumes."
    },
    {
      name: "Incorporadora Urbana SP",
      location: "Brooklin, São Paulo",
      type: "empresa",
      rating: 5,
      image: empresa2,
      text: "Parceiro confiável para nossos empreendimentos. Já utilizamos em mais de 15 obras e sempre com excelente resultado. Equipe muito profissional!"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const phone = formData.get("phone");
    const message = formData.get("message");
    
    const whatsappMessage = `Olá, meu nome é ${name}. Telefone: ${phone}. ${message}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://api.whatsapp.com/send/?phone=551151926487&text=${encodedMessage}`, '_blank');
  };

  const whatsappLink = "https://api.whatsapp.com/send/?phone=551151926487&text=Olá! Gostaria de solicitar um orçamento para os serviços da Cacambas RR.&type=phone_number&app_absent=0";

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
                <li><a href="#home" className="text-primary-foreground hover:text-accent transition-colors font-medium">Início</a></li>
                <li><a href="#services" className="text-primary-foreground hover:text-accent transition-colors font-medium">Serviços</a></li>
                <li><a href="#equipamentos" className="text-primary-foreground hover:text-accent transition-colors font-medium">Equipamentos</a></li>
                <li><a href="#about" className="text-primary-foreground hover:text-accent transition-colors font-medium">Sobre</a></li>
                <li><a href="#politica" className="text-primary-foreground hover:text-accent transition-colors font-medium">Política</a></li>
                <li><a href="#contact" className="text-primary-foreground hover:text-accent transition-colors font-medium">Contato</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 bg-black/75"></div>
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `url(${heroConstruction})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
              Soluções em Transporte e Locação
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-150">
              Há mais de 14 anos oferecendo serviços de qualidade em locações, transportes e coletas de entulhos em São Paulo e região.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
              <Button 
                size="lg" 
                className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold text-base md:text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
                onClick={() => window.open(whatsappLink, '_blank')}
              >
                <Phone className="mr-2 h-5 w-5" />
                Solicitar Orçamento
              </Button>
              <Button 
                size="lg" 
                className="bg-whatsapp text-white hover:bg-whatsapp-dark font-bold text-base md:text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
                onClick={() => window.open(whatsappLink, '_blank')}
              >
                <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Chamar no WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Nossos Serviços</h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-4"></div>
            <p className="text-lg text-muted-foreground">Oferecemos soluções completas para gestão de resíduos</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary">
              <div className="h-48 overflow-hidden">
                <img 
                  src={cacambaLaranja} 
                  alt="Caçamba de Entulho RR"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">Aluguel de Caçambas</h3>
                <p className="text-muted-foreground">Caçambas de diversos tamanhos para atender sua necessidade. Ideal para obras, reformas e limpezas.</p>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://www.carmo.rj.gov.br/media/k2/items/cache/f863e4fb1b47b206b2276d9b70a5b183_XL.webp?t=20211222_120800" 
                  alt="Coleta de Entulho"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-primary mb-3">Coleta de Entulho</h3>
                <p className="text-muted-foreground">Serviço de coleta e transporte de entulho com agilidade e responsabilidade ambiental.</p>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://www.terradecultivo.com.br/tcsolucoesambientais/wp-content/uploads/2021/04/Plano-de-Gerenciamento-de-Residuos-Solidos1.png" 
                  alt="Gestão de Resíduos"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-primary mb-3">Gestão de Resíduos</h3>
                <p className="text-muted-foreground">Consultoria para gestão adequada de resíduos da construção civil, seguindo normas ambientais.</p>
              </CardContent>
            </Card>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="flex items-start gap-4 p-6 bg-card rounded-lg">
              <CheckCircle2 className="h-8 w-8 text-secondary flex-shrink-0" />
              <div>
                <h4 className="font-bold text-lg mb-2">Qualidade Garantida</h4>
                <p className="text-sm text-muted-foreground">Equipamentos modernos e bem conservados</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 bg-card rounded-lg">
              <Clock className="h-8 w-8 text-secondary flex-shrink-0" />
              <div>
                <h4 className="font-bold text-lg mb-2">Agilidade</h4>
                <p className="text-sm text-muted-foreground">Entrega e coleta rápida conforme sua necessidade</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 bg-card rounded-lg">
              <Leaf className="h-8 w-8 text-secondary flex-shrink-0" />
              <div>
                <h4 className="font-bold text-lg mb-2">Responsabilidade Ambiental</h4>
                <p className="text-sm text-muted-foreground">Descarte consciente e sustentável</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipamentos */}
      <section id="equipamentos" className="py-20 bg-background overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">EQUIPAMENTOS</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">ALGUNS EQUIPAMENTOS</h2>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
          </div>

          <div className="relative">
            <div className="flex animate-scroll-left">
              {/* Primeira sequência */}
              {equipamentos.map((equipamento) => (
                <div key={`first-${equipamento.id}`} className="flex-shrink-0 w-64 mx-4">
                  <div className="bg-white rounded-lg p-6 flex items-center justify-center h-48 hover:shadow-lg transition-all duration-300">
                    <img 
                      src={equipamento.image} 
                      alt={equipamento.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              ))}
              {/* Segunda sequência (duplicada para loop infinito) */}
              {equipamentos.map((equipamento) => (
                <div key={`second-${equipamento.id}`} className="flex-shrink-0 w-64 mx-4">
                  <div className="bg-white rounded-lg p-6 flex items-center justify-center h-48 hover:shadow-lg transition-all duration-300">
                    <img 
                      src={equipamento.image} 
                      alt={equipamento.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Sobre a RR Caçamba</h2>
              <p className="text-lg mb-4 text-white/90">
                Com anos de experiência no mercado, a RR Caçamba é referência em aluguel de caçambas e gestão de resíduos na região de São Paulo.
              </p>
              <p className="text-lg mb-4 text-white/90">
                Nossa missão é oferecer soluções eficientes e sustentáveis para o descarte adequado de entulhos, contribuindo para um meio ambiente mais limpo e organizado.
              </p>
              <p className="text-lg text-white/90">
                Trabalhamos com transparência, responsabilidade e compromisso com a satisfação total de nossos clientes.
              </p>
              <div className="mt-8 flex items-center gap-4">
                <Shield className="h-16 w-16 text-accent" />
                <div>
                  <p className="font-bold text-xl">Compromisso com a Excelência</p>
                  <p className="text-white/80">Atendimento profissional e de qualidade</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src={caminhaoRR}
                alt="Caminhão RR Caçamba"
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">O Que Nossos Clientes Dizem</h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-4"></div>
            <p className="text-lg text-muted-foreground">Avaliações reais de clientes de São Paulo</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <Avatar className="h-16 w-16 border-2 border-primary">
                      <AvatarImage src={testimonial.image} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {testimonial.location}
                      </p>
                      {testimonial.type === "empresa" && (
                        <p className="text-xs text-primary font-medium mt-1 flex items-center gap-1">
                          <Building2 className="h-3 w-3" />
                          Pessoa Jurídica
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="flex gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Política */}
      <section id="politica" className="py-20 bg-accent/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Política da Empresa</h2>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {/* Política de Qualidade */}
            <Card className="hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <CheckCircle2 className="h-12 w-12 text-primary flex-shrink-0" />
                  <h3 className="text-2xl font-bold text-primary">Política de Qualidade</h3>
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
                    <span className="text-accent font-bold text-xl">•</span>
                    <span className="text-muted-foreground">Atendimento personalizado e eficiente</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold text-xl">•</span>
                    <span className="text-muted-foreground">Cumprimento de prazos acordados</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold text-xl">•</span>
                    <span className="text-muted-foreground">Manutenção preventiva de equipamentos</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold text-xl">•</span>
                    <span className="text-muted-foreground">Destinação ambientalmente correta de resíduos</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold text-xl">•</span>
                    <span className="text-muted-foreground">Melhoria contínua de processos</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Política Ambiental */}
            <Card className="hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <Leaf className="h-12 w-12 text-primary flex-shrink-0" />
                  <h3 className="text-2xl font-bold text-primary">Política Ambiental</h3>
                </div>
                
                <p className="text-lg text-muted-foreground mb-6">
                  Reconhecemos nossa responsabilidade com o meio ambiente e nos comprometemos a:
                </p>

                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold text-xl">•</span>
                    <span className="text-muted-foreground">
                      Realizar a coleta e destinação adequada de entulhos da construção civil
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold text-xl">•</span>
                    <span className="text-muted-foreground">
                      Promover a conscientização ambiental entre colaboradores e clientes
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold text-xl">•</span>
                    <span className="text-muted-foreground">
                      Adotar práticas que minimizem o impacto ambiental de nossas operações
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold text-xl">•</span>
                    <span className="text-muted-foreground">Cumprir a legislação ambiental aplicável</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Termos e Condições */}
            <Card className="hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <FileText className="h-12 w-12 text-primary flex-shrink-0" />
                  <h3 className="text-2xl font-bold text-primary">Termos e Condições</h3>
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
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Entre em Contato</h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-4"></div>
            <p className="text-lg text-muted-foreground">Estamos prontos para atender sua necessidade</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6">Informações de Contato</h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Telefone</p>
                    <p className="text-muted-foreground">(11) 5192-6487</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Endereço</p>
                    <p className="text-muted-foreground">Rua Teodureto de Camargo, 28 - Vila Celeste<br />São Paulo/SP - CEP: 02543-130</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Building2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">CNPJ</p>
                    <p className="text-muted-foreground">20.103.259/0001-75</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Factory className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Razão Social</p>
                    <p className="text-muted-foreground">Rr Cacamba Ss LTDA</p>
                  </div>
                </div>
              </div>
              <Button 
                size="lg"
                className="bg-whatsapp text-white hover:bg-whatsapp-dark font-bold w-full md:w-auto"
                onClick={() => window.open(whatsappLink, '_blank')}
              >
                <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Fale Conosco no WhatsApp
              </Button>
            </div>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-primary mb-6">Envie sua Mensagem</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Nome</Label>
                    <Input id="name" name="name" required className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Telefone</Label>
                    <Input id="phone" name="phone" type="tel" required className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="email">E-mail (opcional)</Label>
                    <Input id="email" name="email" type="email" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="message">Mensagem</Label>
                    <Textarea id="message" name="message" required className="mt-1 min-h-[120px]" />
                  </div>
                  <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-bold">
                    Enviar Mensagem
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-accent text-xl font-bold mb-4">RR CAÇAMBA</h3>
              <p className="text-background/80">Especializada em aluguel de caçambas e gestão de resíduos da construção civil.</p>
            </div>
            <div>
              <h3 className="text-accent text-xl font-bold mb-4">Contato</h3>
              <div className="space-y-2 text-background/80">
                <p className="flex items-center gap-2">
                  <Phone className="h-4 w-4" /> (11) 5192-6487
                </p>
                <p className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" /> Rua Teodureto de Camargo, 28 - Vila Celeste - São Paulo/SP
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-accent text-xl font-bold mb-4">Links Rápidos</h3>
              <div className="space-y-2">
                <a href="#home" className="block text-background/80 hover:text-accent transition-colors">Início</a>
                <a href="#services" className="block text-background/80 hover:text-accent transition-colors">Serviços</a>
                <a href="#about" className="block text-background/80 hover:text-accent transition-colors">Sobre</a>
                <a href="#contact" className="block text-background/80 hover:text-accent transition-colors">Contato</a>
              </div>
            </div>
          </div>
          <div className="border-t border-background/20 pt-8 text-center text-background/60 text-sm">
            <p>&copy; 2023 RR CAÇAMBA - Todos os direitos reservados</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-whatsapp text-white rounded-full p-4 shadow-2xl hover:bg-whatsapp-dark transition-all hover:scale-110 animate-pulse-scale"
        aria-label="Fale conosco no WhatsApp"
      >
        <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </div>
  );
};

export default Index;
