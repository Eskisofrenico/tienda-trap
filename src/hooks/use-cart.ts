// ===== K3K MAFIA - CART HOOK =====
'use client'

import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { devtools } from 'zustand/middleware'
import toast from 'react-hot-toast'
import type { Product, CartItem, ProductSize, ProductColor } from '@/types'
import { 
  generateCartItemId, 
  calculateCartTotal, 
  isOutOfStock,
  getColorDisplayName,
  generateTripText,
  formatPrice 
} from '@/lib/utils'

// ===== CART STORE INTERFACE =====
interface CartStore {
  // ===== STATE =====
  items: CartItem[]
  isOpen: boolean
  isLoading: boolean
  
  // ===== COMPUTED VALUES =====
  itemCount: number
  subtotal: number
  discount: number
  total: number
  
  // ===== MAIN ACTIONS =====
  addItem: (
    product: Product, 
    selectedSize?: ProductSize, 
    selectedColor?: ProductColor
  ) => Promise<void>
  removeItem: (itemId: string) => void
  updateQuantity: (itemId: string, quantity: number) => void
  clearCart: () => void
  
  // ===== UI ACTIONS =====
  openCart: () => void
  closeCart: () => void
  toggleCart: () => void
  
  // ===== UTILITY FUNCTIONS =====
  getItem: (itemId: string) => CartItem | undefined
  hasProduct: (productId: string, size?: ProductSize, color?: ProductColor) => boolean
  getProductQuantity: (productId: string, size?: ProductSize, color?: ProductColor) => number
  getTotalUniqueItems: () => number
  
  // ===== INTERNAL HELPERS =====
  _recalculateTotals: () => void
  _showSuccessToast: (message: string) => void
  _showErrorToast: (message: string) => void
}

// ===== CART STORE IMPLEMENTATION =====
export const useCart = create<CartStore>()(
  devtools(
    persist(
      (set, get) => ({
        // ===== INITIAL STATE =====
        items: [],
        isOpen: false,
        isLoading: false,
        itemCount: 0,
        subtotal: 0,
        discount: 0,
        total: 0,

        // ===== MAIN ACTIONS =====
        addItem: async (product: Product, selectedSize?: ProductSize, selectedColor?: ProductColor) => {
          set({ isLoading: true })
          
          try {
            const state = get()
            
            // ===== VALIDACIONES =====
            if (isOutOfStock(product)) {
              state._showErrorToast('❌ Producto agotado en esta dimensión')
              return
            }
            
            // Validar talla requerida
            if (product.sizes && product.sizes.length > 0 && !selectedSize) {
              state._showErrorToast('🎯 Selecciona una talla para continuar el trip')
              return
            }
            
            // Validar color requerido
            if (product.colors && product.colors.length > 0 && !selectedColor) {
              state._showErrorToast('🌈 Elige un color psicodélico')
              return
            }
            
            // ===== VERIFICAR SI YA EXISTE =====
            const existingItem = state.items.find(item => 
              item.product.id === product.id &&
              item.selectedSize === selectedSize &&
              item.selectedColor === selectedColor
            )
            
            if (existingItem) {
              // Incrementar cantidad del item existente
              state.updateQuantity(existingItem.id, existingItem.quantity + 1)
              return
            }
            
            // ===== CREAR NUEVO ITEM =====
            const newItem: CartItem = {
              id: generateCartItemId(product.id, selectedSize, selectedColor),
              product,
              quantity: 1,
              selectedSize,
              selectedColor
            }
            
            // Agregar al carrito
            set(state => ({
              items: [...state.items, newItem],
              isOpen: true // Abrir carrito automáticamente
            }))
            
            // Recalcular totales
            get()._recalculateTotals()
            
            // ===== MOSTRAR MENSAJE DE ÉXITO =====
            const colorText = selectedColor ? ` ${getColorDisplayName(selectedColor)}` : ''
            const sizeText = selectedSize ? ` Talla ${selectedSize}` : ''
            const successMessage = generateTripText(`${product.name}${colorText}${sizeText} agregado al carrito`)
            
            state._showSuccessToast(successMessage)
            
          } catch (error) {
            console.error('Error adding item to cart:', error)
            get()._showErrorToast('💥 Error en la matrix. Intenta de nuevo')
          } finally {
            set({ isLoading: false })
          }
        },

        removeItem: (itemId: string) => {
          const state = get()
          const item = state.getItem(itemId)
          
          if (!item) return
          
          set(state => ({
            items: state.items.filter(i => i.id !== itemId)
          }))
          
          // Recalcular totales
          get()._recalculateTotals()
          
          // Mostrar mensaje
          const message = `🗑️ ${item.product.name} removido del carrito`
          get()._showSuccessToast(message)
        },

        updateQuantity: (itemId: string, quantity: number) => {
          // Si la cantidad es 0 o menor, remover item
          if (quantity <= 0) {
            get().removeItem(itemId)
            return
          }
          
          const state = get()
          const item = state.getItem(itemId)
          
          if (!item) return
          
          // Verificar stock disponible (si está definido)
          // En una implementación real, aquí verificarías el stock real
          const maxQuantity = 10 // Límite por seguridad
          const finalQuantity = Math.min(quantity, maxQuantity)
          
          if (finalQuantity !== quantity) {
            state._showErrorToast(`⚠️ Máximo ${maxQuantity} unidades por producto`)
          }
          
          set(state => ({
            items: state.items.map(i =>
              i.id === itemId ? { ...i, quantity: finalQuantity } : i
            )
          }))
          
          // Recalcular totales
          get()._recalculateTotals()
        },

        clearCart: () => {
          set({
            items: [],
            itemCount: 0,
            subtotal: 0,
            discount: 0,
            total: 0,
            isOpen: false
          })
          
          get()._showSuccessToast('🧹 Carrito limpiado. Listo para un nuevo trip')
        },

        // ===== UI ACTIONS =====
        openCart: () => set({ isOpen: true }),
        closeCart: () => set({ isOpen: false }),
        toggleCart: () => set(state => ({ isOpen: !state.isOpen })),

        // ===== UTILITY FUNCTIONS =====
        getItem: (itemId: string) => {
          return get().items.find(item => item.id === itemId)
        },

        hasProduct: (productId: string, size?: ProductSize, color?: ProductColor) => {
          const items = get().items
          
          if (!size && !color) {
            return items.some(item => item.product.id === productId)
          }
          
          return items.some(item => 
            item.product.id === productId &&
            item.selectedSize === size &&
            item.selectedColor === color
          )
        },

        getProductQuantity: (productId: string, size?: ProductSize, color?: ProductColor) => {
          const items = get().items
          
          if (!size && !color) {
            return items
              .filter(item => item.product.id === productId)
              .reduce((total, item) => total + item.quantity, 0)
          }
          
          const item = items.find(item => 
            item.product.id === productId &&
            item.selectedSize === size &&
            item.selectedColor === color
          )
          
          return item?.quantity || 0
        },

        getTotalUniqueItems: () => {
          return get().items.length
        },

        // ===== INTERNAL HELPERS =====
        _recalculateTotals: () => {
          const items = get().items
          const calculations = calculateCartTotal(items)
          
          set({
            itemCount: calculations.itemCount,
            subtotal: calculations.subtotal,
            discount: calculations.discount,
            total: calculations.total
          })
        },

        _showSuccessToast: (message: string) => {
          toast.success(message, {
            duration: 3000,
            style: {
              background: 'linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)',
              color: 'white',
              border: '1px solid rgba(139, 92, 246, 0.3)',
              borderRadius: '12px',
              fontSize: '14px',
              fontWeight: '500'
            },
            iconTheme: {
              primary: '#FFFFFF',
              secondary: '#8B5CF6'
            }
          })
        },

        _showErrorToast: (message: string) => {
          toast.error(message, {
            duration: 4000,
            style: {
              background: 'linear-gradient(135deg, #EF4444 0%, #DC2626 100%)',
              color: 'white',
              border: '1px solid rgba(239, 68, 68, 0.3)',
              borderRadius: '12px',
              fontSize: '14px',
              fontWeight: '500'
            },
            iconTheme: {
              primary: '#FFFFFF',
              secondary: '#EF4444'
            }
          })
        }
      }),
      {
        name: 'k3k-mafia-cart',
        storage: createJSONStorage(() => localStorage),
        version: 2,
        
        // ===== PERSIST CONFIG =====
        partialize: (state) => ({
          items: state.items,
          // No persistir UI state (isOpen, isLoading)
        }),
        
        // ===== MIGRATION =====
        migrate: (persistedState: any, version: number) => {
          // Migrar de versiones anteriores si es necesario
          if (version === 1) {
            // Lógica de migración aquí
            return {
              ...persistedState,
              // Nuevos campos o transformaciones
            }
          }
          return persistedState as Partial<CartStore>
        },
        
        // ===== REHYDRATION =====
        onRehydrateStorage: () => (state) => {
          // Recalcular totales después de cargar desde localStorage
          if (state) {
            state._recalculateTotals()
          }
        }
      }
    ),
    {
      name: 'k3k-cart-store',
      enabled: process.env.NODE_ENV === 'development'
    }
  )
)

// ===== CUSTOM HOOKS DERIVADOS =====

/**
 * Hook para verificar si un producto específico está en el carrito
 */
export const useCartItem = (
  productId: string, 
  size?: ProductSize, 
  color?: ProductColor
) => {
  const { items, hasProduct, getProductQuantity } = useCart()
  
  const isInCart = hasProduct(productId, size, color)
  const quantity = getProductQuantity(productId, size, color)
  
  const item = items.find(item => 
    item.product.id === productId &&
    item.selectedSize === size &&
    item.selectedColor === color
  )
  
  return {
    item,
    isInCart,
    quantity
  }
}

/**
 * Hook para estadísticas del carrito
 */
export const useCartStats = () => {
  const { items, itemCount, subtotal, discount, total } = useCart()
  
  const uniqueProducts = items.length
  const averageItemPrice = itemCount > 0 ? subtotal / itemCount : 0
  const discountPercentage = subtotal > 0 ? Math.round((discount / subtotal) * 100) : 0
  const isEmpty = items.length === 0
  
  // Calcular envío gratis (ejemplo: gratis sobre $60.000)
  const freeShippingThreshold = 60000
  const qualifiesForFreeShipping = total >= freeShippingThreshold
  const amountForFreeShipping = Math.max(0, freeShippingThreshold - total)
  
  return {
    uniqueProducts,
    totalItems: itemCount,
    averageItemPrice,
    discountPercentage,
    subtotal,
    discount,
    total,
    isEmpty,
    qualifiesForFreeShipping,
    amountForFreeShipping,
    freeShippingThreshold
  }
}

/**
 * Hook para acciones rápidas del carrito
 */
export const useQuickCart = () => {
  const { addItem, removeItem, updateQuantity, clearCart, isLoading } = useCart()
  
  const quickAdd = async (product: Product) => {
    // Agregar con primeras opciones disponibles
    const size = product.sizes?.[0]
    const color = product.colors?.[0]
    
    await addItem(product, size, color)
  }
  
  const incrementQuantity = (itemId: string, currentQuantity: number) => {
    updateQuantity(itemId, currentQuantity + 1)
  }
  
  const decrementQuantity = (itemId: string, currentQuantity: number) => {
    updateQuantity(itemId, Math.max(0, currentQuantity - 1))
  }
  
  return {
    quickAdd,
    removeItem,
    incrementQuantity,
    decrementQuantity,
    clearCart,
    isLoading
  }
}

/**
 * Hook para formatear información del carrito
 */
export const useCartFormatted = () => {
  const stats = useCartStats()
  
  return {
    ...stats,
    subtotalFormatted: formatPrice(stats.subtotal),
    discountFormatted: formatPrice(stats.discount),
    totalFormatted: formatPrice(stats.total),
    amountForFreeShippingFormatted: formatPrice(stats.amountForFreeShipping),
    freeShippingThresholdFormatted: formatPrice(stats.freeShippingThreshold)
  }
}

// ===== EXPORT TYPES =====
export type { CartStore }