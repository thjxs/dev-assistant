import axios from 'axios'

const state = {
  currentNoteName: 'readme.md',
  text: ''
}

const actions = {
  fetchNote ({ commit }, {path, name}) {
    axios.get('http://note.test/?target=' + path).then(response => {
      commit('setNote', response.data)
      commit('setNoteName', name)
    })
  }
}

const mutations = {
  setNoteName (state, currentNoteName) {
    state.currentNoteName = currentNoteName
  },
  setNote ( state, note ) {
    state.text = note.text
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
