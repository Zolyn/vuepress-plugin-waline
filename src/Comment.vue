<template>
    <div id="@zolyn/vuepress-plugin-waline" class="config.type"></div>
</template>

<script>
const Waline = require('@waline/client');
const MiniValine = require('minivaline');

export default {
    data() {
        return {
            config: PLUGIN_CONFIG,
            comment: COMMENT_CONFIG
        }
    },
    mounted() {
        this.$nextTick(() => {
            this.initComment();
            this.$router.afterEach((to, from) => {
                this.$nextTick(() => {
                    if (to.path !== from.path) {
                        console.log(`DEBUG: Path changed: ${from.path} -> ${to.path}`);
                        this.initComment();
                    }
                });
            });
        });
    },
    methods: {
        initComment() {
            const post = document.querySelector(this.config.parentNode);
            const { id } = this.config;
            if (post && !this.$frontmatter.disableComment) {
                let commentContainer = document.querySelector(`#${id}`);
                if (commentContainer) {
                    post.removeChild(commentContainer);
                }
                commentContainer = document.createElement('div');
                commentContainer.id = id;
                post.appendChild(commentContainer);
                switch (this.config.type) {
                    case 'Waline': {
                        // eslint-disable-next-line no-new
                        new Waline({
                            el: `#${id}`,
                            ...this.comment
                        });
                        break;
                    }
                    case 'MiniValine': {
                        // eslint-disable-next-line no-new
                        new MiniValine({
                            el: `#${id}`,
                            ...this.comment
                        });
                        break;
                    }
                    default: {
                        console.log('ERROR: Unsupported comment type.');
                        break;
                    }
                }
            }
        }
    }
};
</script>

<style scoped></style>
