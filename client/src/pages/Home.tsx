import { useState } from "react";
import { ProductCard } from "@/components/ProductCard";
import { products, categories, BUSINESS_NAME, WHATSAPP_NUMBER } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MessageCircle, Clock, Truck } from "lucide-react";

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
    const message = `Hola, quisiera conocer más sobre ${BUSINESS_NAME}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
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

      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden bg-gray-900">
        {/* Two images side by side as hero background */}
        <div className="absolute inset-0 flex">
          <div className="w-1/2 overflow-hidden">
            <img
              src="/manus-storage/Screenshot_20260610_161413_42853336.png"
              alt="Pollo al Horno con Limón y Hierbas"
              className="w-full h-full object-cover opacity-80"
            />
          </div>
          <div className="w-1/2 overflow-hidden">
            <img
              src="/manus-storage/Screenshot_20260610_161231_eb47a951.png"
              alt="Pollo con Salsa de Mostaza y Miel"
              className="w-full h-full object-cover opacity-80"
            />
          </div>
        </div>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-start">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 max-w-2xl">
            Comida Deliciosa, Hecha con Amor
          </h2>
          <p className="text-lg text-gray-100 mb-6 max-w-xl">
            Descubre nuestro catálogo de comidas rápidas, viandas saladas y postres caseros
          </p>
          <Button
            onClick={handleWhatsAppContact}
            className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-6"
          >
            Pedir Ahora
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-12 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Truck className="h-6 w-6 text-orange-600" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Entrega Rápida</h3>
                <p className="text-gray-600 text-sm">Recibe tu pedido en el menor tiempo posible</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-lg">👨‍🍳</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Hecho en Casa</h3>
                <p className="text-gray-600 text-sm">Ingredientes frescos y recetas caseras</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Clock className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Disponible Todos los Días</h3>
                <p className="text-gray-600 text-sm">Lunes a domingo, de 10:00 a 22:00</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Nuestro Catálogo</h2>
          <p className="text-gray-600 mb-8">Selecciona la categoría que te interesa</p>

          {/* Category Tabs */}
          <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8 bg-gray-100 p-1">
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
              <p className="text-sm">
                {BUSINESS_NAME} es tu opción para comida deliciosa hecha con ingredientes frescos y amor.
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
            <p>&copy; 2026 {BUSINESS_NAME}. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
