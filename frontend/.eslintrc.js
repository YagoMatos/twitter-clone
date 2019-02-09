module.exports = {

    "env": {
        "browser": true,
        "es6": true,
        "jest": true
    },
    "extends": "eslint:recommended",
    "parser": "babel-eslint",
    "globals": { fetch: false },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true,
            
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "indent": [
            2,
            4
        ],
        "linebreak-style": [
            2,
            "unix"
        ],
        "quotes": [
            2,
            "single"
        ],
        "semi": [
            2,
            "always"
        ],
        "react/jsx-wrap-multilines": 0,
        "react/jsx-filename-extension": 0,
        "no-use-before-define": 0,
        "react/prop-types": 0,
    }
};
