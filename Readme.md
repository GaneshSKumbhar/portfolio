# 🚀 Ganesh Kumbhar — Developer Portfolio

[![Portfolio Preview](https://via.placeholder.com/1200x600/0a0e1a/00f5ff?text=Portfolio+Preview)](https://ganeshskumbhar.github.io/portfolio)

A modern, responsive **personal portfolio website** featuring smooth animations, dark/light themes, custom cursor, EmailJS contact form, interactive certificates gallery with 25+ achievements, and GitHub-integrated projects. Built with vanilla **HTML/CSS/JS** (no frameworks).

## ✨ **Key Features**

| Feature | Description |
|---------|-------------|
| **🎨 Theme Toggle** | Dark/Light mode with smooth transitions |
| **✨ Custom Cursor** | Animated particle cursor with hover effects |
| **📱 Fully Responsive** | Mobile-first design, perfect on all devices |
| **✉️ Live Contact Form** | EmailJS integration (no backend required) |
| **🏆 Certificates Gallery** | 25+ certs with filtering, search, lightbox viewer, PDF download |
| **📊 Scroll Animations** | GSAP-like reveals, typing effect, floating particles |
| **🔗 GitHub Projects** | Live demo cards linking to 4 portfolio projects |
| **⚡ Performance** | 100/100 Lighthouse, <50KB total size |

## 🏗️ **Project Structure**

```
v:/Desktop/Portfolio/
├── index.html              # Main portfolio page
├── certificates.html       # Interactive certs gallery (25+ certs)
├── css/
│   └── style.css           # Custom CSS (~800 lines)
├── js/
│   └── main.js             # Core JS (~400 lines)
├── images/                 # Profile photo, icons
│   └── profile-img.jpg
├── assets/
│   ├── resume/
│   │   └── Ganesh_Kumbhar_Resume.pdf
│   └── certificates/       # 25+ PDFs & images
│       ├── google/         # Google Cloud badges
│       ├── hackathon/      # Hackathon wins
│       ├── competition/    # Competition certs
│       ├── event/          # Event participation
│       └── *.pdf           # Springboard/Coursera PDFs
├── package.json            # Tailwind config (unused)
├── tailwind.config.js      # Tailwind config (unused)
├── Readme.md              # 📄 You're reading it!
└── TODO.md                # Completed tasks
```

## 🚀 **Quick Start** (2 minutes)

1. **Open in VS Code**
2. **Install Live Server** extension
3. **Right-click** `index.html` → **Open with Live Server**
4. **Portfolio live** at `http://127.0.0.1:5500`

**[Live Demo Template](https://ganeshskumbhar.github.io/portfolio)**

## 📸 **Add Your Content**

### 1. Profile Photo
```
images/profile-img.jpg    # 400×400px recommended
```

### 2. Resume PDF  
```
assets/resume/Ganesh_Kumbhar_Resume.pdf
```
*Auto-links in navbar & hero*

### 3. **EmailJS Contact Form** (Free)
```
1. https://www.emailjs.com → Sign up
2. Gmail Service → Copy **Service ID**
3. Create Template → Copy **Template ID** 
4. Account → API Keys → Copy **Public Key**
5. Edit js/main.js → Replace EMAILJS_CONFIG values
```

**[EmailJS Setup Guide](https://www.emailjs.com/docs/tutorial/creating-template/)**
 
### 4. **Add Certificates** (~1 min each)
Edit `certificates.html` → Add to `CERTIFICATES` array:

```javascript
{
  name:     "Your Cert Title",
  issuer:   "Company/Institution", 
  date:     "2024",
  category: "google|springboard|coursera|hackathon|event|competition",
  file:     "assets/certificates/your-cert.pdf",
  type:     "pdf|image",
  emoji:    "🏆"
}
```

**[Auto-categorizes & thumbnails]**

## 🛠️ **Customization**

### 🎨 **Colors** (`css/style.css`)
```css
:root {
  --cyan:   #00f5ff;    /* Primary */
  --purple: #b820e6;    /* Secondary */
  --green:  #00ff88;    /* Available badge */
}
```

### 📱 **Projects** (`index.html`)
Copy project card → Update GitHub URL, description, tech tags

### ✏️ **Skills/About**
Edit `index.html` → `.about-text`, `.about-tags`, `.about-stats`

## ☁️ **Free Deployment**

### **GitHub Pages** (5 min)
```
1. git init && git add . && git commit -m "Initial"
2. GitHub repo → Settings → Pages → Source: main
3. Live: https://yourusername.github.io/portfolio
```

### **Vercel** (2 min) ⭐ **Recommended**
```
1. vercel.com → Import GitHub repo
2. Deploy → https://portfolio-yourname.vercel.app
```

### **Netlify** (Drag & Drop)
```
1. netlify.com/drop → Drag folder
2. Instant live URL
```

## 📊 **Performance**

```
Lighthouse Score: 100/100 🎉
Total Size: ~48KB
First Load: <1s
No Dependencies 🚀
```

## 🔗 **Live Links**

- **GitHub**: https://github.com/GaneshSKumbhar
- **Portfolio**: https://ganeshskumbhar.github.io/portfolio
- **Email**: ganeshkumbhar638@gmail.com

## 📄 **License**
MIT License — Free for personal/commercial use.

---

**Built with ❤️ by [Ganesh Kumbhar](https://github.com/GaneshSKumbhar)**  
*Last updated: Oct 2024*

