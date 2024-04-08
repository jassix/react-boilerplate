const {
    configure,
    presets
} = require("eslint-kit");

module.exports = configure({
    allowDebug: process.env.NODE_ENV !== "production",

    presets: [
        presets.imports({
            sort: {
                newline: true,
        
                groups: [
                    ['^\\u0000'],
                    ['^(child_process|crypto|events|fs|http|https|os|path)(/.*)?$', '^@?\\w'],
                    ['^~/app', '^~/pages', '^~/widgets', '^~/features', '^~/entities', '^~/shared', '^'],
                    ['^\\.'],
                  ]
              },
        }),
        presets.node(),
        presets.prettier(),
        presets.typescript(),
        presets.react({
            newJSXTransform: true,
        }),
        presets.effector()
    ],

    extend: {
        rules: {
            "react/no-unknown-property": "off"
        }
    }
});