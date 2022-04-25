import axios from "axios";

const state = {
  listContract: {},
};
const actions = {
  async getListContract({ commit }) {
    try {
      console.log("Actions");
      const url = "http://qlda.miraisoft.com.vn/api/contract/all-contract";
      const list = axios.get(url);
      list.then((item) => {
        console.log(item.data);
        commit("UPDATE_LIST", item.data);
      });
    } catch (error) {
      console.log(error);
    }
  },
};
const mutations = {
  UPDATE_LIST(state, data) {
    state.listContract = data;
  },
};
const getters = {};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
};
