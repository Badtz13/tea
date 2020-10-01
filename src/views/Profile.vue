<template>
  <div>
    <h1>Profile</h1>
    <div> {{userData}} </div>
  </div>
</template>
<script>
import * as firebase from 'firebase/app';
import 'firebase/database';

export default {
  name: 'home',
  props: ['user'],
  data() {
    return {
      viewing: null,
      userData: null,
    };
  },
  components: {
  },
  mounted() {
    this.viewing = this.$route.params.user;
    firebase.database().ref('users').once('value', (snapshot) => {
      this.userData = Object.values(snapshot.val()).filter(user => user.username === this.viewing);
    });
  },
};
</script>
