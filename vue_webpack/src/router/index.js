import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ChatRoom from '@/components/ChatRoom'
import List from '@/components/List'

Vue.use(Router)

export default new Router({
  mode: 'history',//可以拿掉網址上的#
  routes: [
    {
      //進入點
      path: '/',
      //隨意取
      name: 'HelloWorld',
      //import的componenet name
      component: HelloWorld
    },
    {
      path: '/hello',
      name: 'ChatRoom',
      component: ChatRoom
    },
    {
      path: '/pages',
      component: List
    },
  ]
})
