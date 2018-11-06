import Vue from 'vue'
import Router from 'vue-router'

// 一级页面
import Home from '@/pages/Home/Home'
import Buy from '@/pages/Buy/Buy'
import Order from '@/pages/Order/Order'
import Person from '@/pages/Person/Person'
// 二级页面
// const 。。。 = () => import('@/pages/。。。/。。。');

Vue.use(Router)

export default new Router({
  routes: [
    // 搭建：路由模板
    // {
    //   path: '/',
    //   name: '',
    //   component: ,
    //   meta: {
    //     title: '首页',//页面title
    //     requireAuth: false, //检查登录
    //     showHd: true, // 显示头部
    //     showTab: true, // 显示tab
    //     hideBack: true, //隐藏返回按钮
    //   }
    // },
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        title: 'tab1',//页面title
        requireAuth: false, //检查登录
        showHd: true, // 显示头部
        showTab:true, // 显示tab
        hideBack: true, //隐藏返回按钮
      }
    },
    {
      path: '/buy',
      name: 'Buy',
      component: Buy,
      meta: {
        title: 'tab2',//页面title
        requireAuth: false, //检查登录
        showHd: true, // 显示头部
        showTab:true, // 显示tab
        hideBack: true, //隐藏返回按钮
      }
    },
    {
      path: '/order',
      name: 'Order',
      component: Order,
      meta: {
        title: 'tab3',//页面title
        requireAuth: false, //检查登录
        showHd: true, // 显示头部
        showTab:true, // 显示tab
        hideBack: true, //隐藏返回按钮
      }
    },
    {
      path: '/person',
      name: 'Person',
      component: Person,
      meta: {
        title: 'tab4',//页面title
        requireAuth: false, //检查登录
        showHd: true, // 显示头部
        showTab:true, // 显示tab
        hideBack: true, //隐藏返回按钮
      }
    },
    //搭建：必须作为数组的最后一项
    {
      path: '*',
      redirect: '/'
    },
  ]
})
