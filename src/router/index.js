import Vue from 'vue'
import Router from 'vue-router'
import ElementUI from 'element-ui'
import VueWechatTitle from 'vue-wechat-title';
import 'element-ui/lib/theme-chalk/index.css'

//引用组件页面
import Index from '@/components/index/index'
import ArticleLists from '@/components/articleLists/articleList'
import Detail from '@/components/detail/detail'
import MessageBoard from '@/components/messageBoard/messageBoard'
import Test from '@/components/test/test'

Vue.use(ElementUI)
Vue.use(Router)
Vue.use(VueWechatTitle)

//引用组件
export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      meta: {
        title:'个人网站'
      }
    },
    {
      path:'/index',
      component:Index,
      meta: {
        title:'个人网站'
      }
    },
    {
      path:"/articleList",
      component:ArticleLists,
      meta: {
        title:'文章列表'
      }
    },
    {
      path:"/detail",
      component:Detail,
      meta: {
        title:'详情页面'
      }
    },
    {
      path:"/messageBoard",
      component:MessageBoard,
      meta: {
        title:'留言页面'
      }
    },
    {
      path:"/test",
      component:Test,
      meta: {
        title:'测试页面'
      }
    }
  ]
})
