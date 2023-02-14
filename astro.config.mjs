import { defineConfig } from 'astro/config';

import mdx from "@astrojs/mdx";
import image from "@astrojs/image";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), image(), tailwind()],
  site: 'https://Xavier-Pisco.github.io',
});