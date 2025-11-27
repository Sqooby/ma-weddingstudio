# M&A Wedding Studio - Dokumentacja Projektu

## Opis Projektu

Projekt strony internetowej dla M&A Wedding - profesjonalnego studia oferującego usługi fotografii i filmowania ślubów i wesel z Rzeszowa.

## Struktura Projektu

```
ma-weddingstudio/
├── _1spec/          # Dokumentacja projektu
│   ├── README.md    # Główna dokumentacja
│   └── FRAMEWORKS.md # Dokumentacja alternatywnych frameworków
└── _2pages/         # Pliki źródłowe strony
    └── index.html
```

## Dokumentacja

- **[README.md](./README.md)** - Główna dokumentacja projektu
- **[FRAMEWORKS.md](./FRAMEWORKS.md)** - Dokumentacja alternatywnych frameworków (React, Vue, Svelte, Astro, etc.)

## Technologie

- **HTML5** - struktura strony
- **CSS3** - style i responsywność
- **Vanilla JavaScript** - (opcjonalnie, do przyszłych rozszerzeń)

## Funkcjonalności

### Główne sekcje strony:

1. **Header z nawigacją**
   - Logo M&A Wedding
   - Menu nawigacyjne (Home, Oferta, Blog, FAQ, Kontakt)
   - Sticky header (przyklejony do góry podczas przewijania)

2. **Sekcja Hero**
   - Główny nagłówek: "Uchwycamy piękno chwil!"
   - Podtytuł: "Fotografia ślubna i film || Rzeszów"

3. **Sekcja Oferta**
   - **Fotografujemy** - opis usług fotograficznych
   - **Filmujemy** - opis usług filmowych
   - Informacje o firmie i podejściu do pracy

4. **Sekcja O nas**
   - Karty z informacjami o:
     - Ola - Fotograf
     - Michał - Filmowiec

5. **Sekcja Kontakt**
   - Formularz kontaktowy z polami:
     - Imię i nazwisko (wymagane)
     - Adres email (wymagane)
     - Data i miejsce uroczystości (wymagane)
     - Kilka słów o Was i o Waszym ślubie
     - Skąd o nas wiesz? (dropdown)
   - Dane kontaktowe:
     - 📞 Fotograf Ola: 668 826 381
     - 📞 Filmowiec Michał: 724 520 253
   - Linki do social media (Facebook, YouTube, Instagram)

6. **Footer**
   - Logo
   - Informacje o firmie
   - Menu nawigacyjne
   - Copyright

## Design

### Kolorystyka:
- Główny kolor akcentu: `#d4a574` (złoty/beżowy)
- Tło: `#fff`, `#f9f9f9`, `#f5f5f5`
- Tekst: `#333`, `#666`
- Footer: `#333`

### Typografia:
- Font: Arial, sans-serif
- Rozmiary nagłówków: 3rem (H1), 2.5rem (H2), 2rem (H3)
- Rozmiar tekstu: 1.1rem

### Responsywność:
- Mobile-first approach
- Breakpoint: 768px
- Elastyczne gridy i flexbox
- Adaptacyjne menu nawigacyjne

## Funkcje CSS

- **Grid Layout** - dla sekcji usług i "O nas"
- **Flexbox** - dla header, footer i social links
- **Hover effects** - animacje przy najechaniu na elementy
- **Box shadows** - dla kart i efektów wizualnych
- **Sticky header** - przyklejony nagłówek podczas scrollowania
- **Smooth transitions** - płynne przejścia

## Pliki do dodania

### Obrazy:
- `cropped-logo-ma-1.png` - logo firmy (używane w header i footer)

### Opcjonalne rozszerzenia:
- Galeria zdjęć
- Sekcja Blog
- Sekcja FAQ
- Integracja z formularzem (backend)
- Integracja z social media API

## Instrukcja uruchomienia

1. Otwórz plik `_2spec/index.html` w przeglądarce
2. Upewnij się, że plik `cropped-logo-ma-1.png` znajduje się w tym samym katalogu co `index.html`

## Przeglądarki

Strona została zaprojektowana i przetestowana dla:
- Chrome (najnowsza wersja)
- Firefox (najnowsza wersja)
- Safari (najnowsza wersja)
- Edge (najnowsza wersja)

## Status projektu

✅ **Ukończone:**
- Struktura HTML
- Style CSS
- Responsywność
- Formularz kontaktowy (frontend)
- Sekcje: Hero, Oferta, O nas, Kontakt

⏳ **Do zrobienia:**
- Dodanie logo (cropped-logo-ma-1.png)
- Integracja formularza z backendem
- Sekcja Blog
- Sekcja FAQ
- Galeria zdjęć
- Optymalizacja obrazów
- SEO optimization

## Autor

Projekt stworzony na podstawie strony https://ma-weddingstudio.pl

## Licencja

© 2019 Company. All rights reserved.

