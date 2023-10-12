<template>
  <form @submit.prevent="login">
    <label>Email: </label>
    <input type="email" placeholder="Enter Email..." required v-model="form.email" />
    <br />
    <br />
    <label>Password: </label>
    <input
      type="password"
      placeholder="Enter password..."
      v-model="form.password"
    />
    <br />
    <br />
    <button  type="submit">Login</button>
  </form>
</template>

<script>
export default {
  name: "FormHandling",
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    login(event) {
      event.preventDefault();

      console.warn("login function", this.form);
    },
  },
};
</script>

<style lang="scss" scoped></style>
