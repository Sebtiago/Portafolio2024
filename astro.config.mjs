import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from "@astrojs/vercel/serverless";


// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: "server",
  adapter: vercel()
});
export default defineConfig({
  // ...
  build: {
    rollupOptions: {
      external: ['sharp'] // Agrega 'sharp' como dependencia externa
    }
  }
  // ...
  ,
  integrations: [tailwind()]
});