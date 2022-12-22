/** @type {import('tailwindcss').Config} */
module.exports = {
    theme: {
        colors:{
            'dark': '#252525',
            'darken': '#0A0909',
            'orange': '#ED7A3C',
            'light': '#E2E2E9',
        },
        gridTemplateRows: {
            '12':'repeat(3, minmax(0, auto))'
        },
        fontFamily: {
            'titles':['Montserrat', 'sans-serif']
        }
    },  
    plugins: [],
}