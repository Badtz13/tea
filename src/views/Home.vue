<template>
  <div>
    home
    <div v-if="user">{{user}}</div>
  </div>
</template>

<script>
// import * as firebase from 'firebase/app';
// import 'firebase/auth';

export default {
  name: 'home',
  props: ['user'],
  data() {
    return {};
  },
  components: {
  },
  mounted() {
  },
};
</script>
