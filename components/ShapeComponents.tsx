// ShapeComponents.js
import React from 'react';

// Circle Shape Component
export const Circle = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" style={{ marginRight: 8 }}>
    <circle cx="12" cy="12" r="10" stroke="black" strokeWidth="2" fill="none" />
  </svg>
);

// Square Shape Component
export const Square = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" style={{ marginRight: 8 }}>
    <rect x="4" y="4" width="16" height="16" stroke="black" strokeWidth="2" fill="none" />
  </svg>
);

// Triangle Shape Component
export const Triangle = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" style={{ marginRight: 8 }}>
    <polygon points="12,4 4,20 20,20" stroke="black" strokeWidth="2" fill="none" />
  </svg>
);

// Diamond Shape Component
export const Diamond = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" style={{ marginRight: 8 }}>
    <polygon points="12,2 22,12 12,22 2,12" stroke="black" strokeWidth="2" fill="none" />
  </svg>
);

// Star Shape Component
export const Star = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" style={{ marginRight: 8 }}>
    <polygon points="12,2 15,8 22,9 17,14 18,21 12,17 6,21 7,14 2,9 9,8" stroke="black" strokeWidth="2" fill="none" />
  </svg>
);

// Heart Shape Component
export const Heart = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" style={{ marginRight: 8 }}>
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" stroke="black" strokeWidth="2" fill="none" />
  </svg>
);

// Pentagon Shape Component
export const Pentagon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" style={{ marginRight: 8 }}>
    <polygon points="12,2 20,9 17,21 7,21 4,9" stroke="black" strokeWidth="2" fill="none" />
  </svg>
);

// Ellipse Shape Component
export const Ellipse = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" style={{ marginRight: 8 }}>
    <ellipse cx="12" cy="12" rx="10" ry="6" stroke="black" strokeWidth="2" fill="none" />
  </svg>
);

// Parallelogram Shape Component
export const Parallelogram = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" style={{ marginRight: 8 }}>
    <polygon points="4,6 20,6 16,18 0,18" stroke="black" strokeWidth="2" fill="none" />
  </svg>
);

// Trapezoid Shape Component
export const Trapezoid = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" style={{ marginRight: 8 }}>
    <polygon points="5,6 19,6 15,18 9,18" stroke="black" strokeWidth="2" fill="none" />
  </svg>
);

// Arrow Shape Component
export const Arrow = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" style={{ marginRight: 8 }}>
    <path d="M12 2l-8 8h5v8h6v-8h5z" stroke="black" strokeWidth="2" fill="none" />
  </svg>
);

// Crescent Shape Component
export const Crescent = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" style={{ marginRight: 8 }}>
    <path d="M12 2C8.13 2 5 5.13 5 9s3.13 7 7 7c1.43 0 2.75-.5 3.81-1.32C14.3 15.06 14 13.56 14 12s.3-3.06 1.81-4.68C14.75 6.5 13.43 6 12 6 8.13 6 5 9.13 5 13s3.13 7 7 7c1.43 0 2.75-.5 3.81-1.32C14.3 18.06 14 16.56 14 15s.3-3.06 1.81-4.68C14.75 10.5 13.43 10 12 10 8.13 10 5 13.13 5 17s3.13 7 7 7c1.43 0 2.75-.5 3.81-1.32C14.3 22.06 14 20.56 14 19s.3-3.06 1.81-4.68C14.75 14.5 13.43 14 12 14 8.13 14 5 17.13 5 21s3.13 7 7 7c1.43 0 2.75-.5 3.81-1.32C14.3 26.06 14 24.56 14 23s.3-3.06 1.81-4.68C14.75 18.5 13.43 18 12 18 8.13 18 5 21.13 5 25s3.13 7 7 7c1.43 0 2.75-.5 3.81-1.32C14.3 30.06 14 28.56 14 27s.3-3.06 1.81-4.68C14.75 22.5 13.43 22 12 22 8.13 22 5 25.13 5 29s3.13 7 7 7c1.43 0 2.75-.5 3.81-1.32C14.3 34.06 14 32.56 14 31s.3-3.06 1.81-4.68C14.75 26.5 13.43 26 12 26 8.13 26 5 29.13 5 33s3.13 7 7 7c1.43 0 2.75-.5 3.81-1.32C14.3 38.06 14 36.56 14 35s.3-3.06 1.81-4.68C14.75 30.5 13.43 30 12 30 8.13 30 5 33.13 5 37s3.13 7 7 7c1.43 0 2.75-.5 3.81-1.32C14.3 42.06 14 40.56 14 39s.3-3.06 1.81-4.68C14.75 34.5 13.43 34 12 34 8.13 34 5 37.13 5 41s3.13 7 7 7c1.43 0 2.75-.5 3.81-1.32C14.3 46.06 14 44.56 14 43s.3-3.06 1.81-4.68C14.75 38.5 13.43 38 12 38 8.13 38 5 41.13 5 45s3.13 7 7 7c1.43 0 2.75-.5 3.81-1.32C14.3 50.06 14 48.56 14 47s.3-3.06 1.81-4.68C14.75 42.5 13.43 42 12 42 8.13 42 5 45.13 5 49s3.13 7 7 7c1.43 0 2.75-.5 3.81-1.32C14.3 54.06 14 52.56 14 51s.3-3.06 1.81-4.68C14.75 46.5 13.43 46 12 46 8.13 46 5 49.13 5 53s3.13 7 7 7c1.43 0 2.75-.5 3.81-1.32C14.3 58.06 14 56.56 14 55s.3-3.06 1.81-4.68C14.75 50.5 13.43 50 12 50 8.13 50 5 53.13 5 57s3.13 7 7 7c1.43 0 2.75-.5 3.81-1.32C14.3 62.06 14 60.56 14 59s.3-3.06 1.81-4.68C14.75 54.5 13.43 54 12 54z" stroke="black" strokeWidth="2" fill="none" />
  </svg>
);

// Hexagon Shape Component
export const Hexagon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" style={{ marginRight: 8 }}>
    <polygon points="12,2 20,9 17,21 7,21 4,9" stroke="black" strokeWidth="2" fill="none" />
  </svg>
);

// Octagon Shape Component
export const Octagon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" style={{ marginRight: 8 }}>
    <polygon points="7,2 17,2 22,7 22,17 17,22 7,22 2,17 2,7" stroke="black" strokeWidth="2" fill="none" />
  </svg>
);

// Cross Shape Component
export const Cross = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" style={{ marginRight: 8 }}>
    <polygon points="9,2 15,2 15,9 22,9 22,15 15,15 15,22 9,22 9,15 2,15 2,9 9,9" stroke="black" strokeWidth="2" fill="none" />
  </svg>
);

// Chevron Shape Component
export const Chevron = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" style={{ marginRight: 8 }}>
    <polygon points="12,2 22,12 12,22 2,12" stroke="black" strokeWidth="2" fill="none" />
  </svg>
);

// Right Arrow Shape Component
export const RightArrow = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" style={{ marginRight: 8 }}>
    <polygon points="2,12 12,2 12,8 22,8 22,16 12,16 12,22" stroke="black" strokeWidth="2" fill="none" />
  </svg>
);

// Left Arrow Shape Component
export const LeftArrow = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" style={{ marginRight: 8 }}>
    <polygon points="22,12 12,2 12,8 2,8 2,16 12,16 12,22" stroke="black" strokeWidth="2" fill="none" />
  </svg>
);

// Up Arrow Shape Component
export const UpArrow = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" style={{ marginRight: 8 }}>
    <polygon points="12,22 2,12 8,12 8,2 16,2 16,12 22,12" stroke="black" strokeWidth="2" fill="none" />
  </svg>
);

// Down Arrow Shape Component
export const DownArrow = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" style={{ marginRight: 8 }}>
    <polygon points="12,2 2,12 8,12 8,22 16,22 16,12 22,12" stroke="black" strokeWidth="2" fill="none" />
  </svg>
);

// Hexagram Shape Component
export const Hexagram = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" style={{ marginRight: 8 }}>
    <polygon points="12,2 15,8 22,9 17,14 18,21 12,17 6,21 7,14 2,9 9,8" stroke="black" strokeWidth="2" fill="none" />
  </svg>
);
