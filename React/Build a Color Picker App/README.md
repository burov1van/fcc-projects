# Build a Color Picker App

## Overview
This mini React exercise renders a single `ColorPicker` component that lets the user adjust the background color of the viewport in real time. It is designed as a lightweight playground for practicing state management and event handling without a bundler.

## Features
- Hex color input updates the surrounding container instantly via `useState`.
- Full‑page preview communicates the chosen color clearly for quick experimentation.
- Minimal CSS layout keeps the focus on the interaction logic while remaining responsive.

## Tech Stack
- React 18 (UMD build loaded from CDN)
- Babel Standalone for on-the-fly JSX transpilation
- Plain HTML and CSS

## Getting Started
1. Open `index.html` in your browser (or use a “Live Server” extension) to load the component.
2. Adjust the `<input type="color">` control and watch the container background update.
3. Modify `Footer.jsx` (the component file) or `styles.css` to extend the UI with palettes, presets, etc.

## Purpose
The project’s goal is to reinforce fundamental React skills—component authoring, `useState`, and DOM events—while providing a reusable snippet for future UI prototypes that require quick color selection.
