# Build a Mood Board

## Overview

The Mood Board is a simple gallery that maps over a hard‑coded data set to render themed cards. Each `MoodBoardItem` receives its own color swatch, imagery, and caption, making it a quick prototype for grid layouts or inspiration boards.

## Features

- Demonstrates mapping arrays to reusable components with React props and keys.
- Supports inline background colors per card for tonal exploration.
- Provides starter assets sourced from freeCodeCamp’s CDN so the layout works out-of-the-box.

## Tech Stack

- React 18 UMD build + Babel Standalone
- Plain HTML entry point
- (Optional) custom CSS file for layout/typography

## Getting Started

1. Serve `index.html` (e.g., with VS Code Live Server). The bundled script mounts `<MoodBoard />` onto `#root`.
2. Update `cards` in `MoodBoard.jsx` to reflect your own palette, destinations, or product inspirations.
3. Flesh out `styles.css` to add grid gaps, responsive breakpoints, or hover states.

## Purpose

The goal is to practice component composition and iterating over structured data, which are core skills for gallery-style UIs, CMS feeds, and landing page sections.
