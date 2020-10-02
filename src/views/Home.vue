<template>
  <div>
    <h1 class="text-gray-600 text-xl p-8"> home page content goes here ~ </h1>
    <p class="text-3xl">  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum ratione accusantium sint illum et, temporibus excepturi, consequuntur, optio vitae est quo amet impedit. Sequi, placeat! Ea animi tempora amet non?</p>
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
