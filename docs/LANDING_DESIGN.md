# OVRIA — Landing Page Design Spec

> **Who this is for:** the person building the marketing landing page (the public website, *not* the app).
> **How to use it:** this is a paste-and-build spec. Every color, font size, and spacing value is concrete. Section order matches `LANDING_COPY.md` 1:1 — build the design here, drop the words from there.
> **Brand system:** "OVRIA Tide" — a warm, calm, premium light theme. Glass cards floating over a soft cream gradient. The opposite of a loud, frenetic job board. Keep it confident and unhurried.

---

## 0. The one thing to get right

OVRIA's whole pitch is **"no intermediaries, no commissions."** Workers join free and get found; companies pay a flat monthly subscription to contact them directly — no agency taking 18–25% off the top.

The page has **two audiences** who need different things:
- **Workers (Marc):** construction workers. Read at a basic level, often on a cheap Android, sometimes with gloves on, in bright sun. They need to hear one thing loud: **it's free, and you stay in control.**
- **Companies (Sophie):** SME construction-firm owners. They scan, never read. They want: *find 3 qualified people fast, cheaper than an agency.*

Design must serve both without making either feel like the page isn't for them. The pattern: a shared wedge up top, then a clean **For workers / For companies** split.

---

## 1. Brand foundation (design tokens)

Drop these into `:root` and use the variables everywhere. Do not hardcode hex in components.

```css
:root {
  /* Base */
  --bg:            #ece5d9;            /* warm cream — page background */
  --ink:           #1a1a17;           /* primary text, primary buttons */
  --ink-2:         #3a3a35;           /* body text (use this, not muted, for paragraphs) */
  --muted:         rgba(26,26,23,.55);/* captions, hints — NOT for long body text */
  --hairline:      rgba(26,26,23,.10);/* card borders, dividers */
  --hairline-2:    rgba(26,26,23,.06);/* subtle dividers */
  --surface:       rgba(255,255,255,.55); /* glass card fill */
  --surface-strong:rgba(255,255,255,.85); /* hover / solid glass */
  --text-on-ink:   #f6f2ec;           /* cream text on ink buttons / dark blocks */

  /* Status (availability) — dot + label, never color alone */
  --ok:            #3f8a52;           /* Available / Disponible (green) */
  --open:          #b9772a;           /* Open to opportunities / Ouvert (amber) — Tide extension */
  --off:           rgba(26,26,23,.45);/* Unavailable / Indisponible (grey) */

  /* Atmosphere gradient (hero + section glows) */
  --grad-1:        #f6f2ec;
  --grad-2:        #f1ece4;
  --grad-3:        #ece5d9;

  /* Radius */
  --r-card: 22px;
  --r-pill: 999px;
  --r-chip: 999px;

  /* Container */
  --container: 1200px;
  --measure: 680px;   /* max text width for readability */
}
```

### Background treatment
The page background is the cream gradient, not flat. Apply once to `<body>` or a fixed full-height layer:

```css
body {
  background:
    radial-gradient(ellipse 70% 45% at 50% 22%, rgba(255,250,235,.6), transparent 70%),
    linear-gradient(180deg, var(--grad-1), var(--grad-2) 40%, var(--grad-3));
  background-attachment: fixed;
  color: var(--ink);
}
```

Optional **particle layer** (slow-rising dust motes, dark on light, ~30 particles, 0.5–2px, gentle upward drift) behind the hero only. It's a signature Tide detail — but it is **decorative and must be disabled under `prefers-reduced-motion`** (see §6). If you're not confident animating it cleanly, ship a static SVG noise/dot texture instead. A janky particle field is worse than none.

---

## 2. Typography

**Font:** Manrope (Google Fonts, weights 400/500/600/700). One typeface for the whole site.

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&display=swap" rel="stylesheet">
```
```css
* { font-family: 'Manrope', system-ui, sans-serif; -webkit-font-smoothing: antialiased; }
```

### Web marketing type scale
The app uses small sizes (built for phones). A landing page needs to be bigger and more confident. Use **this** scale, not the app's. All sizes use `clamp()` so they shrink gracefully on mobile.

| Token | Size (`clamp`) | Weight | Tracking | Line-height | Use |
|---|---|---|---|---|---|
| **Display-XL** | `clamp(2.6rem, 6vw, 4.5rem)` | 700 | -0.03em | 1.05 | Hero H1 |
| **Display-L** | `clamp(2rem, 4vw, 3rem)` | 700 | -0.02em | 1.1 | Section H2 |
| **Display-M** | `clamp(1.5rem, 3vw, 2rem)` | 700 | -0.015em | 1.15 | Sub-section H3 |
| **Lead** | `clamp(1.1rem, 1.6vw, 1.3rem)` | 400 | 0 | 1.5 | Hero subhead, section intro |
| **Body** | `1.0625rem` (17px) | 400 | 0 | 1.6 | Paragraphs — color `--ink-2` |
| **Body-sm** | `0.9375rem` (15px) | 500 | 0 | 1.5 | Cards, secondary |
| **Eyebrow** | `0.78rem` (12.5px) | 600 | 0.16em **UPPERCASE** | 1 | Section overlines — color `--muted` |
| **Button** | `1rem` (16px) | 600 | 0 | 1 | All buttons |
| **Caption** | `0.8125rem` (13px) | 400 | 0 | 1.4 | Footnotes, legal, badges |

**Rules**
- Body copy is `--ink-2`, never `--muted`. `--muted` is for captions/eyebrows only (it can fail contrast at small sizes).
- Headlines are `--ink`, weight 700, negative tracking. That tight tracking is what makes Manrope look premium — don't skip it.
- Cap text blocks at `--measure` (680px) so lines don't run too wide.

---

## 3. Spacing & layout

- **Container:** `max-width: var(--container)` (1200px), centered, side padding `clamp(20px, 5vw, 32px)`.
- **Section rhythm:** vertical padding `clamp(64px, 10vw, 128px)` top and bottom. Generous whitespace is the brand — don't crowd.
- **Grid gap:** 24px mobile, 32px desktop.
- **Within a card:** 24–28px padding.
- **Stack spacing:** 12px between tight elements, 20–24px between blocks, 40px+ between groups.

Spacing steps to pick from (px): `4 8 12 16 20 24 32 40 48 64 80 96 128`.

---

## 4. Components

### 4.1 Buttons

| Variant | Background | Text | Border | Use |
|---|---|---|---|---|
| **Primary** | `--ink` | `--text-on-ink` | none | Main CTA |
| **Glass** | `--surface` (white .55) | `--ink` | 1px `--hairline` | Secondary CTA |
| **Ghost** | transparent | `--ink` | none | Tertiary / nav links |

```css
.btn {
  height: 52px; padding: 0 28px; border-radius: var(--r-pill);
  font: 600 16px/1 'Manrope'; display: inline-flex; align-items: center; gap: 8px;
  cursor: pointer; transition: transform .15s ease, background-color .2s ease, opacity .2s ease;
}
.btn-primary { background: var(--ink); color: var(--text-on-ink); }
.btn-primary:hover { transform: translateY(-1px); opacity: .92; }
.btn:active { transform: scale(.98); }
.btn-glass { background: var(--surface); color: var(--ink); border: 1px solid var(--hairline); }
.btn-glass:hover { background: var(--surface-strong); }
```
- Mobile: height 48px minimum (touch target — workers may use gloves).
- Always a visible `:focus-visible` ring: `outline: 2px solid var(--ink); outline-offset: 3px;`

### 4.2 App store badges
Primary conversion target. Use the **official** Apple "Download on the App Store" and Google "Get it on Google Play" SVG badges (don't redraw them — store guidelines require the official artwork). Height ~52px, side by side on desktop, stacked on mobile. Place in hero **and** final CTA.

### 4.3 GlassCard (the workhorse)
```css
.card {
  background: var(--surface);
  border: 1px solid var(--hairline);
  border-radius: var(--r-card);          /* 22px */
  padding: 28px;
  backdrop-filter: blur(10px);           /* web supports this — use it */
  -webkit-backdrop-filter: blur(10px);
  transition: background-color .25s ease, transform .25s ease;
}
.card:hover { background: var(--surface-strong); transform: translateY(-2px); }
```
Variants: feature card (icon + title + 1 line), step card (number + title + body), pricing card (see §5 of copy doc).

### 4.4 Chip
Rounded pill for trades / tags. `padding: 9px 16px; border-radius: 999px; font: 500 14px; background: var(--surface); border: 1px solid var(--hairline);`. Selected state: `background: var(--ink); color: var(--text-on-ink);`.

### 4.5 Status & freshness badges (the product's signature)
OVRIA's killer UI detail is the **two-axis status**: *availability* × *freshness*. Show it on the screenshots/mockups in the hero and "how it works." Each badge is **dot + text** — never color alone (colorblind users + sunlight).

| Availability | Dot | Label (FR) |
|---|---|---|
| Available | `--ok` green | **Disponible** |
| Open to opportunities | `--open` amber | **Ouvert aux opportunités** |
| Unavailable | `--off` grey | **Indisponible** |

```html
<span class="badge"><span class="dot" style="background:var(--ok)"></span> Disponible</span>
```
```css
.badge { display:inline-flex; align-items:center; gap:8px; font:600 13px/1 'Manrope'; }
.dot   { width:8px; height:8px; border-radius:50%; box-shadow:0 0 0 4px color-mix(in srgb, currentColor 14%, transparent); }
```

### 4.6 Icons
Use **Lucide** (`lucide-react` / inline SVG). Stroke 1.5–2, `currentColor`. Matches the app's thin-line set. Suggested icons per section in §5 below.

---

## 5. Page architecture (section by section)

Build in this order. Each maps to a heading in `LANDING_COPY.md`.

```
┌─────────────────────────────────────────────┐
│ 1. NAV (sticky, glass)                        │
│ 2. HERO — the wedge + app badges + phone shot │
│ 3. TRUST STRIP — "0 commission" stat band     │
│ 4. PROBLEM — the intermediary tax             │
│ 5. HOW IT WORKS — 3 steps                      │
│ 6. FOR WORKERS — free, get found (split L)    │
│ 7. FOR COMPANIES — search & contact (split R) │
│ 8. SIGNATURE FEATURES — double badge, signal  │
│ 9. PRICING — companies (worker = free)        │
│ 10. SOCIAL PROOF — testimonials (placeholder) │
│ 11. FAQ — accordion                            │
│ 12. FINAL CTA — download band                  │
│ 13. FOOTER — legal / RGPD                       │
└─────────────────────────────────────────────┘
```

### 1 — Nav
Sticky, glass background (`--surface-strong` + blur), 1px bottom hairline on scroll. Left: OVRIA wordmark (Manrope 700, letter-spacing ~0.04em). Center/right (desktop): anchor links — *Pour les ouvriers · Pour les entreprises · Tarifs · FAQ*. Right: one primary CTA (*Télécharger l'app*). Mobile: wordmark + hamburger → full-screen glass menu. Height ~64px.

### 2 — Hero
The most important block. Layout: two columns desktop (text left, phone mockup right), stacked on mobile (text, then mockup).

- **Eyebrow:** small overline (e.g. *Le BTP, sans intermédiaire*).
- **H1 (Display-XL):** the wedge headline (see copy doc).
- **Lead:** one sentence, both audiences.
- **CTAs:** App Store + Google Play badges as primary. Below them, a quiet line: *Gratuit pour les ouvriers · Sans commission*.
- **Audience switch (optional but recommended):** two ghost links / pills — *Je cherche un chantier* / *Je recrute* — that smooth-scroll to §6 / §7. Lets each person self-select in one tap.
- **Visual:** a phone mockup showing the app dashboard with the availability badge clearly visible. If no real screenshot yet, use a clean device frame + a styled glass card mock. This is where the particle layer lives (behind, low opacity).

### 3 — Trust strip
A thin full-width band (slightly stronger surface) with 2–3 punchy stats/claims. Big number + tiny label. E.g. **0 %** commission · **2 min** pour créer un profil · **100 %** gratuit côté ouvrier. Numbers in Display-M weight 700, labels in Eyebrow.

### 4 — The problem
Short, emotional. Names the enemy: the agency commission / the black-box of applying "into the void." One H2 + a short lead + maybe a simple before/after visual (with-OVRIA vs without). Keep it to one screen. Don't lecture.

### 5 — How it works
Three step cards (glass), numbered 01/02/03, with a Lucide icon each. Works for both audiences or split into two mini-rows (worker steps / company steps). Icons: `user-plus`, `search`, `message-circle`. Keep each step to a 3-word title + one sentence.

### 6 — For workers
Left-aligned split (image right). Eyebrow *Pour les ouvriers*. H2. 3–4 benefit bullets with check icons (`check`). **Loudly free** — put a `Gratuit` chip near the headline. CTA: download badges again. Tone: plain, warm, short sentences (this audience reads at a basic level — see copy doc voice rules). Bullets cover: free forever, you get found (don't chase), your professional identity in one place, you say yes or no.

### 7 — For companies
Mirror of §6, flipped (image left, text right) so the page has rhythm. Eyebrow *Pour les entreprises*. H2. Benefit bullets: search by trade/zone/availability, contact directly, no agency commission, pre-qualify before you call. CTA here is different: *Créer un compte entreprise* (glass or primary button → app / sign-up), since companies convert via subscription not just download. Tone: scannable, numbers, executive.

### 8 — Signature features
3-up grid of glass feature cards. The differentiators (from the product): 
1. **Double badge** (availability × freshness) — "you see who's really available, today."
2. **Signal d'intérêt** — workers tap to show interest, anti-spam, no spam to companies.
3. **Messagerie directe** — talk directly, no middleman.
Icon + title + one line each. Optional 4th: *Données protégées (RGPD)*.

### 9 — Pricing
Workers: a simple full-width reassurance — **"Ouvrier ? C'est gratuit. Pour toujours."** Companies: one clean pricing card (glass, slightly elevated). 
> ⚠️ **The monthly price is not finalized** ("à confirmer" in the product docs). Build the card with a `[PRIX] €/mois` placeholder and a clear `// TODO: confirm price` comment. Do **not** invent a number. Include: what's included (search, unlimited messaging, filters), "résiliable à tout moment," "facture pro / TVA," and a CTA. If the price truly isn't ready at launch, swap the number for *Sur demande* / *Nous contacter* and a contact CTA.

### 10 — Social proof
Placeholder testimonials (2–3 quote cards: one worker, one company). Until real ones exist, mark them clearly as placeholder and keep the slot in the layout. Quote in Display-M weight 400, name + role in Body-sm. **Do not fabricate fake testimonials as if real** — use obviously-placeholder names or hide the section until you have real quotes.

### 11 — FAQ
Accordion (`<details>`/`<summary>` is fine and accessible by default). 6–9 questions from copy doc. Plus-to-minus icon rotation on open (150ms). One column, capped at `--measure`.

### 12 — Final CTA
Full-width band, can invert to **ink background** (`--ink`) with cream text for contrast and a strong close. Big headline, app store badges, one line of reassurance. This is the second-biggest conversion point after the hero.

### 13 — Footer
Calm, low. OVRIA wordmark + one-liner. Columns: *Produit* (Pour les ouvriers / Pour les entreprises / Tarifs / FAQ), *Légal* (Mentions légales / CGU / Politique de confidentialité / Cookies), *Contact*. RGPD matters here — France, sensitive data. Include a cookie/consent note. Copyright line. Language: France-only, FR.

---

## 6. Motion (keep it subtle — Emil rules)

The Tide system is *calm*. Motion should feel like the page is breathing, not performing.

- **Durations:** 150–250ms for interactions, 400–600ms for scroll-in reveals. Easing: `ease-out` (`cubic-bezier(.2,.6,.2,1)`).
- **Scroll reveals:** fade + 8–12px translateY, once, staggered ~60ms between siblings. Subtle. Never slide things in from far off-screen.
- **Hover:** cards lift 2px + brighten; buttons lift 1px. That's it.
- **No:** parallax scrolljacking, autoplaying video with motion, carousels that auto-advance, big spinning hero blobs, counters that race on every scroll.

### `prefers-reduced-motion` — non-negotiable
Construction-site users and migraine-prone company owners (per the personas) need this. Wrap **all** motion:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation: none !important; transition-duration: .01ms !important; }
  /* particles: render static or not at all */
}
```
Reveal animations must start from `opacity: 1` when reduced motion is on (content must never depend on JS animation to become visible).

---

## 7. Responsive

| Breakpoint | Layout |
|---|---|
| `< 640px` (mobile) | Single column. Hero text first, mockup after. App badges stacked. Nav → hamburger. Body 16px min. |
| `640–1024px` (tablet) | Container with padding. Splits (§6/§7) may stay stacked or go 2-col at ~860px. |
| `≥ 1024px` (desktop) | Full 2-column splits, hero side-by-side, 3-up feature grid. |

Mobile-first: build the small layout, enhance up. Most workers will hit this page on a phone — **mobile is the primary canvas, not an afterthought.** Test at 360px width (cheap Android) and at 200% browser zoom.

---

## 8. Accessibility checklist (WCAG 2.2 AA — ship-blocking)

- [ ] **Contrast:** `--ink`/`--ink-2` on cream = excellent. **Don't** use `--muted` or `--ok` green as small text on cream (fails AA). Green is for dots/icons; if you need "available" as text, pair it with the dot + dark label.
- [ ] **Color never alone:** every status uses dot **+** label.
- [ ] **Touch targets ≥ 48px** on mobile (gloves). Buttons, nav items, accordion headers.
- [ ] **Focus visible** on every interactive element (the outline ring above).
- [ ] **Headings in order** — one `<h1>` (hero), `<h2>` per section, no skipping levels.
- [ ] **Alt text** on every meaningful image; decorative ones get `alt=""`.
- [ ] **Keyboard:** full page operable with Tab/Enter, including nav menu and FAQ accordion. `<details>`/`<summary>` and real `<button>`s give you this free.
- [ ] **Reduced motion** respected (above).
- [ ] **Language:** `<html lang="fr">`.
- [ ] **Forms** (waitlist/contact if any): visible `<label>`, not just placeholder.
- [ ] **Zoom:** layout survives 200% with no horizontal scroll.

---

## 9. Assets you'll need (checklist for the build)

- [ ] OVRIA wordmark (SVG, ink + cream versions) + app icon / favicon (exists at `web/app/icon.png`).
- [ ] 2–4 app screenshots in device frames (dashboard with badges, search results, a profile, messaging). Real > mocked.
- [ ] Official App Store + Google Play badge SVGs (FR locale).
- [ ] Open Graph / social share image (1200×630, cream bg + wordmark + tagline).
- [ ] Lucide icons (per section above).
- [ ] Optional: a simple looping/static texture for the hero particle layer.

---

## 10. Tech recommendation (vibe-coder-friendly)

This is a marketing page — keep it boringly simple and fast.

- **Easiest:** Next.js (App Router) + Tailwind + deploy to Vercel. Matches the existing `web/` stack (Next 15, React 19, Tailwind 4), so you can reuse the tokens. A single `page.tsx` with section components is plenty — no CMS, no database.
- **Even simpler:** one static `index.html` + the CSS above + Lucide via CDN. Totally fine for a landing page.
- **Fonts:** `next/font/google` (Manrope) on Next, or the `<link>` above on static.
- **Performance:** this should score 95+ on Lighthouse easily. Lazy-load below-fold images, use `next/image` or `loading="lazy"`, no heavy JS. The particle layer is the only thing that can hurt — gate it behind reduced-motion and keep particle count ≤ 30.
- **Analytics/consent:** if you add analytics, add a RGPD-compliant cookie banner (France). Vercel Analytics is cookieless and the easy choice.

### Tailwind token bridge (if using Tailwind)
```js
// tailwind.config — theme.extend.colors
colors: {
  bg: '#ece5d9', ink: '#1a1a17', 'ink-2': '#3a3a35',
  'text-on-ink': '#f6f2ec', ok: '#3f8a52', open: '#b9772a',
},
borderRadius: { card: '22px', pill: '999px' },
fontFamily: { sans: ['Manrope', 'system-ui', 'sans-serif'] },
```

---

## 11. Do / Don't

| ✅ Do | ❌ Don't |
|---|---|
| Keep it calm, warm, lots of whitespace | Make it a loud, neon, "hustle" job board |
| Make "free for workers" impossible to miss | Show anything that looks like a worker paywall |
| Use real app screenshots with the status badges | Use generic stock photos of people in suits |
| One clear primary action per section | Five competing CTAs above the fold |
| Tight tracking on big headlines | Default letter-spacing on display text (looks cheap) |
| Respect reduced motion + 48px targets | Parallax, autoplay, scrolljack, tiny tap targets |
| Cream gradient + glass cards (Tide) | Pure white flat background |

---

*Pair this with `LANDING_COPY.md` — same section names, ready-to-paste French copy.*
