import '@/assets/tailwind.css';
import config from '@/config';
import 'firebase/analytics';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';

firebase.initializeApp(config);
firebase.analytics();

Vue.config.productionTip = false;

let app;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      render: h => h(App),
    }).$mount('#app');
  }
});
