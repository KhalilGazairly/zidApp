import Vue from 'vue'
import Vuex from 'vuex'


// Load Vuex
Vue.use(Vuex)

// Create store
const store = () => {
  return new Vuex.Store({
    modules: {
      // auth,
    },
  })
}


export default store
