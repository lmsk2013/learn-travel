import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/pages/home/Home')
    },
    {
      path: '/city',
      name: 'City',
      component: () => import('@/pages/city/City')
    },
    {
      // 路径里的参数用:key体现
      path: '/detail/:id',
      name: 'Detail',
      component: () => import('@/pages/detail/Detail')
    }
  ],
  // 解决滚动影响所有页面的问题
  scrollBehavior (to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    }
  }
})
