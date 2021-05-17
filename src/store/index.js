import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import data from './modules/data'
const modules = {
  data
}

const store = new Vuex.Store({
  modules,
  strict: true
})

export default store