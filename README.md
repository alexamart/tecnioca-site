# Tecnioca Website

A modern, bilingual website for Tecnioca built with Astro and React.

## Features

- **Bilingual Support**: Spanish and English versions
- **Dark/Light Themes**: Toggle between themes with persistence
- **Modern Design**: Industry-appropriate styling with Tailwind CSS
- **Responsive**: Mobile-friendly layout
- **React Components**: Interactive elements using React

## Tech Stack

- **Astro**: Static site generation
- **React**: Interactive components
- **Tailwind CSS**: Styling
- **TypeScript**: Type safety

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Header.astro
│   ├── Footer.astro
│   ├── ServiceCard.tsx
│   ├── ThemeToggle.tsx
│   └── LanguageSwitcher.tsx
├── layouts/
│   └── BaseLayout.astro
├── pages/
│   ├── index.astro          # Spanish homepage
│   └── en/
│       └── index.astro      # English homepage
└── styles/
    └── global.css
public/
└── images/                  # Downloaded service images
```

## Bilingual Setup

- Spanish: `/`
- English: `/en/`

The language switcher toggles between the two versions.

## Themes

- Light mode: Default
- Dark mode: Toggle with the moon/sun icon
- Theme preference is saved in localStorage

## Services

The homepage showcases the main services:
- OCA - Baja tensión
- OCA - Alta tensión
- OCA - Equipos a presión
- OCA - Gases combustibles
- EICI - Baja tensión (no industriales)
- EICI - Equipos a presión

Each service card links to its respective page (to be implemented).

## Next Steps

For the admin application, create a separate Vite + React project:

```bash
npm create vite@latest tecnioca-admin -- --template react-ts
cd tecnioca-admin
npm install
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
