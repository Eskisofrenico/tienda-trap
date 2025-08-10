// ===== K3K MAFIA - HERO SECTION OPTIMIZADA =====
// Hero section con tipografía premium y efectos psicodélicos
'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { 
  Play, 
  ShoppingBag, 
  Zap, 
  Sparkles, 
  Music, 
  ChevronRight,
  ArrowDown,
  Star,
  Users,
  Award
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button, K3kButtons } from '@/components/ui/Button'
import { Badge, K3kBadges } from '@/components/ui/Badge'
import { Card, CardContent } from '@/components/ui/Card'
import { BRAND_INFO, MOCK_PRODUCTS } from '@/lib/constants'

// ===== HERO SECTION PROPS =====
interface HeroSectionProps {
  className?: string
}

// ===== HERO SECTION COMPONENT OPTIMIZADA =====
export default function HeroSection({ className }: HeroSectionProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isVisible, setIsVisible] = useState(true)
  const [pendingSlide, setPendingSlide] = useState<number | null>(null)

  // Featured products simplificado
  const featuredProducts = MOCK_PRODUCTS.filter(p => p.featured).slice(0, 3)

  // Slides del hero más enfocados
  const heroSlides = [
    {
      id: 1,
      title: 'K3K MAFIA',
      subtitle: 'STREETWEAR PSICODÉLICO',
      description: 'Únete al movimiento trap más auténtico de Chile.',
      cta: 'Explorar Colección',
      ctaLink: '/productos',
      theme: 'lean',
      stats: { label: 'Miembros K3K', value: '1K+' }
    },
    {
      id: 2,
      title: 'KONS3002 COLLECTION',
      subtitle: 'ARTISTA EXCLUSIVO',
      description: 'Productos oficiales del artista trap de Lota.',
      cta: 'Ver Artista Collection',
      ctaLink: '/productos?collection=artist',
      theme: 'gold',
      stats: { label: 'Productos Únicos', value: '100+' }
    },
    {
      id: 3,
      title: 'DROPS LIMITADOS',
      subtitle: 'ACID TRIP SERIES',
      description: 'Piezas exclusivas con efectos psicodélicos reales.',
      cta: 'Join The K3K',
      ctaLink: '/productos?limited=true',
      theme: 'trip',
      stats: { label: 'Rating Promedio', value: '5★' }
    }
  ]

  const currentSlideData = heroSlides[currentSlide]

  // ===== EFFECTS =====
  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      handleSlideChange((currentSlide + 1) % heroSlides.length)
    }, 8000)
    return () => clearInterval(interval)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSlide, heroSlides.length])

  // ===== HANDLERS =====
  const handleSlideChange = (index: number) => {
    if (index === currentSlide) return
    setIsVisible(false)
    setPendingSlide(index)
  }

  // Cuando la animación de salida termina, cambiamos el slide y volvemos a mostrar
  useEffect(() => {
    if (!isVisible && pendingSlide !== null) {
      const timeout = setTimeout(() => {
        setCurrentSlide(pendingSlide)
        setIsVisible(true)
        setPendingSlide(null)
      }, 500) // Duración de la animación de salida (ms)
      return () => clearTimeout(timeout)
    }
  }, [isVisible, pendingSlide])

  const goToSlide = (index: number) => {
    handleSlideChange(index)
  }

  const scrollToProducts = () => {
    const element = document.querySelector('.section-k3k')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // ===== RENDER =====
  return (
    <section className={cn(
      'relative min-h-screen overflow-hidden scale-[0.9]',
      // Margin top del 40% para bajar toda la sección
      'mt-[40vh] pb-20',
      className
    )}>
      
      {/* EFECTOS DE FONDO OPTIMIZADOS */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradiente base dinámico más sutil */}
        <div className={cn(
          'absolute inset-0 transition-all duration-1000',
          currentSlideData.theme === 'lean' && 'bg-gradient-to-br from-k3k-purple/20 via-k3k-black to-k3k-purple-dark/30',
          currentSlideData.theme === 'gold' && 'bg-gradient-to-br from-k3k-gold/15 via-k3k-black to-k3k-gold-dark/25',
          currentSlideData.theme === 'trip' && 'bg-gradient-to-br from-k3k-pink/15 via-k3k-black via-k3k-purple/20 to-k3k-gold/15'
        )} />

        {/* Partículas flotantes reducidas */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-20 left-20 w-2 h-2 bg-k3k-purple rounded-full animate-bounce opacity-30" />
          <div className="absolute top-40 right-32 w-1 h-1 bg-k3k-pink rounded-full animate-ping opacity-40" />
          <div className="absolute bottom-40 left-1/4 w-1.5 h-1.5 bg-k3k-gold rounded-full animate-pulse opacity-35" />
          <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-k3k-cyan rounded-full animate-bounce opacity-25" />
        </div>

        {/* Efectos de luz más sutiles */}
        <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-k3k-purple/8 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-k3k-gold/6 rounded-full blur-3xl animate-bounce" />
      </div>

      {/* CONTENIDO PRINCIPAL OPTIMIZADO */}
      <div className="relative z-10 flex items-center justify-center min-h-[70vh] py-20">
        <div className="container-k3k w-full mt-[60vh]">
          {/* Grid optimizado */}
          <div className={cn(
            'grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center scale-[0.8]',
            // Fade/slide para todo el grid
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8 pointer-events-none',
            'transition-all duration-500 ease-in-out'
          )}>
            
            {/* TEXTO PRINCIPAL CON TIPOGRAFÍA PREMIUM */}
            <div className={cn(
              'text-center lg:text-left transition-all duration-1000',
              'space-y-10',
              'max-w-3xl mx-auto lg:mx-0',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            )}>
              
              {/* TÍTULO PRINCIPAL - MÁXIMO IMPACTO */}
              <h1 className={cn(
                'text-5xl sm:text-6xl lg:text-6xl xl:text-8xl font-black leading-[0.85]',
                'tracking-tight',
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
                'transition-all duration-1000'
              )}
              style={{
                textShadow: '0 2px 8px rgba(2, 100, 1, 1), 0 0 15px rgba(245, 158, 11, 0.4)'
              }}>
                <span className={cn(
                  'block bg-gradient-to-r bg-clip-text text-transparent',
                  currentSlideData.theme === 'lean' && 'from-k3k-purple via-k3k-purple-neon to-k3k-pink',
                  currentSlideData.theme === 'gold' && 'from-k3k-gold via-k3k-gold-neon to-k3k-electric',
                  currentSlideData.theme === 'trip' && 'from-k3k-pink via-k3k-purple to-k3k-gold'
                )}>
                  {currentSlideData.title}
                </span>
              </h1>

              {/* SUBTÍTULO MEJORADO */}
              <h2 className={cn(
                'text-2xl sm:text-3xl lg:text-4xl font-bold text-k3k-white',
                'tracking-wider uppercase',
                'relative',
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
                'transition-all duration-1000 delay-200'
              )}
              style={{
                textShadow: '0 2px 4px rgba(0, 0, 0, 0.6), 0 0 15px rgba(139, 92, 246, 0.4)'
              }}>
                <span className="relative z-10">
                  {currentSlideData.subtitle}
                </span>
                {/* Efecto de resplandor de fondo */}
                <span className="absolute inset-0 blur-sm opacity-50 text-k3k-purple-neon">
                  {currentSlideData.subtitle}
                </span>
              </h2>

              {/* DESCRIPCIÓN PREMIUM */}
              <p className={cn(
                'text-xl sm:text-2xl lg:text-3xl text-k3k-white/90 font-medium',
                'leading-relaxed tracking-wide max-w-2xl mx-auto lg:mx-0',
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
                'transition-all duration-1000 delay-400'
              )}
              style={{
                textShadow: '0 1px 3px rgba(0, 0, 0, 0.4)'
              }}>
                {currentSlideData.description}
              </p>

              {/* STATS Y CTAs MEJORADOS */}
              <div className={cn(
                'flex flex-col gap-8 sm:gap-6',
                'items-center lg:items-start',
                'w-full',
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
                'transition-all duration-1000 delay-500'
              )}>
                
                {/* STATS CON NÚMEROS DRAMÁTICOS */}
                <div className="flex flex-row gap-12 sm:gap-16 w-full justify-center lg:justify-start pt-2">
                  {/* Stat principal */}
                  <div className="text-center group cursor-pointer">
                    <span className={cn(
                      'block text-5xl sm:text-6xl lg:text-7xl font-black text-k3k-gold',
                      'tracking-tighter leading-none',
                      'group-hover:scale-110 transition-transform duration-300',
                      'animate-countUp'
                    )}
                    style={{
                      textShadow: '0 2px 8px rgba(2, 100, 1, 1), 0 0 15px rgba(245, 158, 11, 0.4)'
                    }}>
                      {currentSlideData.stats.value}
                    </span>
                    <span className={cn(
                      'block text-sm sm:text-base text-k3k-white/70',
                      'font-semibold uppercase tracking-widest mt-2',
                      'group-hover:text-k3k-white transition-colors duration-300'
                    )}>
                      {currentSlideData.stats.label}
                    </span>
                  </div>
                  
                  {/* Stat secundario */}
                  <div className="text-center group cursor-pointer">
                    <span className={cn(
                      'block text-5xl sm:text-6xl lg:text-7xl font-black text-k3k-purple-neon',
                      'tracking-tighter leading-none',
                      'group-hover:scale-110 transition-transform duration-300',
                      'animate-countUp'
                    )}
                    style={{
                      textShadow: '0 2px 8px rgba(2, 100, 1, 1), 0 0 15px rgba(168, 85, 247, 0.4)',
                      animationDelay: '200ms'
                    }}>
                      24H
                    </span>
                    <span className={cn(
                      'block text-sm sm:text-base text-k3k-white/70',
                      'font-semibold uppercase tracking-widest mt-2',
                      'group-hover:text-k3k-white transition-colors duration-300'
                    )}>
                      Envío Express
                    </span>
                  </div>
                </div>

                {/* BOTONES CON TIPOGRAFÍA PREMIUM */}
                <div className="flex flex-row flex-wrap gap-6 w-full justify-center lg:justify-start">
                  <Link href={currentSlideData.ctaLink}>
                    <Button
                      variant={currentSlideData.theme as any}
                      size="lg"
                      className={cn(
                        'min-w-[312px] px-10 py-5 rounded-2xl',
                        'font-black text-2xl tracking-wider uppercase',
                        'relative overflow-hidden group',
                        'hover:scale-110 hover:brightness-110 hover:shadow-2xl',
                        'transition-all duration-300 hover-lift',
                        'border-4 border-white/20 backdrop-blur-sm'
                      )}
                      style={{
                        textShadow: '0 2.6px 5.2px rgba(2, 100, 1, 0.5)',
                        background: currentSlideData.theme === 'lean' 
                          ? 'linear-gradient(135deg, #e0d7fa 0%, #e9d8fd 50%, #fce7f3 100%)'
                          : currentSlideData.theme === 'gold'
                          ? 'linear-gradient(135deg, #fef3c7 0%, #fde68a 50%, #dbeafe 100%)'
                          : 'linear-gradient(135deg, #fce7f3 0%, #e0d7fa 50%, #fef3c7 100%)'
                      }}
                      glow
                    >
                      <span className="relative text-white font-extrabold drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]" style={{textShadow: '0 4px 16px rgba(0,0,0,0.7), 0 0 8px #fff'}}> 
                        {currentSlideData.cta}
                        {/* Efecto subrayado animado */}
                        <span className="absolute bottom-0 left-0 w-0 h-1 bg-white transition-all duration-300 group-hover:w-full" />
                      </span>
                    </Button>
                  </Link>

                  <Link href="https://open.spotify.com/intl-es/artist/0uqbA1Ha51U8XL9AD5IJzR" target="_blank">
                    <Button
                      variant="outline"
                      size="lg"
                      className={cn(
                        'min-w-[312px] px-10 py-5 rounded-2xl',
                        'font-black text-2xl tracking-wider uppercase',
                        'group hover-lift border-4 border-k3k-white/40',
                        'hover:scale-110 hover:brightness-110 hover:shadow-2xl',
                        'hover:bg-k3k-white/10 hover:border-k3k-white',
                        'transition-all duration-300 backdrop-blur-sm'
                      )}
                      style={{
                        textShadow: '0 2.6px 5.2px rgba(2, 100, 1, 1)'
                      }}
                    >
                      <span className="relative">
                        Escuchar SNOK
                        <span className="absolute bottom-0 left-0 w-0 h-1 bg-k3k-gold transition-all duration-300 group-hover:w-full" />
                      </span>
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* VISUAL PRINCIPAL OPTIMIZADO */}
            <div className={cn(
              'relative transition-all duration-700 delay-200',
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            )}>
              {/* Imagen principal con efectos mejorados */}
              <div className="relative aspect-[1/1] max-w-lg mx-auto">
                {/* Efectos de fondo para la imagen más sutiles */}
                <div className={cn(
                  'absolute -inset-8 rounded-full blur-3xl transition-all duration-1000 opacity-60',
                  currentSlideData.theme === 'lean' && 'bg-k3k-purple/20',
                  currentSlideData.theme === 'gold' && 'bg-k3k-gold/20',
                  currentSlideData.theme === 'trip' && 'bg-gradient-to-r from-k3k-pink/20 to-k3k-purple/20'
                )} />
                
                {/* Card del producto */}
                <div key={featuredProducts[currentSlide]?.id} className="transition-opacity duration-700 ease-in-out opacity-100 will-change-opacity">
                  {featuredProducts[currentSlide] && (
                    <Card 
                      variant={currentSlideData.theme as any}
                      className="relative overflow-hidden backdrop-blur-xl border-2 group hover:scale-105 transition-all duration-700 hover-lift animate-border-glow"
                      hover
                    >
                      <CardContent>
                        {/* Imagen del producto */}
                        <div className="relative aspect-[1/1] mb-12 rounded-xl overflow-hidden">
                          <Image
                            src={featuredProducts[currentSlide].images[0] || '/placeholder-product.jpg'}
                            alt={featuredProducts[currentSlide].name}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            priority
                          />
                          {/* Badge del producto mejorado */}
                          <div className="absolute top-3 left-3">
                            <span className="px-5 py-1.5 rounded-lg border border-white/30 shadow-md flex items-center justify-center bg-k3k-black-trip/90 min-w-[156%] w-[156%] scale-110 relative overflow-hidden">
                              <span className="text-[12px] leading-none tracking-wide font-bold text-white uppercase z-10 relative animate-pulse">
                                LIMITADO
                              </span>
                              {/* Brillo animado */}
                              <span className="absolute inset-0 rounded-lg pointer-events-none z-0 animate-badge-shine bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-60" />
                            </span>
                          </div>
                        </div>
                        
                        {/* Info del producto con tipografía mejorada */}
                        <div className="text-center space-y-8 p-6">
                          <h3 className={cn(
                            'font-black text-2xl lg:text-3xl text-k3k-white',
                            'line-clamp-2 leading-tight tracking-tight'
                          )}
                          style={{
                            textShadow: '0 2px 4px rgba(2, 100, 1, 1)'
                          }}>
                            {featuredProducts[currentSlide].name}
                          </h3>
                          
                          <div className={cn(
                            'text-4xl lg:text-5xl font-black text-k3k-gold',
                            'tracking-tighter'
                          )}
                          style={{
                            textShadow: '0 2px 8px rgba(2, 100, 1, 1), 0 0 15px rgba(245, 158, 11, 0.4)'
                          }}>
                            ${featuredProducts[currentSlide].price.toLocaleString()}
                          </div>
                          
                          <Link href={`/producto/${featuredProducts[currentSlide].slug}`}>
                            <button className={cn(
                              'w-full flex items-center justify-center gap-3 py-4',
                              'text-lg font-black uppercase tracking-wide',
                              'bg-k3k-black-trip/90 text-white',
                              'border-2 border-white/30 shadow-md rounded-xl',
                              'hover:bg-k3k-purple/80 hover:text-k3k-gold hover:border-k3k-gold',
                              'transition-all duration-300 relative overflow-hidden group'
                            )}
                            style={{
                              textShadow: '0 2px 4px rgba(2, 100, 1, 1)'
                            }}>
                              <span className="z-10 relative">VER PRODUCTO</span>
                              <ChevronRight className="w-5 h-5 z-10 relative group-hover:translate-x-2 transition-transform duration-300" />
                              {/* Brillo animado */}
                              <span className="absolute inset-0 rounded-xl pointer-events-none z-0 animate-badge-shine bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-60" />
                            </button>
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}