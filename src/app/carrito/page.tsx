// ===== K3K MAFIA - CARRITO PAGE =====
// Página completa del carrito con checkout flow
'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { 
  ShoppingBag, 
  Plus, 
  Minus, 
  Trash2, 
  ArrowLeft, 
  CreditCard,
  Truck,
  Shield,
  Zap,
  Heart,
  Tag,
  Gift
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { useCart, useCartFormatted } from '@/hooks/use-cart'
import { Button, K3kButtons } from '@/components/ui/Button'
import { Badge, K3kBadges } from '@/components/ui/Badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { formatPrice, getColorDisplayName } from '@/lib/utils'
import type { Metadata } from 'next'

// ===== PAGE METADATA =====
export const metadata: Metadata = {
  title: 'Carrito de Compras | K3K MAFIA',
  description: 'Revisa y finaliza tu pedido de streetwear psicodélico K3K MAFIA',
}

// ===== CARRITO PAGE COMPONENT =====
export default function CarritoPage() {
  const [promoCode, setPromoCode] = useState('')
  const [isApplyingPromo, setIsApplyingPromo] = useState(false)

  const { 
    items, 
    removeItem, 
    updateQuantity, 
    clearCart,
    isLoading 
  } = useCart()

  const {
    totalFormatted,
    subtotalFormatted,
    discountFormatted,
    isEmpty,
    totalItems,
    uniqueProducts,
    qualifiesForFreeShipping,
    amountForFreeShippingFormatted,
    freeShippingThresholdFormatted
  } = useCartFormatted()

  // ===== HANDLERS =====
  
  const handleIncrement = (itemId: string, currentQuantity: number) => {
    updateQuantity(itemId, currentQuantity + 1)
  }

  const handleDecrement = (itemId: string, currentQuantity: number) => {
    if (currentQuantity <= 1) {
      removeItem(itemId)
    } else {
      updateQuantity(itemId, currentQuantity - 1)
    }
  }

  const handleApplyPromo = async () => {
    if (!promoCode.trim()) return
    
    setIsApplyingPromo(true)
    
    // Simular aplicación de cupón
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsApplyingPromo(false)
    // Aquí manejarías la lógica real del cupón
  }

  const handleCheckout = () => {
    window.location.href = '/checkout'
  }

  // ===== RENDER =====
  return (
    <div className="min-h-screen bg-k3k-black pt-20">
      
      {/* EFECTOS DE FONDO PSICODÉLICOS */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-k3k-purple/10 via-k3k-black to-k3k-gold/5" />
        
        {/* Partículas flotantes */}
        <div className="absolute top-40 left-20 w-2 h-2 bg-k3k-pink rounded-full animate-ping opacity-40" />
        <div className="absolute top-60 right-32 w-1 h-1 bg-k3k-cyan rounded-full animate-pulse opacity-60" />
        <div className="absolute bottom-40 left-1/4 w-1.5 h-1.5 bg-k3k-lime rounded-full animate-bounce opacity-50" />
        
        {/* Efectos de luz */}
        <div className="absolute top-1/4 right-1/3 w-64 h-64 bg-k3k-purple/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 left-1/4 w-48 h-48 bg-k3k-gold/5 rounded-full blur-3xl animate-bounce" />
      </div>

      {/* CONTENIDO PRINCIPAL */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* HEADER DE LA PÁGINA */}
        <div className="mb-8">
          <div className="flex items-center space-x-4 mb-6">
            <Link href="/productos">
              <Button variant="ghost" size="sm" className="text-k3k-white/70 hover:text-k3k-purple-neon">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Seguir Comprando
              </Button>
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-lean rounded-xl flex items-center justify-center shadow-purple-glow">
              <ShoppingBag className="w-6 h-6 text-k3k-white" />
            </div>
            <div>
              <h1 className="text-3xl font-black text-k3k-white mb-2">
                Tu Carrito K3K
              </h1>
              <p className="text-k3k-white/70">
                {isEmpty ? 'Tu carrito está vacío' : `${totalItems} artículo${totalItems === 1 ? '' : 's'} en tu carrito`}
              </p>
            </div>
          </div>
        </div>

        {isEmpty ? (
          /* CARRITO VACÍO */
          <div className="text-center py-16">
            <Card variant="psychedelic" padding="xl" className="max-w-md mx-auto">
              <CardContent>
                <div className="w-24 h-24 bg-k3k-purple/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <ShoppingBag className="w-12 h-12 text-k3k-purple-neon" />
                </div>
                
                <h2 className="text-2xl font-bold text-k3k-white mb-4">
                  Tu carrito está vacío
                </h2>
                <p className="text-k3k-white/70 mb-6">
                  ¡Es hora de llenarlo con streetwear psicodélico! Explora nuestras colecciones exclusivas.
                </p>
                
                <div className="space-y-3">
                  <Link href="/productos">
                    <Button variant="energy" size="lg" className="w-full" pulse>
                      <Zap className="w-5 h-5 mr-2" />
                      Explorar Productos
                    </Button>
                  </Link>
                  
                  <div className="flex gap-2">
                    <Link href="/productos?category=hoodies" className="flex-1">
                      <Button variant="outline" size="sm" className="w-full">
                        🍇 Hoodies Lean
                      </Button>
                    </Link>
                    <Link href="/productos?category=chains" className="flex-1">
                      <Button variant="outline" size="sm" className="w-full">
                        ⚡ Cadenas Gold
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        ) : (
          /* CARRITO CON PRODUCTOS */
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* COLUMNA IZQUIERDA - PRODUCTOS */}
            <div className="lg:col-span-2 space-y-6">
              
              {/* ENVÍO GRATIS PROGRESS */}
              {!qualifiesForFreeShipping && (
                <Card variant="energy" padding="md">
                  <CardContent>
                    <div className="flex items-center space-x-3 mb-3">
                      <Truck className="w-5 h-5 text-k3k-lime" />
                      <div>
                        <p className="font-medium text-k3k-white">
                          ¡Estás cerca del envío gratis!
                        </p>
                        <p className="text-sm text-k3k-white/70">
                          Agrega <span className="font-bold text-k3k-lime">{amountForFreeShippingFormatted}</span> más para obtenerlo
                        </p>
                      </div>
                    </div>
                    
                    <div className="w-full bg-k3k-black-trip rounded-full h-3 overflow-hidden">
                      <div 
                        className="bg-gradient-to-r from-k3k-lime to-k3k-cyan h-3 rounded-full transition-all duration-500 relative"
                        style={{ 
                          width: `${Math.min((parseInt(totalFormatted.replace(/\D/g, '')) / 60000) * 100, 100)}%` 
                        }}
                      >
                        <div className="absolute inset-0 bg-white/20 animate-pulse" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {qualifiesForFreeShipping && (
                <Card variant="acid" padding="md">
                  <CardContent>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-k3k-lime rounded-full flex items-center justify-center">
                        <Truck className="w-5 h-5 text-k3k-black" />
                      </div>
                      <div>
                        <p className="font-bold text-k3k-lime">
                          🎉 ¡Envío gratis desbloqueado!
                        </p>
                        <p className="text-sm text-k3k-white/70">
                          Tu pedido califica para envío gratuito a todo Chile
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* PRODUCTOS EN EL CARRITO */}
              <Card variant="lean" padding="md">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-k3k-white">
                      Productos ({uniqueProducts})
                    </CardTitle>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={clearCart}
                      className="text-k3k-white/60 hover:text-k3k-pink"
                    >
                      <Trash2 className="w-4 h-4 mr-1" />
                      Limpiar todo
                    </Button>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-4">
                    {items.map((item) => (
                      <div key={item.id} className="group">
                        <div className="flex space-x-4 p-4 bg-k3k-black-trip/50 rounded-xl border border-k3k-purple/10 hover:border-k3k-purple/30 transition-all duration-300">
                          
                          {/* Imagen del producto */}
                          <div className="relative w-20 h-20 bg-k3k-black-trip rounded-lg overflow-hidden">
                            <Image
                              src={item.product.images[0] || '/placeholder-product.jpg'}
                              alt={item.product.name}
                              fill
                              className="object-cover group-hover:scale-110 transition-transform duration-300"
                              sizes="80px"
                            />
                            
                            {/* Badge del producto */}
                            {item.product.isLimited && (
                              <div className="absolute top-1 left-1">
                                <Badge variant="limited" size="sm">
                                  LIMITED
                                </Badge>
                              </div>
                            )}
                          </div>

                          {/* Información del producto */}
                          <div className="flex-1 min-w-0">
                            <div className="flex justify-between items-start mb-2">
                              <div>
                                <Link 
                                  href={`/producto/${item.product.slug}`}
                                  className="font-medium text-k3k-white hover:text-k3k-purple-neon transition-colors duration-200 line-clamp-2"
                                >
                                  {item.product.name}
                                </Link>
                                <p className="text-sm text-k3k-white/60 capitalize">
                                  {item.product.category.replace('-', ' ')}
                                </p>
                              </div>
                              
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => removeItem(item.id)}
                                className="text-k3k-white/40 hover:text-k3k-pink opacity-0 group-hover:opacity-100 transition-all duration-200"
                              >
                                <Trash2 className="w-4 h-4" />
                              </Button>
                            </div>

                            {/* Opciones seleccionadas */}
                            <div className="flex flex-wrap gap-1 mb-3">
                              {item.selectedSize && (
                                <Badge variant="default" size="sm">
                                  Talla {item.selectedSize}
                                </Badge>
                              )}
                              {item.selectedColor && (
                                <Badge variant="acid" size="sm">
                                  {getColorDisplayName(item.selectedColor)}
                                </Badge>
                              )}
                            </div>

                            {/* Precio y controles de cantidad */}
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-2">
                                <span className="text-lg font-bold text-k3k-gold">
                                  {formatPrice(item.product.salePrice || item.product.price)}
                                </span>
                                {item.product.salePrice && (
                                  <span className="text-sm text-k3k-white/50 line-through">
                                    {formatPrice(item.product.price)}
                                  </span>
                                )}
                              </div>

                              {/* Controles de cantidad */}
                              <div className="flex items-center space-x-3 bg-k3k-black-trip rounded-lg p-1">
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => handleDecrement(item.id, item.quantity)}
                                  className="w-8 h-8 p-0 text-k3k-white/60 hover:text-k3k-white hover:bg-k3k-purple/20"
                                >
                                  {item.quantity === 1 ? (
                                    <Trash2 className="w-3 h-3" />
                                  ) : (
                                    <Minus className="w-3 h-3" />
                                  )}
                                </Button>
                                
                                <span className="text-sm font-bold text-k3k-white min-w-[2rem] text-center">
                                  {item.quantity}
                                </span>
                                
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => handleIncrement(item.id, item.quantity)}
                                  className="w-8 h-8 p-0 text-k3k-white/60 hover:text-k3k-white hover:bg-k3k-purple/20"
                                >
                                  <Plus className="w-3 h-3" />
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* COLUMNA DERECHA - RESUMEN */}
            <div className="space-y-6">
              
              {/* CUPÓN DE DESCUENTO */}
              <Card variant="gold" padding="md">
                <CardHeader>
                  <CardTitle className="text-k3k-white flex items-center">
                    <Tag className="w-5 h-5 mr-2 text-k3k-gold" />
                    Cupón de Descuento
                  </CardTitle>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex space-x-2">
                      <input
                        type="text"
                        placeholder="Código de descuento"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        className="flex-1 px-3 py-2 bg-k3k-black-trip border border-k3k-gold/30 rounded-lg text-k3k-white placeholder-k3k-white/50 focus:outline-none focus:border-k3k-gold focus:shadow-gold-glow transition-all duration-300"
                      />
                      <Button
                        variant="gold"
                        size="sm"
                        onClick={handleApplyPromo}
                        loading={isApplyingPromo}
                        disabled={!promoCode.trim()}
                      >
                        Aplicar
                      </Button>
                    </div>
                    
                    <div className="text-xs text-k3k-white/60">
                      <p>💡 Códigos disponibles:</p>
                      <p className="text-k3k-gold">K3K10 - 10% descuento</p>
                      <p className="text-k3k-purple-neon">LEAN20 - 20% en hoodies</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* RESUMEN DEL PEDIDO */}
              <Card variant="trip" padding="md">
                <CardHeader>
                  <CardTitle className="text-k3k-white">
                    Resumen del Pedido
                  </CardTitle>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between text-k3k-white/70">
                      <span>Subtotal ({totalItems} artículos)</span>
                      <span>{subtotalFormatted}</span>
                    </div>
                    
                    {parseInt(discountFormatted.replace(/\D/g, '')) > 0 && (
                      <div className="flex justify-between text-k3k-pink">
                        <span>Descuento aplicado</span>
                        <span>-{discountFormatted}</span>
                      </div>
                    )}
                    
                    <div className="flex justify-between text-k3k-white/70">
                      <span>Envío</span>
                      <span>
                        {qualifiesForFreeShipping ? (
                          <span className="text-k3k-lime font-medium">GRATIS</span>
                        ) : (
                          'Calculado en checkout'
                        )}
                      </span>
                    </div>
                    
                    <div className="h-px bg-k3k-purple/20" />
                    
                    <div className="flex justify-between text-xl font-black">
                      <span className="text-k3k-white">Total</span>
                      <span className="text-k3k-gold">{totalFormatted}</span>
                    </div>
                  </div>

                  {/* Botón de checkout */}
                  <div className="mt-6 space-y-3">
                    <Button
                      variant="gold"
                      size="lg"
                      onClick={handleCheckout}
                      loading={isLoading}
                      className="w-full"
                      glow
                    >
                      <CreditCard className="w-5 h-5 mr-2" />
                      {isLoading ? 'Procesando...' : 'Finalizar Compra'}
                    </Button>
                    
                    <div className="flex items-center justify-center space-x-4 text-xs text-k3k-white/50">
                      <div className="flex items-center">
                        <Shield className="w-3 h-3 mr-1 text-k3k-cyan" />
                        Pago seguro
                      </div>
                      <div className="flex items-center">
                        <Heart className="w-3 h-3 mr-1 text-k3k-pink" />
                        Garantía K3K
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* BENEFICIOS */}
              <Card variant="psychedelic" padding="md">
                <CardContent>
                  <h3 className="font-bold text-k3k-white mb-4">Beneficios K3K MAFIA</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center space-x-2">
                      <Truck className="w-4 h-4 text-k3k-lime" />
                      <span className="text-k3k-white/70">Envío gratis sobre $60.000</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Shield className="w-4 h-4 text-k3k-cyan" />
                      <span className="text-k3k-white/70">Garantía de satisfacción</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Gift className="w-4 h-4 text-k3k-pink" />
                      <span className="text-k3k-white/70">Packaging exclusivo</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Zap className="w-4 h-4 text-k3k-electric" />
                      <span className="text-k3k-white/70">Acceso VIP a drops</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}