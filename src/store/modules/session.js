import * as types from '../mutation-types'
import http from '../../utils/http.js'

const state = {
  listSession: {}
}

const getters = {
  listSession: state => state.listSession
}

const actions = {
  login ({ commit }, params) {
    return new Promise(function (resolve, reject) {
      let urlData = 'login'
      http.axiosCus.post(urlData, params)
        .then((response) => {
          commit(types.LIST_SESSION, response.data)
          resolve(response)
        })
        .catch(err => {
          reject(err)
        })
    })
  }
}

const mutations = {
  [types.LIST_SESSION] (state, data) {
    state.listSession = data
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
