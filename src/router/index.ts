import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import BarChart from '@/components/BarChart.vue'
import LineChart from '@/components/LineChart.vue'
import MixChart from '@/components/MixBarLineChart.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/bar',
    name: 'barchart',
    component: BarChart
  },
  {
    path: '/line',
    name: 'linechart',
    component: LineChart
  },
  {
    path: '/mixed',
    name: 'mixchart',
    component: MixChart
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
