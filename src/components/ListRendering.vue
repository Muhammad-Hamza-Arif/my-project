<template>
  <li
    v-for="(fruite, index) in fruites"
    :key="index"
  >
    {{ fruite }} index: {{ index }}
  </li>
</template>

<script>
export default {
  name: "ListRendering",
  data() {
    return {
      fruites: ["Apple", "Apricot", "Avocado", "Banana", "Blackberry"],
    };
  },
};
</script>

<style lang="scss" scoped></style>
