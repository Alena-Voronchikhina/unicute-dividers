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

## Getting Started

Clone or download this repository and open `index.html` in your browser.

That's it. No build process, no dependencies.

## GitHub Pages

1. Push to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/unicute-dividers.git
git push -u origin main
```

2. Enable Pages: Settings → Pages → select `main` branch.

3. Live at `https://yourusername.github.io/unicute-dividers/`

## Browser Support

- Chrome/Edge 63+
- Firefox 53+
- Safari 13.1+
- Modern browsers with Clipboard API support, fallback for older versions
