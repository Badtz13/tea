<template>
  <div>
    <router-link to="/home"> Home </router-link>
    <router-link v-if="auth" :to="'/profile/' + user.username"> Profile </router-link>
    <router-link v-if="auth" :to="'/profile/' + user.username + '/teas/'"> Tea List </router-link>
    <button v-if="auth" @click="logout">Logout</button>
    <router-link v-else to="/signup">Signup</router-link>

    {{user}}
  </div>
</template>

<script>
import * as firebase from 'firebase/app';
import 'firebase/auth';

export default {
  name: 'Navbar',
  props: {
    user: Object,
  },
  computed: {
    auth() {
      if (this.user.username) {
        return true;
      }
      return false;
    },
  },
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace('/home');
        });
    },
  },
};
</script>
