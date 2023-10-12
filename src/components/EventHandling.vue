<template>
  <h1>EventHandling</h1>
  <button @click="getData('ali', $event)">Ali</button>
  <button @click="getData('qasim', $event)">Qasim</button>
</template>

<script>
export default {
  name: "EventHandling",
  methods: {
    getData(data, event) {
      console.log({ data, event });
    },
  },
};
</script>

<style lang="scss" scoped></style>
