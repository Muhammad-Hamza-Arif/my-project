<template>
  <h1>{{ getValue }}</h1>
  <h1>{{ getData() }}</h1>
  <button @click="myState++">Update</button>
  <button @click="dollar++">increase dollar</button>
  {{ myState }}
</template>

<script>
export default {
  name: "ComputedProperties",
  data() {
    return {
      dollar: 100,
      rupeesval: 20,
      discount: 7,
      myState: 342,
    };
  },
  methods: {
    getData() {
      console.log("asdsad");
      return this.dollar * this.rupeesval - this.discount;
    },
  },
  computed: {
    getValue() {
      console.log("reda");
      return this.getData();
    },
  },
};
</script>

<style></style>
