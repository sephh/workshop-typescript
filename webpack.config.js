const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: path.join(__dirname, '/app.ts'),
    output: {
        filename: 'app.js',
        path: __dirname
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            },
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
    ]
};