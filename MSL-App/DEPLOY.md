# MSL CRM Deploy Guide

## Important
- Edit real app files in `MSL-App/` only.
- Do **not** paste redirect code into main pages.
- Files in `MSL-App/MSL-App/` are only compatibility redirects.

## Publish on Netlify
1. Push repo to GitHub.
2. Netlify → Add new site → Import from GitHub.
3. Build command: *(empty)*
4. Publish directory: `MSL-App`
5. Deploy.

## Publish on GitHub Pages
1. Push repo to GitHub.
2. Repo Settings → Pages.
3. Source: Deploy from branch.
4. Branch: `main` (or your branch), folder: `/MSL-App`.
5. Save and wait.

## URL format (very important)
If `MSL-App` is your publish root, open:
- `https://your-domain/dashboard.html`
- `https://your-domain/schools.html`

Not:
- `https://your-domain/MSL-App/dashboard.html`

## If `Cannot GET /MSL-App/schools.html`
Use the correct root URL above. Compatibility redirects are provided but correct root URLs are preferred.
