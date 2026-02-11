import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                // Now you can use className="font-sans" and it will be Space Grotesk
                sans: ['var(--font-grotesk)', 'sans-serif'],
                // Now you can use className="font-mono" and it will be Space Mono
                mono: ['var(--font-mono)', 'monospace'],
            },
        },
    },
    plugins: [],
};
export default config;