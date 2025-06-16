/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Make sure this covers your project structure
  ],
  theme: {
    extend: {
      colors: {
        // Example custom colors - choose your own!
        primary: "#0a192f", // Dark blue/navy
        secondary: "#64ffda", // Neon green/cyan accent
        lightslate: "#ccd6f6",
        slate: "#8892b0",
        darkslate: "#495670",
        white: "#e6f1ff", // Off-white
      },
      fontFamily: {
        // Example custom fonts
        sans: ["Inter", "sans-serif"], // Add 'Inter' font (or your choice) in index.html
        mono: ["Fira Code", "monospace"], // Add 'Fira Code' font
      },
      animation: {
        "fade-in-up": "fadeInUp 0.8s ease-out forwards",
        "slow-spin": "spin 10s linear infinite", // For React icon
        "slow-bob": "bob 3s ease-in-out infinite", // For Docker icon
        "slow-pulse": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "slow-float": "bob 4s ease-in-out infinite",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        bob: {
          // Keyframes for the bobbing animation
          "0%, 100%": { transform: "translateY(-4px)" },
          "50%": { transform: "translateY(4px)" },
        },
      },
    },
  },
  plugins: [],
};
