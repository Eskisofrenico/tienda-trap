// ===== K3K MAFIA - BRAND CONSTANTS =====
import type { BrandInfo, Product, NavItem, K3kCollection } from '@/types'

// ===== BRAND IDENTITY - PSICODÉLICO TRAP =====
export const BRAND_INFO: BrandInfo = {
  name: 'K3K MAFIA',
  tagline: 'Join The K3K',
  description: 'Streetwear psicodélico inspirado en KONS3002.MAFIA y la cultura trap',
  artist: 'KONS3002.MAFIA',
  
  colors: {
    // === COLORES PRINCIPALES TRAP PSICODÉLICO ===
    primary: '#8B5CF6',      // Morado trap (lean/jarabe)
    secondary: '#F59E0B',    // Dorado brillante
    
    // === PALETA PSICODÉLICA ===
    purple: '#8B5CF6',       // Morado principal (lean)
    purpleDark: '#6B21A8',   // Morado oscuro (deep lean)
    purpleNeon: '#A855F7',   // Morado neón brillante
    
    gold: '#F59E0B',         // Dorado principal
    goldNeon: '#FCD34D',     // Dorado neón
    goldDark: '#D97706',     // Dorado oscuro
    
    // === ACENTOS PSICODÉLICOS ===
    pink: '#EC4899',         // Rosa trip
    pinkNeon: '#F472B6',     // Rosa neón intenso
    
    cyan: '#06B6D4',         // Cyan psicodélico
    cyanNeon: '#22D3EE',     // Cyan brillante
    
    lime: '#65F563',         // Verde neón (pila/energy)
    limeNeon: '#84CC16',     // Verde lima brillante
    
    electric: '#3B82F6',     // Azul eléctrico
    electricNeon: '#60A5FA', // Azul neón
    
    // === BASES ===
    black: '#000000',        // Negro profundo
    blackTrip: '#1A1A1A',   // Negro con efecto
    white: '#FFFFFF',        // Blanco puro
    whiteTrip: '#F8FAFC',   // Blanco con efecto
    
    // === EFECTOS ESPECIALES ===
    shadow: '#4C1D95',       // Sombra morada
    glow: '#A855F7',         // Brillo psicodélico
    acid: '#FACC15',         // Amarillo ácido (LSD)
    plasma: '#E879F9'        // Rosa plasma
  },
  
  social: {
    instagram: '@k3kmafia',
    tiktok: '@k3kmafia',
    spotify: 'KONS3002.MAFIA'
  }
}

// ===== EFECTOS PSICODÉLICOS =====
export const PSYCHEDELIC_EFFECTS = {
  gradients: {
    lean: 'linear-gradient(135deg, #8B5CF6 0%, #6B21A8 100%)',
    gold: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
    trip: 'linear-gradient(135deg, #8B5CF6 0%, #EC4899 50%, #F59E0B 100%)',
    acid: 'linear-gradient(45deg, #65F563 0%, #06B6D4 50%, #EC4899 100%)',
    plasma: 'radial-gradient(circle, #A855F7 0%, #EC4899 50%, #F59E0B 100%)',
    neon: 'linear-gradient(90deg, #22D3EE 0%, #A855F7 25%, #EC4899 50%, #F59E0B 75%, #65F563 100%)',
    deepTrip: 'linear-gradient(180deg, #000000 0%, #6B21A8 50%, #8B5CF6 100%)',
    energyDrink: 'linear-gradient(135deg, #65F563 0%, #22D3EE 100%)'
  },
  
  shadows: {
    purple: '0 0 20px rgba(139, 92, 246, 0.6)',
    gold: '0 0 20px rgba(245, 158, 11, 0.6)',
    pink: '0 0 20px rgba(236, 72, 153, 0.6)',
    cyan: '0 0 20px rgba(34, 211, 238, 0.6)',
    lime: '0 0 20px rgba(101, 245, 99, 0.6)',
    multicolor: '0 0 30px rgba(139, 92, 246, 0.4), 0 0 60px rgba(236, 72, 153, 0.3), 0 0 90px rgba(245, 158, 11, 0.2)'
  },
  
  animations: {
    pulse: 'psychedelicPulse 2s ease-in-out infinite alternate',
    glow: 'neonGlow 3s ease-in-out infinite',
    trip: 'acidTrip 4s linear infinite',
    lean: 'leanWave 3s ease-in-out infinite',
    energy: 'energyBurst 1.5s ease-in-out infinite'
  }
}

// ===== NAVIGATION MENU =====
export const NAVIGATION: NavItem[] = [
  {
    name: 'Inicio',
    href: '/',
  },
  {
    name: 'Productos',
    href: '/productos',
    children: [
      { name: 'Hoodies Lean', href: '/productos?category=hoodies', badge: '🔥' },
      { name: 'Camisetas Trip', href: '/productos?category=camisetas' },
      { name: 'Pants Psicodélicos', href: '/productos?category=pantalones' },
      { name: 'Cadenas Gold', href: '/productos?category=chains', badge: 'NEW' },
      { name: 'Accesorios Neon', href: '/productos?category=accesorios' },
    ]
  },
  {
    name: 'Nosotros',
    href: '/nosotros',
  },
  {
    name: 'Contacto',
    href: '/contacto',
  }
]

// ===== PRODUCT CATEGORIES - TEMÁTICA PSICODÉLICA =====
export const CATEGORIES = {
  hoodies: {
    id: 'hoodies',
    name: 'Hoodies Lean',
    description: 'Sudaderas con efectos psicodélicos y colores trap',
    icon: '🍇',
    color: BRAND_INFO.colors.purple,
    theme: 'lean'
  },
  camisetas: {
    id: 'camisetas',
    name: 'Camisetas Trip',
    description: 'T-shirts con diseños alucinantes y colores vibrantes',
    icon: '🌈',
    color: BRAND_INFO.colors.pink,
    theme: 'trip'
  },
  pantalones: {
    id: 'pantalones',
    name: 'Pants Psicodélicos',
    description: 'Joggers con patrones que hipnotizan',
    icon: '🌀',
    color: BRAND_INFO.colors.cyan,
    theme: 'psychedelic'
  },
  chains: {
    id: 'chains',
    name: 'Cadenas Gold',
    description: 'Cadenas doradas que brillan como el sol',
    icon: '⚡',
    color: BRAND_INFO.colors.gold,
    theme: 'gold'
  },
  accesorios: {
    id: 'accesorios',
    name: 'Accesorios Neon',
    description: 'Gorras y accesorios que brillan en la oscuridad',
    icon: '💊',
    color: BRAND_INFO.colors.lime,
    theme: 'neon'
  }
} as const

// ===== MOCK PRODUCTS - TEMÁTICA TRAP PSICODÉLICA =====
export const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Polerón Purple Lean Dreams',
    slug: 'poleron-purple-lean-dreams',
    description: 'Polerón morado con efectos psicodélicos inspirado en el lean. Diseño exclusivo K3K MAFIA.',
    price: 89990,
    salePrice: 69990,
    images: ['/poleron_1.png'],
    category: 'hoodies',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['purple', 'purpleNeon', 'black'],
    featured: true,
    inStock: true,
    tags: ['lean', 'purple', 'psychedelic', 'limited'],
    isLimited: true,
    artistCollection: true,
    releaseDate: '2025-01-15'
  },
  {
    id: '2',
    name: 'Polera Acid Trip Neon',
    slug: 'polera-acid-trip-neon',
    description: 'Polera con estampado que simula efectos de LSD. Colores que cambian y patrones hipnóticos.',
    price: 45990,
    images: ['/polera_1.png'],
    category: 'camisetas',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['pink', 'cyan', 'lime'],
    featured: true,
    inStock: true,
    tags: ['acid', 'trip', 'neon', 'glow'],
    isLimited: false,
    artistCollection: true
  },
  {
    id: '3',
    name: 'Cadena K3K Gold Plasma',
    slug: 'cadena-k3k-gold-plasma',
    description: 'Cadena dorada con efectos de plasma. Brilla con luz propia y tiene grabado el logo K3K MAFIA.',
    price: 149990,
    images: ['/cadena_1.png'],
    category: 'chains',
    colors: ['gold', 'goldNeon'],
    featured: true,
    inStock: true,
    tags: ['gold', 'chain', 'plasma', 'exclusive'],
    isLimited: true,
    artistCollection: true,
    releaseDate: '2025-02-01'
  }
]