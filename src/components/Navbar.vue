<template>
  <nav class="w-full h-16 bg-white text-teal-700 border-t-2 border-teal-700 text-2xl flex flex-row justify-around bottom-0 fixed ">
    <router-link class="mt-3 w-10" to="/home">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" stroke-width=1.2 d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    </router-link>

    <router-link class="mt-3 w-10" v-if="auth" :to="'/user/' + user.username + '/teas/'">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" stroke-width=1.2 d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    </router-link>

    <router-link class="mt-3 w-10" v-if="auth" :to="'/user/' + user.username">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" stroke-width=1.2 d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    </router-link>

    <router-link class="mt-3 w-10" v-else to="/signup">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" stroke-width=1.2 d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
      </svg>
    </router-link>

    <!-- {{user}} -->
  </nav>
</template>

<script>

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
};
</script>
