// import type { Config } from "tailwindcss";

// const config: Config = {
//   darkMode: "class", // CRITICAL: This enables class-based dark mode
//   content: [
//     "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         // Mapping colors to CSS variables for dynamic switching
//         surface: "var(--surface)",
//         "surface-container": "var(--surface-container)",
//         "surface-container-low": "var(--surface-container-low)",
//         "surface-container-lowest": "var(--surface-container-lowest)",
//         "on-surface": "var(--on-surface)",
//         "on-surface-variant": "var(--on-surface-variant)",
//         primary: "var(--primary)",
//         "on-primary": "var(--on-primary)",
//         secondary: "#006c49",
//         "secondary-container": "#6cf8bb",
//         "on-secondary-container": "#00714d",
//         error: "#ba1a1a",
//         "error-container": "#ffdad6",
//         "on-error-container": "#93000a",
//         "outline-variant": "#c6c6cd"
//       },
//       fontFamily: {
//         headline: ["var(--font-manrope)"],
//         body: ["var(--font-inter)"],
//       },
//     },
//   },
//   plugins: [require("@tailwindcss/forms")],
// };
// export default config;

//2nd
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", 
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Light theme (Default)
        surface: "#f8f9ff",
        "surface-container": "#e5eeff",
        "surface-container-low": "#eff4ff",
        "surface-container-lowest": "#ffffff",
        "on-surface": "#0b1c30",
        "on-surface-variant": "#45464d",
        primary: "#000000",
        "on-primary": "#ffffff",
        secondary: "#006c49",
        "secondary-container": "#6cf8bb",
        "on-secondary-container": "#00714d",
        error: "#ba1a1a",
        "error-container": "#ffdad6",
        "on-error-container": "#93000a",
        "outline-variant": "#c6c6cd"
      },
      // This section defines the Dark Theme overrides
      // Use these in your components like: className="bg-surface dark:bg-slate-900"
      fontFamily: {
        headline: ["var(--font-manrope)"],
        body: ["var(--font-inter)"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
export default config;