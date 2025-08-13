# YSHF (YouthServe Humanity Foundation)

A modern React web application for the Youth Support & Hope Foundation (YSHF), featuring interactive UI, responsive design, and a modular component architecture.

## Features

- ⚡ **React + Vite**: Fast development and build process.
- 🎨 **Tailwind CSS**: Utility-first styling for rapid UI development.
- 🧩 **Modular Components**: Reusable components under [`src/components`](src/components).
- 🌗 **Custom Theming**: Design tokens and themes defined in [`src/index.css`](src/index.css) and [`tailwind.config.ts`](tailwind.config.ts).
- 🍪 **Policy Pages**: Includes Privacy Policy, Terms of Service, and Cookie Policy ([`src/pages`](src/pages)).
- 🧪 **ESLint & TypeScript**: Code quality and type safety.
- 🔥 **Modern Tooling**: Vite, PostCSS, and Bun support.

## Project Structure

```
.
├── src/
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css
│   ├── components/
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── HeroSection.tsx
│   │   ├── MissionSection.tsx
│   │   ├── ProgramsSection.tsx
│   │   ├── VolunteerSection.tsx
│   │   └── ui/
│   ├── hooks/
│   │   ├── use-mobile.tsx
│   │   └── use-toast.ts
│   ├── lib/
│   │   └── utils.ts
│   ├── pages/
│   │   ├── CookiePolicy.tsx
│   │   └── ...
│   └── assets/
│       └── hero-banner.jpg
├── tailwind.config.ts
├── vite.config.ts
├── tsconfig.json
├── package.json
├── bun.lockb
└── ...
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [pnpm](https://pnpm.io/), [npm](https://www.npmjs.com/), or [bun](https://bun.sh/)

### Installation

```sh
pnpm install
# or
npm install
# or
bun install
```

### Development

```sh
pnpm dev
# or
npm run dev
# or
bun run dev
```

The app will be available at [http://localhost:5173](http://localhost:5173) by default.

### Build

```sh
pnpm build
# or
npm run build
# or
bun run build
```

### Lint

```sh
pnpm lint
# or
npm run lint
```

## Customization

- **Component Aliases**: Use aliases like `@/components`, `@/lib/utils` as defined in [vite.config.ts](vite.config.ts).
- **Theming**: Design tokens and color themes are managed in [`src/index.css`](src/index.css) and [`tailwind.config.ts`](tailwind.config.ts).

## License

[MIT](LICENSE) © Youth Support & Hope Foundation

---

> Built with ❤️ by Appforgex
Email: appforgex97@gmail.com
Watsapp: +250 794 500 945
