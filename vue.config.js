// eslint-disable-next-line no-undef
const path = require('path');
// eslint-disable-next-line no-undef
const ifs = require('os').networkInterfaces();

module.exports = {
  pages: {
    index: {
      entry   : ['./src/main.js'],
      template: './public/index.html'
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        // eslint-disable-next-line no-undef
        '@': path.join(__dirname, 'src/')
      }
    }
  },
  devServer: {
    host: (() => {
      let result = Object.keys(ifs)
        .map(x => ifs[x].filter(x => x.family === 'IPv4' && !x.internal)[0])
        .filter(x => x)[0].address;
      return result;
    })(),
    port: 8080
  },
  publicPath: '/baseTemplate',
  assetsDir : 'assets'
};