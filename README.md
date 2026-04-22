# 🚀 TikDrop (`tikdrop.my.id`)

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

**TikDrop** is a high-performance, production-ready Progressive Web Application (PWA) designed for seamless TikTok content extraction. Built with the latest **Next.js 16** and **GenKit AI**, it provides a premium user experience for downloading TikTok videos in HD, high-quality audio (MP3), or image slides without watermarks.

---

## ✨ Core Features

- **🛡️ Watermark-Free Downloads**: Precise extraction of TikTok video streams (MP4) and audio (MP3).
- **📦 Image Slides to ZIP**: Unique capability to parse TikTok photo slides and package them into a single `.zip` file.
- **📱 Native PWA Experience**: Fully installable on iOS, Android, and Desktop with offline support and optimized performance.
- **💰 Integrated Monetization**: Smart Google AdSense hooks with ad-gated download modals.
- **🌍 Multi-Language Support**: Full localization for English (`en`) and Indonesian (`id`).
- **♿ WCAG Accessibility**: Advanced accessibility widget (High Contrast, Large Text, Link Highlighting).
- **🔒 Secure Auth & History**: Synchronized user activity using Firebase Auth and Firestore.
- **🤖 AI-Powered Content**: Integrated with Google GenKit for intelligent background processing and content generation.

---

## 🛠️ Tech Stack

- **Core**: [Next.js 16](https://nextjs.org/) (App Router + Turbopack)
- **AI**: [Google GenKit](https://firebase.google.com/docs/genkit) & [Gemini API](https://ai.google.dev/)
- **UI/UX**: [Tailwind CSS v4](https://tailwindcss.com/), [Framer Motion](https://www.framer.com/motion/), [Shadcn UI](https://ui.shadcn.com/)
- **Backend**: [Firebase](https://firebase.google.com/) (Firestore, Auth, App Hosting)
- **State Management**: [Zustand](https://zustand-demo.pmnd.rs/) (Config Store)
- **Deployment**: [Vercel](https://vercel.com/) / [Firebase App Hosting](https://firebase.google.com/docs/app-hosting)

---

## 📂 Project Structure

```text
src/
├── app/            # Next.js App Router (Pages & API)
├── components/     # Reusable UI components (Shadcn + Custom)
├── ai/             # GenKit AI flows and logic
├── lib/            # Utilities, Firebase config, and shared logic
├── hooks/          # Custom React hooks
├── locales/        # i18n translation files
└── scripts/        # Build and maintenance scripts
```

---

## 🚀 Getting Started

### 1. Prerequisites
- Node.js 20.x or higher
- A Firebase Project
- Google Gemini API Key (for AI features)

### 2. Installation
```bash
git clone https://github.com/mikeu-dev/tiktok-adgate.git
cd tiktok-adgate
npm install
```

### 3. Environment Setup
Create a `.env.local` file based on `.env.example`:
```bash
cp .env.example .env.local
```
Fill in your Firebase credentials and API keys.

### 4. Run Development Server
```bash
npm run dev
```
Open [http://localhost:9002](http://localhost:9002) to view the app.

---

## 📄 Documentation

Detailed guides are available in the [`docs/`](docs/) directory:
- 🗺️ **[Blueprint](docs/blueprint.md)**: Technical architecture and style guidelines.
- 🔍 **[SEO Guide](docs/seo_verification_guide.md)**: Steps for Google Search Console and SEO optimization.
- 🤝 **[Contributing](CONTRIBUTING.md)**: How to contribute to this project.

---

## 🛡️ Legal & License

Distributed under the **MIT License**. See `LICENSE` for more information.

**Disclaimer**: This project is an independent tool and is **NOT AFFILIATED** with TikTok, ByteDance, or any of their corporate entities. Users are responsible for ensuring they have the right to download and use the content.

---
Built with ❤️ by [mikeu-dev](https://github.com/mikeu-dev)
