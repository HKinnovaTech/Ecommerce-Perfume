import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        'custom-gradient-blue': 'linear-gradient(to top , black 0%, #012A3D 60%, black 90%)',
        'custom-gradient-gold': 'linear-gradient(to top right, black 30%, #012A3D 60%, black 90%)',
      },
    },
  },
  
  plugins: [],
};
export default config;
