const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
    configureWebpack: {
        entry: './src/main.js', // Entry point of your application
        module: {
            rules: [
                // Rule for processing Vue single-file components (.vue files)
                {
                    test: /\.vue$/,
                    loader: 'vue-loader'
                },
                // Rules for processing JavaScript files using Babel
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                },
                // Rules for processing CSS files
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader']
                },
            ]
        },

        plugins: [
            new VueLoaderPlugin(),
        ],
        resolve: {
            alias: {
                'vue$': 'vue/dist/vue.esm.js'
            },
            extensions: ['.mjs', '.js', '.jsx', '.vue', '.json', '.wasm']
        },
    },
    outputDir: 'dist',



};