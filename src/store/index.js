import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    typesCurrentTab: null,
    typesTabs: ['Растениеводство','Животноводство и птицеводство','Лесное хозяйство','Здравоохранение','МЧС'],
  },
  getters: {
    typesTabs(state) {
      return state.typesTabs;
    },
    typesCurrentTab(state) {
      return state.typesCurrentTab;
    },
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
