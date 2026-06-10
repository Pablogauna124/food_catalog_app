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
    id: 'chicken-lemon-rice',
    name: 'Pollo al Limón con Arroz',
    description: 'Pollo jugoso marinado en limón fresco, acompañado de arroz blanco esponjoso y guarnición de limón',
    price: 520,
    category: 'fast-food',
    image: '/manus-storage/Screenshot_20260610_161621_93cc5762.png',
    badge: 'Nuevo'
  },
  {
    id: 'meatballs-tomato',
    name: 'Albóndigas de Carne con Salsa de Tomate',
    description: 'Albóndigas caseras de carne molida, cocidas en salsa de tomate casera con hierbas aromáticas',
    price: 480,
    category: 'fast-food',
    image: '/manus-storage/Screenshot_20260610_161610_597bf84c.png',
    badge: 'Nuevo'
  },
  {
    id: 'tuna-vegetable-tart',
    name: 'Tarta de Atún y Vegetales',
    description: 'Tarta casera rellena de atún fresco, vegetales variados, huevo y queso derretido',
    price: 520,
    category: 'fast-food',
    image: '/manus-storage/Screenshot_20260610_161544_80b50e63.png',
    badge: 'Nuevo'
  },
  {
    id: 'rice-chicken-curry',
    name: 'Arroz con Pollo al Curry',
    description: 'Arroz aromático con pollo tierno cocinado en salsa de curry con verduras frescas y especias',
    price: 540,
    category: 'fast-food',
    image: '/manus-storage/Screenshot_20260610_161526_326d0806.png',
    badge: 'Nuevo'
  },
  {
    id: 'beef-stew-potatoes',
    name: 'Estofado de Carne con Papas',
    description: 'Estofado casero de carne tierna cocida a fuego lento con papas, zanahorias y hierbas aromáticas',
    price: 550,
    category: 'fast-food',
    image: '/manus-storage/Screenshot_20260610_161511_f4982cf6.png',
    badge: 'Nuevo'
  },
  {
    id: 'potato-meat-pie',
    name: 'Pastel de Papas con Carne',
    description: 'Pastel casero con base de puré de papas cremoso y relleno de carne molida condimentada al horno',
    price: 500,
    category: 'fast-food',
    image: '/manus-storage/Screenshot_20260610_161451_2cd1f0f9.png',
    badge: 'Nuevo'
  },
  {
    id: 'spaghetti-bolognese',
    name: 'Fideos con Salsa Bolognesa',
    description: 'Fideos al dente con salsa bolognesa casera de carne, tomate, albahaca fresca y queso parmesano',
    price: 460,
    category: 'fast-food',
    image: '/manus-storage/Screenshot_20260610_161430_65c0c6cb.png',
    badge: 'Nuevo'
  },
  {
    id: 'gnocchi-potato',
    name: 'Ñoquis de Papa',
    description: 'Ñoquis caseros de papa con salsa a elección: bolognesa de carne, bechamel cremosa o salsa de crema. Suaves y esponjosos',
    price: 490,
    category: 'fast-food',
    image: '/manus-storage/Screenshot_20260610_160920_ca81ca06.png',
    badge: 'Nuevo'
  },
  {
    id: 'beef-potatoes-carrots',
    name: 'Carne con Papas y Zanahorias',
    description: 'Guiso casero de carne tierna cocida a fuego lento con papas y zanahorias en caldo sabroso, reconfortante y nutritivo',
    price: 540,
    category: 'fast-food',
    image: '/manus-storage/Screenshot_20260610_161014_93f4e820.png',
    badge: 'Nuevo'
  },
  {
    id: 'beef-tacos',
    name: 'Tacos de Carne Molida',
    description: 'Tacos crujientes rellenos de carne molida sazonada con especias, listos para acompañar con tus ingredientes favoritos',
    price: 390,
    category: 'fast-food',
    image: '/manus-storage/Screenshot_20260610_161150_be21c40b.png',
    badge: 'Nuevo'
  },
  {
    id: 'chicken-stroganoff',
    name: 'Pollo Stroganoff',
    description: 'Pollo tierno en salsa cremosa de champiñones y crema, servido sobre arroz blanco esponjoso. Un clásico reconfortante',
    price: 570,
    category: 'fast-food',
    image: '/manus-storage/Screenshot_20260610_161127_be5d09d9.png',
    badge: 'Nuevo'
  },
  {
    id: 'pasta-salad-tuna',
    name: 'Ensalada de Pasta con Atún',
    description: 'Ensalada fría de pasta con atún, choclo, arvejas, pimiento rojo, aceitunas y aderezo casero. Fresca y nutritiva',
    price: 420,
    category: 'fast-food',
    image: '/manus-storage/Screenshot_20260610_161208_7dfaa8c1.png',
    badge: 'Nuevo'
  },
  {
    id: 'chicken-honey-mustard',
    name: 'Pollo con Salsa de Mostaza y Miel',
    description: 'Pechuga de pollo jugosa bañada en salsa cremosa de mostaza y miel, acompañada de cebollas caramelizadas y hierbas frescas',
    price: 560,
    category: 'fast-food',
    image: '/manus-storage/Screenshot_20260610_161231_eb47a951.png',
    badge: 'Nuevo'
  },
  {
    id: 'empanadas-horno-fritas',
    name: 'Empanadas al Horno / Fritas',
    description: 'Empanadas caseras disponibles al horno o fritas, con rellenos a elección: carne, pollo, jamón y queso. Crujientes por fuera y jugosas por dentro',
    price: 350,
    category: 'fast-food',
    image: '/manus-storage/Screenshot_20260610_161257_560f5356.png',
    badge: 'Nuevo'
  },
  {
    id: 'chicken-wok-vegetables',
    name: 'Pollo con Vegetales al Wok',
    description: 'Pollo salteado al wok con pimientos, chauchas y cebolla en salsa agridulce, tierno y lleno de sabor',
    price: 530,
    category: 'fast-food',
    image: '/manus-storage/Screenshot_20260610_161321_f5dddda1.png',
    badge: 'Nuevo'
  },
  {
    id: 'roast-chicken-herbs',
    name: 'Pollo al Horno con Limón y Hierbas',
    description: 'Pollo al horno dorado con marinada de limón, ajo y hierbas aromáticas frescas, jugoso por dentro y crocante por fuera',
    price: 580,
    category: 'fast-food',
    image: '/manus-storage/Screenshot_20260610_161413_42853336.png',
    badge: 'Nuevo'
  },
  {
    id: 'choco-temptation-dessert',
    name: 'Tentación de Chocolate',
    description: 'Postre en vasito con base de bizcocho, capa de dulce de leche, mousse de chocolate y crema chantilly. Goloso e irresistible',
    price: 290,
    category: 'sweet',
    image: '/manus-storage/Screenshot_20260610_172001_77af8360.png',
    badge: 'Nuevo'
  },
  {
    id: 'cream-peach-dulce-de-leche',
    name: 'Postre de Crema, Durazno y Dulce de Leche',
    description: 'Postre en vasito con capas de dulce de leche, durazno en almíbar y crema chantilly. Dulce, fresco y artesanal',
    price: 270,
    category: 'sweet',
    image: '/manus-storage/Screenshot_20260610_171935_1a79e192.png',
    badge: 'Nuevo'
  },
  {
    id: 'chocolate-dessert',
    name: 'Postre de Chocolate',
    description: 'Postre en vasito con capas de bizcocho de chocolate, crema de chocolate y perlas crocantes. Irresistible y artesanal',
    price: 280,
    category: 'sweet',
    image: '/manus-storage/Screenshot_20260610_171853_1dbfe029.png',
    badge: 'Nuevo'
  },
  {
    id: 'dessert-combo',
    name: 'Combo de Postres',
    description: 'Selección de postres: brownies, macarons y croissants de chocolate',
    price: 290,
    category: 'sweet',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663750402534/PDg6cLEPxJFmuTjguu3mLC/desserts-52vFhZuUaZPasYtLMZTwLJ.webp'
  }
];

export const categories = [
  { id: 'fast-food', name: 'COMIDAS', icon: '🍔' },
  { id: 'savory', name: 'Viandas Saladas', icon: '🥗' },
  { id: 'sweet', name: 'Viandas Dulces', icon: '🍰' }
];

// WhatsApp configuration
export const WHATSAPP_NUMBER = '3777391015'; // WhatsApp number for orders
export const BUSINESS_NAME = 'Sabor en Casa';
