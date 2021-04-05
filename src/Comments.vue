<template>
    <div id="@zolyn/vuepress-plugin-waline" :class="commentSystem"></div>
</template>

<script>
export default {
    data() {
        return {
            // eslint-disable-next-line no-undef
            commentSystem: COMMENT_OPTIONS.type,
        };
    },
    mounted() {
        const instance = this;
        this.$nextTick(() => {
            initComment()
        });

        this.$router.afterEach((to, from) => {
            this.$nextTick(() => {
                if (to.path !== from.path) {
                    console.log(`DEBUG: Path changed: ${from.path} -> ${to.path}`);
                    initComment();
                }
            });
        });

        function initComment() {
            const post = document.querySelector('.page');
            let commentContainer = document.querySelector('#comment-wrapper');
            if (post && !instance.$frontmatter.disableComment) {
                if (commentContainer) {
                    post.removeChild(commentContainer);
                }
                commentContainer = document.createElement('div');
                commentContainer.id = 'comment-wrapper';
                post.appendChild(commentContainer);
                switch (instance.commentSystem) {
                    case 'waline': {
                        createWaline();
                        break;
                    }
                    case 'minivaline': {
                        createMiniValine();
                        break;
                    }
                    default: {
                        createWaline();
                        break;
                    }
                }
            }
        }

        function createWaline() {
            const Waline = require('@waline/client');
            // eslint-disable-next-line no-new
            new Waline({
                el: '#comment-wrapper',
                // eslint-disable-next-line no-undef
                ...COMMENT_OPTIONS.config,
            });
        }

        function createMiniValine() {
            const MiniValine = require('minivaline');
            // eslint-disable-next-line no-new
            new MiniValine({
                el: '#comment-wrapper',
                // eslint-disable-next-line no-undef
                ...COMMENT_OPTIONS.config,
            });
        }
    }
};
</script>

<style scoped></style>
