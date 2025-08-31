# 📸 Automated Project Screenshots

Este GitHub Action genera automáticamente screenshots de los proyectos listados en `data/projects.ts`.

## 🚀 Cómo usar

### Ejecutar manualmente:

1. Ve a la pestaña **Actions** en GitHub
2. Selecciona **Generate Project Screenshots**
3. Click en **Run workflow**
4. Opciones:
   - **Todos los proyectos**: Deja el campo vacío o escribe `all`
   - **Proyectos específicos**: `kleero,dxgt1,bruma-kappa` (separados por comas)

### 📁 Estructura generada:

```
public/
  images/
    projects/
      kleero.webp          # Screenshot de kleero
      dxgt1.webp          # Screenshot de DXGT1
      bruma-kappa.webp    # Screenshot de Bruma Kappa
      ...
```

### 🔄 Proceso automático:

1. **Screenshot**: Usa Puppeteer para capturar cada proyecto (1200x800px)
2. **Optimización**: Convierte a WebP con 85% calidad
3. **Actualización**: Modifica `data/projects.ts` automáticamente:

   ```ts
   // Antes
   image: "",

   // Después
   image: "/images/projects/kleero.webp",
   ```

4. **Pull Request**: Crea un PR automático para revisión

### ⚙️ Especificaciones:

- **Formato**: WebP optimizado
- **Calidad**: 85%
- **Dimensiones**: 1200x800px (2x DPR)
- **Timeout**: 30 segundos por proyecto
- **User Agent**: Chrome real para evitar bloqueos

### 🛠️ Requisitos:

- Los proyectos deben tener campo `live` con URL válida
- La URL debe ser accesible públicamente
- El proyecto debe cargar correctamente

### 🔍 Troubleshooting:

- **Error de timeout**: Proyecto tarda más de 30s en cargar
- **URL inaccesible**: Verificar que el proyecto esté online
- **Bloqueo de bots**: El sitio puede estar bloqueando Puppeteer

### 📝 Ejemplo de uso:

```bash
# Screenshot de todos los proyectos
Input: "all"

# Screenshot de proyectos específicos
Input: "kleero,dxgt1"

# Screenshot de un solo proyecto
Input: "bruma-kappa"
```
