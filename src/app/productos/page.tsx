// ===== K3K MAFIA - HOMEPAGE =====
// Homepage principal con estética trap psicodélica
'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { 
  ShoppingBag, 
  Star, 
  Users, 
  Zap, 
  Music, 
  Instagram,
  Play,
  ArrowRight,
  Sparkles,
  Heart,
  TrendingUp,
  Award,
  Flame
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button, K3kButtons } from '@/components/ui/Button'
import { Badge, K3kBadges } from '@/components/ui/Badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import HeroSection from '@/components/HeroSection'
import ProductCard from '@/components/ProductCard'
import { MOCK_PRODUCTS, BRAND_INFO, CATEGORIES } from '@/lib/constants'
import { formatPrice } from '@/lib/utils'
// Homepage ya tiene metadata en layout.tsx

// ===== HOMEPAGE COMPONENT =====
export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeCollection, setActiveCollection] = useState(0)

  // Productos destacados
  const featuredProducts = MOCK_PRODUCTS.filter(p => p.featured)
  const limitedProducts = MOCK_PRODUCTS.filter(p => p.isLimited)
  const onSaleProducts = MOCK_PRODUCTS.filter(p => p.salePrice && p.salePrice < p.price)

  // Collections para showcase
  const collections = [
    {
      id: 'lean',
      name: 'Lean Dreams',
      description: 'Hoodies con efectos psicodélicos inspirados en el jarabe morado',
      image: '/collections/lean-collection.jpg',
      products: MOCK_PRODUCTS.filter(p => p.category === 'hoodies'),
      color: 'purple',
      gradient: 'lean'
    },
    {
      id: 'acid',
      name: 'Acid Trip',
      description: 'Camisetas con colores que simulan efectos de LSD',
      image: '/collections/acid-collection.jpg',
      products: MOCK_PRODUCTS.filter(p => p.category === 'camisetas'),
      color: 'pink',
      gradient: 'acid'
    },
    {
      id: 'gold',
      name: 'Gold Mafia',
      description: 'Cadenas doradas que brillan como el sol',
      image: '/collections/gold-collection.jpg',
      products: MOCK_PRODUCTS.filter(p => p.category === 'chains'),
      color: 'gold',
      gradient: 'gold-shine'
    }
  ]

  // Stats de la marca
  const stats = [
    {
      number: '1K+',
      label: 'Miembros K3K',
      icon: Users,
      color: 'text-k3k-purple'
    },
    {
      number: '100+',
      label: 'Productos Únicos',
      icon: Star,
      color: 'text-k3k-gold'
    },
    {
      number: '5★',
      label: 'Rating Promedio',
      icon: Award,
      color: 'text-k3k-pink'
    },
    {
      number: '24H',
      label: 'Envío Express',
      icon: Zap,
      color: 'text-k3k-lime'
    }
  ]

  // Testimonials
  const testimonials = [
    {
      name: 'Carlos M.',
      text: 'La calidad es brutal, diseños únicos que nadie más tiene. Puro fuego 🔥',
      rating: 5,
      product: 'Hoodie Purple Lean'
    },
    {
      name: 'María P.',
      text: 'Llegó súper rápido y los colores son tal como se ven. Love it!',
      rating: 5,
      product: 'Camiseta Acid Trip'
    },
    {
      name: 'Diego L.',
      text: 'Finalmente ropa que representa la cultura real. K3K forever 🏴‍☠️',
      rating: 5,
      product: 'Cadena Gold Plasma'
    }
  ]

  // ===== EFFECTS =====
  useEffect(() => {
    setIsVisible(true)
    
    // Auto-rotate collections
    const interval = setInterval(() => {
      setActiveCollection((prev) => (prev + 1) % collections.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [collections.length])

  // ===== RENDER =====
  return (
    <div className="min-h-screen bg-k3k-black">
      
      {/* HERO SECTION */}
      <HeroSection />

      {/* FEATURED PRODUCTS SECTION */}
      <section id="featured-products" className="py-16 lg:py-24 relative overflow-hidden">
        {/* Efectos de fondo */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-k3k-purple/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-k3k-gold/5 rounded-full blur-3xl animate-bounce" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <K3kBadges.K3kMafia />
              <Badge variant="energy" size="sm" pulse>
                NUEVO DROP
              </Badge>
            </div>
            
            <h2 className="text-3xl lg:text-5xl font-black text-k3k-white mb-6">
              Productos <span className="text-gradient-trip">Destacados</span>
            </h2>
            <p className="text-xl text-k3k-white/70 max-w-2xl mx-auto">
              Las piezas más brutales de nuestra colección psicodélica
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                showQuickAdd={true}
                showWishlist={true}
              />
            ))}
          </div>

          {/* CTA CENTRADO Y CON CONTRASTE */}
          <div className="flex justify-center items-center mb-20">
            <Link href="/productos" className="w-full max-w-xs">
              <Button
                variant="energy"
                size="xl"
                pulse
                className="w-full bg-gradient-to-r from-k3k-purple via-k3k-cyan to-k3k-gold text-white font-black shadow-lg border-0 hover:from-k3k-gold hover:to-k3k-purple hover:text-k3k-black transition-colors duration-300"
              >
                <ShoppingBag className="w-5 h-5 mr-2" />
                Ver Todos los Productos
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* COLLECTIONS SHOWCASE */}
      <section className="py-16 lg:py-24 bg-k3k-black-trip/50 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-k3k-purple/5 via-transparent to-k3k-gold/5" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-black text-k3k-white mb-6">
              Nuestras <span className="text-gradient-rainbow">Colecciones</span>
            </h2>
            <p className="text-xl text-k3k-white/70 max-w-2xl mx-auto">
              Cada colección representa una parte de la cultura trap psicodélica
            </p>
          </div>

          {/* Collections Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {Object.entries(CATEGORIES).map(([key, category], index) => (
              <Card 
                key={key}
                variant="psychedelic" 
                padding="none" 
                hover
                className={cn(
                  'group overflow-hidden transition-all duration-500',
                  index === activeCollection && 'scale-105 shadow-multicolor-glow'
                )}
              >
                <CardContent>
                  {/* Imagen de colección */}
                  <div className="relative aspect-[4/3] bg-gradient-to-br from-k3k-purple/20 to-k3k-gold/20 overflow-hidden">
                    {/* Placeholder para imagen */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className={`text-6xl opacity-60`}>
                        {category.icon}
                      </div>
                    </div>
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-k3k-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Badge */}
                    <div className="absolute top-4 left-4">
                      <Badge variant="energy" size="sm">
                        {MOCK_PRODUCTS.filter(p => p.category === key).length} productos
                      </Badge>
                    </div>

                    {/* CTA Button */}
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                      <Link href={`/productos?category=${key}`}>
                        <Button variant="acid" size="sm" className="w-full">
                          Explorar {category.name}
                        </Button>
                      </Link>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-k3k-white mb-2">
                      {category.name}
                    </h3>
                    <p className="text-k3k-white/70 text-sm mb-4">
                      {category.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-k3k-white/60">
                        Desde ${MOCK_PRODUCTS.filter(p => p.category === key).reduce((min, p) => Math.min(min, p.salePrice || p.price), Infinity).toLocaleString()}
                      </span>
                      <ArrowRight className="w-4 h-4 text-k3k-purple-neon group-hover:translate-x-1 transition-transform duration-200" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ARTIST SECTION - SNOK3002.MAFIA */}
      <section className="py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-k3k-pink/10 via-k3k-black to-k3k-purple/10" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Imagen del artista */}
            <div className="relative">
              <Card variant="trip" padding="none" className="overflow-hidden">
                <CardContent>
                  <div className="aspect-square relative bg-gradient-to-br from-k3k-purple/20 to-k3k-gold/20">
                    {/* Placeholder para imagen del artista */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-32 h-32 bg-lean rounded-full flex items-center justify-center shadow-multicolor-glow">
                        <Music className="w-16 h-16 text-k3k-white" />
                      </div>
                    </div>
                    
                    {/* Badge flotante */}
                    <div className="absolute top-4 left-4">
                      <K3kBadges.ArtistCollection />
                    </div>
                    
                    {/* Play button */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <Link 
                        href="https://open.spotify.com/intl-es/artist/0uqbA1Ha51U8XL9AD5IJzR"
                        target="_blank"
                        className="w-20 h-20 bg-k3k-black/80 backdrop-blur-sm border border-k3k-white/20 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200"
                      >
                        <Play className="w-8 h-8 text-k3k-white ml-1" />
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Info del artista */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl lg:text-5xl font-black text-k3k-white mb-4">
                  Inspirado en{' '}
                  <span className="text-gradient-gold">{BRAND_INFO.artist}</span>
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-k3k-purple to-k3k-gold mb-6"></div>
              </div>
              
              <div className="space-y-4 text-k3k-white/80 text-lg leading-relaxed">
                <p>
                  <strong className="text-k3k-gold">SNOK</strong> es un artista de trap de 21 años 
                  originario de <strong className="text-k3k-purple-neon">Lota, BioBío</strong>. 
                  Su música auténtica del underground chileno inspira cada diseño de K3K MAFIA.
                </p>
                
                <p>
                  Desde las <strong className="text-k3k-pink">traphouses</strong> hasta el streetwear, 
                  llevamos la cultura real a la ropa que usas todos los días.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="https://open.spotify.com/intl-es/artist/0uqbA1Ha51U8XL9AD5IJzR" target="_blank">
                  <Button variant="gold" size="lg" className="min-w-[200px]">
                    <Play className="w-5 h-5 mr-2" />
                    Escuchar en Spotify
                  </Button>
                </Link>
                
                <Link href={`https://instagram.com/${BRAND_INFO.social.instagram.replace('@', '')}`} target="_blank">
                  <Button variant="outline" size="lg" className="min-w-[160px]">
                    <Instagram className="w-5 h-5 mr-2" />
                    Seguir en IG
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-16 bg-k3k-black-trip/30 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-k3k-purple/5 via-transparent to-k3k-gold/5" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <Card key={index} variant="psychedelic" padding="lg" hover className="text-center">
                  <CardContent>
                    <IconComponent className={cn('w-8 h-8 mx-auto mb-4', stat.color)} />
                    <div className="text-3xl lg:text-4xl font-black text-k3k-white mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm text-k3k-white/70">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* LIMITED EDITION SECTION */}
      <section className="py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-k3k-pink/5 rounded-full blur-3xl animate-pulse" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Flame className="w-6 h-6 text-k3k-pink animate-bounce" />
              <K3kBadges.Limited />
              <Flame className="w-6 h-6 text-k3k-pink animate-bounce" />
            </div>
            
            <h2 className="text-3xl lg:text-5xl font-black text-k3k-white mb-6">
              Edición <span className="text-gradient-trip">Limitada</span>
            </h2>
            <p className="text-xl text-k3k-white/70 max-w-2xl mx-auto">
              Piezas exclusivas que solo entienden los verdaderos miembros de la mafia
            </p>
          </div>

          {/* Limited Products */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {limitedProducts.slice(0, 3).map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                showQuickAdd={true}
                showWishlist={true}
              />
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link href="/productos?limited=true">
              <Button variant="trip" size="xl" pulse>
                <Sparkles className="w-5 h-5 mr-2" />
                Ver Todas las Ediciones Limitadas
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-16 bg-k3k-black-trip/50 relative overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-black text-k3k-white mb-6">
              Lo que dice la <span className="text-gradient-rainbow">Mafia</span>
            </h2>
            <p className="text-xl text-k3k-white/70 max-w-2xl mx-auto">
              Testimonios reales de miembros K3K
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} variant="psychedelic" padding="lg" hover>
                <CardContent>
                  <div className="space-y-4">
                    {/* Stars */}
                    <div className="flex items-center space-x-1">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 text-k3k-gold fill-current"
                        />
                      ))}
                    </div>
                    
                    {/* Testimonial */}
                    <p className="text-k3k-white/80 italic">
                      "{testimonial.text}"
                    </p>
                    
                    {/* Author */}
                    <div className="pt-4 border-t border-k3k-purple/20">
                      <p className="font-medium text-k3k-white">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-k3k-white/60">
                        Compró: {testimonial.product}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER CTA SECTION */}
      <section className="py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-k3k-purple/20 via-k3k-black to-k3k-gold/20" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-k3k-purple/10 rounded-full blur-3xl animate-pulse" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card variant="trip" padding="xl">
            <CardContent>
              <div className="space-y-8">
                <div className="w-20 h-20 bg-lean rounded-full flex items-center justify-center mx-auto shadow-multicolor-glow">
                  <Heart className="w-10 h-10 text-k3k-white animate-pulse" />
                </div>
                
                <div>
                  <h2 className="text-3xl lg:text-4xl font-black text-k3k-white mb-4">
                    <span className="text-gradient-rainbow">Únete a la Mafia</span>
                  </h2>
                  <p className="text-xl text-k3k-white/80 max-w-2xl mx-auto">
                    Sé el primero en enterarte de nuevos drops, ofertas exclusivas y contenido VIP. 
                    Solo para verdaderos miembros K3K.
                  </p>
                </div>
                
                <div className="max-w-md mx-auto">
                  <div className="flex gap-3">
                    <input
                      type="email"
                      placeholder="tu.email@trap.com"
                      className="flex-1 px-4 py-3 bg-k3k-black-trip/80 border border-k3k-purple/30 rounded-xl text-k3k-white placeholder-k3k-white/50 focus:outline-none focus:border-k3k-purple focus:shadow-purple-glow transition-all duration-300"
                    />
                    <K3kButtons.JoinMafia />
                  </div>
                  <p className="text-xs text-k3k-white/50 mt-2">
                    No spam, solo contenido de valor. Puedes cancelar cuando quieras.
                  </p>
                </div>
                
                <div className="flex items-center justify-center space-x-6 text-sm text-k3k-white/60">
                  <div className="flex items-center">
                    <Zap className="w-4 h-4 mr-2 text-k3k-lime" />
                    Drops exclusivos
                  </div>
                  <div className="flex items-center">
                    <Sparkles className="w-4 h-4 mr-2 text-k3k-pink" />
                    Ofertas VIP
                  </div>
                  <div className="flex items-center">
                    <TrendingUp className="w-4 h-4 mr-2 text-k3k-gold" />
                    Contenido único
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}