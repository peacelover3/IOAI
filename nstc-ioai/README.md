# NSTC Community of IOAI Pakistan - Website

A modern, fast, and animated website for the NSTC Community of IOAI Pakistan. Built with pure HTML, CSS, and JavaScript with AI/Fog-inspired visuals and smooth animations.

## 🚀 Features

- **Modern Design**: AI/Fog color palette with gradient accents
- **Smooth Animations**: Custom animations inspired by reactbits.dev
- **Responsive**: Works perfectly on all devices (desktop, tablet, mobile)
- **Fast Loading**: Static site, no heavy frameworks
- **Hybrid Structure**: Landing page + Details page for resources
- **Accessible**: Clean semantic HTML and WCAG-compliant styling
- **SEO Ready**: Proper meta tags and structured content

## 📁 Project Structure

```
nstc-ioai/
├── index.html          # Landing page (home, mission, team)
├── details.html        # Resources page (rules, syllabus, FAQs)
├── css/
│   └── style.css       # Main stylesheet with AI/Fog palette
├── js/
│   └── main.js         # Animation and interactivity logic
├── assets/             # Placeholder for images (add team photos, logo, etc.)
└── README.md           # This file
```

## 🎨 Color Palette

- **Primary Dark**: `#0f1a3b` (Deep AI Navy)
- **Accent Cyan**: `#00d4ff` (Neon Cyan)
- **Accent Blue**: `#0099ff` (AI Blue)
- **Accent Purple**: `#7c3aed` (Tech Purple)
- **Fog Light**: `#f0f2f5` (Fog White)

## 📝 Important Customizations

### 1. Replace IOAI Logo
Search for this comment in **index.html** and **details.html**:
```html
<!-- TODO: Replace with official IOAI logo from internet -->
<div class="logo-placeholder">IOAI</div>
```
Replace with the actual IOAI logo image.

### 2. Add Team Images
Search for these comments in **index.html**:
```html
<!-- TODO: Replace these placeholders with actual Pakistani team photos from internet -->
<div class="team-image-placeholder">Team 1</div>
```
Replace placeholder divs with actual team photos.

### 3. Update WhatsApp Link
In both **index.html** and **details.html**, replace all instances of:
```
https://chat.whatsapp.com
```
with your actual WhatsApp community/channel link.

### 4. Update Contest & Syllabus Links
In **details.html**, the PDF links point to the parent directory:
```html
<a href="../Contest-Rules.pdf" download>Download Contest Rules</a>
<a href="../Syllabus.pdf" download>Download Syllabus</a>
```
Ensure `Contest-Rules.pdf` and `Syllabus.pdf` are in the parent directory, or adjust paths accordingly.

## 🚀 Quick Start

1. **Open in Browser**: Simply open `index.html` in your web browser
2. **Live Server** (Recommended for development):
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Or using Node.js (http-server)
   npx http-server .
   ```
   Then visit: `http://localhost:8000`

3. **Deploy**: Upload the entire folder to any web hosting service (GitHub Pages, Netlify, Vercel, etc.)

## 📱 Pages

### Landing Page (`index.html`)
- Hero section with animated background blobs
- Mission section with 3 key values
- Team gallery showcasing Pakistani teams
- Call-to-action (WhatsApp link)
- Responsive navigation bar

### Details Page (`details.html`)
- Contest rules download/view
- Syllabus download/view
- Key topics covered
- Frequently asked questions
- Back to home navigation

## 🎭 Animation Features

- **Blob Animation**: Floating AI/fog-inspired background blobs
- **Glitch Effect**: Hero text glitch on mouse hover
- **Fade-In**: Smooth fade-in for text elements
- **Scroll Animations**: Cards and elements animate when scrolled into view
- **Hover Effects**: Interactive hover states on buttons and cards
- **Parallax**: Subtle parallax effect on scroll

## 🔧 Customization

### Adding More Sections
1. Add a new `<section>` in `index.html`
2. Add styling to `css/style.css`
3. Add animations to `js/main.js`

### Changing Colors
Edit the CSS variables in `css/style.css`:
```css
:root {
    --primary-dark: #0f1a3b;
    --accent-cyan: #00d4ff;
    /* ... more colors ... */
}
```

### Adding Images
1. Place images in the `assets/` folder
2. Update the image paths in HTML files
3. Use `<img>` tags or CSS background images

## 📊 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## 🎓 Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Gradients, animations, flexbox, grid
- **JavaScript (Vanilla)**: No dependencies, GSAP-compatible
- **Inspired by**: reactbits.dev animation patterns

## 📝 FAQ

**Q: Why no frameworks?**  
A: Static sites are faster, easier to host, and require no build step. Perfect for community sites!

**Q: Can I add a backend later?**  
A: Absolutely! Add Node.js, Python, or any backend to expand functionality.

**Q: How do I deploy this?**  
A: Simply upload the folder to GitHub Pages, Netlify, or any static hosting.

**Q: Can I add forms or member profiles?**  
A: Yes! Integrate with services like Netlify Forms, Formspree, or your own backend API.

## 🤝 Contributing

To update or enhance the website:
1. Edit the relevant HTML, CSS, or JS files
2. Test locally
3. Deploy

## 📞 Support

For questions or issues:
- Join the WhatsApp community
- Contact the NSTC team

---

**Made with ❤️ for NSTC Community of IOAI Pakistan**

*Last Updated: May 2026*
