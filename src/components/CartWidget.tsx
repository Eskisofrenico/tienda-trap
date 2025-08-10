// ===== K3K MAFIA - CART WIDGET COMPONENT =====
// Widget de carrito lateral con estética trap psicodélica
'use client'

import React, { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { 
  X, 
  Plus, 
  Minus, 
  Trash2, 
  ShoppingBag, 
  CreditCard,
  Sparkles,
  Zap,
  ArrowRight
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { useCart, useCartFormatted } from '@/hooks/use-cart'
import { Button, K3kButtons } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { formatPrice, getColorDisplayName } from '@/lib/utils'

// ===== CART WIDGET PROPS =====
interface CartWidgetProps {
  className?: string
}

// ===== CART WIDGET COMPONENT =====
export default function CartWidget({ className }: CartWidgetProps) {
  const { 
    items, 
    isOpen, 
    closeCart, 
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

  // ===== EFFECTS =====
  
  // Bloquear scroll del body cuando está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

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

  const handleCheckout = () => {
    // Redirigir al checkout
    window.location.href = '/checkout'
  }

  const handleContinueShopping = () => {
    closeCart()
    window.location.href = '/productos'
  }

  // ===== RENDER =====
  return (
    <>
      {/* OVERLAY DE FONDO */}
      <div 
        className={cn(
          'fixed inset-0 bg-k3k-black/80 backdrop-blur-sm transition-all duration-300 z-50',
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        )}
        onClick={closeCart}
      />

      {/* PANEL DEL CARRITO */}
      <div 
        className={cn(
          'fixed top-0 right-0 h-full w-full max-w-md bg-k3k-black-trip border-l border-k3k-purple/20 shadow-trip-shadow transform transition-all duration-500 z-50 overflow-hidden',
          isOpen ? 'translate-x-0' : 'translate-x-full',
          className
        )}
      >
        {/* EFECTOS DE FONDO PSICODÉLICOS */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Gradiente principal */}
          <div className="absolute inset-0 bg-gradient-to-b from-k3k-purple/10 via-k3k-black-trip to-k3k-gold/5" />
          
          {/* Partículas flotantes */}
          <div className="absolute top-20 right-8 w-2 h-2 bg-k3k-pink rounded-full animate-ping opacity-60" />
          <div className="absolute top-40 left-6 w-1 h-1 bg-k3k-cyan rounded-full animate-pulse opacity-70" />
          <div className="absolute bottom-40 right-12 w-1.5 h-1.5 bg-k3k-lime rounded-full animate-bounce opacity-50" />
          
          {/* Línea de energía lateral */}
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-k3k-purple via-k3k-pink to-k3k-gold animate-energy-burst" />
        </div>

        {/* CONTENIDO DEL CARRITO */}
        <div className="relative z-10 flex flex-col h-full">
          
          {/* HEADER */}
          <div className="flex items-center justify-between p-6 border-b border-k3k-purple/20">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-lean rounded-lg flex items-center justify-center shadow-purple-glow">
                <ShoppingBag className="w-5 h-5 text-k3k-white" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-k3k-white">
                  Tu Carrito K3K
                </h2>
                <p className="text-sm text-k3k-white/60">
                  {isEmpty ? 'Carrito vacío' : `${totalItems} item${totalItems === 1 ? '' : 's'} • ${uniqueProducts} producto${uniqueProducts === 1 ? '' : 's'}`}
                </p>
              </div>
            </div>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={closeCart}
              className="text-k3k-white/60 hover:text-k3k-white hover:bg-k3k-purple/10"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>

          {/* CONTENIDO PRINCIPAL */}
          <div className="flex-1 overflow-hidden">
            {isEmpty ? (
              /* CARRITO VACÍO */
              <div className="flex flex-col items-center justify-center h-full p-6 text-center">
                <div className="w-24 h-24 bg-k3k-purple/20 rounded-full flex items-center justify-center mb-6">
                  <ShoppingBag className="w-12 h-12 text-k3k-purple-neon" />
                </div>
                
                <h3 className="text-xl font-bold text-k3k-white mb-2">
                  Tu carrito está vacío
                </h3>
                <p className="text-k3k-white/60 mb-6">
                  Agrega algunos productos K3K para comenzar tu trip psicodélico
                </p>
                
                <Button
                  variant="energy"
                  size="lg"
                  onClick={handleContinueShopping}
                  pulse
                >
                  <Sparkles className="w-5 h-5 mr-2" />
                  Explorar Productos
                </Button>
              </div>
            ) : (
              /* PRODUCTOS EN EL CARRITO */
              <div className="flex flex-col h-full">
                
                {/* ENVÍO GRATIS PROGRESS */}
                {!qualifiesForFreeShipping && (
                  <div className="p-4 border-b border-k3k-purple/10">
                    <Card variant="energy" padding="sm">
                      <CardContent>
                        <div className="text-center">
                          <p className="text-sm text-k3k-white mb-2">
                            🚚 Agrega <span className="font-bold text-k3k-lime">{amountForFreeShippingFormatted}</span> más para <span className="font-bold">envío gratis</span>
                          </p>
                          <div className="w-full bg-k3k-black-trip rounded-full h-2">
                            <div 
                              className="bg-gradient-to-r from-k3k-lime to-k3k-cyan h-2 rounded-full transition-all duration-500"
                              style={{ 
                                width: `${Math.min((parseInt(totalFormatted.replace(/\D/g, '')) / 60000) * 100, 100)}%` 
                              }}
                            />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                )}

                {qualifiesForFreeShipping && (
                  <div className="p-4 border-b border-k3k-purple/10">
                    <div className="bg-k3k-lime/20 border border-k3k-lime/30 rounded-lg p-3 text-center">
                      <p className="text-sm text-k3k-lime font-medium">
                        🎉 ¡Felicidades! Tienes envío gratis
                      </p>
                    </div>
                  </div>
                )}

                {/* LISTA DE PRODUCTOS */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {items.map((item) => (
                    <Card key={item.id} variant="default" padding="sm" className="group">
                      <CardContent>
                        <div className="flex space-x-3">
                          {/* Imagen del producto */}
                          <div className="relative w-16 h-16 bg-k3k-black-trip rounded-lg overflow-hidden">
                            <Image
                              src={item.product.images[0] || '/placeholder-product.jpg'}
                              alt={item.product.name}
                              fill
                              className="object-cover group-hover:scale-110 transition-transform duration-300"
                              sizes="64px"
                            />
                          </div>

                          {/* Información del producto */}
                          <div className="flex-1 min-w-0">
                            <h4 className="font-medium text-k3k-white text-sm line-clamp-2 mb-1">
                              {item.product.name}
                            </h4>
                            
                            {/* Opciones seleccionadas */}
                            <div className="flex flex-wrap gap-1 mb-2">
                              {item.selectedSize && (
                                <Badge variant="default" size="sm">
                                  {item.selectedSize}
                                </Badge>
                              )}
                              {item.selectedColor && (
                                <Badge variant="acid" size="sm">
                                  {getColorDisplayName(item.selectedColor)}
                                </Badge>
                              )}
                            </div>

                            {/* Precio y controles */}
                            <div className="flex items-center justify-between">
                              <div className="text-sm">
                                <span className="font-bold text-k3k-gold">
                                  {formatPrice(item.product.salePrice || item.product.price)}
                                </span>
                                {item.product.salePrice && (
                                  <span className="text-xs text-k3k-white/50 line-through ml-1">
                                    {formatPrice(item.product.price)}
                                  </span>
                                )}
                              </div>

                              {/* Controles de cantidad */}
                              <div className="flex items-center space-x-2">
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => handleDecrement(item.id, item.quantity)}
                                  className="w-6 h-6 p-0 text-k3k-white/60 hover:text-k3k-white hover:bg-k3k-purple/20"
                                >
                                  {item.quantity === 1 ? (
                                    <Trash2 className="w-3 h-3" />
                                  ) : (
                                    <Minus className="w-3 h-3" />
                                  )}
                                </Button>
                                
                                <span className="text-sm font-medium text-k3k-white min-w-[1.5rem] text-center">
                                  {item.quantity}
                                </span>
                                
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => handleIncrement(item.id, item.quantity)}
                                  className="w-6 h-6 p-0 text-k3k-white/60 hover:text-k3k-white hover:bg-k3k-purple/20"
                                >
                                  <Plus className="w-3 h-3" />
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* FOOTER - TOTALES Y CHECKOUT */}
          {!isEmpty && (
            <div className="border-t border-k3k-purple/20 p-4 space-y-4 bg-k3k-black-trip/50 backdrop-blur-sm">
              
              {/* Botón limpiar carrito */}
              <div className="flex justify-center">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearCart}
                  className="text-k3k-white/60 hover:text-k3k-pink text-xs"
                >
                  <Trash2 className="w-3 h-3 mr-1" />
                  Limpiar carrito
                </Button>
              </div>

              {/* Resumen de totales */}
              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-k3k-white/70">
                  <span>Subtotal ({totalItems} items)</span>
                  <span>{subtotalFormatted}</span>
                </div>
                
                {parseInt(discountFormatted.replace(/\D/g, '')) > 0 && (
                  <div className="flex justify-between text-k3k-pink">
                    <span>Descuento</span>
                    <span>-{discountFormatted}</span>
                  </div>
                )}
                
                <div className="flex justify-between text-k3k-white/70">
                  <span>Envío</span>
                  <span>{qualifiesForFreeShipping ? 'GRATIS' : 'Calculado en checkout'}</span>
                </div>
                
                <div className="h-px bg-k3k-purple/20" />
                
                <div className="flex justify-between text-lg font-bold text-k3k-white">
                  <span>Total</span>
                  <span className="text-k3k-gold">{totalFormatted}</span>
                </div>
              </div>

              {/* Botones de acción */}
              <div className="space-y-3">
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
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                
                <Button
                  variant="outline"
                  size="md"
                  onClick={handleContinueShopping}
                  className="w-full"
                >
                  Continuar Comprando
                </Button>
              </div>

              {/* Seguridad y garantías */}
              <div className="flex items-center justify-center space-x-4 pt-2 text-xs text-k3k-white/50">
                <div className="flex items-center">
                  <Zap className="w-3 h-3 mr-1 text-k3k-lime" />
                  Pago seguro
                </div>
                <div className="flex items-center">
                  <Sparkles className="w-3 h-3 mr-1 text-k3k-purple" />
                  Garantía K3K
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}