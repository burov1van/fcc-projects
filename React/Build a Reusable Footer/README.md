# Build a Reusable Footer

## Overview

This micro-project contains a `Footer` component that can be dropped into landing pages or single-page apps. The markup assembles three repeated link columns, a copyright note, and a secondary inline list of links.

## Features

- Semantic `<footer>` wrapper that keeps navigation groupings accessible.
- Multiple unordered lists show how to structure repeating navigation blocks for different audiences.
- Plain CSS entry point (`styles.css`) ready for grid/flexbox tweaks without additional tooling.

## Tech Stack

- React 18 UMD build rendered inside `index.html`
- Babel Standalone for JSX compilation
- Vanilla CSS for layout/spacing

## Getting Started

1. Open `index.html` through any static server (or double-click it) to mount `<Footer />`.
2. Edit `Footer.jsx` to replace the placeholder links or refactor them to map from data arrays.
3. Customize `styles.css` to match your project’s branding, column layout, and responsive behavior.

## Purpose

Use this component as a snippet for practicing semantic markup and as a starting point when you need a consistent set of calls to action in the footer of future projects.
