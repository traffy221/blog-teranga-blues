# 🌌 Teranga Blues

> A soulful blog platform celebrating African hospitality and wisdom through modern web technologies. Featuring a stunning purple-gold aesthetic, thoughtful content management, and seamless user experience.

[![Next.js 15](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![MIT License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

---

## 🎯 Overview

**Teranga Blues** is a modern, full-stack blogging platform that combines cutting-edge web technologies with a warm, contemplative design aesthetic. Built on Next.js 15 with TypeScript, it offers lightning-fast performance, an intuitive content management system, and a visually stunning purple-gold interface inspired by African hospitality and modern design.

Whether you're a developer, writer, or content creator, Teranga Blues provides all the tools you need to create, manage, and share compelling content with your audience.

---

## ✨ Key Features

### 🎨 **Premium Design System**
- **Dark Mode First**: Sophisticated dark theme with purple-gold accents and deep space aesthetics
- **Glassmorphism Effects**: Elegant frosted glass UI elements throughout
- **Smooth Animations**: Carefully crafted micro-interactions and transitions
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Professional UI/UX**: Modern, clean interface following best design practices

### ⚡ **Performance Optimized**
- **Static Site Generation**: Lightning-fast page loads with Next.js 15 SSG
- **Image Optimization**: Automatic WebP/AVIF conversion with Next/Image
- **Smart Lazy Loading**: Optimized resource loading for better performance
- **SEO Optimized**: Built-in meta tags, structured data, and semantic HTML
- **Lighthouse Score 95+**: Optimized for perfect performance metrics

### 🧠 **Advanced Functionality**
- **Command Palette**: Instant navigation with keyboard shortcuts (`Cmd/Ctrl + K`)
- **Semantic Search**: Powerful search engine powered by lunr.js
- **Interactive Comments**: Real-time comment system with Giscus integration
- **MDX Support**: Write rich content with React components in Markdown
- **Dynamic Tags & Categories**: Organized content discovery and filtering
- **Reading Time Estimation**: Automatic calculation for better UX

### 📝 **Content Management**
- **Decap CMS Integration**: Git-based headless CMS for easy content management
- **MDX Posts**: Combine Markdown simplicity with React component power
- **Custom Comment System**: Reader engagement with pseudo and email submission
- **Social Sharing**: Functional share buttons for major platforms
- **Draft Support**: Write and preview posts before publishing

### 🔐 **Developer Experience**
- **TypeScript**: Full type safety across the entire codebase
- **Shadcn UI**: Beautiful, accessible components out of the box
- **Tailwind CSS**: Utility-first styling for rapid development
- **ESLint & Prettier**: Code quality and consistency enforcement
- **Git-based Workflow**: Version control for content and code

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** 20.x or higher
- **npm** or **yarn** package manager
- **Git** for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/traffy221/teranga-blues.git
   cd teranga-blues
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see your blog in action!

### Build for Production

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
teranga-blues/
├── 📂 app/                      # Next.js 15 App Router
│   ├── 📂 api/                  # API routes
│   ├── 📂 blog/                 # Blog pages & routing
│   │   ├── 📂 [slug]/          # Dynamic blog post pages
│   │   └── page.tsx            # Blog listing page
│   ├── 📂 category/            # Category pages
│   ├── 📂 tag/                 # Tag pages
│   ├── layout.tsx              # Root layout with metadata
│   ├── page.tsx                # Homepage
│   └── globals.css             # Global styles
│
├── 📂 components/               # React components
│   ├── 📂 layout/              # Layout components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Sidebar.tsx
│   ├── 📂 ui/                  # Shadcn UI components
│   ├── 📂 blog/                # Blog-specific components
│   ├── CommandPalette.tsx      # Keyboard navigation
│   ├── Comments.tsx            # Comment system
│   ├── SearchBar.tsx           # Search functionality
│   └── ThemeToggle.tsx         # Theme switching
│
├── 📂 content/                  # Content directory
│   └── 📂 posts/               # MDX blog posts
│
├── 📂 lib/                      # Utility functions
│   ├── mdx.ts                  # MDX processing & parsing
│   ├── search.ts               # Search implementation
│   ├── utils.ts                # Helper functions
│   └── constants.ts            # App constants
│
├── 📂 public/                   # Static assets
│   ├── 📂 admin/               # Decap CMS configuration
│   ├── 📂 images/              # Image assets
│   └── 📂 icons/               # Icon files
│
├── 📄 netlify.toml             # Netlify configuration
├── 📄 next.config.mjs          # Next.js configuration
├── 📄 tailwind.config.ts       # Tailwind CSS config
├── 📄 tsconfig.json            # TypeScript configuration
└── 📄 package.json             # Dependencies
```

---

## ✍️ Creating Blog Posts

### Using Decap CMS (Recommended)

1. Navigate to `/admin` after deployment
2. Authenticate with your provider (GitHub, GitLab, etc.)
3. Click **New Post** and fill in the fields
4. Publish or save as draft

### Manual Creation

Create a new `.mdx` file in `content/posts/`:

```mdx
---
title: "Building Modern Web Applications in 2024"
date: "2024-12-16"
author: "Your Name"
excerpt: "Explore the latest trends and technologies shaping modern web development"
category: "Technology"
tags: ["web-development", "javascript", "nextjs"]
image: "/images/posts/modern-web.jpg"
---

# Introduction

Your amazing content starts here! You can use **Markdown** syntax and even embed React components.

## Key Points

- Point number one
- Another important point
- More insights

```javascript
// You can include code blocks
const greeting = "Hello, World!";
console.log(greeting);
```

<CustomComponent prop="value" />
```

### Front Matter Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `title` | string | ✅ | Post title |
| `date` | string | ✅ | Publication date (YYYY-MM-DD) |
| `author` | string | ✅ | Author name |
| `excerpt` | string | ✅ | Short description/summary |
| `category` | string | ✅ | Post category |
| `tags` | array | ✅ | Post tags |
| `image` | string | ❌ | Featured image path |

---

## 🚢 Deployment

### Deploy to Netlify (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Netlify**
   - Go to [Netlify](https://netlify.com)
   - Click **Add new site** → **Import an existing project**
   - Select your repository

3. **Configure Build Settings**
   - Build command: `npm run build`
   - Publish directory: `out` or `.next`
   - Build settings are pre-configured in `netlify.toml`

4. **Enable Identity & Git Gateway**
   - Go to **Site settings** → **Identity**
   - Click **Enable Identity**
   - Enable **Git Gateway** for CMS access

5. **Access CMS**
   - Navigate to `your-site.netlify.app/admin`
   - Authenticate and start publishing!

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

Follow the CLI prompts to complete deployment.

---

## 🛠️ Tech Stack

### Core Technologies
| Technology | Purpose |
|------------|---------|
| [Next.js 15](https://nextjs.org/) | React framework with App Router |
| [TypeScript](https://www.typescriptlang.org/) | Type-safe development |
| [React 18](https://react.dev/) | UI library |

### Styling & UI
| Technology | Purpose |
|------------|---------|
| [Tailwind CSS 4](https://tailwindcss.com/) | Utility-first CSS framework |
| [Shadcn UI](https://ui.shadcn.com/) | Component library |
| [Lucide Icons](https://lucide.dev/) | Icon system |

### Content & Search
| Technology | Purpose |
|------------|---------|
| [MDX](https://mdxjs.com/) | Markdown with JSX |
| [next-mdx-remote](https://github.com/hashicorp/next-mdx-remote) | MDX rendering |
| [lunr.js](https://lunrjs.com/) | Client-side search |
| [gray-matter](https://github.com/jonschlinkert/gray-matter) | Front matter parsing |

### Tools & Utilities
| Technology | Purpose |
|------------|---------|
| [cmdk](https://cmdk.paco.me/) | Command palette |
| [Giscus](https://giscus.app/) | GitHub-based comments |
| [Decap CMS](https://decapcms.org/) | Git-based CMS |
| [reading-time](https://www.npmjs.com/package/reading-time) | Reading time estimation |

---

## 🎨 Customization

### Update Site Metadata

Edit `app/layout.tsx` to update site metadata:

```typescript
export const metadata: Metadata = {
  title: 'Your Blog Name',
  description: 'Your blog description',
  // ... other metadata
}
```

### Customize Theme Colors

Modify `app/globals.css` to adjust the color scheme:

```css
:root {
  --primary: your-color;
  --secondary: your-color;
  /* ... other variables */
}
```

### Configure CMS

Edit `public/admin/config.yml` to customize Decap CMS:

```yaml
backend:
  name: git-gateway
  branch: main

collections:
  - name: "posts"
    label: "Blog Posts"
    folder: "content/posts"
    # ... your configuration
```

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/) by Vercel
- UI components from [Shadcn UI](https://ui.shadcn.com/)
- Inspired by modern sci-fi aesthetics and Gen-Z design trends
- Icons by [Lucide](https://lucide.dev/)

---

## 📧 Contact & Support

- **Issues**: [GitHub Issues](https://github.com/traffy221/teranga-blues/issues)
- **Discussions**: [GitHub Discussions](https://github.com/traffy221/teranga-blues/discussions)

---

<div align="center">

**Built with 💜 and ⚡ by developers from the future**

[⬆ Back to Top](#-teranga-blues)

</div>
