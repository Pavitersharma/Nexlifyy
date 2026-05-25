# NEXLIFYY — Premium Digital Agency Website

React.js + Tailwind CSS mein banaya gaya full website project.

---

## 🚀 Project Setup

### Prerequisites
- Node.js v18+
- npm ya yarn

### Installation

```bash
# 1. Project folder mein jao
cd nexlifyy-agency

# 2. Dependencies install karo
npm install

# 3. Dev server start karo
npm run dev
```

Browser mein khulega: **http://localhost:5173**

---

## 📁 Project Structure

```
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
│   │   └── content.js       ← Saara content ek jagah
│   ├── hooks/
│   │   └── useEffects.js    ← Custom hooks (cursor, scroll, counter)
│   ├── App.jsx              ← Main component
│   ├── main.jsx             ← Entry point
│   └── index.css            ← Global styles + Tailwind
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

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

## 🛠 Build for Production

```bash
npm run build
# Output: dist/ folder
```

---

## 🎨 Content Customize Karna

Saara content `src/data/content.js` mein hai:
- Services, Portfolio, Testimonials, Pricing Plans, FAQ
- Wahan se directly edit karo, baki automatically update ho jayega.

---

## 📦 Tech Stack

| Tool | Version |
|------|---------|
| React | 18.x |
| Vite | 5.x |
| Tailwind CSS | 3.x |
| PostCSS | 8.x |
