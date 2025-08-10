// ===== K3K MAFIA - BADGE COMPONENT =====
// Badges con estética trap psicodélica: lean, acid, gold, energy, trip
'use client'

import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

// ===== BADGE VARIANTS - ESTÉTICA TRAP PSICODÉLICA =====
const badgeVariants = cva(
  // BASE STYLES - Estilo trap urbano
  'inline-flex items-center justify-center rounded-full border px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider transition-all duration-300 select-none',
  {
    variants: {
      variant: {
        // === BADGE DEFAULT - Negro urbano ===
        default: [
          'border-k3k-black-trip bg-k3k-black text-k3k-white',
          'hover:bg-k3k-black-trip hover:shadow-purple-glow',
          'animate-pulse'
        ],
        
        // === LEAN COLLECTION - Morado jarabe ===
        lean: [
          'border-k3k-purple bg-lean text-k3k-white',
          'shadow-purple-glow',
          'hover:scale-110 hover:shadow-multicolor-glow',
          'animate-psychedelic-pulse'
        ],
        
        // === ACID TRIP - LSD vibes ===
        acid: [
          'border-k3k-lime bg-acid text-k3k-black',
          'shadow-lime-glow',
          'hover:animate-acid-trip hover:text-k3k-purple',
          'bg-gradient-to-r from-k3k-lime via-k3k-cyan to-k3k-pink'
        ],
        
        // === GOLD MAFIA - Dinero/cadenas ===
        gold: [
          'border-k3k-gold bg-gold-shine text-k3k-black',
          'shadow-gold-glow',
          'hover:scale-105 hover:animate-gold-shimmer',
          'font-black'
        ],
        
        // === ENERGY DRINK - Pila/estimulantes ===
        energy: [
          'border-k3k-electric bg-energy-drink text-k3k-white',
          'shadow-cyan-glow animate-energy-burst',
          'hover:shadow-multicolor-glow hover:animate-glitch-effect'
        ],
        
        // === TRIP PSICODÉLICO ===
        trip: [
          'border-transparent bg-trip text-k3k-white',
          'shadow-multicolor-glow',
          'hover:animate-trip-rotation',
          'bg-gradient-to-45 from-k3k-purple via-k3k-pink to-k3k-gold'
        ],
        
        // === LIMITED EDITION ===
        limited: [
          'border-k3k-purple-neon bg-k3k-purple-dark text-k3k-purple-neon',
          'shadow-purple-glow animate-neon-glow',
          'hover:bg-k3k-purple hover:text-k3k-white',
          'relative overflow-hidden'
        ],
        
        // === NEW DROP ===
        new: [
          'border-k3k-electric-neon bg-k3k-electric text-k3k-white',
          'shadow-cyan-glow',
          'hover:animate-lean-wave',
          'animate-bounce'
        ],
        
        // === SALE/DESCUENTO ===
        sale: [
          'border-k3k-pink-neon bg-k3k-pink text-k3k-white',
          'shadow-pink-glow animate-psychedelic-pulse',
          'hover:scale-110 hover:animate-color-shift'
        ],
        
        // === VIP MEMBERS ===
        vip: [
          'border-k3k-gold-neon bg-plasma text-k3k-white',
          'shadow-multicolor-glow',
          'hover:animate-plasma-flow',
          'font-black tracking-widest'
        ],
        
        // === ARTIST COLLECTION ===
        artist: [
          'border-k3k-purple bg-deep-trip text-k3k-purple-neon',
          'shadow-trip-shadow',
          'hover:shadow-plasma-deep hover:text-k3k-gold',
          'animate-color-shift'
        ]
      },
      
      size: {
        sm: 'text-[10px] px-2 py-0.5 h-5',
        md: 'text-xs px-2.5 py-0.5 h-6',
        lg: 'text-sm px-3 py-1 h-7',
        xl: 'text-base px-4 py-1.5 h-8 font-black'
      }
    },
    
    defaultVariants: {
      variant: 'default',
      size: 'md'
    }
  }
)

// ===== K3K BADGE PROPS =====
interface K3kBadgeProps 
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  children: React.ReactNode
  pulse?: boolean // Efecto pulse personalizado
  glow?: boolean // Efecto glow extra
}

// ===== BADGE COMPONENT =====
const Badge = React.forwardRef<HTMLDivElement, K3kBadgeProps>(
  ({ className, variant, size, children, pulse = false, glow = false, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          badgeVariants({ variant, size }),
          // Efectos adicionales
          pulse && 'animate-pulse',
          glow && 'animate-neon-glow',
          className
        )}
        {...props}
      >
        {children}
        
        {/* EFECTO ESPECIAL PARA LIMITED */}
        {variant === 'limited' && (
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-slide opacity-0 hover:opacity-100 transition-opacity duration-500" />
        )}
        
        {/* EFECTO ESPECIAL PARA VIP */}
        {variant === 'vip' && (
          <div className="absolute -inset-1 bg-gradient-to-r from-k3k-gold via-k3k-purple to-k3k-gold rounded-full opacity-30 blur animate-spin-slow" />
        )}
      </div>
    )
  }
)

Badge.displayName = 'Badge'

// ===== BADGES PREDEFINIDOS PARA K3K MAFIA =====
export const K3kBadges = {
  // Colección Lean
  LeanDreams: ({ className, ...props }: Omit<K3kBadgeProps, 'variant' | 'children'>) => (
    <Badge variant="lean" className={className} {...props}>
      LEAN
    </Badge>
  ),
  
  // Trip Psicodélico  
  AcidTrip: ({ className, ...props }: Omit<K3kBadgeProps, 'variant' | 'children'>) => (
    <Badge variant="acid" className={className} {...props}>
         ACID
    </Badge>
  ),
  
  // Mafia Gold
  MafiaGold: ({ className, ...props }: Omit<K3kBadgeProps, 'variant' | 'children'>) => (
    <Badge variant="gold" className={className} {...props}>
      MAFIA
    </Badge>
  ),
  
  // Energy Drink
  EnergyDrink: ({ className, ...props }: Omit<K3kBadgeProps, 'variant' | 'children'>) => (
    <Badge variant="energy" className={className} {...props}>
       ENERGY
    </Badge>
  ),
  
  // Trip Collection
  TripCollection: ({ className, ...props }: Omit<K3kBadgeProps, 'variant' | 'children'>) => (
    <Badge variant="trip" className={className} {...props}>
       TRIP
    </Badge>
  ),
  
  // Edición Limitada
  Limited: ({ className, ...props }: Omit<K3kBadgeProps, 'variant' | 'children'>) => (
    <Badge variant="limited" className={className} {...props}>
       LIMITED
    </Badge>
  ),
  
  // Nuevo Drop
  NewDrop: ({ className, ...props }: Omit<K3kBadgeProps, 'variant' | 'children'>) => (
    <Badge variant="new" className={className} {...props}>
       NEW
    </Badge>
  ),
  
  // En Oferta
  OnSale: ({ discount }: { discount: number }) => (
    <Badge variant="sale">
       -{discount}%
    </Badge>
  ),
  
  // VIP Access
  VipAccess: ({ className, ...props }: Omit<K3kBadgeProps, 'variant' | 'children'>) => (
    <Badge variant="vip" className={className} {...props}>
       VIP
    </Badge>
  ),
  
  // Colección Artista
  ArtistCollection: ({ className, ...props }: Omit<K3kBadgeProps, 'variant' | 'children'>) => (
    <Badge variant="artist" className={className} {...props}>
       SNOK
    </Badge>
  ),
  
  // K3K MAFIA
  K3kMafia: ({ className, ...props }: Omit<K3kBadgeProps, 'variant' | 'children'>) => (
    <Badge variant="trip" size="lg" className={className} {...props}>
      K3K MAFIA
    </Badge>
  ),
  
  // Agotado
  SoldOut: ({ className, ...props }: Omit<K3kBadgeProps, 'variant' | 'children'>) => (
    <Badge variant="default" className={cn('opacity-60', className)} {...props}>
       AGOTADO
    </Badge>
  )
}

export { Badge, badgeVariants }
export type { K3kBadgeProps }