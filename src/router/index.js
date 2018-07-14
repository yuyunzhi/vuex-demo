import Vue from 'vue'
import Router from 'vue-router'
import parent from '../components/parent'
import son from '../components/son'
import friend from '../components/friend'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'parent',
      component: parent
    },
    {
      path: '/son',
      name: 'son',
      component: son
    },
    {
      path: '/friend',
      name: 'friend',
      component: friend
    }
  ]
})
