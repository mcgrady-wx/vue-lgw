import Vue from 'vue'
import Router from 'vue-router'
import Custom from '@/pages/Custom'
import Search from '@/pages/Search'
import Mine from '@/pages/Mine'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Custom',
      component: Custom
    },{
      path: '/search',
      name: 'Search',
      component: Search
    },{
      path: '/mine',
      name: 'Mine',
      component: Mine
    }
  ]
})
