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
.comment-wrapper
    --waline-border none
    --waline-box-shadow 0 2px 12px 2px #bbb
    .vlogin-btn
        border none !important
</style>