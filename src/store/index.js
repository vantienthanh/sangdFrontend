import Vue from 'vue'
import Vuex from 'vuex'
import common from './modules/common.js'
import frontend from './modules/frontend'
import session from './modules/session'
import member from './modules/member'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const store = new Vuex.Store({
  modules: {
    common,
    frontend,
    session,
    member
  },
  strict: debug
})

export default store
