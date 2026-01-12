import { createRouter, createWebHistory } from 'vue-router'
import WarriorView from '@classes/warrior/WarriorView.vue'
import RogueView from '@classes/rogue/RogueView.vue'
import { pathPart } from '@src/enviroment.js'
import ShamanView from '@classes/shaman/ShamanView.vue'
import NotFound from '@base/404Page.vue'
import HunterView from '@classes/hunter/HunterView.vue'
import PaladinView from '@classes/paladin/PaladinView.vue'
import DruidView from '@classes/druid/DruidView.vue'
import PriestView from '@classes/priest/PriestView.vue'
import WarlockView from '@classes/warlock/WarlockView.vue'

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
    { path: pathPart() + 'paladin', component: PaladinView },
    { path: pathPart() + 'paladin/:string', component: PaladinView },
    { path: pathPart() + 'druid', component: DruidView },
    { path: pathPart() + 'druid/:string', component: DruidView },
    { path: pathPart() + 'priest', component: PriestView },
    { path: pathPart() + 'priest/:string', component: PriestView },
    { path: pathPart() + 'warlock', component: WarlockView },
    { path: pathPart() + 'warlock/:string', component: WarlockView },
    { path: pathPart() + 'mage', component: NotFound },
    { path: pathPart() + 'mage/:string', component: NotFound },
  ],
})

export default router
