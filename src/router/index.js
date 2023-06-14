import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CreativeHubView from "@/views/CreativeHubView.vue";
import LightningBolt from "@/components/arts/unsorted/LightningBolt.vue";
import PixelSorter from "@/components/arts/Pixels/PixelSorter.vue";
import GlitchEffect from "@/components/arts/Pixels/GlitchEffect.vue";
import Dithering from "@/components/arts/Pixels/Dithering.vue";
import MergeImages from "@/components/arts/Pixels/MergeImages.vue";
import ResizeImage from "@/components/arts/Pixels/ResizeImage.vue";
import AbstractCircle from "@/components/arts/shapes/AbstractCircle.vue";
import AbstractCircle2 from "@/components/arts/shapes/AbstractCircle2.vue";
import MarkovChainSentenceGenerator from "@/components/arts/MarkovChain/MarkovChainSentenceGenerator.vue";
import BasicGameOfLive from "@/components/arts/gameoflife/BasicGameOfLive.vue";
import Bublesort from "@/components/arts/sortieralgorithmen/Bublesort.vue";
import QuickSort from "@/components/arts/sortieralgorithmen/QuickSort.vue";
import MergSort from "@/components/arts/sortieralgorithmen/MergSort.vue";
import LSystem from "@/components/arts/lsystem/LSystem.vue";

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
  },
  {
    path: '/arts/pixels/dithering',
    name: 'dithering-effect',
    component: Dithering
  },
  {
    path: '/arts/pixels/merging',
    name: 'merging-effect',
    component: MergeImages
  },
  {
    path: '/arts/pixels/resize',
    name: 'resize-effect',
    component: ResizeImage
  },
  {
    path: '/arts/shapes/abstract-circle',
    name: 'abstract-circle',
    component: AbstractCircle
  },
  {
    path: '/arts/shapes/abstract-circle2',
    name: 'abstract-circle2',
    component: AbstractCircle2
  },
  {
    path: '/arts/markov-chain/sentence-generator',
    name: 'LSystem',
    component: MarkovChainSentenceGenerator
  },
  {
    path: '/arts/game-of-life/basic',
    name: 'Basic game of life',
    component: BasicGameOfLive
  },
  {
    path: '/arts/sorter/bubblesort',
    name: 'Bubblesort',
    component: Bublesort
  },
  {
    path: '/arts/sorter/quickSort',
    name: 'QuickSort',
    component: QuickSort
  },
  {
    path: '/arts/sorter/mergesort',
    name: 'MergeSort',
    component: MergSort
  },
  {
    path: '/arts/l-system/l-system',
    name: 'L-system',
    component: LSystem
  }





]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
