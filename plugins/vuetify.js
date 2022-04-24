import Vue from 'vue'
import Vuetify from 'vuetify'
import colors from 'vuetify/es5/util/colors'
Vue.use(Vuetify)

export default new Vuetify({
  customVariables: ['~/assets/variables.scss'],
  rtl: true,
    theme: {
        light: true,
        themes: {
            light: {
              primary: '#2b4749',
              secondary: '#2b4749',
              accent: '#bf804b',

            }
        }
    }
})
