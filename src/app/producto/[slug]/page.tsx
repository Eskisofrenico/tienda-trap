// ===== K3K MAFIA - PRODUCTO [SLUG] PAGE =====
// Página individual de producto con galería, opciones y checkout
'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { 
  ArrowLeft, 
  Heart, 
  Share2, 
  ShoppingCart,
  Plus,
  Minus,
  Check,
  Star,
  Shield,
  Truck,
  RotateCcw,
  Zap,
  Info,
  ChevronLeft,
  ChevronRight
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { useCart } from '@/hooks/use-cart'
import { Button, K3kButtons } from '@/components/ui/Button'
import { Badge, K3kBadges } from '@/components/ui/Badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import ProductCard from '@/components/ProductCard'
import { 
  formatPrice, 
  getEffectivePrice, 
  calculateDiscount, 
  getProductBadge,
  getColorDisplayName,
  isOnSale,
  isLimitedEdition,
  isOutOfStock 
} from '@/lib/utils'
import { MOCK_PRODUCTS } from '@/lib/constants'
import type { Product, ProductSize, ProductColor } from '@/types'
import type { Metadata } from 'next'

// ===== PAGE PROPS =====
interface ProductPageProps {
  params: {
    slug: string
  }
}


// ===== PRODUCTO PAGE COMPONENT =====
export default function ProductoPage({ params }: ProductPageProps) {
  const { addItem, isLoading } = useCart()
  
  // ===== STATE =====
  const [selectedSize, setSelectedSize] = useState<ProductSize | undefined>()
  const [selectedColor, setSelectedColor] = useState<ProductColor | undefined>()
  const [quantity, setQuantity] = useState(1)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isWishlisted, setIsWishlisted] = useState(false)
  const [showShareMenu, setShowShareMenu] = useState(false)
  const [activeTab, setActiveTab] = useState<'description' | 'details' | 'reviews'>('description')

  // ===== FIND PRODUCT =====
  const product = MOCK_PRODUCTS.find(p => p.slug === params.slug)
  
  if (!product) {
    notFound()
  }

  // ===== COMPUTED VALUES =====
  const effectivePrice = getEffectivePrice(product.price, product.salePrice)
  const discount = product.salePrice ? calculateDiscount(product.price, product.salePrice) : 0
  const badge = getProductBadge(product)
  const outOfStock = isOutOfStock(product)
  const onSale = isOnSale(product)
  const limited = isLimitedEdition(product)

  // Productos relacionados
  const relatedProducts = MOCK_PRODUCTS
    .filter(p => p.id !== product.id && p.category === product.category)
    .slice(0, 4)

  // ===== EFFECTS =====
  
  // Auto-seleccionar primera opción disponible
  useEffect(() => {
    if (product.sizes && product.sizes.length > 0 && !selectedSize) {
      setSelectedSize(product.sizes[0])
    }
    if (product.colors && product.colors.length > 0 && !selectedColor) {
      setSelectedColor(product.colors[0])
    }
  }, [product, selectedSize, selectedColor])

  // ===== HANDLERS =====
  
  const handleAddToCart = async () => {
    if (outOfStock) return
    
    await addItem(product, selectedSize, selectedColor)
  }

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 1 && newQuantity <= 10) {
      setQuantity(newQuantity)
    }
  }

  const handleWishlist = () => {
    setIsWishlisted(!isWishlisted)
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: product.description,
        url: window.location.href,
      })
    } else {
      setShowShareMenu(!showShareMenu)
    }
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === product.images.length - 1 ? 0 : prev + 1
    )
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? product.images.length - 1 : prev - 1
    )
  }

  // ===== RENDER =====
  return (
    <div className="min-h-screen bg-k3k-black pt-20">
      
      {/* EFECTOS DE FONDO PSICODÉLICOS */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-k3k-purple/8 via-k3k-black to-k3k-gold/5" />
        
        {/* Partículas específicas del producto */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-k3k-pink rounded-full animate-ping opacity-40" />
        <div className="absolute top-60 right-32 w-1 h-1 bg-k3k-cyan rounded-full animate-pulse opacity-60" />
        <div className="absolute bottom-40 left-1/4 w-1.5 h-1.5 bg-k3k-lime rounded-full animate-bounce opacity-50" />
        
        {/* Efectos de luz */}
        <div className="absolute top-1/4 right-1/3 w-64 h-64 bg-k3k-purple/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 left-1/4 w-48 h-48 bg-k3k-gold/5 rounded-full blur-3xl animate-bounce" />
      </div>

      {/* CONTENIDO PRINCIPAL */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* BREADCRUMB */}
        <div className="flex items-center space-x-2 mb-8 text-sm">
          <Link href="/productos" className="text-k3k-white/60 hover:text-k3k-purple-neon transition-colors duration-200">
            <ArrowLeft className="w-4 h-4 mr-2 inline" />
            Productos
          </Link>
          <span className="text-k3k-white/40">/</span>
          <span className="text-k3k-white/60 capitalize">{product.category}</span>
          <span className="text-k3k-white/40">/</span>
          <span className="text-k3k-white truncate">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          
          {/* GALERÍA DE IMÁGENES */}
          <div className="space-y-4">
            
            {/* Imagen principal */}
            <Card variant="lean" padding="none" className="relative overflow-hidden aspect-square">
              <CardContent>
                {/* Badges del producto */}
                <div className="absolute top-4 left-4 z-20 flex flex-col gap-2">
                  {badge && (
                    <Badge variant={badge.variant as any} size="md">
                      {badge.text}
                    </Badge>
                  )}
                  {product.artistCollection && (
                    <K3kBadges.ArtistCollection />
                  )}
                </div>

                {/* Controles de imagen */}
                {product.images.length > 1 && (
                  <>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-k3k-black-trip/80 backdrop-blur-sm border border-k3k-white/20"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-k3k-black-trip/80 backdrop-blur-sm border border-k3k-white/20"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </Button>
                  </>
                )}

                {/* Imagen */}
                <Image
                  src={product.images[currentImageIndex] || '/placeholder-product.jpg'}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-110"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />

                {/* Indicadores de imagen */}
                {product.images.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
                    {product.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={cn(
                          'w-2 h-2 rounded-full transition-all duration-200',
                          currentImageIndex === index
                            ? 'bg-k3k-purple-neon scale-125'
                            : 'bg-k3k-white/40 hover:bg-k3k-white/60'
                        )}
                      />
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Thumbnails */}
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={cn(
                      'relative aspect-square rounded-lg overflow-hidden border-2 transition-all duration-200',
                      currentImageIndex === index
                        ? 'border-k3k-purple shadow-purple-glow'
                        : 'border-k3k-white/20 hover:border-k3k-purple/50'
                    )}
                  >
                    <Image
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="100px"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* INFORMACIÓN DEL PRODUCTO */}
          <div className="space-y-6">
            
            {/* Header del producto */}
            <div>
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <p className="text-k3k-white/60 text-sm uppercase tracking-wider mb-2">
                    {product.category.replace('-', ' ')}
                  </p>
                  <h1 className="text-2xl lg:text-3xl font-black text-k3k-white mb-3">
                    {product.name}
                  </h1>
                </div>
                
                {/* Acciones rápidas */}
                <div className="flex items-center space-x-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleWishlist}
                    className={cn(
                      'w-10 h-10 rounded-full',
                      isWishlisted ? 'text-k3k-pink' : 'text-k3k-white/60'
                    )}
                  >
                    <Heart className={cn('w-5 h-5', isWishlisted && 'fill-current')} />
                  </Button>
                  
                  <div className="relative">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={handleShare}
                      className="w-10 h-10 rounded-full text-k3k-white/60"
                    >
                      <Share2 className="w-5 h-5" />
                    </Button>
                    
                    {/* Menu de compartir */}
                    {showShareMenu && (
                      <div className="absolute top-full right-0 mt-2 bg-k3k-black-trip border border-k3k-purple/20 rounded-lg p-2 min-w-[120px] z-30">
                        <button
                          onClick={() => navigator.clipboard.writeText(window.location.href)}
                          className="w-full text-left px-2 py-1 text-sm text-k3k-white/80 hover:text-k3k-purple-neon transition-colors duration-200"
                        >
                          Copiar URL
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Precio */}
              <div className="flex items-center space-x-3 mb-4">
                <span className="text-3xl font-black text-k3k-gold">
                  {formatPrice(effectivePrice)}
                </span>
                {onSale && (
                  <>
                    <span className="text-lg text-k3k-white/50 line-through">
                      {formatPrice(product.price)}
                    </span>
                    <Badge variant="sale" size="md">
                      -{discount}% OFF
                    </Badge>
                  </>
                )}
              </div>

              {/* Rating y reviews */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center space-x-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={cn(
                        'w-4 h-4',
                        i < 4 ? 'text-k3k-gold fill-current' : 'text-k3k-white/30'
                      )}
                    />
                  ))}
                </div>
                <span className="text-sm text-k3k-white/60">
                  4.8 (127 reviews)
                </span>
              </div>
            </div>

            {/* Descripción corta */}
            <div>
              <p className="text-k3k-white/80 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Opciones del producto */}
            <div className="space-y-6">
              
              {/* Tallas */}
              {product.sizes && product.sizes.length > 0 && (
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-medium text-k3k-white">Talla</h3>
                    <Button variant="ghost" size="sm" className="text-k3k-purple-neon text-xs">
                      Guía de tallas
                    </Button>
                  </div>
                  <div className="grid grid-cols-5 gap-2">
                    {product.sizes.map((size) => (
                      <Button
                        key={size}
                        variant={selectedSize === size ? 'acid' : 'outline'}
                        size="sm"
                        onClick={() => setSelectedSize(size)}
                        className="aspect-square"
                      >
                        {size}
                      </Button>
                    ))}
                  </div>
                </div>
              )}

              {/* Colores */}
              {product.colors && product.colors.length > 0 && (
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-medium text-k3k-white">Color</h3>
                    {selectedColor && (
                      <span className="text-sm text-k3k-white/60">
                        {getColorDisplayName(selectedColor)}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {product.colors.map((color) => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={cn(
                          'w-10 h-10 rounded-full border-3 transition-all duration-200 relative',
                          selectedColor === color
                            ? 'border-k3k-white shadow-multicolor-glow scale-110'
                            : 'border-k3k-white/30 hover:border-k3k-white hover:scale-105',
                          // Color específico
                          color.includes('purple') && 'bg-k3k-purple',
                          color.includes('gold') && 'bg-k3k-gold',
                          color.includes('pink') && 'bg-k3k-pink',
                          color.includes('cyan') && 'bg-k3k-cyan',
                          color.includes('lime') && 'bg-k3k-lime',
                          color.includes('black') && 'bg-k3k-black',
                          color.includes('white') && 'bg-k3k-white',
                          !color.includes('purple') && !color.includes('gold') && !color.includes('pink') && 
                          !color.includes('cyan') && !color.includes('lime') && !color.includes('black') && 
                          !color.includes('white') && 'bg-gradient-to-r from-k3k-purple to-k3k-gold'
                        )}
                      >
                        {selectedColor === color && (
                          <Check className="w-4 h-4 text-k3k-white absolute inset-0 m-auto" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Cantidad */}
              <div>
                <h3 className="font-medium text-k3k-white mb-3">Cantidad</h3>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center bg-k3k-black-trip border border-k3k-purple/20 rounded-lg">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleQuantityChange(quantity - 1)}
                      disabled={quantity <= 1}
                      className="w-10 h-10 border-0"
                    >
                      <Minus className="w-4 h-4" />
                    </Button>
                    <span className="w-12 text-center font-medium text-k3k-white">
                      {quantity}
                    </span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleQuantityChange(quantity + 1)}
                      disabled={quantity >= 10}
                      className="w-10 h-10 border-0"
                    >
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>
                  <span className="text-sm text-k3k-white/60">
                    {outOfStock ? 'Agotado' : 'Disponible'}
                  </span>
                </div>
              </div>
            </div>

            {/* Botones de acción */}
            <div className="space-y-4">
              <Button
                variant="lean"
                size="xl"
                onClick={handleAddToCart}
                loading={isLoading}
                disabled={outOfStock}
                className="w-full"
                glow
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                {outOfStock ? 'Producto Agotado' : isLoading ? 'Agregando...' : `Agregar al Carrito - ${formatPrice(effectivePrice * quantity)}`}
              </Button>
              
              <Button
                variant="gold"
                size="lg"
                disabled={outOfStock}
                className="w-full"
              >
                Comprar Ahora
              </Button>
            </div>

            {/* Información adicional */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-k3k-purple/20">
              <div className="flex items-center space-x-2">
                <Truck className="w-5 h-5 text-k3k-lime" />
                <div>
                  <p className="text-sm font-medium text-k3k-white">Envío gratis</p>
                  <p className="text-xs text-k3k-white/60">Sobre $60.000</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <RotateCcw className="w-5 h-5 text-k3k-cyan" />
                <div>
                  <p className="text-sm font-medium text-k3k-white">Devoluciones</p>
                  <p className="text-xs text-k3k-white/60">30 días</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-k3k-purple" />
                <div>
                  <p className="text-sm font-medium text-k3k-white">Garantía K3K</p>
                  <p className="text-xs text-k3k-white/60">Calidad premium</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* TABS DE INFORMACIÓN */}
        <Card variant="psychedelic" padding="lg" className="mb-16">
          <CardHeader>
            <div className="flex space-x-6 border-b border-k3k-purple/20">
              {[
                { id: 'description', label: 'Descripción' },
                { id: 'details', label: 'Detalles' },
                { id: 'reviews', label: 'Reviews (127)' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={cn(
                    'pb-3 font-medium transition-colors duration-200 border-b-2',
                    activeTab === tab.id
                      ? 'text-k3k-purple-neon border-k3k-purple-neon'
                      : 'text-k3k-white/60 border-transparent hover:text-k3k-white'
                  )}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </CardHeader>
          
          <CardContent>
            {activeTab === 'description' && (
              <div className="prose prose-invert max-w-none">
                <p className="text-k3k-white/80 leading-relaxed mb-4">
                  {product.description}
                </p>
                <p className="text-k3k-white/80 leading-relaxed">
                  Esta pieza única de K3K MAFIA combina la autenticidad del trap con diseños psicodélicos 
                  que representan la cultura underground de Lota, BioBío. Cada detalle está pensado para 
                  los verdaderos miembros de la mafia que entienden el código.
                </p>
                
                {product.tags && product.tags.length > 0 && (
                  <div className="mt-6">
                    <h4 className="text-k3k-white font-medium mb-3">Tags:</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.tags.map((tag) => (
                        <Badge key={tag} variant="default" size="sm">
                          #{tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
            
            {activeTab === 'details' && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-k3k-white font-medium mb-3">Especificaciones</h4>
                    <dl className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <dt className="text-k3k-white/60">Material:</dt>
                        <dd className="text-k3k-white">100% Algodón Premium</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="text-k3k-white/60">Peso:</dt>
                        <dd className="text-k3k-white">350g/m²</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="text-k3k-white/60">Corte:</dt>
                        <dd className="text-k3k-white">Oversize</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="text-k3k-white/60">Origen:</dt>
                        <dd className="text-k3k-white">Lota, Chile</dd>
                      </div>
                    </dl>
                  </div>
                  
                  <div>
                    <h4 className="text-k3k-white font-medium mb-3">Cuidados</h4>
                    <ul className="space-y-1 text-sm text-k3k-white/80">
                      <li>• Lavar a máquina máx. 30°C</li>
                      <li>• No usar blanqueador</li>
                      <li>• Planchar a temperatura baja</li>
                      <li>• No lavar en seco</li>
                      <li>• Secar colgado</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'reviews' && (
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-3xl font-black text-k3k-gold mb-2">4.8</div>
                  <div className="flex items-center justify-center space-x-1 mb-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={cn(
                          'w-5 h-5',
                          i < 4 ? 'text-k3k-gold fill-current' : 'text-k3k-white/30'
                        )}
                      />
                    ))}
                  </div>
                  <p className="text-sm text-k3k-white/60">Basado en 127 reviews</p>
                </div>
                
                <div className="space-y-4">
                  {[
                    {
                      name: 'Carlos M.',
                      rating: 5,
                      comment: 'Increíble calidad y el diseño es puro fuego 🔥',
                      date: '2 días'
                    },
                    {
                      name: 'María P.',
                      rating: 5,
                      comment: 'La tela es súper suave y los colores son tal como se ven en las fotos.',
                      date: '1 semana'
                    },
                    {
                      name: 'Diego L.',
                      rating: 4,
                      comment: 'Excelente producto, llegó rápido. Solo que el talle viene un poco grande.',
                      date: '2 semanas'
                    }
                  ].map((review, index) => (
                    <div key={index} className="border-b border-k3k-purple/10 pb-4 last:border-0">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-3">
                          <span className="font-medium text-k3k-white">{review.name}</span>
                          <div className="flex items-center space-x-1">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star
                                key={i}
                                className={cn(
                                  'w-3 h-3',
                                  i < review.rating ? 'text-k3k-gold fill-current' : 'text-k3k-white/30'
                                )}
                              />
                            ))}
                          </div>
                        </div>
                        <span className="text-xs text-k3k-white/50">Hace {review.date}</span>
                      </div>
                      <p className="text-k3k-white/80 text-sm">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* PRODUCTOS RELACIONADOS */}
        {relatedProducts.length > 0 && (
          <section>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-black text-k3k-white">
                Productos <span className="text-k3k-purple-neon">Relacionados</span>
              </h2>
              <Link href={`/productos?category=${product.category}`}>
                <Button variant="outline" size="sm">
                  Ver todos
                </Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard
                  key={relatedProduct.id}
                  product={relatedProduct}
                  showQuickAdd={true}
                  showWishlist={false}
                />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}