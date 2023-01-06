/** @type {import('tailwindcss').Config} */
module.exports = {
    theme: {
        extend: {
            colors:{
                'dark': '#252525',
                'darken': '#0A0909',
                'orange': '#ED7A3C',
                'light': '#E2E2E9',
            },
            fontFamily: {
                'titles':['Montserrat', 'sans-serif']
            },
            gridTemplateColumns: {
                'responsive':'repeat(auto-fit, minmax(300px,1fr))'
            }
        }
    },  
    plugins: [],
}