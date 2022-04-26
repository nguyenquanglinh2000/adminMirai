import Vue from "vue";
import VueRouter from "vue-router";
import authen from "../store/modules/authenticated";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    children: [
      {
        path: "/contract-list",
        name: "contract-list",
        component: () => import("@/views/Contract.vue"),
      },
    ],
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/Login.vue"),
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const auth = authen.state.isLogin;
  if (to.matched.some((route) => route.meta.requiresAuth)) {
    if (auth) {
      next();
    } else {
      next("/login");
    }
  } else {
    next();
  }
});
export default router;
