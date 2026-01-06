import { createRouter, createWebHistory } from 'vue-router'
import WarriorView from '@classes/warrior/WarriorView.vue'
import RogueView from '@classes/rogue/RogueView.vue'
import { pathPart } from '@src/enviroment.js'
import ShamanView from '@classes/shaman/ShamanView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/epoch-talents/rogue' },
    { path: pathPart(), redirect: '/epoch-talents/rogue' },
    { path: pathPart() + 'rogue', component: RogueView },
    { path: pathPart() + 'rogue/:string', component: RogueView },
    { path: pathPart() + 'warrior', component: WarriorView },
    { path: pathPart() + 'warrior/:string', component: WarriorView },
    { path: pathPart() + 'shaman', component: ShamanView },
    { path: pathPart() + 'shaman/:string', component: ShamanView },
  ],
})

export default router
