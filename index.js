const { resolve } = require('path');
module.exports = (opts) => ({
    define() {
        return {
            CM_TYPE: opts.type || 'waline',
            CM_PNODE: opts.parentNode || '.page',
            CM_ID: opts.id || 'comment-wrapper',
            CM_CONFIG: opts.config
        };
    },
    name: '@Zolyn/vuepress-plugin-waline',
    enhanceAppFiles: resolve(__dirname, './src/enhanceAppFile.js'),
    globalUIComponents: 'CommentLoader'
});
