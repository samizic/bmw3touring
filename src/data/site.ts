// Site-wide content. Pages flagged `ready: false` show as "Soon" until they exist.
export const nav = [
  { label: 'Home', href: '', ready: true },
  { label: 'Specs', href: 'specs', ready: true },
  { label: 'Gallery', href: 'gallery', ready: false },
  { label: 'Maintenance', href: 'maintenance', ready: true },
];

// Headline numbers for the homepage stats band.
// Factory figures — full data lives in src/data/specs.ts
export const stats = [
  { value: '286', unit: 'PS', label: 'Power · 210 kW' },
  { value: '650', unit: 'Nm', label: 'Torque' },
  { value: '5.5', unit: 's', label: '0–100 km/h' },
  { value: 'B57', unit: '', label: '3.0 L inline-six diesel' },
];
