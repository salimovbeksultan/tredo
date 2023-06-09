import Vue from "vue";
import Vuex from "vuex";
import json from "../assets/data.json";

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
      const data = json;
      commit("initData", data);
    },
  },
  modules: {},
});
