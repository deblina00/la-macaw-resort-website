// /** @type {import('tailwindcss').Config} */

// import animate from "tailwindcss-animate";

// const config = {
//   darkMode: ["class"],

//   content: [
//     "./app/**/*.{js,ts,jsx,tsx,mdx}",
//     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/**/*.{js,ts,jsx,tsx,mdx}",
//   ],

//   theme: {
//     container: {
//       center: true,
//       padding: "1rem",
//       screens: {
//         "2xl": "1280px",
//       },
//     },

//     extend: {
//       colors: {
//         border: "hsl(var(--border))",
//         input: "hsl(var(--input))",
//         ring: "hsl(var(--ring))",

//         background: "hsl(var(--background))",
//         foreground: "hsl(var(--foreground))",

//         primary: {
//           DEFAULT: "hsl(var(--primary))",
//           foreground: "hsl(var(--primary-foreground))",
//         },

//         secondary: {
//           DEFAULT: "hsl(var(--secondary))",
//           foreground: "hsl(var(--secondary-foreground))",
//         },

//         resort: {
//           primary: "#0F3D2E",
//           secondary: "#C8A96A",
//           accent: "#2D8C82",
//           bg: "#F7F5F0",
//           text: "#1F2933",
//         },
//       },

//       animation: {
//         "fade-in": "fadeIn 0.5s ease-in-out",
//       },
//       keyframes: {
//         fadeIn: {
//           "0%": { opacity: 0, transform: "translateY(10px)" },
//           "100%": { opacity: 1, transform: "translateY(0)" },
//         },
//       },
//     },
//   },

//   plugins: [animate],
// };

// export default config;

/** @type {import('tailwindcss').Config} */

import animate from "tailwindcss-animate";

const config = {
  darkMode: ["class"],

  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1280px",
      },
    },

    extend: {
      colors: {
        // ================= SHADCN TOKENS (DO NOT TOUCH) =================
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",

        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",

        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },

        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },

        // ================= YOUR LUXURY THEME =================
        resort: {
          // Core colors
          black: "#0B0B0B",
          softBlack: "#121212",

          gold: "#C9A45C",
          goldHover: "#B8934F",
          goldLight: "#E7D3A3",

          white: "#FFFFFF",
          offWhite: "#F8F6F2",

          textDark: "#1A1A1A",
          textLight: "#EAEAEA",

          // ================= BACKWARD COMPATIBILITY =================
          // (so your old classes don't break immediately)
          primary: "#0B0B0B",
          secondary: "#C9A45C",
          accent: "#C9A45C",
          bg: "#F8F6F2",
          text: "#1A1A1A",
        },
      },

      // ================= ANIMATIONS =================
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
      },

      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(10px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
    },
  },

  plugins: [animate],
};

export default config;
