<template>
    <div id="@zolyn/vuepress-plugin-waline" class="config.type"></div>
</template>

<script>
const Waline = require('@waline/client');
const MiniValine = require('minivaline');

export default {
    data() {
        return {
            id: PLUGIN_CONFIG.id || 'comment-wrapper',
            pNode: PLUGIN_CONFIG.parentNode || '.page',
            type: PLUGIN_CONFIG.type || 'Waline',
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
                let commentContainer = document.querySelector(`#${this.id}`);
                if (commentContainer) {
                    post.removeChild(commentContainer);
                }
                commentContainer = document.createElement('div');
                commentContainer.id = this.id;
                post.appendChild(commentContainer);
                switch (this.type) {
                    case 'Waline': {
                        // eslint-disable-next-line no-new
                        new Waline({
                            el: `#${this.id}`,
                            ...this.comment
                        });
                        break;
                    }
                    case 'MiniValine': {
                        // eslint-disable-next-line no-new
                        new MiniValine({
                            el: `#${this.id}`,
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

<style scoped></style>
