<template>
    <components :is="commentComponent" v-if="commentComponent"></components>
</template>

<script>
export default {
    data() {
        return {
            commentComponent: null
        }
    },
    mounted() {
        switch (CM_TYPE) {
            case 'waline': {
                import('./Waline').then(module => {
                    this.commentComponent = module.default;
                });
                break;
            }
            case 'minivaline': {
                import('./Waline').then(module => {
                    this.commentComponent = module.default;
                });
                break;
            }
            default: {
                import('./Waline').then(module => {
                    this.commentComponent = module.default;
                });
                break;
            }
        }
    }
}
</script>

<style scoped>

</style>