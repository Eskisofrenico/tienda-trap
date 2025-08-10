// ===== K3K MAFIA - UTILITIES =====
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import type { Product, ProductColor, CartItem, LoadingState } from '@/types'

// ===== CLASS UTILITIES =====
/**
 * Combina clases CSS y resuelve conflictos de Tailwind
 * Útil para componentes con variantes psicodélicas
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}

// ===== PRICE UTILITIES =====
/**
 * Formatea precios en pesos chilenos con estilo trap
 */
export function formatPrice(price: number): string {
  return new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price)
}

/**
 * Formatea precio compacto (para mobile)
 */
export function formatPriceCompact(price: number): string {
  if (price >= 1000000) {
    return `$${(price / 1000000).toFixed(1)}M`
  }
  if (price >= 1000) {
    return `$${Math.round(price / 1000)}K`
  }
  return formatPrice(price)
}

/**
 * Calcula el porcentaje de descuento
 */
export function calculateDiscount(originalPrice: number, salePrice: number): number {
  if (originalPrice <= salePrice) return 0
  return Math.round(((originalPrice - salePrice) / originalPrice) * 100)
}

/**
 * Obtiene el precio efectivo (con o sin descuento)
 */
export function getEffectivePrice(price: number, salePrice?: number): number {
  return salePrice && salePrice < price ? salePrice : price
}

// ===== STRING UTILITIES =====
/**
 * Convierte texto a slug URL-friendly
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Remover acentos
    .replace(/[^a-z0-9\s-]/g, '') // Remover caracteres especiales
    .trim()
    .replace(/\s+/g, '-') // Espacios a guiones
    .replace(/-+/g, '-') // Múltiples guiones a uno
}

/**
 * Capitaliza la primera letra de cada palabra
 */
export function capitalize(text: string): string {
  return text
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ')
}

/**
 * Trunca texto con ellipsis
 */
export function truncate(text: string, length: number): string {
  if (text.length <= length) return text
  return text.slice(0, length).trim() + '...'
}

/**
 * Genera texto psicodélico aleatorio (para efectos)
 */
export function generateTripText(base: string): string {
  const effects = ['✨', '🌈', '💫', '⚡', '🔥', '💎', '🎯', '🚀']
  const randomEffect = effects[Math.floor(Math.random() * effects.length)]
  return `${randomEffect} ${base} ${randomEffect}`
}

// ===== VALIDATION UTILITIES =====
/**
 * Valida formato de email
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

/**
 * Valida RUT chileno
 */
export function isValidRUT(rut: string): boolean {
  const cleanRUT = rut.replace(/[.-]/g, '')
  
  if (cleanRUT.length < 8 || cleanRUT.length > 9) return false
  
  const body = cleanRUT.slice(0, -1)
  const dv = cleanRUT.slice(-1).toLowerCase()
  
  if (!/^\d+$/.test(body)) return false
  
  // Calcular dígito verificador
  let sum = 0
  let multiplier = 2
  
  for (let i = body.length - 1; i >= 0; i--) {
    sum += parseInt(body[i]) * multiplier
    multiplier = multiplier === 7 ? 2 : multiplier + 1
  }
  
  const remainder = sum % 11
  const calculatedDV = remainder === 0 ? '0' : remainder === 1 ? 'k' : (11 - remainder).toString()
  
  return dv === calculatedDV
}

/**
 * Valida número de teléfono chileno
 */
export function isValidPhone(phone: string): boolean {
  const cleanPhone = phone.replace(/\s/g, '')
  const phoneRegex = /^(\+56)?[9][0-9]{8}$/
  return phoneRegex.test(cleanPhone)
}

// ===== COLOR UTILITIES =====
/**
 * Obtiene el nombre display del color psicodélico
 */
export function getColorDisplayName(color: ProductColor): string {
  const colorNames: Record<ProductColor, string> = {
    // Principales
    'purple': 'Morado Lean',
    'purple-dark': 'Morado Profundo',
    'purple-neon': 'Morado Neón',
    'purpleNeon': 'Morado Neón',
    
    'gold': 'Dorado Brillante',
    'gold-neon': 'Dorado Neón',
    'gold-dark': 'Dorado Oscuro',
    'goldNeon': 'Dorado Neón',
    
    // Acentos psicodélicos
    'pink': 'Rosa Trip',
    'pink-neon': 'Rosa Neón',
    
    'cyan': 'Cyan Psicodélico',
    'cyan-neon': 'Cyan Brillante',
    
    'lime': 'Verde Energy',
    'lime-neon': 'Verde Neón',
    
    'electric': 'Azul Eléctrico',
    'electric-neon': 'Azul Neón',
    
    // Bases
    'black': 'Negro',
    'black-trip': 'Negro Trip',
    'white': 'Blanco',
    'white-trip': 'Blanco Trip',
    
    // Efectos especiales
    'acid': 'Amarillo Ácido',
    'plasma': 'Rosa Plasma',
    'glow': 'Brillo Psicodélico'
  }
  
  return colorNames[color] || color
}

/**
 * Obtiene la clase CSS del color
 */
export function getColorClass(color: ProductColor, type: 'bg' | 'text' | 'border' = 'bg'): string {
  const prefix = type === 'bg' ? 'bg-k3k-' : type === 'text' ? 'text-k3k-' : 'border-k3k-'
  return `${prefix}${color}`
}

/**
 * Genera gradiente psicodélico aleatorio
 */
export function generateRandomGradient(): string {
  const colors = ['purple', 'gold', 'pink', 'cyan', 'lime', 'electric']
  const color1 = colors[Math.floor(Math.random() * colors.length)]
  const color2 = colors[Math.floor(Math.random() * colors.length)]
  
  return `linear-gradient(135deg, var(--k3k-${color1}) 0%, var(--k3k-${color2}) 100%)`
}

// ===== CART UTILITIES =====
/**
 * Calcula el total del carrito
 */
export function calculateCartTotal(items: CartItem[]): {
  subtotal: number
  discount: number
  total: number
  itemCount: number
} {
  let subtotal = 0
  let total = 0
  let itemCount = 0
  
  items.forEach(item => {
    const itemPrice = getEffectivePrice(item.product.price, item.product.salePrice)
    subtotal += item.product.price * item.quantity
    total += itemPrice * item.quantity
    itemCount += item.quantity
  })
  
  const discount = subtotal - total
  
  return {
    subtotal,
    discount,
    total,
    itemCount
  }
}

/**
 * Genera ID único para items del carrito
 */
export function generateCartItemId(productId: string, size?: string, color?: string): string {
  const timestamp = Date.now().toString(36)
  const random = Math.random().toString(36).substring(2, 6)
  const attributes = [size, color].filter(Boolean).join('-')
  
  return `${productId}-${attributes}-${timestamp}-${random}`
}

// ===== PRODUCT UTILITIES =====
/**
 * Verifica si un producto está en oferta
 */
export function isOnSale(product: Product): boolean {
  return !!(product.salePrice && product.salePrice < product.price)
}

/**
 * Verifica si un producto es edición limitada
 */
export function isLimitedEdition(product: Product): boolean {
  return !!(product.isLimited || product.tags?.includes('limited'))
}

/**
 * Verifica si un producto está agotado
 */
export function isOutOfStock(product: Product): boolean {
  return product.inStock === false || (typeof product.inStock === 'undefined' && false)
}

/**
 * Obtiene el badge del producto
 */
export function getProductBadge(product: Product): { text: string; variant: string } | null {
  if (isOutOfStock(product)) {
    return { text: 'AGOTADO', variant: 'default' }
  }
  
  if (isLimitedEdition(product)) {
    return { text: 'LIMITADO', variant: 'limited' }
  }
  
  if (isOnSale(product)) {
    const discount = calculateDiscount(product.price, product.salePrice!)
    return { text: `-${discount}%`, variant: 'sale' }
  }
  
  if (product.tags?.includes('new')) {
    return { text: 'NUEVO', variant: 'new' }
  }
  
  if (product.artistCollection) {
    return { text: 'ARTISTA', variant: 'artist' }
  }
  
  return null
}

// ===== SEARCH UTILITIES =====
/**
 * Filtra productos por término de búsqueda
 */
export function filterProductsBySearch(products: Product[], searchTerm: string): Product[] {
  if (!searchTerm.trim()) return products
  
  const term = searchTerm.toLowerCase()
  
  return products.filter(product => 
    product.name.toLowerCase().includes(term) ||
    product.description.toLowerCase().includes(term) ||
    product.tags?.some(tag => tag.toLowerCase().includes(term)) ||
    product.category.toLowerCase().includes(term)
  )
}

/**
 * Ordena productos por criterio
 */
export function sortProducts(
  products: Product[], 
  sortBy: 'name' | 'price' | 'newest' | 'discount' = 'name'
): Product[] {
  return [...products].sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return a.name.localeCompare(b.name)
      
      case 'price':
        const priceA = getEffectivePrice(a.price, a.salePrice)
        const priceB = getEffectivePrice(b.price, b.salePrice)
        return priceA - priceB
      
      case 'newest':
        const dateA = new Date(a.releaseDate || '2025-01-01').getTime()
        const dateB = new Date(b.releaseDate || '2025-01-01').getTime()
        return dateB - dateA
      
      case 'discount':
        const discountA = a.salePrice ? calculateDiscount(a.price, a.salePrice) : 0
        const discountB = b.salePrice ? calculateDiscount(b.price, b.salePrice) : 0
        return discountB - discountA
      
      default:
        return 0
    }
  })
}

// ===== DATE UTILITIES =====
/**
 * Formatea fecha en español
 */
export function formatDate(date: string | Date): string {
  const d = typeof date === 'string' ? new Date(date) : date
  
  return new Intl.DateTimeFormat('es-CL', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(d)
}

/**
 * Verifica si es un lanzamiento reciente (últimos 30 días)
 */
export function isRecentRelease(releaseDate?: string): boolean {
  if (!releaseDate) return false
  
  const release = new Date(releaseDate)
  const now = new Date()
  const thirtyDaysAgo = new Date(now.getTime() - (30 * 24 * 60 * 60 * 1000))
  
  return release >= thirtyDaysAgo
}

// ===== PERFORMANCE UTILITIES =====
/**
 * Debounce function para optimizar búsquedas
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}

/**
 * Throttle function para limitar eventos
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean
  
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args)
      inThrottle = true
      setTimeout(() => inThrottle = false, limit)
    }
  }
}

// ===== LOADING STATE UTILITIES =====
/**
 * Maneja estados de carga con mensajes psicodélicos
 */
export function getLoadingMessage(state: LoadingState): string {
  const messages = {
    idle: 'Listo para el trip',
    loading: 'Cargando la matrix psicodélica...',
    success: 'Trip completado exitosamente ✨',
    error: 'Error en la dimensión paralela'
  }
  
  return messages[state]
}

// ===== URL UTILITIES =====
/**
 * Construye URL con parámetros de query
 */
export function buildUrl(baseUrl: string, params: Record<string, string | number | boolean>): string {
  const url = new URL(baseUrl, window.location.origin)
  
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== '') {
      url.searchParams.set(key, value.toString())
    }
  })
  
  return url.toString()
}

// ===== LOCAL STORAGE UTILITIES =====
/**
 * Guarda datos en localStorage de forma segura
 */
export function saveToStorage<T>(key: string, data: T): boolean {
  try {
    localStorage.setItem(key, JSON.stringify(data))
    return true
  } catch (error) {
    console.error('Error saving to localStorage:', error)
    return false
  }
}

/**
 * Lee datos de localStorage de forma segura
 */
export function loadFromStorage<T>(key: string, defaultValue: T): T {
  try {
    const item = localStorage.getItem(key)
    return item ? JSON.parse(item) : defaultValue
  } catch (error) {
    console.error('Error loading from localStorage:', error)
    return defaultValue
  }
}

// ===== ERROR HANDLING =====
/**
 * Maneja errores de forma segura
 */
export async function safeAsync<T>(
  promise: Promise<T>
): Promise<[T | null, Error | null]> {
  try {
    const data = await promise
    return [data, null]
  } catch (error) {
    return [null, error as Error]
  }
}

// ===== RANDOM UTILITIES =====
/**
 * Genera número aleatorio entre min y max
 */
export function randomBetween(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

/**
 * Selecciona elemento aleatorio de array
 */
export function randomChoice<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)]
}

/**
 * Mezcla array aleatoriamente (Fisher-Yates)
 */
export function shuffle<T>(array: T[]): T[] {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}