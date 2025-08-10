/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      // ===== COLORES K3K MAFIA PSICODÉLICOS =====
      colors: {
        k3k: {
          // Principales
          'purple': '#8B5CF6',      // Morado trap (lean/jarabe)
          'purple-dark': '#6B21A8', // Morado oscuro (deep lean)
          'purple-neon': '#A855F7', // Morado neón brillante
          
          'gold': '#F59E0B',        // Dorado principal
          'gold-neon': '#FCD34D',   // Dorado neón
          'gold-dark': '#D97706',   // Dorado oscuro
          
          // Acentos psicodélicos
          'pink': '#EC4899',        // Rosa trip
          'pink-neon': '#F472B6',   // Rosa neón intenso
          
          'cyan': '#06B6D4',        // Cyan psicodélico
          'cyan-neon': '#22D3EE',   // Cyan brillante
          
          'lime': '#65F563',        // Verde neón (pila/energy)
          'lime-neon': '#84CC16',   // Verde lima brillante
          
          'electric': '#3B82F6',    // Azul eléctrico
          'electric-neon': '#60A5FA', // Azul neón
          
          // Bases
          'black': '#000000',       // Negro profundo
          'black-trip': '#1A1A1A',  // Negro con efecto
          'white': '#FFFFFF',       // Blanco puro
          'white-trip': '#F8FAFC',  // Blanco con efecto
          
          // Efectos especiales
          'shadow': '#4C1D95',      // Sombra morada
          'glow': '#A855F7',        // Brillo psicodélico
          'acid': '#FACC15',        // Amarillo ácido (LSD)
          'plasma': '#E879F9'       // Rosa plasma
        }
      },
      
      // ===== GRADIENTES PSICODÉLICOS =====
      backgroundImage: {
        // Gradientes principales
        'lean': 'linear-gradient(135deg, #8B5CF6 0%, #6B21A8 100%)',
        'gold-shine': 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
        'trip': 'linear-gradient(135deg, #8B5CF6 0%, #EC4899 50%, #F59E0B 100%)',
        'acid': 'linear-gradient(45deg, #65F563 0%, #06B6D4 50%, #EC4899 100%)',
        'plasma': 'radial-gradient(circle, #A855F7 0%, #EC4899 50%, #F59E0B 100%)',
        'neon-rainbow': 'linear-gradient(90deg, #22D3EE 0%, #A855F7 25%, #EC4899 50%, #F59E0B 75%, #65F563 100%)',
        'deep-trip': 'linear-gradient(180deg, #000000 0%, #6B21A8 50%, #8B5CF6 100%)',
        'energy-drink': 'linear-gradient(135deg, #65F563 0%, #22D3EE 100%)',
        
        // Patrones psicodélicos
        'psychedelic-waves': `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%238B5CF6' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-11 9-20 20-20s20 9 20 20-9 20-20 20-20-9-20-20zm20 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        'acid-dots': `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23EC4899' fill-opacity='0.15'%3E%3Ccircle cx='20' cy='20' r='3'/%3E%3Ccircle cx='10' cy='10' r='2'/%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3Ccircle cx='10' cy='30' r='1.5'/%3E%3Ccircle cx='30' cy='10' r='1.5'/%3E%3C/g%3E%3C/svg%3E")`,
        'neon-grid': `url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg stroke='%2365F563' stroke-width='1' stroke-opacity='0.2'%3E%3Cpath d='M0 15h30M15 0v30'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      },
      
      // ===== ANIMACIONES PSICODÉLICAS =====
      animation: {
        // Efectos trap
        'psychedelic-pulse': 'psychedelicPulse 2s ease-in-out infinite alternate',
        'neon-glow': 'neonGlow 3s ease-in-out infinite',
        'acid-trip': 'acidTrip 4s linear infinite',
        'lean-wave': 'leanWave 3s ease-in-out infinite',
        'energy-burst': 'energyBurst 1.5s ease-in-out infinite',
        'plasma-flow': 'plasmaFlow 2.5s linear infinite',
        'gold-shimmer': 'goldShimmer 2s ease-in-out infinite',
        'trip-rotation': 'tripRotation 8s linear infinite',
        'color-shift': 'colorShift 3s ease-in-out infinite',
        'glitch-effect': 'glitchEffect 0.5s ease-in-out infinite',
      },
      
      keyframes: {
        // Animaciones psicodélicas
        psychedelicPulse: {
          '0%, 100%': { 
            transform: 'scale(1)', 
            filter: 'hue-rotate(0deg) saturate(1)' 
          },
          '50%': { 
            transform: 'scale(1.05)', 
            filter: 'hue-rotate(180deg) saturate(1.5)' 
          },
        },
        neonGlow: {
          '0%, 100%': { 
            boxShadow: '0 0 20px #8B5CF6, 0 0 40px #8B5CF6, 0 0 60px #8B5CF6' 
          },
          '50%': { 
            boxShadow: '0 0 30px #EC4899, 0 0 60px #EC4899, 0 0 90px #EC4899' 
          },
        },
        acidTrip: {
          '0%': { 
            filter: 'hue-rotate(0deg) brightness(1) contrast(1)' 
          },
          '25%': { 
            filter: 'hue-rotate(90deg) brightness(1.2) contrast(1.5)' 
          },
          '50%': { 
            filter: 'hue-rotate(180deg) brightness(0.8) contrast(2)' 
          },
          '75%': { 
            filter: 'hue-rotate(270deg) brightness(1.1) contrast(1.2)' 
          },
          '100%': { 
            filter: 'hue-rotate(360deg) brightness(1) contrast(1)' 
          },
        },
        leanWave: {
          '0%, 100%': { 
            transform: 'translateY(0px) rotate(0deg)',
            opacity: '0.8' 
          },
          '50%': { 
            transform: 'translateY(-10px) rotate(2deg)',
            opacity: '1' 
          },
        },
        energyBurst: {
          '0%': { 
            transform: 'scale(1)',
            boxShadow: '0 0 0 rgba(101, 245, 99, 0.7)' 
          },
          '50%': { 
            transform: 'scale(1.1)',
            boxShadow: '0 0 20px rgba(101, 245, 99, 0.9)' 
          },
          '100%': { 
            transform: 'scale(1)',
            boxShadow: '0 0 0 rgba(101, 245, 99, 0.7)' 
          },
        },
        plasmaFlow: {
          '0%': { 
            backgroundPosition: '0% 50%' 
          },
          '50%': { 
            backgroundPosition: '100% 50%' 
          },
          '100%': { 
            backgroundPosition: '0% 50%' 
          },
        },
        goldShimmer: {
          '0%': { 
            backgroundPosition: '-200% 0' 
          },
          '100%': { 
            backgroundPosition: '200% 0' 
          },
        },
        tripRotation: {
          '0%': { 
            transform: 'rotate(0deg) scale(1)' 
          },
          '25%': { 
            transform: 'rotate(90deg) scale(1.1)' 
          },
          '50%': { 
            transform: 'rotate(180deg) scale(1)' 
          },
          '75%': { 
            transform: 'rotate(270deg) scale(1.1)' 
          },
          '100%': { 
            transform: 'rotate(360deg) scale(1)' 
          },
        },
        colorShift: {
          '0%': { 
            color: '#8B5CF6' 
          },
          '33%': { 
            color: '#EC4899' 
          },
          '66%': { 
            color: '#F59E0B' 
          },
          '100%': { 
            color: '#8B5CF6' 
          },
        },
        glitchEffect: {
          '0%': { 
            transform: 'translate(0)' 
          },
          '20%': { 
            transform: 'translate(-2px, 2px)' 
          },
          '40%': { 
            transform: 'translate(-2px, -2px)' 
          },
          '60%': { 
            transform: 'translate(2px, 2px)' 
          },
          '80%': { 
            transform: 'translate(2px, -2px)' 
          },
          '100%': { 
            transform: 'translate(0)' 
          },
        },
      },
      
      // ===== SOMBRAS PSICODÉLICAS =====
      boxShadow: {
        'purple-glow': '0 0 20px rgba(139, 92, 246, 0.6)',
        'gold-glow': '0 0 20px rgba(245, 158, 11, 0.6)',
        'pink-glow': '0 0 20px rgba(236, 72, 153, 0.6)',
        'cyan-glow': '0 0 20px rgba(34, 211, 238, 0.6)',
        'lime-glow': '0 0 20px rgba(101, 245, 99, 0.6)',
        'multicolor-glow': '0 0 30px rgba(139, 92, 246, 0.4), 0 0 60px rgba(236, 72, 153, 0.3), 0 0 90px rgba(245, 158, 11, 0.2)',
        'acid-shadow': '0 10px 25px rgba(236, 72, 153, 0.3), 0 20px 40px rgba(139, 92, 246, 0.2)',
        'neon-border': 'inset 0 0 20px rgba(101, 245, 99, 0.5), 0 0 20px rgba(101, 245, 99, 0.5)',
        'plasma-deep': '0 20px 40px rgba(232, 121, 249, 0.4), 0 30px 60px rgba(139, 92, 246, 0.3)',
        'trip-shadow': '0 0 50px rgba(139, 92, 246, 0.3), 0 0 100px rgba(236, 72, 153, 0.2), 0 0 150px rgba(245, 158, 11, 0.1)',
      },
      
      // ===== TIPOGRAFÍA TRAP =====
      fontFamily: {
        'trap': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Inter', 'system-ui', 'sans-serif'],
        'psychedelic': ['Inter', 'system-ui', 'sans-serif'],
      },
      
      // ===== FILTROS ESPECIALES =====
      backdropBlur: {
        'psychedelic': '20px',
      },
      
      // ===== ESPACIADO ESPECIAL =====
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
    },
  },
  plugins: [
    // Plugin personalizado para K3K MAFIA PSICODÉLICO
    function({ addUtilities, addComponents }) {
      const psychedelicUtilities = {
        // Textos con efectos
        '.text-lean-gradient': {
          background: 'linear-gradient(135deg, #8B5CF6 0%, #6B21A8 100%)',
          backgroundSize: '200% 100%',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          animation: 'goldShimmer 3s linear infinite',
        },
        '.text-trip-gradient': {
          background: 'linear-gradient(135deg, #8B5CF6 0%, #EC4899 50%, #F59E0B 100%)',
          backgroundSize: '300% 100%',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          animation: 'plasmaFlow 4s linear infinite',
        },
        '.text-acid-glow': {
          color: '#65F563',
          textShadow: '0 0 10px #65F563, 0 0 20px #65F563, 0 0 30px #65F563',
          animation: 'psychedelicPulse 2s ease-in-out infinite alternate',
        },
        '.text-neon-flicker': {
          animation: 'colorShift 3s ease-in-out infinite',
          textShadow: '0 0 10px currentColor',
        },
        
        // Backgrounds psicodélicos
        '.bg-lean-trip': {
          background: 'linear-gradient(135deg, #8B5CF6 0%, #6B21A8 100%)',
          backgroundSize: '400% 400%',
          animation: 'plasmaFlow 8s ease infinite',
        },
        '.bg-acid-pattern': {
          background: `
            radial-gradient(circle at 25% 25%, #EC4899 0%, transparent 25%),
            radial-gradient(circle at 75% 75%, #65F563 0%, transparent 25%),
            radial-gradient(circle at 50% 50%, #8B5CF6 0%, transparent 25%),
            #000000
          `,
          backgroundSize: '60px 60px',
          animation: 'tripRotation 20s linear infinite',
        },
        '.bg-neon-grid': {
          background: `
            linear-gradient(90deg, transparent 49%, #65F563 50%, transparent 51%),
            linear-gradient(180deg, transparent 49%, #EC4899 50%, transparent 51%)
          `,
          backgroundSize: '20px 20px',
          opacity: '0.1',
        },
        '.bg-plasma-flow': {
          background: 'radial-gradient(circle, #A855F7 0%, #EC4899 50%, #F59E0B 100%)',
          backgroundSize: '400% 400%',
          animation: 'plasmaFlow 6s ease infinite',
        },
        
        // Efectos especiales
        '.psychedelic-border': {
          border: '2px solid transparent',
          backgroundImage: 'linear-gradient(135deg, #8B5CF6, #EC4899, #F59E0B)',
          backgroundClip: 'padding-box',
          borderImage: 'linear-gradient(135deg, #8B5CF6, #EC4899, #F59E0B) 1',
        },
        '.glitch-text': {
          position: 'relative',
          animation: 'glitchEffect 2s infinite',
        },
        '.holographic': {
          background: 'linear-gradient(45deg, #8B5CF6, #EC4899, #F59E0B, #65F563, #22D3EE)',
          backgroundSize: '300% 300%',
          animation: 'plasmaFlow 3s ease infinite',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        },
      }
      
      const psychedelicComponents = {
        '.btn-lean': {
          background: 'linear-gradient(135deg, #8B5CF6 0%, #6B21A8 100%)',
          color: 'white',
          padding: '12px 24px',
          borderRadius: '12px',
          border: 'none',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          boxShadow: '0 0 20px rgba(139, 92, 246, 0.4)',
          '&:hover': {
            transform: 'translateY(-2px) scale(1.05)',
            boxShadow: '0 10px 30px rgba(139, 92, 246, 0.6)',
            animation: 'psychedelicPulse 1s ease-in-out infinite alternate',
          },
        },
        '.btn-trip': {
          background: 'linear-gradient(135deg, #8B5CF6 0%, #EC4899 50%, #F59E0B 100%)',
          backgroundSize: '200% 100%',
          color: 'white',
          padding: '12px 24px',
          borderRadius: '12px',
          border: 'none',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          animation: 'plasmaFlow 3s linear infinite',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 0 40px rgba(236, 72, 153, 0.6)',
          },
        },
        '.card-psychedelic': {
          background: 'rgba(0, 0, 0, 0.8)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(139, 92, 246, 0.3)',
          borderRadius: '16px',
          boxShadow: '0 0 30px rgba(139, 92, 246, 0.2)',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0 20px 40px rgba(139, 92, 246, 0.4)',
            borderColor: 'rgba(236, 72, 153, 0.5)',
          },
        },
      }
      
      addUtilities(psychedelicUtilities)
      addComponents(psychedelicComponents)
    }
  ],
}

module.exports = config