// @ts-check
import { defineConfig } from 'astro/config';

// Hosted as a GitHub Pages project site: https://samizic.github.io/bmw3touring
export default defineConfig({
  site: 'https://samizic.github.io',
  base: '/bmw3touring',
  trailingSlash: 'ignore',
  image: {
    // Astro's sharp service strips EXIF (incl. GPS) from every optimized image.
    responsiveStyles: true,
  },
});
