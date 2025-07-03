/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,jsx}"],
    theme: {
      extend: {
        boxShadow: {
          'custom-purple': '0 4px 15px rgba(128, 90, 213, 0.5)', // لون بنفسجي
          'custom-blue': '0 4px 15px rgba(59, 130, 246, 0.4)',   // لون أزرق
        },
      },
    },
    plugins: [],
  }
  