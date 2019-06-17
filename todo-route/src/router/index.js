import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Todo from '@/components/Todo'
import TodoItemView from '@/components/TodoItemView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
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
    }
  ]
})
