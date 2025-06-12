/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './_includes/**/*.{html,js,md}',
    './_layouts/**/*.{html,js,md}',
    './_*/*.{html,js,md}',
    './*.{html,js,md}'
  ],
  theme: {
    fontSize: {
      xs: ['0.75rem', '1.2'],
      sm: ['0.875rem;', '1.2'],
      base: ['1rem', '1.2'],
      lg: ['1.125rem;', '1.2'],
      xl: ['1.25rem', '1.2'],
      '2xl': ['1.5rem', '1.2'],
      '3xl': ['1.875rem', '1'],
      '4xl': ['2.25rem', '1'],
      '5xl': ['3rem', '1'],
      '6xl': ['3.75rem', '1'],
      '7xl': ['4.5rem', '1'],
      '8xl': ['6rem', '1'],
      '9xl': ['8rem', '1'],
    },
    fontFamily: {
      'sans': ['Montserrat', 'ui-sans-serif'],
      'sans-tight': ['proxima-nova-condensed', 'ui-sans-serif'],
      'mono': ['Inconsolata', 'ui-mono', 'monospace'],
      'soft': ['proxima-soft', 'ui-sans-serif'],
      'soft-tight': ['proxima-soft-condensed', 'ui-sans-serif'],
    },
    extend: {
      lineHeight: {
        'tight': '.85',
        'snug': '.95',
        '12': '3rem',
      },
      spacing: {
        '5p': '5%',
        '10p': '10%',
        '15p': '15%',
        '20p': '20%',
        '30p': '30%',
        '75p': '75%',
        '80p': '80%',
        '90p': '90%',
        '100p': '100%',
      },
      aspectRatio: {
        '5/3': '5 / 3',
      },
      maxWidth:{
        '50': '50%',
        '75': '75%',
        '80': '80%',
        '90': '90%',
      },
      minHeight:{
        '100': '100vh',
        '90': '90vh',
        '80': '80vh',
        '70': '70vh',
        '60': '60vh',
        '50': '50vh',
      },
      lineHieght:{
        'sm': '0.8rem',
      },
      aspectRatio: {
        'landscape': '3 / 2',
        'landscapewide': '5 / 2',
        'portrait-tall': '5/8',
        'portrait': '4/5',
      },
      
      screens: {
        'xs': '380px',
        // => @media (min-width: 640px) { ... }
      },
    },
  },
  plugins: [
  ],
}
