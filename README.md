# Honeyraj Singh Thakur — Personal Portfolio

A sleek, modern, and high-performance personal developer portfolio built with **React**, **Vite**, and **Tailwind CSS**. Designed to showcase full-stack Java engineering projects, technical skills, professional experience, education, and certifications with smooth micro-interactions and dark/light mode support.

---

## 🚀 Features

- **⚡ Fast & Modern Tech Stack**: Built on React 18 and Vite for instant hot-reloading and lightning-fast build performance.
- **🎨 Curated Design System**: Warm ivory aesthetic (`#FAF8F5`) paired with a refined dark mode (`#121212`), custom corner brackets, and JetBrains Mono typography.
- **💼 Interactive Sections**:
  - **Hero**: Quick intro with developer title, status badge, LeetCode stats, and direct social profile links.
  - **About**: Key metrics (200+ DSA problems solved, 6+ projects), education overview, and core professional attributes.
  - **Technical Skills**: Structured breakdown across Frontend, Backend, Languages, and Developer Tools.
  - **Featured Projects**: Detailed cards highlighting full-stack Java applications, REST APIs, and architecture links.
  - **Experience & Education**: Interactive tabbed navigation covering internships, academic background, and certifications.
  - **Contact & Direct Inquiries**: Quick email copy button, location details, and direct network links.
- **🤖 LLM / AI Indexing**: Includes a structured `/llms.txt` file in the `public/` directory for LLM and AI agent search integration.
- **✨ Smooth Motion**: Fluid scroll transitions and micro-animations powered by Framer Motion.

---

## 🛠️ Tech Stack

### **Frontend & Framework**
- **React.js 18** — Component-driven UI architecture
- **Vite** — High-performance frontend tooling & bundler
- **Tailwind CSS** — Utility-first styling workflow
- **Framer Motion** — Smooth gesture & scroll animations
- **Lucide React & React Icons** — Minimalist vector iconography

### **Core Engineering Expertise Highlighted**
- **Languages**: Java, C++, C, JavaScript (ES6+), SQL
- **Backend & Frameworks**: Spring Boot, Microservices, Spring MVC, Hibernate ORM, JDBC, REST APIs
- **Database**: MySQL
- **Tools**: Git, GitHub, Postman, VS Code

---

## 📂 Project Structure

```text
Honey-Portfolio/
├── public/
│   ├── images/             # Profile & asset images
│   ├── favicon.svg         # Site favicon
│   ├── llms.txt            # LLM crawler & search indexing
│   └── resume.pdf          # Resume document
├── src/
│   ├── components/
│   │   ├── About.jsx       # About & key stats
│   │   ├── BackToTop.jsx   # Scroll-to-top button
│   │   ├── Contact.jsx     # Contact & direct inquiries
│   │   ├── Experience.jsx  # Interactive tabs: Exp, Edu, Certs
│   │   ├── Footer.jsx      # Live clock & footer links
│   │   ├── HeroSection.jsx # Hero banner & profile card
│   │   ├── Navbar.jsx      # Navigation header & theme toggle
│   │   ├── Projects.jsx    # Featured projects & explore banner
│   │   ├── Skills.jsx      # Technical skills grid
│   │   └── ThemeToggle.jsx # Dark / light mode toggle
│   ├── context/
│   │   └── ThemeContext.jsx# React theme state provider
│   ├── App.jsx             # Main application layout
│   ├── index.css           # Global typography & styles
│   └── main.jsx            # React root entry point
├── package.json
├── tailwind.config.js
├── vite.config.js
├── LICENSE
└── README.md
```

---

## 💻 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18.x or later recommended)
- [npm](https://www.npmjs.com/) or [bun](https://bun.sh/)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/HoneySinghRajput03/Portfolio.git
   ```

2. **Navigate into the project directory:**
   ```bash
   cd Honey-Portfolio
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173/` in your browser.

---

## 📦 Available Scripts

In the project directory, you can run:

- `npm run dev` — Starts the development server at `http://localhost:5173/`.
- `npm run build` — Bundles the application for production to the `dist/` folder.
- `npm run preview` — Previews the production build locally.
- `npm run lint` — Runs ESLint to check for code quality and syntax issues.

---

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
