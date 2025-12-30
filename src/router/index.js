import { createRouter, createWebHistory } from 'vue-router'
import WarriorView from '@classes/warrior/WarriorView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/warrior' },
    { path: '/warrior', component: WarriorView },
    { path: '/warrior/:string', component: WarriorView },
  ],
})

export default router
