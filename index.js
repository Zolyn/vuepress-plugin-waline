const { resolve } = require('path');
module.exports = (opts) => ({
    define() {
        return {
            PLUGIN_CONFIG: opts.plugin,
            COMMENT_CONFIG: opts.comment
        };
    },
    name: '@Zolyn/vuepress-plugin-waline',
    enhanceAppFiles: resolve(__dirname, './src/enhanceAppFile.js'),
    globalUIComponents: 'CommentLoader'
});
