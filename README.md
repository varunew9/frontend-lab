Frontend Lab

A modern React + TypeScript frontend playground for building, experimenting with, and documenting real-world UI patterns, state management, responsive layouts, themes, and reusable components.

✨ Highlights
⚛️ React + TypeScript
⚡ Vite for fast development
🎨 Multiple themes with persistent theme state
🧩 Reusable UI components
📱 Responsive layouts
🎯 Feature-based project structure
🗂️ React Router navigation
🐻 Zustand for lightweight state management
🎨 SCSS Modules and custom design system
🧪 Small practical frontend projects
♻️ Reusable utilities and styling helpers
🌙 Dark, Light, Forest, Cyberpunk, Ocean, Synthwave, Matrix, and Midnight themes
🚀 Projects

The repository currently contains several small frontend projects:

Project Description
Counter Simple counter demonstrating state management
Digital Clock Real-time clock and date display
Profile Card Generator Generate and manage reusable profile cards
Theme Changer Multi-theme UI with persistent theme state
Home / Landing Page Modern frontend-focused landing page

More projects will be added as the repository grows.

🛠️ Tech Stack
Core
React
TypeScript
JavaScript
Vite
State Management
Zustand
React state/hooks
Styling
SCSS / Sass
CSS Modules
Bootstrap
Custom CSS variables
Responsive design
Custom utility classes
UI & Icons
Reusable React UI components
Lucide React
SVG assets
Development
ESLint
Git
GitHub
Axios
📁 Project Structure

```js
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
│   │   ├── profileCardGenrator/
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

🧱 Architecture

The project follows a combination of feature-based architecture and page/component separation.

components/ui

Contains reusable presentation components such as:

Button
Heading
Section
Container
Header
Footer
features

Contains self-contained application functionality.

For example:

```js
features/
└── counter/
├── components/
│ └── Counter.tsx
├── counter.store.ts
├── counter.types.ts
└── index.ts
```

This keeps feature-specific logic close to the feature instead of putting everything into global folders.

pages

Contains route-level pages.

```js
pages/
├── home/
├── notFound/
└── projects/
```

Project-specific pages consume functionality from the corresponding feature.

🎨 Theme System

The application includes a CSS-variable-based theme system.

Available themes:

```js
dark;
light;
forest;
cyberpunk;
ocean;
synthwave;
matrix;
midnight;
```

The UI uses semantic variables such as:

```js
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

```js
.card {
background: var(--surface);
border: 1px solid var(--border);
color: var(--text);
box-shadow: var(--shadow-card);
}
```

Instead of hardcoding colors inside individual components.

📦 Installation

Clone the repository:

```js
git clone https://github.com/YOUR_USERNAME/frontend-lab.git
```

Move into the project:

```js
cd frontend-lab
```

Install dependencies:

```js
npm install
```

Start the development server:

```js
npm run dev
```

The application will be available at the local Vite development URL.

🏗️ Build

Create a production build:

```js
npm run build
```

Preview the production build:

```js
npm run preview
```

Run ESLint:

```js
npm run lint
```

🗺️ Roadmap

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

🎯 Purpose

This repository is primarily a learning and experimentation lab.

The focus is on building real interfaces rather than isolated tutorials, while gradually improving:

Component architecture
TypeScript skills
State management
UI/UX implementation
Responsive design
Accessibility
Performance
API integration
Code organization
Reusability
Production-oriented frontend practices
📌 Status

🚧 Actively evolving

The structure, components, themes, and projects will continue to change as new frontend concepts and experiments are added.

📄 License

This project is currently intended for learning and personal experimentation. Add a formal license here when you're ready to define reuse and distribution terms.
