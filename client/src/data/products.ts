export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'fast-food' | 'savory' | 'sweet';
  image: string;
  badge?: string;
}

export const products: Product[] = [
  // Fast Food
  {
    id: 'burger-combo',
    name: 'Burger Premium',
    description: 'Hamburguesa con carne 100% natural, queso cheddar, lechuga fresca y tomate',
    price: 450,
    category: 'fast-food',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663750402534/PDg6cLEPxJFmuTjguu3mLC/burger-combo-dcmP7hfvhBgzLeDGykp3tQ.webp',
    badge: 'Favorito'
  },
  {
    id: 'empanadas-set',
    name: 'Empanadas Caseras (6 piezas)',
    description: 'Empanadas recién horneadas con relleno de carne, cebolla y especias',
    price: 320,
    category: 'savory',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663750402534/PDg6cLEPxJFmuTjguu3mLC/empanadas-5HjsDGJ69FnbuAbxF5H3di.webp'
  },
  {
    id: 'salad-protein',
    name: 'Ensalada con Proteína',
    description: 'Ensalada fresca con pechuga de pollo a la parrilla, verduras de temporada y aderezo casero',
    price: 380,
    category: 'savory',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663750402534/PDg6cLEPxJFmuTjguu3mLC/salads-healthy-EFKW9Crjui84rPdty7VLwy.webp'
  },
  {
    id: 'dessert-combo',
    name: 'Combo de Postres',
    description: 'Selección de postres: brownies, macarons y croissants de chocolate',
    price: 290,
    category: 'sweet',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663750402534/PDg6cLEPxJFmuTjguu3mLC/desserts-52vFhZuUaZPasYtLMZTwLJ.webp',
    badge: 'Nuevo'
  }
];

export const categories = [
  { id: 'fast-food', name: 'Comidas Rápidas', icon: '🍔' },
  { id: 'savory', name: 'Viandas Saladas', icon: '🥗' },
  { id: 'sweet', name: 'Viandas Dulces', icon: '🍰' }
];

// WhatsApp configuration
export const WHATSAPP_NUMBER = '5491234567890'; // Replace with your actual WhatsApp number
export const BUSINESS_NAME = 'Sabor en Casa';
