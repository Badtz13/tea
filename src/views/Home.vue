<template>
  <div>
    <h1 class="text-gray-600 text-xl p-8"> home page content goes here ~ </h1>
    <!-- <div v-if="user">{{user}}</div> -->
  </div>
</template>

<script>

export default {
  name: 'home',
  props: {
    user: Object,
  },
  data() {
    return {};
  },
  components: {
  },
  mounted() {
  },
};
</script>
