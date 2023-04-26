import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CreativeHubView from "@/views/CreativeHubView.vue";
import LightningBolt from "@/components/arts/unsorted/LightningBolt.vue";
import PixelSorter from "@/components/arts/Pixels/PixelSorter.vue";
import GlitchEffect from "@/components/arts/Pixels/GlitchEffect.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/hub',
    name: 'creative hub',
    component: CreativeHubView
  },
  {
    path: '/arts/unsorted/lightning-bold',
    name: 'lightning-bold',
    component: LightningBolt
  },
  {
    path: '/arts/pixels/pixel-sorter',
    name: 'pixel-sorter',
    component: PixelSorter
  },
  {
    path: '/arts/pixels/glitch-effect',
    name: 'glitch-effect',
    component: GlitchEffect
  }





]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
