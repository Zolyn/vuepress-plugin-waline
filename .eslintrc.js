module.exports = {
    extends: ['alloy', 'alloy/vue'],
    env: {},
    globals: {
        PLUGIN_CONFIG: true,
        COMMENT_CONFIG: true,
    },
    rules: {
        "vue/component-tags-order": ["error", {
            "order": [
                [
                    "template",
                    "script"
                ],
                "style"
            ]
        }]
    },
};
