<template>
  <!-- <h1>{{ name }}</h1>
  <h1>{{ heading }}</h1>
  <button @click="name = 'waleed'">Name Change</button>
  <button @click="heading = 'Heading 2'">Heading Change</button><br />
  <input type="text" v-model="form.fname" />
  <input type="text" v-model="form.lname" />
  <input type="text" v-model="form.address.city" /> -->
  <div>
    {{ myState.name }}
  </div>
  <button @click="fnA">Button A</button>
  <button @click="fnB">Button B</button>
</template>

<script>
import { reactive, ref, watch } from "vue";
// import _ from "lodash";

export default {
  name: "HelloWorld",
  setup() {
    const name = ref("hamza");

    const heading = ref("Heading 1");

    const form = reactive({
      fname: "",
      lname: "",
      age: 12,
      address: {
        city: "",
        pinCode: "",
      },
    });

    // watch(name,(newVal,oldVal)=>{
    //   console.log(newVal ,"===", oldVal)
    // },{immediate:true})

    // watch([name,heading],(newVal,oldVal)=>{
    //   console.log(newVal ,"===", oldVal)
    // })

    // watch(()=>{
    //   return {...form}
    // },(newVal,oldVal)=>{
    //   console.log(newVal ,"===", oldVal)
    // })

    // watch(()=>{
    //   return form.fname
    // },(newVal,oldVal)=>{
    //   console.log(newVal ,"===", oldVal)
    // })

    // watch(()=>{
    //   return _.cloneDeep(form.address);
    // },(newVal,oldVal)=>{
    //   console.log(newVal ,"===", oldVal)
    // },{
    //   deep:true
    // })
    const myState = ref({
      name: "default name",
      class: 4,
    });
    watch(myState, () => {
      console.log("value has changed");
    });
    function fnA() {
      myState.value.name = myState.value.name + "a";
    }
    function fnB() {
      const newObj = { ...myState.value };
      newObj.name = newObj.name + "a";
      myState.value = newObj;
    }
    return {
      name,
      form,
      heading,
      fnA,
      fnB,
      myState,
    };
  },
};
</script>

<style lang="scss" scoped></style>
