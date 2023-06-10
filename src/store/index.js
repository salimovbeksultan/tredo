import Vue from "vue";
import Vuex from "vuex";
import json from "../assets/data.json";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    data: [],
    favorites: [],
  },
  getters: {},
  mutations: {
    initData(state, payload) {
      if (payload) {
        state.data = [...payload];
      }
    },
    addFavorite(state, item) {
      state.favorites.push(item);
    },
    removeFavorite(state, itemId) {
      const ind = state.favorites.findIndex(function (obj) {
        return obj.id === itemId;
      });
      if (ind !== -1) {
        state.favorites.splice(ind, 1);
      }
    },
  },
  actions: {
    async loadData({ commit }) {
      const data = json;
      commit("initData", data);
    },
    addFavorite({ commit }, item) {
      commit("addFavorite", item);
    },
    removeFavorite({ commit }, itemId) {
      commit("removeFavorite", itemId);
    },
  },
  modules: {},
});
