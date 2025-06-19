# Pascual Camacho - Personal Website

A modern personal website built with **Astro**, **React**, and **Tailwind CSS**. This project serves as a learning platform for understanding modern web development tools and building a fully customizable personal website.

## 🚀 Technologies Used

- **Astro** - Static site generator with file-based routing
- **React** - Interactive components and state management
- **Tailwind CSS** - Utility-first CSS framework with dark mode
- **TypeScript** - Type-safe development
- **GitHub Pages** - Static site hosting

## 🌙 Features

- **Dark Mode** - Default dark theme with system preference detection
- **Responsive Design** - Works perfectly on desktop and mobile
- **Interactive Components** - React components with state management
- **File-based Routing** - Automatic page generation from files
- **Modern Styling** - Tailwind CSS with custom design system
- **Professional Layout** - Clean, minimalistic UI with proper typography

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # Reusable UI components
│   │   └── ThemeToggle.tsx  # Dark mode toggle
│   └── sections/       # Page section components
│       └── Header.tsx  # Navigation header
├── layouts/            # Astro layout components
│   └── Layout.astro    # Base layout with dark mode
└── pages/              # File-based routing
    ├── index.astro     # Home page
    ├── about.astro     # About page
    ├── projects.astro  # Projects showcase
    └── notes.astro     # Notes and thoughts
```

## 🛠️ Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/pascualcam/pascualcam-new.git
   cd pascualcam-new
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:4321`

## 🌙 Dark Mode

The website features a sophisticated dark mode implementation:

- **Default Dark Theme** - Dark mode is enabled by default
- **System Preference** - Respects user's system color scheme preference
- **Persistent Storage** - Remembers user's theme choice
- **Smooth Transitions** - Elegant theme switching animations
- **Minimalistic Toggle** - Simple sun/moon icon in the header

### How it Works

- Uses Tailwind CSS `dark:` classes for styling
- React component manages theme state
- Local storage persists user preference
- Inline script prevents flash of wrong theme

## 🎯 Learning Goals

This project is designed to help understand:

- **Astro's file-based routing** - How pages are automatically created from files
- **React components in Astro** - Using `client:load` directive for interactivity
- **Tailwind CSS** - Building responsive designs with utility classes
- **Dark Mode Implementation** - Modern theme switching patterns
- **Modern web development** - Best practices for performance and maintainability

## 🚀 Deployment

The site is automatically deployed to GitHub Pages via GitHub Actions. Simply push to the `main` branch to trigger a deployment.

## 📝 Key Features

- ✅ React integration with interactive components
- ✅ Responsive design with Tailwind CSS
- ✅ Dark mode with system preference detection
- ✅ File-based routing with Astro
- ✅ Mobile-friendly navigation
- ✅ Modern, clean UI design
- ✅ Automatic GitHub Pages deployment
- ✅ TypeScript for type safety

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run astro ...` - Run Astro CLI commands

### Adding New Pages

Create new `.astro` files in `src/pages/` to automatically generate new routes.

### Creating React Components

1. Create `.tsx` files in `src/components/`
2. Import and use with `client:load` directive in Astro files
3. Use Tailwind classes for styling
4. Include dark mode variants with `dark:` prefix

### Dark Mode Styling

When adding new components, remember to include dark mode variants:

```tsx
className="bg-white dark:bg-dark-950 text-primary-900 dark:text-primary-100"
```

## 📚 Resources

- [Astro Documentation](https://docs.astro.build/)
- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Dark Mode Best Practices](https://tailwindcss.com/docs/dark-mode)

---

Built with ❤️ by Pascual Camacho

```sh
npm create astro@latest -- --template minimal
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/minimal)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/minimal)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/minimal/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
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
