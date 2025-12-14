# Portfolio Website

A modern, responsive portfolio website built with Next.js 14, TypeScript, shadcn/ui, and Framer Motion. Features smooth scrolling, animated sections, and JSON-based content management.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14, TypeScript, Tailwind CSS
- **Beautiful UI**: shadcn/ui components with custom glassmorphism effects
- **Smooth Animations**: Framer Motion for scroll-triggered animations
- **Buttery Smooth Scrolling**: Lenis for premium scroll experience
- **Responsive Design**: Mobile-first approach, works on all devices
- **Easy Content Management**: JSON files for projects, experience, and education
- **Dark Theme**: Vibrant purple gradient accent colors
- **SEO Optimized**: Proper meta tags and semantic HTML

## 🛠️ Development

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 🎨 Customization

### Updating Content

All content is managed through JSON files in the `/data` directory:

- **Projects**: `data/projects.json`
- **Experience**: `data/experience.json`
- **Education**: `data/education.json`
- **Skills**: `data/skills.json`

### Personal Information

Update these files with your information:
- `components/sections/hero.tsx` - Name, role, social links
- `components/sections/about.tsx` - About text
- `components/sections/contact.tsx` - Email, phone, location
- `app/layout.tsx` - Metadata

## 📁 Project Structure

```
portfolio/
├── app/              # Next.js app directory
├── components/       # React components
│   ├── navigation/   # Navbar
│   ├── sections/     # Page sections
│   └── ui/           # shadcn/ui components
├── data/             # JSON content files
└── lib/              # Utilities
```

## 🎯 Technologies

- Next.js 14, TypeScript, Tailwind CSS
- shadcn/ui, Framer Motion, Lenis
- Lucide React Icons

---

Built with ❤️ using Next.js and shadcn/ui
