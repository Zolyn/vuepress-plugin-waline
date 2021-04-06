module.exports = {
    extends: ['alloy', 'alloy/vue'],
    env: {},
    globals: {
        CM_ID: true,
        CM_CONFIG: true,
        CM_TYPE: true,
        CM_PNODE: true
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
