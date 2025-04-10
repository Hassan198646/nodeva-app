/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs:"550",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1300px",
      "2xl": "1536px",
    },
    colors: {
      "navy-dark": "#0F0F1B", // Main background
      "navy-light": "#1A1A2E", // Section background
      "gray-light": "#B0B0C0", // Body text
      "purple-light": "#8A4AF3", // Graphics and chat bubble
      "purple-dark": "#6A5ACD", // Globe
      "gray-dark": "#4A4A6A", // Secondary chat bubble
      purple: "#800080",
      textgradiant:
        "linear-gradient(137.88deg, #8A38EE 51.59%, #D64FED 99.21%)",
    },
    extend: {
      animation: {
        'spin-slow': 'spin 0s linear infinite',
      },
      backgroundImage: {
        "gradient-bg": "linear-gradient(toright, #412767, #130D1F, #191327)",
        "text-gradient":
          "radial-gradient(64.18% 64.18% at 71.16% 35.69%, #B1C9D8 0%, #5A8296 50%, #1E3542 100%)",
          'custom-gradient': 'linear-gradient(135deg,rgb(48, 32, 73), #120D1F)',
      },
    },
  },
  plugins: [],
};
