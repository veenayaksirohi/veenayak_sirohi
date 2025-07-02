# Personal Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Designed for GitHub Pages deployment with a focus on performance, accessibility, and user experience.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Fully Responsive**: Optimized for all devices and screen sizes
- **Performance Optimized**: Fast loading times and smooth interactions
- **SEO Friendly**: Optimized for search engines with proper meta tags
- **Accessibility**: Built with accessibility best practices
- **GitHub Pages Ready**: Configured for easy deployment to GitHub Pages

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Deployment**: GitHub Pages with GitHub Actions

## 📋 Sections

- **Hero**: Eye-catching introduction with call-to-action
- **About**: Personal story and core values
- **Resume**: Education, experience, and skills overview
- **Work Experience**: Detailed professional history
- **Skills**: Technical and soft skills with proficiency levels
- **Projects**: Showcase of recent work and personal projects
- **Certifications**: Professional certifications and achievements
- **Testimonials**: Client feedback and recommendations
- **Blog**: Latest articles and insights
- **Contact**: Contact form and social links

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- Git installed
- GitHub account

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/yourusername/portfolio-website.git
   cd portfolio-website
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **Start development server**
   \`\`\`bash
   npm run dev
   \`\`\`

4. **Open in browser**
   Navigate to `http://localhost:3000`

## 📦 Deployment to GitHub Pages

### Automatic Deployment (Recommended)

1. **Update configuration**
   - Edit `next.config.js` and replace `your-repo-name` with your actual repository name
   - Update personal information in all components

2. **Push to GitHub**
   \`\`\`bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   \`\`\`

3. **Enable GitHub Pages**
   - Go to your repository settings
   - Navigate to "Pages" section
   - Select "GitHub Actions" as the source
   - The site will automatically deploy on every push to main

### Manual Deployment

1. **Build the project**
   \`\`\`bash
   npm run build
   \`\`\`

2. **Deploy to GitHub Pages**
   \`\`\`bash
   npm run export
   \`\`\`

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

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/yourusername/portfolio-website/issues).

## 📞 Support

If you have any questions or need help with setup, feel free to reach out:

- **Email**: your.email@example.com
- **LinkedIn**: [Your LinkedIn Profile](https://linkedin.com/in/yourusername)
- **GitHub**: [Your GitHub Profile](https://github.com/yourusername)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) for the beautiful UI components
- [Lucide](https://lucide.dev/) for the icon library

---

**Made with ❤️ using Next.js and Tailwind CSS**
