// Generate a random hex color
//
export const randomColor = () =>
  `#${Math.random().toString(16).slice(2, 8).padEnd(6, '0')}`;