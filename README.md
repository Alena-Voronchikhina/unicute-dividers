# UniCute Dividers

A clean, lightweight web application for copying beautiful Unicode and ASCII dividers to your clipboard with a single click.

![Project Status](https://img.shields.io/badge/status-active-success.svg)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## 📖 Description

UniCute Dividers is a simple, elegant static web application that provides a curated collection of decorative text dividers. Perfect for social media posts, documents, or any text where you want to add visual flair. Simply click any divider to copy it instantly to your clipboard.

## ✨ Features

- **Click-to-Copy**: One-click copying to clipboard with visual confirmation
- **20+ Beautiful Dividers**: Curated collection of Unicode and ASCII text dividers
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Accessibility**: Full keyboard navigation support and ARIA labels
- **No Dependencies**: Pure vanilla JavaScript, HTML, and CSS
- **Cross-Browser Compatible**: Modern clipboard API with fallback for older browsers
- **Zero Build Tools**: Works directly in any browser—no compilation needed

## 🚀 How to Run Locally

### Option 1: Direct File Opening
Simply open `index.html` in your web browser:
```bash
open index.html        # macOS
start index.html       # Windows
xdg-open index.html    # Linux
```

### Option 2: Local Web Server (Recommended)

Using Python 3:
```bash
python3 -m http.server 8000
```

Using Node.js (if you have it installed):
```bash
npx serve
```

Then navigate to `http://localhost:8000` in your browser.

## 🌐 Deploying with GitHub Pages

1. **Push your code to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: UniCute Dividers"
   git branch -M main
   git remote add origin https://github.com/yourusername/unicute-dividers.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Navigate to **Settings** → **Pages**
   - Under "Source", select the `main` branch
   - Click **Save**
   - Your site will be live at `https://yourusername.github.io/unicute-dividers/`

3. **Custom Domain (Optional)**:
   - Add a `CNAME` file with your custom domain
   - Configure DNS settings with your domain provider

## 📁 Project Structure

```
unicute-dividers/
├── index.html      # Main HTML structure
├── script.js       # Application logic and clipboard handling
├── style.css       # Styling and responsive design
└── README.md       # Project documentation
```

## 🛠️ Technical Details

### Technologies
- **HTML5**: Semantic markup with accessibility features
- **CSS3**: Modern flexbox/grid layout with CSS custom properties
- **Vanilla JavaScript**: ES6+ features, async/await, modern DOM APIs

### Browser Support
- Chrome/Edge 63+
- Firefox 53+
- Safari 13.1+
- Fallback support for older browsers via `document.execCommand()`

## 🔮 Future Work

### Planned Enhancements
- **Search & Filter**: Add search functionality to quickly find specific divider styles
- **Categories**: Organize dividers by theme (stars, hearts, flowers, etc.)
- **Custom Dividers**: Allow users to create and save their own dividers
- **Dark Mode**: Theme toggle for better viewing in low-light environments
- **Export/Import**: Save favorite dividers and share collections

### C++ WebAssembly Integration
As a future enhancement, this project could serve as a proof-of-concept for integrating C++ with web technologies:

- **Performance**: Replace JavaScript divider rendering logic with C++ compiled to WebAssembly using Emscripten
- **Advanced Features**: Implement complex text processing algorithms in C++ (pattern generation, Unicode normalization)
- **Learning Opportunity**: Bridge between systems programming (C++) and web development
- **Portfolio Showcase**: Demonstrate full-stack capabilities from low-level to high-level programming

**Why WebAssembly?**
- Near-native performance for computational tasks
- Reusable C++ codebase across platforms
- Modern web standard with growing ecosystem
- Excellent addition to a CS student's skill set

## 📝 License

This project is open source and available for educational and personal use.

## 👤 Author

Created as a portfolio project by a Computer Science student.  
Focused on clean code, accessibility, and modern web standards.

## 🤝 Contributing

This is primarily a portfolio project, but suggestions and improvements are welcome! Feel free to:
- Open an issue for bug reports or feature requests
- Fork the repository and submit pull requests
- Share your own divider ideas

---

**Made with ♡ and Unicode magic**
