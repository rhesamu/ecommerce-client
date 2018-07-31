import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Index from './views/admin/Index.vue'
import New from './views/admin/New.vue'
import Products from './views/admin/Products.vue'
import Edit from './views/admin/Edit.vue'
import Cart from './views/Cart.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home // from views
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }, {
      path: '/admin',
      name: 'Admin',
      component: Index,
      children: [
        {
          path: 'new',
          name: 'New',
          component: New
        }, {
          path: 'products',
          name: 'Products',
          component: Products
        }, {
          path: 'edit/:id',
          name: 'Edit',
          component: Edit
        }
      ]
    }, {
      path: '/cart',
      name: 'Cart',
      component: Cart
    }
  ]
})
