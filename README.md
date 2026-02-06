# Shamal Theekshana - Portfolio Website

A modern, production-ready personal portfolio website built with React, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Tech Stack**: React 18, Tailwind CSS, Framer Motion
- **Responsive Design**: Mobile-first approach with seamless responsive layouts
- **Glassmorphism UI**: Beautiful glass-effect cards with backdrop blur
- **Smooth Animations**: Framer Motion-powered transitions and interactions
- **Dark Theme**: Professional dark theme with blue/cyan accent colors
- **Sticky Navigation**: Fixed navbar with hamburger menu for mobile
- **Smooth Scrolling**: Anchor-based navigation with smooth scroll behavior
- **Production-Ready**: Clean, modular code architecture

## 📁 Project Structure

```
shamal-portfolio/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Certifications.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   ├── projects.js
│   │   ├── certifications.js
│   │   └── skills.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Steps

1. **Navigate to project directory**
   ```powershell
   cd "d:\My Designs\MY Portfolio"
   ```

2. **Install dependencies**
   ```powershell
   npm install
   ```

3. **Start development server**
   ```powershell
   npm run dev
   ```

4. **Open browser**
   - The app will automatically open at `http://localhost:3000`
   - If not, manually navigate to the URL shown in the terminal

## 📦 Build for Production

```powershell
npm run build
```

The production-ready files will be in the `dist/` folder.

## 🎨 Customization

### Update Personal Information

1. **Projects**: Edit `src/data/projects.js`
2. **Certifications**: Edit `src/data/certifications.js`
3. **Skills**: Edit `src/data/skills.js`
4. **Contact Info**: Update links in `src/components/Contact.jsx` and `src/components/Footer.jsx`

### Modify Colors

Edit `tailwind.config.js` to change the color scheme:

```javascript
colors: {
  primary: {
    DEFAULT: '#3B82F6', // Change primary color
    dark: '#2563EB',
  },
  accent: {
    DEFAULT: '#06B6D4', // Change accent color
    light: '#22D3EE',
  }
}
```

## 🎯 Sections Overview

- **Hero**: Eye-catching introduction with CTAs
- **About**: Professional summary and background
- **Certifications**: Academic and professional achievements
- **Projects**: Featured work with tech stack and links
- **Skills**: Technical skills organized by category
- **Contact**: Contact form and social links
- **Footer**: Additional links and credits

## 🔧 Technologies Used

- **React 18** - UI Library
- **Vite** - Build tool
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 License

This project is open source and available for personal use.

## 👤 Author

**Shamal Theekshana**
- Final Year BIT Student at ESOFT Metro Campus
- Specializing in Cybersecurity & Web Development

---

Built with ❤️ using React, Tailwind CSS & Framer Motion
