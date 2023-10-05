/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'shippori' : ['Shippori Antique B1', 'sans-serif']
        // 'martian': ['Martian Mono', 'monospace'],
        // 'josefin': ['Josefin Sans', 'sans-serif']
      },
    }
  },
  variants: {
    extend: {
        display: ["group-hover"],
    },
  },
  plugins: [],
}

