// ===== K3K MAFIA - PRODUCT CARD OPTIMIZADA =====
// Card de producto con menos saturación visual y mejor espaciado
'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Heart, Eye, ShoppingCart, Zap, Star } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useCart } from '@/hooks/use-cart'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { Card, CardContent } from '@/components/ui/Card'
import { 
  formatPrice, 
  getEffectivePrice, 
  calculateDiscount, 
  getProductBadge,
  isOnSale,
  isLimitedEdition,
  isOutOfStock 
} from '@/lib/utils'
import type { Product, ProductSize, ProductColor } from '@/types'

// ===== PRODUCT CARD PROPS =====
interface ProductCardProps {
  product: Product
  className?: string
  variant?: 'default' | 'featured' | 'minimal'
  showQuickAdd?: boolean
  showWishlist?: boolean
}

// ===== PRODUCT CARD COMPONENT OPTIMIZADA =====
export default function ProductCard({ 
  product, 
  className,
  variant = 'default',
  showQuickAdd = true,
  showWishlist = true
}: ProductCardProps) {
  const [selectedSize, setSelectedSize] = useState<ProductSize | undefined>(product.sizes?.[0])
  const [selectedColor, setSelectedColor] = useState<ProductColor | undefined>(product.colors?.[0])
  const [isHovered, setIsHovered] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)
  const [isWishlisted, setIsWishlisted] = useState(false)

  const { addItem, isLoading } = useCart()

  // ===== COMPUTED VALUES =====
  const effectivePrice = getEffectivePrice(product.price, product.salePrice)
  const discount = product.salePrice ? calculateDiscount(product.price, product.salePrice) : 0
  const badge = getProductBadge(product)
  const outOfStock = isOutOfStock(product)
  const onSale = isOnSale(product)
  const limited = isLimitedEdition(product)

  // ===== HANDLERS =====
  const handleAddToCart = async (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    
    if (outOfStock) return
    
    await addItem(product, selectedSize, selectedColor)
  }

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsWishlisted(!isWishlisted)
  }

  const handleQuickView = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    // Implementar modal de vista rápida
    console.log('Quick view:', product.slug)
  }

  // ===== VARIANT STYLES =====
  const getCardVariant = () => {
    if (limited) return 'psychedelic'
    if (onSale) return 'acid'
    if (product.featured) return 'trip'
    return 'lean'
  }

  // ===== RENDER =====
  return (
    <Link href={`/producto/${product.slug}`}>
      <Card
        variant={getCardVariant()}
        padding="none"
        hover
        className={cn(
          'group relative overflow-hidden transition-all duration-500 hover-lift',
          'w-full max-w-[380px] min-w-[300px] max-h-[800px] flex flex-col h-full',
          outOfStock && 'grayscale cursor-not-allowed opacity-75',
          className
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex flex-col flex-1 h-full">
          <CardContent className="flex flex-col flex-1 pb-0 px-5 pt-5">
            {/* IMAGEN DEL PRODUCTO OPTIMIZADA */}
            <div className="relative aspect-square overflow-hidden rounded-xl bg-k3k-black-trip mb-6">
              {/* Placeholder mientras carga mejorado */}
              {!imageLoaded && (
                <div className="absolute inset-0 bg-gradient-to-br from-k3k-purple/10 to-k3k-gold/10 animate-pulse flex items-center justify-center">
                  <Zap className="w-12 h-12 text-k3k-white/20 animate-bounce" />
                </div>
              )}
              {/* Imagen principal */}
              <Image
                src={product.images[0] || '/placeholder-product.jpg'}
                alt={product.name}
                fill
                className={cn(
                  'object-cover transition-all duration-700 group-hover:scale-110',
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                )}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                onLoad={() => setImageLoaded(true)}
              />
              {/* OVERLAY DE HOVER MEJORADO */}
              <div className={cn(
                'absolute inset-0 bg-gradient-to-t from-k3k-black/60 via-transparent to-transparent transition-opacity duration-300',
                isHovered ? 'opacity-100' : 'opacity-0'
              )} />
              {/* BADGES SIMPLIFICADOS */}
              <div className="absolute top-3 left-4 flex flex-col gap-2">
                {badge && (
                  <div className="mb-3">
                    <Badge 
                      variant={badge.variant as any} 
                      size="sm" 
                      className="px-4 py-1 rounded-md border border-white/30 shadow-md flex items-center justify-center" 
                      style={{ minWidth: '130%', width: '130%' }}
                    >
                      <span className="text-[10px] leading-none tracking-wide">{badge.text}</span>
                    </Badge>
                  </div>
                )}
              </div>
              {/* ACCIONES RÁPIDAS MEJORADAS */}
              <div className={cn(
                'absolute top-4 right-4 flex flex-col gap-2 transition-all duration-300',
                isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
              )}>
                {showWishlist && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleWishlist}
                    className="w-10 h-10 rounded-full bg-k3k-black-trip/90 backdrop-blur-sm border border-k3k-white/20 hover:border-k3k-pink hover:text-k3k-pink hover-glow"
                  >
                    <Heart className={cn('w-4 h-4', isWishlisted && 'fill-current text-k3k-pink')} />
                  </Button>
                )}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleQuickView}
                  className="w-10 h-10 rounded-full bg-k3k-black-trip/90 backdrop-blur-sm border border-k3k-white/20 hover:border-k3k-cyan hover:text-k3k-cyan hover-glow"
                >
                  <Eye className="w-4 h-4" />
                </Button>
              </div>
              {/* RATING SIMPLIFICADO */}
              {product.featured && (
                <div className="absolute bottom-4 left-4 flex items-center space-x-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Star className="w-3 h-3 text-k3k-gold fill-current" />
                  <span className="text-xs text-k3k-white font-medium">4.8</span>
                </div>
              )}
              {/* DISPONIBILIDAD SOBRE IMAGEN */}
              <div className={cn(
                'absolute bottom-4 right-4 text-[11px] font-semibold px-3 py-1 rounded-full shadow-md',
                outOfStock 
                  ? 'text-red-400 bg-red-400/10' 
                  : 'text-k3k-lime bg-k3k-lime/10'
              )}>
                {outOfStock ? 'Agotado' : 'Disponible'}
              </div>
            </div>
            {/* INFORMACIÓN DEL PRODUCTO OPTIMIZADA */}
            <div className="flex-1 flex flex-col justify-between">
              {/* NOMBRE Y CATEGORÍA MEJORADOS */}
              <div className="mb-2">
                <h3 className="font-bold text-lg text-k3k-white group-hover:text-k3k-purple-neon transition-colors duration-300 line-clamp-2 leading-snug">
                  {product.name}
                </h3>
              </div>
              {/* PRECIO DESTACADO */}
              <div className="flex items-end gap-3 mb-2">
                <span className="text-2xl font-extrabold text-k3k-gold leading-tight">
                  {formatPrice(effectivePrice)}
                </span>
                {onSale && (
                  <>
                    <span className="text-xs text-k3k-white/40 line-through leading-none">
                      {formatPrice(product.price)}
                    </span>
                    <Badge variant="sale" size="sm" className="text-[10px] px-2 py-0.5">
                      -{discount}%
                    </Badge>
                  </>
                )}
              </div>
              {/* OPCIONES SIMPLIFICADAS - Solo mostrar disponibilidad */}
              <div className="flex items-center gap-3 pt-1 pb-2">
                {product.sizes && product.sizes.length > 0 && (
                  <span className="text-[11px] text-k3k-white/50">
                    {product.sizes.length} tallas
                  </span>
                )}
                {product.colors && product.colors.length > 0 && (
                  <span className="text-[11px] text-k3k-white/50">
                    {product.colors.length} colores
                  </span>
                )}
              </div>
              {/* ACCIONES PRINCIPALES PARA VARIANT MINIMAL */}
              {variant === 'minimal' && (
                <div className="flex gap-2 pt-10">
                  <Button
                    variant="lean"
                    size="sm"
                    onClick={handleAddToCart}
                    loading={isLoading}
                    disabled={outOfStock}
                    className="flex-1"
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    {outOfStock ? 'Agotado' : isLoading ? 'Agregando...' : 'Agregar'}
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleQuickView}
                    className="px-3"
                  >
                    <Eye className="w-4 h-4" />
                  </Button>
                </div>
              )}
            </div>
            {/* EFECTO DE CARGA ESTADO MEJORADO */}
            {outOfStock && (
              <div className="absolute inset-0 bg-k3k-black/70 backdrop-blur-sm flex items-center justify-center rounded-xl">
                <div className="text-center">
                  <Badge variant="default" size="lg" className="mb-2">
                    ⛔ AGOTADO
                  </Badge>
                  <p className="text-xs text-k3k-white/60">Pronto nuevas unidades</p>
                </div>
              </div>
            )}
            {/* EFECTO ESPECIAL PARA PRODUCTOS LIMITADOS */}
            {limited && !outOfStock && (
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-k3k-pink via-k3k-purple to-k3k-gold animate-energy-burst" />
            )}
          </CardContent>
          {/* BOTÓN DE AGREGAR AL CARRITO - PEGADO AL FONDO DE LA TARJETA */}
          {showQuickAdd && (
            <div className="px-5 pb-5 w-full mt-auto">
              <Button
                variant="ghost"
                size="md"
                onClick={handleAddToCart}
                loading={isLoading}
                className="w-full flex items-center justify-center gap-2 py-3 text-base font-bold bg-k3k-black/80 text-white border border-k3k-purple/40 shadow-lg hover:bg-k3k-purple/80 hover:text-k3k-gold transition-colors duration-300 mt-2"
                disabled={outOfStock}
              >
                <ShoppingCart className="w-4 h-4" />
                <span>{isLoading ? 'Agregando...' : outOfStock ? 'Agotado' : 'Agregar al Carrito'}</span>
              </Button>
            </div>
          )}
        </div>
      </Card>
    </Link>
  )
}

// ===== FEATURED PRODUCTS SECTION OPTIMIZADA =====
export function FeaturedProductsSection({ featuredProducts }: { featuredProducts: Product[] }) {
  return (
    <section
      className="section-k3k relative overflow-hidden py-12"
      aria-labelledby="featured-products-heading"
    >
      {/* Fondo animado psicodélico para productos featured */}
      <div className="absolute inset-0 pointer-events-none z-0 animate-bg-gradient-k3k" aria-hidden="true" />

      <div className="container-k3k max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="section-header-k3k text-center mb-8">
          <h2
            id="featured-products-heading"
            className="text-4xl lg:text-6xl font-black text-k3k-white mb-4 text-balance"
          >
            Productos <span className="text-gradient-trip">Destacados</span>
          </h2>
          <p className="text-xl text-k3k-white/70 max-w-2xl mx-auto text-balance">
            Las piezas más brutales de nuestra colección psicodélica
          </p>
        </div>

        {/* Filtros rápidos */}
        <div className="flex justify-center gap-2 mb-6">
          {['Todos', 'Limitados', 'En Oferta'].map((filtro) => (
            <Button
              key={filtro}
              variant="lean"
              size="sm"
              className="min-h-[44px] px-4 py-2 rounded-full text-base font-bold shadow-multicolor-glow focus-visible:ring-2 focus-visible:ring-k3k-gold"
              aria-label={`Filtrar por ${filtro}`}
              // onClick={...} // Implementa lógica de filtro si es necesario
            >
              {filtro}
            </Button>
          ))}
        </div>

        {/* Scroll horizontal en mobile + grid en desktop */}
        <div
          className="
            flex lg:grid
            grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
            gap-4
            overflow-x-auto lg:overflow-visible
            snap-x snap-mandatory
            px-2 lg:px-0
            mb-10
            justify-items-center
            scrollbar-hide
            "
          role="list"
          aria-label="Productos destacados"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {featuredProducts.map((product, index) => (
            <div
              key={product.id}
              className="
                min-w-[85vw] sm:min-w-[340px] lg:min-w-0
                max-w-[380px] w-full
                snap-center
                animate-slide-up
                hover:scale-[1.02] hover:shadow-multicolor-glow
                transition-transform duration-300
                relative
                group
              "
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Glow animado en el borde */}
              <div className="absolute inset-0 pointer-events-none z-10 rounded-2xl border-2 border-transparent group-hover:animate-border-glow" aria-hidden="true" />

              {/* Partículas flotantes en hover */}
              <div className="absolute inset-0 pointer-events-none z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {/* Puedes renderizar aquí un componente Particles o SVGs personalizados */}
                {/* <K3KParticles productId={product.id} /> */}
              </div>

              <ProductCard
                product={product}
                showQuickAdd={true}
                showWishlist={true}
                variant="featured"
              />
            </div>
          ))}
        </div>

        {/* Navegación izquierda/derecha (solo desktop) */}
        <div className="hidden lg:flex justify-between items-center absolute top-1/2 left-0 right-0 px-2 -translate-y-1/2 pointer-events-none z-30">
          <Button
            variant="ghost"
            size="md"
            className="pointer-events-auto min-h-[44px] w-12 h-12 rounded-full bg-k3k-black/70 text-k3k-gold border border-k3k-gold/30 shadow-lg hover:bg-k3k-purple/80 hover:text-k3k-white transition"
            aria-label="Scroll productos a la izquierda"
            // onClick={...} // Implementa scroll horizontal
          >
            <svg width="24" height="24" fill="none" stroke="currentColor"><path d="M15 19l-7-7 7-7"/></svg>
          </Button>
          <Button
            variant="ghost"
            size="md"
            className="pointer-events-auto min-h-[44px] w-12 h-12 rounded-full bg-k3k-black/70 text-k3k-gold border border-k3k-gold/30 shadow-lg hover:bg-k3k-purple/80 hover:text-k3k-white transition"
            aria-label="Scroll productos a la derecha"
            // onClick={...} // Implementa scroll horizontal
          >
            <svg width="24" height="24" fill="none" stroke="currentColor"><path d="M9 5l7 7-7 7"/></svg>
          </Button>
        </div>

        {/* Botón "Ver todos" prominente y centrado */}
        <div className="flex justify-center mt-8">
          <Link href="/productos" passHref legacyBehavior>
            <a
              className="min-h-[48px] px-8 py-3 text-xl font-black rounded-full shadow-multicolor-glow animate-pulse focus-visible:ring-2 focus-visible:ring-k3k-pink bg-k3k-purple text-white flex items-center justify-center transition hover:bg-k3k-gold hover:text-k3k-black"
              aria-label="Ver todos los productos"
            >
              Ver todos
            </a>
          </Link>
        </div>
      </div>
    </section>
  )
}