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

<style lang="stylus">
#comment-wrapper
    .vpanel
        box-shadow 0 0 8px 4px #dcdcdc
        border-radius 16px
        .vwrap
            border-radius 16px
</style>