
import Vue from 'vue';
import Router from 'vue-router';
// import HomePage from '@/view/HomePage.vue';
// import AboutPage from '@/view/AboutPage.vue';
 import login from '@/view/Login.vue'
// Vue.use(Router);

var router = new Router({
  routes: [
    // {
    //   path: '/home',
    //   name: 'HomePage',
    //   component: HomePage
    // },
    // {
    //   path: '/about',
    //   name: 'AboutPage',
    //   component: AboutPage
    // },
    {
      path: '/',
      name: 'login',
      component: login
    }
  ]
});

export default router;