import { defineConfig } from "astro/config";
import UnoCSS from "unocss/astro";

// https://astro.build/config
export default defineConfig({
  integrations: [
    UnoCSS({
      injectReset: true,
    }),
  ],
  site: "https://moaqz.github.io",
  base: "/kings-league"
});
