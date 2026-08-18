# Salman Shaik - Premium Personal Portfolio

A state-of-the-art, highly animated personal portfolio website for **Salman Shaik** (Senior Conversational AI Developer, DevOps Engineer & Cloud Architect). Built with React 19, Vite, Tailwind CSS, Framer Motion, GSAP, and Lenis smooth scrolling.

![Dark Mode Portfolio Showcase](https://img.shields.io/badge/Theme-Dark%20%2309090B-00E5FF?style=for-the-badge)
![Tech Stack](https://img.shields.io/badge/Stack-React%2019%20%7C%20Vite%20%7C%20TailwindCSS-7C3AED?style=for-the-badge)
![Animations](https://img.shields.io/badge/Animations-Framer%20Motion%20%2B%20Lenis-22C55E?style=for-the-badge)

---

## 🚀 Key Features & Highlights

- **11 Complete Portfolio Sections**:
  1. **Hero**: Typewriter role animation, glowing status pill, background canvas mesh, magnetic CTA buttons, resume action.
  2. **About**: 3.5+ years experience badge, TCS experience highlights, Google Cloud & AWS mastery, career timeline milestones.
  3. **Skills**: Categorized matrices for Cloud, DevOps, Conversational AI, Programming, and Database with level progress indicators.
  4. **Services**: 10 enterprise service cards (Conversational AI, Enterprise Chatbots, Voice Bots, Cloud DevOps, CI/CD, Migration, AI Integrations, APIs, Prompts, Architecture).
  5. **Experience**: TCS, Google CCAI/Document AI projects, AWS DevOps timeline.
  6. **Certifications**: Modern glass cards for AWS Practitioner, AWS Developer, AWS SysOps, Azure AZ-900, GCP Digital Leader.
  7. **Projects**: 6 showcase project cards with category filter, detail modal drawer, tech stack tags, GitHub & Live demo links.
  8. **Testimonials**: Interactive animated testimonial slider with reviewer quotes and ratings.
  9. **Statistics**: Viewport-triggered animated counters for Experience, Projects, Certifications, and Clients.
  10. **Contact**: EmailJS form integration, client validation, confetti celebration on submit, WhatsApp quick button, dark Google Maps embed.
  11. **Footer**: Minimal modern design with quick links, social channels, and magnetic Back to Top button.
- **Micro-interactions & UX**:
  - Lenis smooth inertial scrolling
  - Dynamic magnetic custom mouse follower
  - 3D card tilt & spotlight hover effects
  - Scroll progress bar at top
  - Glassmorphism backdrop blurs & subtle neon ambient glows

---

## 🛠️ Technology Stack

- **Framework**: React 19
- **Build Tool**: Vite 6
- **Styling**: Tailwind CSS v3 + Custom Design Tokens (`#09090B`, `#18181B`, `#00E5FF`, `#7C3AED`, `#22C55E`)
- **Animation & Motion**: Framer Motion 12, GSAP, Canvas Confetti
- **Smooth Scroll**: Lenis (`@studio-freight/lenis` / `lenis`)
- **Icons**: Lucide React & React Icons
- **Form Handling**: EmailJS (`@emailjs/browser`)

---

## 📂 Project Structure

```
Portfolio_Salman/
├── public/
│   ├── favicon.svg
│   └── images/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── CustomCursor.jsx
│   │   ├── ScrollProgress.jsx
│   │   ├── BackgroundCanvas.jsx
│   │   ├── TiltCard.jsx
│   │   ├── MagneticButton.jsx
│   │   ├── AnimatedCounter.jsx
│   │   ├── ProjectModal.jsx
│   │   └── SectionHeader.jsx
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Services.jsx
│   │   ├── Experience.jsx
│   │   ├── Certifications.jsx
│   │   ├── Projects.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Stats.jsx
│   │   └── Contact.jsx
│   ├── data/
│   │   └── portfolioData.js
│   ├── hooks/
│   │   ├── useLenis.js
│   │   └── useMousePosition.js
│   ├── utils/
│   │   └── animations.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

---

## ⚡ Getting Started Locally

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn

### 1. Clone & Install Dependencies
```bash
cd Portfolio_Salman
npm install
```

### 2. Configure Environment Variables (Optional for EmailJS)
Create a `.env` file in the root directory:
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

> **Note**: If `.env` keys are omitted, the contact form automatically operates in fallback demo mode with animated confetti notifications!

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production
```bash
npm run build
```

---

## 🌐 Deployment Instructions

### 1. Deploying to Vercel

1. Push your repository to GitHub or GitLab.
2. Log into [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your `salman-shaik-portfolio` repository.
4. Framework Preset: **Vite**
5. Build Command: `npm run build`
6. Output Directory: `dist`
7. Add Environment Variables (if using custom EmailJS keys).
8. Click **"Deploy"**.

### 2. Deploying to Netlify

1. Log into [Netlify](https://netlify.com) and click **"Add new site"** → **"Import an existing project"**.
2. Select your repository provider (GitHub).
3. Build Settings:
   - **Build Command**: `npm run build`
   - **Publish directory**: `dist`
4. In **Site Configuration** → **Environment variables**, add your `VITE_EMAILJS_*` variables if needed.
5. Click **"Deploy site"**.

---

## 📄 License

Created for **Salman Shaik**. All rights reserved.
