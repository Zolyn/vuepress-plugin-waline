<template>
    <div id="@zolyn/vuepress-plugin-waline" :class="type"></div>
</template>

<script>
const Waline = require('@waline/client');
const MiniValine = require('minivaline');

export default {
    data() {
        return {
            pNode: PLUGIN_CONFIG.parentNode || '.page',
            type: PLUGIN_CONFIG.type || 'waline',
            isDebug: PLUGIN_CONFIG.debug || false,
            comment: COMMENT_CONFIG
        }
    },
    mounted() {
        this.$nextTick(() => {
            this.initComment();
            this.$router.afterEach((to, from) => {
                this.$nextTick(() => {
                    if (to.path !== from.path) {
                        if (this.isDebug) {
                            console.log(`DEBUG: Path changed: ${from.path} -> ${to.path}`);
                        }

                        this.initComment();
                    }
                });
            });
        });
    },
    methods: {
        initComment() {
            const post = document.querySelector(this.pNode);
            if (post && !this.$frontmatter.disableComment) {
                const el = this.comment.el;
                let commentContainer = document.querySelector(`${el}`);
                if (commentContainer) {
                    post.removeChild(commentContainer);
                }

                commentContainer = document.createElement('div');
                commentContainer.id = el.slice(1, el.length);
                post.appendChild(commentContainer);
                switch (this.type) {
                    case 'waline': {
                        // eslint-disable-next-line no-new
                        new Waline({ ...this.comment });
                        break;
                    }
                    case 'minivaline': {
                        // eslint-disable-next-line no-new
                        new MiniValine({
                            backend: 'waline',
                            ...this.comment
                        });
                        break;
                    }
                    default: {
                        console.log('ERROR: Unsupported comment type.');
                        break;
                    }
                }

                if (this.isDebug) {
                    console.log(`DEBUG: Comment initialized. [${Math.floor(Math.random() * 100)}]`);
                }
            }
        }
    }
};
</script>

<style scoped>
</style>
