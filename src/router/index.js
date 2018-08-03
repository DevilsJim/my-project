import Vue from 'vue'
import Router from 'vue-router'

// import HelloWorld from '@/components/HelloWorld'
// import xxx from  '@/components/xxx' 中的@表示src
// 因为webpack.base.conf中别名这样写了==> alias: {'@': resolve('src')}
const homePage = () => import('@/components/homePage')
const homeCard = () => import('@/components/homeCard')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homePage',
      component: homePage
    },
    {
      path: '/homeCard',
      name: 'homeCard',
      component: homeCard
    }
  ]
})
