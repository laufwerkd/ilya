# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server (exposed on all interfaces via --host)
npm run build     # Production build
npm run preview   # Preview production build
npm run lint      # Run ESLint with auto-fix
npm run format    # Format src/ with Prettier
```

No test runner is configured.

## Architecture

This is a Vue 3 + Vuetify 3 single-page portfolio site for a concept artist named Ilya. It is a single-route app (`/`) with no backend.

**Stack:** Vue 3 (Composition API / `<script setup>`), Vuetify 3, Pinia, Vue Router 4, Vite. The `@` alias maps to `src/`.

**Component registration:** All components are globally registered via `src/components/index.js` → `registerComponents(app)` in `main.js`. `App` prefix = layout/feature components; `Base` prefix = generic UI primitives.

**Theme system:** `src/composables/useThemeSwitcher.js` reads/writes the selected theme to `localStorage` via `useLocalStorageStore`. Theme definitions (light/dark) are in `src/constants/index.js`. A third `system` theme is constructed at runtime in `src/plugins/vuetify/index.js` based on `prefers-color-scheme`.

**Art/gallery data:** Image paths and project metadata are centralized in `src/constants/artist.js` (`IMAGES`, `SOCIALS`, `MAIL`). Art files live in `src/art/` (dev) and are copied to `public/art/` for production — the `IMAGES.root` path switches automatically based on `import.meta.env.PROD`.

**LocalStorage store:** `src/stores/localStorageStore.js` wraps `localStorage` as a reactive Pinia store, hydrating all existing keys on init. Use `getReactive(key)` for reactive reads and `setItem/removeItem/clear` for mutations.

**Adding a new project:** Add image files to `src/art/` and `public/art/`, then add an entry to `IMAGES.projects` and `IMAGES.descriptions` in `src/constants/artist.js`.
