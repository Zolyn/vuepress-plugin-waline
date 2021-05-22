const { resolve } = require('path');
module.exports = (opts) => ({
    define() {
        return {
            ZOLYN_WALINE_PLUGIN_CONFIG: opts.plugin || {},
            ZOLYN_WALINE_MAIN_CONFIG: opts.comment
        };
    },
    name: '@Zolyn/vuepress-plugin-waline',
    enhanceAppFiles: resolve(__dirname, './src/enhanceAppFile.js'),
    globalUIComponents: 'CommentLoader'
});
