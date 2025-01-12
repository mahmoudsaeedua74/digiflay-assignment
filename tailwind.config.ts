import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1rem", sm: "rem" },
    },

    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(to bottom, #eceaf6 , #F9F8FD )",
      },
      boxShadow: {
        custom: "0px 4px 12px 0px #00000014",
      },
      colors: {
        mainColor: "#49BD88",
        secondColor: "#6D5CBC",
        paragraphColor: "#666666",
      },
    },
  },
  plugins: [],
} satisfies Config;
