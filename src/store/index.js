import axios from "axios";
import { createStore } from "vuex";

export default createStore({
  state: {
    data: [],
  },
  mutations: {
    SET_DATA(state, payload) {
      state.data = payload;
    },
  },
  actions: {
    async function({ commit }) {
      const response = await axios.post("api call");
      commit("SET_DATA", response);
    },
  },
  getters: {
    getData(state) {
      return state.data;
    },
  },
  modules: {},
});
