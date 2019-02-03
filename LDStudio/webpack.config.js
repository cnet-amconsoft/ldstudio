const path = require('path');
module.exports = {
    mode: 'development',
    entry: { main: './wwwroot/assets/app.js' },
    output: {
        publicPath: "assets/",
        path: path.resolve(__dirname, './wwwroot/assets/dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        "presets": ["@babel/preset-env", "@babel/preset-react"]
                    }
                }
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
        mainFields: ['index']
    }
};