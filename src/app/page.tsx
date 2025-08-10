// ===== K3K MAFIA - HOMEPAGE OPTIMIZADA =====
// Homepage con espaciado profesional y mejores prácticas de UX
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
  Flame,
  Eye,
  Shield
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button, K3kButtons } from '@/components/ui/Button'
import { Badge, K3kBadges } from '@/components/ui/Badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import HeroSection from '@/components/HeroSection'
import ProductCard from '@/components/ProductCard'
import { MOCK_PRODUCTS, BRAND_INFO, CATEGORIES } from '@/lib/constants'
import { formatPrice } from '@/lib/utils'

// ===== HOMEPAGE COMPONENT OPTIMIZADA =====
export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeCollection, setActiveCollection] = useState(0)

  // Productos filtrados de manera más selectiva
  const featuredProducts = MOCK_PRODUCTS.filter(p => p.featured).slice(0, 4)
  const limitedProducts = MOCK_PRODUCTS.filter(p => p.isLimited).slice(0, 3)

  // ===== STATS SECTION MEJORADA Y MÁS LLAMATIVA =====
  // Importar iconos necesarios arriba si no están
  // import { Users, Star, Award, Zap, TrendingUp, Heart, Shield, Flame } from 'lucide-react'

  // Stats data mejorados con iconos y colores específicos
  const stats = [
    {
      number: '1K+',
      label: 'Miembros K3K',
      description: 'Comunidad activa y en crecimiento',
      icon: Users,
      color: 'purple',
      gradient: 'from-k3k-purple to-k3k-purple-neon',
      shadowColor: 'shadow-purple-glow'
    },
    {
      number: '100+',
      label: 'Productos Únicos',
      description: 'Diseños exclusivos y originales',
      icon: Star,
      color: 'gold',
      gradient: 'from-k3k-gold to-k3k-gold-neon',
      shadowColor: 'shadow-gold-glow'
    },
    {
      number: '5★',
      label: 'Rating Promedio',
      description: 'Calidad garantizada por clientes',
      icon: Award,
      color: 'pink',
      gradient: 'from-k3k-pink to-k3k-pink-neon',
      shadowColor: 'shadow-pink-glow'
    },
    {
      number: '24H',
      label: 'Envío Express',
      description: 'Despacho rápido a todo Chile',
      icon: Zap,
      color: 'lime',
      gradient: 'from-k3k-lime to-k3k-cyan',
      shadowColor: 'shadow-lime-glow'
    }
  ]

  // Testimonials reducidos y más impactantes
  const testimonials = [
    {
      name: 'Carlos M.',
      text: 'La calidad es brutal, diseños únicos que nadie más tiene.',
      rating: 5,
      product: 'Hoodie Purple Lean',
      verified: true
    },
    {
      name: 'María P.',
      text: 'Llegó súper rápido y los colores son exactos. Love it!',
      rating: 5,
      product: 'Camiseta Acid Trip',
      verified: true
    },
    {
      name: 'Diego L.',
      text: 'Finalmente ropa que representa la cultura real.',
      rating: 5,
      product: 'Cadena Gold Plasma',
      verified: true
    }
  ]

  // ===== EFFECTS =====
  useEffect(() => {
    setIsVisible(true)
    
    // Auto-rotate collections menos frecuente
    const interval = setInterval(() => {
      setActiveCollection((prev) => (prev + 1) % Object.keys(CATEGORIES).length)
    }, 6000)

    return () => clearInterval(interval)
  }, [])

  // ===== RENDER =====
  return (
    <div className="min-h-screen bg-k3k-black">
      
      {/* HERO SECTION */}
      <HeroSection />

      {/* FEATURED PRODUCTS SECTION - OPTIMIZADA */}
      <section className="section-k3k relative overflow-hidden">
        <div className="container-k3k">
          
          {/* Header más limpio */}
          <div className="section-header-k3k">

            <h2 className="text-4xl lg:text-6xl font-black text-k3k-white mb-6 text-balance">
              Productos <span className="text-gradient-trip">Destacados</span>
            </h2>
            <p className="text-xl text-k3k-white/70 max-w-2xl mx-auto text-balance">
              Las piezas más brutales de nuestra colección psicodélica
            </p>
          </div>

      {/* Products Grid Optimizado */}
      <div className="grid-k3k-4 mb-16 justify-items-center">
        {featuredProducts.map((product, index) => (
          <div 
            key={product.id}
            className="animate-slide-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <ProductCard
              product={product}
              showQuickAdd={true}
              showWishlist={true}
              variant="featured"
            />
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* BOTÓN ENTRE SECCIONES, EN EL ESPACIO VACÍO REAL */}
  <div className="flex justify-center items-center my-32">
    <Link href="/productos" className="w-full max-w-md">
      <Button
        variant="energy"
        size="xl"
        pulse
        className="w-full bg-gradient-to-r from-k3k-purple via-k3k-cyan to-k3k-gold text-white font-black shadow-[0_0_24px_0_rgba(0,255,255,0.25)] border-0 hover:from-k3k-gold hover:to-k3k-purple hover:text-k3k-black transition-colors duration-300 hover:shadow-[0_0_32px_0_rgba(255,255,255,0.35)] hover-lift"
      >
        <ShoppingBag className="w-5 h-5 mr-2" />
        Ver Todos los Productos
        <ArrowRight className="w-5 h-5 ml-2" />
      </Button>
    </Link>
  </div>

      {/* COLLECTIONS SHOWCASE - SIMPLIFICADA */}
      <section className="section-k3k bg-k3k-black-trip/30 relative overflow-hidden">
        <div className="container-k3k">
          
          {/* Header */}
          <div className="section-header-k3k">
            <h2 className="text-4xl lg:text-6xl font-black text-k3k-white mt-0 mb-6 text-balance">
              Nuestras <span className="text-gradient-rainbow">Colecciones</span>
            </h2>
            <p className="text-xl text-k3k-white/70 max-w-2xl mx-auto text-balance">
              Cada colección representa una parte de la cultura trap psicodélica
            </p>
          </div>

          {/* Collections Grid Optimizado */}
          <div className="grid-k3k-3">
            {Object.entries(CATEGORIES).slice(0, 3).map(([key, category], index) => (
              <Card 
                key={key}
                variant="psychedelic" 
                padding="none" 
                hover
                className={cn(
                  'group overflow-hidden transition-all duration-700 hover-lift',
                  index === activeCollection && 'scale-105 shadow-multicolor-glow'
                )}
              >
                <CardContent>
                  {/* Imagen de colección mejorada */}
                  <div className="relative aspect-[4/3] bg-gradient-to-br from-k3k-purple/15 to-k3k-gold/15 overflow-hidden">
                    {/* Icon centrado */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-8xl opacity-40 group-hover:opacity-60 transition-opacity duration-500">
                        {category.icon}
                      </div>
                    </div>
                    
                    {/* Overlay sutil */}
                    <div className="absolute inset-0 bg-gradient-to-t from-k3k-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Badge */}
                    <div className="absolute top-6 left-6">
                      <Badge variant="energy" size="sm">
                        {MOCK_PRODUCTS.filter(p => p.category === key).length} productos
                      </Badge>
                    </div>

                    {/* CTA Button con mejor posicionamiento */}
                    <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                      <Link href={`/productos?category=${key}`}>
                        <Button variant="acid" size="md" className="w-full">
                          <Eye className="w-4 h-4 mr-2" />
                          Explorar {category.name}
                        </Button>
                      </Link>
                    </div>
                  </div>

                  {/* Info más espaciada */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-k3k-white mb-3">
                      {category.name}
                    </h3>
                    <p className="text-k3k-white/70 mb-6 leading-relaxed">
                      {category.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-k3k-white/60">
                        Desde <span className="font-bold text-k3k-gold">
                          ${MOCK_PRODUCTS.filter(p => p.category === key).reduce((min, p) => Math.min(min, p.salePrice || p.price), Infinity).toLocaleString()}
                        </span>
                      </span>
                      <ArrowRight className="w-5 h-5 text-k3k-purple-neon group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ARTIST SECTION - CENTRADA Y OPTIMIZADA */}
      <section className="section-k3k relative overflow-hidden">
        <div className="container-k3k">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            
            {/* Imagen del artista */}
            <div className="relative lg:order-1">
              <Card variant="trip" padding="none" className="overflow-hidden aspect-square max-w-lg mx-auto">
                <CardContent>
                  <div className="aspect-square relative bg-gradient-to-br from-k3k-purple/20 to-k3k-gold/20">
                    {/* Placeholder mejorado */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-40 h-40 bg-lean rounded-full flex items-center justify-center shadow-multicolor-glow">
                        <Music className="w-20 h-20 text-k3k-white" />
                      </div>
                    </div>
                    
                    {/* Badge flotante */}
                    <div className="absolute top-6 left-6">
                      <K3kBadges.ArtistCollection />
                    </div>
                    
                    {/* Play button mejorado */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-500">
                      <Link 
                        href="https://open.spotify.com/intl-es/artist/0uqbA1Ha51U8XL9AD5IJzR"
                        target="_blank"
                        className="w-24 h-24 bg-k3k-black/90 backdrop-blur-sm border border-k3k-white/20 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 hover-glow"
                      >
                        <Play className="w-10 h-10 text-k3k-white ml-1" />
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Info del artista optimizada */}
            <div className="space-y-8 lg:order-2">
              <div>
                <h2 className="text-4xl lg:text-5xl font-black text-k3k-white mb-6 text-balance">
                  Inspirado en{' '}
                  <span className="text-gradient-gold">KONS3002.MAFIA</span>
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-k3k-purple to-k3k-gold mb-8"></div>
              </div>
              
              <div className="space-y-6 text-k3k-white/80 text-lg leading-relaxed">
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

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="https://open.spotify.com/intl-es/artist/0uqbA1Ha51U8XL9AD5IJzR" target="_blank">
                  <Button variant="gold" size="lg" className="min-w-[200px] hover-lift">
                    <Play className="w-5 h-5 mr-2" />
                    Escuchar en Spotify
                  </Button>
                </Link>
                
                <Link href="https://instagram.com/kons3002.mafia" target="_blank">
                  <Button variant="outline" size="lg" className="min-w-[160px] hover-lift">
                    <Instagram className="w-5 h-5 mr-2" />
                    Seguir en IG
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* STATS SECTION SOLO GRID PREMIUM */}
      <section className="section-k3k relative overflow-hidden">
        <div className="container-k3k">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <div
                  key={index}
                  className="group animate-slide-up hover-lift"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* CARD PRINCIPAL CON EFECTOS PREMIUM */}
                  <div className="relative">
                    {/* Glow effect exterior */}
                    <div className={cn(
                      'absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur',
                      `bg-gradient-to-r ${stat.gradient}`
                    )} />
                    {/* Card principal */}
                    <div className="relative bg-gradient-to-br from-k3k-black-trip/95 to-k3k-black/90 border border-k3k-purple/20 rounded-2xl p-8 backdrop-blur-xl overflow-hidden group-hover:border-k3k-purple/40 transition-all duration-500">
                      {/* Efectos de fondo internos */}
                      <div className="absolute inset-0 opacity-5">
                        <div className={cn('absolute inset-0 bg-gradient-to-br', stat.gradient)} />
                      </div>
                      {/* Partícula flotante interna */}
                      <div className={cn(
                        'absolute top-4 right-4 w-2 h-2 rounded-full animate-ping opacity-60',
                        `bg-k3k-${stat.color}`
                      )} />
                      {/* CONTENIDO DE LA CARD */}
                      <div className="relative z-10 text-center space-y-6">
                        {/* ICONO ANIMADO */}
                        <div className="flex justify-center">
                          <div className={cn(
                            'relative w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110',
                            `bg-gradient-to-br ${stat.gradient}`,
                            stat.shadowColor
                          )}>
                            <IconComponent className="w-8 h-8 text-k3k-white group-hover:animate-bounce" />
                            {/* Anillo de efecto */}
                            <div className={cn(
                              'absolute -inset-2 rounded-2xl border-2 opacity-0 group-hover:opacity-100 transition-all duration-500 animate-ping',
                              `border-k3k-${stat.color}/40`
                            )} />
                          </div>
                        </div>
                        {/* NÚMERO PRINCIPAL CON CONTADOR ANIMADO */}
                        <div className="space-y-2">
                          <div className={cn(
                            'text-5xl lg:text-6xl font-black transition-all duration-500 group-hover:scale-105',
                            `bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`
                          )}>
                            {stat.number}
                          </div>
                          {/* Línea decorativa */}
                          <div className={cn(
                            'w-12 h-1 mx-auto rounded-full transition-all duration-500 group-hover:w-16',
                            `bg-gradient-to-r ${stat.gradient}`
                          )} />
                        </div>
                        {/* TEXTO DESCRIPTIVO */}
                        <div className="space-y-2">
                          <h3 className="text-lg font-bold text-k3k-white uppercase tracking-wider group-hover:text-k3k-purple-neon transition-colors duration-300">
                            {stat.label}
                          </h3>
                          <p className="text-sm text-k3k-white/60 leading-relaxed group-hover:text-k3k-white/80 transition-colors duration-300">
                            {stat.description}
                          </p>
                        </div>
                        {/* INDICADOR DE PROGRESO/ÉXITO */}
                        <div className="pt-4">
                          <div className={cn(
                            'inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-bold transition-all duration-300',
                            `bg-k3k-${stat.color}/20 text-k3k-${stat.color} group-hover:bg-k3k-${stat.color}/30`
                          )}>
                            <div className={cn(
                              'w-2 h-2 rounded-full animate-pulse',
                              `bg-k3k-${stat.color}`
                            )} />
                            <span>EN CRECIMIENTO</span>
                          </div>
                        </div>
                      </div>
                      {/* EFECTO DE HOVER DESLIZANTE */}
                      <div className={cn(
                        'absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700',
                        `bg-gradient-to-r ${stat.gradient}/5`
                      )}>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 animate-slide transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* LIMITED EDITION SECTION - OPTIMIZADA */}
      <section className="section-k3k relative overflow-hidden">
        <div className="container-k3k">
          
          {/* Header */}
          <div className="section-header-k3k">
            <div className="flex items-center justify-center space-x-4 mb-8">
              <Flame className="w-8 h-8 text-k3k-pink animate-bounce" />
              <K3kBadges.Limited />
              <Flame className="w-8 h-8 text-k3k-pink animate-bounce" />
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-black text-k3k-white mb-6 text-balance">
              Edición <span className="text-gradient-trip">Limitada</span>
            </h2>
            <p className="text-xl text-k3k-white/70 max-w-2xl mx-auto text-balance">
              Piezas exclusivas que solo entienden los verdaderos miembros de la mafia
            </p>
          </div>

          {/* Limited Products */}
          <div className="grid-k3k-3 mb-16">
            {limitedProducts.map((product, index) => (
              <div 
                key={product.id}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <ProductCard
                  product={product}
                  showQuickAdd={true}
                  showWishlist={true}
                  variant="featured"
                />
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link href="/productos?limited=true">
              <Button variant="trip" size="xl" pulse className="hover-lift">
                <Sparkles className="w-5 h-5 mr-2" />
                Ver Todas las Ediciones Limitadas
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION - SIMPLIFICADA */}
      <section className="section-k3k bg-k3k-black-trip/30 relative overflow-hidden">
        <div className="container-k3k">
          
          {/* Header */}
          <div className="section-header-k3k">
            <h2 className="text-4xl lg:text-6xl font-black text-k3k-white mb-6 text-balance">
              Lo que dice la <span className="text-gradient-rainbow">Mafia</span>
            </h2>
            <p className="text-xl text-k3k-white/70 max-w-2xl mx-auto text-balance">
              Testimonios reales de miembros K3K
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid-k3k-3 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} variant="psychedelic" padding="lg" hover className="hover-lift">
                <CardContent>
                  <div className="space-y-6">
                    {/* Stars */}
                    <div className="flex items-center justify-center space-x-1">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 text-k3k-gold fill-current"
                        />
                      ))}
                    </div>
                    
                    {/* Testimonial */}
                    <blockquote className="text-k3k-white/80 italic text-center text-lg leading-relaxed">
                      "{testimonial.text}"
                    </blockquote>
                    
                    {/* Author */}
                    <div className="text-center pt-4 border-t border-k3k-purple/20">
                      <p className="font-bold text-k3k-white mb-1">
                        {testimonial.name}
                        {testimonial.verified && (
                          <span className="inline-block ml-2 w-4 h-4 text-k3k-lime">✓</span>
                        )}
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

      {/* NEWSLETTER CTA SECTION - OPTIMIZADA */}
      <section className="section-k3k relative overflow-hidden">
        <div className="container-k3k">
          <div className="max-w-4xl mx-auto">
            <Card variant="trip" padding="xl" className="text-center">
              <CardContent>
                <div className="space-y-10">
                  <div className="w-24 h-24 bg-lean rounded-full flex items-center justify-center mx-auto shadow-multicolor-glow">
                    <Heart className="w-12 h-12 text-k3k-white animate-pulse" />
                  </div>
                  
                  <div>
                    <h2 className="text-3xl lg:text-5xl font-black text-k3k-white mb-6 text-balance">
                      <span className="text-gradient-rainbow">Únete a la Mafia</span>
                    </h2>
                    <p className="text-xl text-k3k-white/80 max-w-2xl mx-auto text-balance">
                      Sé el primero en enterarte de nuevos drops, ofertas exclusivas y contenido VIP. 
                      Solo para verdaderos miembros K3K.
                    </p>
                  </div>
                  
                  <div className="max-w-md mx-auto">
                    <div className="flex gap-4 mb-4">
                      <input
                        type="email"
                        placeholder="tu.email@trap.com"
                        className="flex-1 px-6 py-4 bg-k3k-black-trip/80 border border-k3k-purple/30 rounded-xl text-k3k-white placeholder-k3k-white/50 focus:outline-none focus:border-k3k-purple focus:shadow-purple-glow transition-all duration-300"
                      />
                      <K3kButtons.JoinMafia />
                    </div>
                    <p className="text-xs text-k3k-white/50">
                      No spam, solo contenido de valor. Puedes cancelar cuando quieras.
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-center space-x-8 text-sm text-k3k-white/60">
                    <div className="flex items-center">
                      <Zap className="w-5 h-5 mr-2 text-k3k-lime" />
                      Drops exclusivos
                    </div>
                    <div className="flex items-center">
                      <Sparkles className="w-5 h-5 mr-2 text-k3k-pink" />
                      Ofertas VIP
                    </div>
                    <div className="flex items-center">
                      <TrendingUp className="w-5 h-5 mr-2 text-k3k-gold" />
                      Contenido único
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}