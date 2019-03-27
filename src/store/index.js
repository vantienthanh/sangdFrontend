import Vue from 'vue'
import Vuex from 'vuex'
import common from './modules/common.js'
import enterpriseListCV from './modules/enterpriseListCV'
Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const store = new Vuex.Store({
  modules: {
    common,
    enterpriseListCV
  },
  strict: debug
})

export default store
