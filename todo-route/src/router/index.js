import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Todo from '@/components/Todo'
import TodoItemView from '@/components/TodoItemView'
import VuexExample from '@/components/VuexExample'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/todo',
      name: 'Todo',
      component: Todo
    },
    {
      path: '/todo/:id',
      name: 'TodoItem',
      component: TodoItemView
    },
    {
      path: '/vuex',
      name: 'VuexExample',
      component: VuexExample
    }
  ]
})
