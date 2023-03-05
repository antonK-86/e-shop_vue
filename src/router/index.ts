import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CeramicsView from "../views/CeramicsView.vue";
import TablesView from "../views/TablesView.vue";
import ChairsView from "../views/ChairsView.vue";
import CrockeryView from "../views/CrockeryView.vue";
import UiKit from "../views/UiKit.vue";
import PlantView from "../views/PlantView.vue";

export const routes: Array<RouteRecordRaw> = [
  {
    name: "Home",
    path: "/",
    component: HomeView,
  },
  {
    name: "Plant pots",
    path: "/plant",
    component: PlantView,
  },
  { name: "Ceramics", path: "/ceramics", component: CeramicsView },
  { name: "Tables", path: "/tables", component: TablesView },
  { name: "Chairs", path: "/chairs", component: ChairsView },
  { name: "Crockery", path: "/crockery", component: CrockeryView },
  { name: "Tableware", path: "/tableware", component: UiKit },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
