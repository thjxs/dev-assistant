import Vue from 'vue'
import Vuex from 'vuex'
import note from './modules/note'

Vue.use(Vuex)

const state = {
  currentTab: 'BookMarks'
}

const actions = {
  setCurrentTab ({ commit }, tabName) {
    commit('setCurrentTab', tabName)
  }
}

const mutations = {
  setCurrentTab (state, tabName) {
    state.currentTab = tabName
  }
}

export default new Vuex.Store({
  state,
  actions,
  mutations,
  modules: {
    note
  }
})
