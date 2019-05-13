// https://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    parserOptions: {
        parser: 'babel-eslint',
        //设置"script"（默认）或"module"如果你的代码是在ECMAScript中的模块。
        sourceType: 'module'
    },
    env: {
        browser: true,
    },
    extends: [
        // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
        // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
        'plugin:vue/essential',
        // https://github.com/standard/standard/blob/master/docs/RULES-en.md
        'standard'
    ],
    // required to lint *.vue files
    plugins: [
        'vue',
        'html'
    ],
    // add your custom rules here
    rules: {
        // allow paren-less arrow functions
        'arrow-parens': 0,
        // allow async-await
        'generator-star-spacing': 0,
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
        "no-unused-vars": [2, {
            // 允许声明未使用变量
            "vars": "local",
            // 参数不检查
            "args": "none"
        }],
        // 关闭语句强制分号结尾
        "semi": [0],
        //空行最多不能超过100行
        "no-multiple-empty-lines": [0, {"max": 100}],
        //关闭禁止混用tab和空格
        "no-mixed-spaces-and-tabs": [0],
        "indent": [
            'error',
            4,
            {
                SwitchCase: 1,
                flatTernaryExpressions: true
            }
        ],
        "space-before-function-paren": ["error", "never"]
    }
}
