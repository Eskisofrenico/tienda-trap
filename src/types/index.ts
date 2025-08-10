// ===== K3K MAFIA - TYPES DEFINITION =====

// ===== PRODUCT TYPES =====
export type ProductCategory = 'hoodies' | 'camisetas' | 'pantalones' | 'accesorios' | 'chains'

export type ProductSize = 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL'

// ===== COLORES PSICODÉLICOS ACTUALIZADOS =====
export type ProductColor = 
  // Principales
  | 'purple' | 'purple-dark' | 'purple-neon'
  | 'gold' | 'gold-neon' | 'gold-dark'
  // Acentos psicodélicos  
  | 'pink' | 'pink-neon'
  | 'cyan' | 'cyan-neon'
  | 'lime' | 'lime-neon'
  | 'electric' | 'electric-neon'
  // Bases
  | 'black' | 'black-trip' | 'white' | 'white-trip'
  // Efectos especiales
  | 'acid' | 'plasma' | 'glow'
  // Compatibilidad (para evitar errores)
  | 'purpleNeon' | 'goldNeon'

export interface Product {
  id: string
  name: string
  slug: string
  description: string
  price: number
  salePrice?: number
  images: string[]
  category: ProductCategory
  sizes?: ProductSize[]
  colors?: ProductColor[]
  featured?: boolean
  inStock?: boolean
  tags?: string[]
  
  // K3K MAFIA specific
  isLimited?: boolean
  artistCollection?: boolean
  releaseDate?: string
}

// ===== CART TYPES =====
export interface CartItem {
  id: string
  product: Product
  quantity: number
  selectedSize?: ProductSize
  selectedColor?: ProductColor
}

export interface CartState {
  items: CartItem[]
  isOpen: boolean
  total: number
  itemCount: number
}

// ===== USER TYPES =====
export interface User {
  id: string
  name: string
  email: string
  avatar?: string
  isVip?: boolean
}

// ===== BRAND TYPES ACTUALIZADOS =====
export interface BrandColors {
  // Principales
  primary: string
  secondary: string
  
  // Paleta psicodélica completa
  purple: string
  purpleDark: string
  purpleNeon: string
  
  gold: string
  goldNeon: string
  goldDark: string
  
  // Acentos psicodélicos
  pink: string
  pinkNeon: string
  
  cyan: string
  cyanNeon: string
  
  lime: string
  limeNeon: string
  
  electric: string
  electricNeon: string
  
  // Bases
  black: string
  blackTrip: string
  white: string
  whiteTrip: string
  
  // Efectos especiales
  shadow: string
  glow: string
  acid: string
  plasma: string
}

export interface SocialLinks {
  instagram: string
  tiktok: string
  spotify: string
}

export interface BrandInfo {
  name: string
  tagline: string
  description: string
  artist: string
  colors: BrandColors
  social: SocialLinks
}

// ===== COMPONENT TYPES =====
export interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'lean' | 'trip' | 'acid' | 'energy' | 'gold'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  disabled?: boolean
  loading?: boolean
  onClick?: () => void
  className?: string
  type?: 'button' | 'submit' | 'reset'
}

export interface CardProps {
  children: React.ReactNode
  variant?: 'default' | 'psychedelic' | 'lean' | 'trip' | 'acid' | 'gold' | 'neon'
  padding?: 'none' | 'sm' | 'md' | 'lg'
  hover?: boolean
  className?: string
}

export interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'limited' | 'new' | 'sale' | 'vip' | 'artist' | 'lean' | 'trip' | 'acid' | 'energy'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

// ===== API TYPES =====
export interface ApiResponse<T> {
  data: T
  success: boolean
  message?: string
  error?: string
}

export interface PaginatedResponse<T> {
  data: T[]
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}

// ===== FORM TYPES =====
export interface ContactForm {
  name: string
  email: string
  subject: string
  message: string
}

export interface NewsletterForm {
  email: string
}

// ===== NAVIGATION TYPES =====
export interface NavItem {
  name: string
  href: string
  icon?: React.ComponentType<{ className?: string }>
  badge?: string
  children?: NavItem[]
}

// ===== K3K MAFIA SPECIFIC TYPES =====
export interface K3kCollection {
  id: string
  name: string
  description: string
  image: string
  products: Product[]
  releaseDate: string
  isActive: boolean
}

export interface ArtistInfo {
  name: string
  bio: string
  image: string
  socialLinks: SocialLinks
  featuredTrack?: {
    name: string
    url: string
    cover: string
  }
}

// ===== PSYCHEDELIC EFFECTS TYPES =====
export interface PsychedelicEffects {
  gradients: {
    lean: string
    gold: string
    trip: string
    acid: string
    plasma: string
    neon: string
    deepTrip: string
    energyDrink: string
  }
  shadows: {
    purple: string
    gold: string
    pink: string
    cyan: string
    lime: string
    multicolor: string
  }
  animations: {
    pulse: string
    glow: string
    trip: string
    lean: string
    energy: string
  }
}

// ===== UTILITY TYPES =====
export type WithClassName<T = {}> = T & {
  className?: string
}

export type WithChildren<T = {}> = T & {
  children: React.ReactNode
}

export type LoadingState = 'idle' | 'loading' | 'success' | 'error'

export type Theme = 'light' | 'dark' | 'psychedelic' | 'lean' | 'trip' | 'acid' | 'energy'