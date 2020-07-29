import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Account from '@/views/Account.vue';
import Labels from '@/views/Labels.vue';
import Statistics from '@/views/Statistics.vue';
import NotFound from '../views/NotFound.vue';
import EditLabel from '@/views/EditLabel.vue';


Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: '/money'
  },
  {
    path: '/money',
    component: Account
  },
  {
    path: '/labels',
    component: Labels
  },
  {
    path: '/statistics',
    component: Statistics
  },
  {
    path:'/labels/edit',
    component:EditLabel
  },
  {
    path: '*',
    component: NotFound
  }

]

const router = new VueRouter({
  routes
})

export default router
