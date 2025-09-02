/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'md': '768px',  // 只保留md断点，区分移动端和PC端
    },
    extend: {
      letterSpacing: {
        'tighter': '-0.05em',
        'tight': '-0.025em',
        'normal': '0em',
        'wide': '0.025em',
        'wider': '0.05em',
        'widest': '0.1em',
      },
      height: {
        '200': '50rem',  // 800px
        '240': '60rem',  // 960px
      },
      fontSize: {
        xs: '12px',    // 原 0.75rem
        sm: '14px',    // 原 0.875rem
        base: '16px',  // 原 1rem（默认正文大小）
        lg: '18px',    // 原 1.125rem
        xl: '20px',    // 原 1.25rem
        '2xl': '24px', // 原 1.5rem
        '3xl': '30px', // 原 1.875rem
        '4xl': '36px', // 原 2.25rem
      },
      // colors: {
      //   'navy-dark': '#00234e',
      // }
    },
  },
  plugins: [],
}
