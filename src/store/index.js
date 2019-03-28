import Vue from 'vue'
import Vuex from 'vuex'
import common from './modules/common.js'
import enterpriseListCV from './modules/enterpriseListCV'
import frontend from './modules/frontend'
import session from './modules/session'
Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const store = new Vuex.Store({
  modules: {
    common,
    enterpriseListCV,
    frontend,
    session
  },
  strict: debug
})

export default store
