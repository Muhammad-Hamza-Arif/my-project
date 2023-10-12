<template>
  <p v-if="show">if statement</p>
  <p v-else>else statement</p>
  <p class="asd" v-show="false">show statement</p>
  <p>{{ name }}</p>
</template>

<script>
export default {
  name: "ConditionalRendering",
  data() {
    return {
      show: false,
    };
  },
};
</script>

<style scoped>
.asd {
  display: block !important;
  opacity: 1 !important;
}
</style>
