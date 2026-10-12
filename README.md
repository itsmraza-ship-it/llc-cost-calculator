# LLC Cost Calculator 💰

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
![Vanilla JS](https://img.shields.io/badge/JS-vanilla-black)
![GitHub Pages ready](https://img.shields.io/badge/Pages-ready-brightgreen)

> A single-page interactive calculator that shows founders **exactly** what a US LLC costs — live: **$130 + state fee**, with optional add-ons. No build step, no dependencies, deployable to GitHub Pages in one click.

## How it works

- `index.html` — structure and content
- `app.js` — all logic: state selection, add-on toggles, live total (vanilla JS)
- `styles.css` — dark yellow/black Epics Deals theme

Pick a state → toggle add-ons → the total updates instantly. Choosing "Another state" shows the formation fee plus a "varies" state fee with a reminder to check the state's filing office.

## Run it

No build needed. Open `index.html` in a browser, or serve the folder:

```bash
npx serve .
# or
python3 -m http.server 8000
```

## Deploy to GitHub Pages

Settings → Pages → Deploy from branch → `main` → `/ (root)`. Done.

## Data

State fees (verified Oct 2026): Wyoming $102 · New Mexico $50 · Delaware $90 · Missouri $50 · Texas $308 · Florida $125.
Machine-readable source: [`fees.csv` / `fees.json`](https://github.com/itsmraza-ship-it/us-state-fees-2026) in our `us-state-fees-2026` repo.

## Compliance notes (built in)

- Pricing shown is **$130 + state fee** only — no other formation price anywhere
- EIN listed as **included free**
- Footer disclaimers: state fees change (verify at the state's filing office); bank and payment-provider approvals are subject to each provider's own decision
- No BOI claims, no guaranteed approvals

---

<p align="center">
  <strong>Your next big deal starts here.</strong><br>
  👉 <a href="https://epicsdeals.com">epicsdeals.com</a> · <a href="https://wa.link/x6klxo">WhatsApp</a> · <a href="mailto:info@epicsdeals.com">info@epicsdeals.com</a>
</p>
