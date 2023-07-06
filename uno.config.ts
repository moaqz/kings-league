import { defineConfig } from "unocss";
import transformerVariantGroup from "@unocss/transformer-variant-group";

export default defineConfig({
  transformers: [transformerVariantGroup()],
  theme: {
    fontFamily: {
      body: ["Archivo", "system-ui", "sans-serif"],
      title: ["Archivo Black", "system-ui", "sans-serif"],
    },
  },
});
