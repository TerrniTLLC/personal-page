import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
		fontFamily: {
			sans: ["Inter", ...defaultTheme.fontFamily.sans],
			serif: ["Lora", ...defaultTheme.fontFamily.serif],
		  },
	   colors: {
		background: 'hsl(var(--background))',
		foreground: 'hsl(var(--foreground))',
		primary: 'hsl(var(--primary))',
		'primary-foreground': 'hsl(var(--primary-foreground))',
		'popover': 'hsl(var(--popover))',
		'popover-foreground': 'hsl(var(--popover-foreground))',
		card: 'hsl(var(--card))',
		'card-foreground': 'hsl(var(--card-foreground))',
		secondary: 'hsl(var(--secondary))',
		'secondary-foreground': 'hsl(var(--secondary-foreground))',
		muted: 'hsl(var(--secondary))',
		'muted-foreground': 'hsl(var(--muted-foreground))',
		accent: 'hsl(var(--accent))',
		'accent-foreground': 'hsl(var(--accent-foreground))',
		destructive: 'hsl(var(--destructive))',
		'destructive-foreground': 'hsl(var(--destructive-foreground))',
		info: 'hsl(var(--info))',
		'info-foreground': 'hsl(var(--info-foreground))',
		border: 'hsl(var(--border))',
		input: 'hsl(var(--input))',
		ring: 'hsl(var(--ring))',
		radius: 'hsl(var(--radius))',
		'disabled': 'hsl(var(--disabled))',
		'disabled-foreground': 'hsl(var(--disabled-foreground))',
		'disabled-border': 'hsl(var(--border-disabled))'
	  },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  
  plugins: [require("@tailwindcss/typography")],
};