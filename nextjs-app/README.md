# M&A Wedding Studio - Next.js Version

Artystyczna wersja strony M&A Wedding Studio zbudowana w React + Next.js z zaawansowanymi efektami wizualnymi.

## 🎨 Funkcje Artystyczne

- ✨ **Animacje Framer Motion** - płynne przejścia i animacje
- 🎭 **Efekty Parallax** - interaktywne tła reagujące na ruch myszy
- 💫 **Floating Particles** - unoszące się cząsteczki w sekcji Hero
- 🌈 **Gradient Animations** - animowane gradienty tekstowe
- ✨ **Shimmer Effects** - efekty migotania na kartach
- 🎪 **Interactive Hover Effects** - zaawansowane efekty hover
- 📱 **Responsive Design** - pełna responsywność na wszystkich urządzeniach

## 🚀 Technologie

- **Next.js 14** - React framework z App Router
- **TypeScript** - type safety
- **Tailwind CSS** - utility-first CSS
- **Framer Motion** - biblioteka animacji
- **React Intersection Observer** - animacje przy scrollowaniu

## 📦 Instalacja

```bash
cd nextjs-app
npm install
```

## 🏃 Uruchomienie

```bash
# Development
npm run dev

# Production build
npm run build
npm start
```

## 📁 Struktura Projektu

```
nextjs-app/
├── app/
│   ├── layout.tsx      # Główny layout
│   ├── page.tsx        # Strona główna
│   └── globals.css     # Globalne style
├── components/
│   ├── layout/
│   │   ├── Header.tsx  # Header z animacjami
│   │   └── Footer.tsx  # Footer
│   └── sections/
│       ├── Hero.tsx    # Sekcja Hero z efektami
│       ├── Packages.tsx # Pakiety usług
│       ├── About.tsx   # O nas
│       ├── Blog.tsx    # Blog
│       ├── FAQ.tsx     # FAQ z accordion
│       └── Contact.tsx # Formularz kontaktowy
└── public/
    └── cropped-logo-ma-1.png
```

## 🎯 Komponenty

### Header

- Sticky header z efektem blur
- Animowane linki nawigacyjne
- Responsive mobile menu
- Smooth scroll

### Hero

- Parallax effect na tle
- Floating particles
- Animowany gradient overlay
- Interaktywny content reagujący na mysz
- Scroll indicator

### Packages

- Karty pakietów z efektami hover
- Shimmer effects
- Animowane ikony checkmark
- Featured package highlight

### Blog

- Grid layout z animacjami
- Hover effects na kartach
- Date badges
- Image zoom on hover

### FAQ

- Accordion z animacjami
- Smooth expand/collapse
- Hover effects

### Contact

- Formularz z walidacją
- Animowane pola input
- Social media links z efektami

## 🎨 Efekty Wizualne

### Animacje

- Fade in/out
- Slide up/down
- Scale animations
- Rotate animations
- Gradient shifts

### Interakcje

- Mouse parallax
- Hover transformations
- Click animations
- Scroll-triggered animations

### Wizualne

- Glass morphism
- Glow effects
- Shimmer effects
- Gradient animations
- Particle effects

## 🔧 Konfiguracja

### Obrazy zewnętrzne

Obrazy z Unsplash są skonfigurowane w `next.config.ts`. Aby dodać własne obrazy, dodaj domenę do `remotePatterns`.

### Kolory

Kolory można zmienić w `tailwind.config.ts` lub bezpośrednio w komponentach używając klas Tailwind.

## 📱 Responsywność

Strona jest w pełni responsywna z breakpointami:

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🚀 Deployment

### Vercel (Rekomendowane)

```bash
npm install -g vercel
vercel
```

### Inne platformy

```bash
npm run build
# Wgraj folder .next na serwer
```

## 📝 Notatki

- Wszystkie komponenty są client-side (`'use client'`) ze względu na użycie Framer Motion
- Obrazy są optymalizowane przez Next.js Image component
- Animacje są zoptymalizowane pod kątem wydajności

## 🎓 Nauka

Projekt demonstruje:

- Next.js App Router
- Framer Motion animations
- TypeScript w React
- Tailwind CSS utility classes
- Responsive design patterns
- Performance optimization

---

**Wersja:** 1.0.0  
**Framework:** Next.js 14  
**Styling:** Tailwind CSS  
**Animacje:** Framer Motion
