/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './public/**/*.{html,js}',
        './*.html',
        './js/**/*.js',
    ],
    theme: {
        extend: {
            colors: {
                'nav-default': '#656565',
                'nav-hover':   '#eae5c8',
            },
            fontFamily: {
                'playfair-display-sc-regular':   ["Playfair Display SC", "serif"],
                'bodoni-sc':   ["Bodoni Moda SC", "serif"],
                'urbanist':      ["Urbanist", "sans-serif"],
                bodoni:        ["Bodoni Moda", "serif"],
                montserrat:    ["Montserrat", "sans-serif"],
                nanum:         ["Nanum Myeongjo", "serif"],

            },
        },
    },
    plugins: [],
};