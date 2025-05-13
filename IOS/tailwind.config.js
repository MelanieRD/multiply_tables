
import preset from '@lynx-js/tailwind-preset'

/** @type {import('tailwindcss').Config} */

/* module.exports = {
    content: [ "./src/**.{js,ts,jsx,tsx}" ],
    theme: {
        extend: {},
    },
    plugins: [],
} */

export default {
    presets: [preset],
    content: [ "./src/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}"
     ],
    theme: {
        extend: {},
    },
    plugins: [],
    theme: {
        colors: {
            primary: '#000000',
            secondary: '#ffffff',
            tertiary: '#7e5bef',
            quaternary: '#33fcff',
        }
    }
}