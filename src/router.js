import * as firebase from 'firebase/app';
import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/user/:user',
      component: () => import(/* webpackChunkName: "user" */ './views/User.vue'),
      children: [
        {
          path: 'profile',
          component: () => import(/* webpackChunkName: "profile" */ './views/Profile.vue'),
        },
        {
          path: 'list',
          component: () => import(/* webpackChunkName: "list" */ './views/List.vue'),
        },
        {
          path: '/',
          component: () => import(/* webpackChunkName: "profile" */ './views/Profile.vue'),
        },
      ],
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import(/* webpackChunkName: "login" */ './views/Login.vue'),
    },
    {
      path: '/signup',
      name: 'Signup',
      component: () => import(/* webpackChunkName: "signup" */ './views/Signup.vue'),
    },
    {
      path: '/reset',
      name: 'Reset',
      component: () => import(/* webpackChunkName: "reset" */ './views/Reset.vue'),
    },
    {
      path: '*',
      redirect: '/home',
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
    },

  ],
});

// checks that a user is logged in before allowing them to go to certain pages
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const { currentUser } = firebase.auth();
  if (requiresAuth && !currentUser) next('login');
  else next();
});

export default router;
