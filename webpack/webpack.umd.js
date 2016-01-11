import webpack from 'webpack';

export default {
  entry: {
    'react-overlays': './src/index.js'
  },

  output: {
    path: './dist',
    filename: '[name].js',
    library: 'ReactOverlays',
    libraryTarget: 'umd'
  },

  module: {
    loaders: [
      { test: /\.js/, loader: 'babel-loader', exclude: /node_modules/ },
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
      }
    })
  ],

  externals: [
    {
      'react': {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react'
      }
    },
    {
      'react-dom': {
        root: 'ReactDOM',
        commonjs2: 'react-dom',
        commonjs: 'react-dom',
        amd: 'react-dom'
      }
    }
  ]
}
