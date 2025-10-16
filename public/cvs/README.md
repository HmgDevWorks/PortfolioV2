# CV PDFs

Este directorio contiene los archivos PDF del CV generados automáticamente por GitHub Actions.

## Archivos

- `CV_Hector_Martin_ES.pdf` - CV en español
- `CV_Hector_Martin_EN.pdf` - CV en inglés

## Generación Automática

Los archivos PDF se generan automáticamente cuando:

1. Se hace push a las ramas `main`, `master`, o `project-images`
2. Se modifican archivos relacionados con el CV:
   - `app/cv/**`
   - `components/**`
   - `data/**`
   - `app/globals.css`
   - `tailwind.config.js`
3. Se ejecuta manualmente el workflow desde GitHub Actions

## Proceso

1. GitHub Action instala dependencias y construye la aplicación
2. Inicia el servidor Next.js
3. Usa Puppeteer para generar PDFs desde las páginas `/cv?lang=es` y `/cv?lang=en`
4. Guarda los archivos en este directorio
5. Hace commit y push de los archivos generados

## API

Los archivos se sirven a través del endpoint `/api/cv-pdf?lang=es|en` que lee los archivos pre-generados en lugar de generarlos dinámicamente.
