# Veenayak Sirohi - Portfolio 🚀

[🌐 **Live Website**](https://veenayaksirohi.github.io/veenayak_sirohi/)

![Next.js](https://img.shields.io/badge/Next.js-14-blue?logo=next.js)
![Docker](https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=white)
![Docker Compose](https://img.shields.io/badge/Docker%20Compose-2496ED?logo=docker&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-4.x-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-38bdf8?logo=tailwindcss&logoColor=white)
![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-Components-8b5cf6?logo=react)
![Lucide](https://img.shields.io/badge/Lucide-Icons-f59e42?logo=lucide)
![Contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg)

> "Design is not just what it looks like and feels like. Design is how it works." — Steve Jobs

A responsive portfolio for Veenayak Sirohi, DevOps Engineer at SarvaGram. Built with Next.js, TypeScript, and Tailwind CSS, with a static export for GitHub Pages and Docker Compose.

---

## 📦 Repository

[<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" width="28" height="28" style="vertical-align:middle;"/> veenayak_sirohi](https://github.com/veenayaksirohi/veenayak_sirohi.git)

---

## 📑 Table of Contents

- [Veenayak Sirohi - Portfolio 🚀](#veenayak-sirohi---portfolio-)
  - [📦 Repository](#-repository)
  - [📑 Table of Contents](#-table-of-contents)
  - [📁 Repository Structure](#-repository-structure)
  - [✨ Features](#-features)
  - [🛠️ Tech Stack](#️-tech-stack)
  - [🚦 Getting Started](#-getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Development](#development)
  - [🚀 Deployment](#-deployment)
  - [🎨 Customization](#-customization)
  - [📱 Responsive Design](#-responsive-design)
  - [⚡ Performance](#-performance)
  - [🔧 Scripts](#-scripts)
  - [📄 License](#-license)
  - [💬 Support](#-support)

---

## 📁 Repository Structure

```
veenayak_sirohi/
  ├── app/
  ├── components/
  │     ├── about.tsx
  │     ├── certifications.tsx
  │     ├── contact.tsx
  │     ├── experience.tsx
  │     ├── footer.tsx
  │     ├── hero.tsx
  │     ├── navigation.tsx
  │     ├── projects.tsx
  │     ├── resume.tsx
  │     ├── skills.tsx
  │     ├── theme-provider.tsx
  │     └── ui/
  ├── hooks/
  ├── lib/
  ├── public/
  │     ├── certificate_img/
  │     ├── profile-avatar.png
  │     ├── veenayak_Resume.pdf
  │     └── ...
  ├── styles/
  ├── package.json
  ├── next.config.js
  ├── tailwind.config.ts
  ├── tsconfig.json
  ├── README.md
  └── ...
```

---

## ✨ Features

- **Modern Design**: Clean, professional, and visually appealing
- **Fully Responsive**: Optimized for all devices and screen sizes
- **Performance Optimized**: Fast loading and smooth interactions
- **SEO Friendly**: Proper meta tags and best practices
- **Accessibility**: Built with accessibility in mind
- **GitHub Pages Ready**: Easy deployment with GitHub Actions
- **Showcases**: Projects, skills, certifications, education, and contact info

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Containerization**: Docker, Docker Compose, and Nginx
- **Deployment**: GitHub Pages or Docker Compose

## 🚦 Getting Started

### Prerequisites

- Node.js 18+
- Git

### Installation

```bash
git clone https://github.com/veenayaksirohi/veenayak_sirohi.git
cd veenayak_sirohi
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Docker Compose

Requires Docker Engine and Docker Compose v2.22 or later. Build the static site, start Nginx, and enable file watching:

```bash
docker compose up --build --watch
```

Open [http://localhost:8080](http://localhost:8080). Compose watches the app, components, public assets, and build configuration, rebuilding the static site when they change. This command stays attached in the terminal. Press `Ctrl+C` to stop watching.

To run detached without watch mode, use:

```bash
docker compose up --build -d
```

To use another host port in watch mode, set `PORT`, for example `PORT=8081 docker compose up --build --watch`. Stop detached containers with `docker compose down`.

## 🚀 Deployment

- Automatic deployment via GitHub Actions to GitHub Pages on every push to main.
- Manual deployment: `npm run build` and `npm run export`.
- Container deployment: `docker compose up --build -d`.

## 🎨 Customization

- Update portfolio content in `components/portfolio.tsx`.
- Update SEO metadata in `app/layout.tsx`.
- Change colors in `tailwind.config.ts`.
- Replace images in `public/`.

## 📱 Responsive Design

- Desktop, tablet, and mobile optimized.

## ⚡ Performance

- Lighthouse score 95+ across all metrics
- Core Web Vitals optimized
- Next.js Image component for optimal loading
- Automatic code splitting

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run export` - Export static files for GitHub Pages

## 📄 License

MIT License

## 💬 Support

- **Email**: veenayaksirohi@gmail.com
- **LinkedIn**: [Veenayak Sirohi LinkedIn](https://www.linkedin.com/in/veenayaksirohi)
- **GitHub**: [veenayaksirohi](https://github.com/veenayaksirohi)

---

**Made with ❤️ using Next.js and Tailwind CSS**
