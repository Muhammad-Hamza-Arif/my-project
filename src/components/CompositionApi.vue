
<template>
    <h1>{{ name }}</h1>
    <p>{{ form.lname }}  {{ age }}</p>
  </template>
  
  <script>
  import { reactive, ref, toRefs } from 'vue';
  
  export default {
    name: "HelloWorld",
    setup(){
      const name = ref("hamza");
  
      const form = reactive({
        fname: "zaid",
        lname: "umar",
        age: 12
      })
  
      setTimeout(()=>{
        name.value = "waleed";
        form.lname = "arslan"
      },3000)
      const newData = toRefs(form)
      return {
        name,
        form,
        age: newData.lname
      }
    }
  };
  </script>
  
  <style lang="scss" scoped></style>
  