import * as types from '../mutation-types'
import http from '../../utils/http.js'

const state = {
  loginResponse: {},
  loginStatus: !!localStorage.getItem('token')
}

const getters = {
  loginResponse: state => state.loginResponse,
  loginStatus: state => state.loginStatus
}

const actions = {
  login ({ commit }, params) {
    return new Promise(function (resolve, reject) {
      let urlData = 'login'
      http.axiosCus.post(urlData, params)
        .then((response) => {
          localStorage.setItem('token', response.data.data.token)
          localStorage.setItem('user', response.data.data.user)
          commit(types.LOGIN_STATUS, true)
          commit(types.LOGIN, response.data)
          resolve(response)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  logout ({ commit }) {
    if (window.localStorage.getItem('token')) {
      window.localStorage.removeItem('token')
    }
    commit(types.LOGIN_STATUS, false)
  }
}

const mutations = {
  [types.LOGIN] (state, data) {
    state.loginResponse = data
  },
  [types.LOGIN_STATUS] (state, data) {
    state.loginStatus = data
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
