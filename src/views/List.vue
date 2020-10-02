<template>
  <div>
    <router-link :to="`/user/${viewing}/profile`">Back to profile</router-link>
    <Tea v-for="tea in listData" :key="tea.name" :data="tea"/>
  </div>
</template>

<script>

import Tea from '@/components/Tea.vue';

import * as firebase from 'firebase/app';
import 'firebase/database';

export default {
  name: 'Profile',
  components: {
    Tea,
  },
  data() {
    return {
      viewing: null,
      listData: null,
    };
  },
  mounted() {
    this.viewing = this.$route.params.user;
    firebase.database().ref('users').once('value', (snapshot) => {
      const userData = Object.values(snapshot.val()).filter(user => user.username === this.viewing);
      this.listData = userData[0].teas;
    });
  },
};
</script>
