<template>
    <div id="@zolyn/vuepress-plugin-waline" class="waline"></div>
</template>

<script>
const Waline = require('@waline/client');
export default {
    mounted() {
        this.$nextTick(() => {
            this.initComment();
            this.$router.afterEach((to, from) => {
                if (to.path !== from.path) {
                    console.log(`DEBUG: Path changed: ${from.path} -> ${to.path}`);
                    this.initComment();
                }
            });
        });
    },
    methods: {
        initComment() {
            const post = document.querySelector(CM_PNODE);
            if (post && !this.$frontmatter.disableComment) {
                let commentContainer = document.querySelector('#' + CM_ID);
                if (commentContainer) {
                    post.removeChild(commentContainer);
                }
                commentContainer = document.createElement('div');
                commentContainer.id = CM_ID;
                post.appendChild(commentContainer);
                // eslint-disable-next-line no-new
                new Waline({
                    el: '#' + CM_ID,
                    ...CM_CONFIG
                });
            }
        }
    }
};
</script>

<style scoped></style>
