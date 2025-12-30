import { createRouter, createWebHistory } from 'vue-router'
import WarriorView from '@classes/warrior/WarriorView.vue'
import RogueView from '@classes/rogue/RogueView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/rogue' },
    { path: '/rogue', component: RogueView },
    { path: '/rogue/:string', component: RogueView },
    { path: '/warrior', component: WarriorView },
    { path: '/warrior/:string', component: WarriorView },
  ],
})

export default router
