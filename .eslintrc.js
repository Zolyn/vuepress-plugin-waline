module.exports = {
    extends: ['alloy', 'alloy/vue'],
    env: {},
    globals: {},
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
