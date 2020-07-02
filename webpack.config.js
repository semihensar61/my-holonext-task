
module.exports = {
    entry: [
      './src/index.js'
    ],
    output: {
      path: __dirname + '/public',
      publicPath: '/',
      filename: 'bundle.js'
    },
    devServer: {
      contentBase: './public'
    },
    module: {
        rules: [
          {
            test: /\.js$|jsx/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    babelrc: false,
                    presets: ['@babel/preset-env', '@babel/react',{
                          'plugins': ['@babel/plugin-proposal-class-properties']}]
                }
            }
          },
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          }
        ]
      },
      resolve: {
        extensions: ['*', '.js', '.jsx']
      }
  };