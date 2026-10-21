# Be Human — landing page

Static landing page for **Be Human** ([behmn.ai](https://behmn.ai)), the AI reality company. Styled after [behmn.com](https://behmn.com): dark theme, cyan accent, Mona Sans.

## Files
- `index.html` — landing page
- `styles.css` — styles and brand tokens (colors live in `:root`)
- `thanks.html` — shown after the contact form is submitted
- `favicon.svg`
- `netlify.toml` — Netlify config (no build step; publishes the repo root)

## Deploy to Netlify
1. In Netlify, **Add new site → Import an existing project** and pick this GitHub repo.
2. Branch: `main`. Build command: *(leave empty)*. Publish directory: `.`
3. Deploy. The contact form is a [Netlify Form](https://docs.netlify.com/forms/setup/) — submissions appear under **Forms** in the Netlify dashboard once the site is deployed (enable form detection if prompted).

## Local preview
```sh
python3 -m http.server 8000
```
Then open http://localhost:8000.
