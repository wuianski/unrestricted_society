# The Unrestricted Society

Single-page exhibition website for **超限社會 The Unrestricted Society**, the 2022 C-LAB annual exhibition (2022/09/24 – 11/27).

## Prerequisites

- npm = 8.11.0
- node = 16.16.0

## Install

```sh
npm install
```

## Usage

```sh
npm run dev / npm run build / npm run start
```

## Frontend Techniques

Notable techniques used in this project:

### Scroll-driven SVG "camera" animation

- The full-screen background is a large SVG whose `viewBox` is animated with Framer Motion (`useAnimationControls`), panning like a camera as the user scrolls between sections.
- Each section is observed with `useInView`; a section only takes over the animation when its neighbors are out of view. The target `viewBox` values live in a per-section lookup table with separate desktop and mobile coordinates (switched via MUI `useMediaQuery`).
- `viewBox` values are computed from the live window size, kept in state by a single `resize` listener.

### Framer Motion micro-interactions

- **Rotating circular text button**: SVG `<textPath>` on a circle, rotated continuously with `useTime` + `useTransform`, and paused while hovered.
- **Bilingual expanding menu links** (`MenuLink`): variant-based hover animation that swaps the Chinese and English labels with a sliding background bar.
- Section content fades/slides in with CSS transitions toggled by `useInView`.

## Note
