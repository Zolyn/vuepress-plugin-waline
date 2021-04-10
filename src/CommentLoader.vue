<template>
    <component :is="commentComponent" v-if="commentComponent"></component>
</template>

<script>
export default {
    data() {
        return {
            commentComponent: null
        }
    },
    mounted() {
        import('./Comment').then(module => {
            this.commentComponent = module.default;
        });
    }
}
</script>

<style scoped>

</style>