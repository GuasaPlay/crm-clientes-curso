module.exports = {
    globals: {
        defineProps: "readonly",
        defineEmits: "readonly",
    },
    env: {
        node: true,
    },
    extends: ["eslint:recommended", "plugin:vue/vue3-recommended", "prettier"],
    rules: {
        // override/add rules settings here, such as:
        // 'vue/no-unused-vars': 'error'
        "vue/require-default-prop": "off",
        "vue/require-default-emit": "off",
        "vue/script-setup-uses-vars": "error",
        "vue/multi-word-component-names": "off",
    },
};
