import postcssPresetEnv from 'postcss-preset-env'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'

export default {
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: { importLoaders: 1 }
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
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
            }
          }
        ]
      }
    ]
  }
} 