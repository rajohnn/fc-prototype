import Vue from 'vue'
import Router from 'vue-router'
import DefaultLayout from './layouts/Default.vue'

import Home from './views/Home.vue'
import About from './views/About.vue'
import Billing from './views/Billing.vue'
import Clients from './views/Clients.vue'
import Contacts from './views/Contacts.vue'
import Projects from './views/Projects.vue'
import Reports from './views/Reports.vue'
import Resources from './views/Resources.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: DefaultLayout,
      children: [
        {
          path: '',
          name: 'home',
          component: Home
        },
        {
          path: '/about',
          name: 'about',
          component: About
        },
        {
          path: '/billing',
          name: 'billing',
          component: Billing
        },
        {
          path: '/clients',
          name: 'clients',
          component: Clients
        },
        {
          path: '/contacts',
          name: 'contacts',
          component: Contacts
        },
        {
          path: '/projects',
          name: 'projects',
          component: Projects
        },
        {
          path: '/Reports',
          name: 'Reports',
          component: Reports
        },
        {
          path: '/resources',
          name: 'resources',
          component: Resources
        }
      ]
    }
  ]
})
