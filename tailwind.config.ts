import type { Config } from "tailwindcss"
import defaultTheme from "tailwindcss/defaultTheme"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}", // Ensure no comma here if it's the last item
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1440px",
      }, // No comma
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...defaultTheme.fontFamily.sans],
        mono: ["var(--font-geist-mono)", ...defaultTheme.fontFamily.mono],
      }, // No comma
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        "glass-edge": "rgba(0, 212, 255, 0.2)",
        "glass-bg": "rgba(10, 10, 10, 0.25)",
        "glass-bg-light": "rgba(20, 20, 20, 0.15)", // No comma
      }, // No comma
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 4px)",
        sm: "calc(var(--radius) - 8px)",
      }, // No comma
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "text-glow-primary": {
          "0%, 100%": {
            textShadow:
              "0 0 6px hsl(var(--primary) / 0.7), 0 0 10px hsl(var(--primary) / 0.5), 0 0 18px hsl(var(--primary) / 0.3)",
          },
          "50%": {
            textShadow:
              "0 0 8px hsl(var(--primary) / 0.9), 0 0 15px hsl(var(--primary) / 0.7), 0 0 25px hsl(var(--primary) / 0.5)",
          },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "gradient-bg": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        "pulse-glow": {
          "0%, 100%": {
            boxShadow:
              "0 0 15px hsl(var(--primary)), 0 0 30px hsl(var(--primary) / 0.7), inset 0 0 10px hsl(var(--primary) / 0.5)",
          },
          "50%": {
            boxShadow:
              "0 0 25px hsl(var(--primary)), 0 0 50px hsl(var(--primary) / 0.7), inset 0 0 15px hsl(var(--primary) / 0.5)",
          },
        },
        "image-pulse": {
          // Subtle pulse for the hero image
          "0%, 100%": { opacity: "0.85", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.03)" },
        }, // No comma
      }, // No comma
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "text-glow-primary": "text-glow-primary 3s ease-in-out infinite alternate",
        float: "float 5s ease-in-out infinite",
        "gradient-bg": "gradient-bg 15s ease infinite",
        "pulse-glow": "pulse-glow 2.5s ease-in-out infinite alternate",
        "image-pulse": "image-pulse 7s ease-in-out infinite alternate", // No comma
      }, // No comma
      boxShadow: {
        "neon-cyan-soft": "0 0 10px hsl(var(--primary) / 0.4), 0 0 20px hsl(var(--primary) / 0.2)",
        "neon-cyan-medium": "0 0 20px hsl(var(--primary) / 0.6), 0 0 35px hsl(var(--primary) / 0.4)",
        "neon-cyan-intense": "0 0 30px hsl(var(--primary) / 0.8), 0 0 50px hsl(var(--primary) / 0.6)", // No comma
      }, // No comma
      backdropBlur: {
        xl: "24px",
        "2xl": "36px",
      }, // No comma
    }, // No comma
  }, // No comma
  plugins: [require("tailwindcss-animate")], // No comma
} satisfies Config // No comma

export default config
