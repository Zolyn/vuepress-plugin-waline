module.exports = {
    extends: ['alloy', 'alloy/vue'],
    env: {},
    globals: {
        ZOLYN_WALINE_PLUGIN_CONFIG: true,
        ZOLYN_WALINE_MAIN_CONFIG: true,
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
