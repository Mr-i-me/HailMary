module.exports = {
    bracketSpacing: true,
    jsxBracketSameLine: false,
    printWidth: 150,
    semi: true,
    singleQuote: true,
    trailingComma: 'all',
    "extends": ["react-app"],
    "rules": {
        "react/self-closing-comp": [
            "error",
            {
                "component": true,
                "html": true
            }
        ]
    }
};