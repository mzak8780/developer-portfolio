import typography from "@tailwindcss/typography";
import daisyui from "daisyui";
import { space } from "postcss/lib/list";

/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{jsx,js}"],
    darkMode: "class",
    theme: {
        extend: {
            fontFamily: {
                ubter: ["inter"],
                montserrat: ["Montserrat"],
                spaceGrotesk: ["Space Grotesk"],
            },
            screens: {
                sm: "420px",
            },
        },
    },
    plugins: [typography, daisyui],
    daisyui: {
        themes: [
            "light",
            "dark",
            "cupcake",
            "bumblebee",
            "emerald",
            "corporate",
            "synthwave",
            "retro",
            "cyberpunk",
            "valentine",
            "halloween",
            "garden",
            "forest",
            "aqua",
            "lofi",
            "pastel",
            "fantasy",
            "wireframe",
            "black",
            "luxury",
            "dracula",
            "cmyk",
            "autumn",
            "business",
            "acid",
            "lemonade",
            "night",
            "coffee",
            "winter",
            "dim",
            "nord",
            "sunset",
        ],
    },
};
