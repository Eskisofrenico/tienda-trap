// ===== K3K MAFIA - CONTACTO PAGE =====
// Página de contacto con formulario y información de la marca
'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { 
  Mail, 
  MapPin, 
  Phone, 
  Instagram, 
  Music,
  Send,
  User,
  MessageCircle,
  Zap,
  Heart,
  Clock,
  CheckCircle
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/Button'
import { Badge, K3kBadges } from '@/components/ui/Badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { BRAND_INFO } from '@/lib/constants'
import type { Metadata } from 'next'


// ===== FORM INTERFACE =====
interface ContactForm {
  name: string
  email: string
  subject: string
  message: string
  type: 'general' | 'support' | 'collaboration' | 'wholesale'
}

// ===== CONTACTO PAGE COMPONENT =====
export default function ContactoPage() {
  const [form, setForm] = useState<ContactForm>({
    name: '',
    email: '',
    subject: '',
    message: '',
    type: 'general'
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Partial<ContactForm>>({})

  // ===== HANDLERS =====
  
  const handleInputChange = (field: keyof ContactForm, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }))
    // Limpiar error cuando el usuario empiece a escribir
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }))
    }
  }

  const validateForm = (): boolean => {
    const newErrors: Partial<ContactForm> = {}

    if (!form.name.trim()) {
      newErrors.name = 'El nombre es requerido'
    }

    if (!form.email.trim()) {
      newErrors.email = 'El email es requerido'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Email inválido'
    }

    if (!form.subject.trim()) {
      newErrors.subject = 'El asunto es requerido'
    }

    if (!form.message.trim()) {
      newErrors.message = 'El mensaje es requerido'
    } else if (form.message.length < 10) {
      newErrors.message = 'El mensaje debe tener al menos 10 caracteres'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return

    setIsSubmitting(true)

    try {
      // Simular envío del formulario (aquí conectarías con tu API)
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      setSubmitted(true)
      setForm({
        name: '',
        email: '',
        subject: '',
        message: '',
        type: 'general'
      })
      
      // Reset después de 5 segundos
      setTimeout(() => setSubmitted(false), 5000)
      
    } catch (error) {
      console.error('Error enviando formulario:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  // ===== CONTACT TYPES =====
  const contactTypes = [
    {
      id: 'general' as const,
      name: 'Consulta General',
      description: 'Preguntas sobre productos, pedidos o la marca',
      icon: MessageCircle,
      color: 'text-k3k-purple'
    },
    {
      id: 'support' as const,
      name: 'Soporte Técnico',
      description: 'Problemas con pedidos, devoluciones o página web',
      icon: Zap,
      color: 'text-k3k-electric'
    },
    {
      id: 'collaboration' as const,
      name: 'Colaboraciones',
      description: 'Propuestas de colaboración, influencers, artistas',
      icon: Heart,
      color: 'text-k3k-pink'
    },
    {
      id: 'wholesale' as const,
      name: 'Ventas al Mayor',
      description: 'Consultas para tiendas y distribuidores',
      icon: Phone,
      color: 'text-k3k-gold'
    }
  ]

  // ===== RENDER =====
  return (
    <div className="min-h-screen bg-k3k-black pt-20">
      
      {/* EFECTOS DE FONDO PSICODÉLICOS */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-k3k-purple/10 via-k3k-black to-k3k-pink/5" />
        
        {/* Partículas flotantes */}
        <div className="absolute top-20 left-20 w-3 h-3 bg-k3k-pink rounded-full animate-bounce opacity-40" />
        <div className="absolute top-60 right-32 w-2 h-2 bg-k3k-cyan rounded-full animate-ping opacity-60" />
        <div className="absolute bottom-40 left-1/4 w-1 h-1 bg-k3k-lime rounded-full animate-pulse opacity-70" />
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-k3k-electric rounded-full animate-bounce opacity-50" />
        
        {/* Efectos de luz */}
        <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-k3k-purple/8 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-k3k-gold/6 rounded-full blur-3xl animate-bounce" />
        
        {/* Grid sutil */}
        <div className="absolute inset-0 opacity-5"
             style={{
               backgroundImage: 'radial-gradient(circle at 25% 25%, #8B5CF6 1px, transparent 1px)',
               backgroundSize: '40px 40px'
             }} 
        />
      </div>

      {/* CONTENIDO PRINCIPAL */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* HEADER */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-lean rounded-xl flex items-center justify-center shadow-purple-glow">
              <Mail className="w-6 h-6 text-k3k-white" />
            </div>
            <K3kBadges.K3kMafia />
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-black text-k3k-white mb-4">
            <span className="bg-gradient-to-r from-k3k-purple via-k3k-pink to-k3k-gold bg-clip-text text-transparent">
              Contacta con K3K
            </span>
          </h1>
          <p className="text-xl text-k3k-white/70 max-w-2xl mx-auto">
            ¿Tienes dudas, ideas o quieres colaborar? Escríbenos y únete a la mafia psicodélica más auténtica de Chile.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* COLUMNA IZQUIERDA - INFO DE CONTACTO */}
          <div className="space-y-6">
            
            {/* INFORMACIÓN PRINCIPAL */}
            <Card variant="psychedelic" padding="lg">
              <CardHeader>
                <CardTitle className="text-k3k-white flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-k3k-cyan" />
                  Información de Contacto
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-k3k-cyan mt-0.5" />
                    <div>
                      <p className="font-medium text-k3k-white">Ubicación</p>
                      <p className="text-sm text-k3k-white/70">
                        Lota, Región del BioBío<br />
                        Chile 🇨🇱
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Mail className="w-5 h-5 text-k3k-purple mt-0.5" />
                    <div>
                      <p className="font-medium text-k3k-white">Email</p>
                      <a 
                        href="mailto:contact@k3kmafia.com"
                        className="text-sm text-k3k-purple-neon hover:text-k3k-pink transition-colors duration-200"
                      >
                        contact@k3kmafia.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-k3k-gold mt-0.5" />
                    <div>
                      <p className="font-medium text-k3k-white">Horario de Atención</p>
                      <p className="text-sm text-k3k-white/70">
                        Lunes a Viernes: 9:00 - 18:00<br />
                        Sábados: 10:00 - 14:00
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* REDES SOCIALES */}
            <Card variant="gold" padding="lg">
              <CardHeader>
                <CardTitle className="text-k3k-white">
                  Síguenos en Redes
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-3">
                  <Link
                    href={`https://instagram.com/${BRAND_INFO.social.instagram.replace('@', '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-3 bg-k3k-pink/20 hover:bg-k3k-pink/30 rounded-lg transition-all duration-300 group"
                  >
                    <Instagram className="w-5 h-5 text-k3k-pink group-hover:scale-110 transition-transform duration-200" />
                    <div>
                      <p className="font-medium text-k3k-white">Instagram</p>
                      <p className="text-sm text-k3k-pink">{BRAND_INFO.social.instagram}</p>
                    </div>
                  </Link>
                  
                  <Link
                    href="https://open.spotify.com/intl-es/artist/0uqbA1Ha51U8XL9AD5IJzR"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-3 bg-k3k-gold/20 hover:bg-k3k-gold/30 rounded-lg transition-all duration-300 group"
                  >
                    <Music className="w-5 h-5 text-k3k-gold group-hover:scale-110 transition-transform duration-200" />
                    <div>
                      <p className="font-medium text-k3k-white">Spotify</p>
                      <p className="text-sm text-k3k-gold">SNOK3002.MAFIA</p>
                    </div>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* INFORMACIÓN DEL ARTISTA */}
            <Card variant="trip" padding="lg">
              <CardContent>
                <div className="text-center">
                  <div className="w-16 h-16 bg-lean rounded-full flex items-center justify-center mx-auto mb-4 shadow-purple-glow">
                    <Music className="w-8 h-8 text-k3k-white" />
                  </div>
                  <h3 className="font-bold text-k3k-white mb-2">
                    {BRAND_INFO.artist}
                  </h3>
                  <p className="text-sm text-k3k-white/70 mb-4">
                    Artista de trap de 21 años originario de Lota, BioBío. Creador del movimiento 3002 MAFIA.
                  </p>
                  <K3kBadges.ArtistCollection />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* COLUMNA DERECHA - FORMULARIO */}
          <div className="lg:col-span-2">
            <Card variant="lean" padding="lg">
              <CardHeader>
                <CardTitle className="text-k3k-white text-2xl">
                  Envíanos un Mensaje
                </CardTitle>
                <p className="text-k3k-white/70">
                  Completa el formulario y nos pondremos en contacto contigo lo antes posible.
                </p>
              </CardHeader>
              
              <CardContent>
                {submitted ? (
                  /* MENSAJE DE ÉXITO */
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-k3k-lime rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                      <CheckCircle className="w-8 h-8 text-k3k-black" />
                    </div>
                    <h3 className="text-xl font-bold text-k3k-lime mb-2">
                      ¡Mensaje Enviado!
                    </h3>
                    <p className="text-k3k-white/70 mb-4">
                      Gracias por contactarnos. Te responderemos dentro de las próximas 24 horas.
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setSubmitted(false)}
                    >
                      Enviar otro mensaje
                    </Button>
                  </div>
                ) : (
                  /* FORMULARIO */
                  <form onSubmit={handleSubmit} className="space-y-6">
                    
                    {/* TIPO DE CONSULTA */}
                    <div>
                      <label className="block text-sm font-medium text-k3k-white mb-3">
                        Tipo de consulta
                      </label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {contactTypes.map((type) => {
                          const IconComponent = type.icon
                          return (
                            <button
                              key={type.id}
                              type="button"
                              onClick={() => handleInputChange('type', type.id)}
                              className={cn(
                                'flex items-start space-x-3 p-3 rounded-lg border transition-all duration-300 text-left',
                                form.type === type.id
                                  ? 'border-k3k-purple bg-k3k-purple/10 shadow-purple-glow'
                                  : 'border-k3k-white/20 bg-k3k-black-trip/50 hover:border-k3k-purple/50'
                              )}
                            >
                              <IconComponent className={cn('w-5 h-5 mt-0.5', type.color)} />
                              <div>
                                <p className="font-medium text-k3k-white text-sm">
                                  {type.name}
                                </p>
                                <p className="text-xs text-k3k-white/60">
                                  {type.description}
                                </p>
                              </div>
                            </button>
                          )
                        })}
                      </div>
                    </div>

                    {/* NOMBRE Y EMAIL */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-k3k-white mb-2">
                          Nombre completo *
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            value={form.name}
                            onChange={(e) => handleInputChange('name', e.target.value)}
                            className={cn(
                              'w-full px-4 py-3 pl-12 bg-k3k-black-trip border rounded-lg text-k3k-white placeholder-k3k-white/50 focus:outline-none transition-all duration-300',
                              errors.name
                                ? 'border-red-500 focus:border-red-500 focus:shadow-red-500/20'
                                : 'border-k3k-white/20 focus:border-k3k-purple focus:shadow-purple-glow'
                            )}
                            placeholder="Tu nombre"
                          />
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-k3k-white/40" />
                        </div>
                        {errors.name && (
                          <p className="text-red-400 text-xs mt-1">{errors.name}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-k3k-white mb-2">
                          Email *
                        </label>
                        <div className="relative">
                          <input
                            type="email"
                            value={form.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            className={cn(
                              'w-full px-4 py-3 pl-12 bg-k3k-black-trip border rounded-lg text-k3k-white placeholder-k3k-white/50 focus:outline-none transition-all duration-300',
                              errors.email
                                ? 'border-red-500 focus:border-red-500 focus:shadow-red-500/20'
                                : 'border-k3k-white/20 focus:border-k3k-purple focus:shadow-purple-glow'
                            )}
                            placeholder="tu@email.com"
                          />
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-k3k-white/40" />
                        </div>
                        {errors.email && (
                          <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                        )}
                      </div>
                    </div>

                    {/* ASUNTO */}
                    <div>
                      <label className="block text-sm font-medium text-k3k-white mb-2">
                        Asunto *
                      </label>
                      <input
                        type="text"
                        value={form.subject}
                        onChange={(e) => handleInputChange('subject', e.target.value)}
                        className={cn(
                          'w-full px-4 py-3 bg-k3k-black-trip border rounded-lg text-k3k-white placeholder-k3k-white/50 focus:outline-none transition-all duration-300',
                          errors.subject
                            ? 'border-red-500 focus:border-red-500 focus:shadow-red-500/20'
                            : 'border-k3k-white/20 focus:border-k3k-purple focus:shadow-purple-glow'
                        )}
                        placeholder="Resumen de tu consulta"
                      />
                      {errors.subject && (
                        <p className="text-red-400 text-xs mt-1">{errors.subject}</p>
                      )}
                    </div>

                    {/* MENSAJE */}
                    <div>
                      <label className="block text-sm font-medium text-k3k-white mb-2">
                        Mensaje *
                      </label>
                      <textarea
                        value={form.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        rows={6}
                        className={cn(
                          'w-full px-4 py-3 bg-k3k-black-trip border rounded-lg text-k3k-white placeholder-k3k-white/50 focus:outline-none transition-all duration-300 resize-none',
                          errors.message
                            ? 'border-red-500 focus:border-red-500 focus:shadow-red-500/20'
                            : 'border-k3k-white/20 focus:border-k3k-purple focus:shadow-purple-glow'
                        )}
                        placeholder="Cuéntanos en detalle tu consulta, idea o propuesta..."
                      />
                      <div className="flex justify-between items-center mt-1">
                        {errors.message && (
                          <p className="text-red-400 text-xs">{errors.message}</p>
                        )}
                        <p className="text-xs text-k3k-white/40 ml-auto">
                          {form.message.length}/500
                        </p>
                      </div>
                    </div>

                    {/* BOTÓN ENVIAR */}
                    <div className="pt-4">
                      <Button
                        type="submit"
                        variant="energy"
                        size="lg"
                        loading={isSubmitting}
                        className="w-full md:w-auto"
                        glow
                      >
                        <Send className="w-5 h-5 mr-2" />
                        {isSubmitting ? 'Enviando mensaje...' : 'Enviar Mensaje'}
                      </Button>
                      
                      <p className="text-xs text-k3k-white/50 mt-2">
                        * Campos obligatorios. Responderemos en menos de 24 horas.
                      </p>
                    </div>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}