import postcssPresetEnv from 'postcss-preset-env'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'

export default {
  plugins: [
    postcssPresetEnv({
      stage: 3,
      features: {
        'nesting-rules': true
      },
      autoprefixer: {
        flexbox: 'no-2009'
      },
      preserve: false
    }),
    tailwindcss,
    autoprefixer
  ]
} 