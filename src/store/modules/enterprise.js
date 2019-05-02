// import * as types from '../mutation-types'
import http from '../../utils/http.js'
import * as types from '../mutation-types'

const state = {
  // enterprise_getListCV: {}
  listSessionEJoined: {},
  listMemberJoinedTable: {}
}

const getters = {
  // enterprise_getListCV: state => state.enterprise_getListCV
  listSessionEJoined: state => state.listSessionEJoined,
  listMemberJoinedTable: state => state.listMemberJoinedTable
}

const actions = {
  enterpriseApply ({ commit }, params) {
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
  createEnterpriseCV ({ commit }, params) {
    return new Promise(function (resolve, reject) {
      let urlData = '/enterprise/job-news/create'
      http.axiosCus.post(urlData, params)
        .then((response) => {
          resolve(response)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  deleteEnterpriseCV ({ commit }, id) {
    return new Promise(function (resolve, reject) {
      let urlData = '/enterprise/job-news/delete/' + id
      http.axiosCus.delete(urlData)
        .then((response) => {
          resolve(response)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  updateEnterpriseCV ({ commit }, params) {
    return new Promise(function (resolve, reject) {
      let urlData = '/enterprise/job-news/update/' + params.id
      http.axiosCus.put(urlData, params.form)
        .then((response) => {
          resolve(response)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  profile_getListSessionJoined1 ({ commit }, params) {
    return new Promise(function (resolve, reject) {
      let urlData = '/enterprise/get-list-session-user-joined/' + params
      http.axiosCus.get(urlData)
        .then((response) => {
          commit(types.PROFILE_LIST_SESSION_JOINED, response.data)
          resolve(response)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  profile_getListUserJoined1 ({ commit }, params) {
    return new Promise(function (resolve, reject) {
      let urlData = '/enterprise/get-list-user-join-table/' + params
      http.axiosCus.get(urlData)
        .then((response) => {
          commit(types.PROFILE_LIST_USER_JOINED, response.data)
          resolve(response)
        })
        .catch(err => {
          reject(err)
        })
    })
  }
}

const mutations = {
  [types.PROFILE_LIST_SESSION_JOINED] (state, data) {
    state.listSessionEJoined = data
  },
  [types.PROFILE_LIST_USER_JOINED] (state, data) {
    state.listMemberJoinedTable = data
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
