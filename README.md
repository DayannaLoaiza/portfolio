# My Portfolio Wesbite by Linda Dayanna Loaiza

Portafolio web profesional de **Linda Loaiza**.

Sitio single-page con dark theme estilo terminal/GitHub, construido con enfoque en **SEO**, **rendimiento** y **accesibilidad**.

## Stack Tecnologico

| Capa | Tecnologia |
|------|-----------|
| Framework | Next.js (App Router, SSG) |
| Lenguaje | TypeScript (strict mode) |
| Estilos | CSS puro + BEM + Custom Properties |
| Fuentes | JetBrains Mono + Inter (next/font, self-hosted) |
| Animaciones | CSS Keyframes + IntersectionObserver |
| Iconos | SVG inline |

## Inicio Rapido

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Build de produccion
npm run build

# Servir build local
npm run start
```

Abrir [http://localhost:3000](http://localhost:3000) en el navegador.

## Estructura del Proyecto

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout: fuentes, metadata, JSON-LD
│   ├── page.tsx            # Composicion de todas las secciones
│   ├── sitemap.ts          # Sitemap auto-generado
│   ├── robots.ts           # robots.txt auto-generado
│   └── not-found.tsx       # Pagina 404
│
├── components/             # Atomic Design
│   ├── atoms/              # Badge, Button, Tag, SocialIcon, SectionTitle
│   ├── molecules/          # ProjectCard, TerminalBlock, ExperienceEntry, SkillCard, etc.
│   └── organisms/          # HeroSection, ProjectsSection, SkillsSection, Footer, etc.
│
├── data/                   # Contenido estatico tipado
│   ├── projects.ts         # Proyectos destacados
│   ├── skills.ts           # Categorias de habilidades
│   ├── experience.ts       # Experiencia laboral
│   ├── certifications.ts   # Certificaciones
│   ├── achievements.ts     # Logros
│   └── social.ts           # Redes sociales, links de navegacion, lineas del terminal
│
├── types/                  # Interfaces TypeScript
├── hooks/                  # useTypewriter, useInView
├── lib/                    # JSON-LD structured data
│
└── styles/                 # CSS Global
    ├── tokens.css          # Design tokens (colores, tipografia, spacing)
    ├── reset.css           # CSS reset moderno
    ├── global.css          # Estilos base del body
    ├── utilities.css       # Clases utilitarias (sr-only, skip-link)
    └── animations.css      # Keyframes compartidos
```

## Arquitectura

### Atomic Design

Los componentes siguen Atomic Design con archivos CSS BEM co-ubicados:

- **Atoms**: Componentes minimos reutilizables (Badge, Button, Tag)
- **Molecules**: Combinaciones de atoms (ProjectCard, TerminalBlock, ExperienceEntry)
- **Organisms**: Secciones completas de la pagina (HeroSection, ProjectsSection, Footer)

### CSS — BEM + Design Tokens

CSS puro con metodologia BEM para nomenclatura modular y sin conflictos de especificidad:

```css
.project-card { }                /* Bloque */
.project-card__title { }         /* Elemento */
.project-card--featured { }      /* Modificador */
.project-card.is-visible { }     /* Estado */
```

Todos los valores de diseno estan centralizados como CSS Custom Properties en `tokens.css`.

### Rendimiento

- **SSG**: HTML completo pre-renderizado en build time
- **Server Components por defecto**: Solo 3 componentes envian JS al cliente
- **next/font**: Fuentes self-hosted, zero CLS
- **CSS puro**: Sin runtime de estilos, extraido y minificado automaticamente

### SEO

- Metadata completa: Open Graph, Twitter Cards, keywords
- JSON-LD structured data (Person + WebSite schemas)
- Sitemap y robots.txt auto-generados
- HTML semantico con ARIA labels y heading hierarchy correcta
- Skip-to-content link para accesibilidad

## Secciones

| Seccion | Descripcion |
|---------|------------|
| **Hero** | Terminal animado con typing effect, badge "Available for Remote", CTAs |
| **Projects** | Proyecto destacado con browser mockup + grid 2x2 de proyectos |
| **Skills** | Bento grid de categorias + marquee de tecnologias |
| **Experience** | Timeline con scroll-reveal animations |
| **Certifications** | Cards de certificaciones profesionales |
| **Achievements** | Cards de logros con acentos de color |
| **Contact** | CTA de email + iconos sociales |
| **Footer** | GitHub activity strip + creditos |

## Modificar Contenido

Todo el contenido esta en `src/data/`. Para agregar un proyecto, certificacion o experiencia, editar el archivo correspondiente. Los tipos en `src/types/` guian la estructura.

## Principios

- **SOLID** — Responsabilidad unica por componente, datos inyectados via props
- **DRY** — Componentes reutilizables (Tag, Badge, SocialIcon usados en multiples secciones)
- **Clean Code** — Nombres descriptivos, archivos pequenos y enfocados
- **BEM** — Nomenclatura CSS modular, predecible y sin conflictos

## Deploy

El sitio esta optimizado para deploy en **Vercel**:

```bash
# Build de produccion
npm run build
```

Conectar el repositorio en [vercel.com](https://vercel.com) para deploys automaticos.

## Licencia

Proyecto personal de Linda Loaiza. Todos los derechos reservados.
