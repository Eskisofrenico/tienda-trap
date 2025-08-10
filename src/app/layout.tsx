// ===== K3K MAFIA - ROOT LAYOUT OPTIMIZADO =====
// Layout principal con contenedores optimizados y mejores prácticas
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Toaster } from 'react-hot-toast'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CartWidget from '@/components/CartWidget'
import { BRAND_INFO } from '@/lib/constants'
import './globals.css'

// ===== FONT CONFIGURATION OPTIMIZADA =====
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
  preload: true,
})

// ===== METADATA OPTIMIZADA =====
export const metadata: Metadata = {
  title: {
    default: 'K3K MAFIA | Streetwear Psicodélico Trap - KONS3002.MAFIA',
    template: '%s | K3K MAFIA'
  },
  description: 'Streetwear psicodélico inspirado en KONS3002.MAFIA y la cultura trap de Lota, BioBío. Hoodies lean, camisetas acid trip, cadenas gold y más. Join The K3K.',
  keywords: [
    'K3K MAFIA',
    'KONS3002.MAFIA',
    'streetwear Chile',
    'trap psicodélico',
    'lean hoodies',
    'acid trip',
    'Lota BioBío',
    'ropa urbana',
    'cadenas gold',
    'underground Chile',
    'trap fashion',
    'streetwear psicodélico'
  ],
  authors: [{ name: 'K3K MAFIA', url: 'https://k3kmafia.com' }],
  creator: 'K3K MAFIA',
  publisher: 'K3K MAFIA',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://k3kmafia.com'),
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'es_CL',
    url: '/',
    title: 'K3K MAFIA | Streetwear Psicodélico Trap',
    description: 'Streetwear psicodélico inspirado en KONS3002.MAFIA y la cultura trap de Lota, BioBío. Join The K3K.',
    siteName: BRAND_INFO.name,
    images: [{
      url: '/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'K3K MAFIA - Streetwear Psicodélico Inspirado en KONS3002.MAFIA',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'K3K MAFIA | Streetwear Psicodélico Trap',
    description: 'Streetwear psicodélico inspirado en KONS3002.MAFIA y la cultura trap. Join The K3K.',
    images: ['/og-image.jpg'],
    creator: '@k3kmafia',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    other: [{
      rel: 'mask-icon',
      url: '/safari-pinned-tab.svg',
      color: '#8B5CF6',
    }],
  },
  manifest: '/site.webmanifest',
  category: 'fashion',
}

// ===== VIEWPORT OPTIMIZADO =====
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#8B5CF6' },
    { media: '(prefers-color-scheme: dark)', color: '#8B5CF6' },
  ],
}

// ===== ROOT LAYOUT COMPONENT OPTIMIZADO =====
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html 
      lang="es" 
      className={`${inter.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        {/* Preload crítico optimizado */}
        <link
          rel="preload"
          href="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        
        {/* DNS Prefetch optimizado */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="dns-prefetch" href="//cdnjs.cloudflare.com" />
        
        {/* Meta tags adicionales optimizados */}
        <meta name="application-name" content="K3K MAFIA" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="K3K MAFIA" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#8B5CF6" />
        <meta name="msapplication-tap-highlight" content="no" />
        
        {/* Structured Data optimizado */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ClothingStore',
              name: 'K3K MAFIA',
              description: 'Streetwear psicodélico inspirado en KONS3002.MAFIA y la cultura trap de Lota, BioBío.',
              url: process.env.NEXT_PUBLIC_SITE_URL || 'https://k3kmafia.com',
              logo: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://k3kmafia.com'}/logo.png`,
              image: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://k3kmafia.com'}/og-image.jpg`,
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Lota',
                addressRegion: 'Región del BioBío',
                addressCountry: 'CL',
              },
              sameAs: [
                'https://instagram.com/kons3002.mafia',
                'https://open.spotify.com/intl-es/artist/0uqbA1Ha51U8XL9AD5IJzR',
              ],
              brand: {
                '@type': 'Brand',
                name: 'K3K MAFIA',
                logo: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://k3kmafia.com'}/logo.png`,
                description: 'Marca de streetwear psicodélico inspirada en la cultura trap',
              },
              founder: {
                '@type': 'Person',
                name: 'KONS3002.MAFIA',
                description: 'Artista de trap de 21 años originario de Lota, BioBío',
              },
              offers: {
                '@type': 'AggregateOffer',
                priceCurrency: 'CLP',
                lowPrice: '45990',
                highPrice: '149990',
                availability: 'https://schema.org/InStock',
                url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://k3kmafia.com'}/productos`,
              },
              potentialAction: {
                '@type': 'SearchAction',
                target: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://k3kmafia.com'}/productos?search={search_term_string}`,
                'query-input': 'required name=search_term_string',
              },
            }),
          }}
        />
      </head>
      
      <body 
        className={`${inter.className} bg-k3k-black text-k3k-white antialiased overflow-x-hidden min-h-screen-safe`}
        suppressHydrationWarning
      >
        {/* EFECTOS DE FONDO GLOBALES OPTIMIZADOS */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
          {/* Gradiente base más sutil */}
          <div className="absolute inset-0 bg-gradient-to-br from-k3k-black via-k3k-black-trip to-k3k-purple-dark/5" />
          
          {/* Partículas flotantes reducidas y optimizadas */}
          <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-k3k-purple rounded-full animate-ping opacity-20" 
               style={{ animationDelay: '0s', animationDuration: '4s' }} />
          <div className="absolute top-3/4 right-1/3 w-0.5 h-0.5 bg-k3k-gold rounded-full animate-pulse opacity-15" 
               style={{ animationDelay: '1s', animationDuration: '3s' }} />
          <div className="absolute bottom-1/4 left-1/2 w-1 h-1 bg-k3k-pink rounded-full animate-bounce opacity-10" 
               style={{ animationDelay: '2s', animationDuration: '5s' }} />
          
          {/* Efectos de luz ambiental más sutiles */}
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-k3k-purple/3 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-k3k-gold/3 to-transparent" />
        </div>

        {/* LAYOUT PRINCIPAL OPTIMIZADO */}
        <div className="relative z-10 min-h-screen-safe flex flex-col">
          
          {/* HEADER FIJO */}
          <Header fixed />
          
          {/* MAIN CONTENT CON CONTENEDOR OPTIMIZADO */}
          <main className="flex-grow">
            <div className="w-full">
              {children}
            </div>
          </main>
          
          {/* FOOTER */}
          <Footer />
        </div>

        {/* CARRITO WIDGET */}
        <CartWidget />

        {/* TOAST NOTIFICATIONS OPTIMIZADAS */}
        <Toaster
          position="bottom-right"
          reverseOrder={false}
          gutter={12}
          containerClassName="toast-container"
          containerStyle={{
            bottom: 24,
            right: 24,
            zIndex: 'var(--z-toast)',
          }}
          toastOptions={{
            duration: 4000,
            style: {
              background: 'linear-gradient(135deg, rgba(26, 26, 26, 0.95) 0%, rgba(139, 92, 246, 0.15) 100%)',
              backdropFilter: 'blur(20px)',
              color: '#FFFFFF',
              border: '1px solid rgba(139, 92, 246, 0.3)',
              borderRadius: '12px',
              fontSize: '14px',
              fontWeight: '500',
              padding: '16px 20px',
              maxWidth: '400px',
              boxShadow: '0 10px 25px rgba(139, 92, 246, 0.2), 0 4px 6px rgba(0, 0, 0, 0.1)',
            },
            success: {
              iconTheme: {
                primary: '#65F563',
                secondary: '#FFFFFF',
              },
              style: {
                background: 'linear-gradient(135deg, rgba(26, 26, 26, 0.95) 0%, rgba(101, 245, 99, 0.15) 100%)',
                border: '1px solid rgba(101, 245, 99, 0.3)',
                boxShadow: '0 10px 25px rgba(101, 245, 99, 0.2), 0 4px 6px rgba(0, 0, 0, 0.1)',
              },
            },
            error: {
              iconTheme: {
                primary: '#EC4899',
                secondary: '#FFFFFF',
              },
              style: {
                background: 'linear-gradient(135deg, rgba(26, 26, 26, 0.95) 0%, rgba(236, 72, 153, 0.15) 100%)',
                border: '1px solid rgba(236, 72, 153, 0.3)',
                boxShadow: '0 10px 25px rgba(236, 72, 153, 0.2), 0 4px 6px rgba(0, 0, 0, 0.1)',
              },
            },
            loading: {
              iconTheme: {
                primary: '#F59E0B',
                secondary: '#FFFFFF',
              },
              style: {
                background: 'linear-gradient(135deg, rgba(26, 26, 26, 0.95) 0%, rgba(245, 158, 11, 0.15) 100%)',
                border: '1px solid rgba(245, 158, 11, 0.3)',
                boxShadow: '0 10px 25px rgba(245, 158, 11, 0.2), 0 4px 6px rgba(0, 0, 0, 0.1)',
              },
            },
          }}
        />

        {/* SCRIPTS OPTIMIZADOS */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Optimized page load handler
              (function() {
                function handlePageLoad() {
                  const preloader = document.getElementById('preloader');
                  if (preloader) {
                    preloader.style.opacity = '0';
                    setTimeout(() => preloader.remove(), 300);
                  }
                  
                  // Initialize lazy loading observer
                  if ('IntersectionObserver' in window) {
                    const lazyImages = document.querySelectorAll('img[data-src]');
                    const imageObserver = new IntersectionObserver((entries, observer) => {
                      entries.forEach(entry => {
                        if (entry.isIntersecting) {
                          const img = entry.target;
                          img.src = img.dataset.src;
                          img.classList.remove('loading-shimmer');
                          observer.unobserve(img);
                        }
                      });
                    });
                    
                    lazyImages.forEach(img => imageObserver.observe(img));
                  }
                }

                if (document.readyState === 'loading') {
                  document.addEventListener('DOMContentLoaded', handlePageLoad);
                } else {
                  handlePageLoad();
                }

                // Prevent FOUC
                document.documentElement.style.visibility = 'visible';
                
                // Performance metrics
                if ('performance' in window) {
                  window.addEventListener('load', () => {
                    setTimeout(() => {
                      const perfData = performance.getEntriesByType('navigation')[0];
                      if (perfData && perfData.loadEventEnd - perfData.loadEventStart > 3000) {
                        console.warn('K3K MAFIA: Slow page load detected');
                      }
                    }, 0);
                  });
                }
              })();
            `,
          }}
        />

        {/* ANALYTICS - Solo en producción */}
        {process.env.NODE_ENV === 'production' && (
          <>
            {/* Google Analytics */}
            {process.env.NEXT_PUBLIC_GA_ID && (
              <>
                <script
                  async
                  src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
                />
                <script
                  dangerouslySetInnerHTML={{
                    __html: `
                      window.dataLayer = window.dataLayer || [];
                      function gtag(){dataLayer.push(arguments);}
                      gtag('js', new Date());
                      gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                        page_title: document.title,
                        page_location: window.location.href,
                        custom_map: {
                          'custom_dimension_1': 'k3k_member',
                          'custom_dimension_2': 'cart_value'
                        }
                      });
                    `,
                  }}
                />
              </>
            )}

            {/* Meta Pixel */}
            {process.env.NEXT_PUBLIC_FB_PIXEL_ID && (
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                    !function(f,b,e,v,n,t,s)
                    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                    n.queue=[];t=b.createElement(e);t.async=!0;
                    t.src=v;s=b.getElementsByTagName(e)[0];
                    s.parentNode.insertBefore(t,s)}(window, document,'script',
                    'https://connect.facebook.net/en_US/fbevents.js');
                    fbq('init', '${process.env.NEXT_PUBLIC_FB_PIXEL_ID}');
                    fbq('track', 'PageView');
                  `,
                }}
              />
            )}
          </>
        )}

        {/* Service Worker para PWA */}
        {process.env.NODE_ENV === 'production' && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
                if ('serviceWorker' in navigator) {
                  window.addEventListener('load', function() {
                    navigator.serviceWorker.register('/sw.js', {
                      scope: '/'
                    }).then(function(registration) {
                      console.log('K3K MAFIA SW registered: ', registration.scope);
                    }).catch(function(registrationError) {
                      console.log('K3K MAFIA SW registration failed: ', registrationError);
                    });
                  });
                }
              `,
            }}
          />
        )}

        {/* Critical Resource Hints */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Preload critical resources
              const criticalResources = [
                '/logo.png',
                '/hero-bg.jpg'
              ];
              
              criticalResources.forEach(resource => {
                const link = document.createElement('link');
                link.rel = 'preload';
                link.as = 'image';
                link.href = resource;
                document.head.appendChild(link);
              });
            `,
          }}
        />
      </body>
    </html>
  )
}