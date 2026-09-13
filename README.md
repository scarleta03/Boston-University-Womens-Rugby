<h1 align="center">Boston University Women's Rugby</h1>

<p align="center">
  <em>Play the game that found us.</em><br>
  The official site for BU's women's rugby club — D1 Rugby Northeast, no experience needed, ever.
</p>

<p align="center">
  <img alt="HTML" src="https://img.shields.io/badge/HTML-000?style=flat-square&logo=html5&logoColor=white">
  <img alt="CSS" src="https://img.shields.io/badge/CSS-D12F2F?style=flat-square&logo=css3&logoColor=white">
  <img alt="JavaScript" src="https://img.shields.io/badge/JS-000?style=flat-square&logo=javascript&logoColor=white">
  <img alt="Dependencies" src="https://img.shields.io/badge/dependencies-0-D12F2F?style=flat-square">
</p>

---

## What's here

A hand-built, six-page static site. No frameworks, no build step, no npm — just HTML, one stylesheet, and one script.

| Page | What it does |
|---|---|
| `index.html` | Hero + tryout flyer, season snapshot, calls to join |
| `about.html` | Team story, head coach, captains, 2025–26 E-Board |
| `schedule.html` | Fixtures and results |
| `gallery.html` | Match photography |
| `news.html` | Filterable club news and announcements |
| `join.html` | Three-step join flow, day-one checklist, FAQ |

## Run it

Open `index.html` in a browser. That's it.

For a local server (nicer for testing links and images):

```bash
python3 -m http.server 8000
# → http://localhost:8000
```

## Structure

```
├── css/styles.css     # all styles, design tokens at the top
├── js/main.js         # nav, scroll reveals, carousel, news filters
├── images/
│   ├── brand/         # logo + favicon
│   ├── eboard/        # headshots and action shots
│   ├── flyers/        # tryouts, tabling, events
│   ├── gallery/       # match photos
│   └── news/          # article images
└── *.html             # one file per page
```

## Design

Scarlet and white, black ink, bone backgrounds. Every color lives as a CSS variable in `:root` at the top of `styles.css` — change it there and it changes everywhere.

```css
--scarlet: #D12F2F;
--paper:   #FFFFFF;
--ink:     #000000;
```

Type is **Anton** for headlines, **Jost** for everything else. Built mobile-first, with skip links, visible focus rings, and `prefers-reduced-motion` respected throughout.

## Making updates

- **New tryout dates** → hero block in `index.html`
- **New article** → copy an existing `<article>` in `news.html`, drop the image in `images/news/`, set `data-category` so the filters pick it up
- **New photos** → add to `images/gallery/` and reference them in `gallery.html`
- **E-Board changes** → headshots go in `images/eboard/`, cards live in `about.html`

Keep images optimized before committing — this site's speed is its whole personality.

## Contact

Questions, corrections, or photos to add: **buwrfc@bu.edu**

---

<p align="center"><sub>Created by Scarlet Alvarez Marte &middot; built and maintained by the club. Go Terriers. 🏉</sub></p>
