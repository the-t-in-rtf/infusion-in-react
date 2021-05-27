// Adapted from https://medium.com/@ryoldash/customize-webpack-config-of-react-app-created-with-create-react-app-7a78c7849edc
"use strict";
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = function override (config, env) {
    if (!config.plugins) {
        config.plugins = [];
    }

    let patternDef = { from: 'node_modules/infusion/dist' };
    if (process.env.NODE_ENV !== 'production') {
        patternDef.to = 'dist';
    }

    config.plugins.push(new CopyWebpackPlugin({ patterns: [ patternDef] }));

    return config;
};
