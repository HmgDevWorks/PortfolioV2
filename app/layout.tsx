import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import GoogleAnalytics from '@/components/GoogleAnalytics'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Héctor Martín - Desarrollador Fullstack y de Videojuegos',
    description: 'Portfolio profesional de Héctor Martín, desarrollador fullstack especializado en React, Next.js, Laravel, Unity y desarrollo móvil. Proyectos de e-commerce, aplicaciones móviles y videojuegos.',
    keywords: [
        'desarrollador fullstack',
        'desarrollador web',
        'desarrollador de videojuegos',
        'React',
        'Next.js',
        'Laravel',
        'Unity',
        'TypeScript',
        'PHP',
        'portfolio',
        'desarrollo móvil',
        'Expo',
        'React Native'
    ],
    authors: [{ name: 'Héctor Martín', url: 'https://hector-martin-portfolio.vercel.app' }],
    creator: 'Héctor Martín',
    publisher: 'Héctor Martín',
    metadataBase: new URL('https://hector-martin-portfolio.vercel.app'),
    alternates: {
        canonical: 'https://hector-martin-portfolio.vercel.app',
    },
    openGraph: {
        title: 'Héctor Martín - Desarrollador Fullstack y de Videojuegos',
        description: 'Portfolio profesional de Héctor Martín, desarrollador fullstack especializado en React, Next.js, Laravel, Unity y desarrollo móvil.',
        url: 'https://hector-martin-portfolio.vercel.app',
        siteName: 'Héctor Martín Portfolio',
        locale: 'es_ES',
        type: 'website',
        images: [
            {
                url: '/images/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Héctor Martín - Desarrollador Fullstack',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Héctor Martín - Desarrollador Fullstack y de Videojuegos',
        description: 'Portfolio profesional de Héctor Martín, desarrollador fullstack especializado en React, Next.js, Laravel, Unity y desarrollo móvil.',
        images: ['/images/og-image.jpg'],
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
    verification: {
        google: 'tu-google-verification-code',
    },
    category: 'technology',
    classification: 'Portfolio profesional de desarrollo',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="es">
            <head>
                {/* Preconnect to external domains for performance */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

                {/* Favicon */}
                <link rel="icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />

                {/* Structured Data for SEO */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Person",
                            "name": "Héctor Martín",
                            "jobTitle": "Desarrollador Fullstack y de Videojuegos",
                            "description": "Desarrollador especializado en React, Next.js, Laravel, Unity y desarrollo móvil",
                            "url": "https://hector-martin-portfolio.vercel.app",
                            "email": "HmgDevWorks@gmail.com",
                            "telephone": "+34 654 91 75 04",
                            "address": {
                                "@type": "PostalAddress",
                                "addressCountry": "ES",
                                "addressLocality": "España"
                            },
                            "sameAs": [
                                "https://github.com/hector-martin",
                                "https://linkedin.com/in/hector-martin"
                            ],
                            "knowsAbout": [
                                "React",
                                "Next.js",
                                "TypeScript",
                                "Laravel",
                                "Unity",
                                "PHP",
                                "React Native",
                                "Expo"
                            ],
                            "worksFor": {
                                "@type": "Organization",
                                "name": "Colon"
                            }
                        })
                    }}
                />
            </head>
            <body className={inter.className}>
                <GoogleAnalytics />
                {children}
            </body>
        </html>
    )
} 