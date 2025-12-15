# Quantum Blog

A futuristic, full-stack blog built with Next.js 15, TypeScript, and cutting-edge technologies. Features a sci-fi dark mode design with glassmorphism effects, neural search, command palette navigation, and quantum comment threads.

![Next.js 15](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8?style=flat-square&logo=tailwind-css)

## ✨ Features

### 🎨 Futuristic Design
- **Dark Mode First**: Sci-fi inspired design with deep space colors and neon accents
- **Glassmorphism**: Subtle frosted glass effects throughout the UI
- **Smooth Animations**: Micro-interactions and transitions for enhanced UX
- **Responsive**: Perfect on desktop, tablet, and mobile

### ⚡ Performance
- **Next.js 15 SSG**: Static Site Generation for ultra-fast load times
- **Image Optimization**: Next/Image with AVIF/WebP support
- **Lazy Loading**: Optimized asset loading
- **Lighthouse 95+**: Optimized for perfect performance scores

### 🧠 Advanced Features
- **Command Palette**: Ultra-fast navigation with `Cmd+K` (or `Ctrl+K`)
- **Neural Search**: Semantic search powered by lunr.js
- **Quantum Comments**: Giscus integration with ISR for real-time updates
- **MDX Support**: Rich content with React components in Markdown

### 📝 Content Management
- **Netlify CMS**: Git-based CMS for easy content management
- **MDX**: Write blog posts in Markdown with JSX components
- **Categories & Tags**: Organized content discovery
- **Reading Time**: Automatic reading time calculation

## 🚀 Quick Start

### Prerequisites
- Node.js 20+ 
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/quantum-blog.git
cd quantum-blog
```

2. **Install dependencies**
```bash
npm install
```

3. **Run development server**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
quantum-blog/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── blog/              # Blog pages
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # React components
│   ├── layout/           # Layout components
│   ├── ui/               # Shadcn UI components
│   ├── CommandPalette.tsx
│   └── Comments.tsx
├── content/              # MDX blog posts
│   └── posts/
├── lib/                  # Utilities
│   ├── mdx.ts           # MDX parsing
│   ├── search.ts        # Search implementation
│   └── utils.ts         # Helper functions
├── public/              # Static assets
│   ├── admin/          # Netlify CMS
│   └── images/
└── netlify.toml        # Netlify configuration
```

## ✍️ Writing Blog Posts

Create a new `.mdx` file in `content/posts/`:

```mdx
---
title: "Your Post Title"
date: "2024-12-14"
author: "Your Name"
excerpt: "A short description"
category: "Technology"
tags: ["tag1", "tag2"]
---

# Your Content Here

Write your content using Markdown and JSX!
```

## 🚢 Deployment to Netlify

1. Push to GitHub
2. Connect to Netlify
3. Build settings are in `netlify.toml`
4. Enable Netlify Identity for CMS

Access CMS at `/admin` after deployment.

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **UI**: Shadcn UI
- **Content**: MDX + next-mdx-remote
- **Search**: lunr.js
- **Command Palette**: cmdk
- **Comments**: Giscus
- **CMS**: Netlify CMS
- **Deployment**: Netlify

## 📄 License

MIT License

---

**Built with ⚡ by developers from 2035**
