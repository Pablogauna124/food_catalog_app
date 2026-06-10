import { useState, useEffect } from "react";
import { ProductCard } from "@/components/ProductCard";
import { products, categories, BUSINESS_NAME, WHATSAPP_NUMBER } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MessageCircle, Clock, Truck, ChevronLeft, ChevronRight } from "lucide-react";

const heroImages = [
  { src: '/manus-storage/Screenshot_20260610_161413_42853336.png', alt: 'Pollo al Horno con Limón y Hierbas' },
  { src: '/manus-storage/Screenshot_20260610_161231_eb47a951.png', alt: 'Pollo con Salsa de Mostaza y Miel' },
  { src: '/manus-storage/Screenshot_20260610_161321_f5dddda1.png', alt: 'Pollo al Horno' },
  { src: '/manus-storage/Screenshot_20260610_161127_be5d09d9.png', alt: 'Pollo Stroganoff' },
  { src: '/manus-storage/Screenshot_20260610_161150_be21c40b.png', alt: 'Tacos de Carne Molida' },
  { src: '/manus-storage/Screenshot_20260610_161014_93f4e820.png', alt: 'Carne con Papas y Zanahorias' },
  { src: '/manus-storage/Screenshot_20260610_160920_ca81ca06.png', alt: 'Ñoquis de Papa' },
  { src: '/manus-storage/Screenshot_20260610_161208_7dfaa8c1.png', alt: 'Ensalada de Pasta con Atún' },
  { src: '/manus-storage/Screenshot_20260610_172001_77af8360.png', alt: 'Tentación de Chocolate' },
  { src: '/manus-storage/Screenshot_20260610_171935_1a79e192.png', alt: 'Postre de Crema y Durazno' },
];

function HeroCarousel({ onOrderClick }: { onOrderClick: () => void }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + heroImages.length) % heroImages.length);
  const next = () => setCurrent((c) => (c + 1) % heroImages.length);

  return (
    <section className="relative h-[420px] md:h-[500px] overflow-hidden bg-gray-900">
      {/* Slides */}
      {heroImages.map((img, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-700"
          style={{ opacity: i === current ? 1 : 0, zIndex: i === current ? 1 : 0 }}
        >
          <img
            src={img.src}
            alt={img.alt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-start">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 max-w-2xl drop-shadow-lg">
          Comida Deliciosa, Hecha con Amor
        </h2>
        <p className="text-lg text-gray-100 mb-6 max-w-xl drop-shadow">
          Descubre nuestro catálogo de comidas, viandas saladas y postres caseros
        </p>
        <Button
          onClick={onOrderClick}
          className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-6 active:scale-95 transition-transform"
        >
          Pedir Ahora
        </Button>
      </div>

      {/* Arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/40 hover:bg-black/60 text-white rounded-full p-2 transition-colors"
        aria-label="Anterior"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/40 hover:bg-black/60 text-white rounded-full p-2 transition-colors"
        aria-label="Siguiente"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {heroImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === current ? 'bg-orange-500 w-5' : 'bg-white/60 hover:bg-white'
            }`}
            aria-label={`Ir a slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

/**
 * Home Page - Food Catalog
 * 
 * Design Philosophy: "Apetito Moderno"
 * - Warm orange primary color (#FF6B35) for appetite appeal
 * - Fresh green accents (#2D6A4F) for freshness
 * - Clean white background with subtle shadows
 * - Smooth animations and hover effects
 */
export default function Home() {
  const [activeCategory, setActiveCategory] = useState("fast-food");

  const filteredProducts = products.filter(
    (p) => p.category === activeCategory
  );

  const handleWhatsAppContact = () => {
    const message = `¡Hola! Me interesa conocer el menú, precios y opciones de viandas de PG. 🍽️😊`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm shadow-sm border-b border-orange-100">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src="/manus-storage/logo_pg_transparent_82c8d15c.png"
              alt="PG Comidas & Viandas"
              className="h-12 w-auto object-contain"
            />
          </div>
          <Button
            onClick={handleWhatsAppContact}
            className="bg-green-500 hover:bg-green-600 text-white flex items-center gap-2"
          >
            <MessageCircle className="h-4 w-4" />
            Contactar
          </Button>
        </div>
      </header>

      {/* Hero Section - Auto Carousel */}
      <HeroCarousel onOrderClick={handleWhatsAppContact} />

      {/* Features Section */}
      <section className="bg-orange-50/60 py-12 border-b border-orange-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Truck className="h-6 w-6 text-orange-600" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-1">Entrega Rápida</h3>
                <p className="text-muted-foreground text-sm">Recibe tu pedido en el menor tiempo posible</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-lg">👨‍🍳</span>
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-1">Hecho en Casa</h3>
                <p className="text-muted-foreground text-sm">Ingredientes frescos y recetas caseras</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Clock className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-1">Disponible Todos los Días</h3>
                <p className="text-muted-foreground text-sm">Lunes a domingo, de 10:00 a 22:00</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground mb-2">Nuestro Catálogo</h2>
          <p className="text-muted-foreground mb-8">Selecciona la categoría que te interesa</p>

          {/* Category Tabs */}
          <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8 bg-orange-100/70 p-1">
              {categories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="data-[state=active]:bg-orange-500 data-[state=active]:text-white"
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {/* Products Grid */}
            {categories.map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in-50 duration-300">
                  {products
                    .filter((p) => p.category === category.id)
                    .map((product, index) => (
                      <div
                        key={product.id}
                        className="animate-in fade-in-50 duration-300"
                        style={{
                          animationDelay: `${index * 50}ms`,
                        }}
                      >
                        <ProductCard product={product} />
                      </div>
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            ¿Listo para ordenar?
          </h2>
          <p className="text-orange-50 mb-8 text-lg">
            Contacta con nosotros por WhatsApp y realiza tu pedido ahora
          </p>
          <Button
            onClick={handleWhatsAppContact}
            className="bg-white text-orange-600 hover:bg-gray-100 text-lg px-8 py-6 font-bold"
          >
            <MessageCircle className="h-5 w-5 mr-2" />
            Abrir WhatsApp
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold mb-4">Sobre Nosotros</h3>
              <p className="text-sm leading-relaxed">
                Viandas PG nació con una idea simple: ofrecer comidas caseras, ricas y confiables para acompañarte en cada momento del día. Preparamos viandas con ingredientes de calidad, dedicación y el compromiso de brindar una opción práctica sin resignar sabor. Porque comer bien también puede ser fácil. 🍽️✨
              </p>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Horarios</h3>
              <p className="text-sm">Lunes a Viernes: 10:00 - 22:00</p>
              <p className="text-sm">Sábado y Domingo: 11:00 - 23:00</p>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Contacto</h3>
              <p className="text-sm">WhatsApp: +54 9 3777 391015</p>
              <p className="text-sm">Email: pablojoelgauna@gmail.com</p>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-sm">
            <p>&copy; 2026 Viandas PG. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
