/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
  },
  i18n: {
    locales: ['es', 'en'],
    defaultLocale: 'es',
  },
  // Configuraciones para evitar el error de stack overflow
  experimental: {
    // Optimizaciones adicionales
    optimizePackageImports: ['framer-motion', 'lucide-react'],
  },
  // Configuraciones adicionales para optimizar el build
  swcMinify: true,
  // Configuración de webpack para evitar problemas
  webpack: (config, { isServer, dev }) => {
    // Excluir archivos que pueden causar problemas
    if (!dev) {
      config.watchOptions = {
        ignored: ['**/node_modules', '**/.git', '**/.next', '**/dist'],
      };
    }
    
    // Optimizar el bundle
    config.optimization = {
      ...config.optimization,
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      },
    };
    
    return config;
  },
  // Configuraciones de compilación
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
}

module.exports = nextConfig 