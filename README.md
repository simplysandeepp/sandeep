# Sandeep Portfolio 🚀

A modern, immersive personal portfolio website featuring interactive 3D elements, smooth animations, and a sleek dark-themed design. Built with **React 19** and the latest web technologies to showcase creative developer skills.

🔴 **Live Demo:** [sandeepp.in](https://sandeepp.in)

---

## 🛠️ Built With

This project exploits a cutting-edge tech stack to deliver a high-performance, visually stunning experience.

### **Core & Architecture**
*   **[React 19](https://react.dev/)** - The library for web and native user interfaces.
*   **[Vite](https://vitejs.dev/)** - Next Generation Frontend Tooling for blazing fast builds.
*   **[React Router](https://reactrouter.com/)** - Client-side routing.

### **Styling & Design**
*   **[Tailwind CSS v4](https://tailwindcss.com/)** - Utility-first CSS framework for rapid UI development.
*   **[Lucide React](https://lucide.dev/)** - Beautiful & consistent icons.
*   **[PostCSS](https://postcss.org/)** - Tool for transforming CSS with JavaScript.

### **Animations & 3D Visuals**
*   **[Framer Motion](https://www.framer.com/motion/)** - Production-ready motion library for React.
*   **[Three.js](https://threejs.org/)** - JavaScript 3D library.
*   **[React Three Fiber](https://docs.pmnd.rs/react-three-fiber/)** - React renderer for Three.js.
*   **[GSAP](https://greensock.com/gsap/)** - Professional grade animation for the modern web.
*   **[tsParticles](https://particles.js.org/)** - Lightweight library for creating particles.

### **Backend & Services**
*   **[Web3Forms](https://web3forms.com/)** - Contact form backend service (Serverless).
*   **[Hostinger](https://www.hostinger.com/)** - Hosting provider.
*   **[GitHub Actions](https://github.com/features/actions)** - CI/CD pipeline for automated deployment.

---

## ✨ Features

*   **Immersive 3D Experience**: Integrated 3D models and scenes using R3F.
*   **Dynamic Particles**: Interactive background effects.
*   **Smooth Transitions**: Page and component animations powered by Framer Motion & GSAP.
*   **Responsive Design**: Fully optimized for mobile, tablet, and desktop.
*   **Functional Contact Form**: Direct email delivery via Web3Forms API.
*   **Automated Deployment**: CI/CD pipeline pushing directly to Hostinger via FTP.

---

## 🚀 Getting Started

To run this project locally, follow these steps:

### Prerequisites
*   Node.js (v18 or higher)
*   npm or yarn

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/simplysandeepp/sandeep.git
    cd sandeep
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Configure Environment Variables**
    Create a `.env` file in the root directory and add your keys:
    ```env
    VITE_WEB3FORMS_ACCESS_KEY=your-web3forms-access-key
    ```

4.  **Run the development server**
    ```bash
    npm run dev
    ```

---

## 📦 Deployment

This project uses **GitHub Actions** for automated deployment to Hostinger.

### How it works:
1.  Code is pushed to the `main` branch.
2.  GitHub Action triggers:
    *   Installs dependencies (`npm ci`).
    *   Builds the project (`npm run build`).
    *   Injects secrets (API Keys) into the build.
    *   Deploys the `dist/` folder to Hostinger via FTP.

### Configuration
*   **FTP Secrets**: Configured in GitHub Repository Settings (`FTP_SERVER`, `FTP_USERNAME`, `FTP_PASSWORD`).
*   **Workflow File**: Located at `.github/workflows/deploy.yml`.

---

## 📬 Contact

**Sandeep** - [sandeep@example.com](mailto:your-email@example.com)

Project Link: [https://github.com/simplysandeepp/sandeep](https://github.com/simplysandeepp/sandeep)
