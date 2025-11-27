# Quick Start Guide - M&A Wedding Studio Next.js

## 🚀 Szybki Start

### 1. Instalacja zależności

```bash
cd nextjs-app
npm install
```

### 2. Dodaj logo

Skopiuj plik `cropped-logo-ma-1.png` do folderu `public/`:

```bash
cp ../_2pages/cropped-logo-ma-1.png public/
```

### 3. Uruchom serwer deweloperski

```bash
npm run dev
```

Strona będzie dostępna pod adresem: http://localhost:3000

## 📦 Co zostało zbudowane

### Komponenty Layout

- ✅ **Header** - Sticky header z animacjami, mobile menu
- ✅ **Footer** - Footer z linkami nawigacyjnymi

### Komponenty Sekcji

- ✅ **Hero** - Sekcja hero z parallax, floating particles, animacjami
- ✅ **Packages** - Pakiety usług z efektami hover i shimmer
- ✅ **Gallery** - Galeria obrazów z efektami zoom
- ✅ **About** - Sekcja "O nas" z animowanymi kartami
- ✅ **Blog** - Blog z kartami wpisów
- ✅ **FAQ** - Accordion z animacjami
- ✅ **Contact** - Formularz kontaktowy z walidacją

## 🎨 Efekty Wizualne

### Implementowane efekty:

1. **Framer Motion Animations**

   - Fade in/out
   - Slide animations
   - Scale transformations
   - Rotate animations

2. **Parallax Effects**

   - Mouse parallax w Hero
   - Scroll-triggered animations

3. **Interactive Elements**

   - Hover effects na kartach
   - Click animations
   - Shimmer effects
   - Glow effects

4. **Particle System**

   - Floating particles w Hero
   - Animated backgrounds

5. **Gradient Animations**
   - Animated gradient text
   - Gradient overlays
   - Color transitions

## 🔧 Konfiguracja

### Obrazy zewnętrzne

Obrazy z Unsplash są już skonfigurowane w `next.config.ts`.

### Kolory

Główne kolory używane w projekcie:

- Pink: `#e91e63` (pink-600)
- Purple: `#764ba2` (purple-600)
- Gradient: `from-pink-600 to-purple-600`

## 📱 Responsywność

Wszystkie komponenty są w pełni responsywne:

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px)
- Adaptive layouts

## 🐛 Rozwiązywanie problemów

### Problem: Obrazy się nie ładują

**Rozwiązanie:** Upewnij się, że dodałeś logo do folderu `public/`

### Problem: Animacje nie działają

**Rozwiązanie:** Sprawdź czy wszystkie zależności są zainstalowane:

```bash
npm install framer-motion react-intersection-observer
```

### Problem: TypeScript errors

**Rozwiązanie:** Uruchom:

```bash
npm run build
```

Aby zobaczyć wszystkie błędy TypeScript.

## 🚀 Deployment

### Vercel (Najłatwiejsze)

1. Zainstaluj Vercel CLI: `npm i -g vercel`
2. Uruchom: `vercel`
3. Postępuj zgodnie z instrukcjami

### Inne platformy

```bash
npm run build
npm start
```

## 📝 Następne kroki

1. Dodaj logo do `public/cropped-logo-ma-1.png`
2. Zastąp obrazy placeholder własnymi zdjęciami
3. Skonfiguruj formularz kontaktowy (backend)
4. Dodaj meta tags dla SEO
5. Zoptymalizuj obrazy

---

**Gotowe!** 🎉 Strona jest gotowa do użycia z artystycznymi efektami wizualnymi!
