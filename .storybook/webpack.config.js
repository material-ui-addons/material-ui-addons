const path = require('path')

module.exports = {
  plugins: [

  ],
  module: {
    loaders: [

    ],
  },
  resolve: {
    fallback: [path.join(__dirname, '..', '..', 'node_modules')],
    modulesDirectories: [
      path.resolve(),
      'src',
      'node_modules',
      path.join(__dirname, '..', '..', 'node_modules'),
    ],
    extensions: ['', '.json', '.js'],
  },
}
