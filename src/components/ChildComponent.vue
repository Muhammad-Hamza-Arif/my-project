<template>
    <h1>{{ name }}</h1>
</template>

<script>
    export default {
        name: "ChildComponent",
        props:{
            name: String
        }
    }
</script>

<style lang="scss" scoped>

</style>