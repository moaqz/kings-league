import { defineConfig } from "unocss";
import transformerVariantGroup from "@unocss/transformer-variant-group";

export default defineConfig({
  transformers: [transformerVariantGroup()],
  theme: {
    fontFamily: {
      body: ["Archivo", "system-ui", "sans-serif"],
      title: ["Archivo Black", "system-ui", "sans-serif"],
    },
    maxWidth: {
      "8xl": "100rem",
    },
    colors: {
      kl: {
        darkgrey: "#5c5c5c",
        orange: "#F8AF3F",
        grey: "#e8e8e8",
        yellow: "#ffcf00",
      },
    },
    fontSize: {
      s: "10px",
    },
  },
});
