# 🚀 NEXLIFYY — Premium Digital Agency Website

A high-performance, fully animated **Digital Agency Website** built with 
React.js + Tailwind CSS. Designed to showcase services, portfolio, 
pricing, and client testimonials with premium UI/UX.

## 🔗 Live Demo
👉 [Visit Nexlifyy](https://nexlifyy.com)

## 📸 Preview
<!-- Add a screenshot here — drag & drop image in GitHub editor -->

---

## ✨ Features

- ✅ Custom animated cursor
- ✅ Page loader with animation
- ✅ Scroll progress bar
- ✅ Sticky navbar (transparent → blurred on scroll)
- ✅ Mobile hamburger menu
- ✅ Parallax hero section
- ✅ Scroll-reveal animations
- ✅ Animated counters
- ✅ Auto-scrolling marquee
- ✅ Auto-scrolling testimonials carousel
- ✅ Floating particles
- ✅ FAQ accordion
- ✅ Contact form with floating labels
- ✅ Magnetic button effects
- ✅ Fully responsive (mobile, tablet, desktop)

---

## 🛠 Tech Stack

| Tool | Version |
|------|---------|
| React | 18.x |
| Vite | 5.x |
| Tailwind CSS | 3.x |
| PostCSS | 8.x |

---

## 🚀 Project Setup

### Prerequisites
- Node.js v18+
- npm or yarn

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Pavitersharma/nexlifyy-agency.git

# 2. Go into the project folder
cd nexlifyy-agency

# 3. Install dependencies
npm install

# 4. Start dev server
npm run dev
nexlifyy-agency/
├── public/
├── src/
│   ├── components/
│   │   ├── Loader.jsx       ← Intro loader animation
│   │   ├── Navbar.jsx       ← Fixed navigation + mobile menu
│   │   ├── Hero.jsx         ← Hero section with parallax
│   │   ├── Marquee.jsx      ← Scrolling services marquee
│   │   ├── About.jsx        ← About section with counters
│   │   ├── Services.jsx     ← 6 service cards
│   │   ├── Process.jsx      ← 4-step process
│   │   ├── Portfolio.jsx    ← Portfolio grid
│   │   ├── Testimonials.jsx ← Auto-scrolling testimonials
│   │   ├── Pricing.jsx      ← 3 pricing plans
│   │   ├── FAQ.jsx          ← Accordion FAQ
│   │   ├── Contact.jsx      ← Contact form
│   │   ├── Footer.jsx       ← Footer with newsletter
│   │   └── Particles.jsx    ← Floating particles
│   ├── data/
│   │   └── content.js       ← All content in one place
│   ├── hooks/
│   │   └── useEffects.js    ← Custom hooks (cursor, scroll, counter)
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
