<template>
  <div>
    home
    <div v-if="user">{{user}}</div>
  </div>
</template>

<script>

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
