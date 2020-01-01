module.exports = {
  head: {
    title: 'nuxt-portfolio',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'GraphCMS Blog starter using Apollo Client and Nuxt.js' }
    ]
  },
  build: {
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    postcss: {
      plugins: {
        'postcss-import': true
      },
      preset: {
        // Change the postcss-preset-env settings
        autoprefixer: {
          grid: true
        }
      }
    }
  },
  modules: [
    '@nuxtjs/apollo',
    '@nuxtjs/google-analytics',
    '@nuxtjs/style-resources'
  ],
  googleAnalytics: {
    id: 'G-7T0JLV856W'
  },
  styleResources: {
    // your settings here
    scss: ['~/assets/scss/_init.scss'] // alternative: scss
  },
  plugins: ['~/plugins/methods.js'],
  apollo: {
    clientConfigs: {
      default: '~/apollo/client-configs/default.js'
    }
  }
}
