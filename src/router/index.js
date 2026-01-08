import { createRouter, createWebHistory } from 'vue-router'
import WarriorView from '@classes/warrior/WarriorView.vue'
import RogueView from '@classes/rogue/RogueView.vue'
import { pathPart } from '@src/enviroment.js'
import ShamanView from '@classes/shaman/ShamanView.vue'
import NotFound from '@base/404Page.vue'
import HunterView from '@classes/hunter/HunterView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/epoch-talents/rogue' },
    { path: pathPart(), redirect: '/epoch-talents/rogue' },
    { path: pathPart() + 'rogue', component: RogueView },
    { path: pathPart() + 'rogue/:string', component: RogueView },
    { path: pathPart() + 'shaman', component: ShamanView },
    { path: pathPart() + 'shaman/:string', component: ShamanView },
    { path: pathPart() + 'hunter', component: HunterView },
    { path: pathPart() + 'hunter/:string', component: HunterView },
    { path: pathPart() + 'warrior', component: WarriorView },
    { path: pathPart() + 'warrior/:string', component: WarriorView },
    { path: pathPart() + 'paladin', component: NotFound },
    { path: pathPart() + 'paladin/:string', component: NotFound },
    { path: pathPart() + 'druid', component: NotFound },
    { path: pathPart() + 'druid/:string', component: NotFound },
    { path: pathPart() + 'priest', component: NotFound },
    { path: pathPart() + 'priest/:string', component: NotFound },
    { path: pathPart() + 'warlock', component: NotFound },
    { path: pathPart() + 'warlock/:string', component: NotFound },
    { path: pathPart() + 'mage', component: NotFound },
    { path: pathPart() + 'mage/:string', component: NotFound },
  ],
})

export default router
