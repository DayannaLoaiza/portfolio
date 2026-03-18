# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server (localhost:3000)
npm run build    # Production build (SSG — pre-renders all HTML)
npm run start    # Start production server
npm run lint     # ESLint (flat config: core-web-vitals + typescript)
```

## Architecture

Portfolio web de Linda Loaiza (Full Stack Developer & Tech Lead). Next.js App Router con SSG, TypeScript strict, React 19. Single-page con dark theme estilo terminal/GitHub.

### Principios de Desarrollo

- **SOLID, DRY, Clean Code** — cada componente tiene responsabilidad unica; los datos se inyectan via props, no se importan directamente en molecules/atoms
- **No Tailwind, no CSS-in-JS, no Framer Motion** — CSS puro con BEM es requisito explícito
- **No CMS** — contenido estatico en archivos TypeScript tipados (`src/data/`)
- **Server Components por defecto** — minimizar JS al cliente (< 100KB gzipped)

### Component Structure — Atomic Design

Componentes en `src/components/` con archivos `.css` BEM co-ubicados:

- **atoms/** — Badge, Button, Tag, SocialIcon, SectionTitle (unidades minimas reutilizables)
- **molecules/** — ProjectCard, FeaturedProject, TerminalBlock, ExperienceEntry, SkillCard, CertCard, AchievementCard, TechMarquee, NavLinks, BrowserMockup
- **organisms/** — Secciones completas: HeroSection, ProjectsSection, SkillsSection, ExperienceSection, CertsSection, AchievementsSection, ContactSection, Header, Sidebar, Footer

`src/app/page.tsx` compone todos los organisms en el portfolio single-page.

### CSS — BEM + Design Tokens

- **Nomenclatura BEM**: `.block__element--modifier`, estados con `.block.is-state`
- **Design tokens** centralizados en `src/styles/tokens.css` (colores, tipografia, spacing, shadows)
- **Orden de imports** en `layout.tsx`: reset → tokens → global → utilities → animations
- **Palette**: bg `#0D1117`, card `#161B22`, border `#30363D`, text `#E6EDF3`, accent `#00FFC8`, purple `#7B61FF`
- **Fuentes**: JetBrains Mono (mono) + Inter (sans) via `next/font` (self-hosted, zero CLS)
- **Animaciones**: CSS keyframes + IntersectionObserver, respeta `prefers-reduced-motion`

### Data Layer

Datos estaticos tipados en `src/data/` — projects, skills, experience, certifications, achievements, social. Para modificar contenido, editar directamente estos archivos.

### Types

Interfaces en `src/types/` — Project, ProjectLink, Skill, SkillCategory, Experience, ExperienceBadge, Certification, Achievement, SocialLink, TerminalLine.

### Client vs Server Components

Solo 3 componentes usan `'use client'`:
- **TerminalBlock** — animacion de typing (`useTypewriter` hook)
- **ExperienceEntry** — scroll reveal (`useInView` hook)
- **NavLinks** — estado de link activo

Todo lo demas es Server Component (zero JS al cliente).

### SEO

- Metadata completa (OG, Twitter Cards, keywords) en `layout.tsx`
- JSON-LD (Person + WebSite schemas) en `src/lib/structured-data.ts`
- Sitemap y robots.txt auto-generados en `src/app/sitemap.ts` y `src/app/robots.ts`
- HTML semantico: `<section aria-labelledby>`, `<article>`, `<time datetime>`, skip-to-content link
- Heading hierarchy: un solo `<h1>`, `<h2>` por seccion, `<h3>` en cards

### Path Alias

`@/*` → `./src/*` (tsconfig.json).

## Verificacion

- `npm run build` debe completar sin errores
- `view-source:` debe mostrar todo el contenido pre-renderizado (no depender de JS)
- Responsive: 320px, 768px, 1024px, 1440px
- `prefers-reduced-motion` debe desactivar animaciones
- Lighthouse target: 95+ en Performance, Accessibility, SEO, Best Practices
