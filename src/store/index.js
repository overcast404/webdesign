import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    searchedbook:""
  },
  mutations: {
    rsbook(state, bookname) {
      state.searchrentbook = bookname;
    }
  },
  actions: {
    changebook({ commit, bookname }) {
      commit('rsbook',bookname)
    }
  },
  modules: {
  }
})
