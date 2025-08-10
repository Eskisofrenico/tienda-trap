// ===== K3K MAFIA - NOSOTROS PAGE =====
// Página sobre la marca, artista y filosofía K3K MAFIA
'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { 
  Music, 
  MapPin, 
  Calendar,
  Users,
  Heart,
  Zap,
  Instagram,
  Play,
  Quote,
  Star,
  Trophy,
  Target
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button, K3kButtons } from '@/components/ui/Button'
import { Badge, K3kBadges } from '@/components/ui/Badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { BRAND_INFO } from '@/lib/constants'
import type { Metadata } from 'next'


// ===== NOSOTROS PAGE COMPONENT =====
export default function NosotrosPage() {

  // ===== STATS DATA =====
  const stats = [
    {
      number: '2025',
      label: 'Año de Fundación',
      icon: Calendar,
      color: 'text-k3k-purple'
    },
    {
      number: '100+',
      label: 'Productos Únicos',
      icon: Star,
      color: 'text-k3k-gold'
    },
    {
      number: '1K+',
      label: 'Miembros K3K',
      icon: Users,
      color: 'text-k3k-pink'
    },
    {
      number: '21',
      label: 'Años del Artista',
      icon: Music,
      color: 'text-k3k-cyan'
    }
  ]

  // ===== VALUES DATA =====
  const values = [
    {
      title: 'Autenticidad Trap',
      description: 'Cada diseño nace desde la cultura real del trap, sin poses ni imitaciones. Representamos la escena underground auténtica.',
      icon: Target,
      color: 'k3k-purple'
    },
    {
      title: 'Calidad Premium',
      description: 'Materiales de primera calidad y técnicas de estampado avanzadas. Cada prenda está hecha para durar y destacar.',
      icon: Trophy,
      color: 'k3k-gold'
    },
    {
      title: 'Cultura Psicodélica',
      description: 'Fusionamos la estética psicodélica con el streetwear urbano, creando piezas que son verdaderas obras de arte.',
      icon: Zap,
      color: 'k3k-pink'
    },
    {
      title: 'Comunidad Mafia',
      description: 'Más que clientes, somos una familia. Cada miembro K3K forma parte de nuestro movimiento cultural.',
      icon: Heart,
      color: 'k3k-cyan'
    }
  ]

  // ===== TIMELINE DATA =====
  const timeline = [
    {
      year: '2019',
      title: 'Los Inicios',
      description: 'SNOK comienza a escribir sus primeras letras a los 13 años en Lota, inspirado por la realidad de su entorno.',
      color: 'k3k-purple'
    },
    {
      year: '2022',
      title: 'Primeros Beats',
      description: 'A los 16 años, SNOK empieza a producir sus propios proyectos y encuentra su pasión por la música trap.',
      color: 'k3k-gold'
    },
    {
      year: '2023',
      title: 'Nace 3002 MAFIA',
      description: 'Se forma el grupo 3002 MAFIA con productores como WakeUp, BlakOnTheTrack y Young Vela.',
      color: 'k3k-pink'
    },
    {
      year: '2024',
      title: 'Money Cash Album',
      description: 'Lanzamiento del álbum "Money Cash" que define el sonido único de SNOK3002.MAFIA.',
      color: 'k3k-cyan'
    },
    {
      year: '2025',
      title: 'K3K MAFIA Streetwear',
      description: 'Nace la marca de streetwear K3K MAFIA, llevando la estética trap al mundo de la moda.',
      color: 'k3k-lime'
    }
  ]

  // ===== RENDER =====
  return (
    <div className="min-h-screen bg-k3k-black pt-20">
      
      {/* EFECTOS DE FONDO PSICODÉLICOS */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-k3k-purple/10 via-k3k-black to-k3k-gold/8" />
        
        {/* Partículas flotantes más densas */}
        <div className="absolute top-20 left-20 w-3 h-3 bg-k3k-purple rounded-full animate-bounce opacity-40" />
        <div className="absolute top-40 right-32 w-2 h-2 bg-k3k-pink rounded-full animate-ping opacity-60" />
        <div className="absolute bottom-40 left-1/4 w-1.5 h-1.5 bg-k3k-gold rounded-full animate-pulse opacity-50" />
        <div className="absolute top-60 right-1/4 w-2 h-2 bg-k3k-cyan rounded-full animate-bounce opacity-40" />
        <div className="absolute bottom-60 left-1/3 w-1 h-1 bg-k3k-lime rounded-full animate-ping opacity-70" />
        
        {/* Efectos de luz ambiental */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-k3k-purple/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-k3k-gold/5 rounded-full blur-3xl animate-bounce" />
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-k3k-pink/5 rounded-full blur-2xl animate-ping" />
      </div>

      {/* CONTENIDO PRINCIPAL */}
      <div className="relative z-10">
        
        {/* HERO SECTION */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center space-x-3 mb-8">
                <div className="w-16 h-16 bg-lean rounded-xl flex items-center justify-center shadow-purple-glow">
                  <span className="text-2xl font-black text-k3k-white">K3K</span>
                </div>
                <K3kBadges.K3kMafia />
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-black text-k3k-white mb-6">
                <span className="bg-gradient-to-r from-k3k-purple via-k3k-pink to-k3k-gold bg-clip-text text-transparent">
                  Somos K3K MAFIA
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-k3k-white/80 max-w-3xl mx-auto mb-8">
                {BRAND_INFO.description}
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="https://open.spotify.com/intl-es/artist/0uqbA1Ha51U8XL9AD5IJzR" target="_blank">
                  <Button variant="energy" size="lg" pulse>
                    <Music className="w-5 h-5 mr-2" />
                    Escuchar a SNOK
                  </Button>
                </Link>
                <Link href="/productos">
                  <Button variant="outline" size="lg">
                    <Zap className="w-5 h-5 mr-2" />
                    Ver Colección
                  </Button>
                </Link>
              </div>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon
                return (
                  <Card key={index} variant="psychedelic" padding="md" hover>
                    <CardContent>
                      <div className="text-center">
                        <IconComponent className={cn('w-8 h-8 mx-auto mb-3', stat.color)} />
                        <div className="text-2xl lg:text-3xl font-black text-k3k-white mb-1">
                          {stat.number}
                        </div>
                        <div className="text-sm text-k3k-white/70">
                          {stat.label}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* HISTORIA DEL ARTISTA */}
        <section className="py-16 bg-k3k-black-trip/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              {/* IMAGEN DEL ARTISTA */}
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
                      
                      {/* Efectos de overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-k3k-black/80 via-transparent to-transparent" />
                      
                      {/* Badge flotante */}
                      <div className="absolute top-4 left-4">
                        <K3kBadges.ArtistCollection />
                      </div>
                      
                      {/* Info flotante */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-xl font-bold text-k3k-white mb-1">
                          {BRAND_INFO.artist}
                        </h3>
                        <p className="text-sm text-k3k-white/70 mb-3">
                          Artista de Trap • Lota, BioBío
                        </p>
                        <div className="flex space-x-2">
                          <Badge variant="energy" size="sm">
                            21 años
                          </Badge>
                          <Badge variant="gold" size="sm">
                            3002 MAFIA
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* HISTORIA */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl lg:text-4xl font-black text-k3k-white mb-4">
                    La Historia de{' '}
                    <span className="text-k3k-purple-neon">SNOK3002.MAFIA</span>
                  </h2>
                  <div className="w-20 h-1 bg-gradient-to-r from-k3k-purple to-k3k-gold mb-6"></div>
                </div>
                
                <div className="space-y-4 text-k3k-white/80 text-lg leading-relaxed">
                  <p>
                    <strong className="text-k3k-gold">SNOK</strong> es un artista de trap de 21 años de nacionalidad chilena, 
                    originario de la comuna de <strong className="text-k3k-purple-neon">Lota</strong> en la Región del BioBío.
                  </p>
                  
                  <p>
                    Empezó escribiendo sus primeras letras a los 13 años y a los 16 comenzó a producir sus 
                    proyectos por sí solo, encontrando su <strong className="text-k3k-pink">pasión por la música</strong> 
                    {' '}con su primer track llamado <em>"Yo Soy Trap"</em>.
                  </p>
                  
                  <p>
                    SNOK se caracteriza principalmente en el género de trap con influencias como 
                    <strong className="text-k3k-cyan"> Future, Tay-K, Pablo Chill-E y Marlon Breeze</strong>, 
                    pero siempre manteniendo un estilo único dentro del género para hacer el verdadero real trap.
                  </p>
                  
                  <p>
                    Junto a sus productores/beatmakers <strong className="text-k3k-lime">"WakeUp", "BlakOnTheTrack", 
                    "Young Vela"</strong> y su audiovisual <strong className="text-k3k-electric">"Graffyk"</strong>, 
                    buscan llevar su nombre y su equipo <strong className="text-k3k-gold">"3002 MAFIA"</strong> para ser 
                    reconocidos por su música y su propia identidad en todo Chile y el mundo.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Link href="https://open.spotify.com/intl-es/artist/0uqbA1Ha51U8XL9AD5IJzR" target="_blank">
                    <Button variant="gold" size="lg">
                      <Play className="w-5 h-5 mr-2" />
                      Money Cash Album
                    </Button>
                  </Link>
                  <Link href={`https://instagram.com/${BRAND_INFO.social.instagram.replace('@', '')}`} target="_blank">
                    <Button variant="outline" size="lg">
                      <Instagram className="w-5 h-5 mr-2" />
                      @kons3002.mafia
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TIMELINE */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-black text-k3k-white mb-4">
                Nuestra <span className="text-k3k-gold">Evolución</span>
              </h2>
              <p className="text-lg text-k3k-white/70 max-w-2xl mx-auto">
                Desde los primeros beats hasta la creación de K3K MAFIA Streetwear
              </p>
            </div>

            <div className="relative">
              {/* Línea central */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-k3k-purple via-k3k-pink to-k3k-gold"></div>
              
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <div key={index} className={cn(
                    'flex items-center',
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  )}>
                    {/* Contenido */}
                    <div className={cn(
                      'w-5/12',
                      index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'
                    )}>
                      <Card variant="lean" padding="md" hover>
                        <CardContent>
                          <div className="space-y-3">
                            <Badge variant="gold" size="sm">
                              {item.year}
                            </Badge>
                            <h3 className="text-xl font-bold text-k3k-white">
                              {item.title}
                            </h3>
                            <p className="text-k3k-white/70">
                              {item.description}
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                    
                    {/* Punto central */}
                    <div className="w-2/12 flex justify-center">
                      <div className={cn(
                        'w-6 h-6 rounded-full border-4 border-k3k-black',
                        `bg-${item.color}`,
                        'shadow-lg relative z-10'
                      )}></div>
                    </div>
                    
                    {/* Espacio vacío */}
                    <div className="w-5/12"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* VALORES */}
        <section className="py-16 bg-k3k-black-trip/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-black text-k3k-white mb-4">
                Nuestros <span className="text-k3k-purple-neon">Valores</span>
              </h2>
              <p className="text-lg text-k3k-white/70 max-w-2xl mx-auto">
                Los pilares que definen a K3K MAFIA y nos mantienen auténticos
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => {
                const IconComponent = value.icon
                return (
                  <Card key={index} variant="psychedelic" padding="lg" hover>
                    <CardContent>
                      <div className="flex items-start space-x-4">
                        <div className={cn(
                          'w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0',
                          `bg-${value.color}/20`
                        )}>
                          <IconComponent className={cn('w-6 h-6', `text-${value.color}`)} />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-k3k-white mb-3">
                            {value.title}
                          </h3>
                          <p className="text-k3k-white/70 leading-relaxed">
                            {value.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Card variant="trip" padding="xl">
              <CardContent>
                <div className="space-y-6">
                  <div className="w-20 h-20 bg-lean rounded-full flex items-center justify-center mx-auto shadow-multicolor-glow">
                    <Heart className="w-10 h-10 text-k3k-white" />
                  </div>
                  
                  <h2 className="text-2xl lg:text-3xl font-black text-k3k-white">
                    <span className="bg-gradient-to-r from-k3k-purple via-k3k-pink to-k3k-gold bg-clip-text text-transparent">
                      Únete a la Mafia
                    </span>
                  </h2>
                  <p className="text-lg text-k3k-white/80 max-w-2xl mx-auto">
                    Más que una marca de ropa, somos un movimiento cultural. 
                    Cada miembro K3K forma parte de nuestra familia psicodélica.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link href="/productos">
                      <K3kButtons.JoinMafia />
                    </Link>
                    <Link href="/contacto">
                      <Button variant="outline" size="lg">
                        Colabora con Nosotros
                      </Button>
                    </Link>
                  </div>
                  
                  <div className="flex items-center justify-center space-x-6 pt-4">
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-k3k-cyan" />
                      <span className="text-sm text-k3k-white/60">Lota, BioBío, Chile</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Music className="w-4 h-4 text-k3k-gold" />
                      <span className="text-sm text-k3k-white/60">Desde 2025</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  )
}