# 🚀 Portfolio de Héctor Martín

Portfolio profesional desarrollado con **Next.js 14**, **TypeScript** y **Tailwind CSS**. Incluye proyectos de desarrollo web, móvil y videojuegos.

## ✨ Características

- 🎨 **Diseño Moderno**: Interfaz elegante y responsive
- 📱 **Multiplataforma**: Optimizado para móvil, tablet y desktop
- 🌍 **Bilingüe**: Soporte para español e inglés
- 📊 **SEO Optimizado**: Meta tags, structured data, sitemap
- 📈 **Analytics**: Integración con Google Analytics
- 📄 **CV Dinámico**: Generación automática de PDF
- 🏷️ **Sistema de Tags**: Proyectos en múltiples categorías
- ⚡ **Performance**: Optimizado para velocidad

## 🛠️ Tecnologías

- **Frontend**: Next.js 14, React, TypeScript, Tailwind CSS
- **Animaciones**: Framer Motion
- **Iconos**: Lucide React
- **PDF**: jsPDF
- **Email**: Nodemailer
- **Deploy**: Vercel

## 🚀 Instalación

1. **Clonar el repositorio**

```bash
git clone https://github.com/hector-martin/portfolio.git
cd portfolio
```

2. **Instalar dependencias**

```bash
pnpm install
```

3. **Configurar variables de entorno**

```bash
cp env.example .env.local
```

Edita `.env.local` con tus datos:

```env
# Email Configuration (para el formulario de contacto)
EMAIL_USER=tu-email@gmail.com
EMAIL_PASS=tu-contraseña-de-aplicación

# Google Analytics (opcional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

4. **Ejecutar en desarrollo**

```bash
pnpm dev
```

## 📊 Configuración de Google Analytics

### ¿Qué es NEXT_PUBLIC_GA_ID?

Esta variable se usa para rastrear el tráfico de tu portfolio:

- **G-XXXXXXXXXX**: Es tu ID de Google Analytics 4 (GA4)
- **Sirve para**: Ver cuántas visitas tienes, de dónde vienen, qué páginas ven más
- **Es opcional**: Solo la necesitas si quieres analíticas

### Cómo obtener tu GA ID:

1. Ve a [Google Analytics](https://analytics.google.com/)
2. Crea una nueva propiedad
3. Copia el ID que aparece (formato: G-XXXXXXXXXX)
4. Añádelo a tu `.env.local`

## 🔍 SEO y Optimización

### Características SEO implementadas:

- ✅ **Meta tags completos** (title, description, keywords)
- ✅ **Open Graph** para redes sociales
- ✅ **Twitter Cards** para Twitter
- ✅ **Structured Data** (Schema.org)
- ✅ **Sitemap automático** (`/sitemap.xml`)
- ✅ **Robots.txt** (`/robots.txt`)
- ✅ **Canonical URLs**
- ✅ **Favicon y manifest**
- ✅ **Preconnect** para performance

### Para mejorar el SEO:

1. **Google Search Console**:

   - Añade tu dominio
   - Verifica la propiedad
   - Actualiza el código de verificación en `layout.tsx`

2. **Imagen OG**:

   - Crea una imagen 1200x630px
   - Guárdala como `/public/images/og-image.jpg`

3. **Favicon**:
   - Añade tus iconos en `/public/`
   - Incluye: `favicon.ico`, `apple-touch-icon.png`, etc.

## 📁 Estructura del Proyecto

```
PortfolioV2/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Layout principal con SEO
│   ├── page.tsx           # Página principal
│   ├── sitemap.ts         # Sitemap automático
│   ├── robots.ts          # Robots.txt
│   └── api/               # API routes
├── components/            # Componentes React
│   ├── HeroSection.tsx    # Sección hero
│   ├── ProjectsSection.tsx # Sección proyectos
│   ├── CVModal.tsx        # Modal del CV
│   └── GoogleAnalytics.tsx # Analytics
├── data/                  # Datos estáticos
│   ├── personal.ts        # Información personal
│   ├── projects.ts        # Proyectos
│   └── technologies.ts    # Tecnologías
└── types/                 # Tipos TypeScript
```

## 🎯 Características Destacadas

### Sistema de Tags para Proyectos

Los proyectos pueden aparecer en múltiples categorías:

- **DXGT1**: Aparece en "Mobile" y "Fullstack"
- **Bruma Kappa**: Aparece en "Fullstack" y "Web"
- **Taisai Game**: Aparece en "Game" y "Mobile"

### CV Dinámico

- Generación automática de PDF
- Una página A4 optimizada
- Contenido basado en datos reales
- Vista previa en modal

### Formulario de Contacto

- Validación con Zod
- Envío de emails con Nodemailer
- Feedback visual al usuario

## 🚀 Deploy

### Vercel (Recomendado)

1. Conecta tu repositorio a Vercel
2. Configura las variables de entorno
3. Deploy automático en cada push

### Variables de entorno en Vercel:

```env
EMAIL_USER=tu-email@gmail.com
EMAIL_PASS=tu-contraseña-de-aplicación
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

## 📝 Personalización

### Datos Personales

Edita `data/personal.ts` con tu información:

- Nombre, título, descripción
- Experiencia laboral
- Educación
- Habilidades

### Proyectos

Edita `data/projects.ts`:

- Añade tus proyectos
- Configura tags para múltiples categorías
- Incluye enlaces a GitHub y live

### Tecnologías

Edita `data/technologies.ts`:

- Lista de tecnologías que manejas
- Niveles de experiencia
- Categorías

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature
3. Commit tus cambios
4. Push a la rama
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

## 📞 Contacto

- **Email**: HmgDevWorks@gmail.com
- **Teléfono**: +34 654 91 75 04
- **GitHub**: [hector-martin](https://github.com/hector-martin)
- **LinkedIn**: [hector-martin](https://linkedin.com/in/hector-martin)

---

⭐ Si te gusta este portfolio, ¡dale una estrella al repositorio!
