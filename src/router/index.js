import Vue from 'vue'
import Router from 'vue-router'

// 采用懒加载
const Home = () => import('@views/home/Home')
const Categories = () => import('@views/categories/Categories')
const Shopcart = () => import('@views/shopcart/Shopcart')
const Profile = () => import('@views/profile/Profile')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/home',      
      component: Home
    },
    {
      path: '/categories',
      component: Categories
    },
    {
      path: '/shopcart',
      component: Shopcart
    },
    {
      path: '/profile',
      component: Profile
    }
  ],
  mode: 'history'
})
