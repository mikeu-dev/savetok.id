# 🗺️ Technical Blueprint: TikTok AdGate (TikDrop)

This document outlines the technical architecture, design principles, and integration strategies for the TikTok AdGate project.

## 🏗️ System Architecture

### 1. Frontend Architecture
- **Framework**: Next.js 16 (App Router) for Server-Side Rendering (SSR) and Static Site Generation (SSG).
- **Styling**: Tailwind CSS v4 using a utility-first approach with custom design tokens.
- **Components**: Built on top of [Radix UI](https://www.radix-ui.com/) and [Shadcn UI](https://ui.shadcn.com/) for accessibility and consistency.
- **Animations**: Framer Motion for smooth transitions and interactive micro-animations.

### 2. Backend & API Integration
- **TikTok API**: Integrated with the TikWM API for high-speed, watermark-free content extraction.
- **AI Engine**: Google GenKit for automated content generation and intelligent metadata parsing.
- **Database**: Firebase Firestore for real-time data persistence and user activity tracking.
- **Authentication**: Firebase Auth (Google Provider) for secure user sessions.

---

## 🛠️ Core Features Implementation

### URL Validation & Parsing
- Validates TikTok URLs using robust regex patterns.
- Handles various URL formats (mobile, desktop, and share links).
- Provides immediate feedback for invalid inputs.

### Ad-Gated Download Flow
- **Modal Logic**: Downloads are protected by an interactive ad modal.
- **Countdown Timer**: Uses a configurable timer (10-15s) to ensure ad viewability.
- **AdSense Integration**: Dynamic ad unit loading within the modal and strategically throughout the layout.

### Image Slides Processing
- Parses TikTok photo slide metadata.
- Fetches individual images and packages them into a `.zip` archive using `JSZip`.
- Client-side ZIP generation to reduce server load.

---

## 🎨 Design System

### Color Palette
- **Primary**: `HSL(210, 70%, 50%)` (Vibrant Blue) - Used for primary CTAs and active states.
- **Background**: `HSL(210, 10%, 20%)` (Deep Slate) - Modern dark mode foundation.
- **Accent**: `HSL(180, 60%, 60%)` (Cyan Mist) - For highlights and interactive cues.

### Typography
- **Primary**: `Inter` (Variable Font) - Optimized for legibility and modern look.
- **Monospace**: `Source Code Pro` - Used for technical displays and code snippets.

---

## 🔐 Security & Compliance

- **HWID Protection**: (Planned) Hardware ID verification for premium features.
- **HMAC Signing**: Integrity checks for API requests to prevent unauthorized access.
- **Data Privacy**: Minimal logging; user data is stored securely in Firestore with strict security rules.

---

## 📈 Performance Optimization

- **PWA Capabilities**: Service workers for caching and offline access.
- **Image Optimization**: Next.js Image component for automatic format conversion and lazy loading.
- **Turbopack**: Fast development builds and optimized production bundles.

---
*Last Updated: April 2026*