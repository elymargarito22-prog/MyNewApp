# Curated Ink — landing page

Static landing page for **Curated Ink**: custom graduation caps, wedding invitations (digital or print) and party labels. Blue, beige and grey palette with Light, Dark and System themes; Mona Sans type. Responsive from 320px phones to wide desktops.

See [ROADMAP.md](ROADMAP.md) for the improvement checklist.

## Files
- `index.html` — landing page
- `styles.css` — styles and theme colors (dark in `:root`, light in the `data-theme="light"` / `prefers-color-scheme: light` blocks)
- `theme.js` — Light / Dark / System switch; remembers the visitor’s choice
- `site.js` — mobile menu and footer year
- `ROADMAP.md` — the four improvement waves, as a checklist
- `thanks.html` — shown after the inquiry form is submitted
- `favicon.svg`
- `netlify.toml` — Netlify config (no build step; publishes the repo root)

## Deploy to Netlify
1. In Netlify, **Add new site → Import an existing project** and pick this GitHub repo.
2. Branch: `main`. Build command: *(leave empty)*. Publish directory: `.`
3. Deploy. The inquiry form is a [Netlify Form](https://docs.netlify.com/forms/setup/) — submissions appear under **Forms** in the Netlify dashboard once the site is deployed (enable form detection if prompted).

## Local preview
```sh
python3 -m http.server 8000
```
Then open http://localhost:8000.
