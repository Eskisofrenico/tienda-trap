// ===== K3K MAFIA - HEADER CORREGIDO =====
// Header con espaciado correcto y distribución armoniosa
'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  Menu, 
  X, 
  Search, 
  ShoppingCart, 
  ChevronDown,
  Instagram,
  Music
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { useCart } from '@/hooks/use-cart'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { NAVIGATION, BRAND_INFO } from '@/lib/constants'

interface HeaderProps {
  className?: string
  fixed?: boolean
  transparent?: boolean
}

export default function Header({ 
  className, 
  fixed = true, 
  transparent = false 
}: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [isScrolled, setIsScrolled] = useState(false)
  
  const pathname = usePathname()
  const { itemCount, toggleCart } = useCart()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
    setIsSearchOpen(false)
  }, [pathname])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    const query = searchQuery.trim()
    if (query) {
      window.location.href = `/productos?search=${encodeURIComponent(query)}`
    }
  }

  return (
    <>
      <header
        className={cn(
          'w-full z-50 transition-all duration-300',
          fixed ? 'fixed top-0 left-0' : 'relative',
          transparent && !isScrolled 
            ? 'bg-transparent backdrop-blur-none' 
            : 'bg-k3k-black/95 backdrop-blur-xl border-b border-k3k-purple/15',
          isScrolled && 'shadow-lg shadow-k3k-purple/5',
          className
        )}
        style={{ height: '72px' }}
      >
        
        {/* EFECTOS DE FONDO SUTILES */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-k3k-purple/3 via-transparent to-k3k-gold/3" />
          <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-k3k-purple/60 via-k3k-pink/60 to-k3k-gold/60" />
        </div>

        {/* CONTAINER PRINCIPAL - DISTRIBUCIÓN CORREGIDA */}
        <div className="relative z-10 h-full w-full px-4 sm:px-6 lg:px-8">
          <div className="h-full flex items-center">
            
            {/* LOGO - IZQUIERDA */}
            <div className="flex-shrink-0">
              <Link 
                href="/" 
                className="inline-flex items-center group"
                aria-label="K3K MAFIA - Inicio"
              >
                <div className="text-left">
                  <h1 className="text-xl lg:text-2xl font-black text-k3k-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-k3k-purple group-hover:via-k3k-pink group-hover:to-k3k-gold group-hover:bg-clip-text transition-all duration-500 leading-none">
                    K3K MAFIA
                  </h1>
                  <p className="text-xs text-k3k-gold/90 font-medium leading-tight mt-0.5">
                    Join The K3K
                  </p>
                </div>
              </Link>
            </div>

            {/* NAVEGACIÓN PRINCIPAL - CENTRO CON ESPACIADO ORIGINAL */}
            <nav className="hidden lg:flex flex-1 justify-center">
              <div className="flex items-center space-x-16">
                {NAVIGATION.slice(0, 4).map((item) => (
                  <div key={item.name} className="relative group">
                    <Link
                      href={item.href}
                      className={cn(
                        'inline-flex items-center px-6 py-3 rounded-lg text-sm font-semibold uppercase tracking-wider transition-all duration-300 relative whitespace-nowrap',
                        'min-h-[44px] justify-center min-w-[120px]',
                        
                        pathname === item.href
                          ? 'text-k3k-white bg-k3k-purple/20 shadow-sm'
                          : 'text-k3k-white/80 hover:text-k3k-white hover:bg-k3k-purple/10'
                      )}
                    >
                      {item.name}
                      {item.children && (
                        <ChevronDown className="ml-2 w-3 h-3 transition-transform duration-200 group-hover:rotate-180" />
                      )}
                    </Link>
                    
                    {/* DROPDOWN */}
                    {item.children && (
                      <div className="absolute top-full left-0 mt-2 w-72 bg-k3k-black/98 backdrop-blur-xl border border-k3k-purple/20 rounded-2xl shadow-2xl shadow-k3k-purple/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                        <div className="py-3 px-2 flex flex-col gap-2">
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              className="flex items-center pl-6 pr-10 py-3 rounded-xl text-base font-medium text-k3k-white/80 hover:text-k3k-white hover:bg-k3k-purple/10 transition-all duration-200 min-h-[44px]"
                            >
                              <span style={{ marginLeft: '05%' }}>{child.name.replace(/\s*\p{Emoji_Presentation}|NEW/gu, '')}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </nav>

            {/* ACCIONES - DERECHA PEGADA AL BORDE */}
            <div className="flex items-center space-x-2 ml-4 lg:ml-0">
              
              {/* BÚSQUEDA DESKTOP - ESPACIADO CORREGIDO CON MÁS PADDING */}
              <form onSubmit={handleSearch} className="hidden lg:flex mr-6">
                <div className="flex items-center bg-k3k-black/90 border border-k3k-purple/30 rounded-xl px-4 h-10" style={{ minWidth: '340px', width: '130%' }}>
                  <Search className="w-4 h-4 text-k3k-purple/80 mr-8" />
                  <input
                    type="text"
                    placeholder="Buscar productos..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="bg-transparent border-none outline-none text-k3k-white placeholder-k3k-white/60 flex-1"
                    style={{ boxShadow: 'none', outline: 'none', border: 'none' }}
                    onFocus={e => { e.target.style.boxShadow = 'none'; e.target.style.outline = 'none'; e.target.style.border = 'none'; }}
                  />
                </div>
              </form>

              {/* BÚSQUEDA MOBILE */}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className={cn(
                  'lg:hidden w-10 h-10 rounded-lg transition-all duration-300',
                  isSearchOpen && 'text-k3k-purple-neon bg-k3k-purple/15'
                )}
                aria-label="Búsqueda"
              >
                <Search className="w-5 h-5" />
              </Button>

              {/* CARRITO - PEGADO A LA DERECHA */}
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleCart}
                className="relative w-10 h-10 rounded-lg hover:bg-k3k-purple/10 transition-all duration-300"
                aria-label={`Carrito (${itemCount} productos)`}
              >
                <ShoppingCart className="w-5 h-5" />
                {itemCount > 0 && (
                  <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-k3k-pink to-k3k-purple rounded-full flex items-center justify-center text-xs font-bold text-k3k-white shadow-lg animate-pulse">
                    {itemCount > 9 ? '9+' : itemCount}
                  </div>
                )}
              </Button>

              {/* SOCIAL LINKS - PEGADOS AL BORDE DERECHO */}
              <div className="hidden lg:flex items-center space-x-1 ml-2">
                <Link
                  href="https://www.instagram.com/kons3002.mafia/?hl=es"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center text-k3k-white/60 hover:text-k3k-pink hover:bg-k3k-pink/10 rounded-lg hover:scale-110 transition-all duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </Link>
                <Link
                  href="https://open.spotify.com/intl-es/artist/0uqbA1Ha51U8XL9AD5IJzR"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center text-k3k-white/60 hover:text-k3k-gold hover:bg-k3k-gold/10 rounded-lg hover:scale-110 transition-all duration-300"
                  aria-label="Spotify"
                >
                  <Music className="w-5 h-5" />
                </Link>
              </div>

              {/* MENÚ MOBILE */}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden w-10 h-10 rounded-lg hover:bg-k3k-purple/10 transition-all duration-300 ml-1"
                aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* BÚSQUEDA MOBILE EXPANDIDA - CORREGIDA */}
        {isSearchOpen && (
          <div className="lg:hidden border-t border-k3k-purple/20 bg-k3k-black/98 backdrop-blur-xl">
            <div className="max-w-7xl mx-auto px-4 py-3">
              <form onSubmit={handleSearch}>
                <div className="relative max-w-md mx-auto">
                  <input
                    type="text"
                    placeholder="Buscar productos K3K MAFIA..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full h-11 px-4 pl-12 bg-k3k-black/90 border border-k3k-purple/30 rounded-xl text-k3k-white placeholder-k3k-white/60 focus:outline-none focus:ring-2 focus:ring-k3k-purple/50 focus:border-k3k-purple transition-all duration-300"
                    autoFocus
                  />
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-k3k-purple" />
                </div>
              </form>
            </div>
          </div>
        )}
      </header>

      {/* MENÚ MOBILE OVERLAY */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div 
            className="absolute inset-0 bg-k3k-black/95 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          />
          
          <div className="absolute top-[72px] left-0 right-0 bg-k3k-black/98 backdrop-blur-xl border-b border-k3k-purple/20 shadow-2xl">
            <div className="max-w-7xl mx-auto px-4 py-6">
              <nav className="space-y-1">
                {NAVIGATION.map((item) => (
                  <div key={item.name}>
                    <Link
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={cn(
                        'flex items-center justify-between py-3 px-4 rounded-xl text-base font-bold uppercase tracking-wide transition-all duration-300 min-h-[48px]',
                        pathname === item.href
                          ? 'text-k3k-white bg-k3k-purple/20'
                          : 'text-k3k-white/80 hover:text-k3k-white hover:bg-k3k-purple/10'
                      )}
                    >
                      <span>{item.name}</span>
                      {item.children && <ChevronDown className="w-5 h-5" />}
                    </Link>
                    
                    {item.children && (
                      <div className="mt-1 ml-4 space-y-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            onClick={() => setIsMenuOpen(false)}
                            className="flex items-center justify-between py-2 px-4 rounded-lg text-sm font-medium text-k3k-white/70 hover:text-k3k-white hover:bg-k3k-purple/5 transition-all duration-200 min-h-[40px]"
                          >
                            <span>{child.name}</span>
                            {child.badge && (
                              <Badge variant="energy" size="sm">
                                {child.badge}
                              </Badge>
                            )}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>

              {/* Social Links Mobile */}
              <div className="mt-6 pt-6 border-t border-k3k-purple/20">
                <p className="text-k3k-white/60 text-sm font-bold uppercase tracking-wide mb-3 text-center">
                  Síguenos
                </p>
                <div className="flex justify-center gap-4">
                  <Link
                    href="https://www.instagram.com/kons3002.mafia/?hl=es"
                    target="_blank"
                    className="flex items-center space-x-2 py-3 px-6 rounded-xl bg-gradient-to-r from-k3k-pink/10 to-k3k-purple/10 border border-k3k-pink/20 text-k3k-pink hover:border-k3k-pink/40 transition-all duration-300"
                  >
                    <Instagram className="w-5 h-5" />
                    <span className="text-sm font-bold">Instagram</span>
                  </Link>
                  <Link
                    href="https://open.spotify.com/intl-es/artist/0uqbA1Ha51U8XL9AD5IJzR"
                    target="_blank"
                    className="flex items-center space-x-2 py-3 px-6 rounded-xl bg-gradient-to-r from-k3k-gold/10 to-k3k-gold-dark/10 border border-k3k-gold/20 text-k3k-gold hover:border-k3k-gold/40 transition-all duration-300"
                  >
                    <Music className="w-5 h-5" />
                    <span className="text-sm font-bold">Spotify</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}