import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '../pages/index'
import ProjectCreate from '../pages/project-create'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: IndexPage
    },
    {
      path:'/project/create',
      name:'create-project',
      component: ProjectCreate
    }
  ]
})
