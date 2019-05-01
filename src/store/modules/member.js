import * as types from '../mutation-types'
import http from '../../utils/http.js'

const state = {
  // enterprise_getListCV: {}
  userInfo: {},
  listTableJoined: {}
}

const getters = {
  // enterprise_getListCV: state => state.enterprise_getListCV
  userInfo: state => state.userInfo,
  listTableJoined: state => state.listTableJoined
}

const actions = {
  memberApply ({ commit }, params) {
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
  memberInfo ({ commit }, id) {
    return new Promise(function (resolve, reject) {
      let urlData = 'user/' + id
      http.axiosCus.get(urlData)
        .then((response) => {
          commit(types.USER_INFO, response.data)
          resolve(response)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  CreateMemberCV ({ commit }, params) {
    return new Promise(function (resolve, reject) {
      let urlData = '/member/list-cv/create'
      http.axiosCus.post(urlData, params)
        .then((response) => {
          resolve(response)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  deleteMemberCV ({ commit }, id) {
    return new Promise(function (resolve, reject) {
      let urlData = '/member/list-cv/detele/' + id
      http.axiosCus.delete(urlData)
        .then((response) => {
          resolve(response)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  editMemberCV ({ commit }, params) {
    return new Promise(function (resolve, reject) {
      let urlData = '/member/list-cv/update/' + params.id
      http.axiosCus.put(urlData, params.form)
        .then((response) => {
          resolve(response)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  listTableJoined ({ commit }, id) {
    return new Promise(function (resolve, reject) {
      let urlData = 'member/join-session/' + id
      http.axiosCus.get(urlData)
        .then((response) => {
          commit(types.LIST_TABLE_MEMBER_JOINED, response.data)
          resolve(response)
        })
        .catch(err => {
          reject(err)
        })
    })
  }
}

const mutations = {
  // [types.ENTERPRISE_GET_LIST_CV] (state, data) {
  //   state.enterprise_getListCV = data
  // }
  [types.USER_INFO] (state, data) {
    state.userInfo = data
  },
  [types.LIST_TABLE_MEMBER_JOINED] (state, data) {
    state.listTableJoined = data
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
