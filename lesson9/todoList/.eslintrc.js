module.export = {
    extends: 'eslint-config-airbnb-base',
    rules: {
        'no-console': 2,
        'import/prefer-defaul-export':0,
        // "prettier/prettier": "error"
       
    },
    env: {
         browser: true,
        // "es6": true,
     
    },
   
    parserOptions: {
        ecmaVersion: 10,
   
        sourceType: 'module',
    

//         "ecmaFeatures": {
//             "jsx": true,
//             "modules": true
//         }
//     },
//     "plugins": ["prettier"],
//   "extends": ["prettier"],
    }
}