const path = require('path');

module.exports = {
  entry: './src/Light-JS.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js'
  }
};
