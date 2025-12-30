import { createRouter, createWebHistory } from 'vue-router'
import WarriorView from '@classes/warrior/WarriorView.vue'
import RogueView from '@classes/rogue/RogueView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/epoch-talents/rogue' },
    { path: '/epoch-talents', redirect: '/epoch-talents/rogue' },
    { path: '/epoch-talents/rogue', component: RogueView },
    { path: '/epoch-talents/rogue/:string', component: RogueView },
    { path: '/epoch-talents/warrior', component: WarriorView },
    { path: '/epoch-talents/warrior/:string', component: WarriorView },
  ],
})

export default router
