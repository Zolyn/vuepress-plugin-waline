<template>
    <div id="@zolyn/vuepress-plugin-waline" :class="commentSystem"></div>
</template>

<script>
const Waline = require('@waline/client');
const MiniValine = require('minivaline');

export default {
    data() {
        return {
            // eslint-disable-next-line no-undef
            commentSystem: COMMENT_OPTIONS.type,
        };
    },
    mounted() {
        this.initComment();
        this.$router.afterEach((to, from) => {
            if (to.path !== from.path) {
                console.log('DEBUG: Path changed.');
                this.initComment();
            } else {
                console.log('DEBUG: Page refreshed.');
            }
        });
    },
    methods: {
        initComment() {
            const post = document.querySelector('.page');
            let commentContainer = document.querySelector('#comment-wrapper');
            if (post && !this.$frontmatter.disableComment) {
                if (commentContainer) {
                    post.removeChild(commentContainer);
                }
                commentContainer = document.createElement('div');
                commentContainer.id = 'comment-wrapper';
                post.appendChild(commentContainer);
                switch (this.commentSystem) {
                    case 'waline': {
                        this.createWaline();
                        break;
                    }
                    case 'minivaline': {
                        this.createMiniValine();
                        break;
                    }
                    default: {
                        this.createWaline();
                        break;
                    }
                }
            }
        },
        createWaline() {
            // eslint-disable-next-line no-new
            new Waline({
                el: '#comment-wrapper',
                // eslint-disable-next-line no-undef
                ...COMMENT_OPTIONS.config,
            });
        },
        createMiniValine() {
            // eslint-disable-next-line no-new
            new MiniValine({
                el: '#comment-wrapper',
                // eslint-disable-next-line no-undef
                ...COMMENT_OPTIONS.config,
            });
        },
    },
};
</script>

<style scoped></style>
