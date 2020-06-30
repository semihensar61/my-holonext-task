
module.exports = {
    entry: [
      './src/index.js'
    ],
    output: {
      path: __dirname + '/dist',
      publicPath: '/',
      filename: 'bundle.js'
    },
    devServer: {
      contentBase: './dist'
    },
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    babelrc: false,
                    presets: ['@babel/preset-env']
                }
            }
          }
        ]
      },
      resolve: {
        extensions: ['*', '.js', '.jsx']
      }
  };