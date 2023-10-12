<template>
    <div>
     <ChildComponent name="hamza"/>
    </div>
</template>

<script>
import ChildComponent from './ChildComponent.vue';
    export default {
        name: "ParentComponent",
        components:{
            ChildComponent
        }
    }
</script>

<style lang="scss" scoped>

</style>