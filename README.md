# Qhipa Landing Page

Landing page para **Qhipa**, una terminal de escritorio para macOS que reúne shells, archivos, Git y agentes de programación en un mismo espacio de trabajo.

El sitio está construido con Next.js, React, TypeScript, Tailwind CSS v4 y un sistema simple de tokens generado desde `design.md`.

## Características

- Dark mode por defecto.
- Landing responsive con Hero, secciones de funcionalidades, integraciones, producto, CTA y footer.
- Mockup interactivo del producto con parallax 3D.
- Simulación de agentes Tech Lead, Developer y QA.
- Modal de contacto para solicitar demo o enviar mensaje.
- Tokens de diseño editables desde `design.md`.
- Deploy estático preparado para GitHub Pages.

## Requisitos

- Node.js 24 o superior recomendado.
- npm.

## Desarrollo local

Instala dependencias:

```bash
npm install
```

Levanta el entorno de desarrollo:

```bash
npm run dev
```

Abre `http://localhost:3000` en el navegador.

## Design Tokens

Los colores principales viven en `design.md` dentro de un bloque `@theme`.

Cuando ejecutas `npm run dev`, el proyecto observa cambios en `design.md` y regenera automáticamente:

```text
src/app/tokens.css
```

También puedes sincronizar tokens manualmente:

```bash
npm run tokens
```

## Scripts

```bash
npm run dev      # Next dev + watcher de tokens
npm run tokens   # Genera src/app/tokens.css desde design.md
npm run lint     # Ejecuta ESLint
npm run build    # Genera export estático en out/
```

## Estructura Principal

```text
src/app/page.tsx                 # Landing page
src/app/layout.tsx               # Metadata, fuentes y favicon
src/app/globals.css              # Tailwind + tokens globales
src/app/tokens.css               # Archivo generado desde design.md
src/components/product-mockup.tsx # Mockup interactivo del producto
src/components/contact-modal.tsx  # Modal de contacto
src/components/scroll-reveal.tsx  # Animaciones on-scroll
scripts/sync-design-tokens.mjs    # Generador de tokens
scripts/dev-with-tokens.mjs       # Dev server + watcher de tokens
public/brand/                    # Logos, favicon y assets de marca
```

## GitHub Pages

El proyecto está configurado con `output: "export"` en `next.config.ts`, por lo que `npm run build` genera el sitio estático en `out/`.

El workflow `.github/workflows/pages.yml` despliega automáticamente a GitHub Pages cuando se hace push a `main`.

Para habilitarlo en GitHub:

- Ir a `Settings` del repositorio.
- Entrar a `Pages`.
- En `Build and deployment`, seleccionar `GitHub Actions`.

URL esperada después del deploy:

```text
https://cleveritdemo.github.io/lp-qhipa/
```

## Marca

Los assets de marca están en `public/brand/`:

- `logotipo-qhipa.svg`
- `logotipo-qhipa-footer.svg`
- `favicon.svg`
- `isotipo-qhipa.svg`
- `user.png`

## Contacto

El formulario del modal usa `mailto:` apuntando a:

```text
hola@qhipa.dev
```

Puedes cambiar ese correo en `src/components/contact-modal.tsx`.
