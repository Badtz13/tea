<template>
  <div>
    <header class="w-full h-16 bg-white text-teal-700 border-b-2 border-teal-700 text-2xl flex flex-row justify-between">
        <h1 class="m-3 capitalize">{{viewing}}'s profile</h1>
        <router-link class="m-3 w-10" :to="`/user/${viewing}/list`">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
        </router-link>
    </header>
    <main>

    </main>
  </div>
</template>

<script>

import * as firebase from 'firebase/app';
import 'firebase/database';

export default {
  name: 'Profile',
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
