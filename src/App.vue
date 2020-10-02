<template>
  <div class="h-max">
    <router-view class="mb-16" :user='user'/>
    <Navbar :user='user'/>
  </div>
</template>

<script>
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

import Navbar from '@/components/Navbar.vue';

export default {
  components: {
    Navbar,
  },
  data() {
    return {
      user: {},
    };
  },
  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        firebase.database().ref(`/users/${user.uid}`).once('value', (snapshot) => {
          this.user = {
            uid: user.uid,
            username: snapshot.val().username,
          };
        });
      } else {
        this.user = {};
      }
    });
  },
};
</script>
