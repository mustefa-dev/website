import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      zIndex: {
        '9999': '9999',
        '9998': '9998',
      },
      width: {
        wxl: '430px',
        xxl: '90%',
      },
      minWidth: {
        xl: '500px',
      },
      maxWidth: {
        xl: '50%',
      },
      height: {
        smInpx: '96px',
        xl: '85vh',
      },
      backgroundColor: {
        ofWhite: '#F7F7F7',
        glass: 'rgba(255, 255, 255, 0.36)',
        FooterBg: 'rgb(40 40 40)',
        login: 'rgba(62, 62, 62, 0.3)',
      },
      backgroundImage: {
        'gradient-radials':
        'radial-gradient(ellipse at center, rgba(0,0,0,0.64) 0%, rgba(0,0,0,0) 100%)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'background-gradient':
          'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.48) 100%)',
        'new-gradient':
          'linear-gradient(180deg, rgba(0, 0, 0, 0.12) 0%, rgba(0, 0, 0, 0.4) 100%)',
        'heder-gradient': 'rgba(255,255,255,0.06)',
      },
      fontSize: {
        xs: '0.75rem', // Extra Small
        sm: '0.875rem', // Small
        base: '1rem', // Base
        lg: '1.125rem', // Large
        xl: '1.25rem', // Extra Large
        '2xl': '1.5rem', // 2 Extra Large
        '3xl': '1.875rem', // 3 Extra Large
        '4xl': '2.25rem', // 4 Extra Large
        '5xl': '3rem', // 5 Extra Large
        '6xl': '4rem', // 6 Extra Large
      },
      textColor: {
        logo: '#A58C83',
      },
      saturate: {
        25: '.55',
        75: '.75',
      },
    },
  },
  plugins: [require('tailwindcss-textshadow')],
};
export default config;
