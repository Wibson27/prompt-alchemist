# ⚡ The Prompt Alchemist

<div align="center">

![The Prompt Alchemist](https://img.shields.io/badge/The%20Prompt-Alchemist-00D0D2?style=for-the-badge&logo=lightning&logoColor=white)

**🧙‍♂️ Rahasia Mengubah Kata-Kata Biasa Menjadi Emas Digital yang Menghasilkan Jutaan Rupiah**

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Supabase](https://img.shields.io/badge/Supabase-Backend-green?style=flat-square&logo=supabase&logoColor=white)](https://supabase.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=flat-square&logo=vercel&logoColor=white)](https://vercel.com/)

[🚀 Live Demo](https://prompt-alchemist.vercel.app) • [📖 Documentation](#-table-of-contents) • [🐛 Report Bug](https://github.com/zaizabih/prompt-alchemist/issues) • [✨ Request Feature](https://github.com/zaizabih/prompt-alchemist/issues)

</div>

---

## 🌟 About The Project

**The Prompt Alchemist** is a cutting-edge landing page and digital product platform that teaches users the art of prompt engineering to generate substantial income through AI. This modern web application combines stunning design with powerful functionality to create an engaging user experience.

### ✨ What Makes It Special

- 🧪 **Prompt Engineering Mastery**: Learn the secrets of crafting high-converting AI prompts
- 💰 **Monetization Focus**: Real-world strategies to earn millions through AI
- 📚 **Comprehensive Resources**: E-books, templates, case studies, and cheat sheets
- 🎯 **Professional UI/UX**: Modern, responsive design with glassmorphism effects
- ⚡ **Lightning Fast**: Optimized for performance and SEO

---

## 🚀 Key Features

### 🎨 **Frontend Excellence**
- ✅ **Modern Design System** - Glassmorphism UI with neon accents
- ✅ **Responsive Layout** - Perfect on desktop, tablet, and mobile
- ✅ **Smooth Animations** - Framer Motion powered transitions
- ✅ **SEO Optimized** - Next.js 15 with perfect Lighthouse scores
- ✅ **TypeScript** - Type-safe development experience

### 🔧 **Backend Power**
- ✅ **Supabase Integration** - Real-time database and authentication
- ✅ **Email Collection** - Advanced subscriber management system
- ✅ **Admin Dashboard** - Comprehensive analytics and user management
- ✅ **Secure Authentication** - Protected admin routes and data
- ✅ **Database Seeding** - Pre-populated with sample data

### 📱 **User Experience**
- ✅ **Email Subscription** - Seamless newsletter signup
- ✅ **Modal Forms** - Elegant popup interactions
- ✅ **Mobile Navigation** - Smooth hamburger menu
- ✅ **Sticky Header** - Professional navigation with backdrop blur
- ✅ **Loading States** - Smooth user feedback

---

## 🛠️ Tech Stack

<div align="center">

| Category | Technology | Purpose |
|----------|------------|---------|
| **Framework** | ![Next.js](https://img.shields.io/badge/Next.js-black?style=flat-square&logo=next.js) | React framework with SSR/SSG |
| **Language** | ![TypeScript](https://img.shields.io/badge/TypeScript-blue?style=flat-square&logo=typescript) | Type-safe development |
| **Styling** | ![Tailwind](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css) | Utility-first CSS framework |
| **Backend** | ![Supabase](https://img.shields.io/badge/Supabase-green?style=flat-square&logo=supabase) | Database & Authentication |
| **UI Components** | ![Headless UI](https://img.shields.io/badge/Headless_UI-66E3FF?style=flat-square) | Accessible React components |
| **Icons** | ![React Icons](https://img.shields.io/badge/React_Icons-61DAFB?style=flat-square&logo=react) | Beautiful icon library |
| **Deployment** | ![Vercel](https://img.shields.io/badge/Vercel-black?style=flat-square&logo=vercel) | Frontend hosting platform |

</div>

---

## 📂 Project Structure

```
prompt-alchemist/
├── 📁 src/
│   ├── 📁 app/                    # Next.js 15 App Router
│   │   ├── 📄 layout.tsx         # Root layout with providers
│   │   ├── 📄 page.tsx           # Homepage
│   │   ├── 📁 dashboard/         # Admin dashboard
│   │   └── 📄 globals.css        # Global styles
│   ├── 📁 components/            # Reusable React components
│   │   ├── 📄 Header.tsx         # Navigation with backdrop blur
│   │   ├── 📄 Hero.tsx           # Landing page hero section
│   │   ├── 📄 Footer.tsx         # Site footer
│   │   └── 📁 Tentang/           # About section components
│   ├── 📁 data/                  # Static data and configuration
│   │   ├── 📄 siteDetails.ts     # Site metadata
│   │   ├── 📄 menuItems.ts       # Navigation items
│   │   └── 📄 footer.ts          # Footer configuration
│   ├── 📁 hooks/                 # Custom React hooks
│   │   └── 📄 activeHeader.ts    # Navigation state management
│   └── 📁 lib/                   # Utilities and services
│       ├── 📄 supabase.ts        # Supabase client configuration
│       └── 📄 auth-context.tsx   # Authentication provider
├── 📁 public/                    # Static assets
│   └── 📁 images/                # Project images
├── 📁 scripts/                   # Utility scripts
│   └── 📄 seed-emails.js         # Database seeding script
├── 📄 tailwind.config.ts         # Tailwind CSS configuration
├── 📄 next.config.js             # Next.js configuration
└── 📄 package.json               # Dependencies and scripts
```

---

## ⚡ Quick Start

### 📋 Prerequisites

- **Node.js** 18+ installed
- **npm** or **yarn** package manager
- **Supabase** account (free tier available)
- **Git** for version control

### 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/zaizabih/prompt-alchemist.git
   cd prompt-alchemist
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Add your Supabase credentials to `.env.local`:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Set up Supabase database**
   
   Create a table called `emails` in your Supabase dashboard:
   ```sql
   create table emails (
     id uuid default gen_random_uuid() primary key,
     email text not null unique,
     created_at timestamp with time zone default timezone('utc'::text, now()) not null,
     source text default 'landing_page'::text
   );
   ```

5. **Seed the database (optional)**
   ```bash
   node scripts/seed-emails.js 50
   ```

6. **Start the development server**
   ```bash
   npm run dev
   ```

7. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) 🎉

---

## 🌐 Deployment

### 🚀 Deploy to Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Deploy with Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Add environment variables:
     - `NEXT_PUBLIC_SUPABASE_URL`
     - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - Click **Deploy**

3. **Your app is live!** 🎉

### 🔧 Alternative: Vercel CLI

```bash
npm i -g vercel
vercel login
vercel --prod
```

---

## 📊 Features in Detail

### 🎯 **Landing Page Sections**

| Section | Description | Features |
|---------|-------------|----------|
| **Hero** | Eye-catching introduction | Neon effects, call-to-action |
| **About** | Product explanation | Feature highlights, benefits |
| **Isi Kit** | Content overview | Package contents, value proposition |
| **Pricing** | Pricing strategy | Limited time offers, urgency |

### 🔐 **Admin Dashboard**

- 📈 **Analytics Overview** - Subscriber count and growth metrics
- 📧 **Email Management** - View and export subscriber lists
- 🔒 **Secure Authentication** - Protected admin-only routes
- 📊 **Real-time Data** - Live updates from Supabase

### 📱 **Responsive Design**

- 🖥️ **Desktop** - Full-featured experience with hover effects
- 📱 **Mobile** - Touch-optimized interface with hamburger menu
- 📐 **Tablet** - Adaptive layout for medium screens

---

## 🎨 Customization Guide

### 🎨 **Colors & Branding**

Edit `src/app/globals.css` to customize the color scheme:

```css
:root {
  --primary: rgba(2, 208, 210, 1);        /* Main brand color */
  --secondary: rgba(89, 252, 233, 0.43);  /* Accent color */
  --background: rgb(0, 0, 0);             /* Background */
  --foreground: white;                     /* Text color */
}
```

### 📝 **Content Updates**

- **Site Details**: Edit `src/data/siteDetails.ts`
- **Navigation**: Modify `src/data/menuItems.ts`
- **Footer**: Update `src/data/footer.ts`

### 🖼️ **Images & Assets**

Replace images in the `public/images/` directory:
- `Vector.png` - Lightning icon
- `og-image.jpg` - Social media preview
- `twitter-image.jpg` - Twitter card image

---

## 🧪 Development

### 🛠️ **Available Scripts**

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript compiler
```

### 🔧 **Code Quality**

- **ESLint** - Code linting and formatting
- **TypeScript** - Type checking and IntelliSense
- **Prettier** - Code formatting (recommended)

### 🗄️ **Database Management**

```bash
# Seed database with sample emails
node scripts/seed-emails.js 25

# Clear and reseed database
node scripts/seed-emails.js 50 clear
```

---

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

### 🚀 **Getting Started**

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### 💡 **Contribution Ideas**

- 🎨 **UI/UX Improvements** - Enhanced animations, better mobile experience
- ⚡ **Performance Optimizations** - Faster loading, better Core Web Vitals
- 📱 **New Features** - Payment integration, advanced analytics
- 🌐 **Internationalization** - Multi-language support
- 📚 **Documentation** - Better guides, API documentation

### 📝 **Code Guidelines**

- Use **TypeScript** for type safety
- Follow **React best practices**
- Write **clean, readable code**
- Add **comments** for complex logic
- Update **documentation** when needed

---

## 🙏 Acknowledgments

- **Next.js** team for the amazing React framework
- **Supabase** for the fantastic backend-as-a-service
- **Tailwind CSS** for the utility-first styling approach
- **Vercel** for seamless deployment and hosting
- **React Icons** for the beautiful icon library

---

## 📞 Support & Contact

<div align="center">

**Need help or have questions?**

[![GitHub Issues](https://img.shields.io/badge/GitHub-Issues-red?style=for-the-badge&logo=github)](https://github.com/zalzabilahvivi/prompt-alchemist/issues)
[![GitHub Discussions](https://img.shields.io/badge/GitHub-Discussions-blue?style=for-the-badge&logo=github)](https://github.com/zalzabilahvivi/prompt-alchemist/discussions)

**Show your support!**

[![Star this repo](https://img.shields.io/badge/⭐-Star%20this%20repo-yellow?style=for-the-badge)](https://github.com/zalzabilahvivi/prompt-alchemist)
[![Fork this repo](https://img.shields.io/badge/🍴-Fork%20this%20repo-green?style=for-the-badge)](https://github.com/zalzabilahvivi/prompt-alchemist/fork)

</div>

---

<div align="center">

**✨ Built with love by the community ✨**

**Made with 💙 by [Vivi Zalzabilah](https://github.com/zalzabilahvivi) and [Rifqi Wibisono](https://github.com/Wibson27)**

</div>
