<layout>Default</layout>

<script lang="ts">
import YourComponent from '@components/YourComponent.vue';
export default {
    name: 'Home',
    components: {
        YourComponent,
    },
}
</script>

<template>
    <h1 class="bg-red-500">Hello world :)</h1>
    <YourComponent title="Hello from Home.vue" />
</template>

<style lang="scss" scoped>

</style>
