/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f65582",
        "primary-dark": "#e0406c",
        "primary-light": "#fce7f3",
        "primary-container": "#ff7484",
        "on-primary": "#ffffff",
        "surface": "#ffffff",
        "surface-container": "#ffe1e8",
        "surface-container-low": "#ffecf0",
        "surface-container-lowest": "#ffffff",
        "surface-container-high": "#ffd9e2",
        "surface-container-highest": "#ffd1dd",
        "surface-variant": "#f8fafc",
        "on-surface": "#1e293b",
        "on-surface-variant": "#64748b",
        "on-background": "#1e293b",
        "background": "#ffffff",
        "outline": "#94a3b8",
        "outline-variant": "#e2e8f0",
        "secondary": "#9d365f",
        "tertiary": "#6946af",
        "error": "#b02500",
        // Dashboard specific
        "dash-bg": "#f8f9fc",
        "dash-surface": "#ffffff",
        "dash-primary": "#f24d73",
      },
      fontFamily: {
        'headline': ['"Plus Jakarta Sans"', 'sans-serif'],
        'body': ['"Inter"', 'sans-serif'],
        'label': ['"Inter"', 'sans-serif'],
        'sans': ['"Inter"', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
        "full": "9999px",
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
