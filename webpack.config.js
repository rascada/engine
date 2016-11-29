const path = require('path');

module.exports = {
    entry: {
        engine: ['./engine.ts'],
    },

    output: {
        path: 'build',
        filename: 'engine.bundle.js',
    },

    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.js'],
    },

    module: {
        loaders: [
            { test: /\.ts$/, loader: 'ts' },
        ]
    }
};