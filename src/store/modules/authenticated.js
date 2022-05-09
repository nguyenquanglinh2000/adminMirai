import axios from "axios";
import router from "@/router";

const state = {
  token: "",
  isLogin: false,
  message: "",
};

const actions = {
  async login({ commit }, payload) {
    try {
      let result = await axios.post(
        "http://qlda.miraisoft.com.vn/api/auth/login",
        payload
      );
      console.log(result.data);
      commit("AUTHENTICATED", result.data);
    } catch (error) {
      console.error(error);
    }
  },
  logout({ commit }) {
    commit("LOGOUT");
    router.go("/");
  },
};

const mutations = {
  AUTHENTICATED(state, payload) {
    state.token = payload.token;
    state.isLogin = payload.status;
    state.message = payload.message;
  },
  LOGOUT(state) {
    console.log("logout");
    state.token = "";
    state.isLogin = false;
    state.message = "";
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
