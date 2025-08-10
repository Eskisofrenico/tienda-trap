// ===== K3K MAFIA - BUTTON COMPONENT =====
// Botones con estética trap psicodélica: lean, acid, gold, energy, trip
'use client'

import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { ButtonProps as BaseButtonProps } from '@/types'

// ===== BUTTON VARIANTS - ESTÉTICA TRAP PSICODÉLICA =====
const buttonVariants = cva(
  // BASE STYLES - Estilo trap urbano
  'inline-flex items-center justify-center rounded-lg text-sm font-bold uppercase tracking-wider transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer',
  {
    variants: {
      variant: {
        // === PRIMARY - Morado Lean ===
        primary: [
          'bg-lean text-k3k-white border border-k3k-purple',
          'shadow-purple-glow',
          'hover:scale-105 hover:shadow-multicolor-glow hover:bg-k3k-purple-neon',
          'active:scale-95',
          'focus-visible:ring-k3k-purple'
        ],
        
        // === SECONDARY - Dorado Mafia ===
        secondary: [
          'bg-gold-shine text-k3k-black border border-k3k-gold',
          'shadow-gold-glow',
          'hover:scale-105 hover:shadow-acid-shadow hover:animate-gold-shimmer',
          'active:scale-95',
          'focus-visible:ring-k3k-gold'
        ],
        
        // === OUTLINE - Borde psicodélico ===
        outline: [
          'border-2 border-k3k-purple bg-transparent text-k3k-purple',
          'hover:bg-k3k-purple hover:text-k3k-white hover:shadow-purple-glow',
          'hover:scale-105 active:scale-95',
          'focus-visible:ring-k3k-purple'
        ],
        
        // === GHOST - Transparente con hover ===
        ghost: [
          'bg-transparent text-k3k-purple',
          'hover:bg-k3k-purple/10 hover:text-k3k-purple-neon',
          'hover:shadow-purple-glow',
          'active:bg-k3k-purple/20'
        ],
        
        // === LEAN - Gradiente morado jarabe ===
        lean: [
          'bg-lean text-k3k-white border border-k3k-purple-neon',
          'shadow-purple-glow animate-psychedelic-pulse',
          'hover:shadow-trip-shadow hover:animate-lean-wave',
          'hover:scale-110 active:scale-95',
          'relative overflow-hidden'
        ],
        
        // === ACID - Colores LSD ===
        acid: [
          'bg-acid text-k3k-black border border-k3k-lime',
          'shadow-lime-glow',
          'hover:animate-acid-trip hover:text-k3k-purple',
          'hover:scale-105 active:scale-95',
          'bg-gradient-to-r from-k3k-lime via-k3k-cyan to-k3k-pink'
        ],
        
        // === TRIP - Gradiente psicodélico completo ===
        trip: [
          'bg-trip text-k3k-white border-0',
          'shadow-multicolor-glow',
          'hover:animate-trip-rotation hover:scale-110',
          'active:scale-95',
          'relative overflow-hidden'
        ],
        
        // === ENERGY - Colores energy drink ===
        energy: [
          'bg-energy-drink text-k3k-white border border-k3k-electric',
          'shadow-cyan-glow animate-energy-burst',
          'hover:shadow-multicolor-glow hover:animate-glitch-effect',
          'hover:scale-105 active:scale-95'
        ],
        
        // === GOLD - Dorado brillante con efectos ===
        gold: [
          'bg-gold-shine text-k3k-black border border-k3k-gold-neon',
          'shadow-gold-glow font-black',
          'hover:scale-105 hover:animate-gold-shimmer hover:shadow-acid-shadow',
          'active:scale-95',
          'relative overflow-hidden'
        ]
      },
      
      size: {
        sm: 'h-8 px-3 text-xs',
        md: 'h-10 px-4 py-2 text-sm',
        lg: 'h-12 px-6 py-3 text-base',
        xl: 'h-14 px-8 py-4 text-lg font-black'
      }
    },
    
    defaultVariants: {
      variant: 'primary',
      size: 'md'
    }
  }
)

// ===== EXTENDED BUTTON PROPS =====
interface ExtendedButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants>,
    Omit<BaseButtonProps, 'variant' | 'size' | 'onClick' | 'type' | 'children'> {
  glow?: boolean // Efecto glow extra
  pulse?: boolean // Efecto pulse personalizado
}

// ===== BUTTON COMPONENT =====
const Button = React.forwardRef<HTMLButtonElement, ExtendedButtonProps>(
  ({ 
    className, 
    variant, 
    size, 
    children, 
    loading = false, 
    disabled,
    glow = false,
    pulse = false,
    ...props 
  }, ref) => {
    const isDisabled = disabled || loading

    return (
      <button
        ref={ref}
        className={cn(
          buttonVariants({ variant, size }),
          // Efectos adicionales
          glow && 'animate-neon-glow',
          pulse && 'animate-pulse',
          className
        )}
        disabled={isDisabled}
        {...props}
      >
        {/* EFECTOS ESPECIALES PARA DIFERENTES VARIANTES */}
        
        {/* Efecto deslizante para LEAN */}
        {variant === 'lean' && (
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 animate-slide opacity-0 hover:opacity-100 transition-opacity duration-500" />
        )}
        
        {/* Efecto plasma para TRIP */}
        {variant === 'trip' && (
          <div className="absolute -inset-1 bg-gradient-to-r from-k3k-purple via-k3k-pink to-k3k-gold rounded-lg opacity-30 blur animate-spin-slow" />
        )}
        
        {/* Efecto shimmer para GOLD */}
        {variant === 'gold' && (
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-shimmer opacity-0 hover:opacity-100 transition-opacity duration-300" />
        )}
        
        {/* CONTENIDO DEL BOTÓN */}
        <span className="relative z-10 flex items-center gap-2">
          {loading && (
            <Loader2 className="h-4 w-4 animate-spin" />
          )}
          {children}
        </span>
      </button>
    )
  }
)

Button.displayName = 'Button'

// ===== BOTONES PREDEFINIDOS PARA K3K MAFIA =====
export const K3kButtons = {
  // Agregar al Carrito - Lean style
  AddToCart: ({ loading, ...props }: Omit<ExtendedButtonProps, 'variant' | 'children'>) => (
    <Button variant="lean" loading={loading} {...props}>
      {loading ? 'Agregando...' : '🛒 Agregar al Carrito'}
    </Button>
  ),
  
  // Comprar Ahora - Gold style
  BuyNow: ({ loading, ...props }: Omit<ExtendedButtonProps, 'variant' | 'children'>) => (
    <Button variant="gold" loading={loading} {...props}>
      {loading ? 'Procesando...' : '💳 Comprar Ahora'}
    </Button>
  ),
  
  // Ver Producto - Trip style
  ViewProduct: (props: Omit<ExtendedButtonProps, 'variant' | 'children'>) => (
    <Button variant="trip" {...props}>
      👁️ Ver Producto
    </Button>
  ),
  
  // Filtros - Acid style
  FilterButton: ({ active, children, ...props }: ExtendedButtonProps & { active?: boolean }) => (
    <Button 
      variant={active ? "acid" : "outline"} 
      size="sm"
      {...props}
    >
      {children}
    </Button>
  ),
  
  // Join K3K MAFIA - Energy style
  JoinMafia: (props: Omit<ExtendedButtonProps, 'variant' | 'children'>) => (
    <Button variant="energy" size="xl" pulse {...props}>
      🏴‍☠️ JOIN THE K3K
    </Button>
  ),
  
  // Newsletter - Primary
  Newsletter: ({ loading, ...props }: Omit<ExtendedButtonProps, 'variant' | 'children'>) => (
    <Button variant="primary" loading={loading} {...props}>
      {loading ? 'Suscribiendo...' : '📧 Suscríbete'}
    </Button>
  ),
  
  // Siguiente/Anterior - Ghost
  NavigationButton: ({ children, ...props }: ExtendedButtonProps) => (
    <Button variant="ghost" size="sm" {...props}>
      {children}
    </Button>
  ),
  
  // Finalizar Compra - Gold
  Checkout: ({ loading, ...props }: Omit<ExtendedButtonProps, 'variant' | 'children'>) => (
    <Button variant="gold" size="lg" loading={loading} {...props}>
      {loading ? 'Procesando...' : '💎 Finalizar Compra'}
    </Button>
  ),
  
  // Limpiar Carrito - Outline
  ClearCart: (props: Omit<ExtendedButtonProps, 'variant' | 'children'>) => (
    <Button variant="outline" size="sm" {...props}>
      🗑️ Limpiar
    </Button>
  ),
  
  // Favoritos - Ghost
  AddToFavorites: ({ isFavorite, ...props }: ExtendedButtonProps & { isFavorite?: boolean }) => (
    <Button variant="ghost" size="sm" {...props}>
      {isFavorite ? '❤️' : '🤍'} 
    </Button>
  ),
  
  // Compartir - Ghost
  ShareButton: (props: Omit<ExtendedButtonProps, 'variant' | 'children'>) => (
    <Button variant="ghost" size="sm" {...props}>
      🔗 Compartir
    </Button>
  ),
  
  // Contacto - Secondary
  ContactButton: (props: Omit<ExtendedButtonProps, 'variant' | 'children'>) => (
    <Button variant="secondary" {...props}>
      📱 Contactar
    </Button>
  )
}

export { Button, buttonVariants }
export type { ExtendedButtonProps as K3kButtonProps }