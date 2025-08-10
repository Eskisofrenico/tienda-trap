// ===== K3K MAFIA - FOOTER COMPONENT =====
// Footer con estética trap psicodélica: newsletter, social, navegación
'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { 
  Instagram, 
  Music, 
  Mail, 
  MapPin, 
  Phone,
  ChevronRight,
  ExternalLink,
  Zap,
  Heart
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { Card, CardContent } from '@/components/ui/Card'
import { NAVIGATION, BRAND_INFO, CATEGORIES } from '@/lib/constants'
import { formatDate } from '@/lib/utils'

// ===== FOOTER PROPS =====
interface FooterProps {
  className?: string
}

// ===== FOOTER COMPONENT =====
export default function Footer({ className }: FooterProps) {
  const [email, setEmail] = useState('')
  const [isSubscribing, setIsSubscribing] = useState(false)
  const [subscribed, setSubscribed] = useState(false)

  // ===== HANDLERS =====
  
  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return

    setIsSubscribing(true)
    
    // Simular suscripción (aquí conectarías con tu API)
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setSubscribed(true)
    setIsSubscribing(false)
    setEmail('')
    
    // Reset después de 3 segundos
    setTimeout(() => setSubscribed(false), 3000)
  }

  const currentYear = new Date().getFullYear()

  // ===== RENDER =====
  return (
    <footer className={cn('relative bg-k3k-black text-k3k-white overflow-hidden', className)}>
      
      {/* EFECTOS DE FONDO PSICODÉLICOS */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradiente principal */}
        <div className="absolute inset-0 bg-gradient-to-t from-k3k-black via-k3k-black-trip to-k3k-purple-dark/20" />
        
        {/* Efectos de luz */}
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-k3k-purple/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-k3k-gold/8 rounded-full blur-3xl animate-bounce" />
        
        {/* Partículas flotantes */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-k3k-pink rounded-full animate-ping opacity-60" />
        <div className="absolute top-40 right-32 w-1 h-1 bg-k3k-cyan rounded-full animate-pulse opacity-50" />
        <div className="absolute bottom-40 left-1/3 w-1.5 h-1.5 bg-k3k-lime rounded-full animate-bounce opacity-40" />
        <div className="absolute top-60 right-1/4 w-1 h-1 bg-k3k-electric rounded-full animate-ping opacity-30" />
        
        {/* Líneas de energía */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-k3k-purple to-transparent animate-energy-burst" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-k3k-gold via-transparent to-k3k-pink" />
      </div>

      {/* CONTENIDO PRINCIPAL */}
      <div className="relative z-10">
        
        {/* SECCIÓN SUPERIOR - NEWSLETTER & LOGO */}
        <div className="border-b border-k3k-purple/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              
              {/* LOGO & SLOGAN */}
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start space-x-4 mb-6">
                  {/* Logo */}
                  <div className="relative">
                    <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-xl bg-lean shadow-purple-glow flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl lg:text-3xl font-black text-k3k-white">K3K</span>
                    </div>
                    <div className="absolute -inset-1 bg-gradient-to-r from-k3k-purple via-k3k-pink to-k3k-gold rounded-xl opacity-30 blur animate-spin-slow" />
                  </div>
                  
                  {/* Brand Info */}
                  <div>
                    <h2 className="text-2xl lg:text-3xl font-black bg-gradient-to-r from-k3k-purple via-k3k-pink to-k3k-gold bg-clip-text text-transparent">
                      K3K MAFIA
                    </h2>
                    <p className="text-k3k-gold font-medium">
                      {BRAND_INFO.tagline}
                    </p>
                  </div>
                </div>
                
                <p className="text-k3k-white/70 text-lg mb-4 max-w-md mx-auto lg:mx-0">
                  {BRAND_INFO.description}
                </p>
                
                <div className="flex items-center justify-center lg:justify-start space-x-2">
                  <Badge variant="artist" size="sm">
                    🎤 {BRAND_INFO.artist}
                  </Badge>
                  <Badge variant="energy" size="sm">
                    🌊 Lota, BioBío
                  </Badge>
                </div>
              </div>

              {/* NEWSLETTER */}
              <Card variant="psychedelic" padding="lg" className="backdrop-blur-xl">
                <CardContent>
                  <div className="text-center">
                    <div className="mb-4">
                      <Zap className="w-8 h-8 text-k3k-electric mx-auto mb-3 animate-bounce" />
                      <h3 className="text-xl font-bold text-k3k-white mb-2">
                        Únete a la Matrix
                      </h3>
                      <p className="text-k3k-white/70 text-sm">
                        Recibe drops exclusivos, ofertas psicodélicas y contenido VIP de K3K MAFIA
                      </p>
                    </div>
                    
                    {!subscribed ? (
                      <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                        <div className="relative">
                          <input
                            type="email"
                            placeholder="tu.email@trap.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full px-4 py-3 bg-k3k-black-trip/80 border border-k3k-purple/30 rounded-xl text-k3k-white placeholder-k3k-white/50 focus:outline-none focus:border-k3k-purple focus:shadow-purple-glow transition-all duration-300"
                          />
                          <Mail className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-k3k-white/40" />
                        </div>
                        
                        <Button
                          type="submit"
                          variant="energy"
                          size="lg"
                          loading={isSubscribing}
                          className="w-full"
                          pulse
                        >
                          {isSubscribing ? 'Conectando...' : '🚀 Unirse al K3K'}
                        </Button>
                      </form>
                    ) : (
                      <div className="text-center py-4">
                        <div className="w-12 h-12 bg-k3k-gold rounded-full flex items-center justify-center mx-auto mb-3 animate-bounce">
                          <Heart className="w-6 h-6 text-k3k-black" />
                        </div>
                        <h4 className="text-lg font-bold text-k3k-gold mb-2">
                          ¡Welcome to the K3K!
                        </h4>
                        <p className="text-k3k-white/70 text-sm">
                          Ya formas parte de la mafia psicodélica 🏴‍☠️
                        </p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* SECCIÓN PRINCIPAL - NAVEGACIÓN */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* NAVEGACIÓN */}
            <div>
              <h3 className="text-lg font-bold text-k3k-white mb-6 flex items-center">
                <ChevronRight className="w-5 h-5 text-k3k-purple mr-2" />
                Navegación
              </h3>
              <ul className="space-y-3">
                {NAVIGATION.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-k3k-white/70 hover:text-k3k-purple-neon transition-colors duration-300 flex items-center group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {item.name}
                      </span>
                      {item.children && (
                        <Badge variant="new" size="sm" className="ml-2">
                          {item.children.length}
                        </Badge>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* CATEGORÍAS */}
            <div>
              <h3 className="text-lg font-bold text-k3k-white mb-6 flex items-center">
                <ChevronRight className="w-5 h-5 text-k3k-gold mr-2" />
                Colecciones
              </h3>
              <ul className="space-y-3">
                {Object.entries(CATEGORIES).map(([key, category]) => (
                  <li key={key}>
                    <Link
                      href={`/productos?category=${key}`}
                      className="text-k3k-white/70 hover:text-k3k-gold-neon transition-colors duration-300 flex items-center group"
                    >
                      <span className="mr-2">{category.icon}</span>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {category.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* INFORMACIÓN */}
            <div>
              <h3 className="text-lg font-bold text-k3k-white mb-6 flex items-center">
                <ChevronRight className="w-5 h-5 text-k3k-pink mr-2" />
                Información
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/nosotros"
                    className="text-k3k-white/70 hover:text-k3k-pink-neon transition-colors duration-300 flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      Sobre K3K MAFIA
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contacto"
                    className="text-k3k-white/70 hover:text-k3k-pink-neon transition-colors duration-300 flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      Contacto
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/envios"
                    className="text-k3k-white/70 hover:text-k3k-pink-neon transition-colors duration-300 flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      Envíos
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/devoluciones"
                    className="text-k3k-white/70 hover:text-k3k-pink-neon transition-colors duration-300 flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      Devoluciones
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/politica-privacidad"
                    className="text-k3k-white/70 hover:text-k3k-pink-neon transition-colors duration-300 flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      Privacidad
                    </span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* CONTACTO & SOCIAL */}
            <div>
              <h3 className="text-lg font-bold text-k3k-white mb-6 flex items-center">
                <ChevronRight className="w-5 h-5 text-k3k-cyan mr-2" />
                Contacto
              </h3>
              
              {/* Info de contacto */}
              <div className="space-y-4 mb-6">
                <div className="flex items-center text-k3k-white/70">
                  <MapPin className="w-4 h-4 mr-3 text-k3k-cyan" />
                  <span className="text-sm">Lota, Región del BioBío, Chile</span>
                </div>
                <div className="flex items-center text-k3k-white/70">
                  <Mail className="w-4 h-4 mr-3 text-k3k-cyan" />
                  <span className="text-sm">contact@k3kmafia.com</span>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <p className="text-sm text-k3k-white/60 mb-3">Síguenos en:</p>
                <div className="flex space-x-3">
                  <Link
                    href={`https://instagram.com/${BRAND_INFO.social.instagram.replace('@', '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-k3k-pink/20 hover:bg-k3k-pink/30 text-k3k-pink hover:text-k3k-pink-neon rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-pink-glow group"
                  >
                    <Instagram className="w-5 h-5 group-hover:animate-bounce" />
                  </Link>
                  
                  <Link
                    href="https://open.spotify.com/intl-es/artist/0uqbA1Ha51U8XL9AD5IJzR"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-k3k-gold/20 hover:bg-k3k-gold/30 text-k3k-gold hover:text-k3k-gold-neon rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-gold-glow group"
                  >
                    <Music className="w-5 h-5 group-hover:animate-bounce" />
                  </Link>
                  
                  <Link
                    href="mailto:contact@k3kmafia.com"
                    className="w-10 h-10 bg-k3k-cyan/20 hover:bg-k3k-cyan/30 text-k3k-cyan hover:text-k3k-cyan-neon rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-cyan-glow group"
                  >
                    <Mail className="w-5 h-5 group-hover:animate-bounce" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SECCIÓN INFERIOR - COPYRIGHT */}
        <div className="border-t border-k3k-purple/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              
              {/* Copyright */}
              <div className="text-center md:text-left">
                <p className="text-k3k-white/60 text-sm">
                  © {currentYear} <span className="text-k3k-purple-neon font-medium">K3K MAFIA</span>. 
                  Todos los derechos reservados.
                </p>
                <p className="text-k3k-white/40 text-xs mt-1">
                  Diseñado con <Heart className="inline w-3 h-3 text-k3k-pink" /> para la cultura trap
                </p>
              </div>

              {/* Links legales */}
              <div className="flex items-center space-x-6 text-sm">
                <Link
                  href="/terminos"
                  className="text-k3k-white/60 hover:text-k3k-purple-neon transition-colors duration-300"
                >
                  Términos
                </Link>
                <Link
                  href="/politica-privacidad"
                  className="text-k3k-white/60 hover:text-k3k-purple-neon transition-colors duration-300"
                >
                  Privacidad
                </Link>
                <Link
                  href="/cookies"
                  className="text-k3k-white/60 hover:text-k3k-purple-neon transition-colors duration-300"
                >
                  Cookies
                </Link>
              </div>

              {/* Badge especial */}
              <div className="flex items-center space-x-2">
                <Badge variant="trip" size="sm" pulse>
                  🏴‍☠️ K3K FOREVER
                </Badge>
              </div>
            </div>
          </div>
        </div>

        {/* LÍNEA FINAL DE ENERGÍA */}
        <div className="h-1 bg-gradient-to-r from-k3k-purple via-k3k-pink to-k3k-gold animate-energy-burst" />
      </div>
    </footer>
  )
}