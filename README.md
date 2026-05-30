# UniCute Dividers

Copy decorative Unicode and ASCII dividers to your clipboard. No build tools, no dependencies, just vanilla HTML/CSS/JS.

## What it does

Pick a divider from the grid, click it, and it copies to your clipboard. That's it. 20 hand-picked dividers with a celestial background theme and a dark interface that doesn't look terrible.

## Tech

- Pure HTML5, CSS3, and JavaScript (ES6+)
- Responsive grid layout (auto-fill, works mobile to desktop)
- Modern Clipboard API with fallback to `document.execCommand()` for older browsers
- Full keyboard navigation support
- ~5KB total (before images)

## Local

Just open `index.html` in a browser, or run a local server:

```bash
# Python 3
python3 -m http.server 8000

# Or Node.js
npx serve
```

Then go to `http://localhost:8000`.

## Deploy to GitHub Pages

1. Create a repo and push:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/unicute-dividers.git
git push -u origin main
```

2. Go to Settings → Pages and select `main` branch as the source.

3. Your site will be live at `https://yourusername.github.io/unicute-dividers/` in a minute or two.
