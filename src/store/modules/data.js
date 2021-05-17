const state = {
  searchDate: '',
  currentRelationId : ''
}

const getters = {
  searchDate: state => state.searchDate,
  currentRelationId: state => state.currentRelationId,
}

const actions = {
  setSearchDate ({ commit }, date = '') {
    commit('SET_SEARCH_DATE', date)
  },
  setCurrnetRelationId ({commit}, id = '') {
    commit('SET_CURRENT_RELATIONID',id)
  }
}

const mutations = {
  SET_SEARCH_DATE (state, date = '') {
    state.searchDate = date
  },
  SET_CURRENT_RELATIONID(state,id='') {
    state.currentRelationId = id
  }
}


export default {
  state,
  getters,
  actions,
  mutations
}
