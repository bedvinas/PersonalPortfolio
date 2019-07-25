import Vue from 'vue'
import Router from 'vue-router'

/* Components */
import Home from './views/Home.vue'
import Projects from '@/components/Projects.vue';
import Education from '@/components/Education.vue';
import More from '@/components/More.vue';

Vue.use(Router)

export default new Router({
  routes: [
   {
      path: '/',
      name: 'projects',
      component: Projects
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects
    },
    {
      path: '/education',
      name: 'education',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      /* component: () => import( *//* webpackChunkName: "about" */ /* './views/About.vue') */
      component: Education
    },
    {
      path: '/more',
      name: 'more',
      component: More
    }
  ]
  /*
  //FROM VUE
  scrollBehavior (to, from, savedPosition) {
    //https://router.vuejs.org/guide/advanced/scroll-behavior.html
    if (to.hash) {
            return { selector: to.hash }
        } else if (savedPosition) {
            return savedPosition;
        } else {
            return { x: 0, y: 0 }
        }
  } */
  
})
