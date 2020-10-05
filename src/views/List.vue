<template>
  <div>
    <header class="w-full h-16 bg-white text-teal-700 border-b-2 border-teal-700 text-2xl flex flex-row justify-between">
        <h1 class="m-3 capitalize">{{viewing}}'s list</h1>
        <router-link class="m-3 w-10" :to="`/user/${viewing}/profile`">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
            </svg>
        </router-link>
    </header>
    <main>
        <section class="bg-white m-2 shadow">
            <Tea v-for="tea in listData" :key="tea.name" :data="tea"/>
        </section>
    </main>
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
