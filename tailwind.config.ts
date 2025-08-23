import type { Config } from "tailwindcss";
import tailwindCssAnimate from "tailwindcss-animate";
import colors from 'tailwindcss/colors'


export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
		fontFamily: {
			poppins: ['var(--font-poppins)'],
			inter: ['var(--font-inter)'],
		},
  		colors: {
			...colors,
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
			grey: {
				"500": 'hsl(var(--grey-500))',
				"900": 'hsl(var(--grey-900))'
			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
				"50": 'hsl(var(--primary-50))',
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
			neutral: {
				'100': 'hsl(var(--neutral-100))',
				'200': 'hsl(var(--neutral-200))',
				'300': 'hsl(var(--neutral-300))',
				'500': 'hsl(var(--neutral-500))',
				'700': 'hsl(var(--neutral-700))',
				'800': 'hsl(var(--neutral-800))',
				'900': 'hsl(var(--neutral-900))',
			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
		backgroundImage: {
			'auth-page-bg': 'url("/backgrounds/auth-page-bg.png")'
		}
  	}
  },
  plugins: [tailwindCssAnimate],
} satisfies Config;
