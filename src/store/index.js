import Vue from "vue";
import Vuex from "vuex";
import listContract from "./modules/listContract";
import authenticated from "./modules/authenticated";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    listContract,
    authenticated,
  },
});
