# DevPattern

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)  
[![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)]()

> A website built with Astro that examines software design patterns through the lens of SDG 4 (Quality Education), providing in-depth guides, demos, and best practices to empower software engineers and educators.

---

## Table of Contents

1. [Project Overview](#project-overview)  
2. [Features](#features)  
3. [Tech Stack](#tech-stack)  
4. [Repository Structure](#repository-structure)  
5. [Installation & Setup](#installation--setup)  
   - [Clone the Repository](#clone-the-repository)  
   - [Install Dependencies](#install-dependencies)  
   - [Run Locally](#run-locally)  
   - [Build for Production](#build-for-production)  
6. [Design Patterns Covered](#design-patterns-covered)  
7. [Configuration & Environment](#configuration--environment)  
8. [Deployment](#deployment)  
9. [Contributing](#contributing)  
10. [License](#license)  
11. [Acknowledgements](#acknowledgements)  

---

## Project Overview

DevPattern is an educational platform built with [Astro](https://astro.build/) that:

- **Aligns** with the United Nations’ SDG 4: Quality Education.  
- **Delivers** clear, tutorial-style breakdowns of classic and modern design patterns.  
- **Provides** live code examples, diagrams, and interactive demos.  
- **Aims** to uplift technical education by teaching reusable, maintainable architecture.  

---

## Features

- **Modular Content**: Each pattern is its own Markdown + Astro component.  
- **Interactive Code Demos**: Live-embedded snippets using [Shiki](https://shiki.matsu.io/) syntax highlighting.  
- **Responsive Layout**: Mobile-first design powered by Tailwind CSS.  
- **Light & Dark Modes**: Automatic system preference detection.  
- **Search & Navigation**: Instant search across patterns; sidebar with quick links.  
- **Open Source**: MIT-licensed, community-driven contributions welcome.

---

## Tech Stack

| Layer                  | Technology                              |
| ---------------------- | --------------------------------------- |
| Framework              | [Astro](https://astro.build/)           |
| UI & Styling           | Tailwind CSS, Alpine.js                 |
| Syntax Highlighting    | Shiki                                   |
| Markdown Rendering     | Astro Markdown Islands                  |
| Bundler & Tooling      | Vite                                    |
| Linting & Formatting   | ESLint, Prettier                        |
| Continuous Integration | GitHub Actions                          |

---

## Repository Structure
````markdown

├── public/                  # Static assets (images, fonts, favicon, robots.txt)
├── src/
│   ├── components/          # Reusable UI components
│   ├── layouts/             # Page layout templates
│   ├── pages/               # Astro pages (index.astro, patterns/)
│   ├── content/             # Markdown + frontmatter for each pattern
│   └── styles/              # Global and utility CSS (Tailwind config)
├── astro.config.mjs         # Astro configuration
├── package.json             # NPM scripts & dependencies
├── tailwind.config.cjs      # Tailwind CSS configuration
├── tsconfig.json            # TypeScript config (if using TS)
└── README.md                # This file
````

---

## Installation & Setup

### Clone the Repository

```bash
git clone https://github.com/<your-username>/AstroEduPatterns.git
cd AstroEduPatterns
```

### Install Dependencies

Make sure you have Node.js (v16+) installed, then:

```bash
npm install
# or
yarn install
# or
pnpm install
```

### Run Locally

To start the development server with live reload:

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser. Changes to `.astro`, `.md`, `.css`, or JS files will hot-reload instantly.

### Build for Production

To generate an optimized, static build in `dist/`:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## Design Patterns Covered

This site includes comprehensive guides on:

* **Creational Patterns**

  * Singleton
  * Factory Method
  * Abstract Factory
  * Builder

* **Structural Patterns**

  * Adapter
  * Composite
  * Decorator
  * Facade

* **Behavioral Patterns**

  * Observer
  * Strategy
  * Command
  * State

> Each pattern page contains:
>
> * Motivation & use cases
> * UML class diagrams
> * Example code (JavaScript / TypeScript)
> * Live interactive demo where applicable

---

## Configuration & Environment

Environment variables (if any) live in a `.env` file at project root. Example:

```env
# .env
SITE_TITLE="AstroEduPatterns"
SITE_URL="https://patterns.example.com"
```

Add `.env` to your `.gitignore` to keep secrets out of version control.

---

## Deployment

This project builds to static assets and can be deployed anywhere static files are supported. Popular choices:

* **Netlify**
  Connect your GitHub repo, set build command `npm run build` and publish directory `dist/`.
* **Vercel**
  Auto-detects Astro; configure build as above.
* **GitHub Pages**
  Use a `gh-pages` branch or the `actions-gh-pages` GitHub Action.

---

## Contributing

We welcome contributions! Please follow these steps:

1. **Fork** the repository.
2. **Create** a feature branch:

   ```bash
   git checkout -b feature/add-pattern-xyz
   ```
3. **Develop** your changes:

   * Add a new Markdown file under `src/content/patterns/xyz.md`.
   * Update navigation in `src/components/Sidebar.astro`.
   * Add code demos under `src/components/DemoXYZ.astro` if needed.
4. **Lint & Format**:

   ```bash
   npm run lint
   npm run format
   ```
5. **Commit** with a clear message:

   ```bash
   git commit -m "Add XYZ pattern tutorial"
   ```
6. **Push** and open a Pull Request against `main`.

Please adhere to the existing style and structure. All contributions are licensed under MIT.

---

## License

This project is licensed under the [MIT License](LICENSE). See `LICENSE` for details.

---

## Acknowledgements

* **Astro Team** for creating a blazing-fast static site engine.
* **Tailwind Labs** for utility-first CSS.
* **The open-source community** for pattern definitions and diagrams.

> “Quality education is the foundation for sustainable development.”
> — United Nations, SDG 4



