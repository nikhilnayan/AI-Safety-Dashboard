# 🛡️ AI Safety Incident Dashboard

An interactive web dashboard for reporting and tracking AI safety incidents. Built with **React**, **TypeScript**, **Tailwind CSS**, and enhanced with **Framer Motion** animations.

---

## 🌐 Live Demo

👉 [Click here to view the live project](https://ai-safety-dashboard-rho.vercel.app)

---

## 🚀 Features

- Display a list of AI safety incidents with severity, title, and report date.
- Filter by **severity level** (`Low`, `Medium`, `High`, `All`).
- Sort by **report date** (`Newest First`, `Oldest First`).
- Expand/collapse detailed incident descriptions.
- Form to report new incidents with live UI update.
- Responsive design and smooth animations.

---

## 🛠️ Tech Stack

- **Framework**: [React](https://reactjs.org/) + [Vite](https://vitejs.dev/)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React

---

## 📦 Installation & Running Locally

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/ai-safety-dashboard.git
cd ai-safety-dashboard
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Development Server

```bash
npm run dev
```

Your app should now be running at [http://localhost:5173](http://localhost:5173)

---

## 📁 Project Structure

```
src/
├── components/       # UI Components (Card, Form, Controls)
├── data/             # Mock data (incidents)
├── App.tsx           # Main app entry point
└── main.tsx          # React root render
```
---

## 💡 Design Notes

- **Componentization**: The dashboard is broken into small reusable components for maintainability.
- **State Management**: Used React's local state (`useState`) for managing filters, form data, and toggles.
- **Responsiveness**: Tailwind utilities were used to ensure mobile-friendly layout with flex design.
- **Animations**: Framer Motion provided elegant entrance and toggle animations for a smooth UX.

---
