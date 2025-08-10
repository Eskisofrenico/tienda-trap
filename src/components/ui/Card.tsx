// ===== K3K MAFIA - CARD COMPONENT =====
// Cards con estética trap psicodélica: lean, acid, gold, energy, trip
'use client'

import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import type { CardProps as BaseCardProps } from '@/types'

// ===== CARD VARIANTS - ESTÉTICA TRAP PSICODÉLICA =====
const cardVariants = cva(
  // BASE STYLES - Estilo trap urbano
  'relative rounded-xl transition-all duration-300 overflow-hidden backdrop-blur-sm',
  {
    variants: {
      variant: {
        // === DEFAULT - Negro urbano con borde sutil ===
        default: [
          'bg-k3k-black-trip/90 border border-k3k-purple/20',
          'shadow-lg hover:shadow-purple-glow',
          'hover:scale-[1.02] hover:border-k3k-purple/40'
        ],
        
        // === LEAN - Morado jarabe con efectos ===
        lean: [
          'bg-gradient-to-br from-k3k-black-trip to-k3k-purple-dark/50',
          'border border-k3k-purple shadow-purple-glow',
          'hover:shadow-trip-shadow hover:scale-[1.02]',
          'before:absolute before:inset-0 before:bg-lean before:opacity-10',
          'relative overflow-hidden'
        ],
        
        // === PSYCHEDELIC - Gradiente completo ===
        psychedelic: [
          'bg-gradient-to-br from-k3k-purple/20 via-k3k-pink/10 to-k3k-gold/20',
          'border border-transparent shadow-multicolor-glow',
          'hover:shadow-trip-shadow hover:scale-105',
          'backdrop-blur-lg',
          'relative overflow-hidden'
        ],
        
        // === ACID - Colores LSD vibrantes ===
        acid: [
          'bg-gradient-to-br from-k3k-lime/10 via-k3k-cyan/10 to-k3k-pink/10',
          'border border-k3k-lime/30 shadow-lime-glow',
          'hover:shadow-multicolor-glow hover:animate-acid-trip',
          'hover:scale-[1.03]',
          'backdrop-blur-md'
        ],
        
        // === GOLD - Dorado brillante ===
        gold: [
          'bg-gradient-to-br from-k3k-gold/15 to-k3k-gold-dark/10',
          'border border-k3k-gold shadow-gold-glow',
          'hover:shadow-acid-shadow hover:scale-[1.02]',
          'relative overflow-hidden'
        ],
        
        // === TRIP - Efectos psicodélicos máximos ===
        trip: [
          'bg-gradient-to-br from-k3k-purple/20 via-k3k-pink/15 to-k3k-gold/10',
          'border-0 shadow-trip-shadow',
          'hover:shadow-plasma-deep hover:scale-105',
          'hover:animate-trip-rotation',
          'backdrop-blur-xl relative overflow-hidden'
        ],
        
        // === ENERGY - Energy drink vibes ===
        energy: [
          'bg-gradient-to-br from-k3k-electric/15 to-k3k-lime/10',
          'border border-k3k-electric shadow-cyan-glow',
          'hover:shadow-multicolor-glow hover:animate-energy-burst',
          'hover:scale-[1.02]'
        ],
        
        // === NEON - Neón brillante ===
        neon: [
          'bg-k3k-black-trip/95 border-2 border-k3k-purple-neon',
          'shadow-neon-border animate-neon-glow',
          'hover:shadow-multicolor-glow hover:border-k3k-pink-neon',
          'hover:scale-[1.02]'
        ]
      },
      
      padding: {
        none: 'p-0',
        sm: 'p-3',
        md: 'p-4',
        lg: 'p-6',
        xl: 'p-8'
      },
      
      hover: {
        true: 'cursor-pointer transform-gpu will-change-transform',
        false: ''
      }
    },
    
    defaultVariants: {
      variant: 'default',
      padding: 'md',
      hover: false
    }
  }
)

// ===== EXTENDED CARD PROPS =====
interface ExtendedCardProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'>,
    VariantProps<typeof cardVariants>,
    Omit<BaseCardProps, 'variant' | 'padding' | 'hover' | 'children'> {
  children?: React.ReactNode
  glow?: boolean // Efecto glow extra
  pulse?: boolean // Efecto pulse
  blur?: boolean // Backdrop blur extra
}

// ===== CARD COMPONENT =====
const Card = React.forwardRef<HTMLDivElement, ExtendedCardProps>(
  ({ 
    className, 
    variant, 
    padding, 
    hover, 
    children, 
    glow = false,
    pulse = false,
    blur = false,
    ...props 
  }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          cardVariants({ variant, padding, hover }),
          // Efectos adicionales
          glow && 'animate-neon-glow',
          pulse && 'animate-psychedelic-pulse',
          blur && 'backdrop-blur-2xl',
          className
        )}
        {...props}
      >
        {/* EFECTOS ESPECIALES PARA DIFERENTES VARIANTES */}
        
        {/* Efecto deslizante para LEAN */}
        {variant === 'lean' && (
          <>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-k3k-purple/10 to-transparent -skew-x-12 animate-slide opacity-0 hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-k3k-purple via-k3k-purple-neon to-k3k-purple" />
          </>
        )}
        
        {/* Efecto plasma para TRIP */}
        {variant === 'trip' && (
          <>
            <div className="absolute -inset-1 bg-gradient-to-r from-k3k-purple via-k3k-pink to-k3k-gold rounded-xl opacity-20 blur animate-spin-slow" />
            <div className="absolute inset-0 bg-gradient-to-45 from-k3k-purple/5 via-transparent to-k3k-gold/5" />
          </>
        )}
        
        {/* Efecto shimmer para GOLD */}
        {variant === 'gold' && (
          <>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-k3k-gold/10 to-transparent -skew-x-12 animate-shimmer opacity-0 hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute top-0 right-0 w-8 h-8 bg-k3k-gold/20 rounded-full blur-xl animate-bounce" />
          </>
        )}
        
        {/* Efecto ácido para ACID */}
        {variant === 'acid' && (
          <div className="absolute inset-0 bg-gradient-to-r from-k3k-lime/5 via-k3k-cyan/5 to-k3k-pink/5 animate-color-shift" />
        )}
        
        {/* Efecto energía para ENERGY */}
        {variant === 'energy' && (
          <>
            <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-k3k-electric via-k3k-cyan to-k3k-lime animate-energy-burst" />
            <div className="absolute bottom-0 right-0 w-4 h-4 bg-k3k-lime/30 rounded-full animate-ping" />
          </>
        )}
        
        {/* Efectos de partículas para PSYCHEDELIC */}
        {variant === 'psychedelic' && (
          <>
            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-4 left-4 w-2 h-2 bg-k3k-purple rounded-full animate-bounce" />
              <div className="absolute top-8 right-8 w-1 h-1 bg-k3k-pink rounded-full animate-ping" />
              <div className="absolute bottom-6 left-12 w-1.5 h-1.5 bg-k3k-gold rounded-full animate-pulse" />
            </div>
          </>
        )}
        
        {/* CONTENIDO DE LA CARD */}
        <div className="relative z-10">
          {children}
        </div>
      </div>
    )
  }
)

Card.displayName = 'Card'

// ===== CARD PARTS - Componentes para construir cards ===
const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex flex-col space-y-1.5 pb-4', className)}
    {...props}
  />
))
CardHeader.displayName = 'CardHeader'

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement> & { gradient?: boolean }
>(({ className, gradient = false, children, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      'font-bold text-lg leading-none tracking-tight',
      gradient && 'bg-gradient-to-r from-k3k-purple via-k3k-pink to-k3k-gold bg-clip-text text-transparent',
      !gradient && 'text-k3k-white',
      className
    )}
    {...props}
  >
    {children}
  </h3>
))
CardTitle.displayName = 'CardTitle'

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn('text-sm text-k3k-white/70 leading-relaxed', className)}
    {...props}
  />
))
CardDescription.displayName = 'CardDescription'

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div 
    ref={ref} 
    className={cn('text-k3k-white', className)} 
    {...props} 
  />
))
CardContent.displayName = 'CardContent'

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex items-center pt-4 border-t border-k3k-purple/20', className)}
    {...props}
  />
))
CardFooter.displayName = 'CardFooter'

// ===== CARDS PREDEFINIDAS PARA K3K MAFIA =====
export const K3kCards = {
  // Card de Producto
  ProductCard: ({ children, ...props }: ExtendedCardProps) => (
    <Card variant="lean" hover glow {...props}>
      {children}
    </Card>
  ),
  
  // Card de Colección
  CollectionCard: ({ children, ...props }: ExtendedCardProps) => (
    <Card variant="trip" hover pulse padding="lg" {...props}>
      {children}
    </Card>
  ),
  
  // Card de Artista
  ArtistCard: ({ children, ...props }: ExtendedCardProps) => (
    <Card variant="psychedelic" hover padding="lg" {...props}>
      {children}
    </Card>
  ),
  
  // Card de Oferta/Sale
  SaleCard: ({ children, ...props }: ExtendedCardProps) => (
    <Card variant="acid" hover glow pulse {...props}>
      {children}
    </Card>
  ),
  
  // Card Premium/VIP
  VipCard: ({ children, ...props }: ExtendedCardProps) => (
    <Card variant="gold" hover padding="xl" {...props}>
      {children}
    </Card>
  ),
  
  // Card de Información
  InfoCard: ({ children, ...props }: ExtendedCardProps) => (
    <Card variant="default" padding="lg" {...props}>
      {children}
    </Card>
  ),
  
  // Card de Newsletter
  NewsletterCard: ({ children, ...props }: ExtendedCardProps) => (
    <Card variant="energy" padding="lg" glow {...props}>
      {children}
    </Card>
  )
}

export { 
  Card, 
  CardHeader, 
  CardFooter, 
  CardTitle, 
  CardDescription, 
  CardContent,
  cardVariants 
}
export type { ExtendedCardProps as K3kCardProps }