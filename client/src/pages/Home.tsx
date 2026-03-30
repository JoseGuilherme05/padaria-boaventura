import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Star, MapPin, Clock, Phone, ShoppingBag, Coffee } from "lucide-react";
import { useState } from "react";

/**
 * Design Philosophy: Minimalismo Quente & Acessível
 * - Paleta: Bege natural, Marrom chocolate, Dourado suave, Branco puro
 * - Tipografia: Merriweather (serif) para títulos + Inter para corpo
 * - Layout: Espaçoso e respirável, foco em produtos e CTAs
 * - Interações: Transições suaves, hover effects delicados
 */

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("pao");

  const categories = [
    { id: "pao", name: "Pães", icon: "🍞" },
    { id: "bolo", name: "Bolos", icon: "🎂" },
    { id: "torta", name: "Tortas", icon: "🥧" },
    { id: "salgado", name: "Salgados", icon: "🥐" },
    { id: "doce", name: "Doces", icon: "🍮" },
  ];

  const products = {
    pao: [
      {
        id: 1,
        name: "Pão Crocante",
        price: "R$ 8,50",
        description: "Pão artesanal com crosta crocante e miolo macio",
        image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663454003371/KJPe5tvsGqD8rNHcvoidMh/hero-banner-pao-fresco-oEXsBmy4FbgrmzjJfP4Swm.webp",
      },
      {
        id: 2,
        name: "Pão Integral",
        price: "R$ 7,50",
        description: "Pão integral 100% com sementes e fibras",
        image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663454003371/KJPe5tvsGqD8rNHcvoidMh/hero-banner-pao-fresco-oEXsBmy4FbgrmzjJfP4Swm.webp",
      },
    ],
    bolo: [
      {
        id: 3,
        name: "Bolo Churros",
        price: "R$ 35,00",
        description: "Bolo de chocolate com cobertura de churro crocante",
        image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663454003371/KJPe5tvsGqD8rNHcvoidMh/bolos-tortas-showcase-5dPs4VozVCrwV83r6rMfVV.webp",
      },
      {
        id: 4,
        name: "Bolo de Cenoura",
        price: "R$ 32,00",
        description: "Bolo de cenoura com calda de chocolate derretida",
        image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663454003371/KJPe5tvsGqD8rNHcvoidMh/bolos-tortas-showcase-5dPs4VozVCrwV83r6rMfVV.webp",
      },
    ],
    torta: [
      {
        id: 5,
        name: "Torta de Morango",
        price: "R$ 45,00",
        description: "Torta fresca com morangos vermelhos e calda brilhante",
        image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663454003371/KJPe5tvsGqD8rNHcvoidMh/bolos-tortas-showcase-5dPs4VozVCrwV83r6rMfVV.webp",
      },
      {
        id: 6,
        name: "Torta de Limão",
        price: "R$ 40,00",
        description: "Torta cítrica com limão siciliano e merengue",
        image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663454003371/KJPe5tvsGqD8rNHcvoidMh/bolos-tortas-showcase-5dPs4VozVCrwV83r6rMfVV.webp",
      },
    ],
    salgado: [
      {
        id: 7,
        name: "Mini Salgado Assado",
        price: "R$ 2,50",
        description: "Mini salgado crocante com recheio de carne ou queijo",
        image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663454003371/KJPe5tvsGqD8rNHcvoidMh/salgados-mini-assados-kJeYMYNBvUh6bxj5Ln9GmJ.webp",
      },
      {
        id: 8,
        name: "Coxinha",
        price: "R$ 3,00",
        description: "Coxinha crocante com frango desfiado",
        image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663454003371/KJPe5tvsGqD8rNHcvoidMh/salgados-mini-assados-kJeYMYNBvUh6bxj5Ln9GmJ.webp",
      },
    ],
    doce: [
      {
        id: 9,
        name: "Mini Pudim",
        price: "R$ 4,50",
        description: "Pudim cremoso com calda de caramelo",
        image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663454003371/KJPe5tvsGqD8rNHcvoidMh/bolos-tortas-showcase-5dPs4VozVCrwV83r6rMfVV.webp",
      },
      {
        id: 10,
        name: "Brigadeiro",
        price: "R$ 1,50",
        description: "Brigadeiro caseiro com chocolate belga",
        image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663454003371/KJPe5tvsGqD8rNHcvoidMh/bolos-tortas-showcase-5dPs4VozVCrwV83r6rMfVV.webp",
      },
    ],
  };

  const reviews = [
    {
      author: "Maria Silva",
      rating: 5,
      text: "Produtos fresquinhos todos os dias! Melhor padaria de Campinas.",
    },
    {
      author: "João Santos",
      rating: 5,
      text: "Boa variedade e atendimento rápido. Recomendo!",
    },
    {
      author: "Ana Costa",
      rating: 5,
      text: "Ambiente confortável e aconchegante. Perfeito para tomar café.",
    },
  ];

  const handleWhatsApp = () => {
    const phone = "5519999999999"; // Substitua pelo número real
    const message = "Olá! Gostaria de fazer um pedido.";
    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  const handleGoogleMaps = () => {
    window.open(
      "https://www.google.com/maps/search/Padaria+BoAventura+Campinas",
      "_blank"
    );
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🥖</span>
            <h1 className="text-2xl font-bold text-primary">BoAventura</h1>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#cardapio" className="text-foreground hover:text-primary transition-colors">
              Cardápio
            </a>
            <a href="#sobre" className="text-foreground hover:text-primary transition-colors">
              Sobre
            </a>
            <a href="#contato" className="text-foreground hover:text-primary transition-colors">
              Contato
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-96 md:h-[500px] overflow-hidden">
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663454003371/KJPe5tvsGqD8rNHcvoidMh/hero-banner-pao-fresco-Tu3WaGBnZmWA3vzuaX7aAt.png"
          alt="Pães frescos"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
            Tudo Fresquinho Todos os Dias
          </h2>
          <p className="text-xl md:text-2xl text-white mb-8 drop-shadow-lg">
            Pães, bolos e doces artesanais
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <Button
              onClick={handleWhatsApp}
              className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-lg transition-all"
            >
              Fazer Pedido
            </Button>
            <Button
              onClick={handleGoogleMaps}
              variant="outline"
              className="border-white text-white hover:bg-white/20 px-8 py-6 text-lg rounded-lg"
            >
              Como Chegar
            </Button>
          </div>
        </div>
      </section>

      {/* Cardápio Section */}
      <section id="cardapio" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary">
            Nosso Cardápio
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Produtos frescos preparados diariamente com ingredientes de qualidade
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  selectedCategory === cat.id
                    ? "bg-primary text-white"
                    : "bg-secondary text-primary hover:bg-secondary/80"
                }`}
              >
                {cat.icon} {cat.name}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products[selectedCategory as keyof typeof products].map((product) => (
              <Card
                key={product.id}
                className="overflow-hidden hover:shadow-lg transition-shadow"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-2">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-accent">
                      {product.price}
                    </span>
                    <Button
                      onClick={handleWhatsApp}
                      size="sm"
                      className="bg-primary hover:bg-primary/90"
                    >
                      <ShoppingBag className="w-4 h-4 mr-2" />
                      Pedir
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre Section */}
      <section id="sobre" className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
                Sobre a BoAventura
              </h2>
              <p className="text-lg text-foreground mb-4">
                A Padaria e Confeitaria BoAventura é um estabelecimento familiar
                localizado no coração do Jardim Guarani, em Campinas. Com mais de
                uma década de tradição, nos dedicamos a preparar produtos frescos
                e deliciosos todos os dias.
              </p>
              <p className="text-lg text-foreground mb-6">
                Nossos diferenciais incluem:
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <span className="text-2xl">✓</span>
                  <span className="text-foreground">
                    Produtos 100% artesanais e frescos
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-2xl">✓</span>
                  <span className="text-foreground">
                    Ambiente confortável e acolhedor
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-2xl">✓</span>
                  <span className="text-foreground">
                    Atendimento rápido e atencioso
                  </span>
                </li>
              </ul>
            </div>
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663454003371/KJPe5tvsGqD8rNHcvoidMh/ambiente-padaria-aconchego-DkGNQbFwMFDcY5Yg9jarLP.webp"
              alt="Ambiente da padaria"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Avaliações Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary">
            O Que Nossos Clientes Dizem
          </h2>
          <div className="flex items-center justify-center gap-2 mb-12">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-6 h-6 fill-accent text-accent"
                />
              ))}
            </div>
            <span className="text-2xl font-bold text-primary">4.7</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review, idx) => (
              <Card key={idx} className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-accent text-accent"
                    />
                  ))}
                </div>
                <p className="text-foreground mb-4 italic">"{review.text}"</p>
                <p className="font-bold text-primary">{review.author}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contato Section */}
      <section id="contato" className="py-16 md:py-24 bg-primary text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Visite-nos
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <MapPin className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Localização</h3>
              <p>Jardim Guarani, Campinas - SP</p>
              <button
                onClick={handleGoogleMaps}
                className="mt-4 underline hover:opacity-80 transition-opacity"
              >
                Abrir no Google Maps
              </button>
            </div>

            <div className="text-center">
              <Clock className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Horário</h3>
              <p>Segunda a Domingo</p>
              <p>06:00 às 22:00</p>
            </div>

            <div className="text-center">
              <Phone className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Contato</h3>
              <p>WhatsApp: (19) 9999-9999</p>
              <button
                onClick={handleWhatsApp}
                className="mt-4 underline hover:opacity-80 transition-opacity"
              >
                Enviar mensagem
              </button>
            </div>
          </div>

          <div className="text-center">
            <Button
              onClick={handleWhatsApp}
              className="bg-white text-primary hover:bg-white/90 px-8 py-6 text-lg rounded-lg"
            >
              <Coffee className="w-5 h-5 mr-2" />
              Fazer Pedido Agora
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2">
            © 2026 Padaria e Confeitaria BoAventura. Todos os direitos reservados.
          </p>
          <p className="text-sm opacity-80">
            Feito com ❤️ em Campinas
          </p>
        </div>
      </footer>
    </div>
  );
}
