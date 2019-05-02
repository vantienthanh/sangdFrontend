import * as types from '../mutation-types'
import http from '../../utils/http.js'

const state = {
  enterprise_getListCV: {},
  e_detailCV: {},
  m_listCV: {},
  m_detailCV: {},
  e_listParttime: {}
}

const getters = {
  enterprise_getListCV: state => state.enterprise_getListCV,
  e_detailCV: state => state.e_detailCV,
  m_listCV: state => state.m_listCV,
  m_detailCV: state => state.m_detailCV,
  e_listParttime: state => state.e_listParttime
}

const actions = {
  // e is enterprise
  // m is member
  e_getListCV ({ commit }) {
    return new Promise(function (resolve, reject) {
      let urlData = 'enterprise/job-news'
      http.axiosCus.get(urlData)
        .then((response) => {
          commit(types.ENTERPRISE_GET_LIST_CV, response.data)
          resolve(response)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  e_getListPartTime ({ commit }) {
    return new Promise(function (resolve, reject) {
      let urlData = 'enterprise/job-news/part-time'
      http.axiosCus.get(urlData)
        .then((response) => {
          commit(types.E_LIST_PARTTIME, response.data)
          resolve(response)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  e_DetailCV ({ commit }, id) {
    return new Promise(function (resolve, reject) {
      let urlData = 'enterprise/job-news/detail/' + id
      http.axiosCus.get(urlData)
        .then((response) => {
          commit(types.E_DETAIL_CV, response.data)
          resolve(response)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  m_getListCV ({ commit }) {
    return new Promise(function (resolve, reject) {
      let urlData = 'member/list-cv'
      http.axiosCus.get(urlData)
        .then((response) => {
          commit(types.M_LIST_CV, response.data)
          resolve(response)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  m_detailCV1 ({ commit }, id) {
    return new Promise(function (resolve, reject) {
      let urlData = 'member/list-cv/' + id
      http.axiosCus.get(urlData)
        .then((response) => {
          commit(types.M_DETAIL_CV, response.data)
          resolve(response)
        })
        .catch(err => {
          reject(err)
        })
    })
  }
}

const mutations = {
  [types.ENTERPRISE_GET_LIST_CV] (state, data) {
    state.enterprise_getListCV = data
  },
  [types.E_DETAIL_CV] (state, data) {
    state.e_detailCV = data
  },
  [types.M_LIST_CV] (state, data) {
    state.m_listCV = data
  },
  [types.M_DETAIL_CV] (state, data) {
    state.m_detailCV = data
  },
  [types.E_LIST_PARTTIME] (state, data) {
    state.e_listParttime = data
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
