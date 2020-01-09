import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
Vue.use(Vuetify)

export default ctx => {
  const vuetify = new Vuetify({
    theme: {
      dark: false,
      themes: {
        dark: {
          // primary: '#263238',
          primary: '#342a21',
          accent: '#C67171',
          secondary: '#26A5B5',
          success: '#4CAF50',
          info: '#2196F3',
          warning: '#FB8C00',
          error: '#FF5252',
          dkGreen: '#3b8070'
        },
        light: {
          // accent: '#F44336',
          primary: '#3b8070',
          secondary: '#757575',
          accent: '#0277BD',
          success: '#4CAF50',
          info: '#2196F3',
          warning: '#FB8C00',
          error: '#FF5252',
          charcoal: '#342a21'
        }
      }
    },
    defaultAssets: {
      font: {
        family: 'Lato'
      },
      icons: 'mdi'
    }
  })

  ctx.app.vuetify = vuetify
  ctx.$vuetify = vuetify.framework
}
