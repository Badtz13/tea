import * as firebase from 'firebase/app';
import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Profile from './views/Profile.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/home',
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
      path: '/home',
      name: 'home',
      component: Home,
      meta: {
        requiresAuth: false,
      },
    },
    {
      path: '/profile/:uid/',
      name: 'profile',
      component: Profile,
    },
    {
      path: '/admin/review',
      name: 'review',
      component: () => import(/* webpackChunkName: "review" */ './views/admin/Review.vue'),
      meta: {
        requiresAuth: true,
      },
    },
  ],
});

// checks that a user is logged in before allowing them to go to certain pages
router.beforeEach((to, from, next) => {
  const { currentUser } = firebase.auth();
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) next('login');
  else if (!requiresAuth && currentUser) next('home');
  else next();
});

export default router;
