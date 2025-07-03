# Personal Portfolio Website 🚀

![Next.js](https://img.shields.io/badge/Next.js-14-blue?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-4.x-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-38bdf8?logo=tailwindcss&logoColor=white)
![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-Components-8b5cf6?logo=react)
![Lucide](https://img.shields.io/badge/Lucide-Icons-f59e42?logo=lucide)
![Contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg)

> "Design is not just what it looks like and feels like. Design is how it works." — Steve Jobs

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Designed for GitHub Pages deployment with a focus on performance, accessibility, and user experience.

---

## 📦 Repository

[<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" width="28" height="28" style="vertical-align:middle;"/> veenayak_sirohi-ua](https://github.com/veenayaksirohi/veenayak_sirohi-ua.git)

---

## 📑 Table of Contents

- [Personal Portfolio Website 🚀](#personal-portfolio-website-)
  - [📦 Repository](#-repository)
  - [📑 Table of Contents](#-table-of-contents)
  - [✨ Features](#-features)
  - [🛠️ Tech Stack](#️-tech-stack)
  - [🚦 Getting Started](#-getting-started)
    - [📦 Prerequisites](#-prerequisites)
    - [⚙️ Installation](#️-installation)
    - [💻 Development](#-development)
  - [🚀 Deployment](#-deployment)
    - [Automatic Deployment (Recommended)](#automatic-deployment-recommended)
    - [Manual Deployment](#manual-deployment)
  - [🎨 Customization](#-customization)
    - [Personal Information](#personal-information)
    - [Styling](#styling)
    - [Content](#content)
  - [📷 Sample Image](#-sample-image)
  - [📱 Responsive Design](#-responsive-design)
  - [⚡ Performance](#-performance)
  - [🔧 Scripts](#-scripts)
  - [📄 License](#-license)
  - [🤝 Contributing](#-contributing)
  - [💬 Support](#-support)
  - [🙏 Acknowledgments](#-acknowledgments)

---

## ✨ Features

- **Modern Design**: Clean, professional design with smooth animations
- **Fully Responsive**: Optimized for all devices and screen sizes
- **Performance Optimized**: Fast loading times and smooth interactions
- **SEO Friendly**: Optimized for search engines with proper meta tags
- **Accessibility**: Built with accessibility best practices
- **GitHub Pages Ready**: Configured for easy deployment to GitHub Pages

## 🛠️ Tech Stack

<p align="left">
  <a href="https://nextjs.org/" target="_blank">
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" alt="Next.js" width="40" height="40"/>
  </a>
  <a href="https://www.typescriptlang.org/" target="_blank">
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" width="40" height="40"/>
  </a>
  <a href="https://tailwindcss.com/" target="_blank">
    <img src="https://img.icons8.com/color/48/000000/tailwindcss.png" alt="Tailwind CSS" width="40" height="40"/>
  </a>
  <a href="https://ui.shadcn.com/" target="_blank"><img src="https://raw.githubusercontent.com/shadcn/ui/main/apps/www/public/favicon.ico" alt="shadcn/ui" width="40" height="40"/></a>
  <a href="https://lucide.dev/" target="_blank"><img src="https://lucide.dev/logo.svg" alt="Lucide" width="40" height="40"/></a>
</p>

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Deployment**: GitHub Pages with GitHub Actions

## 🚦 Getting Started

### 📦 Prerequisites

- Node.js 18+
- Git

### ⚙️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/veenayaksirohi/veenayak_sirohi-ua.git
   cd veenayak_sirohi-ua
   ```
2. **Install dependencies**
   ```bash
   npm install
   ```

### 💻 Development

Start the development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚀 Deployment

### Automatic Deployment (Recommended)

1. **Update configuration**
   - Edit `next.config.js` and replace `your-repo-name` with your actual repository name
   - Update personal information in all components
2. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```
3. **Enable GitHub Pages**
   - Go to your repository settings
   - Navigate to "Pages" section
   - Select "GitHub Actions" as the source
   - The site will automatically deploy on every push to main

### Manual Deployment

1. **Build the project**
   ```bash
   npm run build
   ```
2. **Export static files**
   ```bash
   npm run export
   ```

## 🎨 Customization

### Personal Information

Update the following files with your information:

- `components/hero.tsx` - Name, title, and introduction
- `components/about.tsx` - Personal story and values
- `components/resume.tsx` - Education and experience
- `components/work.tsx` - Work experience details
- `components/skills.tsx` - Technical skills
- `components/projects.tsx` - Project showcase
- `components/contact.tsx` - Contact information
- `app/layout.tsx` - SEO metadata

### Styling

- **Colors**: Modify the color scheme in `tailwind.config.ts`
- **Fonts**: Change fonts in `app/layout.tsx`
- **Components**: Customize UI components in the `components/ui` directory

### Content

- **Images**: Replace placeholder images in the `public` directory
- **Resume**: Add your resume PDF to the `public` directory
- **Projects**: Update project information and links

## 📷 Sample Image

<p align="center">
  <img width="300" height="300" src="/veenayak_sirohi/profile-avatar.png" alt="Profile Avatar">
</p>

## 📱 Responsive Design

The website is fully responsive and optimized for:

- **Desktop**: 1200px and above
- **Tablet**: 768px to 1199px
- **Mobile**: Below 768px

## ⚡ Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for excellent user experience
- **Image Optimization**: Next.js Image component for optimal loading
- **Code Splitting**: Automatic code splitting for faster page loads

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run export` - Export static files for GitHub Pages

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/veenayaksirohi/portfolio-website/issues).

## 💬 Support

<p align="left">
  <a href="mailto:veenayaksirohi@gmail.com" target="_blank">
    <img src="https://img.icons8.com/color/48/000000/gmail-new.png" alt="Email" width="32" height="32"/>
  </a>
  <a href="https://www.linkedin.com/in/veenayak-sirohi-ab30ab227" target="_blank">
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" width="32" height="32"/>
  </a>
  <a href="https://github.com/veenayaksirohi" target="_blank">
    <img src="https://img.icons8.com/ios-glyphs/30/ffffff/github.png" alt="GitHub" width="32" height="32" style="background:#333; border-radius:50%;"/>
  </a>
</p>

If you have any questions or need help with setup, feel free to reach out!

- **Email**: veenayaksirohi@gmail.com
- **LinkedIn**: [Veenayak Sirohi LinkedIn](https://www.linkedin.com/in/veenayak-sirohi-ab30ab227)
- **GitHub**: [veenayaksirohi](https://github.com/veenayaksirohi)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) for the beautiful UI components
- [Lucide](https://lucide.dev/) for the icon library

---

**Made with ❤️ using Next.js and Tailwind CSS**
