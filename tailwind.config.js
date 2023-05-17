/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                manjari: ['"Manjari"'],
                montserrat: ['"Montserrat"'],
            },
        },
    },
    plugins: [require("@tailwindcss/line-clamp")],
};
