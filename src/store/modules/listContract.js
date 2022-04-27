import axios from "axios";
import auth from "./authenticated";

const state = {
  listContract: {},
  pages: "",
};
const actions = {
  async getListContract({ commit }, payload) {
    const token = auth.state.token;
    try {
      console.log("Actions");
      const url =
        "http://qlda.miraisoft.com.vn/api/contract/all-contract?pageSize=" +
        payload.select +
        "&page=" +
        payload.page +
        "&typecontract=" +
        payload.contractId +
        "&username=" +
        payload.username;
      const list = await axios.get(url, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      console.log(list.data);
      commit("UPDATE_LIST", list.data);
    } catch (error) {
      console.log(error);
    }
  },
};
const mutations = {
  UPDATE_LIST(state, data) {
    state.listContract = data.data;
    state.pages = data.pages;
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
