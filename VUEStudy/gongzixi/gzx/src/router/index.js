import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// import WD from '@/components/wd'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'wd',
    //   component: WD
    // },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
