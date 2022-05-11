import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SeaView from "@/views/SeaView.vue";
import MountainView from '@/views/MountainView.vue'
import MapViewVue from "@/views/MapView.vue";
import WeatherViewVue from "@/views/WeatherView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },

    {
      path:"/sea",
      name:"sea",
      component:SeaView
    },
    {
      path: "/mountain",
      name: "mountain",
     component:MountainView
    },
    {
      path: "/map",
      name: "map",
     component:MapViewVue
    },
    {
      path: "/weather",
      name: "weather",
     component:WeatherViewVue
    },
    

  ],
});

export default router;
