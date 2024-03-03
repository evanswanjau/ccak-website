/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

// Let's create a plugin that adds utilities!
const capitalizeFirst = plugin(function ({ addUtilities }) {
    const newUtilities = {
        ".capitalize-first:first-letter": {
            textTransform: "uppercase",
        },
    };
    addUtilities(newUtilities, ["responsive", "hover"]);
});

module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                manjari: ['"Manjari"'],
                poppins: ['"Poppins"'],
            },
        },
    },
    plugins: [require("@tailwindcss/line-clamp"), capitalizeFirst],
};
