import * as types from '../mutation-types'
import http from '../../utils/http.js'

const state = {
  listSession: {},
  sessionDetail: {},
  sessionInfo: {},
  tableEnterpriseCV: {}
}

const getters = {
  listSession: state => state.listSession,
  sessionDetail: state => state.sessionDetail,
  sessionInfo: state => state.sessionInfo,
  tableEnterpriseCV: state => state.tableEnterpriseCV
}

const actions = {
  listSession ({ commit }) {
    return new Promise(function (resolve, reject) {
      let urlData = 'session/list'
      http.axiosCus.get(urlData)
        .then((response) => {
          commit(types.LIST_SESSION, response.data)
          resolve(response)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  sessionInfo ({ commit }, params) {
    return new Promise(function (resolve, reject) {
      let urlData = 'session/detail'
      http.axiosCus.post(urlData, params)
        .then((response) => {
          commit(types.SESSION_INFO, response.data)
          resolve(response)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  sessionDetail ({ commit }, id) {
    return new Promise(function (resolve, reject) {
      let urlData = 'session/detail/' + id + '/enterprise'
      http.axiosCus.get(urlData)
        .then((response) => {
          commit(types.SESSION_DETAIL, response.data)
          resolve(response)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  e_joinSession ({ commit }, params) {
    return new Promise(function (resolve, reject) {
      let urlData = 'enterprise/join-session'
      http.axiosCus.post(urlData, params)
        .then((response) => {
          resolve(response)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  m_joinSession ({ commit }, params) {
    return new Promise(function (resolve, reject) {
      let urlData = 'member/join-session'
      http.axiosCus.post(urlData, params)
        .then((response) => {
          resolve(response)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  tableGetEnterpriseCV  ({ commit }, id) {
    return new Promise(function (resolve, reject) {
      let urlData = '/enterprise/get-cv-by-table-id/' + id
      http.axiosCus.get(urlData)
        .then((response) => {
          commit(types.TABLE_ENTERPRISE_CV, response.data)
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
  },
  [types.SESSION_DETAIL] (state, data) {
    state.sessionDetail = data
  },
  [types.SESSION_INFO] (state, data) {
    state.sessionInfo = data
  },
  [types.TABLE_ENTERPRISE_CV] (state, data) {
    state.tableEnterpriseCV = data
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
