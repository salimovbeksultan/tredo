import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    data: [],
  },
  getters: {},
  mutations: {
    initData(state, payload) {
      if (payload) {
        state.data = [...payload];
      }
    },
  },
  actions: {
    async loadData({ commit }) {
      const response = await fetch("http://localhost/data.json");
      const data = await response.json();
      commit("initData", data);
    },
  },
  modules: {},
});
