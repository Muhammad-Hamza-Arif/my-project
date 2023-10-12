<template>
    <h1>{{ count }}</h1>
    <button @click="count++">+</button>
    <button @click="count--">-</button>
  </template>
  
  <script>
  export default {
    name: "Watchers",
    data() {
      return {
        count: 0,
      };
    },
    watch: {
      count(curr, prev) {
        console.log(curr, prev);
      },
    },
  };
  </script>
  
  <style lang="scss" scoped></style>