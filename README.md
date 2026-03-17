# Meghana Pasupuleti Portfolio

Modern developer portfolio built with React + Vite + TailwindCSS + Framer Motion.

## Auto Setup Commands

```bash
# 1) Create project (from parent folder)
npm create vite@latest meghana-portfolio -- --template react
cd meghana-portfolio

# 2) Install dependencies
npm install react react-dom framer-motion react-icons react-scroll
npm install -D vite @vitejs/plugin-react tailwindcss postcss autoprefixer

# 3) Tailwind init (if scaffolding manually)
npx tailwindcss init -p

# 4) Start development server
npm install
npm run dev
```

## Run This Project

```bash
npm install
npm run dev
```

## EmailJS Contact Setup

1. Create an EmailJS account and set up:
   - one Email Service
   - one Email Template
   - a Public Key
2. Create a local `.env` file from `.env.example`.
3. Add your keys:

```bash
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

4. In your EmailJS template, use variables like:
   - `{{from_name}}`
   - `{{from_email}}`
   - `{{message}}`
   - `{{to_email}}`
5. Restart dev server after editing `.env`.

## Build

```bash
npm run build
npm run preview
```
