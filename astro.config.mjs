import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

import compressor from "astro-compressor";

// https://astro.build/config
export default defineConfig({
  site: 'https://magazineklert.vercel.app/',
  integrations: [tailwind(), sitemap(), compressor()]
});