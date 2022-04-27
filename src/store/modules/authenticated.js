import axios from "axios";
import router from "@/router";

const state = {
  token:
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiODI1NDRkYTU4YWYwMDNjODY3MTQ2ODM2NWE5NjNmNWE4YzlmNzkxZjRlYWU2OTA4NjM1NjZjZWQ3ZTQ2N2I5NjY1ZTU4YzhhZTk4MmYxMGYiLCJpYXQiOjE2NTA5NjY0NTMuODE5Mjc2LCJuYmYiOjE2NTA5NjY0NTMuODE5Mjg1LCJleHAiOjE2ODI1MDI0NTMuODE0NDE4LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.LKAzlzpCYPnwTQIptxbz6RoLLRrBwdRMYFNDBHPEG8Prs0Km8KVQIohXaWBJuMzdGQwpEuJCb4Hz9DiR3ZlrBlh_gyiLzhIuYQkHGKnZTm58s_luDQwwb0zwIX54GfZouz2-Jmd9wqqENNPa73WySmfe0EH3KKRmUvywIVeDUa-ouAcsPBRTQWf4E2jq0BkMTXL1Q1b1fIiNcusd3Ew_sRvAynGo_H3zdjfLtz4G8Kb_5t9lRId34aSDGS0utT6_dM33SeJd4G3CsVBogpeMxAIu5oPsOeF6F_uZaNCgFYRc1g2drtRbeYQ-gERbAT8ynFrGzk2w6aZtmEUGSdHuFcg7UDKn9eDECqSyX8fQjXNgcf89TrbnBYcw5yB5pcfyNcbp8tPeECnxHMiwW4ry2fdzkyvFFwt41F0nZOdn07_4nXQJqtcgO1uIcKmr2Nv2St0MC6kzSts8oBucHp6TZCu289rTvWDMwdOnyzs9OBQd-rqmrNFQmxGuFDNo8EOizUqxY8ZCF6840Q-ijMRdRIE6HX2A7-vmhFsphs3t_KrdhFCum-KaXGdJsrWaRNvO7SqEb5EAxKJC2qk-3K8VT_0DD5LjgCZ83G6jXhghScL1k8SyvX4fk675NYIyasTV9QfupKIUWLf3U_tkTiwqnJk6C6oZM8IVXP8AFryCb8Y",
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
