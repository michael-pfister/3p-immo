import { Options } from "$fresh/plugins/twind.ts";

export default {
  theme: {
    fontFamily: {
      sans: "'Roboto Slab', serif",
    },
    colors: {
      white: "#ffffff",
      black: "#070600",
      gray: "#727272",
    },
    extend: {
      colors: {
        brown: "#7A6C5D",
      },
    },
  },
  preflight: {
    "@import":
      `url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@200;400;700&display=swap');`,
    body: {
      color: "#070600",
    },
    tr: {
      "border-bottom": "1px solid #727272",
    },
    th: {
      "font-weight": "bold",
      "text-align": "left",
    },
    td: {
      "padding": "4px",
    },
  },
} as unknown as Options;
