# Dokumentacja - Alternatywne Frameworki dla M&A Wedding Studio

## Spis Treści

1. [Obecne rozwiązanie](#obecne-rozwiązanie)
2. [Propozycje frameworków](#propozycje-frameworków)
3. [Porównanie frameworków](#porównanie-frameworków)
4. [Przykłady implementacji](#przykłady-implementacji)
5. [Plan migracji](#plan-migracji)
6. [Rekomendacje](#rekomendacje)

---

## Obecne rozwiązanie

### Technologie
- **HTML5** - struktura strony
- **CSS3** - style inline w `<style>` tagu
- **Vanilla JavaScript** - FAQ accordion functionality
- **Single Page Application** - wszystko w jednym pliku `index.html`

### Zalety obecnego rozwiązania
- ✅ Prosta struktura - jeden plik
- ✅ Szybkie ładowanie - brak zależności zewnętrznych
- ✅ Łatwe wdrożenie - wystarczy wgrać plik na serwer
- ✅ SEO-friendly - pełna kontrola nad HTML
- ✅ Niski koszt utrzymania

### Wady obecnego rozwiązania
- ❌ Trudność w zarządzaniu dużym kodem
- ❌ Brak komponentów - duplikacja kodu
- ❌ Ograniczone możliwości interaktywności
- ❌ Trudność w testowaniu
- ❌ Brak systemu zarządzania stanem

---

## Propozycje frameworków

### 1. React + Next.js

**Opis:** React to biblioteka JavaScript do budowania interfejsów użytkownika. Next.js to framework oparty na React, który oferuje Server-Side Rendering (SSR) i Static Site Generation (SSG).

**Zalety:**
- ✅ Ogromna społeczność i ekosystem
- ✅ Komponenty wielokrotnego użytku
- ✅ SSR/SSG dla lepszego SEO
- ✅ Automatyczna optymalizacja obrazów
- ✅ Routing out-of-the-box
- ✅ Doskonałe narzędzia deweloperskie

**Wady:**
- ❌ Większa złożoność setupu
- ❌ Wymaga Node.js do developmentu
- ❌ Większy bundle size
- ❌ Krzywa uczenia

**Kiedy użyć:**
- Gdy planujesz rozbudowę funkcjonalności
- Gdy potrzebujesz dynamicznych treści
- Gdy chcesz zintegrować z CMS
- Gdy potrzebujesz lepszego SEO

**Przykładowa struktura:**
```
ma-weddingstudio/
├── pages/
│   ├── index.js          # Strona główna
│   ├── oferta.js         # Strona oferty
│   ├── blog.js           # Lista blogów
│   └── kontakt.js        # Formularz kontaktowy
├── components/
│   ├── Header.js
│   ├── Hero.js
│   ├── PackageCard.js
│   ├── BlogCard.js
│   ├── FAQItem.js
│   └── ContactForm.js
├── styles/
│   └── globals.css
└── public/
    └── images/
```

---

### 2. Vue.js + Nuxt.js

**Opis:** Vue.js to progresywny framework JavaScript. Nuxt.js to framework oparty na Vue.js, oferujący podobne funkcje jak Next.js.

**Zalety:**
- ✅ Łatwiejszy w nauce niż React
- ✅ Prostsza składnia
- ✅ Doskonała dokumentacja
- ✅ SSR/SSG z Nuxt.js
- ✅ Automatyczna optymalizacja
- ✅ Mniejszy bundle size niż React

**Wady:**
- ❌ Mniejsza społeczność niż React
- ❌ Mniej bibliotek w ekosystemie
- ❌ Wymaga Node.js

**Kiedy użyć:**
- Gdy szukasz prostszego alternatywy dla React
- Gdy zespół jest mniejszy
- Gdy preferujesz prostszą składnię

**Przykładowa struktura:**
```
ma-weddingstudio/
├── pages/
│   ├── index.vue
│   ├── oferta.vue
│   └── blog.vue
├── components/
│   ├── Header.vue
│   ├── Hero.vue
│   └── PackageCard.vue
├── assets/
│   └── styles/
└── static/
    └── images/
```

---

### 3. Svelte + SvelteKit

**Opis:** Svelte to kompilator, który zamienia komponenty w optymalny JavaScript. SvelteKit to framework oparty na Svelte.

**Zalety:**
- ✅ Najmniejszy bundle size
- ✅ Brak virtual DOM - szybsze renderowanie
- ✅ Prosta składnia
- ✅ Doskonała wydajność
- ✅ SSR/SSG z SvelteKit

**Wady:**
- ❌ Najmniejsza społeczność
- ❌ Mniej gotowych komponentów
- ❌ Mniej zasobów edukacyjnych

**Kiedy użyć:**
- Gdy wydajność jest priorytetem
- Gdy chcesz minimalny bundle size
- Gdy preferujesz prostotę

---

### 4. Astro

**Opis:** Astro to framework do budowania szybkich, statycznych stron z minimalnym JavaScript.

**Zalety:**
- ✅ Minimalny JavaScript - tylko tam gdzie potrzebny
- ✅ Możliwość użycia wielu frameworków (React, Vue, Svelte)
- ✅ Doskonałe SEO
- ✅ Szybkie ładowanie
- ✅ Idealny dla statycznych stron

**Wady:**
- ❌ Młody projekt (mniej zasobów)
- ❌ Ograniczone możliwości interaktywności
- ❌ Mniej przykładów

**Kiedy użyć:**
- Gdy strona jest głównie statyczna
- Gdy priorytetem jest wydajność
- Gdy chcesz użyć wielu frameworków

---

### 5. Remix

**Opis:** Remix to full-stack framework React z focusem na web standards i UX.

**Zalety:**
- ✅ Doskonałe zarządzanie danymi
- ✅ Web standards first
- ✅ Progresywne ulepszenia
- ✅ Doskonałe UX
- ✅ SSR out-of-the-box

**Wady:**
- ❌ Wymaga Node.js backend
- ❌ Mniejsza społeczność
- ❌ Większa złożoność dla prostych stron

**Kiedy użyć:**
- Gdy potrzebujesz pełnego stacku
- Gdy planujesz dynamiczne funkcje
- Gdy potrzebujesz formularzy z walidacją

---

## Porównanie frameworków

| Framework | Bundle Size | SEO | Learning Curve | Community | Performance |
|-----------|-------------|-----|----------------|-----------|-------------|
| **Next.js** | Średni | ⭐⭐⭐⭐⭐ | Średnia | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| **Nuxt.js** | Średni | ⭐⭐⭐⭐⭐ | Łatwa | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| **SvelteKit** | Mały | ⭐⭐⭐⭐⭐ | Łatwa | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **Astro** | Bardzo mały | ⭐⭐⭐⭐⭐ | Łatwa | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **Remix** | Średni | ⭐⭐⭐⭐ | Średnia | ⭐⭐⭐ | ⭐⭐⭐⭐ |
| **Vanilla** | Brak | ⭐⭐⭐⭐⭐ | Brak | - | ⭐⭐⭐⭐⭐ |

---

## Przykłady implementacji

### React + Next.js - Komponent Header

```jsx
// components/Header.js
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        <Link href="/">
          <Image 
            src="/cropped-logo-ma-1.png" 
            alt="M&A Wedding Logo" 
            width={70} 
            height={70}
            className="logo"
          />
        </Link>
        <nav className={isMenuOpen ? 'nav-open' : ''}>
          <ul>
            <li><Link href="#home">Home</Link></li>
            <li><Link href="#oferta">Oferta</Link></li>
            <li><Link href="#blog">Blog</Link></li>
            <li><Link href="#faq">FAQ</Link></li>
            <li><Link href="#kontakt">Kontakt</Link></li>
          </ul>
        </nav>
        <button 
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      </div>
    </header>
  );
}
```

### React + Next.js - Komponent PackageCard

```jsx
// components/PackageCard.js
export default function PackageCard({ 
  title, 
  badge, 
  badgeType, 
  features, 
  featured = false 
}) {
  return (
    <div className={`package-card ${featured ? 'featured' : ''}`}>
      <div className="package-header">
        <h4>{title}</h4>
        <div className={`package-badge ${badgeType}`}>
          {badge}
        </div>
      </div>
      <ul className="package-list">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <button className="package-btn">
        Zapytaj o dostępność
      </button>
    </div>
  );
}
```

### Vue.js + Nuxt.js - Komponent Header

```vue
<!-- components/Header.vue -->
<template>
  <header class="header">
    <div class="header-container">
      <NuxtLink to="/">
        <img 
          src="/cropped-logo-ma-1.png" 
          alt="M&A Wedding Logo" 
          class="logo"
        />
      </NuxtLink>
      <nav :class="{ 'nav-open': isMenuOpen }">
        <ul>
          <li><NuxtLink to="#home">Home</NuxtLink></li>
          <li><NuxtLink to="#oferta">Oferta</NuxtLink></li>
          <li><NuxtLink to="#blog">Blog</NuxtLink></li>
          <li><NuxtLink to="#faq">FAQ</NuxtLink></li>
          <li><NuxtLink to="#kontakt">Kontakt</NuxtLink></li>
        </ul>
      </nav>
      <button 
        class="menu-toggle"
        @click="isMenuOpen = !isMenuOpen"
      >
        ☰
      </button>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue';

const isMenuOpen = ref(false);
</script>
```

### SvelteKit - Komponent FAQ

```svelte
<!-- components/FAQItem.svelte -->
<script>
  export let question;
  export let answer;
  
  let isOpen = false;
  
  function toggle() {
    isOpen = !isOpen;
  }
</script>

<div class="faq-item" class:active={isOpen}>
  <div class="faq-question" on:click={toggle}>
    <h3>{question}</h3>
    <span class="faq-icon">{isOpen ? '−' : '+'}</span>
  </div>
  {#if isOpen}
    <div class="faq-answer">
      <p>{answer}</p>
    </div>
  {/if}
</div>
```

### Astro - Komponent BlogCard

```astro
---
// components/BlogCard.astro
interface Props {
  title: string;
  excerpt: string;
  image: string;
  date: string;
  day: string;
  month: string;
  slug: string;
}

const { title, excerpt, image, date, day, month, slug } = Astro.props;
---

<article class="blog-card">
  <div class="blog-image-wrapper">
    <img src={image} alt={title} class="blog-image" />
    <div class="blog-date">
      <span class="blog-day">{day}</span>
      <span class="blog-month">{month}</span>
    </div>
  </div>
  <div class="blog-content">
    <h3>{title}</h3>
    <p class="blog-excerpt">{excerpt}</p>
    <a href={`/blog/${slug}`} class="blog-link">Czytaj więcej →</a>
  </div>
</article>
```

---

## Plan migracji

### Faza 1: Przygotowanie (1-2 tygodnie)
1. **Analiza wymagań**
   - Określenie funkcjonalności do przeniesienia
   - Identyfikacja komponentów wielokrotnego użytku
   - Planowanie struktury danych

2. **Wybór frameworka**
   - Ocena potrzeb projektu
   - Porównanie frameworków
   - Decyzja o stacku technologicznym

3. **Setup środowiska**
   - Instalacja Node.js
   - Konfiguracja projektu
   - Setup narzędzi deweloperskich

### Faza 2: Migracja komponentów (2-3 tygodnie)
1. **Podstawowe komponenty**
   - Header
   - Footer
   - Hero
   - Navigation

2. **Komponenty sekcji**
   - ServicesIntro
   - PackageCard
   - BlogCard
   - FAQItem
   - ContactForm

3. **Komponenty pomocnicze**
   - Button
   - Card
   - Image

### Faza 3: Stylowanie (1-2 tygodnie)
1. **Konwersja CSS**
   - Przeniesienie stylów do plików CSS/SCSS
   - Użycie CSS Modules lub styled-components
   - Responsywne breakpointy

2. **Optymalizacja**
   - Usunięcie nieużywanych stylów
   - Minifikacja CSS
   - Critical CSS

### Faza 4: Funkcjonalności (1-2 tygodnie)
1. **Interaktywność**
   - FAQ Accordion
   - Formularz kontaktowy
   - Smooth scrolling
   - Mobile menu

2. **Integracje**
   - Formularz z backendem
   - Social media links
   - Analytics

### Faza 5: Optymalizacja i testy (1 tydzień)
1. **Performance**
   - Lazy loading obrazów
   - Code splitting
   - Bundle optimization

2. **SEO**
   - Meta tags
   - Structured data
   - Sitemap

3. **Testy**
   - Cross-browser testing
   - Responsive testing
   - Performance testing

---

## Rekomendacje

### Dla małej strony statycznej (obecna sytuacja)
**Rekomendacja: Astro lub pozostanie przy Vanilla HTML**

**Dlaczego:**
- Minimalny JavaScript
- Najszybsze ładowanie
- Prosta struktura
- Doskonałe SEO

### Dla planowanej rozbudowy
**Rekomendacja: Next.js (React)**

**Dlaczego:**
- Największa społeczność
- Najwięcej zasobów
- Doskonałe narzędzia
- Łatwość znalezienia deweloperów
- SSR/SSG dla SEO

### Dla małego zespołu
**Rekomendacja: Nuxt.js (Vue)**

**Dlaczego:**
- Łatwiejsza krzywa uczenia
- Prostsza składnia
- Doskonała dokumentacja
- Mniejszy bundle size

### Dla maksymalnej wydajności
**Rekomendacja: SvelteKit**

**Dlaczego:**
- Najmniejszy bundle
- Najszybsze renderowanie
- Brak virtual DOM
- Doskonała wydajność

---

## Przykładowe komendy setupu

### Next.js
```bash
npx create-next-app@latest ma-weddingstudio
cd ma-weddingstudio
npm run dev
```

### Nuxt.js
```bash
npx nuxi@latest init ma-weddingstudio
cd ma-weddingstudio
npm install
npm run dev
```

### SvelteKit
```bash
npm create svelte@latest ma-weddingstudio
cd ma-weddingstudio
npm install
npm run dev
```

### Astro
```bash
npm create astro@latest ma-weddingstudio
cd ma-weddingstudio
npm run dev
```

---

## Zasoby edukacyjne

### Next.js
- [Next.js Documentation](https://nextjs.org/docs)
- [Next.js Learn](https://nextjs.org/learn)
- [React Documentation](https://react.dev)

### Nuxt.js
- [Nuxt.js Documentation](https://nuxt.com/docs)
- [Vue.js Documentation](https://vuejs.org)

### SvelteKit
- [SvelteKit Documentation](https://kit.svelte.dev/docs)
- [Svelte Tutorial](https://svelte.dev/tutorial)

### Astro
- [Astro Documentation](https://docs.astro.build)
- [Astro Tutorial](https://docs.astro.build/en/tutorial/0-introduction/)

---

## Wnioski

Obecne rozwiązanie (Vanilla HTML/CSS/JS) jest doskonałe dla:
- ✅ Prostej strony statycznej
- ✅ Szybkiego wdrożenia
- ✅ Minimalnego utrzymania
- ✅ Doskonałego SEO

Frameworki są przydatne gdy:
- 🔄 Planujesz rozbudowę funkcjonalności
- 👥 Masz większy zespół
- 🔧 Potrzebujesz komponentów wielokrotnego użytku
- 📊 Planujesz integrację z backendem/CMS
- 🚀 Potrzebujesz lepszego developer experience

**Rekomendacja końcowa:** Jeśli strona ma pozostać głównie statyczna, obecne rozwiązanie jest optymalne. Jeśli planujesz rozbudowę (blog z CMS, dynamiczne pakiety, rezerwacje online), rozważ migrację do **Next.js** lub **Astro**.

---

*Dokumentacja aktualizowana: 2024*
*Autor: M&A Wedding Studio Development Team*

