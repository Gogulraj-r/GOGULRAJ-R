# Gogulraj R — Premium Full-Stack Developer Portfolio

A cinematic, modern, luxury dark-themed personal portfolio website for **Gogulraj R**, Full-Stack Developer. Built with **React.js**, **Vite**, **Tailwind CSS**, **Three.js** (`@react-three/fiber` & `@react-three/drei`), and **Framer Motion**.

---

## 🚀 Key Features

- **Cinematic 3D Hero Scene**: Custom interactive 3D metallic geodesic polyhedron with dual cyan/violet orbital rings, floating sparkles, cursor reactivity, and a high-performance CSS fallback for non-WebGL devices.
- **True Code-Splitting & Lazy Loading**: Heavy 3D libraries (`Three.js`, `@react-three/fiber`) are dynamically chunked (`Scene3D.jsx`), keeping initial bundle delivery fast (~132 kB gzipped).
- **Luxury Dark Aesthetic**: Curated color palette (`#08090D` primary bg, `#10131A` secondary bg, `#00E5FF` electric cyan, `#8B5CF6` neon violet), glassmorphic surfaces, subtle grid patterns, and ambient glow meshes.
- **Editorial Typography**: Styled with Google Fonts **Space Grotesk** for titles and **Inter** for readable body content.
- **Interactive Projects Showcase**: High-resolution browser mockup cards with zoom on hover, tech tags, direct GitHub source links, and an inspection lightbox modal.
- **Accurate Work & Education**: Timeline of internship at Altruist Technologies Private Limited and B.E. Computer Science and Engineering at St. Joseph's College of Engineering & Technology (2022–2026).
- **Accessible Contact Section**: Validated contact form with instant field feedback, secure direct email client dispatch (`mailto:`), and one-click email clipboard copy.
- **100% Responsive Design**: Tested across mobile (360px, 390px), tablet (768px), laptop (1024px), and desktop (1440px) with animated hamburger drawer navigation.

---

## 🛠️ Technology Stack

| Layer | Technologies |
| :--- | :--- |
| **Frontend Framework** | [React 19](https://react.dev/) + [Vite](https://vite.dev/) |
| **3D Graphics** | [Three.js](https://threejs.org/) + [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber) + [@react-three/drei](https://github.com/pmndrs/drei) |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) |
| **Styling & Layout** | [Tailwind CSS v3](https://tailwindcss.com/) + Custom Glassmorphism CSS |
| **Icons** | [Lucide React](https://lucide.dev/) + Custom SVG Brand Components |
| **Fonts** | Google Fonts: `Space Grotesk` & `Inter` |

---

## 📂 Project Architecture

```plaintext
├── public/
│   ├── favicon.svg             # Custom luxury GR monogram SVG favicon
│   ├── avatar.jpg              # Developer visual portrait
│   └── projects/
│       ├── real_estate.jpg     # Real Estate Property Website preview
│       └── cake_shop.jpg       # Cake Shop Landing Page preview
├── src/
│   ├── assets/                 # Static vector assets
│   ├── components/
│   │   ├── Navbar.jsx          # Sticky blur header with active section pill & mobile drawer
│   │   ├── Hero.jsx            # Editorial headline, CTAs, status badge, lazy 3D canvas
│   │   ├── Scene3D.jsx         # Interactive Three.js R3F 3D polyhedron & cyber rings
│   │   ├── SceneFallback.jsx   # Lightweight CSS animation fallback while 3D loads
│   │   ├── About.jsx           # Bio summary, avatar card, technical interests & highlights
│   │   ├── Skills.jsx          # Categorized tech stack (Frontend, Backend, DB, Tools)
│   │   ├── Projects.jsx        # Project cards with GitHub buttons and detail lightbox modal
│   │   ├── Experience.jsx      # Vertical timeline for Altruist Technologies internship
│   │   ├── Education.jsx       # Academic card for B.E. Computer Science (2022-2026)
│   │   ├── Contact.jsx         # Validated contact form, direct email & social links
│   │   ├── Footer.jsx          # Monogram logo, quick links, back-to-top & dynamic year
│   │   └── SocialIcons.jsx     # Crisp vector brand icons (GitHub, LinkedIn)
│   ├── hooks/
│   │   └── useActiveSection.js # Hook to calculate active section on scroll
│   ├── App.jsx                 # Main layout orchestrator
│   ├── index.css               # Tailwind directives & design system utilities
│   └── main.jsx                # Application root entry point
├── index.html                  # SEO metadata, Open Graph tags & Google Fonts
├── package.json                # Project dependencies and npm scripts
├── tailwind.config.js          # Theme tokens, custom colors, animations, shadows
└── vite.config.js              # Vite configuration
```

---

## ⚡ Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed (v18 or higher recommended; v24 supported).

### 1. Installation

Clone or extract the repository and install the dependencies:

```bash
npm install
```

### 2. Run the Development Server

Start the local Vite development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

Visit `http://localhost:5173/` in your browser.

### 3. Build for Production

To create an optimized production build:

```bash
npm run build
```

This generates an ultra-optimized `dist/` directory with separated chunks.

To preview the production build locally:

```bash
npm run preview
```

---

## 🎨 Customization Guide

### 1. Updating Projects & Source Links
Open [`src/components/Projects.jsx`](file:///e:/program/R%20GOGULRAJ/src/components/Projects.jsx). The `projects` array contains each featured project's title, tagline, description, image path, technology tags, and GitHub repository URL.

### 2. Replacing Images
- **Avatar**: Replace `public/avatar.jpg` with your own portrait photo.
- **Project Previews**: Add new screenshots to `public/projects/` and update the `image` path in `src/components/Projects.jsx`.
- **Favicon**: Customize `public/favicon.svg` to adjust the monogram initials or gradient colors.

### 3. Modifying Contact Details & Social Links
Open [`src/components/Contact.jsx`](file:///e:/program/R%20GOGULRAJ/src/components/Contact.jsx) and [`src/components/Footer.jsx`](file:///e:/program/R%20GOGULRAJ/src/components/Footer.jsx):
- Change `gogulrajr2004@gmail.com` to your email.
- Change `https://github.com/Gogulraj-r` to your GitHub username.
- Change `https://linkedin.com` to your LinkedIn profile URL.

---

## 🚢 Deployment Instructions

### Deploy to Vercel (Recommended)
1. Push your repository to GitHub.
2. Sign in to [Vercel](https://vercel.com/) and click **Add New Project**.
3. Import your GitHub repository.
4. Framework Preset will automatically detect **Vite**.
5. Click **Deploy**. Vercel will build and deploy your portfolio with continuous deployment on every git push.

### Deploy to Netlify
1. Log in to [Netlify](https://www.netlify.com/).
2. Select **Add new site** > **Import an existing project**.
3. Connect your Git repository.
4. Set Build command: `npm run build` and Publish directory: `dist`.
5. Click **Deploy site**.

---

## 📜 License

Created and maintained by **Gogulraj R**. All rights reserved.
