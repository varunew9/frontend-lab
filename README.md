# Frontend Lab

A modern React + TypeScript frontend playground for building, experimenting with, and documenting real-world UI patterns, state management, responsive layouts, themes, and reusable components.

## ✨ Highlights

- ⚛️ React + TypeScript
- ⚡ Vite for fast development
- 🎨 Multiple themes with persistent theme state
- 🧩 Reusable UI components
- 📱 Responsive layouts
- 🎯 Feature-based project structure
- 🗂️ React Router navigation
- 🐻 Zustand for lightweight state management
- 🎨 SCSS Modules and custom design system
- 🧪 Small practical frontend projects
- ♻️ Reusable utilities and styling helpers
- 🌙 Dark, Light, Forest, Cyberpunk, Ocean, Synthwave, Matrix, and Midnight themes

## 🛠️ Tech Stack

### Core

- React
- TypeScript
- JavaScript
- Vite

### State Management

- Zustand
- React State / Hooks

### Styling

- SCSS / Sass
- CSS Modules
- Bootstrap
- Custom CSS variables
- Responsive design
- Custom utility classes

### UI & Icons

- Reusable React UI components
- Lucide React
- SVG assets

### Development

- ESLint
- Git
- GitHub
- Axios

## 📁 Project Structure

```text
frontend-lab/
├── public/
│   ├── userImage.jpg
│   ├── icons.svg
│   └── favicon.svg
│
├── src/
│   ├── assets/
│   │   └── logo.svg
│   │
│   ├── components/
│   │   └── ui/
│   │       ├── button/
│   │       ├── container/
│   │       ├── footer/
│   │       ├── header/
│   │       ├── headings/
│   │       └── section/
│   │
│   ├── config/
│   │   └── features.ts
│   │
│   ├── features/
│   │   ├── counter/
│   │   ├── digitalClock/
│   │   ├── profileCardGenerator/
│   │   └── themeChanger/
│   │
│   ├── lib/
│   │   └── api/
│   │
│   ├── pages/
│   │   ├── home/
│   │   ├── notFound/
│   │   └── projects/
│   │
│   ├── route/
│   │   └── router.tsx
│   │
│   ├── styles/
│   │   ├── abstracts/
│   │   ├── base/
│   │   ├── components/
│   │   ├── themes/
│   │   ├── utilities/
│   │   └── globals.scss
│   │
│   ├── types/
│   │   └── common.types.ts
│   │
│   ├── App.tsx
│   └── main.tsx
│
├── eslint.config.js
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 🧱 Architecture

The project follows a combination of **feature-based architecture** and **page/component separation**.

### `components/ui`

Contains reusable presentation components such as:

- `Button`
- `Heading`
- `Section`
- `Container`
- `Header`
- `Footer`

### `features`

Contains self-contained application functionality.

For example:

```text
features/
└── counter/
    ├── components/
    │   └── Counter.tsx
    ├── counter.store.ts
    ├── counter.types.ts
    └── index.ts
```

This keeps feature-specific logic close to the feature instead of putting everything into global folders.

### `pages`

Contains route-level pages.

```text
pages/
├── home/
├── notFound/
└── projects/
```

Project-specific pages consume functionality from the corresponding feature.

## 🚀 Projects

This repository contains a collection of practical frontend projects built with React, TypeScript, Zustand, SCSS, and reusable UI components.

### 🌓 Theme Changer

A multi-theme system supporting:

- Dark
- Light
- Forest
- Cyberpunk
- Ocean
- Synthwave
- Matrix
- Midnight

Demonstrates CSS variables, theme state management, persistence, and reusable UI.

### ⏱️ Digital Clock

A real-time digital clock displaying the current time and date.

Demonstrates React state, effects, timers, and component styling.

### 🔢 Counter

A simple counter application demonstrating state management with Zustand.

### 👤 Profile Card Generator

Create and manage reusable profile cards.

Demonstrates reusable components, state management, and SCSS Modules.

### 🏠 Frontend Lab Home

The main landing page showcasing the technologies, frontend skills, development workflow, and learning journey covered by this repository.

More projects will be added as the repository grows.

## 🎨 Theme System

The application includes a CSS-variable-based theme system.

### Available Themes

- Dark
- Light
- Forest
- Cyberpunk
- Ocean
- Synthwave
- Matrix
- Midnight

The UI uses semantic CSS variables such as:

```scss
var(--bg)
var(--bg-2)
var(--bg-3)
var(--surface)
var(--border)
var(--border-strong)
var(--text)
var(--text-secondary)
var(--text-muted)
var(--purple)
var(--accent)
var(--accent-soft)
var(--gradient)
var(--text-on-primary)
var(--shadow-card)
var(--shadow-card-hover)
```

This allows components to remain theme-independent.

For example:

```scss
.card {
  background: var(--surface);
  border: 1px solid var(--border);
  color: var(--text);
  box-shadow: var(--shadow-card);
}
```

Instead of hardcoding colors inside individual components.

## 📦 Installation

Clone the repository:

```bash
git clone https://github.com/varunew9/frontend-lab.git
```

Move into the project:

```bash
cd frontend-lab
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The application will be available at the local Vite development URL.

## 🏗️ Build

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

Run ESLint:

```bash
npm run lint
```

## 🗺️ Roadmap

The goal of this repository is to continuously expand it into a practical frontend laboratory.

Planned areas include:

- [ ] More React projects
- [ ] REST API projects
- [ ] TanStack Query examples
- [ ] React Hook Form + Zod examples
- [ ] Advanced Redux Toolkit examples
- [ ] Advanced Zustand patterns
- [ ] Authentication UI
- [ ] Data tables
- [ ] Search and filtering
- [ ] Pagination
- [ ] Drag and drop interfaces
- [ ] Accessibility-focused projects
- [ ] Performance optimization examples
- [ ] Testing examples
- [ ] More reusable UI components

## 🎯 Purpose

This repository is primarily a **learning and experimentation lab**.

The focus is on building real interfaces rather than isolated tutorials, while gradually improving:

- Component architecture
- TypeScript skills
- State management
- UI/UX implementation
- Responsive design
- Accessibility
- Performance
- API integration
- Code organization
- Reusability
- Production-oriented frontend practices

## 📌 Status

🚧 **Actively evolving**

The structure, components, themes, and projects will continue to change as new frontend concepts and experiments are added.

## 📄 License

This project is currently intended for learning and personal experimentation.

A formal license can be added later when reuse and distribution terms are defined.
