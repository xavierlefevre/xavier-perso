module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'public/app.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015'],
        },
      },
    ],
  },
};
