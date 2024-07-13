/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {},
    daisyui: {
        themes: ["light", "dark", "cupcake", "forest"],
    },
    plugins: [require("daisyui"), require("@tailwindcss/forms")],
};
