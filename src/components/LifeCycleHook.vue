<template>
    <h1>{{ name }}</h1>
</template>

<script>
export default {
  name: "LifeCycleHook",
  data() {
    console.warn("created");
    return {
      name: "hamza"
    };
  },
  beforeCreate() {
    alert("beforeCreate");
  },
  created() {
    this.name = "waleed";
    alert("created");
  },
  beforeMount() {
    console.warn("beforeMount", this.$el);
  },
  mounted() {
    console.warn("mounted", this.$el);
  },
};
</script>

<style lang="scss" scoped></style>
