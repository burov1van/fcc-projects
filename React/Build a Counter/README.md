# Build a Counter

## Overview
This project showcases a composable counter widget powered by React’s `useState`. It is a pure front‑end sandbox that mounts a single component into `index.html` with CDN-hosted React and Babel.

## Features
- Increment, decrement, and reset controls with concise state updates.
- Live region (`aria-live="polite"`) keeps assistive technology informed of value changes.
- Utility CSS delivers a centered card UI, button variants, and subtle hover feedback.

## Tech Stack
- React 18 (UMD) + ReactDOM
- Babel Standalone for JSX transpilation
- Vanilla HTML/CSS (no build tooling)

## Getting Started
1. Open `index.html` directly in a browser or via a local HTTP server.
2. Interact with the counter buttons to verify the state changes.
3. Extend `Counter.jsx` to add features such as configurable step sizes or keyboard shortcuts.

## Purpose
The counter serves as a focused drill for stateful UI patterns—ideal for practicing `useState`, prop drilling, and component refactors before dropping the logic into larger apps.
