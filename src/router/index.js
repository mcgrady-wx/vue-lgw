import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import Register from '@/pages/Register'
import Login from '@/pages/Login'
import Custom from '@/pages/Custom'
import Search from '@/pages/Search'
import Mine from '@/pages/Mine'
import Detail from '@/pages/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: Custom //设置默认显示
    },{
      path: '/index',
      name: 'Index',
      component: Index,
      children:[
      	{
		      path: 'custom',
		      name: 'Custom',
		      component: Custom
		    },{
		      path: 'search',
		      name: 'Search',
		      component: Search
		    },{
		      path: 'mine',
		      name: 'Mine',
		      component: Mine
		    }
      ]
    },{
      path: '/login',
      name: 'Login',
      component: Login
    },{
      path: '/register',
      name: 'Register',
      component: Register
    },{
      path: '/detail',
      name: 'Detail',
      component: Detail
    }
  ]
})
