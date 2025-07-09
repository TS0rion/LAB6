// tailwind.config.js (với "type": "module" trong package.json)
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#1e40af",
      },
    },
  },
  plugins: [],
};
