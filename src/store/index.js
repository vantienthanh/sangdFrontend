import Vue from 'vue'
import Vuex from 'vuex'
import common from './modules/common.js'
import frontend from './modules/frontend'
import session from './modules/session'
import member from './modules/member'
import profileUser from './modules/profile'
import enterprise from './modules/enterprise'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const store = new Vuex.Store({
  modules: {
    common,
    frontend,
    session,
    member,
    profileUser,
    enterprise
    // profile
  },
  strict: debug
})

export default store
