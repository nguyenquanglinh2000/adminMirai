<template>
  <div class="">
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <drop-down />
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <div class="logo-img">
        <v-img
          width="full"
          height="auto"
          :src="require(`@/assets/images/logo.png`)"
        />
      </div>
      <v-spacer />
      <v-btn outlined color="red" @click="logout">Logout</v-btn>
      <!-- <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn> -->
    </v-app-bar>
    <v-container>
      <router-view />
    </v-container>
    <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light> mdi-repeat </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import DropDown from "@/components/DropDownSideBarComponent.vue";
export default {
  name: "DefaultLayout",
  components: {
    DropDown,
  },
  data() {
    return {
      clipped: true,
      drawer: false,
      fixed: false,

      miniVariant: false,
      right: true,
      rightDrawer: false,
    };
  },
  methods: {
    ...mapActions("authenticated", ["logout"]),
  },
};
</script>

<style scoped>
.logo-img {
  width: 110px;
  height: auto;
  object-fit: cover;
}
</style>
