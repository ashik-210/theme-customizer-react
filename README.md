# Theme Customizer (React + useReducer)

A small React app for practicing global state management with the `useReducer` hook. Users can toggle between light/dark themes, adjust font size, and switch accent colors — all controlled through a single reducer and reflected live across the UI.

**Live demo:** https://theme-customizer-react.vercel.app/
**Repository:** https://github.com/ashik-210/theme-customizer-react

## Features

- 🌗 Light/Dark theme toggle
- 🔠 Increase/decrease font size dynamically
- 🎨 Accent color switcher (blue, green, purple)
- ♻️ Reset to default state
- 📱 Fully responsive layout (mobile, tablet, desktop)

## Tech Stack

- React (Hooks — `useReducer`)
- Tailwind CSS
- Vite

## How It Works

All theme-related state (`theme`, `fontSize`, `accent`) is managed in a single reducer in `App.jsx`. UI components (`Card`, `ThemeCustomizer`) receive `state` and `dispatch` as props and never manage their own local state — every change flows through defined action types:

- `TOGGLE_THEME`
- `INCREASE_FONT`
- `DECREASE_FONT`
- `SET_ACCENT`
- `RESET`

## Getting Started

```bash
# Clone the repo
git clone https://github.com/ashik-210/theme-customizer-react.git
cd theme-customizer-react

# Install dependencies
npm install

# Run locally
npm run dev
```

## Project Structure

```
src/
├── App.jsx                  # Root component, reducer, and global state
├── ThemeCustomizer.jsx      # Controls panel (theme, font size, accent)
└── components/
    └── Card.jsx              # Sample content card reflecting accent color
```

## What This Project Demonstrates

- Centralized state management with `useReducer` instead of multiple `useState` calls
- Passing `dispatch` down to child components for controlled state updates
- Applying dynamic Tailwind classes safely (avoiding purge issues with static class maps)
- Responsive design with Tailwind's breakpoint utilities
